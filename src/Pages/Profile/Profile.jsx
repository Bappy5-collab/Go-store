import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaBoxOpen, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSignOutAlt, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import Navbar from '../../Components/Navbar/Navbar';
import SubTop from '../../Components/Navbar/SubTop/SubTop';
import Sub from '../../Components/Footer/Sub';
import Footer from '../../Components/Footer/Footer';
import { useAuth } from '../../Context/AuthContext';
import { useToast } from '../../Components/Toast/Toast';
import { getProfile, updateProfile, getOrders } from '../../lib/db';

const emptyProfile = { full_name: '', phone: '', address: '', city: '', country: '' };

const Profile = () => {
    const navigate = useNavigate();
    const { user, loading, signOut } = useAuth();
    const { showToast } = useToast();

    const [profile, setProfile] = useState(emptyProfile);
    const [form, setForm] = useState(emptyProfile);
    const [editing, setEditing] = useState(false);
    const [saving, setSaving] = useState(false);
    const [orders, setOrders] = useState([]);
    const [fetching, setFetching] = useState(true);

    // login na thakle redirect
    useEffect(() => {
        if (!loading && !user) {
            navigate('/');
        }
    }, [loading, user, navigate]);

    // profile + orders load
    useEffect(() => {
        if (!user) return;
        let active = true;
        (async () => {
            setFetching(true);
            const [{ data: prof }, { data: ord }] = await Promise.all([
                getProfile(user.id),
                getOrders(user.id),
            ]);
            if (!active) return;
            if (prof) {
                const p = {
                    full_name: prof.full_name || '',
                    phone: prof.phone || '',
                    address: prof.address || '',
                    city: prof.city || '',
                    country: prof.country || '',
                };
                setProfile(p);
                setForm(p);
            }
            setOrders(ord || []);
            setFetching(false);
        })();
        return () => { active = false; };
    }, [user]);

    const handleSave = async () => {
        setSaving(true);
        const { data, error } = await updateProfile(user.id, form);
        setSaving(false);
        if (error) {
            showToast(error.message || 'Could not update profile', 'error');
            return;
        }
        const p = {
            full_name: data.full_name || '',
            phone: data.phone || '',
            address: data.address || '',
            city: data.city || '',
            country: data.country || '',
        };
        setProfile(p);
        setForm(p);
        setEditing(false);
        showToast('Profile updated!', 'success');
    };

    const handleLogout = async () => {
        await signOut();
        showToast('Logged out successfully', 'success');
        navigate('/');
    };

    const totalSpent = orders.reduce((sum, o) => sum + Number(o.total), 0);
    const totalItems = orders.reduce(
        (sum, o) => sum + (o.items || []).reduce((s, i) => s + (i.quantity || 0), 0),
        0
    );

    if (loading || !user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-500">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <SubTop />
            <Navbar />
            <div className="px-4 sm:px-6 lg:px-8 py-8 pb-16">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">My Account</h1>

                {/* Summary cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-5">
                        <p className="text-sm text-gray-500">Total Orders</p>
                        <p className="text-2xl font-bold text-gray-900">{orders.length}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-5">
                        <p className="text-sm text-gray-500">Items Bought</p>
                        <p className="text-2xl font-bold text-gray-900">{totalItems}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-5">
                        <p className="text-sm text-gray-500">Total Spent</p>
                        <p className="text-2xl font-bold text-[#d44145]">${totalSpent.toFixed(2)}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Profile card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <FaUser className="text-[#d44145]" /> Profile
                                </h2>
                                {!editing && (
                                    <button
                                        onClick={() => setEditing(true)}
                                        className="text-sm text-[#d44145] flex items-center gap-1 hover:underline"
                                    >
                                        <FaEdit /> Edit
                                    </button>
                                )}
                            </div>

                            {/* Email (read-only) */}
                            <div className="mb-4">
                                <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                                    <FaEnvelope /> Email
                                </label>
                                <p className="text-gray-800 break-all">{user.email}</p>
                            </div>

                            {editing ? (
                                <div className="space-y-3">
                                    {[
                                        { name: 'full_name', label: 'Full Name', icon: <FaUser /> },
                                        { name: 'phone', label: 'Phone', icon: <FaPhone /> },
                                        { name: 'address', label: 'Address', icon: <FaMapMarkerAlt /> },
                                        { name: 'city', label: 'City', icon: <FaMapMarkerAlt /> },
                                        { name: 'country', label: 'Country', icon: <FaMapMarkerAlt /> },
                                    ].map((f) => (
                                        <div key={f.name}>
                                            <label className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                                                {f.icon} {f.label}
                                            </label>
                                            <input
                                                type="text"
                                                value={form[f.name]}
                                                onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d44145] focus:border-transparent"
                                            />
                                        </div>
                                    ))}
                                    <div className="flex gap-2 pt-2">
                                        <button
                                            onClick={handleSave}
                                            disabled={saving}
                                            className="flex-1 bg-gradient-to-r from-pink-500 to-orange-400 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                                        >
                                            <FaSave /> {saving ? 'Saving...' : 'Save'}
                                        </button>
                                        <button
                                            onClick={() => { setForm(profile); setEditing(false); }}
                                            className="px-4 bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
                                        >
                                            <FaTimes />
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="space-y-3 text-sm">
                                    <Field icon={<FaUser />} label="Full Name" value={profile.full_name} />
                                    <Field icon={<FaPhone />} label="Phone" value={profile.phone} />
                                    <Field icon={<FaMapMarkerAlt />} label="Address" value={profile.address} />
                                    <Field icon={<FaMapMarkerAlt />} label="City" value={profile.city} />
                                    <Field icon={<FaMapMarkerAlt />} label="Country" value={profile.country} />
                                </div>
                            )}

                            <button
                                onClick={handleLogout}
                                className="w-full mt-6 border border-red-200 text-red-500 py-2 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-red-50"
                            >
                                <FaSignOutAlt /> Logout
                            </button>
                        </div>
                    </div>

                    {/* Order history */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
                                <FaBoxOpen className="text-[#d44145]" /> Order History
                            </h2>

                            {fetching ? (
                                <p className="text-gray-500">Loading orders...</p>
                            ) : orders.length === 0 ? (
                                <div className="text-center py-10">
                                    <FaBoxOpen className="text-4xl text-gray-300 mx-auto mb-3" />
                                    <p className="text-gray-500 mb-4">You haven't placed any orders yet.</p>
                                    <button
                                        onClick={() => navigate('/products')}
                                        className="bg-gradient-to-r from-pink-500 to-orange-400 text-white px-6 py-2 rounded-lg font-semibold"
                                    >
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-5">
                                    {orders.map((order) => (
                                        <div key={order.id} className="border rounded-lg p-4">
                                            <div className="flex flex-wrap justify-between items-center gap-2 mb-3 pb-3 border-b">
                                                <div>
                                                    <p className="text-xs text-gray-500">Order ID</p>
                                                    <p className="text-sm font-mono text-gray-700">
                                                        #{order.id.slice(0, 8).toUpperCase()}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500">Date</p>
                                                    <p className="text-sm text-gray-700">
                                                        {new Date(order.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full capitalize">
                                                    {order.status}
                                                </span>
                                            </div>

                                            <div className="space-y-2">
                                                {(order.items || []).map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-3">
                                                        {item.image && (
                                                            <img
                                                                src={item.image}
                                                                alt={item.title}
                                                                className="w-12 h-12 object-contain bg-gray-50 rounded"
                                                            />
                                                        )}
                                                        <div className="flex-1 min-w-0">
                                                            <p className="text-sm font-medium text-gray-900 truncate">{item.title}</p>
                                                            <p className="text-xs text-gray-500">
                                                                ${Number(item.price).toFixed(2)} × {item.quantity}
                                                            </p>
                                                        </div>
                                                        <p className="text-sm font-semibold text-gray-700">
                                                            ${(Number(item.price) * item.quantity).toFixed(2)}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="flex justify-between items-center mt-3 pt-3 border-t text-sm">
                                                <span className="text-gray-500">
                                                    Subtotal ${Number(order.subtotal).toFixed(2)} + Tax ${Number(order.tax).toFixed(2)}
                                                </span>
                                                <span className="font-bold text-[#d44145] text-base">
                                                    ${Number(order.total).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <Sub />
                <Footer />
            </div>
        </div>
    );
};

const Field = ({ icon, label, value }) => (
    <div>
        <p className="text-xs text-gray-500 flex items-center gap-1">{icon} {label}</p>
        <p className="text-gray-800">{value || <span className="text-gray-400 italic">Not set</span>}</p>
    </div>
);

export default Profile;

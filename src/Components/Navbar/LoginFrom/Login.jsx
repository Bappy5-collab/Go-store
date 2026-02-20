import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FaUser, FaEye, FaEyeSlash, FaKey } from 'react-icons/fa';
import { useToast } from '../../Toast/Toast';

const Login = ({ handleClose, open }) => {
    const { showToast } = useToast();
    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    useEffect(() => {
        if (open) {
            setTimeout(() => setShow(true), 10); // Slight delay to trigger animation
        } else {
            setShow(false);
        }
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
            <div
                className={`bg-white text-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-[700px] mx-4 transform transition-all duration-500 ${show ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                    }`}
            >
                <div>
                    <div className='flex justify-between items-center border-b-2 p-2 mb-10'>
                        <h2 className='text-black'>Login</h2>
                        <CloseIcon onClick={handleClose} className='text-black' />
                    </div>
                    <div>
                        <div className="w-full max-w-full bg-white p-6 rounded-lg  space-y-4">

                            <form onSubmit={(e) => {
                                e.preventDefault();
                                if (formData.username && formData.password) {
                                    showToast('Login successful!', 'success');
                                    setTimeout(() => handleClose(), 1000);
                                } else {
                                    showToast('Please fill in all fields', 'warning');
                                }
                            }}>
                                {/* Username Input */}
                                <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md border">
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={(e) => setFormData({...formData, username: e.target.value})}
                                        placeholder="Username"
                                        className="bg-transparent w-full outline-none text-gray-700"
                                    />
                                    <FaUser className="text-gray-400" />
                                </div>

                                {/* Password Input */}
                                <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md border">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                                        placeholder="Password"
                                        className="bg-transparent w-full outline-none text-gray-700"
                                    />
                                    <button onClick={() => setShowPassword(!showPassword)} type="button">
                                        {showPassword ? (
                                            <FaEyeSlash className="text-gray-400" />
                                        ) : (
                                            <FaEye className="text-gray-400" />
                                        )}
                                    </button>
                                </div>

                                {/* Web Authentication */}
                                <button 
                                    type="button"
                                    onClick={() => showToast('Web authentication feature coming soon!', 'info')}
                                    className="w-full bg-gray-600 text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-700"
                                >
                                    <FaKey />
                                    Web Authentication
                                </button>

                                {/* Log In */}
                                <button type="submit" className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90">
                                    Log In
                                </button>
                            </form>

                            {/* Bottom Links */}
                            <div className="flex justify-between items-start text-xs text-gray-600">
                                <div>
                                    <label className="inline-flex items-center gap-1">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span>Remember Me</span>
                                    </label>
                                    <div>
                                        <a href="#" className="hover:underline block">Create An Account</a>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <a href="#" className="hover:underline block">Forgot Your Password?</a>
                                    <a href="#" className="hover:underline block">Forgot Your Username?</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>





            </div>

        </div>
    );
};

export default Login;

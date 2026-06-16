import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { useToast } from '../../Toast/Toast';
import { useAuth } from '../../../Context/AuthContext';

const Login = ({ handleClose, open }) => {
    const { showToast } = useToast();
    const { signIn, signUp } = useAuth();
    const [show, setShow] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password } = formData;

        if (!email || !password) {
            showToast('Please fill in all fields', 'warning');
            return;
        }
        if (password.length < 6) {
            showToast('Password must be at least 6 characters', 'warning');
            return;
        }

        setSubmitting(true);
        try {
            if (isSignup) {
                const { data, error } = await signUp(email, password);
                if (error) {
                    showToast(error.message, 'error');
                } else if (data?.user && !data?.session) {
                    // email confirmation on thakle session pawa jay na
                    showToast('Account created! Check your email to confirm.', 'success');
                    setTimeout(() => handleClose(), 1500);
                } else {
                    showToast('Account created successfully!', 'success');
                    setTimeout(() => handleClose(), 1000);
                }
            } else {
                const { error } = await signIn(email, password);
                if (error) {
                    showToast(error.message, 'error');
                } else {
                    showToast('Login successful!', 'success');
                    setTimeout(() => handleClose(), 1000);
                }
            }
        } catch (err) {
            showToast(err.message || 'Something went wrong', 'error');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-60 p-4">
            <div
                className={`bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-[700px] mx-4 transform transition-all duration-500 ${show ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                    }`}
            >
                <div>
                    <div className='flex justify-between items-center border-b-2 p-2 mb-6'>
                        <h2 className='text-black'>{isSignup ? 'Create Account' : 'Login'}</h2>
                        <CloseIcon onClick={handleClose} className='text-black cursor-pointer' />
                    </div>
                    <div>
                        <div className="w-full max-w-full bg-white p-6 rounded-lg space-y-4">

                            <form onSubmit={handleSubmit}>
                                {/* Email Input */}
                                <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md border mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="Email"
                                        autoComplete="email"
                                        className="bg-transparent w-full outline-none text-gray-700"
                                    />
                                    <FaEnvelope className="text-gray-400" />
                                </div>

                                {/* Password Input */}
                                <div className="flex items-center bg-gray-100 px-4 py-3 rounded-md border mb-4">
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        placeholder="Password"
                                        autoComplete={isSignup ? 'new-password' : 'current-password'}
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

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-pink-500 to-orange-500 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {submitting
                                        ? 'Please wait...'
                                        : isSignup ? 'Sign Up' : 'Log In'}
                                </button>
                            </form>

                            {/* Toggle Login / Signup */}
                            <div className="text-center text-sm text-gray-600">
                                {isSignup ? (
                                    <span>
                                        Already have an account?{' '}
                                        <button
                                            type="button"
                                            onClick={() => setIsSignup(false)}
                                            className="text-pink-600 font-semibold hover:underline"
                                        >
                                            Log In
                                        </button>
                                    </span>
                                ) : (
                                    <span>
                                        Don't have an account?{' '}
                                        <button
                                            type="button"
                                            onClick={() => setIsSignup(true)}
                                            className="text-pink-600 font-semibold hover:underline"
                                        >
                                            Create An Account
                                        </button>
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

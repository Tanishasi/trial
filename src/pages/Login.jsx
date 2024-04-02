import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
    const [rememberLogin, setRememberLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
const {user,logIn}=UserAuth()
const navigate =useNavigate();
const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
        await logIn(email, password);
        navigate('/profile');
    } catch(err) {
        console.log(err);
    }
};


    return (
        <div className='relative left-[66%] top-[80px] w-[30%]'>
            <div className='flex  top-[72px]   mt-[170px] h-[400px] '>
                <div className='max-w-[350px]   w-full bg-black/70 rounded-lg  p-4' >
                    <div className=' max-w-[320px] m-0 py-8 z-70  '>
                        <h1 className='text-2xl font-bold pl-8 text-white '>Login</h1>
                        <form onSubmit={handleFormSubmit} className='flex flex-col py-4 px-8'>
                            <input
                                className='p-3 my-2 bg-gray-300 rounded'
                                type='email'
                                placeholder='Email'
                                autoComplete='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className='p-3 my-2 bg-gray-300 rounded'
                                type='password'
                                placeholder='Password'
                                autoComplete='current-password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button className='bg-blue-950 py-3 my-6 rounded font-bold text-white'>
                                Login
                            </button>
                            <div className='flex justify-between items-center text-gray-600'>
                                <label>
                                    <input
                                        type='checkbox'
                                        className='mr-2'
                                        checked={rememberLogin}
                                        onChange={(e) => setRememberLogin(!rememberLogin)}
                                    />
                                    Remember me
                                </label>
                                <p>Need Help?</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
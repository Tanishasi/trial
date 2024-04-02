import React from 'react';
import Hero from '../component/Hero';
import Login from './Login';
import Signup from './Signup';
import { UserAuth } from '../context/AuthContext';

const Home = () => {
    const {user}=UserAuth();

    return (
        <>
        {user?.email?(<></>):(<div>
            <Hero /> 
            <Login/>
        </div>)}
        
        </>
    );
}

export default Home;

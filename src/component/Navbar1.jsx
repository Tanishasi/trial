import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar1 = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user?.email ? (
        <div className="flex-col mt-0 pt-0 fixed top-0 left-0 w-screen h-[14%] bg-blue-950">
          <div className="flex items-center h-[100%] ml-3 text-white">
            <img src="src/assets/bit.png" alt="" className="w-14 h-auto block mb-4 mt-2" />
            <div className="flex m-4 flex-grow justify-between mt-1">
              <Link to="/dashboard" style={{ textAlign: 'left' }} className="text-lg">
                <h1 className="uppercase  font-nsans-bold cursor-pointer mt-2">User</h1>
                <p className='text-sm'>S-ID: {user.uid}</p>
              </Link>
              {/* <Link to="/" style={{ textAlign: 'left' }} className="text-lg">
                <h1 className="uppercase text-blue-950 font-nsans-bold cursor-pointer mt-2">Campus Security System</h1>
              </Link> */}
            </div>
            <div className="flex mt-2 mr-3">
              <button onClick={handleLogout} className="capitalize bg-white px-6 py-1 rounded cursor-pointer text-black">
                Logout
              </button>
            </div>
          </div>

            
          </div>
      
      ) : (
        <div className="flex-col mt-0 pt-0 fixed top-0 left-0 w-screen h-screen">
          <div className="flex justify-center bg-blue-950 text-white h-11">
            <div className="flex mt-2">
              <Link to="/Home" className="capitalize pr-4">
                Home
              </Link>
              <p className="mr-5">|</p>
              <Link to="/login" className="capitalize pr-4">
                Messages
              </Link>
              <p className="mr-5">|</p>
              <Link to="/login" className="capitalize pr-4">
                About us
              </Link>
              <p className="mr-5">|</p>
              <Link to="/login" className="capitalize pr-4">
                Login
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <img src="src/assets/images-removebg-preview.png" alt="" className="w-14 h-auto block mb-4 mt-2" />
            <div className="flex m-4 flex-grow justify-between mt-1">
              <Link to="/" style={{ textAlign: 'left' }} className="text-lg">
                <h1 className="uppercase text-blue-950 font-nsans-bold cursor-pointer mt-2">Birla Institute of Technology, Mesra</h1>
              </Link>
              <Link to="/" style={{ textAlign: 'left' }} className="text-lg">
                <h1 className="uppercase text-blue-950 font-nsans-bold cursor-pointer mt-2">Campus Security System</h1>
              </Link>
            </div>
          </div>
          <div className="flex justify-between bg-blue-950 text-white h-11">
            <div className="flex mt-2 py-1 ml-3">
              <Link to="/Home" className="capitalize pr-4">
                Home
              </Link>
              <Link to="/login" className="capitalize pr-4">
                Messages
              </Link>
              <Link to="/login" className="capitalize pr-4">
                About us
              </Link>
              <Link to="/login" className="capitalize pr-4">
                Login
              </Link>
            </div>
            <div className="flex mt-2 mr-3">
              <Link to="/login">
                <button className="capitalize pr-4 mr-20 py-1">Login</button>
              </Link>
              <Link to="/signup">
                <button className="capitalize bg-white px-6 py-1 rounded cursor-pointer text-black">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
      }
      export default Navbar1

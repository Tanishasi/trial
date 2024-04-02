import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const Navbar2 = () => {
  const { user } = UserAuth();
  
  return (
    <>
      {user?.email ? (
        <div className="flex ">
          <div className="flex-row pt-0 fixed top-[15%] h-[200px] w-[20%] left-0 z-10 shadow-lg bg-white  border-t-2">
            {/* Profile Picture */}
            <div className="flex items-center justify-center w-full h-16 border-b">
              {/* Assuming user.profilePic is the URL of the profile picture */}
              <img src={user.profilePic} alt="Profile" className="w-10 h-10 rounded-full" />
            </div>
            <div className=" overflow-x-auto mt-[45%] ">
              {/* <div className="font-bold mb-4 bg-blue-950  p-3 text-center  text-white"><Link to='/dashboard'>Dashboard</Link></div> */}
              <div className="mb-2 block py-2 border-b text-center border-gray-300">
                <Link to='/profile'>PROFILE</Link>
              </div>
              <div className="mb-2 block py-2 border-b text-center border-gray-300">
                <Link to='/attendance'>Attendance</Link>
              </div>
              <div className="mb-2 block py-2 border-b text-center border-gray-300">
                <Link to='/leave'>LEAVES</Link>
              </div>
              <div className="mb-2 block py-2 border-b text-center border-gray-300">
                <Link to='/routine'>Schedule</Link>
              </div>
              <div className="mb-2 block py-2 border-b text-center border-gray-300">
                <Link to='/salary'>Salary</Link>
              </div>
              
              {/* Add more links here */}
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar2;

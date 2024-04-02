import React, { useState, useEffect } from 'react';
import { UserAuth } from '../context/AuthContext'; // Import the UserAuth context

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const { user } = UserAuth(); // Get the current user from the UserAuth context

  useEffect(() => {
    readGoogleSheet(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const readGoogleSheet = () => {
    fetch('https://sheetdb.io/api/v1/9kf4edagzdr9r')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the fetched data to inspect it
        if (Array.isArray(data)) {
          // Filter data based on current user's email
          const filteredData = data.filter(entry => entry['Email address'] === user.email);
          // Extract desired columns (Date and Shift) from filtered data
          const extractedData = filteredData.map(entry => ({
            date: entry.Date,
            shift: entry.Shift
          }));
          setAttendanceData(extractedData);
        } else {
          console.error('Data is not in the expected format:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  };
                                                                                                                             
  return (
    <div className='text-black absolute top-[19%] h-[50%] w-[50%] overflow-hidden left-[60%] border-gray-400'>
      <h2>Attendance</h2>
      <div>
        {attendanceData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Shift</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.shift}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No attendance data available for the current user. {user.email}</p>
        )}
      </div>
    </div>
  );
};

export default Attendance;

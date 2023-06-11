import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = ({userId}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/user/dashboard/:userId'); 
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Dashboard, {user && user.username}!</h1>
      {user && (
        <>
          <h2>Enrolled Courses:</h2>
          <ul>
            {user.courses.map((course) => (
              <li key={course.id}>{course.name}</li>
            ))}
          </ul>
          <h2>Progress:</h2>
          <p>{user.progress}% completed</p>
        </>
      )}
    </div>
  );
};

export default Dashboard;
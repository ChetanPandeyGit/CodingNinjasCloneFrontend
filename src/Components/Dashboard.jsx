import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import clslogo from '../images/Alum/cls-logo.jpg'
import  {BsArrowUpRight} from 'react-icons/bs'
import  {AiOutlineQuestionCircle} from 'react-icons/ai'
import  {BiMessageAltDetail} from 'react-icons/bi'
import  {FaWallet} from 'react-icons/fa'
import  expCourse  from '../images/explore-our-courses.svg'
import FooterTop from './FooterTop';
import ImportantLinks from './ImportantLinks';
import PayAccept from './PayAccept';

const Dashboard = () => {
  const {userId} = useParams()
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/user/dashboard/${userId}`); 
        setUser(response.data.user);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourseListing();
  }, []);

  const fetchCourseListing = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/user/${userId}/courses`);
      setCourses(response.data);
    } catch (error) {
      console.error('Failed to fetch course listing:', error);
    }
  };

 
  return (
    <div className="classroom">
      <div className="class-nav">
        <div className="left-nav">
          <div className="ln"><img src={clslogo} alt="logo" />
          <h1>Classroom</h1></div>
          <div className="ln">
            <h2>Placement Cell</h2><BsArrowUpRight size={20}/>
          </div>     
        </div>
        <div className="right-nav">
          <AiOutlineQuestionCircle size={30}/>
          <BiMessageAltDetail size={30}/>
          <div className="refer">
            <FaWallet/>
            <span> Refer and Earn</span>
          </div>
        </div>
      </div>
      <div className="dash-cont">
      <h1>Welcome to the Dashboard, {user && user.username}!</h1>
     {user && (
        <>
          <h2>Enrolled Courses:</h2>
          <ul>
            {courses.map((course) => (<>
              <li key={course.id}>{course.name}</li>
              <button onClick={() => handleEnrollCourse(course.id)}>Enroll</button></>
            ))}
          </ul>
          <h2>Progress:</h2>
          <p>{user.progress}% completed</p>
        </>
      )}
      </div>
      <div className="explore-courses">
              <img src={expCourse} alt="course" />
              <div><h1>Boost your career with in-demand coding skills.</h1>
              <h1>Explore our coding courses.</h1></div>
              <button className="explore">
                <Link to={'/courses'}>Explore our Courses <BsArrowUpRight size={20}/></Link>
                
              </button>
      </div>
      <FooterTop/>
      <ImportantLinks/>
      <PayAccept/>
    </div>
  );
};

export default Dashboard;
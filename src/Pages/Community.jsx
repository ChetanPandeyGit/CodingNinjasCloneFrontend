import React from 'react'
import { Link } from 'react-router-dom'

const Community = () => {
  const userId = localStorage.getItem("userId");
  return (<> 
    <nav>
          <ul>
            <li >
              <Link to="/dashboard/: userId" style={{color : "black"}}>Dashboard</Link>
            </li>
            <li>
              <Link to="/user/:userId" style={{color : "black"}}>User Details</Link>
            </li>
          </ul>
        </nav>
        </>
  )
}

export default Community

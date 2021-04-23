import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
     return (
          <div>
               <ul>
                    <li>
                         <Link to="/admin/posts">Posts</Link>
                    </li>
               </ul>
               <ul>
                    <li>
                         <Link to="/admin/users">Users</Link>
                    </li>
               </ul>
          </div>
     )
}

export default Sidebar

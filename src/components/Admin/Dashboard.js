import React from "react";
import { Route } from "react-router-dom"
import Sidebar from './Sidebar';
import Users from './Users';
import Posts from './Posts';


const Dashboard = ({ match }) => {
     return (
          <div>
               <h1>Admin Dashboard</h1>
               <Sidebar />
               <Route path='/admin/posts' component={Posts} />
               <Route path='/admin/users' component={Users} />
          </div>
     );
};

export default Dashboard;
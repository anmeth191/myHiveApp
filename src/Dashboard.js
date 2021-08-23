import React from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends React.Component{

    render(){
        return(
            <div>
           this is the Dashboard component
           <Link to="/register"> Register </Link>
            </div>
            )
         }
}

export default Dashboard;
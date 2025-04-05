import React from 'react';
import { Link } from 'react-router-dom';
import "./layout.css"

function Layout({children}) 
{
    return (
         <div className="container mt-4">
            <h3 className="text-center mb-4 bg-danger bg-gradient fst-italic text-light">DAV CAR WASH</h3>
            <nav>
                <Link className="btn btn-warning me-2 fst-italic reg" to="/"> Home </Link>
                <Link className="btn btn-warning me-2 fst-italic reg" to="/add"> Add New Cars </Link>
                <Link className="btn btn-warning me-2 fst-italic reg" to="/C">Contact</Link>
                <Link className="btn btn-warning fst-italic reg" to="/S">Shows</Link>
            </nav>
            {children}
         </div>   
    )
}

export default Layout;
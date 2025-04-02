import React from 'react';
import { Link } from 'react-router-dom';

function Layout({children}) 
{
    return (
         <div className="container mt-4">
            <h3 className="text-center mb-4 bg-danger bg-gradient fst-italic">DAV DEAlS</h3>
            <nav>
                <Link className="btn btn-warning me-2 fst-italic" to="/"> Home </Link>
                <Link className="btn btn-warning fst-italic" to="/add"> Add New Cars </Link>
            </nav>
            {children}
         </div>   
    )
}

export default Layout;
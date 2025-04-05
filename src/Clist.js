import React, {useState} from "react";
import {Link} from 'react-router-dom';
import './Clist.css'


function Clist({cars, onDelete})
{ const [Filterstatus, setFilterStatus] = useState("All")

  const Filteredcars = cars.filter(car => {
    return (Filterstatus == "All" || (Filterstatus == "Completed" && car.status) || (Filterstatus == "Cleaning" && !car.status))
  })


  
    return (
      <div className="Clistback">
        <div className='mt-3'>
          <select className="form-select" onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All</option>
            <option value="Completed">completed</option>
            <option value="Cleaning">cleaning</option>
          </select>
        </div>
        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="table-info">
              <tr>
                <th className="table-danger top">Brand</th>
                <th className="table-danger top">Year</th>
                <th className="table-danger top">Color</th>
                <th className="table-danger top">Status</th>
                <th className="table-danger top">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Filteredcars.map((car) => (
                <tr key={car.id}>
                  <td className="redd">{car.brand}</td>
                  <td>{car.year}</td>
                  <td className="redd">{car.color}</td>
                  <td className="top">{car.status == true ? 'Completed' : 'Cleaning'}</td>
                  <td>
                    <Link className="btn btn-warning btn-sm me-2 buttons" to={`/edit/${car.id}`}>Edit</Link>
                    <button className="btn btn-danger btn-sm buttons" onClick={() => onDelete(car.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <img width="400" style={{paddingLeft: 200}} 
        src="https://pnghq.com/wp-content/uploads/2023/02/red-car-wash-png-7968-768x539.png"></img>
        </div>
      );
}

export default Clist;
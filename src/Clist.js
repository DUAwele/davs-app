import React, {useState} from "react";
import {Link} from 'react-router-dom';


function Clist({cars, onDelete})
{ const [Filterstatus, setFilterStatus] = useState("All")

  const Filteredcars = cars.filter(car => {
    return (Filterstatus == "All" || (Filterstatus == "Completed" && car.status) || (Filterstatus == "Cleaning" && !car.status))
  })


  
    return (
      <div>
        <div className='mt-2'>
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
                <th className="table-danger">brand</th>
                <th className="table-danger">year</th>
                <th className="table-danger">color</th>
                <th className="table-danger">status</th>
                <th className="table-danger">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Filteredcars.map((car) => (
                <tr key={car.id}>
                  <td>{car.brand}</td>
                  <td>{car.year}</td>
                  <td>{car.color}</td>
                  <td>{car.status == true ? 'Completed' : 'Cleaning'}</td>
                  <td>
                    <Link className="btn btn-warning btn-sm me-2" to={`/edit/${car.id}`}>Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(car.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      );
}

export default Clist;
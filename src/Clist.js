import React from 'react';
import {Link} from 'react-router-dom';


function Clist({cars, onDelete})
{
    return (
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
              {cars.map((car) => (
                <tr key={car.id}>
                  <td>{car.brand}</td>
                  <td>{car.year}</td>
                  <td>{car.color}</td>
                  <td>{car.status == true ? 'Instock' : 'Outofstock'}</td>
                  <td>
                    <Link className="btn btn-warning btn-sm me-2" to={`/edit/${car.id}`}>Edit</Link>
                    <button className="btn btn-danger btn-sm" onClick={() => onDelete(car.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default Clist;
import React, { useState } from 'react';

function CRSform({ initialData , onSubmit})
{

    const [formData, setFormData] = useState(initialData)

    function handleChange(event)
    {
        setFormData({...formData , [event.target.name]: event.target.value})
    }
    function handleSubmit(event)
    {
        event.preventDefault();
        onSubmit(formData);
    }
    function handleStatusChange()
    {
       setFormData({...formData , status: !formData.status})
    }
    return (
        <form onSubmit={handleSubmit} className="bg-danger bg-gradient text-light">
          <div className="mb-3">
            <label className="form-label">Brand</label>
            <input
              type="text"
              name="brand"
              className="form-control"
              value={formData.brand}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">year</label>
            <input
              type="text"
              name="year"
              className="form-control"
              value={formData.year}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Color</label>
            <input
              type="text"
              name="color"
              className="form-control"
              value={formData.color}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 form-check">
              <input 
                type="checkbox"
                className="form-check-input"
                checked={formData.status}
                onChange={handleStatusChange}
              />
              <label className="form-check-label">Completed </label>
          </div>
          <button type="submit" className="btn btn-warning">Save</button>
        </form>
      );
}

export default CRSform;
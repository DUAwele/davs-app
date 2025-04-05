import React from "react";

function Contact()
{
    return(
    <form className="bg-danger bg-gradient text-light fst-italic">
        <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
            type="text"
            name="FN"
            className="form-control"
            required
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
            type="text"
            name="SN"
            className="form-control"
            required
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input
            type="email"
            name="email"
            className="form-control"
            required
            />
        </div>
        <button type="submit" className="btn btn-warning">Submit</button>
    </form>

);
}

export default Contact;
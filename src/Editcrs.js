import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CRSform from './CRSform';

function Editcrs({cars, onupdate})
{
    const {id} = useParams();
    const navigate = useNavigate();

    const car = cars.find((i) => i.id === parseInt(id));

    if(!car) return <p> student not found</p>

    function handleupdate(updatecar)
    {
        onupdate(updatecar)
        navigate("/");

    }

    return <CRSform initialData={car} onSubmit={handleupdate}/>

}

export default Editcrs;
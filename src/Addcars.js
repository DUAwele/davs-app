import React from 'react';
import { useNavigate } from 'react-router-dom';
import CRSform from './CRSform';



function Addcars({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(newcar) {
    onAdd(newcar);
    navigate("/");
  }

  return <CRSform initialData={{ brand: "", year: "", color: "", status: false }} onSubmit={handleAdd} />;
}

export default Addcars;
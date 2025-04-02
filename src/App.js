import './App.css';
import { useState } from 'react';
import Layout from './layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addcars from './Addcars';
import Clist from './Clist';
import Editcrs from './Editcrs';



function App() {

  const [cars , setCars] = useState([
    {id : 1, brand: "Mercedes-Benz" , year: 2014 , color: "Black"}
  ])
  function deletecars(id)
  {
    setCars(cars.filter((car) => car.id !== id));
  }

  function addcar(car) {
    const newcar = { ...car, id: Date.now() };
    setCars([...cars, newcar]);
  }

  function updateCars(updated)
  {
    setCars(cars.map((car) => car.id === updated.id ? updated : cars));
  }

  return(
    <Router>
        <Layout>
            <Routes>
               <Route path="/" element={ <Clist cars={cars} onDelete={deletecars} /> }    />

               <Route path="/add" element={ <Addcars onAdd={addcar} /> }    />
               
               <Route path="/edit/:id" element={ <Editcrs cars={cars} onupdate={updateCars} /> } />
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;

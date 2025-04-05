import './App.css';
import { useState } from 'react';
import Layout from './layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Addcars from './Addcars';
import Clist from './Clist';
import Editcrs from './Editcrs';
import Contact from './Contact';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  cars: [
    {id : 1, brand: "Mercedes-Benz" , year: 2014 , color: "Black", status: true}
  ]
};

// 🔥 Reducer - Only manages state, doesn't handle methods directly
const reducer = (state = initialState, action) => {
  switch(action.type) {
      case 'SET_ITEMS':
          return { ...state, cars: action.payload };
      default:
          return state;
  }
};
// 🔥 Create Redux Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);



function App() {

  const [cars , setCars] = useState(store.getState().cars);

  function deletecars(id)
  {
    const updatedcars = cars.filter((car) => car.id !== id);
      setCars(updatedcars);
      store.dispatch({ type: 'SET_ITEMS', payload: updatedcars });
  }

  function addcar(car) {
    const newCar = { ...car, id: Date.now() };
    const updatedcars = [...cars, newCar];
    setCars(updatedcars);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedcars });
  }

  function updateCars(updated)
  {
    const updatedcars = cars.map((car) => car.id === updated.id ? updated : car);
    setCars(updatedcars);
    store.dispatch({ type: 'SET_ITEMS', payload: updatedcars });
  }

  return(
    <Router>
        <Layout>
            <Routes>
               <Route path="/" element={ <Clist cars={cars} onDelete={deletecars} /> }    />

               <Route path="/add" element={ <Addcars onAdd={addcar} /> }    />

               <Route path="/C" element={ <Contact/>}/>
               
               <Route path="/edit/:id" element={ <Editcrs cars={cars} onupdate={updateCars} /> } />
            </Routes>
        </Layout>
    </Router>
  );
}

export default App;

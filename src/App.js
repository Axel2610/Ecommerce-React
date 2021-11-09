import React from 'react'
import {NavBar} from "./components/Navbar/NavBar"
import './App.css'
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
import {ItemCount} from "./components/ItemCount/ItemCount"
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="miApp">
    <NavBar/>
    <ItemListContainer/>
    <ItemCount/>
    </div>
  );
}

export default App;

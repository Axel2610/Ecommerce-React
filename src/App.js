import React from 'react'
import {NavBar} from "./components/Navbar/NavBar"
import './App.css'
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div className="miApp">
    <NavBar/>
    <ItemListContainer/>
    </div>
  );
}

export default App;

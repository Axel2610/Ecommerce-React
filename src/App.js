import React from 'react'
import {NavBar} from "./components/Navbar/NavBar"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from 'react-router-dom'
import { AppRouter } from './router/AppRouter'


function App() {
  return (
  <BrowserRouter>
    
    <NavBar/>
    
    <AppRouter/>
  </BrowserRouter>
   
  );
}
export default App;

import React from 'react'
import {NavBar} from "./components/Navbar/NavBar"
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter} from 'react-router-dom'
import { AppRouter } from './router/AppRouter'
import { CartProvider } from './context/CartContext'


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <AppRouter/>
      </BrowserRouter>
    </CartProvider>

  );
}
export default App;

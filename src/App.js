<<<<<<< Updated upstream
import React from 'react'
import {NavBar} from "./components/Navbar/NavBar"
import './App.css'
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer"
=======
import React from 'react';
import  {NavBar}  from './components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';
>>>>>>> Stashed changes

function App() {


  return (
      <BrowserRouter>
     
          <NavBar/>
          <AppRouter/>

          {/* <Footer/> */}
        

      </BrowserRouter>
  );
}

export default App;

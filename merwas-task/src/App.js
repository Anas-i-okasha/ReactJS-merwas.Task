import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/main/Main';
import Image from './Components/image/image';
import Sidebar from './Components/SideBar/Side';
import PartTwo from './Components/PartTwo/partTwo';
import Auckland from './Components/Auckland/Auckland';
import Collection from './Components/Collection/collection';
import Escape from './Components/Escape/Escape';
import Store from  './Components/Store/Store';
import Fitness from './Components/Fitness and sport/fitness';
import Footer from './Components/footer/footer';
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Main/>
      <Image/>
      <Sidebar/>
      <PartTwo/>
      <Auckland/>
      <Collection/>
      <Escape/>
      <Store/>
      <Fitness/>
      <Footer/>
      </Router>
   

    </div>
  );
}

export default App;

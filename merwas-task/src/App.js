import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/main/Main';
import Image from './Components/image/image';
import Sidebar from './Components/SideBar/Side';
import PartTwo from './Components/PartTwo/partTwo';
import Auckland from './Components/Auckland/Auckland'
import './App.css';

const App=()=> {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Image/>
      <Sidebar/>
      <PartTwo/>
      <Auckland/>
    </div>
  );
}

export default App;

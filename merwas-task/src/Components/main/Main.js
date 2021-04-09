import React from 'react';
import {  Navbar  , Nav  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import {BsSearch} from 'react-icons/bs';

const Main=()=> {
    return (
        <div className='second'>
            <Navbar bg="white" >
         <Navbar.Brand href="#home">Browse Categories</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">What is News</Nav.Link>
      <Nav.Link href="#features">Trending</Nav.Link>
      <Nav.Link href="#pricing">For You</Nav.Link>
    </Nav>   
    <BsSearch/>  <input  type="text" placeholder="Search GrabOne" className="form-control mr-sm-2 search" />
  </Navbar>
        </div>
    )
}
export default Main;

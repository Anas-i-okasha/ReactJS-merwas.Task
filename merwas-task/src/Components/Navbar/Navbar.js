import React from 'react';
import {  Navbar ,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
// import {GoLocation } from 'react-icons/go';
import {FiShoppingCart} from 'react-icons/fi';
import {BsPersonCheckFill} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';

 const NavBar=()=> {
    return (
<div>
  <Navbar className='navbar'>
    <h2>GrabOne</h2>
    

    <div>
    <ul className='items'>
            <li>
                <div style={{color:'white', }}>
                <NavDropdown title="Auckland"  id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
                </div>
            </li>
            <li >
    <FiShoppingCart style={{fontSize:30}}/>
    </li>
    <li>
<BsPersonCheckFill style={{fontSize:30}}/>
</li>
<li>
  <HiOutlineMail style={{fontSize:30}}/>  Subscribe
</li>
        </ul>
    </div>
        <div>          
       <div>Powered by</div>
         <div><h4>NZME.</h4></div>
        </div>
  </Navbar>
            
</div>
    )
}
export default NavBar;

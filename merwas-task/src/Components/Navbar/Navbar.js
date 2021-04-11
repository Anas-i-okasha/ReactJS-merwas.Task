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
                <NavDropdown.Item href="#action/3.1">Auckland</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Collection</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Escapes</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Store</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Fitness & sport</NavDropdown.Item>
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
        <div style={{listStyle:'none'}}> <li>
        <img  src='https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png'/></li>         
         
        </div>
  </Navbar>
            
</div>
    )
}
export default NavBar;

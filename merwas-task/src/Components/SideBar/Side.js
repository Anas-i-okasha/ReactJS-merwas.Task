import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from 'react-bootstrap';

import './Side.css'

const Side=()=> {
    return (
        <div style={{disply:'flex'}}>
            <aside className='side'>
                <h3 style={{color:'blue',alignItems:'center', marginLeft:25 , marginTop:10}}>Discover</h3>
                <ul className='list'>
                    <li className='li'>
                        Featured Auckland deals
                    </li>
                    <li>
                        Collection
                    </li>
                    <li>
                        Escapes
                    </li>
                    <li>
                        Picked for you
                    </li>
                    <li>
                        Activities , Events & Outdoors
                    </li>
                    <li>
                        Store
                    </li>
                    <li>
                        Restaurants , Bars , Cafes
                    </li>
                    <li>
                        Beauty , Massage & Spa
                    </li>
                    <li>
                        House & Garden
                    </li>
                    <li>
                        Fitness & Sports
                    </li>
                    <li>
                        Automotive
                    </li>
                </ul>
            </aside>
            <div class="row" style={{width:'73rem' , marginTop:-610 , marginLeft:320}}>
  <div class="col-sm-6">
    <div class="card">
    <img className='card-img-top' src='https://main-cdn.grabone.co.nz/goimage/495x343/0546c800d3ad18ab9d4e0cd7db4a72d45efdcb53.jpg'/>
      <div class="card-body">
        <h5 class="card-title">Three-Day Abel Tasman self Guided Walk</h5>
        <p class="card-text">Three-Day Abel Tasman Independent Walk</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6" >
    <div class="card">
    <img className='card-img-top' src='https://main-cdn.grabone.co.nz/goimage/495x343/ed7886d2fbb6da6523029509d53817f9ff47d0b8.jpg'/>
      <div class="card-body">
        <h5 class="card-title">Thermal Hot pool Entry (14 years & over only)</h5>
        <p class="card-text">Wairakei Terraces</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
            
        </div>
    )
}
export default Side;

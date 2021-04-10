import React from 'react'
import './Side.css'

const Side=()=> {
    return (
        <div>
            <aside className='side'>
                <h3 style={{color:'blue',alignItems:'center', marginLeft:25 , marginTop:10}}>Discover</h3>
                <ul className='list'>
                    <li>
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
        </div>
    )
}
export default Side;

import React from 'react'
import { Link } from 'react-router-dom';


import './image.css'

 const image=()=> {
    return (
        <div>
            <div className='img'>
            <img src='https://mediacdn.grabone.co.nz/asset/gxWhawiCvr' alt='sooo long Summer'/>
            </div>
            <div className='text'>
                <h5> <Link to='/sign-in'> Sign in </Link> and purchase any deal on site to be in the draw to win your share of our prize pool worth over $10.000! <Link to='/sign-in'>T's & c's apply.</Link> </h5>
            </div>
            
        </div>
    )
}
export default image
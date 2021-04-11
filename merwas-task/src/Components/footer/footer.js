import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {IoLogoInstagram} from 'react-icons/io'
import {ImYoutube} from 'react-icons/im'
import {GiSmartphone} from 'react-icons/gi'
import './footer.css'

const footer=()=> {
    return (
        <div>
            <div className='footer'>
                <nav>
                    <h4>Follow Us</h4>
                    <div style={{ display:'flex',margin:'5px' ,fontSize:'xx-large'}}>
                     <a target='_blank' href='https://web.facebook.com/GrabOne?_rdc=1&_rdr'><FaFacebook/></a>  <a href='https://twitter.com/grab_one'> <AiFillTwitterCircle/> </a>
                     <a target='_blank'  href='https://www.instagram.com/grabone_nz/'><IoLogoInstagram/> </a>
                     <a target='_blank'  href='https://www.youtube.com/channel/UCpW3s5Cp3nDegaI1JXq3YSQ'> <ImYoutube/> </a>
                    </div>
                    <div> <h6>Get app exclusive deals</h6> </div>
                    <div> <a className='btn btn-primary' href='https://new.grabone.co.nz/mobile'> <GiSmartphone/> DownLoad our App</a>   </div>
                </nav>
                <nav>
                    <h4> GrabOne</h4>
                    <div>GrabOne Guarntine</div>
                    <div>Contact Us</div>
                    <div>About Us</div>
                    <div>Terms & Returns</div>
                    <div>Blog</div>
                    <div>Gift cards</div>
                </nav>
                <nav>
                    <h4>My Account</h4>
                    <div>My Account</div>
                    <div>My Cart</div>
                    <div>My coupons</div>
                    <div>FAQ</div>
                </nav>
                <nav>
                    <h4>Merchants</h4>
                    <div>Run a deals</div>
                    <div>Merchant Center</div>
                </nav>
                <nav>
                    <h4 >Newsletter Signup</h4>
                    <p>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
                    <div style={{display:'flex'}}><input  className='form-control mr-sm-8' placeholder='Enter Email address'/> <button  className='btn btn-primary'>Subscibe</button>
                    </div>
                </nav>
            </div>
            <div className='sub-Footer'>
               <div style={{textAlign:'center'}}><a target='_blank'  href='https://new.grabone.co.nz/privacy-policy'>Privacy Police</a> @ 2021 GrabOne Limited</div>
                <div>
                    <img src='https://new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_long.d08e62aa63ff.png'/>
                </div>
            </div>
        </div>
    )
}
export default footer

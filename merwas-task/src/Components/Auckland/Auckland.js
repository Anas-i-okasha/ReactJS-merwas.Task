import React from 'react'
import './Auckland.css'

const Auckland=()=> {

   const LandData = [
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/7a54d766b8a20a9b6efe7c02c6a2e289b3328b60.jpg',
            header:'Water sports experance',
            text:'Vector wero white water'
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/1719b96c9ee175f185dc95a848bc4085fc4b0cba.jpg',
            header:'Luxuary stay at Heritage QueenStone ',
            text:'Queenstone-wanka'
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/f8293dd56b36f6efe250d112ab107f84a0206479.jpg',
            header:'paradic Entry & skate hire',
            text:'Auckland'
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/b64246ad63ac0a27dd158be5653fdef3a55e3e42.jpg',
            header:'Five-star indulgent Breakfast Experience',
            text:'Eight Resturant at cordis Auckland'
        },
    ]
    const nextData = [
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/899eda9a1b4746cb67901e100eb68f73ee73a20d.jpg',
            header:'4.5 Star Capital city Getway',
            text:'James cook Hotel Grand '
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/f387ea5018aa7647a3d6a1919d14264a7b6715f7.jpg',
            header:'Mid Luxury chalet stay',
            text:'Grand Mercure Puka ',
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/ced219384b3cb34122aa0250978fd2a87292f229.jpg',
            header:'white water rafting ',
            text:'Kaituna Cascades',
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/29ac0fda082839048b3964ccaea85501c1c9b587.jpg',
            header:'Entry to parakai',
            text:'parakai Springs'

        }
    ]
    return (
        <div>
            <div className='land'>
                <h2 style={{marginLeft:'15px'}}>Featured Auckland deals</h2> <button style={{marginLeft:'15px'}} className='btn btn-primary '>View More</button>
            </div>
            <div className='Auck' >
                {LandData.map(function(item){ 
                    return <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                          <img className='card-img-top' src={item.image}/>
                        <div class="card-body">
                          <h6 class="card-title"> {item.header} </h6>
                          <p class="card-text"> {item.text} </p>
                        </div>
                        <div className='more'>
                        <div >  bought </div>
                        <div > price</div>
                        </div>
                        
                      </div>
                    </div>
                    </div>
                })}
            </div>
            <div>
            <div className='Auck' >
                {nextData.map(function(item){ 
                    return <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                          <img className='card-img-top' src={item.image}/>
                        <div class="card-body">
                          <h6 class="card-title"> {item.header} </h6>
                          <p class="card-text"> {item.text} </p>
                        </div>
                        <div className='more'>
                        <div >  bought </div>
                        <div > price</div>
                        </div>
                      </div>
                    </div>
                    </div>
                })}
            </div>
            </div>
        </div>
    )
}
export default Auckland

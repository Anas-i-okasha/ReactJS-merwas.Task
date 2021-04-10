import React from 'react'

const Store=()=> {
    const storeData=[
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/7187b61a2c0f5d5a9e5d9b38fbce1614df75d79c.jpg',
            header:'woodfire Pizza Oven',
            price:'189',
            bought:'1'
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/e2cade266d94ebd8ddad1d24256e32ba9965c91c.jpg',
            header:'Three-Pice Ultrasonic',
            price:'66',
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/c9cacec3b0f98f1139673c9464457f4da34d234a.jpg',
            header:'Fagor pressure cooker Range',
            price:'219',
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/6db83816a733361d645a627e555c77861ab8be51.jpg',
            header:'simplistic maple computer Desk',
            price:'129',
            bought:''
        },

    ]
    return (
        <div>
            <div>
            <div className='land'>
                <h2 style={{marginLeft:'15px'}}>Store</h2> <button style={{marginLeft:'15px'}} className='btn btn-primary '>View More</button>
            </div>
            <div className='Auck' >
                {storeData.map(function(item){ 
                    return <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                          <img className='card-img-top' src={item.image}/>
                        <div class="card-body">
                          <h5 class="card-title"> {item.header} </h5>
                        </div>
                        <div className='more'>
                       <div style={{marginTop:30}}> {item.bought }  </div>
                       <div style={{color:'blue' , marginLeft:50}}> from <h3 > ${item.price} </h3> </div> 
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
export default Store;

import React from 'react'


 const fitness=()=> {
     const fitnessData=[
         {
             image:'https://main-cdn.grabone.co.nz/goimage/325x225/c1d283e816803abe876fb575e640d1c8d2a95f69.jpg',
             header:'Folding removeable bike ',
             price:'48',
             bought:'1'
         },
         {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/2d0163eaa47fb900e7e2a210a00a818f65992a87.jpg',
            header:'Traning resistance bands set',
            price:'13',
            bought:'2'
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/3d9d7d1a621a9a999cdff2541d0ebbaec189bf28.jpg',
            header:'4-week unlimited off-peak',
            price:'49',
            bought:'3'
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/5f7fd2a2f9bba9b86d7ba239e510c84904b98187.jpg',
            header:'Olympus lyfestyle levels ',
            price:'49.90',
            bought:'3'
        },
     ]
    return (
        <div>
            <div>
            <div className='land'>
                <h2 style={{marginLeft:'15px'}}>Fitness & Sport</h2> <button style={{marginLeft:'15px'}} className='btn btn-primary '>View More</button>
            </div>
            <div className='Auck' >
                {fitnessData.map(function(item){ 
                    return <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                          <img className='card-img-top' src={item.image}/>
                        <div class="card-body">
                          <h5 class="card-title"> {item.header} </h5>
                        </div>
                        <div className='more'>
                       <div style={{marginTop:30}}> {item.bought } bought </div>
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
export default fitness

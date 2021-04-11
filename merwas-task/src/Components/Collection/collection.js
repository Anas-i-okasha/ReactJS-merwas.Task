import React from 'react'

const collection=()=> {
    const collectionData=[
        {
            image:'https://mediacdn.grabone.co.nz/asset/2yBlWHIvec',
            header:'Sooo long summer',
            text:'Multible deals',
        },
        {
            image:'https://mediacdn.grabone.co.nz/asset/zdfPcgPJxF',
            header:'Go local & support NZ bussiness',
            text:'Multible deals',
        },
        {
            image:'https://mediacdn.grabone.co.nz/asset/GZrL0PITKA',
            header:'Grocery Goods',
            text:'Multible deals',
        },
        {
            image:'https://mediacdn.grabone.co.nz/asset/PYXdeKi1pp',
            header:'Ugg collection',
            text:'Multible deals',
        }

    ]
    return (
        <div>
            <div className='land'>
                <h2 style={{marginLeft:'15px'}}>Collections</h2> <button style={{marginLeft:'15px'}} className='btn btn-primary'>View More</button>
            </div>
            <div className='Auck' >
                {collectionData.map(function(item){ 
                    return <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                          <img className='card-img-top' src={item.image}/>
                        <div class="card-body">
                          <h5 class="card-title"> {item.header} </h5>
                          <p style={{alignItems:'center'}} class="card-text"> {item.text} </p>
                        </div>
                        <div style={{display:'flex', justifyContent:'center', marginBottom:5}}>
                        <a  href='https://new.grabone.co.nz/auckland/c/sooo-long-summer?view=grid'><button  className='btn btn-primary'>View Collections</button></a> 

                        </div>
                      </div>
                    </div>
                    </div>
                })}
            </div>
            
        </div>
    )
}
export default collection

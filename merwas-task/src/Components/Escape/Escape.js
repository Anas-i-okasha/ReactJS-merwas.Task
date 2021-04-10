import React from 'react'

const Escape=()=> {
    const EscapeData=[
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/4449bd298076c9b6ab9c79974d392331d4c89c9a.jpg',
            headers:'stay in the marlborough',
            text:'The portage-THC Hotel',
            bought:'195',
            price:'238',
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/837a005e256befcb4caa3074c588a1ee88a55b76.jpg',
            headers:'Central Queenstown',
            text:'Rydges lakeland Resort QueenStown',
            bought:'1513',
            price:'179',
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/0ea97f179320d53b9df3218ca73e7f925b7df679.jpg',
            headers:'Luxury wellington Getaway',
            text:'Doubletree Hilton wellington',
            bought:'111',
            price:'195',
        },
        {
            image:'https://main-cdn.grabone.co.nz/goimage/325x225/f3cef4c8013e9b89d374149d2ae9622d12eb2d54.jpg',
            headers:'Novotel QueenStown',
            text:'QueenStown-wanaka',
            bought:'88',
            price:'559',
        },

    ]
    return (
        <div>
            <div>
            <div className='land'>
                <h2 style={{marginLeft:'15px'}}>Escapes</h2> <button style={{marginLeft:'15px'}} className='btn btn-primary '>View More</button>
            </div>
            <div className='Auck' >
                {EscapeData.map(function(item){ 
                    return <div class="row">
                    <div class="col-lg-12">
                      <div class="card">
                          <img className='card-img-top' src={item.image}/>
                        <div class="card-body">
                          <h5 class="card-title"> {item.headers} </h5>
                          <p class="card-text"> {item.text} </p>
                        </div>
                        <div className='more'>
                       <div style={{marginTop:30}}> {item.bought} bought </div>
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
export default Escape;

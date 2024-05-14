import React from 'react'
import sofa from '../../Assets/5739256 1.svg'
import bike from '../../Assets/Take Away-rafiki 1.svg'
import waiter from '../../Assets/Waiters-rafiki 1.svg'

const Serve = () => {
    const datas = [{
        image:sofa,
        title:'easy to order',
        descp:'You only need a few steps in ordering food'
    },
    {
        image:bike,
        title:'fastest delivery',
        descp:'Delivery that is always ontime even faster'
    },
    {
        image:waiter,
        title:'best quality',
        descp:'Not only fast for us quality is also number one'
    },
]
  return (
    <div className='serve'>
        <div className="serve-heading">
            <p>What we Serve</p>
            <h1>Your Favourtie food delivery partner</h1>
        </div>
        <div className="cards">
        {datas.map((data,idx)=>(
        <div className="card" key={idx}>
            <img src={data.image} alt="" />
            <div className="text">
                <h2>{data.title}</h2>
                <p>{data.descp}</p>
            </div>
           
        </div>
        ))}
        </div>
        
    </div>
  )
}

export default Serve
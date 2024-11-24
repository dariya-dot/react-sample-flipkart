import React from 'react'

const Bestelectronics = (props) => {
  const {Text,Image1,Image2,Image3,Image4,Image5}=props.electronics
  return (
      <div className='electronics'>
        <h1>{Text}</h1>
        <div className='collections'>
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src= {Image3} alt="" />
          <img src={Image4} alt="" />
          <img src={Image5} alt="" />
       
        </div>
         
      </div>
   
  )
}

export default Bestelectronics
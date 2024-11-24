import React from 'react'

const Toys = (props) => {
  const {Text,Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8}=props.womanimages
  return (
    <div className='womancollections-hed'>
    <h1>{Text}</h1>
      <div className='womancollections'>
        <img src={Image1} alt="" />
        <img src={Image2} alt="" />
        <img src={Image3} alt="" />
        <img src={Image4} alt="" />
        <img src={Image5} alt="" />
        <img src={Image6} alt="" />
        <img src={Image7} alt="" />
    <img src={Image8} alt="" />
      </div>
    </div>
  )
}

export default Toys
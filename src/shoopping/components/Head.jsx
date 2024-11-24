import React from 'react'

const Head = () => {
  return (
    <div className='header'>
      <div className="headimage">
        <img src="images/logo.png" alt="" />
      </div>
      <div className="searchinput"><img src="images/search.svg" alt="" /><input type="text" /></div>
      <div className="login"><img src="images/person.svg" alt="" />login</div>
      <div className="cart"><img src="images/cart.svg" alt="" />Cart</div>
      <div className="seller"> <img src="images/shop.svg" alt="" /> Become a Seller </div>
     <div className="menu"><img src="images/menu.svg" alt="" /></div> 
    </div>
  )
}

export default Head
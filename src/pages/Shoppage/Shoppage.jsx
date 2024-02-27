import React from 'react'
import useShopContext from '../../context/ShopContext/ShopContext'
import ProductCard from '../../components/Card/ProductCard'
import './Shoppage.css'
import SubtotalField from '../../components/Subtotal/Subtotal'

const Shoppage = () => {
  const {cartItems,subAmount}=useShopContext()
  const showItems=()=>{

  }
  return (
    <div>
      <SubtotalField/>
    <div className='Grid'>
     {cartItems.map(item=><ProductCard key={item.id} product={item}/>)}
    </div>
    </div>
  )
}

export default Shoppage

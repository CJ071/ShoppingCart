import React from 'react'
import useShopContext from '../../context/ShopContext/ShopContext'
import ProductCard from '../../components/Card/ProductCard'
import './Shoppage.css'
import SubtotalField from '../../components/Subtotal/Subtotal'

const Shoppage = () => {
  const {cartItems,SubAmount}=useShopContext()

  

  return (
    <div className='grid'>
     {cartItems.map(item=><ProductCard key={item.id} product={item}/>)}
     <SubtotalField subtotal={SubAmount}/>
    </div>
  )
}

export default Shoppage

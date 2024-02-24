import React, { useState,useEffect } from 'react'
import useGetProducts from '../../hooks/GetProducts/GetProducts'
import ProductCard from '../../components/Card/ProductCard'
import SpinLoader from '../../components/Spinner/SpinLoader'
import './Homepage.css'
const Homepage = () => {
    
   const {data:products,loading,error}=useGetProducts()
    if(error)
        console.log(error)

  return (
    <div className='grid'>
       {loading || !products?<SpinLoader/>:products?.map(p=> <ProductCard key={p.id} product={p}/> )}
    </div>
  )
}

export default Homepage

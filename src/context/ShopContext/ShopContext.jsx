import React,{createContext,useContext, useState,useEffect} from 'react'

export const ShopContext=createContext({
    Amount:0,
    setAmount:()=>{},
    SubAmount:0,
    onSubAmountChange:()=>{},
    cartItems:[],
    addToCart:()=>{}
})

export const ShopProvider=({children})=>{
    const [amount,setAmount]=useState(0)    
    const [subAmount,setSubAmount]=useState(10000);
    const [cartItems,setCartItems]=useState([])

    const addToCart=(item,quantity)=>{
setCartItems(prevItems=>[...prevItems,{...item,quantity}])

    }
    
    const onSubAmountChange=(quantity,product)=>{
        const total=quantity*product.price
        setSubAmount(total)
    }

    useEffect(() => {
  
        console.log("Updated cartItems:", cartItems); // Log the updated cartItems state
        
      }, [cartItems]);
    
    return <ShopContext.Provider value={{amount,setAmount,cartItems,setCartItems,addToCart,subAmount,onSubAmountChange}}>
        {children}
    </ShopContext.Provider>
}

export default function useShopContext(){
    return useContext(ShopContext)
}
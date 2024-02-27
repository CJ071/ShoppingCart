import React,{createContext,useContext, useState,useEffect} from 'react'

export const ShopContext=createContext({
    Amount:0,
    setAmount:()=>{},
    SubAmount:0,
    onSubAmountChange:()=>{},
    cartItems:[],
    addToCart:()=>{},
    updateCartItemQuantity:()=>{}
})

export const ShopProvider=({children})=>{
    const [amount,setAmount]=useState(0)    
    const [subAmount,setSubAmount]=useState(0);
    const [cartItems,setCartItems]=useState([])

    const addToCart=(item,quantity)=>{
setCartItems(prevItems=>[...prevItems,{...item,quantity}])

    }

    const updateCartItemQuantity=(id,quantity)=>{
        setCartItems(prevCartItems=>prevCartItems.map(item=>(item.id===id)?{...item,quantity}:item))
    }

    // const updateCartItemQuantity = (productId, quantity) => {
    //     setCartItems(prevItems =>
    //         prevItems.map(item =>
    //             item.id === productId ? { ...item, quantity } : item
    //         )
    //     );
    // }
    
    const calculateSubTotal=()=>{
        if(cartItems.length>0)
        {
        let subTotal=cartItems.map(i=>i.quantity*i.price).reduce((acc,curVal)=>acc+curVal)
        setSubAmount(subTotal)
            console.log("Subtotal inside context ",subTotal)
        }
        else{
            setSubAmount(0)
        }
    }

    useEffect(() => {
  
        console.log("Updated cartItems:", cartItems); // Log the updated cartItems state
        calculateSubTotal()
      }, [cartItems]);
    
    return <ShopContext.Provider value={{amount,setAmount,cartItems,setCartItems,addToCart,subAmount,calculateSubTotal,updateCartItemQuantity}}>
        {children}
    </ShopContext.Provider>
}

export default function useShopContext(){
    return useContext(ShopContext)
}
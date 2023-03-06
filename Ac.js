import React from 'react'
import { useState } from 'react';
function Ac() {
    const [inc,setInc] = useState(0);
    const increment=(price)=>{
        setInc(inc+price);
    }
    const decrement=(price)=>{
      if(inc===0){
        alert("Your Cart is empty")
      return false
      }
      setInc(inc-price);
  }
  return (
    <div>
        <img src="https://www.bigbasket.com/media/uploads/p/l/40172777-2_4-cadbury-dairy-milk-silk-oreo-red-velvet.jpg" alt='Chocklate' height={100} width={100}></img>
        <p>Price:{inc}</p>
        <button onClick={()=>{increment(80)}}>AddProduct</button>
        <button onClick={()=>{decrement(80)}}>RemoveProduct</button>
    </div>
  )
}

export default Ac
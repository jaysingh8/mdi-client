import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
const ProductContext = createContext()
export const  ProductProvider=({children})=> {
    const [product , setProdect] = useState([])
    useEffect(()=>{
        axios.get("https://gist.githubusercontent.com/jaysingh8/ac48e4dd2c50e248e2937371559309ec/raw/2eadda0765ec6fb7ecbd8e08127b7d441770ab93/Medi.json")
        .then((res)=>{
            setProdect(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <ProductContext.Provider value={product}>
        {children}
    </ProductContext.Provider>
  )
}
export const useProduct = () => useContext(ProductContext)
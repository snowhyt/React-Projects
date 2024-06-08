import { useState, useEffect } from "react"
import React  from 'react'
import Loader from "../components/Loader"
import ProductCard from "../components/ProductCard"
import { useAxiosGet } from "../Hooks/HttpRequest"

function Home() {
  
const url = `https://665cff91e88051d604053364.mockapi.io/products?page=1&limit=10`

  let products = useAxiosGet(url);
  let content = null



//show error
  if(products.error){
    content = <p>There was an error. Please refresh the page.</p>
}
//show loading
if(products.loading){
    content = <Loader />
    
}

//show data
if(products.data){
  content = products.data.map((product) =>

    <div key={product.id}>
    <ProductCard 
        product={product}
    />
    </div>
  )


  return(
    <div>
      <h1 className="text-xl font-bold pb-6">Best Sellers</h1>
      {content}
    </div>
  )}



}

export default Home
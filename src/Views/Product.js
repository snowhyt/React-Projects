import React, {useEffect, useState} from 'react';
import axios from 'axios'
import {useParams} from 'react-router-dom'
import Loader from '../components/Loader';
import { useAxiosGet } from '../Hooks/HttpRequest';

function Product(){
    const {id} = useParams()
    const url = `https://665cff91e88051d604053364.mockapi.io/products/${id}`
   
    let product= useAxiosGet(url);
   

  let content = null

    if(product.error){
        content = <p>There was an error. Please refresh the page.</p>
    }

    if(product.loading){
        content = <Loader />
        
    }

   if(product.data){
        content =
        <div>
            <h1 className='font-bold text-3xl mb-5'>{product.data.name}</h1>
            <div>
                <img src={product.data.images} 
                alt={product.data.name} />

            </div>
            <div className='font-bold text-xl mb-3'>
                ${product.data.price}
            </div>
            <div>{product.data.description}</div>
        </div>
    
   }
   return(
    <div>
        {content}
    </div>
   )
}

export default Product;
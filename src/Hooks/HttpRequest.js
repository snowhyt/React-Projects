import React, { useState, useEffect} from 'react';
import axios from 'axios';


export function useAxiosGet(url){

    const [product, setProduct] = useState({
        loading: false,
        data: null
    })

  

  useEffect(() =>{
    setProduct({
       loading: true,
       data: null,
       error: false
    })
    axios.get(url)
    .then(response =>{ 
        setProduct({
            loading: false,
            data: response.data,
            error: false
        })
    })
    .catch( error => {
        setProduct({
            loading: false,
            data: null,
            error: true
        })
    })
  }, [url])

  return product;

}


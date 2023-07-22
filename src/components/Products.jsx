import React, { useEffect, useState } from 'react'
import {add} from '../store/cartSlice.js'
import { useDispatch } from 'react-redux';

const Products = () => {

    const dispacth = useDispatch();
   const [products, setProduct] = useState([]);

    useEffect(() => {
       const fetchProduct = async () => {
        const res= await fetch('https://fakestoreapi.com/products')
           const data = await res.json()
    
           setProduct(data);
       }
    fetchProduct();
    },[])

  const handleAdd = (product) => {
  //we need to add this product to store

     //dispatch is the referncer we get from useDispatch
     //it takes a action and do the state change in store
          dispacth(add(product));
  }

  return (
    <div className='productsWrapper'>

       {products.map((product)=>(
          <div className='card' key={product.id} >
             <img src={product.image} alt=""/>
             <h4>{product.title}</h4>
             <h5>{product.price}</h5>
             <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
          </div>
       ))
       }
    </div>
  )
}

export default Products

"use client";
import React, { useState } from 'react';


const page = () => {

    const [product, setProduct] = useState([]);

   let data= async () =>{
     let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    setProduct(data);
   }
   data();
  return (
    <div className="p-10">

        <h1>All products list here</h1>

        <div>
        {product.map((elem)=>(
        <h1 key={elem.id} onClick={()=>console.log("Hello")}>{elem.title}</h1>
        ))}
        </div>
    </div>
  )
}

export default page
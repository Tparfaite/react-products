import  Button  from 'react-bootstrap/Button';
import React, { useState,useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import styles from "./products.module.css"

const Products = () => {
    const[data,setData]=useState([]);

const fetchProduct=async()=>{
    const fetchData=await (await fetch("https://fakestoreapi.com/products")).json();
    console.log(fetchData)
    setData(fetchData)
    console.log(fetchData.length)
   
}

useEffect(()=>{
    fetchProduct() 
},[]) 
const handleClick=(item)=>{
    console.log(item);
    const update=data.filter((product)=>item.id!==product.id)
    setData(update)
}
  return (
  <>

<div className={styles.head}> <h2>Here is a table of {data.length} products</h2></div>

  <Table >
    <thead>
   <tr>
    <th>id</th>
    <th>image</th>
    <th>category</th>
    <th>description</th>
    <th>price</th>
    <th>delete</th>
   </tr>
   </thead>
  
    <tbody>
    {data.map((item)=>(
   <tr key={item.id}>

    <td>{item.id}</td>
    <td><img className={styles.image} src={item.image}/></td>
    <td>{item.category}</td>
    <td>{item.description}</td>
    <td>{item.price}</td>
    <td> <Button variant="danger" onClick={()=>handleClick(item)}>Delete</Button></td>
   </tr>
   ))}
   </tbody>



  </Table>
    
  </>
  )
}

export default Products

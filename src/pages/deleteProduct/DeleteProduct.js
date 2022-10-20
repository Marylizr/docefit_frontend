import React, { useState, useEffect } from 'react';
import styles from '../deleteProduct/deleteProduct.module.css';
import DeleteCart from '../../components/deleteCard/deleteCard';

const DeleteProduct = () => {

   const [products, setProducts] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3001/addProduct')
        .then((response) => {
           if (!response.ok){
              throw new Error("error")
           }
           return response.json();
        })
        .then((json) => {
         setProducts(json);
        })
        .catch((error) => {
           console.log(error);
        })
    }, [setProducts]);
 
   
       
  return (
    <div className={styles.main}>
       <div className={styles.content}>
         <h2>Delete Product</h2>

         <div className={styles.content}>
            
         {products.map( item => <DeleteCart item={item} id={item._id} key={item._id} 
             />)} 
         </div>   
       </div>
   </div>
  )
}

export default DeleteProduct
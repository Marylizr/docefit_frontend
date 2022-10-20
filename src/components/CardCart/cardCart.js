import React from "react";
import styles from './product.module.css';
// import customFetch from '../../api';

const CardCart = ({ item, onClick }) => {

     const handleDelete = (id) => { 
          fetch('http://localhost:3001/cart/'+ id, {
             method: 'DELETE',
             headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
          })
          .then(res => {window.location.reload()}) 
       }
     // const handleDelete = (id) => { 
     //      customFetch("DELETE", "cart/", + id , {body: item})
     //      .then(res => {window.location.reload()}) 
     //   }; 
      
     return(
          <div className={styles.product} onClick={onClick} >
               <h4>{item.title}</h4>
               <p><b>Preço:{item.price}</b>€</p>
               <img src={item.thumbnailUrl} alt="tartas"/>
               <div className={styles.button}>
                    <button className={styles.addToCart} onClick={() => handleDelete(item._id)}>DELETE </button>
               </div>
               
          </div>
     )
};

export default CardCart;
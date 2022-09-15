import React from "react";
import styles from '../CardCart/product.module.css';
// import customFetch from '../../api';

const EditCard = ({ item, onClick }) => {

      
     return(
          <div className={styles.product} onClick={onClick} >
               <h4>{item.title}</h4>
               <p><b>Preço:{item.price}</b>€</p>
               <img src={item.thumbnailUrl} alt="tartas"/>
               <div className={styles.button}>
                    <button className={styles.addToCart} >EDIT </button>
               </div>
               
          </div>
     )
};

export default EditCard;
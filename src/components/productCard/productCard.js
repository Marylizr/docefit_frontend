import styles from './product.module.css'
import customFetch from '../../api';
import { useModal } from "../../hooks/useModal";
import { useState } from 'react';
import Modal from "../modal/modal";
import { Link } from 'react-router-dom';


const Product = ({ item, isInCart=false, addToCart }) => {
     const [isOpenModal, openModal, closeModal] = useModal(false);
     const [selectedItem, setSelectedItem] = useState();

     const onCart = () => {   
          const data ={
               type:item.type,
               price:item.price,
               description:item.description,
               title: item.title,
               format:item.format,
               thumbnailUrl:item.thumbnailUrl
          }
          customFetch("POST", "cart", {body: data})
          .then(() => {
               addToCart()
               openModal() 
          })
          .catch(error => {
               console.error(error);
          })

     }
     return(
          <div className={styles.product} style={{ backgroundImage: `url(${item.thumbnailUrl})` }} >
               <div className={styles.info}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    <h2><b>Preço: {item.price}</b> €</h2>
               </div>
               <div className={styles.button}>
                    {!isInCart && 
                    <button className={styles.addToCart} 
                    onClick={() => {
                         onCart()
                         setSelectedItem(item); 
                         openModal()  
                         } }>Add to Cart +</button>}
               </div>
               

               {selectedItem && 
               <Modal isOpen={isOpenModal} closeModal={closeModal}>
                    <h2>a tua {selectedItem.type} tem sido agregad@ no carrinho!</h2>
                    <img src={selectedItem.thumbnailUrl} width="300" alt="img"/> 
                    <button className={styles.checkout}><Link to="/cart"> go to Cart </Link> </button>
               </Modal>}
               
          </div>
     )
};

export default Product;

import styles from './cart.module.css'
import CardCart from "../../components/CardCart/cardCart";
import { useEffect, useState } from "react";



const Cart = () => {

     const [onCart, setOnCart] = useState([]);
          
     useEffect(() => {
          fetch('http://localhost:3001/cart')
            .then(response => {
               if (!response.ok){
                  throw new Error("error")
               }
               return response.json();
            })
            .then((json) => {
               setOnCart(json);
            })
            .catch((error) => {
               console.log(error);
            });
        }, [setOnCart]);

        const calcTotalPrice = (list) => {
          let totalPrice = 0;
          list.forEach((onCart) => {
               totalPrice = totalPrice + onCart.price;
          });
          console.log(onCart);
          return totalPrice;
          
     }

     return(
          <div className={styles.cart}>
               <h3>My Cart</h3>
               <div className={styles.onCart}>
                    {onCart && onCart.length > 0 && onCart.map((item) => 
                          <CardCart item={item} isInCart={true} id={item._id} key={item._id} price={item.price} />
                              )}
               </div>     
               <div className={styles.totalPrice}>
                    {(!onCart || onCart.length === 0) && (<p>0 productos</p>)}
                    
                    Total Price:{calcTotalPrice(onCart)} € 
               </div>
          </div>
     )
};

export default Cart;
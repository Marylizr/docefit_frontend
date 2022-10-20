
import styles from './cart.module.css'
import CardCart from "../../components/CardCart/cardCart";
import { useEffect, useState } from "react";
// import customFetch from '../../api';


const Cart = () => {

     const [onCart, setOnCart] = useState([]);
     const [name, setName] = useState();

     useEffect(() => {
          fetch('http://localhost:3001/user/me')
            .then((response) => {
              if (!response.ok){
                throw new Error("error")
              }
               return response.json()
               .then((json) => {
                setName(json.name);
              })
            })

          }, [ setName]);
          
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
               <h3>hey {name}! this is your Cart</h3>
               <div className={styles.onCart}>
                    {onCart && onCart.length > 0 && onCart.map((item) => 
                          <CardCart item={item} isInCart={true} id={item._id} key={item._id} price={item.price} />
                              )}
               </div>   
               <div className={styles.count}>
               {onCart && onCart.length > 0 && onCart.map((item) => 
                          <p key={item._id}>{item.title}: {item.price} €</p> 
                              )}
               
                    {(!onCart || onCart.length === 0) && (<p>0 productos</p>)}
                   
                    <h2>Total Price: {calcTotalPrice(onCart)} € </h2>
                    <button className={styles.payment}>Go to payment ➤ </button>
               </div>
          </div>
     )
};

export default Cart;
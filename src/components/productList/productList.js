import React from "react";
import styles from './productList.module.css';
import Product from "../productCard/productCard";
import { useState } from "react";
import { useEffect } from "react";


const ProductList = ({ searchValue, isInCart=false, onClick }) => {
     
     const [filteredData, setFilteredData] = useState([]);
     const [cartProducts, setCartProducts] = useState([]);
     const [data, setData] = useState([]);

     useEffect(() => {
          if (searchValue !== '') {
             setFilteredData(data.filter(({ type }) => {
               const regex = new RegExp(searchValue);
               return regex.test(type.toLocaleLowerCase());
             }))
                
          }
       }, [searchValue, setFilteredData, data]);

       useEffect(() => {
          if (data.length) {
            setFilteredData(data);
          }
        }, [data, setFilteredData]);

        useEffect(() => {
          fetch('http://localhost:3001/addProduct')
            .then((response) => {
               if (!response.ok){
                  throw new Error("error")
               }
               return response.json();
            })
            .then((json) => {
             setData(json);
            })
            .catch((error) => {
               console.log(error);
            })
        }, [setFilteredData]);
       

     const addToCart = (item) => {       
          setCartProducts([...cartProducts, item]);
     }
    
  
     return(  
          <div className={styles.productList} >
               
               {filteredData.map( item => <Product addToCart={addToCart} item={item} id={item._id} key={item._id} 
               onClick={() => {onClick()}} />)}

          </div>
     )
};

export default ProductList;
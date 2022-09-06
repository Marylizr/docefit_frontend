import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import styles from '../addProduct/addProduct.module.css';
import customFetch from '../../api';
import ProductCard from '../../components/productCard/productCard';
import ManageProducts from '../../components/manageProducts/manageProducts';


const AddProduct = () => {

   const {register, handleSubmit, formState:{ errors} } = useForm();
   const [product, setProduct] = useState();
   
   const onSubmit = data => {
      setProduct(data)
      customFetch("POST", "addProduct", {body: data})
   };
    const handleOnClick = () => {
      window.location.reload()
    }

   useEffect(() => {
      console.log('Errors', errors);
   }, [errors]);
   
   return (
      <div className={styles.main}>
         <div className={styles.content}>
         <h2>Create new Product</h2>
         </div>
         
         
         <div className={styles.wrapper}>
           <div>
               <ManageProducts />
            </div>
         
         <div className={styles.addProduct}> 
            <form onSubmit={handleSubmit(onSubmit)}>
               <label>Type</label>
               <input type="text"  {...register("type", { required: true})} />
               {errors.type?.type === 'required' && <p className={styles.error}>This field is required</p>}
               {errors.type?.type === 'pattern' && <p className={styles.error}>Incorrect name</p>}
               <br/>
               <label>Title</label>
               <input type="text"  {...register("title", { required: true })} />
               {errors.title && <p className={styles.error}>This field is required</p>}
               <br/>
               <label>Description</label>
               <textarea  {...register("description", { required: true })} >
               {errors.description && <p className={styles.error}>This field is required</p>}
               </textarea>
               <br/>
               <label>Price</label>
               <input type="number"  {...register("price", { required: true })} />
               {errors.price && <p className={styles.error}>This field is required</p>}
               <br/>
               <label>ThumbnailUrl</label>
               <input type="text"  {...register("thumbnailUrl", { required: true })} />
               {errors.thumbnailUrl && <p className={styles.error}>This field is required</p>}
               
               <div className={styles.buttons}>
                  <input className={styles.send} type="submit"  />
                  <button onClick={() => {handleOnClick()}} className={styles.reload}>reset</button>
               </div>    
           </form>
           <div className={styles.card}>
             {product && <ProductCard item={product}/>}
           </div>
         </div>

         </div>

        </div>
   );
};

export default AddProduct;

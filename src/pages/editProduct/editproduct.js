import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form';
import { useModal } from '../../hooks/useModal';
import Modal from '../../components/modal/modal';
import styles from '../../pages/editProduct/editproduct.module.css';
// import customFetch from '../../api';
import ManageProducts from '../../components/manageProducts/manageProducts';
import EditCard from '../../components/editCard/editCard';


const EditProduct = () => {

   const {register, handleSubmit, formState:{ errors} } = useForm();
   const [product, setProduct] = useState(
      {type: 'type', title: 'title', description: 'description', price: 'price',  format:'format', thumbnailUrl: 'thumbnailUrl' });
   const [isOpenModal, openModal, closeModal] = useModal(false);
   const [selectedItem, setSelectedItem] = useState();
   const [allProduct, setAllProducts] = useState([]);
   

   const onSubmit = async() => {
      const data = {
         type: product.type,
         title: product.title,
         description: product.description,
         price: product.price,
         format:product.format,
         thumbnailUrl: product.thumbnailUrl
      }
      
      setProduct(data)
      fetch('http://localhost:3001/addProduct/id', {
           method: 'PATCH',
           headers: {
               'Content-Type': 'application/json',
           },
           body: JSON.stringify(data)
       })
       .then(console.log('product updated'))
        .catch((error) => {
           console.log(error);
        })
   };

    const handleOnClick = () => {
      window.location.reload()
    }
   

    useEffect(() => {
      fetch('http://localhost:3001/addProduct')
        .then((response) => {
           if (!response.ok){
              throw new Error("error")
           }
           return response.json();
        })
        .then((json) => {
         setAllProducts(json);
        })
        .catch((error) => {
           console.log(error);
        })
    }, [setAllProducts]);
   
   return (
      <div className={styles.main}>
         <div className={styles.content}>
         <h2>Edit a Product</h2>
         </div>
         
         <div className={styles.wrapper}>
           <div>
               <ManageProducts />
            </div>
         
         {allProduct.map(item => <EditCard item={item} id={item._id} key={item._id}   
        onClick={() => {
            setSelectedItem(item);
            openModal();           
      }} />)} 

        {selectedItem && 
            <Modal isOpen={isOpenModal} closeModal={closeModal}>
            <img src={selectedItem.thumbnailUrl} width="" alt="img"/>
            <div className={styles.buttons}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
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
               <input type="text"  {...register("thumbnailUrl")} />
               
               
               <div className={styles.buttons}>
                  <input className={styles.send} type="submit"  />
                  <button  className={styles.reload} onClick={() => {handleOnClick()}} >reset</button>
               </div>    
           </form>
            </div>
            </Modal>}
            
         </div>

        </div>
   );
};

export default EditProduct;

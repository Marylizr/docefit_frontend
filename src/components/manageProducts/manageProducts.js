import React from 'react';
import styles from '../../components/manageProducts/manageProducts.module.css'
import { Link } from 'react-router-dom';

const ManageProducts = () => {
  return (
    <div className={styles.manage}>
       <ul>
          <li><Link to='/addProduct'> Add Product</Link></li>
          <li><Link to='/editProduct'>Edit Product </Link> </li>
          <li>Delete Product</li>
       </ul>
   </div>
  )
}

export default ManageProducts
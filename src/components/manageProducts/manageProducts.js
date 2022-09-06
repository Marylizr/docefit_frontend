import React from 'react';
import styles from '../../components/manageProducts/manageProducts.module.css'

const ManageProducts = () => {
  return (
    <div className={styles.manage}>
       <ul>
          <li>Add Product</li>
          <li>Edit Product</li>
          <li>Delete Product</li>
       </ul>
   </div>
  )
}

export default ManageProducts
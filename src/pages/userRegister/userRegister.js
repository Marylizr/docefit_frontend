import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import styles from './userRegister.module.css';



const UserRegister = () => {

   const {register, handleSubmit, formState:{ errors} } = useForm();
   const onSubmit = data => {
      console.log(data);
      fetch('http://localhost:3010/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
   };

   useEffect(() => {
      console.log('Errors', errors);
   }, [errors]);
   
   return (
      <div className={styles.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
                <label>Complete Name</label>
                <input type="text" placeholder='you complete name' {...register("complete_name", { required: true, pattern: /^[A-Za-z]+$/i  })} />
                {errors.name?.type === 'required' && <p className={styles.error}>This field is required</p>}
                {errors.name?.type === 'pattern' && <p className={styles.error}>Incorrect name</p>}
                <br/>
                <label>Email</label>
                <input type="text" placeholder='myemail.mail.com' {...register("email", { required: true })} />
                {errors.email && <p className={styles.error}>This field is required</p>}
                <br/>
                <label>Address</label>
                <input type="text" placeholder='street, floor, apart...'{...register("address", { required: true })}  />
                {errors.address && <p className={styles.error}>This field is required</p>}
                <br/>
                <label>Password</label>
                <input type="password" placeholder='minLength: 8 ' {...register("password", { required: true, minLength: 8 })} />
                {errors.password?.type === 'required' && <p className={styles.error}>This field is required</p>}
                {errors.password?.type === 'minLength' && <p className={styles.error}>Password should be longer than 8 characters</p>}
                <br/>
        
                <input className={styles.submit} type="submit" />
            </form>
        </div>
   );
};

export default UserRegister;

import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import styles from './userRegister.module.css';
import customFetch from '../../api';
import { setUserSession } from "../../api/auth";
import { useNavigate } from "react-router-dom";


const UserRegister = () => {

    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) navigate("/securedcontent/dashboard");
    }, [navigate]);
  
    const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
   
     const onSubmit = (data) => {
       customFetch("POST", "user", {body: data})
       .then(userSession => {
         setUserSession(userSession);
         navigate("/securedcontent/dashboard");
       }).catch(error => {
         console.error('not possible to sign up');
       });
     };

   return (
      <div className={styles.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
                <label>Complete Name</label>
                <input type="text" placeholder='Your userName' {...register("name", { required: true  })} />
                {errors.name?.type === 'required' && <p className={styles.error}>This field is required</p>}
                {errors.name?.type === 'pattern' && <p className={styles.error}>Incorrect name</p>}
                <br/>
                <input type="text" placeholder='your LastName here' {...register("lastName", { required: true  })} />
                {errors.lastName?.type === 'required' && <p className={styles.error}>This field is required</p>}
                {errors.lastName?.type === 'pattern' && <p className={styles.error}>Incorrect name</p>}
                <br/>
                <label>Email</label>
                <input type="text" placeholder='myemail.mail.com' {...register("email", { required: true })} />
                {errors.email && <p className={styles.error}>This field is required</p>}
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

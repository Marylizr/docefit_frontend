import React, { useEffect } from 'react';
import {useForm} from 'react-hook-form';
import styles from '../Login/login.module.css';
import customFetch from '../../api';
import { setUserSession } from "../../api/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) navigate("/securedcontent/dashboard");
      }, [navigate]);

   const {register, handleSubmit, formState:{ errors} } = useForm();
   
   const onSubmit = data => {
    customFetch("POST", "login", {body: data})
    .then(userSession => {
      setUserSession(userSession);
      navigate("/securedcontent/dashboard");
    }).catch(error => {
      console.error('its no possible to log in');
    });
   };


   useEffect(() => {
      console.log('Errors', errors);
   }, [errors]);
   
   return (
      <div className={styles.content}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                <input type="text" placeholder='myemail@mail.com' {...register("email", { required: true })} />
                {errors.email && <p className={styles.error}>This field is required</p>}
                <br/>
                <label>Password</label>
                <input type="password" placeholder='minLength: 8' {...register("password", { required: true, minLength: 8 })} />
                {errors.password?.type === 'required' && <p className={styles.error}>This field is required</p>}
                {errors.password?.type === 'minLength' && <p className={styles.error}>Password should be longer than 8 characters</p>}
                <br/>
        
                <input className={styles.submit} type="submit" />
            </form>
        </div>
   );
};

export default Login;

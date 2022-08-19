import React from 'react'
import Login from '../Login/login';
import UserRegister from '../userRegister/userRegister';
import styles from '../usersLog/usersLog.module.css';

const UsersLog = () => {
  return (
    <div className={styles.content}>
      <div className={styles.login}>
        <h3>Log In</h3>
        <Login />
      </div>
      <div className={styles.signup}>
      <h3>Sign Up</h3>
        <UserRegister />
      </div>
    </div>
  )
}

export default UsersLog;
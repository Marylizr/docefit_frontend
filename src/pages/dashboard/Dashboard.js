import styles from "./dashboard.module.css"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { removeSession } from "../../api/auth";
import { Link } from 'react-router-dom';


const Dashboard = ({ searchValue }) => {
  const [name, setName] = useState();
  const navigate = useNavigate();
 
    
  useEffect(() => {
    fetch('http://localhost:3001/user/me')
      .then((response) => {
        if (!response.ok){
          throw new Error("error")
        }
         return response.json()
         .then((json) => {
          setName(json.name.toLocaleUpperCase());
        })
      })
      .catch(() => {
        removeSession();
        navigate("/login");
      });
    }, [navigate, setName]);


  return(
    <div className={styles.dashboard}>
      <h3>Welcome {name}</h3>
      
      <div className={styles.content}>
        <div className={styles.box}>
         <Link to="/addProduct">Product</Link>
         </div>
        <div className={styles.box}>
        <Link to="/adminUsers">Admin Users</Link>
        </div>
        <div className={styles.box}>
            <p>Inventory</p>
        </div>
      </div>

    </div>  
  )
};  


export default Dashboard;

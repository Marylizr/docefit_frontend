import {Routes, Route} from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import AddProduct from "../addProduct/AddProduct";
import styles from "./securedContent.module.css";
import PrivateRoute from "../../api/auth/privateRoute";



const SecuredContent = () => {
  
    return(
        <div className = {styles.main}>
               
               <Routes>
                  <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                  <Route path="/addProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
               </Routes>  
        </div>
    )
}

export default SecuredContent;
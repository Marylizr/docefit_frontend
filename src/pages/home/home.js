
import Landing from "../landing/landing";
import ProductList from "../../components/productList/productList";
import styles from './home.module.css'


const Home = ({searchValue}) => {
    
     return(
          <div className={styles.home}>

               
               <div className={styles.bodyApp}>
                    <Landing/>
                    <ProductList searchValue={searchValue} />
                   
               </div>  
          </div>
     )
};

export default Home;
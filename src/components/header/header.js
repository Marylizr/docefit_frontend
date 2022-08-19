import styles from './header.module.css'
import { Link } from 'react-router-dom';


const Header = ({onSearch}) => {

     return(
		<div>
			<div className={styles.header_bg}>	
			<div className={styles.logo}><img src="http://marylizr.com/doceefit/imagenes/logo2-01.png" alt="doce e fit"/></div>
				<header id={styles.topnav}>
							<nav>	
								<ul>
									<li><Link to="/">Home</Link></li>
									<li><Link to="/products">Products</Link></li>
									<li><Link to="/about">Sobre nós</Link></li>
									<li><Link to="/cart">Carrinho</Link></li>
									<li><Link to="/contact">Contact</Link></li>
									<li><Link to="/login">Log in</Link></li>
								</ul>
								<div className={styles.seach}> <input onChange={event => 
									{const value = event.target.value;
									onSearch(value) 
									}} type="text" placeholder="pesquiçar" />
								</div>  
							</nav>
				</header>
			</div>
       </div>
     )
};

<input  placeholder="Search" />

export default Header;
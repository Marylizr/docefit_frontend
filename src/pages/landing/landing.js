import styles from './landin.module.css'


const Landing = () =>{
     return(
          <div className={styles.wrapper}>
               <div className={styles.logo2}>
                    <img src="http://marylizr.com/doceefit/imagenes/logo-01.png" alt="logo"/>
               </div>
    
               <div className={styles.muneca}>
                    <img src="http://marylizr.com/doceefit/imagenes/MUNECA-01.png" alt="muneca"/>
               </div>
          </div>
     )
}

export default Landing;
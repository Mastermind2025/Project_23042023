import styles from './header.module.css';
import goose from '../../assets/img/GOOSE_2.png';


export const Header = () => {
    return (
        <div className={styles.container}>
            
            <div className={styles.box}>
                                    <img src={goose}
                                        alt="logo"
                                        className={styles.logo}
                                    />
                
<h1 className={styles.main_title}>G<span className={styles.oo_title}>oo</span>seTrack</h1>

                <div className={styles.box_btn}>

                    

                    <button className={styles.but_SignUp}>Sign up</button>
                    
                    <button className={styles.but_LogIn}>Log in</button>

                    <button className={styles.but_SignUp02}>Sign up</button>
                    
                </div>  
                    
               
               
               
            </div>

         
            
        </div>
    );
    
}
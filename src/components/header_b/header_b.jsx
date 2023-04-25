import styles from './header.module.css';
import goose from '../../assets/img/GOOSE_2.png';

let handleDel;

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

                    

                    <button
                        type="button"
                        className={styles.but_SignUp}
                        onClick={handleDel}
                    >
                        Sign up
                    </button>
                    
                    <button
                        type="button"
                        className={styles.but_LogIn}
                        onClick={handleDel}
                    >
                        Log in
                    </button>

                    <button
                        type="button"
                        className={styles.but_SignUp02}
                        onClick={handleDel}
                    >
                        Sign up
                    </button>
                    
                </div>  
            </div>
        </div>
    );
    
}
import classNames from 'classnames';
import styles from './LandingPage.module.scss';



const LandingPage = () => {
    return (
        <div className={classNames(styles.LandingPage)}>
           <div className={classNames(styles.LandingPageTree)}>
               <h1>VC4</h1>
               <p>Felix Huber</p>
               <p>584081</p>
               <p>SoSe 24</p>
           </div>
       </div>
    );
};

export default LandingPage;
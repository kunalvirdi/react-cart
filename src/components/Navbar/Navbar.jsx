import styles from './navbar.module.css'
import CartIcon from "../../assets/CartIcon.jsx";
const Navbar=()=>{
	return(
		<nav className={styles.nav}>
			<h1 className={styles.logo}>E-Cart</h1>
			<div className={styles.cart}><CartIcon/></div>
		</nav>
	)
}
export default Navbar
import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.main_header}>
            <nav className={classes.navbar}>
                <div className={classes.navbar_logo}>
                    <Link to="/" className={classes.navbar_logo_link}>LOGO</Link>
                </div>
                <ul className={classes.navbar_list}>
                    <li className={classes.navbar_item}><NavLink to="/" className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>Home</NavLink></li>
                    <li className={classes.navbar_item}><NavLink to="/projects" className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>Projects</NavLink></li>
                    <li className={classes.navbar_item}><NavLink to="/about" className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>About</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
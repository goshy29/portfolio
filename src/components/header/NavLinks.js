import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function NavLinks() {
    return ( 
        <>
            <li className={classes.navbar_item}>
                <NavLink to="/" className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    Home
                </NavLink>
            </li>
            <li className={classes.navbar_item}>
                <NavLink to="/projects" className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    All Projects
                </NavLink>
            </li>
            <li className={classes.navbar_item}>
                <NavLink to="/about" className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    About
                </NavLink>
            </li>
        </>
    );
}

export default NavLinks;
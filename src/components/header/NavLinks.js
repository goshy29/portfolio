import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function NavLinks(props) {
    return ( 
        <>
            <li className={classes.navbar_item}>
                <NavLink to="/" onClick={props.onClick} className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    Home
                </NavLink>
            </li>
            <li className={classes.navbar_item}>
                <NavLink to="/projects" onClick={props.onClick} className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    All Projects
                </NavLink>
            </li>
            <li className={classes.navbar_item}>
                <NavLink to="/about" onClick={props.onClick} className={({ isActive }) => isActive ? classes.active : classes.navbar_link} end>
                    About
                </NavLink>
            </li>
        </>
    );
}

export default NavLinks;
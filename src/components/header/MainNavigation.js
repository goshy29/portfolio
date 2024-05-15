import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <div className={classes.navbar_logo}>
                    <h1>LOGO</h1>
                </div>
                <ul className={classes.navbar_list}>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? classes.active : undefined} end>Home</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => isActive ? classes.active : undefined} end>Projects</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => isActive ? classes.active : undefined} end>About</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
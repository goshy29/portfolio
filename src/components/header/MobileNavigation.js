import classes from "./MobileNavigation.module.css";

function MobileNavigation(props) {
    return ( 
        <aside className={classes.mobile_nav}>
            {props.children}
        </aside>
    );
}

export default MobileNavigation;
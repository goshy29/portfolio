import aboutImg from "../../assets/images/salad.png";
import classes from "./HeaderAboutSection.module.css";

function HeaderAboutSection() {
    return ( 
        <section className={classes.section}>
        <div className={classes.section_img}>
            <img src={aboutImg} alt="An image showing George"/>
        </div>
        <div className={classes.section_about}>
            <h1>Hi, I am George</h1>
            <p>I blog about web development- especially<br/> frontend frameworks like React or Angular.</p> 
        </div>   
    </section>
    );
}

export default HeaderAboutSection;
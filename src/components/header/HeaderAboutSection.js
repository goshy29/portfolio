import aboutImg from "../../assets/images/salad.png";
import classes from "./HeaderAboutSection.module.css";

function HeaderAboutSection() {
    return ( 
        <div className={classes.wrap} >
            <div className={classes.section}>
                <div className={classes.section_img}>
                    <img src={aboutImg} alt="An image showing George"/>
                </div>
                <div className={classes.section_about}>
                    <h1><span>Hi, I am George</span></h1>
                    <p>I blog about web development- especially<br/> frontend frameworks like React or Angular.</p> 
                </div>  
            </div> 
        </div>
    );
}

export default HeaderAboutSection;
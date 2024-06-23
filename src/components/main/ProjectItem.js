import classes from "./ProjectItem.module.css";
import { Link } from "react-router-dom";

function ProjectItem(props) {
    return (
        <>
            <Link to={`/projects/${props.id}`} className={classes.item_link}>
                <div className={classes.item}>
                    <div className={classes.item_image}>
                        <img src={props.image} alt={props.title} />
                    </div>
                    <div className={classes.item_desc}>
                        <h1>{props.title}</h1>
                        <p>{props.description}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default ProjectItem;
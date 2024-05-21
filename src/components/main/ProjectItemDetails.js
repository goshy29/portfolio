import classes from "./ProjectItemDetails.module.css";

function ProjectItemDetails(props) {
    return ( 
        <header className={classes.header}>
            <img src={props.project.image} alt={props.project.title}/>
            <h1>{props.project.title}</h1>
        </header>
    );
}

export default ProjectItemDetails;
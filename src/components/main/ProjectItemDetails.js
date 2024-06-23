import classes from "./ProjectItemDetails.module.css";

function ProjectItemDetails(props) {
    props.project.summary = props.project.summary.replace(/\n/g, "<br />");

    return (
        <div className={classes.content}>
            <header className={classes.header}>
                <img src={props.project.image} alt={props.project.title} />
                <h1>{props.project.title}</h1>
            </header>

            <p dangerouslySetInnerHTML={{
                __html: props.project.summary
            }}></p>
        </div>
    );
}

export default ProjectItemDetails;
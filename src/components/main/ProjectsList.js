import classes from "./ProjectsList.module.css";
import ProjectItem from "./ProjectItem";

function ProjectsList(props) {
    return (
        props.projects.length > 0 ?
            (<ul className={classes.project_items}>
                {props.projects.map((project) => (
                    <li key={project.id}>
                        <ProjectItem
                            id={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description} />
                    </li>
                ))}
            </ul>) :
            (<h2 className="error">No Projects Available.</h2>)
    );
}

export default ProjectsList;

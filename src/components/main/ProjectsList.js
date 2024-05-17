import classes from "./ProjectsList.module.css";
import ProjectItem from "./ProjectItem";

function ProjectsList(props) {
    return ( 
        <ul className={classes.project_items}>
            {props.projects.map((project) => (
                <li key={project.id}>
                <ProjectItem 
                    image={project.image} 
                    title={project.title} 
                    description={project.description}  />
                </li>
            ))}  
          </ul> 
    );
}

export default ProjectsList;

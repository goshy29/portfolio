import classes from "./ProjectItem.module.css";

function ProjectItem(props) {
    return (
        <>
            <div className={classes.item}>
                <div className={classes.item_image}>
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className={classes.item_desc}>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </div> 
       </> 
    );
}

export default ProjectItem;
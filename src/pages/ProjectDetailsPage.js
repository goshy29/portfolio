import MainSectionLayout from "../components/layout/MainSectionLayout";
import { useParams } from "react-router-dom";
import {LATEST_PROJECTS} from "../data/latest-projects";
import ProjectItemDetails from "../components/main/ProjectItemDetails";
import { Helmet } from "react-helmet";

function ProjectDetailsPage() {
    const { projectId } = useParams();
    const project = LATEST_PROJECTS.find(p => p.id === projectId);

    if (!project) {
        return <p>Project not found!</p>;
    }

    return (
        <>
            <Helmet>
                <title>{project.title}</title>  
                <meta name="description" content={project.description} /> 
            </Helmet>

            <MainSectionLayout>
                <ProjectItemDetails project={project} />
            </MainSectionLayout>
        </>
    );
}

export default ProjectDetailsPage;
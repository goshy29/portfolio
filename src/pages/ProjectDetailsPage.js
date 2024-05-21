import MainSectionLayout from "../components/layout/MainSectionLayout";
import { useParams } from "react-router-dom";
import {LATEST_PROJECTS} from "../data/latest-projects";
import ProjectItemDetails from "../components/main/ProjectItemDetails";

function ProjectDetailsPage() {
    const { projectId } = useParams();
    const project = LATEST_PROJECTS.find(p => p.id === projectId);

    if (!project) {
        return <p>Project not found!</p>;
    }

    return (
        <MainSectionLayout>
            <ProjectItemDetails project={project} />
        </MainSectionLayout>
    );
}

export default ProjectDetailsPage;
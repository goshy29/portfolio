import MainSectionLayout from "../components/layout/MainSectionLayout";
import ProjectsList from "../components/main/ProjectsList";
import {ALL_PROJECTS} from "../data/all-projects";

function ProjectsPage() {
    return (
        <MainSectionLayout>
            <h1 className="center">All Projects</h1>
            <ProjectsList projects={ALL_PROJECTS}/>
        </MainSectionLayout>
    );
}

export default ProjectsPage;
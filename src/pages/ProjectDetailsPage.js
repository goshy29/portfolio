import MainSectionLayout from "../components/layout/MainSectionLayout";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ALL_PROJECTS } from "../data/all-projects";
import ProjectItemDetails from "../components/main/ProjectItemDetails";
import { Helmet } from "react-helmet";

function ProjectDetailsPage() {
    const { projectId } = useParams();
    const project = ALL_PROJECTS.find(p => p.id === projectId);
    const navigate = useNavigate();

    useEffect(() => {
        if (!project) {
            navigate("*");
        }
    }, [project, navigate]);

    return (
        project && (
            <>
                <Helmet>
                    <title>{project.title}</title>
                    <meta name="description" content={project.description} />
                </Helmet>

                <MainSectionLayout>
                    <ProjectItemDetails project={project} />
                </MainSectionLayout>
            </>
        )
    );
}

export default ProjectDetailsPage;
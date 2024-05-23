import HeaderAboutSection from "../components/header/HeaderAboutSection";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import ProjectsList from "../components/main/ProjectsList";
import { LATEST_PROJECTS } from "../data/latest-projects";
import { Helmet } from "react-helmet";

function HomePage() {
    return (
        <>
            <Helmet>
                <title>Home</title>  
                <meta name="description" content="Welcome to the Home Page of My Website." /> 
            </Helmet>

            <HeaderAboutSection/>
            <MainSectionLayout>
                <h1 className="center">Latest Projects</h1>
                <ProjectsList projects={LATEST_PROJECTS}/>
            </MainSectionLayout>
        </>        
    );
}

export default HomePage;
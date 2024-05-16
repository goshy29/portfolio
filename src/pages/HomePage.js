import HeaderAboutSection from "../components/header/HeaderAboutSection";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import ProjectsList from "../components/main/ProjectsList";

function HomePage() {
    return (
        <>
            <HeaderAboutSection/>
            <MainSectionLayout>
                <h1>Latest Projects</h1>
                <ProjectsList/>
            </MainSectionLayout>
        </>        
    );
}

export default HomePage;
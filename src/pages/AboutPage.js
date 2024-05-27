import { Helmet } from "react-helmet";
import MainSectionLayout from "../components/layout/MainSectionLayout";
import About from "../components/about/About";

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About</title>  
                <meta name="description" content="Learn more about the creator of this Website." /> 
            </Helmet>

            <MainSectionLayout>
                <About />
            </MainSectionLayout>
        </>
    );
}

export default AboutPage;
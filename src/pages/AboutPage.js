import { Helmet } from "react-helmet";

function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About</title>  
                <meta name="description" content="Learn more about the creator of this Website." /> 
            </Helmet>

            <h1>About Page</h1>
        </>
    );
}

export default AboutPage;
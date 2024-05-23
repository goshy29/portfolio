import { Helmet } from "react-helmet";

function ErrorPage() {
    return ( 
        <>
            <Helmet>
                <title>Error</title>  
                <meta name="description" content="Page Not Found." /> 
            </Helmet>

            <h1 className="center">Page Not Found</h1>
        </>
    );
}

export default ErrorPage;
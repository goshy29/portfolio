import { Helmet } from "react-helmet";

function ErrorPage() {
    return (
        <>
            <Helmet>
                <title>Error</title>
                <meta name="description" content="Page Not Found." />
            </Helmet>

            <div className="error">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        </>
    );
}

export default ErrorPage;
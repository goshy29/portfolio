import MainNavigation from "../header/MainNavigation";

function Layout(props) {
    return (
        <>
            <MainNavigation />
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;
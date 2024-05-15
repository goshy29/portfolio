import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;

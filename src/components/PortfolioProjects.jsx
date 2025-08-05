import { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import LoadingSpinner from "./LoadingSpinner";

const PortfolioProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(6); // Show 6 projects per page

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("projects.json");
        if (!response.ok) {
          throw new Error("Failed to load projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Pagination calculations
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Pagination handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Smooth scroll to projects section when changing pages
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  if (loading) {
    return (
      <div
        className="lg:mx-12 mx-4 my-32 bg-bg-secondary p-4 flex justify-center items-center min-h-[400px]"
        id="projects"
      >
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="lg:mx-12 mx-4 my-32 bg-bg-secondary p-4" id="projects">
        <div className="text-center">
          <p className="text-red-500 text-xl mb-4">Error loading projects: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="lg:mx-12 mx-4 my-32 bg-bg-secondary p-8 rounded-2xl shadow-xl border border-gray-700/30"
      id="projects"
    >
      <div className="flex flex-col md:flex-row justify-between mb-20 gap-8 md:items-center">
        <div className="text-text-primary">
          <h2 className="md:text-2xl text-4xl font-bold mb-5">
            My Recent Projects
          </h2>
          <p className="text-text-secondary md:text-sm text-lg">
            Here are some of my latest projects showcasing my skills in
            full-stack development, from real-time applications to e-commerce
            solutions.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/HasnathAhmedTamim"
            className="btn-secondary text-white bg-bg-tertiary flex items-center gap-2 hover:bg-primary transition-colors duration-300"
          >
            View All Projects <IoLogoGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className={`h-[380px] w-full shadow-lg rounded-lg cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col ${
              project.featured ? "ring-2 ring-primary/20" : ""
            }`}
          >
            <div className="relative overflow-hidden h-40 flex-shrink-0">
              <img
                src={project.image || "/src/assets/project-placeholder.png"}
                alt={`${project.name} project screenshot`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.target.src = "/src/assets/project-placeholder.png";
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {project.featured && (
                <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>
            <div className="p-4 bg-slate-900 flex-1 flex flex-col min-h-0">
              <h3 className="text-lg font-bold mb-2 text-gray-200 hover:text-primary transition-colors line-clamp-2">
                {project.name}
              </h3>
              <p className="text-gray-200 text-justify mb-3 text-sm leading-relaxed flex-1 overflow-hidden">
                {project.description}
              </p>

              {/* Tech stack */}
              {project.technologies && (
                <div className="mb-3 flex-shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-auto flex-shrink-0">
                <a
                  className="flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors text-sm"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} source code`}
                >
                  <IoLogoGithub className="w-4 h-4" />
                  Code
                </a>
                {project.live && (
                  <a
                    className="flex items-center gap-2 text-secondary hover:text-secondary/80 font-medium transition-colors text-sm"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} live demo`}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      {projects.length > projectsPerPage && (
        <div className="flex justify-center items-center mt-12 gap-2">
          {/* Previous Button */}
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === 1
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-bg-tertiary text-text-secondary hover:bg-primary hover:text-white"
            }`}
          >
            <FiChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex gap-1 mx-4">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1;
              const isCurrentPage = pageNumber === currentPage;

              return (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                    isCurrentPage
                      ? "bg-primary text-white shadow-lg"
                      : "bg-bg-tertiary text-text-secondary hover:bg-primary/20 hover:text-primary"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentPage === totalPages
                ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                : "bg-bg-tertiary text-text-secondary hover:bg-primary hover:text-white"
            }`}
          >
            Next
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Projects Per Page Info */}
      {projects.length > 0 && (
        <div className="text-center mt-6">
          <p className="text-text-tertiary text-sm">
            Showing {indexOfFirstProject + 1}-
            {Math.min(indexOfLastProject, projects.length)} of {projects.length}{" "}
            projects
          </p>
        </div>
      )}

      {projects.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">
            No projects found. Check back soon for updates!
          </p>
        </div>
      )}
    </div>
  );
};

export default PortfolioProjects;

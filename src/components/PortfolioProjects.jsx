import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoGithub } from "react-icons/io5";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import LoadingSpinner from "./LoadingSpinner";
import defaultProjectImage from "../assets/project-1.png";

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
        className="section-shell flex min-h-[400px] items-center justify-center"
        id="projects"
      >
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="section-shell" id="projects">
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
      className="section-shell"
      id="projects"
    >
      <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl text-text-primary">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-primary/90">
            Selected Work
          </p>
          <h2 className="mb-5 text-4xl font-bold md:text-2xl">
            My Recent Projects
          </h2>
          <p className="text-lg text-text-secondary md:text-sm">
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
            className="btn-secondary inline-flex items-center gap-2 bg-bg-tertiary text-white transition-colors duration-300 hover:bg-primary"
          >
            View All Projects <IoLogoGithub className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* project cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {currentProjects.map((project) => (
          <div
            key={project.id}
            className={`group flex h-[400px] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-2xl ${
              project.featured ? "ring-2 ring-primary/20" : ""
            }`}
          >
            <div className="relative h-44 flex-shrink-0 overflow-hidden">
              <img
                src={project.image || defaultProjectImage}
                alt={`${project.name} project screenshot`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = defaultProjectImage;
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {project.featured && (
                <div className="absolute top-3 right-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-white shadow-lg shadow-primary/30">
                  Featured
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent" />
            </div>
            <div className="flex min-h-0 flex-1 flex-col p-5">
              <h3 className="mb-2 line-clamp-2 text-lg font-bold text-gray-100 transition-colors hover:text-primary">
                {project.name}
              </h3>
              <p className="mb-4 flex-1 overflow-hidden text-justify text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>

              {/* Tech stack */}
              {project.technologies && (
                <div className="mb-4 flex-shrink-0">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-gray-300">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-auto flex flex-wrap gap-3 flex-shrink-0">
                <a
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-secondary transition-colors hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
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
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm font-medium text-secondary transition-colors hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.name} live demo`}
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/40 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                  aria-label={`View details for ${project.name}`}
                >
                  View More / Details
                </Link>
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

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io5";
import LoadingSpinner from "./LoadingSpinner";
import Footer from "./Footer";
import defaultProjectImage from "../assets/project-1.png";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("/projects.json");

        if (!response.ok) {
          throw new Error("Failed to load project details");
        }

        const data = await response.json();
        setProjects(data);
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const project = projects.find((item) => String(item.id) === projectId);

  const projectFallback = project
    ? {
        challenge:
          project.challenge ||
          "This project focused on turning the core requirements into a polished, responsive experience while keeping the implementation maintainable.",
        futurePlans:
          project.futurePlans ||
          "Future versions can add deeper case-study content, more interaction states, and stronger storytelling around the implementation.",
      }
    : null;

  if (loading) {
    return (
      <section className="min-h-screen bg-bg-primary px-4 lg:px-12 pt-28 flex items-center justify-center">
        <LoadingSpinner size="large" />
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-bg-primary px-4 lg:px-12 pt-28">
        <div className="surface-card max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Project details could not be loaded
          </h1>
          <p className="text-text-secondary mb-6">{error}</p>
          <a href="/#projects" className="btn-primary inline-flex">
            Back to Projects
          </a>
        </div>
      </section>
    );
  }

  if (!project) {
    return (
      <section className="min-h-screen bg-bg-primary px-4 lg:px-12 pt-28">
        <div className="surface-card max-w-4xl mx-auto p-8 text-center">
          <h1 className="text-3xl font-bold text-text-primary mb-4">
            Project not found
          </h1>
          <p className="text-text-secondary mb-6">
            The project you requested does not exist or the link is outdated.
          </p>
          <a href="/#projects" className="btn-primary inline-flex">
            Back to Projects
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      <main className="bg-bg-primary min-h-screen px-4 lg:px-12 pt-28 pb-20">
        <div className="max-w-6xl mx-auto">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:text-primary/80 transition-colors"
          >
            ← Back to Projects
          </a>

          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-start">
            <div className="surface-card overflow-hidden">
              <img
                src={project.image || defaultProjectImage}
                alt={`${project.name} preview`}
                className="w-full h-[320px] object-cover"
                onError={(event) => {
                  event.currentTarget.src = defaultProjectImage;
                }}
              />
            </div>

            <div className="surface-card space-y-6 p-8">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
                  Project Detail
                </p>
                <h1 className="text-4xl font-bold text-text-primary mb-4">
                  {project.name}
                </h1>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-text-primary mb-3">
                  Main Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies?.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    Live Project <FiExternalLink />
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary inline-flex items-center gap-2"
                  >
                    Client Repo <IoLogoGithub />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
            <article className="surface-card p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Brief Description
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.description}
              </p>
            </article>

            <article className="surface-card p-8">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Challenges Faced
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {projectFallback.challenge}
              </p>
            </article>

            <article className="surface-card p-8 lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                Potential Improvements and Future Plans
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {projectFallback.futurePlans}
              </p>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetails;
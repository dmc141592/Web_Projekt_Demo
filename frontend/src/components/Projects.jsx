import { useState } from "react";

const projects = [
  {
    title: "Firmenwebseite",
    text: "Responsive Website für ein lokales Unternehmen.",
    category: "web"
  },
  {
    title: "Landingpage",
    text: "Klare Struktur und modernes Layout für Kampagnen.",
    category: "design"
  },
  {
    title: "Portfolio Seite",
    text: "Saubere React-Struktur mit Kontaktbereich.",
    category: "web"
  }
];

function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="section section-alt">
      <h2>Projekte</h2>

      <div className="filter-buttons">
        <button
          className={filter === "all" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("all")}
        >
          Alle
        </button>

        <button
          className={filter === "web" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("web")}
        >
          Web
        </button>

        <button
          className={filter === "design" ? "filter-btn active" : "filter-btn"}
          onClick={() => setFilter("design")}
        >
          Design
        </button>
      </div>

      <div className="project-grid">
        {filteredProjects.map((project) => (
          <article className="project-card" key={project.title}>
            <span>{project.category}</span>
            <h3>{project.title}</h3>
            <p>{project.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
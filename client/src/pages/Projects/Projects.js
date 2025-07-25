import React from "react";
import "./Projects.css";
import todo from "../../assets/images/todo.png";

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    type: "Full Stack",
    image: "",
    tech: ["Node", "React", "MYSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "To-Do List Web App",
    type: "Full Stack",
    image: todo,
    tech: ["Django", "MySQL"],
    link: "#",
  },
  {
    id: 3,
    title: "Job Portal",
    type: "Backend",
    image: "https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png",
    tech: ["Node", "Express", "NoSQL"],
    link: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    type: "Full Stack",
    image: "", // use another placeholder or leave blank
    tech: ["React", "Node", "MongoDB"],
    link: "#",
  },
  {
    id: 5,
    title: "Portfolio Site",
    type: "Frontend",
    image: "", // placeholder or upload a jpg
    tech: ["Next.js", "Tailwind"],
    link: "#",
  },
  {
    id: 6,
    title: "E-Commerce API",
    type: "Backend",
    image: "", // placeholder
    tech: ["Express", "SQL"],
    link: "#",
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="section-card project" id="projects" aria-label="Projects">
      <h2 className="col-12 mt-3 mb-1 text-center">Top Recent Projects</h2>
      <hr />
      <div className="row" id="ads">
        {projects.map(({ id, title, type, image, tech, link }) => (
          <article
            className="col-md-4"
            key={id}
            tabIndex={0}
            aria-label={`${title} project`}
          >
            <div className="card" tabIndex={-1}>
              <div className="card-image">
                <span className="card-notify-badge" aria-label={`${type} project type`}>
                  {type}
                </span>
                {image ? (
                  <img src={image} alt={title} loading="lazy" />
                ) : (
                  <div
                    style={{
                      height: "200px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#23243f",
                      color: "#f29f67",
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      borderRadius: "25px 25px 0 0",
                    }}
                  >
                    No Image
                  </div>
                )}
              </div>
              <div className="card-image-overly m-auto mt-3">
                {tech.map((techItem, index) => (
                  <span key={index} className="card-detail-badge" tabIndex={-1}>
                    {techItem}
                  </span>
                ))}
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h6 className="text-uppercase">{title}</h6>
                </div>
                <a
                  className="ad-btn"
                  href={link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} project`}
                >
                  View
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

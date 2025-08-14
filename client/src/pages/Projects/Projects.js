import React, { useEffect, useRef } from "react";
import "./Projects.css";
import todo from "../../assets/images/todo.png";

const projects = [
  {
    id: 1,
    title: "Restaurant Website",
    description: "A full-featured restaurant platform with food ordering and reservation capabilities.",
    type: "Full Stack",
    image: "", // Add actual path or leave empty for placeholder
    tech: ["Node", "React", "MYSQL"],
    link: "#",
  },
  {
    id: 2,
    title: "To-Do List Web App",
    description: "Elegant, minimal app for personal task management with authentication and data persistence.",
    type: "Full Stack",
    image: todo,
    tech: ["Django", "MySQL"],
    link: "#",
  },
  {
    id: 3,
    title: "Job Portal",
    description: "Smart job search and apply platform for both recruiters and job-seekers, real-time notifications.",
    type: "Backend",
    image: "https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png",
    tech: ["Node", "Express", "NoSQL"],
    link: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "User-friendly blogging engine supporting markdown, tags, comments, and likes.",
    type: "Full Stack",
    image: "", // Add actual path or leave empty
    tech: ["React", "Node", "MongoDB"],
    link: "#",
  },
  {
    id: 5,
    title: "Portfolio Site",
    description: "Snappy, beautiful, and mobile-first personal portfolio (the site you're seeing!).",
    type: "Frontend",
    image: "", // Add actual path or leave empty
    tech: ["Next.js", "Tailwind"],
    link: "#",
  },
  {
    id: 6,
    title: "E-Commerce API",
    description: "Robust and secure REST API powering carts, orders & payment for scalable shops.",
    type: "Backend",
    image: "", // Add actual path or leave empty
    tech: ["Express", "SQL"],
    link: "#",
  }
];

const placeholder = (
  <div className="card-placeholder" aria-hidden="true">
    Image Coming Soon
  </div>
);

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      cardsRef.current.forEach((el) => el?.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-card project" id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="text-center">Top Recent Projects</h2>
      <hr />
      <div className="project-grid">
        {projects.map(({ id, title, description, type, image, tech, link }, idx) => (
          <article
            key={id}
            ref={(el) => (cardsRef.current[idx] = el)}
            className="project-card-vertical"
            tabIndex={0}
            aria-label={`${title} project`}
          >
            {image ? (
              <img
                src={image}
                alt={`${title} preview`}
                className="project-img"
                width="320"
                height="200"
                loading="lazy"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "12px"
                }}
              />
            ) : (
              placeholder
            )}

            <h3>{title}</h3>
            <p className="project-desc">{description}</p>
            <div className="project-tech">
              {tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            {link && link !== "#" ? (
              <a
                className="btn-custom"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} project`}
              >
                View Project
              </a>
            ) : (
              <span className="btn-custom disabled">Coming Soon</span>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

import React, { useEffect, useRef } from "react";
import "./Techstack.css";
import { BsFiletypeHtml, BsFiletypeCss, BsBootstrap } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiMysql,
  SiGithub,
  SiDocker,
} from "react-icons/si";

const TechstackList = [
  { id: "html", name: "HTML", icon: BsFiletypeHtml },
  { id: "css", name: "CSS", icon: BsFiletypeCss },
  { id: "bootstrap", name: "Bootstrap", icon: BsBootstrap },
  { id: "js", name: "JavaScript", icon: SiJavascript },
  { id: "react", name: "React JS", icon: SiReact },
  { id: "tailwind", name: "Tailwind CSS", icon: SiTailwindcss },
  { id: "figma", name: "Figma", icon: SiFigma },
  { id: "node", name: "Node JS", icon: FaNodeJs },
  { id: "sql", name: "SQL", icon: SiMysql },
  { id: "git", name: "Git & GitHub", icon: SiGithub },
  { id: "docker", name: "Docker", icon: SiDocker },
  { id: "next", name: "Next.js", icon: TbBrandNextjs },
];

const Techstack = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      itemsRef.current.forEach((el) => el?.classList.add("reveal-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    itemsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="techstack" id="techstack" aria-labelledby="techstack-heading">
      <h2 id="techstack-heading">Technologies Stack</h2>
      <hr />
      <p className="techstack-sub">
        👉 Including programming languages, frameworks, databases, front-end and back-end tools, and APIs
      </p>

      <ul className="skill-grid" role="list">
        {TechstackList.map(({ id, name, icon: Icon }, idx) => (
          <li
            key={id}
            className="skill-card"
            ref={(el) => (itemsRef.current[idx] = el)}
            style={{ "--stagger": `${idx * 70}ms` }}
            tabIndex={0}
            aria-label={name}
          >
            <Icon className="skill-icon" aria-hidden="true" focusable="false" />
            <h5 className="skill-name">{name}</h5>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Techstack;

import React from "react";
import "./Techstack.css";
import Fade from "react-reveal/Fade";
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
  { _id: 1, name: "HTML", icon: BsFiletypeHtml },
  { _id: 2, name: "CSS", icon: BsFiletypeCss },
  { _id: 3, name: "Bootstrap", icon: BsBootstrap },
  { _id: 4, name: "Javascript", icon: SiJavascript },
  { _id: 7, name: "React JS", icon: SiReact },
  { _id: 10, name: "Tailwind CSS", icon: SiTailwindcss },
  { _id: 11, name: "Figma", icon: SiFigma },
  { _id: 15, name: "Node JS", icon: FaNodeJs },
  { _id: 19, name: "SQL", icon: SiMysql },
  { _id: 21, name: "Git / Github", icon: SiGithub },
  { _id: 22, name: "Docker", icon: SiDocker },
  { _id: 23, name: "Next.js", icon: TbBrandNextjs },
];

const Techstack = () => {
  return (
    <section className="techstack" id="techstack" aria-label="Technologies Stack">
      <h2>Technologies Stack</h2>
      <hr />
      <p>👉 Including programming languages, frameworks, databases, front-end and back-end tools, and APIs</p>
      <div className="skill-row" role="list">
        {TechstackList.map(({ _id, name, icon: Icon }) => (
          <Fade left key={_id}>
            <div
              role="listitem"
              tabIndex={0}
              aria-label={`${name} technology`}
              className="skill-card"
              onFocus={(e) => (e.currentTarget.style.boxShadow = "0 0 12px #34d1c0aa")}
              onBlur={(e) => (e.currentTarget.style.boxShadow = "none")}
            >
              <Icon className="skill-icon" aria-hidden="true" />
              <h5>{name}</h5>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Techstack;

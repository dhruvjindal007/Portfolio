import React from 'react';
import './Edu.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

const educationData = [
  {
    degree: "10th class | CBSE",
    institution: "Ryan International School",
    Result: "94%",
    date: "2015",
    icon: <MdSchool aria-label="School Icon" />,
  },
  {
    degree: "12th class | CBSE",
    institution: "St Peter's Senior Secondary School",
    Result: "89%",
    date: "2017",
    icon: <MdSchool aria-label="School Icon" />,
  },
  {
    degree: "B.Tech in Electrical Engineering",
    institution: "Punjab Engineering College",
    Result: "7.12 (Till date)",
    date: "2017 - Present",
    icon: <FaUniversity aria-label="University Icon" />,
  },
];

function Edu() {
  return (
    <section className="container edu section-card" id="education" aria-label="Education qualifications">
      <h2>EDUCATION QUALIFICATIONS</h2>
      <hr />
      <VerticalTimeline>
        {educationData.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "inherit", color: "inherit", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: "8px solid #f29f67" }}
            date={edu.date}
            iconStyle={{ background: "inherit", color: "inherit", boxShadow: "none" }}
            icon={edu.icon}
          >
            <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
            <h4 className="vertical-timeline-element-subtitle">{edu.institution}</h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Edu;

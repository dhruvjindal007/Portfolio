import React, { useEffect, useRef } from 'react';
import './Edu.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

const educationData = [
  {
    degree: "10th Class | CBSE",
    institution: "Ryan International School",
    result: "94%",
    date: "2015",
    iconType: "school",
  },
  {
    degree: "12th Class | CBSE",
    institution: "St Peter's Senior Secondary School",
    result: "89%",
    date: "2017",
    iconType: "school",
  },
  {
    degree: "B.Tech in Electrical Engineering",
    institution: "Punjab Engineering College",
    result: "7.12 CGPA (Till date)",
    date: "2017 – Present",
    iconType: "university",
  }
];

function Edu() {
  const itemsRef = useRef([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // Respect reduced motion — reveal all instantly
      itemsRef.current.forEach(el => el?.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="edu section-card" id="education" aria-labelledby="education-title">
      <h2 id="education-title">Education Qualifications</h2>
      <hr />
      <VerticalTimeline>
        {educationData.map((edu, index) => (
          <VerticalTimelineElement
            key={index}
            aria-label={`${edu.degree} at ${edu.institution}, Result: ${edu.result}`}
            date={edu.date}
            icon={
              edu.iconType === "school"
                ? <MdSchool aria-hidden="true" />
                : <FaUniversity aria-hidden="true" />
            }
            // Custom class for animation
            contentClassName="timeline-reveal"
            contentArrowClassName="timeline-reveal-arrow"
          >
            <div
              className="timeline-reveal-item"
              ref={el => (itemsRef.current[index] = el)}
            >
              <h3 className="vertical-timeline-element-title">{edu.degree}</h3>
              <p className="vertical-timeline-element-subtitle">{edu.institution}</p>
              <p className="edu-result">Result: {edu.result}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Edu;

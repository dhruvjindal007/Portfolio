import { useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !msg.trim()) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message || "Something went wrong.");
      }
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
    }
  };

  return (
    <section
      className="section-card contact-container"
      id="contact"
      aria-labelledby="contact-heading"
    >
      {/* Contact image */}
      <div className="contact-image">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.shutterstock.com/image-photo/hand-show-icon-address-phone-600nw-2475999141.jpg"
            alt="Illustration representing contact methods"
            loading="lazy"
            decoding="async"
            width="500"
            height="350"
            tabIndex={0}
          />
        </div>
      </div>

      {/* Contact form */}
      <div className="contact-form">
        <form
          className="card2"
          onSubmit={handleSubmit}
          noValidate
        >
          <h2 id="contact-heading" className="contact-header-title">
            Contact Me
          </h2>

          <div className="contact-header-links" aria-hidden="true">
            <a
              href="https://www.linkedin.com/in/dhruv-jindal-322408294"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/dhruvjindal007"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <FaGithub size={30} />
            </a>
          </div>

          <div className="divider" aria-hidden="true">
            <span className="line" />
            <small className="or">OR</small>
            <span className="line" />
          </div>

          <label htmlFor="name" className="visually-hidden">
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
          />

          <label htmlFor="email" className="visually-hidden">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />

          <label htmlFor="msg" className="visually-hidden">
            Message
          </label>
          <textarea
            id="msg"
            placeholder="Write your message"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows={5}
            required
          />

          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

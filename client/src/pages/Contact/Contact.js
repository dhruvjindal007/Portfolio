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
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Failed to send message. Try again later.");
      console.error(error);
    }
  };

  return (
    <section className="section-card contact-container" id="contact" aria-label="Contact section">
      <div className="contact-image">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://www.shutterstock.com/image-photo/hand-show-icon-address-phone-600nw-2475999141.jpg"
            alt="Phone icon representing contact"
            loading="lazy"
            tabIndex={0}
          />
        </div>
      </div>
      <div className="contact-form">
        <form className="card2 d-flex card border-0 px-4 py-3" onSubmit={handleSubmit} noValidate>
          <h6 className="contact-header">
            <div className="line" />
            <span>Contact With</span>
            <a
              href="https://www.linkedin.com/in/dhruv-jindal-322408294"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              tabIndex={0}
            >
              <FaLinkedin color="blue" size={30} />
            </a>
            <a
              href="https://github.com/dhruvjindal007"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              tabIndex={0}
            >
              <FaGithub color="black" size={30} />
            </a>
            <div className="line" />
          </h6>

          <div className="row-px-3 mb-4">
            <div className="line" />
            <small className="or">OR</small>
            <div className="line" />
          </div>

          <input
            id="name"
            type="text"
            name="name"
            placeholder="Enter your Name"
            className="mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-required="true"
            aria-label="Name"
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your Email Address"
            className="mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-required="true"
            aria-label="Email"
          />
          <textarea
            id="msg"
            name="msg"
            placeholder="Write your message"
            className="mb-3"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows={5}
            required
            aria-required="true"
            aria-label="Message"
          />
          <button type="submit" className="button" aria-label="Send message">
            SEND
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

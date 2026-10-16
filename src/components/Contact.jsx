import { CONTACT } from "../constants";
import { GITHUB, LEETCODE, LINKEDIN } from "../constants";

const Contact = () => {
  return (
    <footer className="contact-section" id="contact">
      <div className="contact-main">
        <p className="eyebrow">Get in touch</p>
        <h2>Open to thoughtful<br /><em>conversations.</em></h2>
        <a className="contact-email focus-ring" href={`mailto:${CONTACT.email}`}>
          {CONTACT.email}<span aria-hidden="true">&#8599;</span>
        </a>
      </div>
      <div className="contact-bottom">
        <p>Pune, India</p>
        <div className="social-links">
          <a className="focus-ring" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">&#8599;</span></a>
          <a className="focus-ring" href={GITHUB} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">&#8599;</span></a>
          <a className="focus-ring" href={LEETCODE} target="_blank" rel="noreferrer">LeetCode <span aria-hidden="true">&#8599;</span></a>
        </div>
        <span className="mono-label">Kunal Jadhav / Portfolio</span>
      </div>
    </footer>
  );
};

export default Contact;

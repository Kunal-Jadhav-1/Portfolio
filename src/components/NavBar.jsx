import Resume from "../assets/Kunal_Jadhav_Resume.pdf";

const NavBar = () => {
  return (
    <nav className="site-nav" aria-label="Main navigation">
      <a className="wordmark focus-ring" href="#top" aria-label="Kunal Jadhav, home">
        <span className="wordmark-mark">KJ</span>
        <span>Kunal Jadhav</span>
      </a>
      <div className="nav-links">
        <a className="focus-ring" href="#experience">Experience</a>
        <a className="focus-ring" href="#projects">Projects</a>
        <a className="focus-ring" href="#contact">Contact</a>
        <a className="nav-resume focus-ring" href={Resume} target="_blank" rel="noreferrer" download="Kunal_Jadhav_Resume.pdf">Resume <span aria-hidden="true">&#8599;</span></a>
      </div>
    </nav>
  );
};

export default NavBar;

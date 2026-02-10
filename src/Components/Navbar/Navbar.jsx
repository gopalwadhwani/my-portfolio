import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="nav-title" href="/">Portfolio</a>
      <div className="nav-menu">
      <ul className="nav-menuitems">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
import "./Hero.css";
import heroImg from "../../../assets/portfolio-removebg-preview.png";

const Hero = () => {
  const words = [
    "I’m",
    "a",
    "full-stack",
    "developer",
    "who",
    "loves",
    "turning",
    "ideas",
    "into",
    "interactive,",
    "beautiful,",
    "and",
    "responsive",
    "websites!"
  ];

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I’m <span>Gopal</span>
        </h1>

        <p className="hero-description">
          {words.map((word, index) => (
            <span
              key={index}
              className="hero-word"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>

        <a href="mailto:gopalwadhwani435@gmail.com" className="hero-contact-btn">
          Contact Me
        </a>

      </div>

      <div className="hero-image-wrapper">
        <img src={heroImg} alt="Hero" className="hero-image" />
      </div>

      <div className="hero-top-blur"></div>
      <div className="hero-bottom-blur"></div>
    </section>
  );
};

export default Hero;

import { useState, useEffect,useLayoutEffect } from "react";
import "./App.css";
import suitPic from "./assets/group-43.jpg";
import ChillNightWithTheDogs from "./assets/ChillNightWithTheDogs.PNG"
import oldIcon from "./assets/oldIcon.png";
import bsuFlowers from "./assets/bsuFlowers.jpg";
import famPic from "./assets/famPic.png";
// import project1Image from "./assets/famPic.png";
// import retroGameBG from "./assets/animatedRetroGameBG.gif";

const images = [suitPic, ChillNightWithTheDogs, oldIcon, bsuFlowers, famPic];

// const projectLinks = [
//   { url: "https://github.com/yourusername/project1", image: project1Image }
// ];

// console.log("If you're reading this why are you snooping in my bidness!? Since you're so nosey check this out: https://www.youtube.com/watch?v=xvFZjo5PgG0");

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show"); // Add "show" class when section enters view
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    // Select all sections to animate
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDarkMode ? "dark" : "light"
    );
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <>
      {/* INTRO SECTION */}
      <section id="intro" className="section hidden">
      <button
        className="themeToggle"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
        <div className="aboutContainer">
          <div className="introP">
            <h1>Damon Stangel</h1>
            <h2>Applications Developer & Front-end Developer</h2>
            <div className="resumeButtonDiv">
              <p>Download my resume!</p>
              <a href="/resume.pdf" download="Damon Stangel Resume.pdf">
                <button className="buttonColorChange">Download PDF</button>
              </a>
            </div>
          </div>

          <div className="scrollDown" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="chevron-down" className="lucide lucide-chevron-down w-8 h-8"><path d="m6 9 6 6 6-6"></path></svg>
          </div>
          
        </div>
      </section>
      <section id="aboutMe" className="section hidden">
  <h1> <i>About Me </i></h1>
  <div className="aboutSection">
    <div className="aboutList">
      {/* Circular Image */}
      <div className="image-container">
        <img src={suitPic} alt="Profile Image" />
      </div>

      {/* Text Content */}
      <div>
        <p>
          Hello, my name is Damon Stangel. I'm currently an Application
          Developer for{" "}
          <a href="https://www.prowestgis.com/" target="_blank" rel="noopener noreferrer">
            <u>Pro-West & Associates Inc.</u>
          </a>
          </p>
          <p>I consider myself a skilled front-end developer and application
          developer, who's passionate about building interactive web
          experiences and applications.</p>

        <p>
          <b>What Interests Me: </b> In my free time I like to play video games and I love to workout. Playing basketball has always been a hobby of mine. Occasionally I like to go watch Minnesota Timberwolves games.
        </p>

      </div>
    </div>
  </div>
</section>


<section id="skillSection" className="section hidden">
  <h1><i>Skills</i></h1>
  <div className="skillsSectionDiv">
            <div className="listSkills">
              <div>
                <h3>Front End</h3>
                <ul>
                  <li>TypeScript</li>
                  <li>Angular</li>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>Vite</li>
                  <li>HTML & CSS</li>
                </ul>
              </div>
              <div>
                <h3>Back End</h3>
                <ul>
                  <li>Python</li>
                  <li>Node.js</li>
                  <li>.NET</li>
                  <li>C#</li>
                  <li>mySQL</li>
                </ul>
              </div>
              <div>
                <h3>DevOps & Tools</h3>
                <ul>
                  <li>OpenSearch API</li>
                  <li>Lighthouse (DevTools)</li>
                  <li>Docker</li>
                  <li>Git/GitHub</li>
                  <li>AWS (Some exp.)</li>
                  <li>CI/CD (GitHub Actions, Jenkins, etc.)</li>
                </ul>
              </div>

            </div>

          </div>
          <div 
            className="langIcons" style={{ filter: isDarkMode ? "invert(1)" : "invert(0)" }}>


                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/typescript.svg" alt="TS" className="tech-icon"/>
                    {/* <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/html5.svg" alt="HTML5" className="tech-icon"/> */}
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/angular.svg" alt="Angular" className="tech-icon"/>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/dotnet.svg" alt=".NET" className="tech-icon"/>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/mysql.svg" alt="mySQL" className="tech-icon"/>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg" alt="React" className="tech-icon"/>
                    <img src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/javascript.svg" alt="JavaScript" className="tech-icon"/>
          </div>
</section>
<section id="projectsSection" className="section hidden">
<div className="container mx-auto px-4 max-w-6xl projects-container">
<div className="w-full text-center">
  <h1 className="text-4xl font-bold mb-8 font-space-mono">
    <i>Projects</i>
  </h1>
</div>
  <div className="projectsGrid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="project-tile">
                    <div className="project-thumbnail mb-4 " onClick={() => window.open("https://github.com/DamonStangel", "_blank")}>
                      <img 
                          src="https://opengraph.githubassets.com/1/" 
                          alt="Project X" 
                          className="w-full h-full object-cover"
                      />
                      <div className="redirect-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="external-link" className="lucide lucide-external-link">
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14 21 3"></path>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          </svg>
                      </div>
                    </div>
                      <h3 className="text-xl font-bold mb-2">Project X</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">WORK IN PROGRESS</p>
                      <a href="https://github.com/DamonStangel" target="_blank" className="read-more">
                          Find More{" "}   
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="github" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      </a>
                  </div>
                  <div className="project-tile">
                    <div className="project-thumbnail mb-4 " onClick={() => window.open("https://github.com/DamonStangel", "_blank")}>
                      <img 
                          src="https://opengraph.githubassets.com/1/" 
                          alt="Project X" 
                          className="w-full h-full object-cover"
                      />
                      <div className="redirect-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="external-link" className="lucide lucide-external-link">
                              <path d="M15 3h6v6"></path>
                              <path d="M10 14 21 3"></path>
                              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          </svg>
                      </div>
                    </div>
                      <h3 className="text-xl font-bold mb-2">Project Y</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Scheduled Project</p>
                      <a href="https://github.com/DamonStangel" target="_blank" className="read-more">
                          Find More{" "}   
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="github" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                      </a>
                  </div>
                </div>
            </div>
</section>
<section id="contactSection" className="section hidden">
<div className="text-center mt-10">
  <h2 className="font-italic text-xl"><i><u>Contact Me</u></i></h2>
  
  <nav className="flex flex-wrap justify-center items-center gap-6 mt-4">
    
    {/* GitHub */}
    <a href="https://github.com/DamonStangel" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
        <path d="M9 18c-4.51 2-5-2-7-2"></path>
      </svg>
      <span className="mt-1 text-sm font-semibold">{" "}  GitHub{" "}{" "}    </span>
    </a>

    {/* Resume */}
    <a href="/resume.pdf" download="Damon Stangel Resume.pdf" className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
        <path d="M10 9H8"></path>
        <path d="M16 13H8"></path>
        <path d="M16 17H8"></path>
      </svg>
      <span className="mt-1 text-sm font-semibold">{" "}  Resume{" "}{" "}    </span>
    </a>

    {/* LinkedIn */}
    <a href="https://www.linkedin.com/in/damon-stangel-80155626b/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
      <span className="mt-1 text-sm font-semibold">{" "}  LinkedIn{" "} {" "}   </span>
    </a>

    {/* Instagram */}
    <a href="https://instagram.com/damonjuice" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
      </svg>
      <span className="mt-1 text-sm font-semibold">{" "}  Instagram{" "}{" "}    </span>
    </a>

    {/* Email */}
    <a href="mailto:damonstangel@gmail.com" className="flex flex-col items-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
      <span className="mt-1 text-sm font-semibold">{" "}  Contact{" "}{" "}    </span>
    </a>

  </nav>
</div>




</section>
<footer id="footerSection">
© 2026 Damon Stangel Portfolio. Built using React & Vite.
</footer>
    </>
  );
}

export default App;

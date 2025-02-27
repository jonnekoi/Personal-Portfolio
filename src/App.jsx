import './App.css'

function App() {



  return (
      <>
        <div className="flex items-center w-full justify-center flex-col mobile-main">
          <section className="flex flex-col items-center text-center m-12 section-mobile">
            <div className="h-1/2 w-1/2 picture-mobile">
            <img
                src="src/assets/ProfilePic.jpg"
                alt="Profile Picture"
                className="rounded-full mb-4"/>
            </div>
            <h1 className="text-white text-6xl font-bold font-myFont">Jonne
              Koivisto</h1>
            <h2 className="text-white text-2xl font-myFont">Software Engineer
              Student</h2>
          </section>

          <section className="text-center m-14 section-mobile">
            <h3 className="text-white font-bold text-2xl font-myFont"> About
              Me</h3>
            <p className="max-w-110 text-white code-text m-12">I study
              Information and Communication at Metropolia University of Applied
              Sciences, majoring in software engineering with emphasis in
              machine learning.
              I aim to leverage my technical expertise, strong communication
              skills and problem-solving abilities to contribute to innovative
              and impactful projects.
              I enjoy front-end development and have a intuitive and
              user-centric approach to design.
              In my free time, I like to go to the gym and also practice
              football a few times a week.</p>
          </section>

          <section className="text-center m-14 section-mobile-tech">
            <h3 className="text-white font-bold text-2xl font-myFont">Technologies</h3>
            <div className="grid grid-cols-4 grid-flow-row m-7 grid-mobile-section">
              <div className="tech-card">
                <i className="devicon-javascript-plain"></i>
                <p className="m-2">JavaScript</p>
              </div>
              <div className="tech-card">
                <i className="devicon-python-plain"></i>
                <p className="m-2">Python</p>
              </div>
              <div className="tech-card">
                <i className="devicon-java-plain"></i>
                <p className="m-2">Java</p>
              </div>
              <div className="tech-card">
                <i className="devicon-typescript-plain"></i>
                <p className="m-2">TypeScript</p>
              </div>
              <div className="tech-card">
                <i className="devicon-react-original"></i>
                <p className="m-2">React</p>
              </div>
              <div className="tech-card">
                <i className="devicon-tailwindcss-original"></i>
                <p className="m-2">Tailwind CSS</p>
              </div>
              <div className="tech-card">
                <i className="devicon-nodejs-plain-wordmark"></i>
                <p className="m-2">Node.js</p>
              </div>
              <div className="tech-card">
                <i className="devicon-spring-original"></i>
                <p className="m-2">Spring Boot</p>
              </div>
              <div className="tech-card">
                <i className="devicon-express-original-wordmark"></i>
                <p className="m-2">Express</p>
              </div>
              <div className="tech-card">
                <i className="devicon-mariadb-original"></i>
                <p className="m-2">MariaDB</p>
              </div>
              <div className="tech-card">
                <i className="devicon-git-plain"></i>
                <p className="m-2">Git</p>
              </div>
              <div className="tech-card">
                <i className="devicon-github-original"></i>
                <p className="m-2">GitHub</p>
              </div>
              <div className="tech-card">
                <i className="devicon-figma-plain"></i>
                <p className="m-2">Figma</p>
              </div>
              <div className="tech-card">
                <i className="devicon-jenkins-line"></i>
                <p className="m-2">Jenkins</p>
              </div>
              <div className="tech-card">
                <i className="devicon-docker-plain"></i>
                <p className="m-2">Docker</p>
              </div>
              <div className="tech-card">
                <i className="devicon-junit-plain-wordmark"></i>
                <p className="m-2">Junit</p>
              </div>
            </div>
          </section>

          <section className="text-center m-14">
            <h3 className="text-white font-bold text-2xl font-myFont">Projects</h3>
            <div className="grid grid-cols-3 grid-flow-row m-7 grid-mobile-section-project">
              <div className="project-card">
                <h1 className="text-2xl m-5 font-bold">Air travellers
                  challenge</h1>
                <p className="">This was the first coding project I was part of.
                  This game has two versions, the first one worked with terminal
                  without user interface and the second version had a user
                  interface.
                  The idea of the game is to travel around the world with as low
                  consumptions as possible and answer questions on the way and
                  earn points.
                  The correct guesses earned you money to travel.
                </p>
                <p className="m-5">Technologies used in this project Python,
                  JavaScript, HTML and CSS.</p>
              </div>

              <div className="project-card">
                <h1 className="text-2xl m-5 font-bold">Cake Factory</h1>
                <p className="">This project was part of our web development
                  studies.
                  Our project goal was to create online shop for pastrys with
                  dashboard for owner to manage the site.
                  I was responsible for the front-end development of the
                  project, mainly on dashboard.
                  I also did back-end development with my team.
                </p>
                <p className="m-5">Technologies
                  used in this project were JavaScript, Node.js, HTML, CSS and
                  MariaDB.</p>
              </div>

              <div className="project-card">
                <h1 className="text-2xl m-5 font-bold">Inventory Management
                  System</h1>
                <p className="">We created a very simple inventory management
                  system.
                  This projects main thing was not the end product but i focused
                  more on learning agile methodologies, project management,
                  testing and documentation.
                  In summary, this was more about the whole lifecycle of
                  software product.
                </p>
                <p className="m-5">Technologies used in this project were Java,
                  Spring Boot, JavaFX, MariaDB, Junit, Jenkins and Docker.</p>
              </div>

              <div className="project-card">
                <h1 className="text-2xl m-5 font-bold">Euro 2024 Guesses</h1>
                <p className="">This was my personal project that I developed to
                  me and my friends.
                  We faced this issue where Excel was not the best tool for our
                  purpose, since you can see each others guesses.
                  So I developed this project and deployed it on a Rocky Linux
                  server.
                </p>
                <p className="m-5">Technologies used in this project were
                  JavaScript, Node.js, React, Tailwind and MariaDB.</p>
              </div>

              <div className="project-card">
                <h1 className="text-2xl m-5 font-bold">League Guesser</h1>
                <p className="">This is a second version of my personal project
                  Euro 2024 Guesses.
                  Inspired by the first one I started to work on this.
                  This one is for more general use, not only for specific event.
                  You can create your own leagues, invite friends and start
                  guessing.
                  You can also add own matches to your specific league.
                </p>
                <p className="m-5">Technologies used in this project were
                  JavaScript, Node.js, React, Tailwind and MariaDB.</p>
              </div>

              <div className="project-card">
                <h1 className="text-2xl m-5 font-bold">Personal Portfolio</h1>
                <p className="">This is as you can propably guess, this site!
                  The purpose is to give a brief overview of me and my skills.
                  I wanted to have a simple and clean design.
                </p>
                <p className="m-5">Technologies used in this project were
                  JavaScript, React, Tailwind.</p>
              </div>

            </div>


          </section>

          <section className="text-center m-14">
            <h3 className="text-white font-bold text-2xl font-myFont m-7">Contact me</h3>
            <p className="max-w-110 text-white code-text m-12">You can contact me either on LinkedIn or email.</p>
            <a href="https://www.linkedin.com/in/jonnekoivisto" target="_blank"
               rel="noopener noreferrer">
              <i className="devicon-linkedin-plain colored colored icon-large"></i>
            </a>
            <p className="m-7 text-white text-2xl font-myFont">jonnekoivisto00@gmail.com</p>

          </section>
        </div>
      </>
  )
}

export default App


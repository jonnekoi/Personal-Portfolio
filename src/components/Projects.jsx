import { motion } from "framer-motion";

const projects = [
  {
    title: "Air Travellers Challenge",
    description: "This was the first coding project I was part of. This game has two versions, the first one worked with a terminal without a user interface, and the second version had a UI. The idea of the game is to travel around the world with as low consumption as possible, answer questions on the way, and earn points. Correct guesses earn you money to travel.",
    technologies: "Python, JavaScript, HTML, CSS",
  },
  {
    title: "Cake Factory",
    description: "This project was part of our web development studies. Our goal was to create an online shop for pastries with a dashboard for the owner to manage the site. I was responsible for the front-end development of the project, mainly on the dashboard. I also contributed to the back-end development with my team.",
    technologies: "JavaScript, Node.js, HTML, CSS, MariaDB",
  },
  {
    title: "Inventory Management System",
    description: "We created a simple inventory management system. The main focus of this project was not just the final product, but also learning agile methodologies, project management, testing, and documentation. In summary, this was more about understanding the whole lifecycle of a software product.",
    technologies: "Java, Spring Boot, JavaFX, MariaDB, Junit, Jenkins, Docker",
  },
  {
    title: "Euro 2024 Guesses",
    description: "This was my personal project, developed for me and my friends. We had an issue where Excel was not the best tool for our purpose, as it allowed everyone to see each other's guesses. So I developed this project and deployed it on a Rocky Linux server.",
    technologies: "JavaScript, Node.js, React, Tailwind, MariaDB",
  },
  {
    title: "League Guesser",
    description: "This is the second version of my personal project, Euro 2024 Guesses. Inspired by the first one, I started working on this more generalized version. It allows users to create their own leagues, invite friends, and start guessing. Users can also add custom matches to their leagues.",
    technologies: "JavaScript, Node.js, React, Tailwind, MariaDB",
  },
  {
    title: "Personal Portfolio",
    description: "As you can probably guess, this site! The purpose is to provide a brief overview of my skills and experience. I wanted to have a simple, clean design to showcase my work effectively.",
    technologies: "JavaScript, React, Tailwind",
  },
];

const Projects = () => {
  return (
      <section className="text-center m-14 w-3/5 project-mobile">
        <h3 className="text-white font-bold text-2xl m-10 code-text">Projects</h3>
        <div className="grid grid-cols-3 grid-flow-row m-7 grid-project-mobile">
          {projects.map((project, index) => (
              <motion.div
                  key={project.title}
                  className="project-card p-5 rounded-lg gap-4 bg-gray-800 text-white shadow-lg"
                  initial={{
                    opacity: 0,
                    x: index % 3 === 0 ? -100 : index % 3 === 2 ? 100 : 0,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h1 className="text-2xl m-5 font-bold">{project.title}</h1>
                <p className="mb-4">{project.description}</p>
                <p className="m-5 text-gray-300">
                  <span className="font-semibold">Technologies:</span> {project.technologies}
                </p>
              </motion.div>
          ))}
        </div>
        <div className="flex justify-center m-5 arrow-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
               strokeWidth={2} stroke="orange" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
          </svg>
        </div>
      </section>
  );
};

export default Projects;

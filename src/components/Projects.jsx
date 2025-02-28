import { motion } from "framer-motion";

const projects = [
  {
    title: "Air Travellers Challenge",
    description: "This was the first coding project I was part of. This game has two versions, the first one worked with a terminal without a user interface and the second version had a UI. The idea of the game is to travel around the world with as low consumption as possible, answer questions on the way and earn points. Correct guesses earn you money to travel.",
    technologies: "Python, JavaScript, HTML, CSS",
    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"size-6\">\n" +
        "  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64\" />\n" +
        "</svg>\n",
    githublink: "https://github.com/jonnekoi/Ohjelmisto2_projekti/tree/main/Ohjelmisto1_projekti/Air-Travellers-Challengee"
  },
  {
    title: "Cake Factory",
    description: "This project was part of our web development studies. Our goal was to create an online shop for pastries with a dashboard for the owner to manage the site. I was responsible for the front-end development of the project, mainly on the dashboard. I also contributed to the back-end development with my team.",
    technologies: "JavaScript, Node.js, HTML, CSS, MariaDB",
    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"size-6\">\n" +
        "  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z\" />\n" +
        "</svg>\n",
    githublink: "https://github.com/jonnekoi/Cake-Factory",
    servergithublink: "https://github.com/hinmiro/CakeFactoryBackend"
  },
  {
    title: "Inventory Management System",
    description: "We created a simple inventory management system. The main focus of this project was not just the final product, but also learning agile methodologies, project management, testing and documentation. In summary, this was more about understanding the whole lifecycle of a software product.",
    technologies: "Java, Spring Boot, JavaFX, MariaDB, Junit, Jenkins, Docker",
    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"size-3\">\n" +
        "  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z\" />\n" +
        "</svg>\n",
    githublink: "https://github.com/Jafestro/Inventory-Management-Sys"
  },
  {
    title: "Euro 2024 Guesses",
    description: "This was my personal project, developed for me and my friends. We had an issue where Excel was not the best tool for our purpose, as it allowed everyone to see each other's guesses. I developed a web app where we can guess football match scores and earn points. So I developed this project and deployed it on a Rocky Linux server.",
    technologies: "JavaScript, Node.js, React, Tailwind, MariaDB",
    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"size-6\">\n" +
        "  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125\" />\n" +
        "</svg>\n",
    githublink: "https://github.com/jonnekoi/euro2024Front",
    servergithublink: "https://github.com/jonnekoi/euro2024"
  },
  {
    title: "League Guesser",
    description: "This is the second version of my personal project, Euro 2024 Guesses. Inspired by the first one, I started working on this more generalized version. It allows users to create their own leagues, invite friends, and start guessing. Users can also add custom matches to their leagues.",
    technologies: "JavaScript, Node.js, React, Tailwind, MariaDB",
    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"size-6\">\n" +
        "  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10\" />\n" +
        "</svg>\n",
    githublink: "https://github.com/jonnekoi/fmm-front",
    servergithublink: "https://github.com/jonnekoi/FMM"
  },
  {
    title: "Personal Portfolio",
    description: "As you can probably guess, this site. The purpose is to provide a brief overview of my skills and experience. I wanted to have a simple, clean design to showcase my work effectively.",
    technologies: "JavaScript, React, Tailwind",
    icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"size-6\">\n" +
        "  <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z\" />\n" +
        "</svg>\n",
    githublink: "https://github.com/jonnekoi/Personal-Portfolio"
  },
];

const Projects = () => {
  return (
      <section className="text-center m-14 w-3/5 project-mobile">
        <h3 className="text-white font-bold text-3xl m-10 code-text">Projects</h3>
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
                {project.icon && (
                    <div className="flex justify-center items-center">
                      <div className="w-2/6" dangerouslySetInnerHTML={{ __html: project.icon }}></div>
                    </div>
                )}
                <p className="mb-4">{project.description}</p>
                <p className="m-5 text-gray-300">
                  <span className="font-semibold">Technologies:</span> {project.technologies}
                </p>
                <div className="project-git-links">
                  <a href={project.githublink} target="_blank" rel="noreferrer"
                     className="text-orange-400 hover:text-orange-500">
                    GitHub
                  </a>
                  {project.servergithublink && (
                      <a href={project.servergithublink} target="_blank" rel="noreferrer"
                         className="text-orange-400 hover:text-orange-500 ml-5">
                        GitHub Backend
                      </a>
                  )}
                </div>
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

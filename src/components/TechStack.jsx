import { motion } from "framer-motion";

const techs = [
  { icon: "devicon-javascript-plain", name: "JavaScript" },
  { icon: "devicon-python-plain", name: "Python" },
  { icon: "devicon-java-plain", name: "Java" },
  { icon: "devicon-typescript-plain", name: "TypeScript" },
  { icon: "devicon-react-original", name: "React" },
  { icon: "devicon-tailwindcss-original", name: "Tailwind CSS" },
  { icon: "devicon-nodejs-plain-wordmark", name: "Node.js" },
  { icon: "devicon-spring-original", name: "Spring Boot" },
  { icon: "devicon-express-original-wordmark", name: "Express" },
  { icon: "devicon-mariadb-original", name: "MariaDB" },
  { icon: "devicon-git-plain", name: "Git" },
  { icon: "devicon-github-original", name: "GitHub" },
  { icon: "devicon-figma-plain", name: "Figma" },
  { icon: "devicon-jenkins-line", name: "Jenkins" },
  { icon: "devicon-docker-plain", name: "Docker" },
  { icon: "devicon-junit-plain-wordmark", name: "Junit" },
];

const TechStack = () => {
  return (
      <div>
        <h3 className="text-white font-bold text-2xl font-myFont">Technologies</h3>
        <div
            className="grid grid-cols-4 grid-flow-row mt-20 grid-tech-mobile">
          {techs.map((tech, index) => (
              <motion.div
                  key={tech.name}
                  className="tech-card flex flex-col gap-4 items-center"
                  initial={{opacity: 0, x: index % 2 === 0 ? -100 : 100}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true, amount: 0.2}}
                  transition={{duration: 0.6, delay: index * 0.1}}
              >
                <i className={tech.icon}></i>
                <p className="m-2">{tech.name}</p>
              </motion.div>
          ))}
        </div>
        <div className="m-5 flex justify-center arrow-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"
               strokeWidth={2} stroke="orange" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
          </svg>
        </div>
      </div>
  );
};

export default TechStack;

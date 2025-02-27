import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const aboutMe = () => {
  const fullText = "Software Engineer";
  const typingSpeed = 100;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [displayedText, setDisplayedText] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [index, setIndex] = useState(0);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  },);

  return (
      <motion.div
          className="flex flex-col justify-center items-center"
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
      >
        <section className="mt-8">
          <div className="w-2/4 m-auto">
            <img src="/ProfilePic.jpg" alt="Profile Picture"
                 className="rounded-full mb-4"/>
          </div>
          <h1 className="text-white text-6xl font-bold font-myFont">Jonne
            Koivisto</h1>
          <h2 className="text-orange-400 text-2xl font-myFont">{displayedText}</h2>
        </section>
        <section className="w-2/4 about-me-mobile">
          <h3 className="text-white text-2xl font-bold m-10 font-myFont">About
            Me</h3>
          <p className="text-white code-text">
            Hello, I&#39;m Jonne, a passionate software engineer from Finland.
            My expertise spans both front-end and back-end development, with a
            keen focus on clean, efficient and scalable code.
          </p>
          <p className="text-white code-text mt-5">
            I&#39;m currently pursuing a degree in Information and Communication
            Technology at Metropolia University of Applied Sciences, majoring in
            software development with emphasis in
            machine learning and neural networks. I have deep interest machine learning and AI.
          </p>
          <p className="text-white code-text mt-5">
            My approach to development is both technical and creative I enjoy
            crafting seamless user experiences as much as I do optimizing system
            performance.
            Whether it&#39;s designing engaging interfaces, developing
            full-stack
            applications or debugging tricky issues,
            I find excitement in every stage of the development process.
          </p>
          <p className="text-white code-text mt-5">
            Outside of coding, I stay active by hitting the gym and playing
            football a few times a week.
          </p>
        </section>
        <div className="m-5 arrow-mobile">
          <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"
               strokeWidth={2} stroke="orange" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"/>
          </svg>
        </div>
      </motion.div>
  )
}

export default aboutMe;

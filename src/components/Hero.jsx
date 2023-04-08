import { motion } from "framer-motion";

import { github, linkedIn } from "../assets";

import { resume } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#ffff00]" />
          <div className="w-1 sm:h:80 h-40 orange-gradient" />
        </div>
        <div className="z-10">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I am <span className="text-[#ffff00]">Josh!</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
  A passionate Math and CS student, with a thirst for knowledge, thrives on using ML/AI to drive
  <a target="_blank" href="https://devpost.com/jsneakest" className="text-[#ffff00] underline"> positive </a>
  change.
</p>


          <div className="flex mt-6 gap-5">
            <a
              href="https://www.linkedin.com/in/rafaeljoshfernando/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary w-[50px] rounded-xl outline-none text-white font-bold shadow-md z-10"
            >
              <img src={linkedIn} alt="LinkedIn icon" className="object-cover w-full"></img>
            </a>
            <a
              href="https://github.com/JoshFernando"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tertiary w-[50px] rounded-xl outline-none text-white font-bold shadow-md shadow-primary z-10"
            >
              <img src={github} alt="Github icon" className="object-cover "></img>
            </a>
            <a
              href={resume}
              download
              className="bg-[#33CC66] py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary z-10"
            >
              <span className="hidden sm:inline">Download</span> Resume
            </a>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-15 bottom-40 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

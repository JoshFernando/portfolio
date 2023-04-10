import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { github, linkedIn } from "../assets";
import { resume } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typed from 'typed.js';

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Hi, I am <span style='color: yellow'>Josh!</span>", "I am an <span style='color: yellow'>ML Enthusiast</span>"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-5 rounded-full bg-[#ffff00]"
          />
          <motion.div
            animate={{ scaleY: [1, 1.5, 1], scaleX: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 sm:h-80 h-40 orange-gradient"
          />
        </div>
        <div className="z-10">
          <h1 className={`${styles.heroHeadText}`}>
            <span ref={typedRef}></span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A passionate Math and CS student, with a thirst for knowledge,
            thrives on using{" "}
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white"
            >
              ML/AI
            </motion.span>{" "}
            to drive
            <a
              target="_blank"
              href="https://devpost.com/jsneakest"
              className="text-[#ffff00] underline"
            >
              {" "}
              positive{" "}
            </a>
            change.
          </p>
          <div className="flex mt-6 gap-5">
            <motion.a
              animate={{ y: [-5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              href="https://www.linkedin.com/in/rafaeljoshfernando/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-tertiary w-[50px] rounded-xl outline-none text-white font-bold shadow-md z-10"
            >
              <img src={linkedIn} alt="LinkedIn icon" className="object-cover w-full"></img>
            </motion.a>
            <motion.a
              animate={{ y: [-5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              href="https://github.com/JoshFernando"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-tertiary w-[50px] rounded-xl outline-none text-white font-bold shadow-md shadow-primary z-10"
            >
              <img src={github} alt="Github icon" className="object-cover "></img>
            </motion.a>
            <motion.a
              animate={{ y: [-5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              href={resume}
              download
              className="bg-[#33CC66] py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary z-10"
            >
              <span className="hidden sm:inline">Download</span> Resume
            </motion.a>
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

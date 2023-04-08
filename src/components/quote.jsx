import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

import { styles } from "../styles";

const Quote = () => {
  return (
    <motion.div
      variants={fadeIn("right", "spring",0, 10)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl justify-center content-center"
    >
<h1 className={`${styles.heroSubText} text-center`}>Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.</h1>
      <h2 className="font-bold text-green-500 text-center mt-3">- Albert Einstein</h2>
    </motion.div>
  );
};

export default SectionWrapper(Quote, "");

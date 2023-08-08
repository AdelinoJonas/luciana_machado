import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

export const RevealHome = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      // slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} style={{ overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 4 },
          // exit: { opacity: 0, transition:{ duration: 0.25}}
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 3,
          delay: 0.25,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

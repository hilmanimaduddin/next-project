import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FallingLetter({ children, delay }: any) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 0.5,
          delay: delay ? delay * 0.3 : 0.5,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

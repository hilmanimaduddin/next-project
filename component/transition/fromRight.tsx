import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FromRight({ children }: any) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 5 : 200 }}
        transition={{
          type: "spring",
          bounce: 0.4,
          duration: 0.7,
          delay: 0.5,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

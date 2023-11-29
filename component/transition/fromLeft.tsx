// import { motion } from "framer-motion";

// export default function FromLeft({ children }: any) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -200 }}
//       animate={{ opacity: 1, x: -5 }}
//       transition={{
//         type: "spring",
//         bounce: 0.4,
//         duration: 0.7,
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FromLeft({ children }: any) {
  const [ref, inView] = useInView();

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? -5 : -200 }}
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

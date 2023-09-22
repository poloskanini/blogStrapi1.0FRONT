import { motion } from "framer-motion"

export default function Reveal({ children }) {

  return (
    <div style={{ position: "relative"}}>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 25 },
          visible: {opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.35}}
      >
        {children}
      </motion.div>
    </div>
  )
}
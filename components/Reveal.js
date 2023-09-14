import { motion } from "framer-motion"
import { useEffect, useRef } from 'react'

export default function Reveal({ children }) {

  const ref = useRef(null);

  return (
    <div style={{ position: "relative"}}>
      <motion.div
        variants={{
          hidden: {opacity: 0, y: 75 },
          visible: {opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: .5, delay: 0.25}}
      >
        {children}
      </motion.div>
    </div>
  )
}
"use client"
import { motion } from "framer-motion"

const Loader = () => {
  return (
    <div className="loader" style={{ opacity: 0.1, backdropFilter: 'blur(px)' }}>

      <div className="box">
        <div className="logo">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 94 94"
            className="svg"
            animate={{
              fill: ["#D4D4D4", "#ffffff", "#808080"],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {/* <path d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 0 49.2967 0 40.5456V4.82927C0 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z"></path>
            <path d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z"></path>
            <path d="M0 83.2195C0 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707L0 83.2195Z"></path> */}
          </motion.svg>
        </div>
      </div>
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          delay: 0.2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          delay: 0.4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          delay: 0.6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 2,
          delay: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      ></motion.div>
    </div>
  )
}

export default Loader


import { motion } from "framer-motion"
import { FaRocket } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"

const About2 = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 bg-gray-800 text-white p-12 flex flex-col justify-center"
      >
        <h1 className="text-5xl font-bold font-playfair mb-4">About Us</h1>
        <h2 className="text-2xl font-roboto font-light mb-8">
          Your Partner in Innovation.
        </h2>
        <FaRocket className="text-6xl text-blue-500 mb-6" />
      </motion.div>

      {/* Right Panel */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full md:w-1/2 bg-white p-12 flex flex-col justify-center"
      >
        <div className="max-w-lg">
          <h3 className="text-3xl font-bold font-playfair mb-6 text-gray-800">
            Who We Are
          </h3>
          <p className="text-lg font-roboto text-gray-700 mb-6">
            We are a dynamic team of innovators dedicated to pushing the
            boundaries of technology and creating transformative solutions that
            drive meaningful change in the digital landscape.
          </p>

          <h3 className="text-3xl font-bold font-playfair mb-6 text-gray-800">
            Our Mission
          </h3>
          <p className="text-lg font-roboto text-gray-700 mb-8">
            Our mission is to empower businesses through cutting-edge
            technological solutions, combining creativity, expertise, and a
            relentless pursuit of excellence.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "#2563eb",
              color: "white",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center px-6 py-3 bg-white border-2 border-blue-600 text-blue-600 
            font-roboto font-bold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Discover Our Solutions
            <IoIosArrowForward className="ml-2" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default About2

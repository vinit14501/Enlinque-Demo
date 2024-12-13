import { motion } from "framer-motion"
import {
  FaCheckCircle, // Integrity
  FaLightbulb, // Innovation
  FaHandshake, // Collaboration
  FaRocket, // Growth - replaced FaRocketLaunch
} from "react-icons/fa"

const About = () => {
  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // Company Values
  const values = [
    {
      icon: FaCheckCircle,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty and transparency.",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Creativity and forward-thinking drive our solutions.",
    },
    {
      icon: FaHandshake,
      title: "Collaboration",
      description: "We believe in the power of teamwork and mutual respect.",
    },
    {
      icon: FaRocket,
      title: "Growth",
      description:
        "Continuous learning and improvement are our core principles.",
    },
  ]

  // Milestones
  const milestones = [
    { year: 2015, event: "Company Founded" },
    { year: 2018, event: "First Major Client Project" },
    { year: 2020, event: "Expanded to International Markets" },
    { year: 2022, event: "Innovation Award Received" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Header Section */}
      <motion.header
        className="text-center py-16 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl font-bold font-poppins text-gray-900 mb-4"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
        >
          Who We Are
        </motion.h1>
        <motion.p
          className="text-xl font-light text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Innovation Meets Excellence
        </motion.p>
      </motion.header>

      {/* Main Content */}
      <motion.div
        className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Column: Our Journey */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-semibold font-poppins mb-6">
            Our Journey
          </h2>
          <p className="text-gray-700 mb-6">
            Founded with a vision to transform challenges into opportunities,
            our company has been at the forefront of technological innovation
            and strategic problem-solving.
          </p>

          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="p-4 border-l-4 border-blue-500 bg-gray-50 rounded-r-md shadow-sm"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {milestone.year}
                </h3>
                <p className="text-gray-600">{milestone.event}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Our Values */}
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-semibold font-poppins mb-6">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <value.icon className="mx-auto text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="bg-blue-600 text-white text-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6">Want to partner with us?</h2>
        <motion.button
          className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Our Services
        </motion.button>
      </motion.div>
    </div>
  )
}

export default About

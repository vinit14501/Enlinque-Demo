import { motion } from "framer-motion"

const About = () => {
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
          About Us
        </motion.h1>
        <motion.p
          className="text-xl font-light text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Where Speed Meets Strategy
        </motion.p>
        <motion.p
          className="text-lg font-light text-gray-700 max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Empowering startups and businesses to overcome challenges and achieve
          rapid growth through tailored IT and marketing consulting services
        </motion.p>
      </motion.header>

      {/* Half and Half Section */}
      <div className="flex flex-col md:flex-row">
        {/* Left Side - Photo Collage */}
        <motion.div
          className="w-full md:w-1/2 bg-gray-100 p-8 flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-4 grid-rows-3 gap-4 max-w-[600px] w-full h-[400px]">
            <div className="col-span-2 row-span-2">
              <img
                src="hero1.jpg"
                alt="IT Consulting"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="hero2.jpg"
                alt="Marketing Strategy"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src="hero3.jpg"
                alt="Business Transformation"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img
                src="hero4.jpg"
                alt="Digital Solutions"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="hero1.jpg"
                alt="Team Collaboration"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-2 row-span-1">
              <img
                src="hero1.jpg"
                alt="Team Collaboration"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </motion.div>

        {/* Right Side - Company Description */}
        <motion.div
          className="w-full md:w-1/2 p-12 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="max-w-[500px] mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Headquartered in Pittsburgh, PA, USA, we proudly collaborate with
              clients around the globe, ensuring seamless communication and
              impactful results.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Driven by a commitment to excellence, agility, and collaboration,
              we believe in turning ambitious ideas into actionable results.
              With our expertise in IT infrastructure, speed-to-market
              strategies, and ROI-driven marketing, we help businesses unlock
              their potential and thrive in competitive markets.
            </p>
            <p className="text-xl font-semibold text-blue-600 italic">
              At Enlinque, your vision is our mission.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Final Section */}
      <motion.div
        className="bg-blue-600 text-white text-center py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4 px-4">
          Connecting Vision to Success with IT and Marketing Solutions
        </h2>
      </motion.div>
    </div>
  )
}

export default About

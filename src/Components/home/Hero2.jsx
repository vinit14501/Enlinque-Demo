import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"

// Define the content for each section with consistent information
const carouselContent = [
  {
    header: "Startup IT Solutions",
    title: "Startup IT Consulting",
    subtext:
      "Accelerating startups with innovative IT solutions for rapid growth where speed meets strategy",
    image: "hero1.jpg",
    navWord: "Startup",
  },
  {
    header: "Digital Marketing",
    title: "Digital Marketing",
    subtext:
      "Scaling startups with data-driven strategies, ROI-focused solutions and flawless execution",
    image: "hero2.jpg",
    navWord: "Digital",
  },
  {
    header: "E-commerce Solutions",
    title: "E-commerce Solutions",
    subtext:
      "Empowering e-commerce startups to launch, scale, and dominate the market",
    image: "hero3.jpg",
    navWord: "E-commerce",
  },
  {
    header: "App Development",
    title: "App Development",
    subtext:
      "Transforming ideas into high-performance apps, designed for speed and scalability—from concept to MVP in just 4 months",
    image: "hero4.jpg",
    navWord: "App",
  },
]

const Hero2 = () => {
  // State to track the currently active carousel section
  const [activeIndex, setActiveIndex] = useState(0)

  // Handler to change the active section when a navigation button is clicked
  const handleSectionClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="relative w-full h-[80vh] flex overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={carouselContent[activeIndex].image}
            src={carouselContent[activeIndex].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover absolute inset-0"
            alt={carouselContent[activeIndex].title}
          />
        </AnimatePresence>
        {/* Blur overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-none"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto flex items-center justify-between px-6 py-12">
        {/* Left Content Section */}
        <div className="w-full md:w-2/3 lg:w-1/2 space-y-6">
          <AnimatePresence mode="wait">
            {/* Animated header */}
            <motion.h1
              key={carouselContent[activeIndex].header}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl font-bold leading-tight"
            >
              {carouselContent[activeIndex].header}
            </motion.h1>

            {/* Animated subtext */}
            <motion.p
              key={carouselContent[activeIndex].subtext}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-200 text-base mb-6"
            >
              {carouselContent[activeIndex].subtext}
            </motion.p>
          </AnimatePresence>

          {/* Learn More Button */}
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            href="#"
            className="inline-flex items-center space-x-2 bg-[#4263eb] text-white px-6 py-3 rounded-lg hover:bg-[#3654c7] transition-colors duration-300 group"
          >
            <span>Learn More</span>
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Navigation Words */}
        <div className="absolute bottom-8 left-0 w-full flex justify-center space-x-6">
          {carouselContent.map((section, index) => (
            <button
              key={section.navWord}
              onClick={() => handleSectionClick(index)}
              className={`
                text-sm font-medium uppercase tracking-wider transition-all duration-300
                ${
                  activeIndex === index
                    ? "text-white border-b-2 border-[#4263eb] scale-110"
                    : "text-white hover:text-white"
                }
              `}
            >
              {section.navWord}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero2

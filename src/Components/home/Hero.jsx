import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

// Define the content for each section with consistent information
const carouselContent = [
  {
    title: "Startup IT Consulting",
    // header: "Startup IT Solutions",
    subtext:
      "Accelerating startups with innovative IT solutions for rapid growth where speed meets strategy",
    image: "hero1.jpg",
  },
  {
    title: "Digital Marketing",
    // header: "Digital Marketing",
    subtext:
      "Scaling startups with data-driven strategies, ROI-focused solutions and flawless execution",
    image: "hero2.jpg",
  },
  {
    title: "E-commerce Solutions",
    // header: "E-commerce Solutions",
    subtext:
      "Empowering e-commerce startups to launch, scale, and dominate the market",
    image: "hero3.jpg",
  },
  {
    title: "App Development",
    // header: "App Development",
    subtext:
      "Transforming ideas into high-performance apps, designed for speed and scalability—from concept to MVP in just 4 months",
    image: "hero4.jpg",
  },
]

const Hero = () => {
  // State to track the currently active carousel section
  const [activeIndex, setActiveIndex] = useState(0)

  // Handler to change the active section when a navigation button is clicked
  const handleSectionClick = (index) => {
    setActiveIndex(index)
  }

  return (
    // Added bottom padding to create space between sections
    <div className="relative w-full h-[85vh] flex bg-[#0B0D23] pb-10">
      {/* Left Content Section */}
      <div className="w-1/2 flex flex-col justify-center items-start px-16 z-10 relative">
        <AnimatePresence mode="wait">
          {/* Animated header with motion effects */}
          <motion.h1
            key={carouselContent[activeIndex].header}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl font-bold mb-4"
          >
            {carouselContent[activeIndex].header}
          </motion.h1>

          {/* Animated subtext with motion effects */}
          <motion.p
            key={carouselContent[activeIndex].subtext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-base mb-6"
          >
            {carouselContent[activeIndex].subtext}
          </motion.p>
        </AnimatePresence>

        {/* Learn More Button with hover effect */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          href="#"
          className="bg-[#4263eb] text-white px-6 py-3 rounded-md hover:bg-[#3654c7] transition-colors duration-300"
        >
          Learn More
        </motion.a>

        {/* Bottom Navigation Section - Integrated with Left Content */}
        <div className="absolute bottom-0 left-0 flex space-x-4 pb-0 z-20">
          {carouselContent.map((section, index) => (
            <button
              key={section.title}
              onClick={() => handleSectionClick(index)}
              className={`
                flex flex-col items-center text-center 
                px-2 py-2 
                transition-all duration-300 group
                ${
                  activeIndex === index
                    ? "text-white border-b-2 border-[#4263eb] scale-105"
                    : "text-gray-400 hover:text-white"
                }
              `}
            >
              <span className="text-base font-semibold uppercase tracking-wider">
                {section.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Right Side Image Section */}
      <div className="w-1/2 absolute right-0 top-0 h-full">
        <AnimatePresence mode="wait">
          {/* Animated image with motion effects */}
          <motion.img
            key={carouselContent[activeIndex].image}
            src={carouselContent[activeIndex].image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full h-full object-cover"
            alt={carouselContent[activeIndex].title}
          />
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Hero

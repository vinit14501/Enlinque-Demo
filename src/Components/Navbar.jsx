import { useState } from "react"
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "FractionalCxO", to: "/fractionalCxO" },
    { label: "FractionalCxO2", to: "/fractionalCxO2" },
    // { label: "FractionalCxO3", to: "/fractionalCxO3" },
    // { label: "Services", to: "/services" },
    // { label: "Services2", to: "/services2" },
    // { label: "Services3", to: "/services3" },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const linkVariants = {
    closed: {
      opacity: 0,
      x: 50,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
        >
          <img
            src="logo.png"
            alt="Company Logo"
            className="h-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="
                text-gray-800 font-medium hover:text-blue-600 
                transition-colors duration-300 
                group relative
              "
            >
              {item.label}
              <span
                className="
                  absolute -bottom-1 left-0 w-0 h-0.5 
                  bg-blue-600 transition-all duration-300 
                  group-hover:w-full
                "
              ></span>
            </Link>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-6 py-2 bg-blue-600 text-white rounded-full 
              font-semibold shadow-md hover:bg-blue-700 
              transition-colors duration-300
            "
          >
            Get Started
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="
              text-gray-700 focus:outline-none 
              bg-blue-50 p-2 rounded-full
            "
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Sliding Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="
                fixed top-0 right-0 w-80 h-full 
                bg-white shadow-2xl z-50 
                rounded-l-3xl overflow-hidden
              "
            >
              <div className="relative h-full flex flex-col">
                {/* Close Button */}
                <div className="p-6 flex justify-end">
                  <motion.button
                    onClick={toggleMenu}
                    whileTap={{ scale: 0.9 }}
                    className="
                      text-gray-700 focus:outline-none 
                      bg-gray-100 p-2 rounded-full
                    "
                  >
                    <FaTimes size={24} />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <div className="flex-grow flex flex-col justify-center space-y-6 px-6">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      variants={linkVariants}
                    >
                      <Link
                        to={item.to}
                        onClick={toggleMenu}
                        className="
                          text-2xl font-medium 
                          text-gray-800 hover:text-blue-600 
                          transition-all duration-300 
                          transform hover:translate-x-2
                        "
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="p-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      w-full py-4 bg-blue-600 text-white 
                      rounded-full font-semibold shadow-md 
                      hover:bg-blue-700 transition-colors 
                      duration-300
                    "
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar

import { useState } from "react"
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail, MdLocationOn } from "react-icons/md"

const Footer = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    setEmail("")
  }

  const services = [
    "IT Consulting",
    "Digital Marketing",
    "Cloud Solutions",
    "Data Analytics",
  ]

  const quickLinks = ["Home", "Blogs", "About Us", "Contact Us"]

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
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
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <motion.div
          variants={sectionVariants}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <img
              src="logo.png"
              alt="Enlinque Logo"
              className="h-12 w-auto"
            />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Stay Updated
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe for updates and insights about our services and industry
            trends.
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex gap-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="
                flex-1 px-4 py-3 rounded-full 
                bg-gray-100 border border-gray-200 
                focus:outline-none focus:border-blue-500 
                focus:ring-1 focus:ring-blue-500 
                transition-all
              "
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-6 py-3 bg-blue-600 text-white 
                rounded-full font-semibold 
                hover:bg-blue-700 transition-colors 
                duration-300 shadow-md
              "
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* Main Footer Content */}
        <motion.div
          variants={sectionVariants}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-gray-200 pt-16"
        >
          {/* Company Info Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Company
            </h3>
            <p className="text-gray-600 text-sm">
              Enlinque is a forward-thinking consulting firm dedicated to
              transforming businesses through innovative technology solutions
              and strategic insights. We empower organizations to navigate
              digital challenges and unlock their full potential.
            </p>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="
                    hover:text-blue-600 transition-colors 
                    cursor-pointer flex items-center 
                    space-x-2 group
                  "
                >
                  <span
                    className="
                    w-1 h-1 bg-blue-500 rounded-full 
                    group-hover:bg-blue-600 transition-colors
                  "
                  ></span>
                  <span>{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="
                    hover:text-blue-600 transition-colors 
                    cursor-pointer flex items-center 
                    space-x-2 group
                  "
                >
                  <span
                    className="
                    w-1 h-1 bg-blue-500 rounded-full 
                    group-hover:bg-blue-600 transition-colors
                  "
                  ></span>
                  <span>{link}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                <MdEmail className="text-blue-500 text-xl" />
                <span>contact@enlinque.com</span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <MdLocationOn className="text-blue-500 text-xl mt-1" />
                <span>
                  123 Business Ave, Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </motion.li>
              <motion.li
                variants={itemVariants}
                className="flex items-center gap-3"
              >
                {[FaLinkedin].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1, color: "#2563eb" }}
                    className="text-xl text-gray-500 hover:text-blue-600 transition-colors"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={sectionVariants}
          className="pt-10 border-t-2 border-gray-200"
        >
          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Enlinque Consulting LLC. All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer

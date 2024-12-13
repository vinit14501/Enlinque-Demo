import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaUser,
  FaEnvelope,
  FaEdit,
  FaComment,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Implement form submission logic
    console.log(formData)
  }

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  // Item animation
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-white flex flex-col md:flex-row p-4 md:p-8 lg:p-12"
    >
      {/* Left Column - Contact Form */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-1/2 p-4 md:p-8"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-gray-800 mb-6"
        >
          Contact Us
        </motion.h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Name Input */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <motion.input
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(45, 170, 160, 0.3)",
              }}
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
              required
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <motion.input
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(45, 170, 160, 0.3)",
              }}
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
              required
            />
          </motion.div>

          {/* Subject Input */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <FaEdit className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <motion.select
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(45, 170, 160, 0.3)",
              }}
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
              required
            >
              <option value="">Select Subject</option>
              <option value="general">General Inquiry</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
            </motion.select>
          </motion.div>

          {/* Message Textarea */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <FaComment className="absolute left-3 top-4 text-gray-400" />
            <motion.textarea
              whileFocus={{
                scale: 1.02,
                boxShadow: "0 0 0 3px rgba(45, 170, 160, 0.3)",
              }}
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition duration-300"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition duration-300 ease-in-out transform"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      {/* Right Column - Contact Details */}
      <motion.div
        variants={itemVariants}
        className="w-full md:w-1/2 p-4 md:p-8 bg-gray-50 rounded-lg"
      >
        <motion.div
          variants={itemVariants}
          className="mb-6"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-800 mb-4"
          >
            Contact Information
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mb-2"
          >
            <strong>Address:</strong> 123 Main St, City, State
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mb-2"
          >
            <strong>Phone:</strong> +1 (555) 123-4567
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 mb-2"
          >
            <strong>Email:</strong> info@enlinque.com
          </motion.p>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          variants={itemVariants}
          className="flex space-x-4 mb-6"
        >
          {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map(
            (Icon, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{
                  scale: 1.2,
                  color: "#2DAAA0",
                }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 hover:text-teal-500 transition duration-300"
              >
                <Icon size={24} />
              </motion.a>
            )
          )}
        </motion.div>

        {/* Embedded Map (Placeholder) */}
        <motion.div
          variants={itemVariants}
          className="bg-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-500"
        >
          Google Maps Placeholder
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact

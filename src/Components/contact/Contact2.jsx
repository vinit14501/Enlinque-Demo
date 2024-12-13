import { useState } from "react"
import { motion } from "framer-motion"
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaComment,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa"

const Contact2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    console.log(formData)
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="grid md:grid-cols-2 bg-white shadow-2xl rounded-2xl overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {/* Left Side - Contact Information */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-lg mb-8 text-white/90">
              We&apos;re here to help and answer any question you might have. We
              look forward to hearing from you.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: FaMapMarkerAlt,
                  title: "Address",
                  description: "123 Innovation Drive, Tech City",
                },
                {
                  icon: FaPhone,
                  title: "Phone",
                  description: "+1 (555) 123-4567",
                },
                {
                  icon: FaEnvelope,
                  title: "Email",
                  description: "contact@innovate.com",
                },
              ].map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-center space-x-4"
                >
                  <Icon className="text-2xl" />
                  <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-sm text-white/80">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex space-x-4">
              {[FaLinkedin, FaTwitter, FaGithub].map((SocialIcon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 0.3 },
                  }}
                  className="text-2xl hover:text-blue-200"
                >
                  <SocialIcon />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="p-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Send us a Message
            </h3>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {[
                {
                  name: "name",
                  type: "text",
                  placeholder: "Your Full Name",
                  icon: FaUser,
                },
                {
                  name: "email",
                  type: "email",
                  placeholder: "Your Email Address",
                  icon: FaEnvelope,
                },
                {
                  name: "phone",
                  type: "tel",
                  placeholder: "Your Phone Number",
                  icon: FaPhone,
                },
              ].map(({ name, type, placeholder, icon: Icon }) => (
                <div
                  key={name}
                  className="relative"
                >
                  <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type={type}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div className="relative">
                <FaComment className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact2

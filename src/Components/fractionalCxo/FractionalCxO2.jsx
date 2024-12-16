import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  FaLaptopCode,
  FaChartLine,
  FaBullhorn,
  FaCogs,
  FaChevronDown,
} from "react-icons/fa"

const FractionalCxO2 = () => {
  const version1 = {
    cio: "Our Fractional CIO services provide startups and businesses with expert guidance to align their IT strategies with business objectives. From evaluating technology stacks to implementing scalable solutions, we ensure your IT infrastructure is cost-effective, secure, and optimized for growth—without the need for a full-time executive.",
    cfo: "With our Fractional CFO services, you gain access to strategic financial leadership that helps you manage budgets, optimize cash flow, and develop sustainable growth strategies. We offer expert insights into financial planning, fundraising, and performance analysis to strengthen your financial foundation.",
    cmo: "Our Fractional CMO services bring experienced marketing leadership to your team, helping you craft data-driven strategies, build brand authority, and maximize ROI on campaigns. Whether you're scaling up or launching a new product, we ensure your marketing aligns with your business goals and drives measurable results.",
    coo: "Enlinque's Fractional COO services deliver operational expertise to streamline processes, improve efficiency, and drive business performance. We work closely with your team to optimize workflows, align operations with strategic goals, and ensure your business runs smoothly and scales effectively.",
  }

  const [activeService, setActiveService] = useState(null)

  const services = [
    {
      title: "Fractional CIO",
      icon: FaLaptopCode,
      description: version1.cio,
    },
    {
      title: "Fractional CFO",
      icon: FaChartLine,
      description: version1.cfo,
    },
    {
      title: "Fractional CMO",
      icon: FaBullhorn,
      description: version1.cmo,
    },
    {
      title: "Fractional COO",
      icon: FaCogs,
      description: version1.coo,
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-800 min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            Fractional CxO Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategic executive leadership on demand for startups and businesses
            seeking expert guidance without full-time commitments.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() =>
                  setActiveService(
                    activeService === service.title ? null : service.title
                  )
                }
                className="w-full flex justify-between items-center py-6 px-8 text-left group"
              >
                <div className="flex items-center space-x-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-lg group-hover:from-blue-100 group-hover:to-purple-100 transition-colors duration-300">
                    <service.icon className="text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </span>
                </div>
                <FaChevronDown
                  className={`text-blue-600 transition-transform duration-300 ${
                    activeService === service.title ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeService === service.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-gray-600 text-lg leading-relaxed border-t border-gray-100">
                      {service.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FractionalCxO2

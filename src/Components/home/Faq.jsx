import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaQuestionCircle, FaPlus } from "react-icons/fa"
import { MdCancel } from "react-icons/md"

const FAQItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-l-4 border-blue-600 bg-white shadow-md rounded-lg overflow-hidden mb-4">
      <motion.div
        className="p-6"
        initial={false}
      >
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={onToggle}
        >
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-3">
            <FaQuestionCircle className="text-blue-600 text-2xl" />
            {title}
          </h3>

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 hover:text-blue-600"
          >
            {isOpen ? (
              <MdCancel className="text-2xl" />
            ) : (
              <FaPlus className="text-2xl" />
            )}
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: 1,
                height: "auto",
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              exit={{
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut",
                },
              }}
              className="mt-4 text-gray-600 leading-relaxed pl-10"
            >
              {content}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqData = [
    {
      title: "What services do we offer?",
      content:
        "We provide comprehensive digital solutions tailored to meet your business needs, including web development, mobile app design, cloud computing, and innovative tech consulting.",
    },
    {
      title: "How do we ensure project quality?",
      content:
        "Our team follows a rigorous quality assurance process, including multiple review stages, continuous testing, and agile methodology to deliver top-notch solutions that exceed client expectations.",
    },
    {
      title: "What is our project timeline?",
      content:
        "Project timelines vary depending on complexity, but we pride ourselves on efficient delivery. Typically, we provide a detailed project roadmap with clear milestones and transparent communication throughout the development process.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index))
  }

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get quick answers to common questions about our services, process,
            and approach.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              title={faq.title}
              content={faq.content}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

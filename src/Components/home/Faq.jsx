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
  // Commented out to remove auto-opening of first FAQ
  // const [openIndex, setOpenIndex] = useState(0)
  const [openIndex, setOpenIndex] = useState(-1)

  const faqData = [
    {
      title: "What services does Enlinque offer?",
      content:
        "Enlinque provides IT consulting, marketing consulting, e-commerce solutions,  speed-to-market solutions tailored for startups and businesses in various industries to name a few.",
    },
    {
      title: "Do you only work with startups?",
      content:
        "No, while we specialize in helping startups and provide fractional CxO services, we also work with businesses of all sizes and industries to address their IT and marketing needs.",
    },
    {
      title:
        "Where are you located, and do you work with international clients?",
      content:
        "Enlinque is headquartered in Pittsburgh, PA, USA, and partners with clients worldwide, ensuring smooth communication and effective collaboration across borders.",
    },
    {
      title:
        "Can you help us choose the right technology stack for our startup?",
      content:
        "Yes, we analyze your business needs and recommend the most suitable, scalable, and cost-effective technology stack to support your growth.",
    },
    {
      title: "What marketing consulting services do you provide?",
      content:
        "We offer comprehensive marketing consulting, including growth strategy development, ROI-focused campaigns, content marketing, SEO, digital advertising, and performance analytics. Our goal is to build and execute tailored strategies that drive measurable results, such as increased traffic, conversions, and customer retention.",
    },
    {
      title: "How does your consulting process work?",
      content:
        "We follow a proven success path: Pinpoint, Prioritize, Plan, Propel, and Perfect. This ensures clarity, alignment, and tangible results at every stage.",
    },
    {
      title: "What industries do you specialize in?",
      content:
        "We have experience working with e-commerce, technology, healthcare, and various other industries, but we adapt to the needs of any business.",
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

import { useState } from "react"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"
import { BsClipboardCheck } from "react-icons/bs"

const FAQItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 rounded-md mb-4 overflow-hidden">
      <div
        className="p-4 flex justify-between items-center cursor-pointer bg-white"
        onClick={onToggle}
      >
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <div className="text-gray-500">
          {isOpen ? (
            <MdKeyboardArrowUp size={24} />
          ) : (
            <MdKeyboardArrowDown size={24} />
          )}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-4 text-gray-600 text-base">{content}</div>
      </div>
    </div>
  )
}

export default function Faq() {
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
    setOpenIndex(index === openIndex ? -1 : index)
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex items-center justify-center gap-2 mb-2">
          <BsClipboardCheck className="w-6 h-6 text-blue-600" />
          <span className="text-base text-blue-600">Pre-Service Questions</span>
        </div>

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-lg text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          neque lacinia, mollis ligula quis, hendrerit augue. Aliquam pretium
          orci sodales, sollicitudin metus pulvinar, condimentum nunc.
        </p>

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

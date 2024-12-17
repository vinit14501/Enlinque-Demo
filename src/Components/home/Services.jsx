// import { FaArrowRight } from "react-icons/fa"

const Services = () => {
  const servicesSections = [
    {
      title: "IT Consulting",
      description:
        "Optimize your technology strategy to align with business goals, ensuring faster time-to-market and scalable growth",
      services: [],
    },
    {
      title: "Marketing Consulting",
      description:
        "Craft and execute data-driven marketing strategies that maximize ROI and drive customer acquisition for startups",
      services: [],
    },
    {
      title: "Software Development",
      description:
        "Deliver custom software solutions tailored to your business needs, from MVP to full-scale applications",
      services: [],
    },
    {
      title: "eCommerce Solution",
      description:
        "Launch and grow your e-commerce business with end-to-end support, from platform selection to optimization",
      services: [],
    },
    {
      title: "Digital Transformation",
      description:
        "Modernize your business operations with innovative digital solutions that enhance efficiency and competitiveness",
      services: [],
    },
    {
      title: "Agile Implementation",
      description:
        "Adopt agile methodologies to streamline processes, improve collaboration, and accelerate project delivery",
      services: [],
    },
  ]

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesSections.map((section) => (
            <div
              key={section.title}
              className="bg-white shadow-lg p-6 transform transition-all duration-300 hover:scale-105"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {section.title}
                </h2>
                <p className="text-gray-500 mb-4">{section.description}</p>
                <div className="border-b-2 border-blue-500 w-16 mb-4"></div>
              </div>

              {/* <div>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  Learn more <FaArrowRight className="ml-2" />
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services

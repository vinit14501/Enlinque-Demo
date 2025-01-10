import React, { useState } from "react"
import { FaLaptopCode, FaChartLine, FaBullhorn, FaCogs } from "react-icons/fa"

const FractionalCxO2 = () => {
  const [selectedService, setSelectedService] = useState("Fractional CIO")

  const services = [
    {
      title: "Fractional CIO",
      icon: FaLaptopCode,
      description:
        "Our Fractional CIO services provide startups and businesses with expert guidance to align their IT strategies with business objectives. From evaluating technology stacks to implementing scalable solutions, we ensure your IT infrastructure is cost-effective, secure, and optimized for growth—without the need for a full-time executive.",
      image: "hero1.jpg",
    },
    {
      title: "Fractional CFO",
      icon: FaChartLine,
      description:
        "With our Fractional CFO services, you gain access to strategic financial leadership that helps you manage budgets, optimize cash flow, and develop sustainable growth strategies. We offer expert insights into financial planning, fundraising, and performance analysis to strengthen your financial foundation.",
      image: "hero1.jpg",
    },
    {
      title: "Fractional CMO",
      icon: FaBullhorn,
      description:
        "Our Fractional CMO services bring experienced marketing leadership to your team, helping you craft data-driven strategies, build brand authority, and maximize ROI on campaigns. Whether you're scaling up or launching a new product, we ensure your marketing aligns with your business goals and drives measurable results.",
      image: "hero1.jpg",
    },
    {
      title: "Fractional COO",
      icon: FaCogs,
      description:
        "Enlinque's Fractional COO services deliver operational expertise to streamline processes, improve efficiency, and drive business performance. We work closely with your team to optimize workflows, align operations with strategic goals, and ensure your business runs smoothly and scales effectively.",
      image: "hero1.jpg",
    },
  ]

  const selectedServiceData = services.find(
    (service) => service.title === selectedService
  )

  return (
    <div className="bg-orange-400 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-lg mb-6">
            <span className="text-orange-400 font-medium">What We Offer</span>
          </div>

          <h1 className="text-4xl font-bold text-navy-900 mb-4">
            Professional Main Services
          </h1>
          <p className="text-navy-800 max-w-3xl mx-auto">
            We have extensive experience of business consulting services and no
            job is too small. Our customers value our professionalism, work
            ethic and our competitive prices.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.title}
              onClick={() => setSelectedService(service.title)}
              className={`p-4 rounded-lg text-center transition-all ${
                selectedService === service.title
                  ? "bg-orange-400 border-2 border-white"
                  : "bg-white hover:bg-orange-50"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <service.icon
                  className={`text-xl ${
                    selectedService === service.title
                      ? "text-white"
                      : "text-orange-400"
                  }`}
                />
                <span
                  className={`text-lg font-medium ${
                    selectedService === service.title
                      ? "text-white"
                      : "text-navy-900"
                  }`}
                >
                  {service.title}
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            {selectedServiceData && (
              <selectedServiceData.icon className="text-orange-400 text-xl" />
            )}
            <span className="text-gray-600">Business Services</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">
                {selectedServiceData?.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {selectedServiceData?.description}
              </p>
              <button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition-colors">
                Read More
              </button>
            </div>

            <div className="flex justify-end">
              <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={selectedServiceData?.image}
                  alt={`${selectedServiceData?.title} illustration`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FractionalCxO2

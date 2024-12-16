import React, { useState } from "react"
import {
  HiComputerDesktop,
  HiChartBar,
  HiCommandLine,
  HiShoppingCart,
  HiDeviceTablet,
  HiCubeTransparent,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi2"

export default function Services2() {
  const [expandedService, setExpandedService] = useState(null)

  const services = [
    {
      title: "Technology Strategy & Advisory",
      subtitle: "Transforming businesses through technology",
      icon: <HiComputerDesktop className="w-8 h-8 text-blue-600" />,
      description:
        "Strategic IT consulting to align technology with your business objectives. We help organizations optimize their IT infrastructure, improve security, and implement best practices.",
      tools: [
        "Infrastructure Monitoring",
        "Security Assessment Tools",
        "Performance Analytics",
      ],
      technologies: ["Cloud Platforms", "Virtualization", "Enterprise Systems"],
      languages: ["Python", "Java", "Shell Scripting"],
    },
    {
      title: "Growth & Marketing Excellence",
      subtitle: "Data-driven marketing strategies",
      icon: <HiChartBar className="w-8 h-8 text-blue-600" />,
      description:
        "Data-driven marketing strategies to boost your brand presence and drive growth. We specialize in digital marketing, brand development, and market analysis.",
      tools: ["Google Analytics", "SEMrush", "HubSpot"],
      technologies: [
        "Marketing Automation",
        "CRM Systems",
        "Analytics Platforms",
      ],
      languages: ["SQL", "R", "Python"],
    },
    {
      title: "Custom Software Solutions",
      subtitle: "Building tomorrow's technology today",
      icon: <HiCommandLine className="w-8 h-8 text-blue-600" />,
      description:
        "Custom software solutions built with cutting-edge technologies. From web applications to mobile apps, we deliver scalable and maintainable software.",
      tools: ["Git", "Docker", "Kubernetes", "Jenkins"],
      technologies: ["React", "Node.js", "AWS", "MongoDB"],
      languages: ["JavaScript", "Python", "Java", "TypeScript"],
    },
    {
      title: "Digital Commerce Excellence",
      subtitle: "Powering your online business growth",
      icon: <HiShoppingCart className="w-8 h-8 text-blue-600" />,
      description:
        "End-to-end eCommerce solutions to help you succeed in the digital marketplace. We build robust online stores with seamless user experiences.",
      tools: ["Shopify", "WooCommerce", "Payment Gateways"],
      technologies: ["Headless CMS", "PWA", "Cloud Services"],
      languages: ["PHP", "JavaScript", "Python"],
    },
    {
      title: "Enterprise Modernization",
      subtitle: "Navigating digital transformation",
      icon: <HiDeviceTablet className="w-8 h-8 text-blue-600" />,
      description:
        "Guide your organization through digital transformation with our comprehensive solutions. We help modernize processes and implement digital solutions.",
      tools: ["Azure DevOps", "Terraform", "Ansible"],
      technologies: ["Microservices", "Containerization", "Cloud Native"],
      languages: ["Go", "Java", "Python"],
    },
    {
      title: "Agile Excellence Center",
      subtitle: "Empowering agile transformations",
      icon: <HiCubeTransparent className="w-8 h-8 text-blue-600" />,
      description:
        "Transform your project management with Agile methodologies. We help teams adopt Agile practices for better efficiency and delivery.",
      tools: ["Jira", "Confluence", "Trello", "Monday.com"],
      technologies: ["Agile Frameworks", "CI/CD", "DevOps"],
      languages: ["Process Modeling", "UML", "BPMN"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Innovation Hub
          </h1>
          <p className="text-xl text-gray-600">
            Empowering your digital journey with cutting-edge solutions
          </p>
        </div>

        <div className="space-y-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-8 last:border-b-0"
            >
              <div className="flex items-start gap-6">
                <div className="bg-blue-50 p-4 rounded-full">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl font-semibold text-gray-900 mb-1">
                        {service.title}
                      </h2>
                      <p className="text-blue-600 font-medium mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 mb-4 max-w-3xl">
                        {service.description}
                      </p>
                    </div>
                    <button
                      onClick={() =>
                        setExpandedService(
                          expandedService === index ? null : index
                        )
                      }
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      {expandedService === index ? (
                        <HiChevronUp className="w-6 h-6" />
                      ) : (
                        <HiChevronDown className="w-6 h-6" />
                      )}
                    </button>
                  </div>

                  {expandedService === index && (
                    <div className="mt-6 space-y-6 animate-fadeIn">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-3">
                          Development Tools
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.tools.map((tool, toolIndex) => (
                            <span
                              key={toolIndex}
                              className="bg-blue-50 text-blue-800 text-sm px-4 py-2 rounded-full"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-3">
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-50 text-blue-800 text-sm px-4 py-2 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-3">
                          Languages & Frameworks
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {service.languages.map((lang, langIndex) => (
                            <span
                              key={langIndex}
                              className="bg-blue-50 text-blue-800 text-sm px-4 py-2 rounded-full"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

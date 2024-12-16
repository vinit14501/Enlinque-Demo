import {
  HiComputerDesktop,
  HiChartBar,
  HiCommandLine,
  HiShoppingCart,
  HiDeviceTablet,
  HiCubeTransparent,
} from "react-icons/hi2"

export default function Services3() {
  const services = [
    {
      title: "Technology Strategy & Advisory",
      subtitle: "Transforming businesses through technology",
      icon: <HiComputerDesktop className="w-8 h-8 text-blue-600" />,
      image: "hero1.jpg",
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
      image: "hero1.jpg",
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
      image: "hero1.jpg",
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
      image: "hero1.jpg",
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
      image: "hero1.jpg",
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
      image: "hero1.jpg",
      description:
        "Transform your project management with Agile methodologies. We help teams adopt Agile practices for better efficiency and delivery.",
      tools: ["Jira", "Confluence", "Trello", "Monday.com"],
      technologies: ["Agile Frameworks", "CI/CD", "DevOps"],
      languages: ["Process Modeling", "UML", "BPMN"],
    },
  ]

  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Innovation Hub
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Empowering your digital journey with cutting-edge solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-1 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Service Header */}
              <div className="p-6 border-b border-gray-100 flex items-center space-x-4">
                <div className="bg-blue-50 p-3 rounded-full">
                  {service.icon}
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {service.title}
                  </h2>
                  <p className="text-blue-600 text-sm md:text-base">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image Section */}
                  <div className="md:w-1/3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Description Section */}
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Details Section */}
                    <div className="mt-6 space-y-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        {/* Development Tools */}
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800 mb-3">
                            Development Tools
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {service.tools.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800 mb-3">
                            Technologies
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Languages & Frameworks */}
                        <div>
                          <h3 className="text-lg font-semibold text-blue-800 mb-3">
                            Languages
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {service.languages.map((lang, langIndex) => (
                              <span
                                key={langIndex}
                                className="bg-blue-50 text-blue-800 text-xs px-3 py-1 rounded-full"
                              >
                                {lang}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

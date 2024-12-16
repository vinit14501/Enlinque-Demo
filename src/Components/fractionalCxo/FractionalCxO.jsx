import { motion } from "framer-motion"
import {
  FaLaptopCode, // CIO
  FaChartLine, // CFO
  FaBullhorn, // CMO
  FaCogs, // COO
} from "react-icons/fa"

const FractionalCxO = () => {
  // Version 1
  const version1 = {
    cio: "Our Fractional CIO services provide startups and businesses with expert guidance to align their IT strategies with business objectives. From evaluating technology stacks to implementing scalable solutions, we ensure your IT infrastructure is cost-effective, secure, and optimized for growth—without the need for a full-time executive.",
    cfo: "With our Fractional CFO services, you gain access to strategic financial leadership that helps you manage budgets, optimize cash flow, and develop sustainable growth strategies. We offer expert insights into financial planning, fundraising, and performance analysis to strengthen your financial foundation.",
    cmo: "Our Fractional CMO services bring experienced marketing leadership to your team, helping you craft data-driven strategies, build brand authority, and maximize ROI on campaigns. Whether you're scaling up or launching a new product, we ensure your marketing aligns with your business goals and drives measurable results.",
    coo: "Enlinque's Fractional COO services deliver operational expertise to streamline processes, improve efficiency, and drive business performance. We work closely with your team to optimize workflows, align operations with strategic goals, and ensure your business runs smoothly and scales effectively.",
  }

  /* Version 2
  const version2 = {
    cio: "Our Fractional CIO service helps startups and small businesses develop and implement effective IT strategies aligned with your overall business goals. We assist in evaluating your current technology stack, identifying inefficiencies, ensuring data security, and optimizing your infrastructure to support scalable growth. By bringing in a part-time CIO, you gain access to strategic IT planning, without the full-time commitment, allowing your business to grow with confidence in its technology decisions.",
    cfo: "A Fractional CFO brings experienced financial leadership to your team, offering insights that help manage budgets, forecast growth, and secure funding. We work closely with you to optimize cash flow, improve profitability, and create robust financial strategies that support sustainable growth. Whether you need assistance with financial reporting, raising capital, or navigating complex financial challenges, our Fractional CFOs provide the expertise you need to scale your business efficiently.",
    cmo: "Our Fractional CMO service provides strategic marketing leadership, helping your business develop and execute comprehensive marketing strategies to drive growth. From brand positioning and customer acquisition to digital marketing campaigns and data-driven performance analysis, we help ensure your marketing initiatives are aligned with your business objectives. By working with a Fractional CMO, you gain access to expert-level marketing leadership to build a strong brand and drive measurable results, all at a fraction of the cost of a full-time executive.",
    coo: "Our Fractional COO service offers operational expertise to streamline processes and improve efficiency across your organization. We work with you to optimize workflows, improve supply chain management, and align day-to-day operations with strategic business goals. Whether your focus is on improving team productivity or scaling operations to meet growing demand, our Fractional COOs provide the leadership and hands-on support necessary to run operations smoothly and efficiently."
  };
  */

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
    <div className="bg-white text-gray-800 min-h-screen py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Fractional CxO Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Enlinque, our Fractional CxO services offer startups and
            businesses the expertise of seasoned executives—CIO, CFO, CMO, and
            COO—on a flexible, part-time basis, providing strategic leadership
            and operational excellence without the cost of full-time hires.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="bg-white border border-blue-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <service.icon className="text-blue-700 text-3xl" />
                </div>
                <h2 className="text-2xl font-bold text-blue-900">
                  {service.title}
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default FractionalCxO

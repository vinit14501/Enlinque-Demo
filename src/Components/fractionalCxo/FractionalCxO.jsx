import { motion } from "framer-motion"

const FractionalCxO = () => {
  const version1 = {
    cio: "Our Fractional CIO services provide startups and businesses with expert guidance to align their IT strategies with business objectives. From evaluating technology stacks to implementing scalable solutions, we ensure your IT infrastructure is cost-effective, secure, and optimized for growth—without the need for a full-time executive.",
    cfo: "With our Fractional CFO services, you gain access to strategic financial leadership that helps you manage budgets, optimize cash flow, and develop sustainable growth strategies. We offer expert insights into financial planning, fundraising, and performance analysis to strengthen your financial foundation.",
    cmo: "Our Fractional CMO services bring experienced marketing leadership to your team, helping you craft data-driven strategies, build brand authority, and maximize ROI on campaigns. Whether you're scaling up or launching a new product, we ensure your marketing aligns with your business goals and drives measurable results.",
    coo: "Enlinque's Fractional COO services deliver operational expertise to streamline processes, improve efficiency, and drive business performance. We work closely with your team to optimize workflows, align operations with strategic goals, and ensure your business runs smoothly and scales effectively.",
  }

  const services = [
    {
      title: "Fractional CIO",
      imageUrl: "hero1.jpg",
      description: version1.cio,
    },
    {
      title: "Fractional CFO",
      imageUrl: "hero1.jpg",
      description: version1.cfo,
    },
    {
      title: "Fractional CMO",
      imageUrl: "hero1.jpg",
      description: version1.cmo,
    },
    {
      title: "Fractional COO",
      imageUrl: "hero1.jpg",
      description: version1.coo,
    },
  ]

  return (
    <div className="bg-gray-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-3">
            Fractional CxO Services
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Enlinque, our Fractional CxO services offer startups and
            businesses the expertise of seasoned executives—CIO, CFO, CMO, and
            COO—on a flexible, part-time basis, providing strategic leadership
            and operational excellence without the cost of full-time hires.
          </p>
        </div>

        <div className="grid gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden group hover:border-blue-500 transition-all duration-300"
            >
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-2/5 relative h-48 md:h-64">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-blue-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default FractionalCxO

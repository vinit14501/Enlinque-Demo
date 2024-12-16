import { motion } from "framer-motion"
import { FaLaptopCode, FaChartLine, FaBullhorn, FaCogs } from "react-icons/fa"

const FractionalCxO3 = () => {
  const version1 = {
    cio: "Our Fractional CIO services provide startups and businesses with expert guidance to align their IT strategies with business objectives. From evaluating technology stacks to implementing scalable solutions, we ensure your IT infrastructure is cost-effective, secure, and optimized for growth—without the need for a full-time executive.",
    cfo: "With our Fractional CFO services, you gain access to strategic financial leadership that helps you manage budgets, optimize cash flow, and develop sustainable growth strategies. We offer expert insights into financial planning, fundraising, and performance analysis to strengthen your financial foundation.",
    cmo: "Our Fractional CMO services bring experienced marketing leadership to your team, helping you craft data-driven strategies, build brand authority, and maximize ROI on campaigns. Whether you're scaling up or launching a new product, we ensure your marketing aligns with your business goals and drives measurable results.",
    coo: "Enlinque's Fractional COO services deliver operational expertise to streamline processes, improve efficiency, and drive business performance. We work closely with your team to optimize workflows, align operations with strategic goals, and ensure your business runs smoothly and scales effectively.",
  }

  const services = [
    {
      title: "Fractional CIO",
      icon: FaLaptopCode,
      description: version1.cio,
      bgImage: "hero1.jpg",
      gradient: "from-blue-900/75 to-blue-800/75",
      accent: "blue",
    },
    {
      title: "Fractional CFO",
      icon: FaChartLine,
      description: version1.cfo,
      bgImage: "hero2.jpg",
      gradient: "from-emerald-900/75 to-emerald-800/75",
      accent: "emerald",
    },
    {
      title: "Fractional CMO",
      icon: FaBullhorn,
      description: version1.cmo,
      bgImage: "hero3.jpg",
      gradient: "from-purple-900/75 to-purple-800/75",
      accent: "purple",
    },
    {
      title: "Fractional COO",
      icon: FaCogs,
      description: version1.coo,
      bgImage: "hero4.jpg",
      gradient: "from-rose-900/75 to-rose-800/75",
      accent: "rose",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="pt-20 pb-10 px-4 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold mb-8"
          >
            Fractional CxO Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            At Enlinque, our Fractional CxO services offer startups and
            businesses the expertise of seasoned executives—CIO, CFO, CMO, and
            COO—on a flexible, part-time basis, providing strategic leadership
            and operational excellence without the cost of full-time hires.
          </motion.p>
        </motion.div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="relative group h-[400px] overflow-hidden rounded-3xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-300`}
              />

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`bg-${service.accent}-500/20 backdrop-blur-sm p-4 rounded-2xl`}
                    >
                      <service.icon
                        className={`text-${service.accent}-200 text-3xl`}
                      />
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FractionalCxO3

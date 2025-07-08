import { FaTruckMoving, FaMapMarkedAlt, FaRoute, FaGavel } from "react-icons/fa";

const features = [
  {
    icon: <FaTruckMoving className="text-4xl text-lxj-accent" />,
    title: "Digital Freight Marketplace",
    desc: "Post, match & move loads with intelligent logistics algorithms.",
  },
  {
    icon: <FaMapMarkedAlt className="text-4xl text-lxj-accent" />,
    title: "Fleet Telematics & Tracking",
    desc: "Monitor real-time location, performance, and efficiency of your vehicles.",
  },
  {
    icon: <FaRoute className="text-4xl text-lxj-accent" />,
    title: "Route Optimization",
    desc: "Minimize fuel costs and delivery times with AI-powered route planning.",
  },
  {
    icon: <FaGavel className="text-4xl text-lxj-accent" />,
    title: "Transparent Bidding System",
    desc: "Fair, fast, and visible bidding between shippers and transporters.",
  },
];

export default function KeyFeatures() {
  return (
    <section className="bg-lxj-softWhite py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-lxj-primary mb-4">Key Features</h2>
        <p className="text-lg text-gray-600 mb-12">
          Explore our core offerings that make freight smarter, faster, and fairer.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 p-6 rounded-2xl shadow-md hover:shadow-xl border border-transparent hover:border-blue-400 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="flex flex-col items-start space-y-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-lxj-primary">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

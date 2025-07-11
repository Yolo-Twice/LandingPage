import GlobeIndia from "./globe";
import {
  ShieldCheck,
  Smile,
  Cpu,
  CheckCircle,
  AlertTriangle,
  Ban,
  EyeOff,
  Truck,
  Map,
  PackageCheck,
  Users,
  Headset,
  BadgeDollarSign,
  Network,
  Radar,
  Gavel,
  LineChart,
  Wallet,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section className="snap-start">
      {/* Banner */}
      <div className="relative h-[40vh]">
        <img
          src="images/truck-aboutus.jpeg"
          alt="About background"
          className="absolute inset-0 w-full h-full object-cover object-[center_70%] z-0"
        />
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div className="relative z-20 h-full flex items-start justify-start p-8">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
            About Us
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-[#fffaff] px-6 pt-8 pb-20 space-y-16">

        {/* Who We Are + Globe */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <article className="bg-blue-200 p-8 rounded-2xl shadow-xl backdrop-blur-md">
            <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-6">
              Who <span className="text-gray-900">We Are</span>
            </h2>
            <p className="text-lg text-gray-800 mb-6 leading-relaxed">
              At <span className="font-semibold text-lxj-accent">LogiX<span className="text-lxj-alert">Junction</span></span>, we serve as a technology-first intermediary, offering a digital platform that connects businesses and individuals with the right logistics service providers.
              <br /><br />
              We do not provide logistics services directly—instead, we enable users to access and manage logistics more efficiently through <span className="text-lxj-accent font-medium">smart tools</span>, <span className="text-lxj-accent font-medium">real-time data</span>, and streamlined workflows.
            </p>
            <div className="space-y-4 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-lxj-primary mb-1">Our Mission</h3>
                <p className="text-lg text-gray-800">
                  Empowering India’s logistics future through technology, transparency, and regional reach.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-lxj-primary mb-1">Our Vision</h3>
                <p className="text-lg text-gray-800">
                  Digital freight tools for every fleet, from Jaipur to Jabalpur.
                </p>
              </div>
            </div>
          </article>
          <div className="relative">
            <GlobeIndia />
          </div>
        </div>

        
        {/* Vision & Values */}
        <div className="max-w-5xl mx-auto bg-pink-200 p-8 rounded-2xl shadow-xl backdrop-blur-md">
          <h2 className="text-4xl font-extrabold tracking-tight text-lxj-primary mb-4">
            Our Vision
          </h2>
          <p className="text-lg text-black mb-10 leading-relaxed">
            To make logistics accessible, reliable, and sustainable for everyone.
          </p>

          <h3 className="text-2xl font-semibold text-lxj-primary mb-6">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-pink-100 rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition">
              <ShieldCheck className="w-16 h-16 mx-auto text-lxj-primary mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Transparency</h4>
              <p className="text-gray-700 text-base">
                Clear pricing, honest communication, and open processes in everything we do.
              </p>
            </div>
            <div className="bg-pink-100 rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition">
              <Smile className="w-16 h-16 mx-auto text-lxj-primary mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h4>
              <p className="text-gray-700 text-base">
                Putting our customers first with dedicated support and tailored solutions.
              </p>
            </div>
            <div className="bg-pink-100 rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition">
              <Cpu className="w-16 h-16 mx-auto text-lxj-primary mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Technology</h4>
              <p className="text-gray-700 text-base">
                Leveraging cutting-edge technology to revolutionize logistics management.
              </p>
            </div>
            <div className="bg-pink-100 rounded-xl p-6 text-center shadow-md hover:shadow-2xl transition">
              <CheckCircle className="w-16 h-16 mx-auto text-lxj-primary mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Reliability</h4>
              <p className="text-gray-700 text-base">
                Consistent, dependable service you can trust for your logistics needs.
              </p>
            </div>
          </div>
        </div>

      {/* Problem Section */}
<div className="max-w-5xl mx-auto bg-orange-200 p-8 rounded-2xl shadow-xl backdrop-blur-md">
  <h2 className="text-4xl font-extrabold tracking-tight text-lxj-primary mb-4">
    The Problem
  </h2>
  <ul className="text-lg text-gray-800 space-y-4 pl-1">
    <li className="flex items-start gap-4">
      <AlertTriangle className="text-orange-600 w-7 h-7 mt-1 shrink-0" />
      <span>
        Fragmented logistics make shipment management complex and time-consuming. Most providers focus on FTL, leaving a major gap in the PTL market.
      </span>
    </li>
    <li className="flex items-start gap-4">
      <Ban className="text-orange-600 w-7 h-7 mt-1 shrink-0" />
      <span>
        Lack of transparent pricing and difficulty in comparing different logistics providers.
      </span>
    </li>
    <li className="flex items-start gap-4">
      <EyeOff className="text-orange-600 w-7 h-7 mt-1 shrink-0" />
      <span>
        Inability to track shipments in real-time, leading to poor customer satisfaction.
      </span>
    </li>
  </ul>
</div>

{/* Solution Section */}
<div className="max-w-5xl mx-auto bg-green-200 p-8 rounded-2xl shadow-xl backdrop-blur-md">
  <h2 className="text-4xl font-extrabold tracking-tight text-lxj-primary mb-4">
    Our Solution
  </h2>
  <ul className="text-lg text-gray-800 space-y-4 pl-1">
    <li className="flex items-start gap-4">
      <Truck className="text-green-700 w-7 h-7 mt-1 shrink-0" />
      <span>
        A streamlined platform for easy shipment booking and management, offering reliable, cost-effective PTL services with flexible scheduling, real-time tracking, and optimized space use.
      </span>
    </li>
    <li className="flex items-start gap-4">
      <Radar className="text-green-700 w-7 h-7 mt-1 shrink-0" />
      <span>
        Live shipment tracking and updates through our tech-enabled dashboard.
      </span>
    </li>
    <li className="flex items-start gap-4">
      <BadgeDollarSign className="text-green-700 w-7 h-7 mt-1 shrink-0" />
      <span>
        Integrated rate comparison engine showing quotes from multiple providers.
      </span>
    </li>
    <li className="flex items-start gap-4">
      <Map className="text-green-700 w-7 h-7 mt-1 shrink-0" />
      <span>
        Support for road, rail, air, and multimodal transport for all types of logistics needs.
      </span>
    </li>
  </ul>
</div>

{/* Our Service Section */}
<div className="max-w-5xl mx-auto bg-purple-200 p-8 rounded-2xl shadow-xl backdrop-blur-md">
  <h2 className="text-4xl font-extrabold tracking-tight text-lxj-primary mb-4">
    Our Service
  </h2>
  <ul className="text-lg text-gray-800 space-y-4 pl-1">
    <li className="flex items-start gap-4">
      <Gavel className="text-blue-700 w-7 h-7 mt-1 shrink-0" />
      <span>
        <strong>Legal Service</strong> – We provide access to expert legal consultation by connecting users with verified partners who specialize in logistics-related compliance and regulations.
      </span>
    </li>
    <li className="flex items-start gap-4">
      <LineChart className="text-blue-700 w-7 h-7 mt-1 shrink-0" />
      <span>
        <strong>Consulting Service</strong> – Our team of experts provides insights and strategies to optimize your logistics.
      </span>
    </li>
    <li className="flex items-start gap-4">
      <Wallet className="text-blue-700 w-7 h-7 mt-1 shrink-0" />
      <span>
        <strong>Financial Service</strong> – We offer flexible payment options and cost-management tools to support your budget.
      </span>
    </li>
  </ul>
</div>

{/* Why Choose LogiXJunction Section */}
<div className="max-w-6xl mx-auto bg-cyan-200 p-8 rounded-2xl shadow-xl backdrop-blur-md">
  <h2 className="text-4xl font-extrabold tracking-tight text-lxj-primary mb-8 text-center">
    Why Choose LogiXJunction?
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-cyan-100 rounded-2xl p-6 shadow-md flex items-start gap-4 hover:shadow-2xl transition">
      <PackageCheck className="text-purple-600 w-8 h-8 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold text-lg">Reliable Logistics</h3>
        <p className="text-gray-700">
          Reliable and efficient logistics solutions tailored for businesses of all sizes.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-cyan-100 rounded-2xl p-6 shadow-md flex items-start gap-4 hover:shadow-2xl transition">
      <Users className="text-purple-600 w-8 h-8 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold text-lg">Industry Expertise</h3>
        <p className="text-gray-700">
          Experienced team with in-depth logistics and supply chain knowledge.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-cyan-100 rounded-2xl p-6 shadow-md flex items-start gap-4 hover:shadow-2xl transition">
      <Headset className="text-purple-600 w-8 h-8 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold text-lg">Dedicated Support</h3>
        <p className="text-gray-700">
          Round-the-clock customer support to ensure seamless operations.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-cyan-100 rounded-2xl p-6 shadow-md flex items-start gap-4 hover:shadow-2xl transition">
      <ShieldCheck className="text-purple-600 w-8 h-8 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold text-lg">Robust Security</h3>
        <p className="text-gray-700">
          Comprehensive security measures to protect your goods and data.
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-cyan-100 rounded-2xl p-6 shadow-md flex items-start gap-4 hover:shadow-2xl transition">
      <Radar className="text-purple-600 w-8 h-8 mt-1 shrink-0" />
      <div>
        <h3 className="font-semibold text-lg">Smart Tracking & Rates</h3>
        <p className="text-gray-700">
          Real-time tracking and intelligent rate comparison for smart decision-making.
        </p>
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
}

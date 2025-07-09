import GlobeIndia from "./globe";
import {
  ShieldCheck,
  Smile,
  Cpu,
  CheckCircle,
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
          <ul className="list-disc list-inside text-lg text-gray-800 space-y-3 pl-4">
            <li>
              Fragmented logistics make shipment management complex and time-consuming. Most providers focus on FTL, leaving a major gap in the PTL market.
            </li>
            <li>
              Lack of transparent pricing and difficulty in comparing different logistics providers.
            </li>
            <li>
              Inability to track shipments in real-time, leading to poor customer satisfaction.
            </li>
          </ul>
        </div>

        {/* Solution Section */}
        <div className="max-w-5xl mx-auto bg-green-200 p-8 rounded-2xl shadow-xl backdrop-blur-md">
          <h2 className="text-4xl font-extrabold tracking-tight text-lxj-primary mb-4">
            Our Solution
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-800 space-y-3 pl-4">
            <li>
              A streamlined platform for easy shipment booking and management, offering reliable, cost-effective PTL services with flexible scheduling, real-time tracking, and optimized space use.
            </li>
            <li>
              Live shipment tracking and updates through our tech-enabled dashboard.
            </li>
            <li>
              Integrated rate comparison engine showing quotes from multiple providers.
            </li>
            <li>
              Support for road, rail, air, and multimodal transport for all types of logistics needs.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

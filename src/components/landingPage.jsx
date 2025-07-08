import GlobeIndia from "./globe";
import KeyFeatures from "./keyFeatures";

export default function HeroLanding() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
    <section className="relative h-screen snap-start">
  {/* Background Image */}
  <img
    src="images/truck.jpg" // Replace with actual path
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Overlay for darkening the background */}
  <div className="absolute inset-0 bg-black/40 z-10" />

  {/* Foreground Content */}
  <div className="relative z-20 h-full flex items-center justify-center px-6 py-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left Content */}
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight text-white mb-6">
          Transforming India’s Freight with Smart, Scalable Tech
        </h1>
        <p className="text-white text-lg mb-8">
          Built for fleet owners, shippers, and mid-sized logistics players across Tier-2 & Tier-3 cities
        </p>
        <div className="flex space-x-4">
          <a href="#" className="px-6 py-3  transition-all duration-300 transform bg-lxj-accent text-white rounded-full font-semibold hover:bg-lxj-primary">
            Get started for Free
          </a>
          <a href="#" className="px-6 py-3 border-2 transition-all duration-300 transform border-white rounded-full text-white font-semibold hover:bg-white hover:text-lxj-accent">
            Explore Features →
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative">
        <img
          src="images/mobile-ui.png"
          alt="Mobile UI"
          className="w-full max-w-xs mx-auto drop-shadow-2xl rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

<section className="relative h-screen snap-start">
  {/* Background Image */}
  <img
    src="images/airplane.jpg" // Update path if needed
    alt="About background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Overlay */}
  <div className="absolute inset-0  z-10" />

  {/* Foreground Content */}
  <div className="relative z-20 h-full flex items-center justify-center px-6 py-20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
      {/* Left Text Content */}
      <article className="bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-md ">
        <h2 className="text-5xl font-extrabold tracking-tight text-white mb-6">
          About <span className="text-white">Us</span>
        </h2>
        
        <p className="text-lg text-white mb-6 leading-relaxed">
          At <span className="font-semibold text-lxj-accent">LogiX<span className="text-lxj-alert">Junction</span></span>, we serve as a technology-first intermediary, offering a digital platform that connects businesses and individuals with the right logistics service providers.
          <br /><br />
          We do not provide logistics services directly—instead, we enable users to access and manage logistics more efficiently through <span className="text-lxj-softYellow font-medium">smart tools</span>, <span className="text-lxj-softYellow font-medium">real-time data</span>, and streamlined workflows.
        </p>

        <div className="space-y-4 mt-8">
          <div>
            <h3 className="text-xl font-semibold text-yellow-400  mb-1">Our Mission</h3>
            <p className="text-lg text-white">
              Empowering India’s logistics future through technology, transparency, and regional reach.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400  mb-1">Our Vision</h3>
            <p className="text-lg text-white">
              Digital freight tools for every fleet, from Jaipur to Jabalpur.
            </p>
          </div>
        </div>
      </article>

      {/* Right Image */}
      <div className="relative">
        {/* <img
          src="images/india-map-logistics.png"
          alt=""
          className="w-full max-w-md mx-auto drop-shadow-2xl rounded-xl"
        /> */}
        <GlobeIndia />
      </div>
    </div>
  </div>
</section>

<section className="relative min-h-screen snap-start">
  {/* Background Image */}
  <img
    src="images/key-features-shipyard.jpg" // Change to your desired image
    alt="Key Features Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Optional Overlay */}
  <div className="absolute inset-0 bg-black/30 z-10" />

  {/* Foreground Content */}
  <div className="relative z-20 flex items-center justify-center px-6 py-20">
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-6xl w-full">
      <KeyFeatures />
    </div>
  </div>
</section>


  </div>  
);
}

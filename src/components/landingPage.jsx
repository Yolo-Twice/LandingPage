export default function HeroLanding() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
    <section className=" bg-lxj-softWhite min-h-screen flex items-center justify-center px-6 py-12">
      <div className="h-screen snap-start max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          

          <h1 className="text-5xl font-extrabold tracking-tight text-lxj-primary mb-6">
          Transforming India’s Freight with Smart, Scalable Tech
          </h1>

          <p className="text-lxj-dark text-lg mb-8">
          Built for fleet owners, shippers, and mid-sized logistics players across Tier-2 & Tier-3 cities
          </p>

          <div className="flex space-x-4">
            <a href="#" className="px-6 py-3 bg-lxj-accent text-white rounded-full font-semibold hover:bg-lxj-primary">
              Get started for Free
            </a>
            <a href="#" className="px-6 py-3 border-2 border-lxj-accent rounded-full text-lxj-accent font-semibold hover:bg-gray-300">
            Explore Features  →
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
    </section>
  <section className="h-screen snap-start bg-lxj-softWhite flex items-center justify-center px-6 py-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    
    {/* Left Text Content */}
    <article>
      <h2 className="text-5xl font-extrabold tracking-tight text-lxj-primary mb-8">
        About Us
      </h2>
      
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        At <span className="font-semibold text-lxj-accent">LogiXJunction</span>, we serve as a technology-first intermediary, offering a digital platform that connects businesses and individuals with the right logistics service providers.
        <br /><br />
        We do not provide logistics services directly—instead, we enable users to access and manage logistics more efficiently through smart tools, real-time data, and streamlined workflows.
      </p>

      <div className="space-y-4 mt-8">
        <div>
          <h3 className="text-xl font-semibold text-lxj-dark underline mb-1">Our Mission</h3>
          <p className="text-lg text-gray-800">
            Empowering India’s logistics future through technology, transparency, and regional reach.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-lxj-dark underline mb-1">Our Vision</h3>
          <p className="text-lg text-gray-800">
            Digital freight tools for every fleet, from Jaipur to Jabalpur.
          </p>
        </div>
      </div>
    </article>

    {/* Right Image Content */}
    <div className="relative">
      <img
        src="images/india-map-logistics.png"
        alt="India logistics map"
        className="w-full max-w-md mx-auto drop-shadow-2xl rounded-xl"
      />
    </div>
  </div>
</section>

  </div>  
);
}

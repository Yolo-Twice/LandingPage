export default function HeroLanding() {
  return (
    <section className="bg-lxj-softWhite min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <div className="mb-4 inline-flex items-center space-x-2 bg-lxj-softYellow text-lxj-primary text-sm font-medium px-3 py-1 rounded-full">
            <span>We’re hiring</span>
            <a href="#" className="text-lxj-primary hover:underline">See open positions →</a>
          </div>

          <h1 className="text-5xl font-extrabold tracking-tight text-lxj-primary mb-6">
            A better way to ship your projects
          </h1>

          <p className="text-lxj-dark text-lg mb-8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
            Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>

          <div className="flex space-x-4">
            <a href="#" className="px-6 py-3 bg-lxj-accent text-white rounded-lg font-semibold hover:bg-lxj-primary">
              Get started
            </a>
            <a href="#" className="px-6 py-3 text-lxj-accent font-semibold hover:underline">
              Learn more →
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
  );
}

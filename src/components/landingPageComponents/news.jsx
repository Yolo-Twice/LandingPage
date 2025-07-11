export default function News() {
  return (
    <section className="relative min-h-screen snap-start bg-lxj-softWhite px-6 py-24 text-gray-900">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-5xl font-extrabold mb-4">Top Reads</h2>
          <p className="text-lxj-accent text-lg">
            Explore the latest insights and trends shaping logistics and freight.
          </p>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 gap-6">
          {/* Article 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-lg font-semibold">
              “How Tier-2 Logistics is the Next Big Opportunity in India”
            </p>
            <p className="text-sm text-gray-500 mt-1">— Times of India</p>
          </div>

          {/* Article 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-lg font-semibold">
              “Telematics and Driver Safety: What You Must Know”
            </p>
            <p className="text-sm text-gray-500 mt-1">— The Hindu</p>
          </div>

          {/* Article 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-lg font-semibold">
              “Digital Freight Platforms vs Traditional Brokers”
            </p>
            <p className="text-sm text-gray-500 mt-1">— Hindustan Times</p>
          </div>
        </div>
      </div>
    </section>
  );
}

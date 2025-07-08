export default function UrbanLife() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
           Comfort, Community, and Convenience at 3635 Dundas 
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
Nestled in Toronto’s vibrant High Park Junction Neighbourhood, 3635 Dundas Street West blends comfort with convenience for residents who value quality living. This well maintained mixed-use building offers spacious layouts, upgraded systems, and easy access to shops, parks, and transit. With its strong sense of community and attentive management, 3635 Dundas is where residents find a true sense of home in a thriving urban setting.
            </p>
          </div>

          {/* Right Images */}
          <div className="space-y-6">
            {/* Main Building Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="6.jpg"
                alt="City Walk Northline Building"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Interior Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="5.jpg"
                alt="Interior Design"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

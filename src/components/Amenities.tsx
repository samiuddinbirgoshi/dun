export default function Amenities() {
  const amenities = [
    {
      icon: "https://ext.same-assets.com/1166745218/2218836690.svg",
      title: "Upgraded Systems",
      description: "All Mechanicals, Electrical, Plumbing, and HVAC Upgraded"
    },
    {
      icon: "https://ext.same-assets.com/1166745218/879415374.svg",
      title: "Modern Interiors",
      description: "Almost all units recently renovated with high-quality finishes"
    },
    {
      icon: "https://ext.same-assets.com/1166745218/559466624.svg",
      title: "Comfortable Living",
      description: "All units have A/C and high-efficiency furnaces"
    },
    {
      icon: "https://ext.same-assets.com/1166745218/458296478.svg",
      title: "Secure Living",
      description: "Mircom Fire Panel Split into Zones with Annunciator"
    },
    {
      icon: "https://ext.same-assets.com/1166745218/2622735659.svg",
      title: "On-site Parking",
      description: "Convenient parking with 7 spaces available"
    },
    {
      icon: "https://ext.same-assets.com/1166745218/3590652409.svg",
      title: "Private Outdoor",
      description: "5 units have private entrances with garden areas"
    },
    {
      icon: "https://ext.same-assets.com/1166745218/1277326766.svg",
      title: "Neighborhood",
      description: "Steps from Walmart, banks, and diverse dining options"
    },
    {
      icon: "https://ext.same-assets.com/1166745218/3729959171.svg",
      title: "Recreation",
      description: "Close proximity to High Park and downtown"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            AMENITIES AND FACILITIES
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900">
            Discover Exciting Features at City Walk Northline
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={`amenity-${index}`}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 p-4"
            >
              <div className="mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 flex items-center justify-center">
                  <img
                    src={amenity.icon}
                    alt={amenity.title}
                    className="w-10 h-10 md:w-12 md:h-12 object-contain text-purple-600"
                  />
                </div>
                <h3 className="text-base md:text-lg font-medium text-gray-900 mb-1 md:mb-2 group-hover:text-purple-600 transition-colors">
                  {amenity.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
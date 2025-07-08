"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
          Welcome to 3635 Dundas Your New Home in the Junction
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              3635 Dundas Street West offers exceptional living in Toronto's sought after High Park  Junction Neighbourhood. This remarkable 15 unit corner building features 13 recently renovated residential units and 2 commercial units. Residents enjoy spacious layouts with perfect designs, each having separate laundry and HVAC systems. All units are separately metered for hydro and gas, ensuring comfort and convenience. The building boasts upgraded mechanicals, electrical, plumbing, and HVAC systems, providing a secure and welcoming environment in a vibrant community.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/3.jpg"
                alt="Joinville Suites Building"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/4.jpg"
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

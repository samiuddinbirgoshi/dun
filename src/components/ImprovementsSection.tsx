// src/components/ImprovementsSection.tsx
import React from 'react';

export default function ImprovementsSection() {
  return (
    <section className="relative py-18 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-red-100 opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-red-400"></div>
            <div className="mx-4 text-[#b60b49] font-light uppercase tracking-widest text-sm">Premium Living</div>
            <div className="w-16 h-0.5 bg-red-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            <span className="block">Sophisticated</span>
            <span className="font-normal text-black">Improvements & Proximity</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Quality upgrades and prime location offering modern convenience
          </p>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Building Enhancements */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-light text-gray-900 mb-8">Building Enhancements</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Complete Systems Upgrade</p>
                    <p className="text-gray-600 mt-1">All mechanical, electrical, plumbing and HVAC systems upgraded to modern standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Premium Unit Renovations</p>
                    <p className="text-gray-600 mt-1">Most units feature recent renovations with high-end cabinetry and finishes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Independent Systems</p>
                    <p className="text-gray-600 mt-1">Each unit has separate laundry facilities and HVAC controls for personalized comfort</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Individual Utility Metering</p>
                    <p className="text-gray-600 mt-1">Separate hydro and gas meters for each unit ensure fair billing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Climate Control</p>
                    <p className="text-gray-600 mt-1">Air conditioning and high-efficiency furnaces in every unit</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Modern Water Heating</p>
                    <p className="text-gray-600 mt-1">New electric water tanks installed for all second floor units</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Durable Plumbing</p>
                    <p className="text-gray-600 mt-1">Upgraded systems using cast iron, pex and copper materials</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Energy Efficient Windows</p>
                    <p className="text-gray-600 mt-1">Thermal double pane aluminum windows throughout the building</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-black p-5 text-center">
              <p className="text-white font-light">Modern upgrades for comfortable living</p>
            </div>
          </div>

          {/* Geographic Proximity */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col h-full">
            <div className="p-8 flex-grow">
              <h3 className="text-2xl font-light text-gray-900 mb-8">Prime Location</h3>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Park & Downtown Access</p>
                    <p className="text-gray-600 mt-1">Minutes from High Park and all downtown attractions and amenities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Transportation Hub</p>
                    <p className="text-gray-600 mt-1">Easy access to Gardiner Expressway connecting downtown and Etobicoke</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Thriving Neighborhood</p>
                    <p className="text-gray-600 mt-1">Vibrant community with new mixed-use developments and amenities</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Daily Essentials</p>
                    <p className="text-gray-600 mt-1">Walking distance to Walmart, Shoppers Drug Mart, FreshCo and LCBO</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Dining Options</p>
                    <p className="text-gray-600 mt-1">Variety of restaurants including Pizzeria Libretto, A&W, and Lebanon Express</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Financial Services</p>
                    <p className="text-gray-600 mt-1">Convenient banking options located just steps away</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Public Transit</p>
                    <p className="text-gray-600 mt-1">Excellent access to public transportation routes and major highways</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4 flex-shrink-0">
                    <svg className="h-5 w-5 text-[#b60b49]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Growing Community</p>
                    <p className="text-gray-600 mt-1">Area experiencing growth with new residential developments</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-black p-5 text-center">
              <p className="text-white font-light">Everything you need within reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
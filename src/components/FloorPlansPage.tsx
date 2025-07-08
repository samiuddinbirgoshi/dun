"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FloorPlansPage() {
  const [activeUnit, setActiveUnit] = useState("1-bedroom");

  const building = {
    name: "3635 Dundas Street West, Toronto",
    description: "2 Storeys, 13 Residential Units, 2 Commercial Units",
    units: [
      {
        id: "1-bedroom",
        name: "1 Bedroom",
        size: "Approx. 635 sq ft (Average)",
        beds: 1,
        baths: 1,
        features: [
          "Recently renovated kitchens and bathrooms",
          "Upgraded flooring",
          "Spacious layouts",
          "Separate laundry and HVAC",
          "Separately metered for hydro and gas",
          "High-quality cabinetry and finishes",
          "Some units may have private entrances and garden/BBQ areas"
        ],
        image: "/26.jpg"
      },
      {
        id: "1-bedroom-den",
        name: "1 Bedroom Plus Den",
        size: "Approx. 830 sq ft (Average)",
        beds: "1 + Den",
        baths: 1,
        features: [
          "Recently renovated kitchens and bathrooms",
          "Upgraded flooring",
          "Spacious layouts",
          "Separate laundry and HVAC",
          "Separately metered for hydro and gas",
          "High-quality cabinetry and finishes"
        ],
        image: "/27.jpg"
      },
      {
        id: "1-bedroom-basement",
        name: "1 Bedroom Basement",
        size: "Approx. 740 sq ft",
        beds: 1,
        baths: 1,
        features: [
          "Recently renovated kitchens and bathrooms",
          "Upgraded flooring",
          "Efficient layout",
          "Separate laundry and HVAC",
          "Separately metered for hydro"
        ],
        image: "/11.jpg"
      },
      {
        id: "2-bedroom",
        name: "2 Bedroom",
        size: "Approx. 892 sq ft (Average)",
        beds: 2,
        baths: 1,
        features: [
          "Recently renovated kitchens and bathrooms",
          "Upgraded flooring",
          "Spacious layouts",
          "Separate laundry and HVAC",
          "Separately metered for hydro and gas",
          "High-quality cabinetry and finishes",
          "Some units may have private entrances and garden/BBQ areas"
        ],
        image: "/13.jpg"
      }
    ]
  };

  const currentUnit = building.units.find(unit => unit.id === activeUnit) || building.units[0];

  return (
    <section id="floor-plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Floor Plans & Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of thoughtfully designed floor plans, crafted to suit every lifestyle.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Unit Selection */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              {building.name} <span className="text-gray-500 text-lg">({building.description})</span>
            </h3>
            
            {/* Unit Type Buttons */}
            <div className="space-y-4 mb-8">
              {building.units.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => setActiveUnit(unit.id)}
                  className={`w-full text-left px-6 py-4 rounded-full transition-all ${
                    activeUnit === unit.id
                      ? "bg-black text-white"
                      : "bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{unit.name}</span>
                    <span className="text-sm text-gray-500">{unit.size}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Unit Details */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Unit Features</h4>
              <ul className="space-y-2">
                {currentUnit.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Floor Plan Display */}
          <div className="relative">
            <div className="p-4">
              <img
                src={currentUnit.image}
                alt={`${currentUnit.name} Floor Plan`}
                className="w-full h-auto border border-gray-200"
              />
              
              {/* Pricing Information */}
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Pricing Information</h4>
                <p className="text-gray-600">
                  For current availability and pricing details, please contact our leasing office.
                </p>
              </div>

              {/* Rounded Inquiry Button */}
              <Button className="w-full mt-6 bg-black hover:bg-gray-800 text-white rounded-full py-3">
                Inquire About This Unit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
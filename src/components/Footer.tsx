export default function Footer() {
  const navItems = [
    { name: "Home", href: "/" },
    // { name: "Amenities", href: "/amenities" },
    { name: "Floor Plans & Pricing", href: "/floorplans" },
    { name: "Gallery", href: "/gallery" },
    { name: "Residents", href: "/maintenance" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-medium mb-4">3635 Dundas</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Modern Living in Toronto's Junction Neighbourhood
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-medium mb-4">Our Location</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>3635 Dundas Street West, Toronto, ON M6S 2T2</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Phone: (289) 312-6483 (24/7 Line)</li>
              <li>Email: info@intrustcre.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} 3635 Dundas. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/* Add social media icons or other links here if needed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
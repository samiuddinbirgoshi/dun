"use client";

import { useRouter } from "next/navigation";

export default function ContactForm() {
  const router = useRouter();

  return (
    <section id="contact">
      <div className="bg-black w-full py-16 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-3xl font-light mb-10 text-center">
            RESIDENT SERVICES
          </h2>

          <div className="text-center text-white space-y-8">
            <p className="text-lg">
              Residents can make payments and submit maintenance requests through our online portal.
            </p>
            
            <div className="pt-4">
              <a
                href="https://www.rentcafe.com/residentservices/apartmentsforrent/userlogin.aspx?_yTrackUser=MzQxNTYwNjAxNSMyMDYyNjE2NDEz-HcAi9hjzZgk%253d&_yTrackVisit=NTg2MTI2NjU5MiM0NDMwNTU5NTU%253d-4Z5cIpqOgQg%253d&_yTrackReqDT=44481420251007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-100 text-black py-4 px-10 text-base hover:bg-gray-100 transition-colors"
              >
                Access Resident Portal
              </a>
            </div>

            <div className="pt-8 border-t border-white/20">
              <p className="text-lg mb-6">
               if you need assistance with the portal, please contact our office directly.
              </p>
              <button
                onClick={() => router.push('/contact')}
                className="bg-transparent border border-white text-white py-4 px-10 text-base hover:bg-white hover:text-black transition-colors"
              >
                Contact Property Management
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
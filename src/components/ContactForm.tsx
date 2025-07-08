"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: "service_mkwm94i",
    templateId: "template_l7o3dew",
    publicKey: "EbrdYh5PNga8iKJii"
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const form = formRef.current;

    if (!form) return false;

    // Required fields validation
    if (!form.fullName.value) newErrors.fullName = "Full name is required";
    if (!form.apartmentNumber.value) newErrors.apartmentNumber = "Apartment number is required";
    if (!form.email.value) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.value)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.phone.value) newErrors.phone = "Phone number is required";
    if (!form.requestType.value) newErrors.requestType = "Request type is required";
    if (!form.urgency.value) newErrors.urgency = "Urgency is required";
    if (!form.description.value) newErrors.description = "Description is required";
    if (!form.contactMethod.value) newErrors.contactMethod = "Please select at least one contact method";
    if (!form.permission.checked) newErrors.permission = "Permission is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current as HTMLFormElement,
        EMAILJS_CONFIG.publicKey
      );
      
      setSubmitSuccess(true);
      formRef.current?.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section id="contact" className="bg-black w-full py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-light mb-8">THANK YOU FOR YOUR REQUEST</h2>
          <p className="mb-10 text-lg">We have received your maintenance request and will respond according to the urgency you specified.</p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="bg-white text-black py-4 px-10 text-base hover:bg-gray-100 transition-colors"
          >
            SUBMIT ANOTHER REQUEST
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact">
      <div className="bg-black w-full py-16 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-3xl font-light mb-10 text-center">
            MAINTENANCE REQUEST FORM
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name and Apartment Number Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className={`border-b ${errors.fullName ? "border-red-400" : "border-white/30"}`}>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name*"
                    className="w-full bg-transparent text-white placeholder-white/50 py-3 text-base focus:outline-none"
                  />
                </div>
                {errors.fullName && <p className="text-red-400 text-sm mt-2">{errors.fullName}</p>}
              </div>
              <div>
                <div className={`border-b ${errors.apartmentNumber ? "border-red-400" : "border-white/30"}`}>
                  <input
                    name="apartmentNumber"
                    type="text"
                    placeholder="Apartment Number*"
                    className="w-full bg-transparent text-white placeholder-white/50 py-3 text-base focus:outline-none"
                  />
                </div>
                {errors.apartmentNumber && <p className="text-red-400 text-sm mt-2">{errors.apartmentNumber}</p>}
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className={`border-b ${errors.email ? "border-red-400" : "border-white/30"}`}>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address*"
                    className="w-full bg-transparent text-white placeholder-white/50 py-3 text-base focus:outline-none"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
              </div>
              <div>
                <div className={`border-b ${errors.phone ? "border-red-400" : "border-white/30"} flex`}>
                  <select
                    name="countryCode"
                    className="bg-transparent text-white py-3 pr-2 text-base focus:outline-none"
                  >
                    <option className="text-black" value="+971">+971 (UAE)</option>
                    <option className="text-black"  value="+1">+1 (USA/Canada)</option>
                    <option className="text-black"  value="+974">+974 (Qatar)</option>
                    <option className="text-black"  value="+966">+966 (Saudi)</option>
                    <option className="text-black"  value="+965">+965 (Kuwait)</option>
                    <option className="text-black"  value="+973">+973 (Bahrain)</option>
                    <option className="text-black"  value="+968">+968 (Oman)</option>
                    <option className="text-black"  value="+20">+20 (Egypt)</option>
                    <option className="text-black"  value="+91">+91 (India)</option>
                    <option className="text-black"  value="+44">+44 (UK)</option>
                    <option className="text-black"  value="+33">+33 (France)</option>
                    <option className="text-black"  value="+49">+49 (Germany)</option>
                  </select>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full bg-transparent text-white placeholder-white/50 py-3 text-base focus:outline-none"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}
              </div>
            </div>

            {/* Request Type and Urgency */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className={`border-b ${errors.requestType ? "border-red-400" : "border-white/30"}`}>
                  <select 
                    name="requestType" 
                    className="w-full bg-transparent text-white py-3 text-base focus:outline-none appearance-none"
                  >
                    <option value="">Request Type*</option>
                    <option className="text-black" value="plumbing">Plumbing</option>
                    <option className="text-black" value="electrical">Electrical</option>
                    <option className="text-black" value="hvac">HVAC</option>
                    <option className="text-black" value="appliance">Appliance</option>
                    <option className="text-black" value="general">General Repair</option>
                    <option className="text-black" value="pest">Pest Control</option>
                    <option className="text-black" value="other">Other</option>
                  </select>
                </div>
                {errors.requestType && <p className="text-red-400 text-sm mt-2">{errors.requestType}</p>}
              </div>
              <div>
                <div className={`border-b ${errors.urgency ? "border-red-400" : "border-white/30"}`}>
                  <select 
                    name="urgency" 
                    className="w-full bg-transparent text-white py-3 text-base focus:outline-none appearance-none"
                  >
                    <option value="">Urgency*</option>
                    <option className="text-black" value="emergency">Emergency - Immediate Attention</option>
                    <option className="text-black" value="high">High - Within 24-48 hours</option>
                    <option className="text-black" value="normal">Normal - Within 3-5 business days</option>
                  </select>
                </div>
                {errors.urgency && <p className="text-red-400 text-sm mt-2">{errors.urgency}</p>}
              </div>
            </div>

            {/* Description */}
            <div>
              <div className={`border-b ${errors.description ? "border-red-400" : "border-white/30"}`}>
                <textarea
                  name="description"
                  placeholder="Detailed Description of Issue*"
                  rows={4}
                  className="w-full bg-transparent text-white placeholder-white/50 py-3 text-base focus:outline-none"
                />
              </div>
              {errors.description && <p className="text-red-400 text-sm mt-2">{errors.description}</p>}
            </div>

            {/* Preferred Contact Method */}
            <div>
              <p className="text-white mb-2">Preferred Contact Method*</p>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center text-white/80">
                  <input
                    type="checkbox"
                    name="contactMethod"
                    value="email"
                    className="mr-2 h-4 w-4 bg-transparent border-white focus:ring-0"
                  />
                  Email
                </label>
                <label className="flex items-center text-white/80">
                  <input
                    type="checkbox"
                    name="contactMethod"
                    value="phone"
                    className="mr-2 h-4 w-4 bg-transparent border-white focus:ring-0"
                  />
                  Phone
                </label>
              </div>
              {errors.contactMethod && <p className="text-red-400 text-sm mt-2">{errors.contactMethod}</p>}
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-white/80 mb-2">Attach Photo/Video (Optional)</label>
              <input
                type="file"
                name="attachment"
                accept="image/*,video/*"
                className="w-full text-white text-sm"
              />
            </div>

            {/* Permission to Enter */}
            <div className="flex items-start pt-4">
              <input
                name="permission"
                type="checkbox"
                id="permission"
                className="mt-1 h-4 w-4 bg-transparent border-white focus:ring-0"
              />
              <label htmlFor="permission" className="text-white/80 text-sm ml-3">
                I grant permission for maintenance staff to enter my unit if I am not home*
              </label>
              {errors.permission && <p className="text-red-400 text-sm ml-3">{errors.permission}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-white text-black py-4 mt-8 text-base hover:bg-gray-100 transition-colors ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESSING YOUR REQUEST...
                </span>
              ) : (
                "SUBMIT MAINTENANCE REQUEST"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
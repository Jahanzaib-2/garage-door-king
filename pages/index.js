// React + Tailwind base layout for Garage Door King's high-conversion site

import React from "react";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        <span>Open Daily: 9 AM – 9 PM</span>
        <a href="tel:+19052085464" className="text-yellow-400 font-bold">Call: 905-208-KING (5464)</a>
      </div>

      {/* Header/Nav */}
      <header className="flex justify-between items-center py-4 px-6 border-b shadow-sm">
        <img src="/logo.png" alt="Garage Door King" className="h-10" />
        <nav className="space-x-6 text-sm font-semibold">
          <a href="#services">Services</a>
          <a href="#deals">Deals</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-6 py-12 bg-gray-50">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold leading-tight">Garage Door Repair and Installation Services</h1>
          <p className="text-blue-600 font-semibold">Your Local Garage Door Experts Serving the GTA</p>
          <p className="text-gray-700 text-sm">Spring replacements, cable changes, opener installs, new doors – 7 days a week, fully insured, and no middlemen.</p>
          <a href="#contact" className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded font-bold shadow hover:bg-blue-600">Request Service</a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img src="/hero-tech.jpg" alt="Tech assisting customer" className="rounded-xl shadow-lg" />
        </div>
      </section>

      {/* Trust Icons */}
      <section className="flex flex-wrap justify-around items-center px-6 py-6 bg-white border-t border-b">
        {[
          ["1-Year Parts Warranty", "Free warranty for 1 year on all parts we sell and install"],
          ["Open 7 Days", "Available 365 days a year, even weekends & holidays"],
          ["WSIB Insured", "Fully insured for liability and worker protection"],
          ["Authorized Dealer", "Trusted for LiftMaster, Chamberlain, etc."]
        ].map(([title, desc]) => (
          <div key={title} className="w-40 text-center mb-4">
            <div className="text-xl font-bold text-blue-600 mb-1">{title}</div>
            <p className="text-xs text-gray-600">{desc}</p>
          </div>
        ))}
      </section>

      {/* Deals Section */}
      <section id="deals" className="px-6 py-12 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-2">Special Garage Deals On Sale</h2>
        <p className="text-center text-gray-600 text-sm mb-8">We offer the best value for repairs, openers, and new doors installed — done right the first time by real professionals.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Garage Door Opener",
              desc: "1-1/4 HP Ultra Quiet Belt Drive",
              price: "$699",
              img: "/opener1.jpg",
              showPrice: true
            },
            {
              title: "Garage Door Opener",
              desc: "1/2 HP Liftmaster Belt Drive",
              price: "$679",
              img: "/opener2.jpg",
              showPrice: true
            },
            {
              title: "Modern Garage Door",
              desc: "Raised Panel, 8 to 7 feet high",
              price: null,
              img: "/door1.jpg",
              showPrice: false
            },
            {
              title: "Custom Garage Door",
              desc: "Flush Panel, 8 to 7 feet high",
              price: null,
              img: "/door2.jpg",
              showPrice: false
            }
          ].map(({ title, desc, price, img, showPrice }) => (
            <div key={title} className="bg-white rounded shadow p-4 text-center">
              <img src={img} alt={title} className="w-full h-40 object-cover rounded mb-4" />
              <h3 className="text-blue-600 font-bold text-sm uppercase mb-1">{title}</h3>
              <p className="text-sm text-gray-600 mb-2">{desc}</p>
              {showPrice ? (
                <div className="bg-blue-500 text-white font-bold py-2 rounded mb-1">From {price}</div>
              ) : (
                <div className="bg-blue-100 text-blue-600 font-semibold py-2 rounded mb-1">Contact for Pricing</div>
              )}
              <p className="text-xs text-gray-500">Installed</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-12 bg-white flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 space-y-4">
          <p className="text-blue-600 font-semibold text-sm uppercase">Same-Day Garage Door Repair</p>
          <h2 className="text-2xl font-bold">Meet Garage Door King</h2>
          <p className="text-sm text-gray-700">We’re your go-to garage door service across the GTA. Real techs, real service — no middlemen, no delays. We’re fully equipped, fully insured, and fully focused on getting your door working perfectly the first time.</p>
          <a href="#contact" className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded font-bold shadow hover:bg-blue-600">Request Service</a>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 text-center">
          <div className="relative">
            <img src="/video-thumbnail.jpg" alt="Garage Door King Video" className="rounded-xl shadow-lg" />
            <a href="#" className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-3 rounded-full shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-4.586-2.65A1 1 0 009 9.382v5.236a1 1 0 001.166.964l4.586-2.65a1 1 0 000-1.764z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Trust Section (No Reviews) */}
      <section className="bg-gray-50 px-6 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Why GTA Homeowners Trust Garage Door King</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">No middlemen. No surprises. Just fast, honest service — 7 days a week.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "Same-day service across the GTA",
            "Real local technicians — no subcontracted crews",
            "100% transparency: no upsells, no surprise charges",
            "Fully insured (WSIB) and brand-authorized",
            "Garage door expertise you can actually talk to",
            "Direct phone access — call and ask anything"
          ].map((text, idx) => (
            <div key={idx} className="bg-white rounded shadow p-6 text-sm text-gray-800">
              {text}
            </div>
          ))}
        </div>
        <a href="#contact" className="inline-block mt-8 bg-blue-500 text-white px-6 py-3 rounded font-bold shadow hover:bg-blue-600">Request Free Estimate</a>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Professional Garage Door Services We Provide</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Spring Replacement", "Broken or worn-out springs replaced same-day", "/spring.jpg"],
            ["Cable Repair", "Frayed, snapped, or loose cables fixed fast", "/cable.jpg"],
            ["New Door Installation", "Upgrade your home with a fresh new garage door", "/newdoor.jpg"],
            ["Opener Installation", "Smart, quiet, and reliable opener installs", "/opener.jpg"],
            ["General Maintenance", "Preventative tune-ups and inspections", "/maintenance.jpg"],
            ["Emergency Service", "Urgent fixes when your door won’t budge", "/emergency.jpg"]
          ].map(([title, desc, img]) => (
            <div key={title} className="bg-gray-50 rounded shadow p-4 text-center">
              <img src={img} alt={title} className="w-full h-32 object-cover rounded mb-4" />
              <h3 className="text-blue-600 font-bold text-lg mb-1">{title}</h3>
              <p className="text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

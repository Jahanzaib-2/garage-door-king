// React + Tailwind base layout for Garage Door King's high-conversion site
import React from "react";
import '../styles/globals.css';
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans text-[17px] leading-snug">
      {/* Top Bar */}
      <div className="bg-black text-white text-sm py-2 px-4 flex justify-between items-center">
        <span>Open Daily: 9 AM – 9 PM</span>
        <a href="tel:+19052085464" className="text-yellow-400 font-bold hover:underline">Call: 905-208-KING (5464)</a>
      </div>

      {/* Header/Nav */}
      <header className="flex justify-between items-center py-4 px-6 border-b shadow-sm">
        <img src="/logo.png" alt="Garage Door King" className="h-16 w-auto" />
        <nav className="space-x-6 text-sm font-semibold">
          <a href="#services">Services</a>
          <a href="#deals">Deals</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-6 py-8 bg-gray-50">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold leading-tight">Garage Door Repair and Installation Services</h1>
          <p className="text-blue-600 font-semibold">Your Local Garage Door Experts Serving the GTA</p>
          <p className="text-gray-700 text-base">Spring replacements, cable changes, opener installs, new doors – 7 days a week, fully insured, and no middlemen.</p>
          <Link href="/request-service">
            <a className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded font-bold shadow hover:bg-blue-600">Request Service</a>
          </Link>
          <div className="mt-3 text-lg text-yellow-500 font-bold">
            Or directly call us: <a href="tel:+19052085464" className="hover:underline">905-208-KING (5464)</a>
          </div>
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
      <section id="deals" className="px-6 py-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-4 tracking-tight">Special Garage Deals On Sale</h2>
        <p className="text-center text-gray-600 text-base mb-6">We offer the best value for repairs, openers, and new doors installed — done right the first time by real professionals.</p>
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
              <img src={img} alt={title} className="w-full h-40 object-cover rounded mb-3" />
              <h3 className="text-blue-600 font-bold text-lg uppercase mb-1">{title}</h3>
              <p className="text-base text-gray-600 mb-2">{desc}</p>
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
    </main>
  );
}

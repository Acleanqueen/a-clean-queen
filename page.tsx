export default function HomeServiceWebsite() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-800 text-white px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              A+ Clean Queen
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Professional residential and commercial cleaning and interior painting services in Great Falls, Montana.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="tel:4065642974"
                className="bg-white text-slate-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Call Now 4065642974 or 4068701534
              </a>

              <a
                href="#quote"
                className="border border-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-slate-900 transition"
              >
                Free Estimate
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-bold mb-6">Why Choose Us?</h2>

            <div className="space-y-4 text-lg">
              <div>✔ Locally Owned</div>
              <div>✔ Affordable Pricing</div>
              <div>✔ Move-Out Specialists</div>
              <div>✔ Reliable Scheduling</div>
              <div>✔ Free Estimates</div>
              <div>✔ Military & Realtor Friendly</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">House Cleaning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Weekly Cleaning</li>
                <li>• Biweekly Cleaning</li>
                <li>• Deep Cleaning</li>
                <li>• Kitchen & Bathroom Focus</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Move-Out Cleaning</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Rental Turnovers</li>
                <li>• Realtor Cleaning</li>
                <li>• Apartment Cleaning</li>
                <li>• Fast Scheduling</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Interior Painting</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Bedrooms</li>
                <li>• Accent Walls</li>
                <li>• Full Interiors</li>
                <li>• Trim & Baseboards</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Property Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Airbnb Cleaning</li>
                <li>• Realtor Prep</li>
                <li>• Military Move-Outs</li>
                <li>• Landlord Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Local. Reliable. Professional.</h2>

            <p className="text-lg text-gray-700 mb-4">
              We proudly serve homeowners, renters, military families, landlords, and realtors throughout Great Falls and surrounding areas.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              Our goal is simple: deliver high-quality cleaning and painting services with honest pricing and dependable communication.
            </p>

            <p className="text-lg text-gray-700">
              Whether you need a deep clean, rental turnover, or fresh interior paint, we’re ready to help.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-slate-100 rounded-3xl p-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-6">Service Areas</h3>

            <div className="grid grid-cols-2 gap-4 text-lg">
              <div>• Great Falls</div>
              <div>• Black Eagle</div>
              <div>• Malmstrom Area</div>
              <div>• Vaughn</div>
              <div>• Sun Prairie</div>
              <div>• Nearby Communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Customer Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <p className="text-gray-200 mb-6">
                “Super reliable and the house looked amazing after the deep clean. Highly recommend!”
              </p>
              <div className="font-bold">— Sarah M.</div>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <p className="text-gray-200 mb-6">
                “They painted our living room and did an awesome job. Fast and professional.”
              </p>
              <div className="font-bold">— James T.</div>
            </div>

            <div className="bg-white/10 p-8 rounded-3xl border border-white/10">
              <p className="text-gray-200 mb-6">
                “Perfect for move-out cleaning. Realtor approved immediately.”
              </p>
              <div className="font-bold">— Ashley R.</div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE FORM */}
      <section id="quote" className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Request a Free Estimate
          </h2>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg"
            />

            <select className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg">
              <option>Select Service</option>
              <option>House Cleaning</option>
              <option>Move-Out Cleaning</option>
              <option>Interior Painting</option>
              <option>Multiple Services</option>
            </select>

            <textarea
              rows="5"
              placeholder="Tell us about your project"
              className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-2xl text-xl font-bold hover:scale-[1.02] transition"
            >
              Get Free Estimate
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              A+ Clean Queen Cleaning & Painting
            </h3>

            <p className="text-gray-400">
              Professional cleaning and painting services in Great Falls, Montana.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>

            <div className="space-y-2 text-gray-400">
              <div>📞 406-564-2974 or 406-870-1534</div>
              <div>✉ a.clean.queen@gmail.com</div>
              <div>📍 Great Falls, Montana</div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Hours</h4>

            <div className="space-y-2 text-gray-400">
              <div>Monday – Friday: 8am – 9pm</div>
              <div>Saturday: 9am – 5pm</div>
              <div>Sunday: By Appointment</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500">
          © 2026 A+Clean Queen Cleaning & Painting. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

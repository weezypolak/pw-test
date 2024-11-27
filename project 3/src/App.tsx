import React from 'react';
import { ArrowUpRight, Briefcase, Code, Compass, MessageSquare, Rocket, Sparkles } from 'lucide-react';
import NavBar from './components/NavBar';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 z-[-1]" />
        <div className="container mx-auto px-6 z-10">
          <div className="flex flex-col sm:flex-row items-center gap-12">
            <div className="w-full sm:w-1/2 text-center sm:text-left">
              <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Alex Morgan
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                Product Visionary • Innovation Consultant • Digital Transformation Expert
              </p>
              <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 mx-auto sm:mx-0">
                Let's Connect
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
            <div className="w-full sm:w-1/2 flex justify-center sm:justify-end">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-600 rounded-2xl rotate-6 opacity-25"></div>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
                  alt="Alex Morgan"
                  className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center">Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Compass className="w-8 h-8" />,
                title: "Strategy Consulting",
                desc: "Navigate complex digital landscapes with data-driven insights"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Product Leadership",
                desc: "Transform ideas into market-leading products"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Innovation Workshop",
                desc: "Unlock creative potential through structured innovation sessions"
              }
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="mb-4 text-purple-400">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "12+", label: "Years Experience" },
              { number: "50+", label: "Products Launched" },
              { number: "200+", label: "Happy Clients" },
              { number: "15M+", label: "Revenue Generated" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black" id="contact">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let's Create Something Amazing</h2>
              <p className="text-gray-400 mb-8">
                Whether you're looking to transform your product strategy or need guidance on digital innovation, 
                I'm here to help turn your vision into reality.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Briefcase />, text: "Enterprise Consulting" },
                  { icon: <Code />, text: "Digital Transformation" },
                  { icon: <MessageSquare />, text: "Strategic Advisory" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-300">
                    {item.icon}
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
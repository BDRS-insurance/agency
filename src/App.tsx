import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, MessageCircle, ChevronRight, ArrowRight 
} from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [result, setResult] = useState("");

  const products = [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
      shortDesc: 'Protect your family’s future and build lasting peace of mind.',
      longDesc: 'Life insurance is more than just a policy; it is a promise to your loved ones. Our plans cover educational funds, mortgage protection, and estate planning to ensure your family stays financially secure no matter what.',
      benefits: ['Death Benefit Protection', 'Critical Illness Riders', 'Educational Funding', 'Retirement Planning']
    },
    {
      id: 'hmo',
      title: 'HMO / Health Coverage',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />,
      shortDesc: 'Comprehensive medical protection for you and your employees.',
      longDesc: 'Health is your greatest asset. We partner with the Philippines’ top providers to give you access to the best hospitals, doctors, and emergency services without the heavy financial burden.',
      benefits: ['In-patient & Out-patient Care', 'Emergency Services', 'Dental Coverage', 'Annual Physical Exams']
    },
    {
      id: 'non-life',
      title: 'Non-Life Insurance',
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      shortDesc: 'Protect your vehicles, property, and business assets.',
      longDesc: 'Accidents and calamities are unpredictable. Our non-life products provide robust coverage for your cars, homes, and business operations against fire, theft, and natural disasters.',
      benefits: ['Comprehensive Car Insurance', 'Fire & Allied Perils', 'Marine Insurance', 'Surety Bonds']
    }
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending Inquiry...");
    const formData = new FormData(event.target);

    // Enter your Web3Forms Access Key here
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      setResult("Success! We will contact you soon.");
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30">
      
      {/* HEADER */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3">
          <div>
            <div className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              BDRS ASSOCIATES
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">Building Dependable Risks Solutions</p>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-blue-400 transition">
            <Mail className="w-4 h-4" /> bdrsassociates@gmail.com
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-600/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20">
              Trusted Insurance Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Insurance Coverage With <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Guidance You Can Trust.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              We provide expert advice and dependable insurance products to protect what matters most to you—your family, your health, and your assets.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#quote" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 flex items-center gap-2">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* QUOTE FORM */}
          <div id="quote" className="bg-slate-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-2">Request a Quote</h3>
            <p className="text-slate-400 text-sm mb-6">Fill out the form below and we will get back to you within 24 hours.</p>
            
            <form onSubmit={onSubmit} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition" />
              <div className="grid md:grid-cols-2 gap-4">
                <input name="email" type="email" placeholder="Email Address" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition" />
                <input name="phone" type="text" placeholder="Phone Number" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition" />
              </div>
              <select name="service" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition text-slate-400">
                <option>Life Insurance</option>
                <option>HMO / Health Coverage</option>
                <option>Non-Life Insurance</option>
              </select>
              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl transition-all active:scale-95">
                Send Inquiry
              </button>
              {result && <p className="text-center text-sm font-bold text-emerald-400 animate-pulse">{result}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Protection Plans</h2>
          <p className="text-slate-400">Click on a product to learn more about its benefits.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer bg-slate-900/20 border border-white/5 p-10 rounded-[2rem] hover:bg-slate-800/30 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight className="w-6 h-6 text-blue-400" />
              </div>
              <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {product.icon}
              </div>
              <h4 className="text-2xl font-bold mb-3">{product.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{product.shortDesc}</p>
              <span className="text-xs font-bold text-blue-400 group-hover:underline">LEARN MORE</span>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT MODAL (THE POPUP) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-2xl rounded-[2.5rem] overflow-hidden animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="p-8 md:p-12">
              <div className="mb-6">{selectedProduct.icon}</div>
              <h3 className="text-3xl font-bold mb-4">{selectedProduct.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8">{selectedProduct.longDesc}</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {selectedProduct.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => {
                  setSelectedProduct(null);
                  window.location.href = "#quote";
                }}
                className="w-full mt-10 py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition"
              >
                Inquire About This Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/YOUR_PHONE_NUMBER" 
        target="_blank" 
        className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-slate-950 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-transform active:scale-95 group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10">
          Chat with us!
        </span>
      </a>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 text-center">
        <p className="text-slate-500 text-sm">© {new Date().getFullYear()} BDRS Associates Insurance Agency. All rights reserved.</p>
      </footer>
    </div>
  );
}

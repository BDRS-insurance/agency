import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, ChevronRight, ArrowRight, 
  MapPin, Phone, Shield, Send, ExternalLink
} from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activePartner, setActivePartner] = useState(null);

  // Added a scroll-to-top effect on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const partners = [
    { name: "Pacific Cross", img: "Pacific-Cross.png", desc: "Specialist medical and travel protection across Asia." },
    { name: "Paramount", img: "Paramount.png", desc: "Straightforward life and non-life insurance with reliable claims." },
    { name: "PhilBritish", img: "PhilBritish.png", desc: "Strong financial backing for property and marine insurance." },
    { name: "Asia Insurance", img: "asia-insurance.png", desc: "Global standards of risk management for the local market." },
    { name: "Bethel", img: "bethel.png", desc: "Surety bonds and niche non-life products for business growth." },
    { name: "Maagap", img: "maagap.png", desc: "Innovative motor and fire insurance solutions." }
  ];

  const products = [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <ShieldCheck className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors" />,
      shortDesc: 'Protect your family’s future and peace of mind.',
      longDesc: 'Our life insurance plans are designed to provide a financial safety net for your loved ones, covering everything from education funds to estate planning.',
      benefits: ['Death Benefit', 'Critical Illness', 'Education Fund', 'Retirement Planning']
    },
    {
      id: 'hmo',
      title: 'HMO / Health',
      icon: <HeartPulse className="w-12 h-12 text-emerald-400 group-hover:text-emerald-300 transition-colors" />,
      shortDesc: 'Comprehensive medical protection for everyone.',
      longDesc: 'Access world-class healthcare. Our HMO partners ensure you have priority access to top hospitals and specialists nationwide.',
      benefits: ['In-patient & Out-patient', 'Emergency Care', 'Dental Coverage', 'Annual Physical Exams']
    },
    {
      id: 'non-life',
      title: 'Non-Life',
      icon: <Car className="w-12 h-12 text-cyan-400 group-hover:text-cyan-300 transition-colors" />,
      shortDesc: 'Protect your vehicles, property, and assets.',
      longDesc: 'From your daily driver to your business warehouse, our non-life insurance covers assets against fire, theft, and accidents.',
      benefits: ['Comprehensive Auto', 'Fire & Allied Perils', 'Marine Cargo', 'Surety Bonds']
    }
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) setSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* PREMIUM NAVIGATION */}
      <nav className="fixed top-0 w-full z-[100] px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-3xl px-6 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col cursor-pointer hover:opacity-80 transition" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-xl md:text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent uppercase">BDRS</span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-slate-400 font-bold">Associates Insurance</span>
          </div>
          <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#partners" className="hover:text-white transition">Partners</a>
            <a href="#products" className="hover:text-white transition">Protection</a>
            <a href="#contact" className="hover:text-white transition">Location</a>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-blue-600/20 active:scale-95">Inquire</a>
        </div>
      </nav>

      {/* HERO SECTION WITH ANIMATED GRADIENT */}
      <section className="relative pt-44 md:pt-60 pb-32 px-6">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[100px] -z-10" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-xl">
              <Shield className="w-3.5 h-3.5 animate-pulse" /> Licensed Insurance Agency
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] mb-8 tracking-tighter">
              Securing <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">Your Legacy.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-400 mb-12 max-w-2xl leading-relaxed">Building Dependable Risk Solutions through heritage-backed insurance expertise.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#quote" className="px-10 py-5 bg-blue-600 hover:bg-blue-500 rounded-2xl font-extrabold text-sm uppercase tracking-widest transition-all shadow-2xl shadow-blue-600/40 flex items-center justify-center gap-3">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* PREMIUM FORM BOX */}
          <div id="quote" className="w-full lg:w-[480px] bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-white/10 p-10 rounded-[3rem] backdrop-blur-3xl shadow-[0_50px_100px_rgba(0,0,0,0.6)] shrink-0 min-h-[550px] flex flex-col justify-center border-t-white/20">
            {!submitted ? (
              <>
                <h3 className="text-3xl font-black mb-8 text-white tracking-tight">Request Briefing</h3>
                <form onSubmit={onSubmit} className="space-y-5">
                  <input name="name" type="text" placeholder="Full Name" required className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-5 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10 outline-none text-white transition-all placeholder:text-slate-600 font-medium" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input name="email" type="email" placeholder="Email" required className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-5 focus:border-blue-500/50 outline-none text-white transition-all placeholder:text-slate-600 font-medium" />
                    <input name="phone" type="tel" placeholder="Mobile" required className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-5 focus:border-blue-500/50 outline-none text-white transition-all placeholder:text-slate-600 font-medium" />
                  </div>
                  
                  {/* DARK DROPDOWN IMPROVED */}
                  <div className="relative">
                    <select name="service" required className="w-full bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-5 focus:border-blue-500/50 outline-none text-white transition-all cursor-pointer appearance-none font-medium">
                      <option value="" disabled selected className="bg-[#020617] text-slate-500">Service Category</option>
                      <option value="Life" className="bg-[#020617] text-white py-4">Life Insurance</option>
                      <option value="HMO" className="bg-[#020617] text-white py-4">HMO / Health</option>
                      <option value="Non-Life" className="bg-[#020617] text-white py-4">Non-Life / Assets</option>
                    </select>
                    <ChevronRight className="absolute right-6 top-6 w-5 h-5 text-slate-500 rotate-90 pointer-events-none" />
                  </div>
                  
                  <button disabled={loading} type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-black py-5 rounded-2xl transition-all active:scale-[0.98] shadow-xl shadow-emerald-900/20 uppercase tracking-[0.2em] text-xs">
                    {loading ? "Syncing..." : "Transmit Inquiry"}
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-700">
                <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/20">
                  <Send className="text-emerald-400 w-10 h-10" />
                </div>
                <h3 className="text-4xl font-black text-white mb-4 tracking-tight">Confirmed.</h3>
                <p className="text-slate-400 mb-10 leading-relaxed font-medium">Transmission successful. An advisor will contact you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition">New Request</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION - ELEVATED CARDS */}
      <section id="partners" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">Institutional Partners.</h2>
            <p className="text-slate-400 text-lg font-medium leading-relaxed">We curate the most stable insurance providers in the Philippines to guarantee your safety.</p>
          </div>
          <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-slate-500">A-Rated Carriers Only</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {partners.map((p, i) => (
            <div 
              key={i} 
              onClick={() => setActivePartner(activePartner === i ? null : i)} 
              className={`group relative p-10 rounded-[3rem] border transition-all duration-500 cursor-pointer overflow-hidden
                ${activePartner === i ? 'bg-slate-900/80 border-blue-500/40 shadow-2xl scale-[1.02]' : 'border-white/5 bg-white/[0.01] hover:bg-white/[0.04] hover:border-white/10 hover:-translate-y-2'}`}
            >
              <div className="bg-white p-8 rounded-[2rem] h-32 flex items-center justify-center mb-10 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img src={`/agency/${p.img}`} alt={p.name} className="max-h-full object-contain filter brightness-100 contrast-110" />
              </div>
              <h4 className="text-2xl font-black mb-4 flex justify-between items-center text-white tracking-tight">
                {p.name} <ChevronRight className={`w-6 h-6 transition-all duration-500 ${activePartner === i ? 'rotate-90 text-blue-400' : 'text-slate-700'}`} />
              </h4>
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${activePartner === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-400 mt-6 leading-relaxed font-medium border-t border-white/10 pt-6">{p.desc}</p>
              </div>
              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-emerald-500/0 w-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 border-t border-white/5 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-4 mb-10">
             <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">BDRS</div>
             <div className="flex gap-6 text-slate-500 text-sm font-bold uppercase tracking-widest">
                <span>Manila, PH</span>
                <span>•</span>
                <span>Est. 2026</span>
             </div>
          </div>
          <p className="text-[10px] text-slate-600 font-black uppercase tracking-[0.5em]">© BDRS Associates Insurance Agency. Built for Dependability.</p>
        </div>
      </footer>

      {/* PRODUCT MODAL - REDESIGNED */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-slate-900/90 border border-white/20 w-full max-w-xl rounded-[4rem] p-12 shadow-[0_100px_200px_rgba(0,0,0,0.8)] animate-in zoom-in slide-in-from-bottom-10 duration-500">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-10 right-10 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition text-white"><X className="w-6 h-6" /></button>
            <div className="mb-10 p-5 bg-white/5 rounded-[2rem] w-fit shadow-inner">{selectedProduct.icon}</div>
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tighter">{selectedProduct.title}</h3>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed font-medium">{selectedProduct.longDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {selectedProduct.benefits.map((b, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all duration-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 group-hover:text-slate-950" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-white">{b}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { setSelectedProduct(null); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="w-full py-6 bg-blue-600 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 text-white">Initiate Coverage Inquiry</button>
          </div>
        </div>
      )}
    </div>
  );
}

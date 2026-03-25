import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, ChevronRight, ArrowRight, 
  Award, Clock, Zap, MapPin, Phone, Shield
} from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [activePartner, setActivePartner] = useState(null);

  const partners = [
    { name: "Pacific Cross", img: "Pacific-Cross.png", color: "shadow-blue-500/20", desc: "With over 70 years of regional expertise, Pacific Cross Philippines focuses on specialist medical and travel protection across Asia." },
    { name: "Paramount", img: "Paramount.png", color: "shadow-red-500/20", desc: "Founded in 1950, Paramount provides straightforward life and non-life insurance with a focus on quick, reliable claims." },
    { name: "PhilBritish", img: "PhilBritish.png", color: "shadow-orange-500/20", desc: "Over 50 years of legacy in the Philippines, offering strong financial backing for property and marine insurance." },
    { name: "Asia Insurance", img: "asia-insurance.png", color: "shadow-indigo-500/20", desc: "A strategic venture bringing global standards of risk management and reliable coverage to the local market." },
    { name: "Bethel", img: "bethel.png", color: "shadow-yellow-500/20", desc: "Recognized for diverse non-life products and a strong focus on surety bonds for local business growth." },
    { name: "Maagap", img: "maagap.png", color: "shadow-cyan-500/20", desc: "Known for proactive protection and innovation in comprehensive motor and fire insurance solutions." }
  ];

  const products = [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
      shortDesc: 'Protect your family’s future and peace of mind.',
      longDesc: 'Life insurance is a promise. Our plans cover educational funds, estate planning, and long-term family security.',
      benefits: ['Death Benefit', 'Critical Illness', 'Education Fund', 'Retirement']
    },
    {
      id: 'hmo',
      title: 'HMO / Health',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />,
      shortDesc: 'Comprehensive medical protection for everyone.',
      longDesc: 'Access the best hospitals and doctors through our premium healthcare partner network across the Philippines.',
      benefits: ['In-patient Care', 'Emergency', 'Dental', 'Annual Physical Exams']
    },
    {
      id: 'non-life',
      title: 'Non-Life',
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      shortDesc: 'Protect your vehicles, property, and assets.',
      longDesc: 'Robust coverage for your cars, homes, and business operations against unforeseen risks and accidents.',
      benefits: ['Car Insurance', 'Fire Insurance', 'Marine Cargo', 'Surety Bonds']
    }
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    // Add your Web3Forms logic here
    setTimeout(() => setLoading(false), 2000); 
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-lg md:text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">BDRS</span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-slate-400 font-bold">Dependable Risk Solutions</span>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase hover:bg-blue-500 transition active:scale-95">Contact Us</a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 md:pt-48 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
              <Shield className="w-3 h-3" /> Licensed Insurance Agency
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Building <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dependable Risk Solutions.</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-slate-300 mb-10">BDRS Associates Insurance Agency</p>
            <a href="#quote" className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 items-center gap-2">
              Start Your Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div id="quote" className="w-full lg:w-[450px] bg-slate-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl shrink-0">
            <h3 className="text-2xl font-bold mb-6 text-white text-left">Request a Quote</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition" />
              <input name="email" type="email" placeholder="Email Address" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-white transition" />
              <select name="service" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-4 focus:border-blue-500 outline-none text-slate-300 transition appearance-none">
                <option>Life Insurance</option>
                <option>HMO / Health Coverage</option>
                <option>Non-Life Insurance</option>
              </select>
              <button disabled={loading} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl transition-all active:scale-[0.98]">
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION - WITH WHITE LOGO BACKGROUNDS */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Accredited Partners</h2>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 italic">Tap a partner to reveal their expertise and company history</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <div 
              key={i} 
              onClick={() => setActivePartner(activePartner === i ? null : i)} 
              className={`group p-8 rounded-[2.5rem] border transition-all duration-300 cursor-pointer
                ${activePartner === i ? 'bg-slate-900 border-blue-500/50 shadow-2xl shadow-blue-500/10' : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05]'}`}
            >
              {/* THE WHITE LOGO CONTAINER REVISION */}
              <div className="bg-white p-6 rounded-3xl h-28 flex items-center justify-center mb-8 shadow-inner overflow-hidden">
                <img src={`/agency/${p.img}`} alt={p.name} className="max-h-full object-contain group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="text-xl font-bold mb-2 flex justify-between items-center">
                {p.name} <ChevronRight className={`w-5 h-5 transition-transform ${activePartner === i ? 'rotate-90 text-blue-500' : ''}`} />
              </h4>
              <div className={`overflow-hidden transition-all duration-500 ${activePartner === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-sm text-slate-400 mt-4 leading-relaxed border-t border-white/10 pt-4">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <h2 className="text-4xl font-bold text-center mb-16">Our Protection Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} className="bg-slate-900/50 border border-white/5 p-10 rounded-[2.5rem] hover:bg-slate-800 hover:border-blue-500/30 transition-all cursor-pointer group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left">{product.icon}</div>
              <h4 className="text-2xl font-bold mb-4">{product.title}</h4>
              <p className="text-slate-400 mb-8 leading-relaxed">{product.shortDesc}</p>
              <span className="text-blue-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2">View Details <ChevronRight className="w-4 h-4" /></span>
            </div>
          ))}
        </div>
      </section>

      {/* OFFICE & CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20 text-blue-400"><MapPin /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Office</h4>
                  <p className="text-slate-400 leading-relaxed">Unit 123, Financial Center Bldg,<br />Makati City, Metro Manila</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 text-emerald-400"><Phone /></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Contact Details</h4>
                  <p className="text-slate-400 leading-relaxed">bdrsassociates@gmail.com<br />+63 (02) 8XXX-XXXX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-80 bg-slate-800 rounded-[3rem] border border-white/10 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />
             <p className="text-slate-500 italic text-sm">Map View Coming Soon</p>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="max-w-6xl mx-auto px-6 py-20 mb-24">
        <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-[3.5rem] p-12 md:p-20 text-center shadow-2xl shadow-blue-600/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Ready to secure your future?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto relative z-10">Don't leave your protection to chance. Speak with our expert risk advisors today for a free consultation.</p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="relative z-10 px-10 py-5 bg-white text-blue-600 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">Start Your Inquiry</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">© 2026 BDRS Associates Insurance Agency. All Rights Reserved.</p>
      </footer>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-lg rounded-[3rem] p-10 shadow-2xl animate-in zoom-in duration-300">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-8 right-8 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"><X className="w-5 h-5" /></button>
            <div className="mb-6">{selectedProduct.icon}</div>
            <h3 className="text-3xl font-bold mb-4">{selectedProduct.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">{selectedProduct.longDesc}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {selectedProduct.benefits.map((b, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-[10px] font-bold uppercase tracking-wide">{b}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { setSelectedProduct(null); window.location.href="#quote"; }} className="w-full py-4 bg-blue-600 rounded-2xl font-bold hover:bg-blue-500 transition">Inquire Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

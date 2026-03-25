import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, ChevronRight, ArrowRight, 
  Award, Clock, Zap
} from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activePartner, setActivePartner] = useState(null);

  const partners = [
    { 
      name: "Pacific Cross", 
      img: "Pacific-Cross.png", 
      color: "shadow-blue-500/20 border-blue-500/50",
      desc: "With over 70 years of regional expertise, Pacific Cross Philippines began as State Bond & Insurance Co. in 1949, eventually becoming part of a specialist group dedicated to medical and travel protection across Asia." 
    },
    { 
      name: "Paramount", 
      img: "Paramount.png", 
      color: "shadow-red-500/20 border-red-500/50",
      desc: "Founded in 1950, Paramount Life & General Insurance Corporation started as a non-life insurer. It has grown into a top-tier provider by focusing on quick claims and making insurance straightforward for every Filipino." 
    },
    { 
      name: "PhilBritish", 
      img: "PhilBritish.png", 
      color: "shadow-orange-500/20 border-orange-500/50",
      desc: "The Philippine British Assurance Company, Inc. was incorporated in the 1960s. For over 50 years, it has maintained a legacy of strong financial backing and specialized expertise in property and marine insurance." 
    },
    { 
      name: "Asia Insurance", 
      img: "asia-insurance.png", 
      color: "shadow-indigo-500/20 border-indigo-500/50",
      desc: "Asia Insurance (Philippines) Corporation is a strategic joint venture between the Asia Insurance Company of Hong Kong and local partners. It brings a global standard of risk management to the Philippine market." 
    },
    { 
      name: "Bethel", 
      img: "bethel.png", 
      color: "shadow-yellow-500/20 border-yellow-500/50",
      desc: "Bethel General Insurance and Surety Corporation has a long-standing history of providing diverse non-life products. It is particularly recognized for its strong focus on surety bonds and helping local businesses manage risks." 
    },
    { 
      name: "Maagap", 
      img: "maagap.png", 
      color: "shadow-cyan-500/20 border-cyan-500/50",
      desc: "Maagap Insurance, Inc. was established to provide 'proactive' protection. Over the years, it has built a reputation for innovation and reliability, becoming a go-to choice for comprehensive motor and fire insurance." 
    }
  ];

  const reasons = [
    {
      title: "Decades of Expertise",
      desc: "Deep experience in the Philippine insurance landscape.",
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Fast Claims Support",
      desc: "We stand by you during the most critical times.",
      icon: <Clock className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Tailored Solutions",
      desc: "We find the specific plan that fits your budget.",
      icon: <Zap className="w-8 h-8 text-cyan-400" />
    }
  ];

  const products = [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
      shortDesc: 'Protect your family’s future and peace of mind.',
      longDesc: 'Life insurance is a promise to your loved ones. Our plans cover educational funds and estate planning.',
      benefits: ['Death Benefit', 'Critical Illness', 'Education Fund', 'Retirement']
    },
    {
      id: 'hmo',
      title: 'HMO / Health',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />,
      shortDesc: 'Comprehensive medical protection for everyone.',
      longDesc: 'We partner with top providers to give you access to the best hospitals and doctors.',
      benefits: ['In-patient Care', 'Emergency', 'Dental', 'Physical Exams']
    },
    {
      id: 'non-life',
      title: 'Non-Life',
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      shortDesc: 'Protect your vehicles, property, and assets.',
      longDesc: 'Our non-life products provide robust coverage for your cars, homes, and business operations.',
      benefits: ['Car Insurance', 'Fire Insurance', 'Marine Cargo', 'Surety Bonds']
    }
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());
    setLoading(false);
    if (res.success) { setShowSuccess(true); event.target.reset(); }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
          <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className="text-lg md:text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent uppercase">BDRS</span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-widest text-slate-400 font-bold hidden xs:block">Dependable Risk Solutions</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold">
            <a href="#products" className="hover:text-blue-400 transition">Products</a>
            <a href="#quote" className="hover:text-blue-400 transition">Get Quote</a>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase hover:bg-blue-500 transition active:scale-95">
            Contact Us
          </a>
        </div>
      </nav>

      {/* HERO SECTION - UPDATED TEXT */}
      <section className="relative pt-32 md:pt-40 pb-16 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 md:w-[500px] h-64 md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center text-center lg:text-left">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Building <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Dependable Risk Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-slate-300 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              BDRS Associates Insurance Agency
            </p>
            <a href="#quote" className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 items-center gap-2 active:scale-95">
              Start Your Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div id="quote" className="w-full lg:w-[450px] bg-slate-900/40 border border-white/10 p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] backdrop-blur-2xl shadow-2xl shrink-0">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-white text-left">Request a Quote</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 md:py-3.5 text-sm md:text-base focus:border-blue-500 outline-none text-white transition" />
              <input name="email" type="email" placeholder="Email Address" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 md:py-3.5 text-sm md:text-base focus:border-blue-500 outline-none text-white transition" />
              <input name="phone" type="text" placeholder="Phone Number" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 md:py-3.5 text-sm md:text-base focus:border-blue-500 outline-none text-white transition" />
              <select name="service" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3 md:py-3.5 text-sm md:text-base focus:border-blue-500 outline-none text-slate-300 transition appearance-none">
                <option>Life Insurance</option>
                <option>HMO / Health Coverage</option>
                <option>Non-Life Insurance</option>
              </select>
              <button disabled={loading} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl transition-all active:scale-[0.98] mt-2">
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ACCREDITED PARTNERS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-white mb-4">
            Accredited Partners
          </h3>
          <div className="h-1.5 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-sm md:text-base italic">Tap a partner to reveal their expertise and company history</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {partners.map((p, index) => (
            <div 
              key={p.name}
              onClick={() => setActivePartner(activePartner === index ? null : index)}
              className={`group p-8 rounded-[2.5rem] border transition-all duration-300 active:scale-[0.98] cursor-pointer
                ${activePartner === index 
                  ? `${p.color} bg-slate-900 border-blue-500/50 shadow-2xl` 
                  : 'border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20'}`}
            >
              <div className="bg-white p-6 rounded-3xl h-32 flex items-center justify-center mb-8 shadow-inner overflow-hidden">
                <img 
                  src={`./${p.img}`} 
                  alt={p.name} 
                  className={`max-h-full w-auto object-contain transition-transform duration-500 
                    ${activePartner === index ? 'scale-110' : 'group-hover:scale-105'}`}
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/200x100?text=' + p.name }}
                />
              </div>

              <div className="text-left px-2">
                <h4 className="font-bold text-xl md:text-2xl text-slate-100 flex items-center justify-between">
                  {p.name}
                  <ChevronRight className={`w-5 h-5 text-blue-500 transition-transform ${activePartner === index ? 'rotate-90' : ''}`} />
                </h4>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activePartner === index ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed pt-4 border-t border-white/10">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE BDRS */}
      <section className="px-6 py-16 md:py-24 bg-white/[0.01] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {reasons.map((r, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors text-blue-400">
                {r.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{r.title}</h4>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="px-6 py-20 md:py-24 text-center max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 md:mb-16">Our Protection Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} className="bg-slate-900/30 border border-white/5 p-8 md:p-10 rounded-[2rem] text-left transition cursor-pointer hover:bg-slate-800/50 hover:border-blue-500/30 group">
              <div className="mb-6 group-hover:scale-110 transition-transform origin-left">{product.icon}</div>
              <h4 className="text-xl md:text-2xl font-bold mb-3">{product.title}</h4>
              <p className="text-sm text-slate-400 mb-8 leading-relaxed">{product.shortDesc}</p>
              <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                View Details <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold">© {new Date().getFullYear()} BDRS Associates Insurance Agency</p>
      </footer>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-lg rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 md:p-10 animate-in slide-in-from-bottom sm:zoom-in shadow-2xl">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"><X className="w-5 h-5" /></button>
            <div className="mb-6">{selectedProduct.icon}</div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{selectedProduct.title}</h3>
            <p className="text-sm md:text-base text-slate-400 mb-8 leading-relaxed">{selectedProduct.longDesc}</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {selectedProduct.benefits.map((b, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-3 rounded-xl flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">{b}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { setSelectedProduct(null); window.location.href="#quote"; }} className="w-full py-4 bg-blue-600 rounded-xl font-bold active:scale-[0.98] hover:bg-blue-500 transition">Inquire Now</button>
          </div>
        </div>
      )}
    </div>
  );
}

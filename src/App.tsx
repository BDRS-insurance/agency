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
      desc: "Part of a specialist group operating across Asia for over 70 years, Pacific Cross Philippines emerged as a leader in medical and travel insurance, building a legacy on expert regional healthcare knowledge." 
    },
    { 
      name: "Paramount", 
      img: "Paramount.png", 
      color: "shadow-red-500/20 border-red-500/50",
      desc: "Established in 1950, Paramount Life & General Insurance Corporation began as a specialized non-life insurer before evolving into a diversified powerhouse known for making insurance accessible to the Filipino masses." 
    },
    { 
      name: "PhilBritish", 
      img: "PhilBritish.png", 
      color: "shadow-orange-500/20 border-orange-500/50",
      desc: "Incorporated in the 1960s, The Philippine British Assurance Company, Inc. has spent over half a century maintaining a reputation for stability, with strong roots in property and marine protection." 
    },
    { 
      name: "Asia United", 
      img: "asia-insurance.png", // UPDATED: New filename
      color: "shadow-indigo-500/20 border-indigo-500/50",
      desc: "Asia United Insurance, Inc. (AUII) is a 100% Filipino-owned non-life insurance company that earned its license in the mid-2000s, quickly establishing itself through the backing of major local financial institutions." 
    },
    { 
      name: "Bethel", 
      img: "bethel.png", // FIXED: Lowercase to match your GitHub upload
      color: "shadow-yellow-500/20 border-yellow-500/50",
      desc: "Bethel General Insurance and Surety Corporation carries a history of dedicated service, evolving into a comprehensive insurer focused on integrity and providing secure surety bonds for businesses." 
    },
    { 
      name: "Maagap", 
      img: "maagap.png", 
      color: "shadow-cyan-500/20 border-cyan-500/50",
      desc: "Maagap Insurance, Inc. was founded with the vision of being 'proactive'. It has built its history on being one of the first to respond to modern risks with innovative non-life products and professional handling." 
    }
  ];

  const reasons = [
    {
      title: "Decades of Expertise",
      desc: "Deep experience in the Philippine insurance landscape to give you the best advice.",
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Fast Claims Support",
      desc: "We stand by you during the most critical times to ensure smooth claim processing.",
      icon: <Clock className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Tailored Solutions",
      desc: "We compare multiple providers to find the specific plan that fits your budget.",
      icon: <Zap className="w-8 h-8 text-cyan-400" />
    }
  ];

  const products = [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
      shortDesc: 'Protect your family’s future and build lasting peace of mind.',
      longDesc: 'Life insurance is a promise to your loved ones. Our plans cover educational funds, mortgage protection, and estate planning.',
      benefits: ['Death Benefit Protection', 'Critical Illness Riders', 'Educational Funding', 'Retirement Planning']
    },
    {
      id: 'hmo',
      title: 'HMO / Health Coverage',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />,
      shortDesc: 'Comprehensive medical protection for you and your employees.',
      longDesc: 'Health is your greatest asset. We partner with top providers to give you access to the best hospitals and doctors.',
      benefits: ['In-patient & Out-patient Care', 'Emergency Services', 'Dental Coverage', 'Annual Physical Exams']
    },
    {
      id: 'non-life',
      title: 'Non-Life Insurance',
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      shortDesc: 'Protect your vehicles, property, and business assets.',
      longDesc: 'Our non-life products provide robust coverage for your cars, homes, and business operations.',
      benefits: ['Comprehensive Car Insurance', 'Fire & Allied Perils', 'Marine Insurance', 'Surety Bonds']
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
    if (res.success) {
      setShowSuccess(true);
      event.target.reset();
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-blue-500/30">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 shadow-2xl">
          <div>
            <div className="text-xl font-black tracking-tight bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              BDRS ASSOCIATES
            </div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400 font-bold">Building Dependable Risks Solutions</p>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#products" className="hover:text-blue-400 transition">Products</a>
            <a href="#quote" className="hover:text-blue-400 transition">Get Quote</a>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="bg-white text-slate-900 px-5 py-2 rounded-full text-xs font-black uppercase hover:bg-blue-400 transition">
            Contact
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Insurance With <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Guidance You Can Trust.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              Protecting what matters most with expert advice and dependable products tailored for Filipino families and businesses.
            </p>
            <a href="#quote" className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 items-center gap-2">
              Start Your Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div id="quote" className="bg-slate-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white text-left">Request a Quote</h3>
            <form onSubmit={onSubmit} className="space-y-4">
              <input name="name" type="text" placeholder="Full Name" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition text-white" />
              <div className="grid md:grid-cols-2 gap-4">
                <input name="email" type="email" placeholder="Email Address" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition text-white" />
                <input name="phone" type="text" placeholder="Phone Number" required className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition text-white" />
              </div>
              <select name="service" className="w-full bg-slate-800/50 border border-white/5 rounded-xl px-4 py-3.5 focus:border-blue-500 outline-none transition text-slate-400">
                <option>Life Insurance</option>
                <option>HMO / Health Coverage</option>
                <option>Non-Life Insurance</option>
              </select>
              <button disabled={loading} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 text-slate-950 font-black py-4 rounded-xl transition-all">
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* INTERACTIVE PARTNERS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] animate-pulse delay-700" />

        <div className="text-center mb-16">
          <h3 className="text-sm font-black tracking-[0.5em] text-blue-400 uppercase mb-4">Authorized Provider For</h3>
          <p className="text-slate-400 text-xs italic">Click a partner card to see their history and expertise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {partners.map((p, index) => (
            <div 
              key={p.name}
              onClick={() => setActivePartner(activePartner === index ? null : index)}
              className={`group cursor-pointer relative p-8 rounded-[2.5rem] border transition-all duration-500 
                ${activePartner === index 
                  ? `${p.color} bg-slate-900/80 scale-[1.02] shadow-2xl` 
                  : 'border-white/5 bg-white/[0.02] hover:border-white/20'}`}
            >
              <div className="h-16 flex items-center justify-start mb-6">
                <img 
                  src={`./${p.img}`} 
                  alt={p.name} 
                  className={`h-full w-auto object-contain transition-all duration-500 
                    ${activePartner === index ? 'scale-110 brightness-110' : 'brightness-90 group-hover:brightness-110'}`}
                  onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/150?text=' + p.name }}
                />
              </div>

              <div className="space-y-2 text-left">
                <h4 className={`text-xl font-black transition-colors ${activePartner === index ? 'text-white' : 'text-slate-300'}`}>
                  {p.name}
                </h4>
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activePartner === index ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[13px] text-slate-400 leading-relaxed py-2 border-t border-white/10">
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE BDRS */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose BDRS?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">Dependability is at the core of everything we do.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {reasons.map((r, i) => (
            <div key={i} className="group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500 text-blue-400">
                {r.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{r.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold mb-16">Our Protection Plans</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {products.map((product) => (
            <div key={product.id} onClick={() => setSelectedProduct(product)} className="group cursor-pointer bg-slate-900/20 border border-white/5 p-8 rounded-[2rem] hover:bg-slate-800/40 hover:border-blue-500/30 transition-all duration-500">
              <div className="mb-6 group-hover:scale-110 transition-transform">{product.icon}</div>
              <h4 className="text-2xl font-bold mb-3">{product.title}</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">{product.shortDesc}</p>
              <div className="flex items-center gap-2 text-blue-400 text-[10px] font-black uppercase tracking-widest">
                Explore Plan <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 text-center">
        <p className="text-slate-600 text-[10px] font-black tracking-[0.4em] uppercase">
          © {new Date().getFullYear()} BDRS Associates Insurance Agency
        </p>
      </footer>

      {/* MODAL FOR PRODUCTS */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"><X className="w-5 h-5" /></button>
            <div className="mb-6">{selectedProduct.icon}</div>
            <h3 className="text-3xl font-bold mb-4">{selectedProduct.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">{selectedProduct.longDesc}</p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {selectedProduct.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">{b}</span>
                </div>
              ))}
            </div>
            <button onClick={() => { setSelectedProduct(null); window.location.href="#quote"; }} className="w-full py-4 bg-blue-600 rounded-xl font-bold hover:bg-blue-500 transition">Inquire About This Plan</button>
          </div>
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={() => setShowSuccess(false)} />
          <div className="relative bg-slate-900 border border-emerald-500/30 p-10 max-w-md w-full rounded-[2.5rem] text-center shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
            <p className="text-slate-400 mb-8">Expect a message from a BDRS Associate shortly.</p>
            <button onClick={() => setShowSuccess(false)} className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

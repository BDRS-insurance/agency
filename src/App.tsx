import React, { useState } from 'react';
import { 
  ShieldCheck, HeartPulse, Car, Mail, X, 
  CheckCircle2, MessageCircle, ChevronRight, ArrowRight, 
  Building2, Plus, Minus, Target, Users, Award, Clock, Zap
} from 'lucide-react';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const partners = [
    { name: "Maagap", color: "text-blue-500", sub: "Insurance" },
    { name: "Bethel", color: "text-red-500", sub: "Gen. Insurance" },
    { name: "Paramount", color: "text-blue-900", sub: "Life & Gen" },
    { name: "Pacific Cross", color: "text-orange-500", sub: "Health & Travel" },
    { name: "Asia Insurance", color: "text-red-600", sub: "Philippines" },
    { name: "Standard", color: "text-emerald-500", sub: "Insurance" }
  ];

  const reasons = [
    {
      title: "Decades of Expertise",
      desc: "Our consultants have years of deep experience in the Philippine insurance landscape.",
      icon: <Award className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Fast Claims Support",
      desc: "We don't just sell policies; we stand by you when it’s time to file a claim.",
      icon: <Clock className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Tailored Solutions",
      desc: "We compare multiple providers to find the specific plan that fits your budget.",
      icon: <Zap className="w-8 h-8 text-cyan-400" />
    }
  ];

  const faqs = [
    {
      q: "What is the difference between HMO and Life Insurance?",
      a: "HMO focuses on immediate healthcare like check-ups and hospital stays. Life Insurance provides financial security for your family in the event of death or critical illness."
    },
    {
      q: "How long does it take to get a quote?",
      a: "Once you submit your inquiry, a BDRS Associate will reach out within 24 hours."
    },
    {
      q: "Does your Non-Life insurance cover Acts of Nature?",
      a: "Yes, we offer comprehensive coverage that includes protection against typhoons, floods, and earthquakes."
    }
  ];

  const products = [
    {
      id: 'life',
      title: 'Life Insurance',
      icon: <ShieldCheck className="w-10 h-10 text-blue-400" />,
      shortDesc: 'Protect your family’s future and build lasting peace of mind.',
      longDesc: 'Life insurance is a promise to your loved ones. Our plans cover educational funds, mortgage protection, and estate planning to ensure your family stays financially secure.',
      benefits: ['Death Benefit Protection', 'Critical Illness Riders', 'Educational Funding', 'Retirement Planning']
    },
    {
      id: 'hmo',
      title: 'HMO / Health Coverage',
      icon: <HeartPulse className="w-10 h-10 text-emerald-400" />,
      shortDesc: 'Comprehensive medical protection for you and your employees.',
      longDesc: 'Health is your greatest asset. We partner with top providers to give you access to the best hospitals and doctors without the heavy financial burden.',
      benefits: ['In-patient & Out-patient Care', 'Emergency Services', 'Dental Coverage', 'Annual Physical Exams']
    },
    {
      id: 'non-life',
      title: 'Non-Life Insurance',
      icon: <Car className="w-10 h-10 text-cyan-400" />,
      shortDesc: 'Protect your vehicles, property, and business assets.',
      longDesc: 'Our non-life products provide robust coverage for your cars, homes, and business operations against fire, theft, and natural disasters.',
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
      
      {/* HEADER */}
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
            <a href="#faq" className="hover:text-blue-400 transition">FAQ</a>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="bg-white text-slate-900 px-5 py-2 rounded-full text-xs font-black uppercase hover:bg-blue-400 transition">
            Contact Us
          </a>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6">
              Insurance Coverage With <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Guidance You Can Trust.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
              We simplify insurance so you can focus on what matters. Get expert advice and dependable products tailored for your life and business.
            </p>
            <a href="#quote" className="inline-flex px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-bold transition shadow-lg shadow-blue-600/25 items-center gap-2">
              Start Your Quote <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* QUOTE FORM */}
          <div id="quote" className="bg-slate-900/40 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
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
              <button disabled={loading} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 text-slate-950 font-black py-4 rounded-xl transition-all">
                {loading ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE BDRS */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-y border-white/5 bg-white/[0.01]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose BDRS?</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm">We don't just sell insurance; we build long-term relationships through dependability and expert care.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {reasons.map((r, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all duration-500">
                {r.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{r.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="relative bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 overflow-hidden text-center">
          <p className="text-[10px] font-black tracking-[0.4em] text-slate-600 uppercase mb-12">Authorized Provider For</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.map(p => (
              <div key={p.name} className="flex flex-col items-center group cursor-default">
                <span className={`text-lg font-black ${p.color} transition-all group-hover:scale-110`}>{p.name.toUpperCase()}</span>
                <span className="text-[8px] font-bold text-slate-500">{p.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500/5 border border-blue-500/10 p-8 rounded-[2rem] text-center">
              <Target className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Our Mission</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider">Dependable solutions through expert guidance.</p>
            </div>
            <div className="bg-emerald-500/5 border border-emerald-500/10 p-8 rounded-[2rem] mt-8 text-center">
              <Users className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h4 className="font-bold mb-2">Our Clients</h4>
              <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-wider">Serving families and businesses nationwide.</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 italic">Building Dependable Risks Solutions</h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              BDRS Associates bridges the gap between major insurance providers and your specific needs. With years of experience in the Philippine market, we simplify the complex to keep you protected.
            </p>
            <div className="space-y-4">
              {['Claims Assistance', 'Multiple Provider Comparison', 'Professional Consulting'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span className="font-bold text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
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

      {/* FAQ SECTION */}
      <section id="faq" className="max-w-3xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-12 text-center underline decoration-blue-500/20 underline-offset-8">Common Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/5 rounded-2xl bg-white/[0.02] overflow-hidden">
              <button 
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.03] transition"
              >
                <span className="font-bold text-sm md:text-base">{faq.q}</span>
                {activeFaq === index ? <Minus className="w-5 h-5 text-blue-400" /> : <Plus className="w-5 h-5 text-slate-500" />}
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL BOTTOM CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-[3rem] p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-full bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to secure your future?</h2>
            <p className="text-white/80 mb-10 max-w-xl mx-auto">Don’t wait for the unexpected. Get a personalized quote today and experience guidance you can trust.</p>
            <a href="#quote" className="inline-block bg-white text-slate-900 px-10 py-5 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
              Get Your Quote Now
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-12 px-6 text-center">
        <div className="flex justify-center gap-8 mb-8 text-slate-500">
           <a href="mailto:bdrsassociates@gmail.com" className="hover:text-white transition">Email</a>
           <a href="#" className="hover:text-white transition">WhatsApp</a>
           <a href="#" className="hover:text-white transition">Facebook</a>
        </div>
        <p className="text-slate-600 text-[10px] font-black tracking-[0.4em] uppercase">
          © {new Date().getFullYear()} BDRS Associates Insurance Agency
        </p>
      </footer>

      {/* MODALS */}
      {showSuccess && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" onClick={() => setShowSuccess(false)} />
          <div className="relative bg-slate-900 border border-emerald-500/30 p-10 max-w-md w-full rounded-[2.5rem] text-center shadow-2xl animate-in zoom-in">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
            <p className="text-slate-400 mb-8">We have received your inquiry. Expect a message from us shortly.</p>
            <button onClick={() => setShowSuccess(false)} className="w-full py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-slate-100 transition">Close</button>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10">
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedProduct(null)} />
          <div className="relative bg-slate-900 border border-white/10 w-full max-w-2xl rounded-[2.5rem] p-8 md:p-12 animate-in zoom-in duration-300">
            <button onClick={() => setSelectedProduct(null)} className="absolute top-6 right-6 p-2 bg-slate-800 rounded-full hover:bg-slate-700 transition"><X className="w-5 h-5" /></button>
            <div className="mb-6">{selectedProduct.icon}</div>
            <h3 className="text-3xl font-bold mb-4">{selectedProduct.title}</h3>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">{selectedProduct.longDesc}</p>
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

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-slate-950 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95">
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}

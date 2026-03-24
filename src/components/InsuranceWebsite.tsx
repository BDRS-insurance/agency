import React from 'react';
import { ShieldCheck, HeartPulse, Car, Mail, CheckCircle2 } from 'lucide-react';

export default function InsuranceWebsite() {
  const providers = ['Maagap', 'Bethel', 'Paramount', 'Pacific Cross', 'Asia Insurance'];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      <div className="relative mx-auto max-w-7xl px-6 py-8">
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-md">
          <div>
            <div className="text-lg font-bold">BDRS Associates Insurance Agency</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest">Building Dependable Risks Solutions</div>
          </div>
          <a href="mailto:bdrsassociates@gmail.com" className="flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
            <Mail className="w-4 h-4" /> Email Us
          </a>
        </header>

        <section className="grid gap-12 pt-20 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
              Insurance coverage with <span className="text-blue-400">guidance you can trust.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400">Helping families and businesses find dependable life, HMO, and non-life products.</p>
            <div className="mt-8 flex gap-4">
              <a href="#quote" className="rounded-2xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-500">Get a Free Quote</a>
            </div>
          </div>

          <div id="quote" className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Full Name" className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 outline-none focus:border-blue-500" />
              <input type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 outline-none focus:border-blue-500" />
              <select className="w-full rounded-xl border border-white/10 bg-slate-800/50 px-4 py-3 outline-none">
                <option>Life Insurance</option>
                <option>HMO / Health Coverage</option>
                <option>Non-Life Insurance</option>
              </select>
              <button className="w-full rounded-xl bg-emerald-500 py-4 font-bold text-slate-950 hover:bg-emerald-400 transition">Submit Inquiry</button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

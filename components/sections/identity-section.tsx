export function IdentitySection(){
 return <section id="identity" className="border-y border-white/[0.06] py-28">
  <div className="mx-auto max-w-6xl px-6"><div className="max-w-3xl"><p className="font-mono text-[11px] uppercase tracking-[.22em] text-[#69afff]">03 / Identity</p><h2 className="mt-5 text-4xl font-semibold tracking-[-.035em]">Pleasure. Freedom.<br/>A brighter feeling.</h2><p className="mt-7 text-lg leading-8 text-slate-400">The LEXO identity should feel like a clean opening rather than a warning, a promise or a prediction. Quiet confidence, forward motion and a little light in the eyes.</p></div>
   <div className="mt-16 h-px bg-gradient-to-r from-[#69afff]/50 via-white/10 to-transparent"/><div className="mt-7 flex flex-wrap gap-3">{["UTILITY","FREEDOM","PLEASURE","MOVEMENT","CLARITY"].map(x=><span key={x} className="rounded-full border border-white/10 px-4 py-2 font-mono text-[10px] tracking-[.18em] text-slate-400">{x}</span>)}</div>
  </div>
 </section>
}

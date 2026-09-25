import { LexoMark } from "../brand/lexo-mark";

export function HeroSection(){
  return <section className="relative overflow-hidden pt-36 pb-28">
    <div className="pointer-events-none absolute left-1/2 top-0 h-[620px] w-[900px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(65,137,220,.13),transparent_64%)]"/>
    <div className="relative mx-auto max-w-6xl px-6">
      <div className="max-w-4xl">
        <div className="mb-7 flex items-center gap-3 text-xs font-medium uppercase tracking-[.24em] text-[#73b5ff]"><LexoMark size={30}/> L for Lexora</div>
        <h1 className="max-w-4xl text-5xl font-semibold tracking-[-.045em] sm:text-7xl">An asset for the<br/><span className="text-slate-400">Lexora ecosystem.</span></h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">LEXO is built around utility, participation and the feeling that comes with having more room to move.</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href="#utility" className="rounded-xl bg-[#5fa8ff] px-5 py-3 text-sm font-semibold text-[#06101c] hover:bg-[#8bc2ff]">Discover utility</a>
          <a href="#supply" className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-200 hover:bg-white/[0.07]">View supply</a>
        </div>
      </div>
      <div className="mt-24 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] sm:grid-cols-4">
        {[["01","UTILITY","Built for the ecosystem"],["02","FREEDOM","Room to participate"],["03","PLEASURE","A brighter interaction"],["04","LEXORA","One ecosystem"]].map(([n,t,d])=><div key={n} className="bg-[#0b1019] p-5"><div className="font-mono text-[10px] text-slate-600">{n}</div><div className="mt-7 text-xs font-semibold tracking-wider">{t}</div><div className="mt-2 text-xs leading-5 text-slate-500">{d}</div></div>)}
      </div>
    </div>
  </section>
}

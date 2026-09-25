import { site } from "../../config/site";

export function SupplySection(){
 return <section id="supply" className="py-28">
  <div className="mx-auto max-w-6xl px-6"><p className="font-mono text-[11px] uppercase tracking-[.22em] text-[#69afff]">04 / Asset</p><div className="mt-6 grid gap-4 md:grid-cols-[1.4fr_.6fr]"><div className="rounded-2xl border border-white/[0.08] bg-[#0b1019] p-8"><p className="text-sm text-slate-500">Total supply</p><p className="mt-4 text-5xl font-semibold tracking-[-.04em]">{site.supply}</p><p className="mt-4 font-mono text-xs text-slate-600">LEXO</p></div><div className="rounded-2xl border border-white/[0.08] bg-[#0b1019] p-8"><p className="text-sm text-slate-500">Network</p><p className="mt-4 text-2xl font-semibold">Stellar</p><p className="mt-2 text-sm text-slate-600">LEXORA ecosystem</p></div></div></div>
 </section>
}

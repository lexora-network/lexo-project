export function UtilitySection(){
 const items=[["Participation","A native identity for activity across the Lexora ecosystem."],["Access","Designed to become useful wherever the ecosystem gives LEXO a role."],["Movement","A simple asset language for products, experiences and future utilities."]];
 return <section id="utility" className="py-28">
  <div className="mx-auto max-w-6xl px-6"><p className="font-mono text-[11px] uppercase tracking-[.22em] text-[#69afff]">02 / Utility</p><div className="mt-5 flex flex-col justify-between gap-8 md:flex-row"><h2 className="max-w-xl text-4xl font-semibold tracking-[-.035em]">Utility first.<br/>Emotion without noise.</h2><p className="max-w-md text-slate-400 leading-7">LEXO does not need to look like a casino, a meme or a generic Web3 token. Its identity comes from what it enables.</p></div>
   <div className="mt-14 grid gap-3 md:grid-cols-3">{items.map(([title,body],i)=><article key={title} className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-7"><div className="font-mono text-xs text-slate-600">0{i+1}</div><h3 className="mt-16 text-lg font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-500">{body}</p></article>)}</div>
  </div>
 </section>
}

import { LexoMark } from "../brand/lexo-mark";

export function Header(){
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-[#07090e]/80 backdrop-blur-xl">
    <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
      <a href="#" className="flex items-center gap-3"><LexoMark size={34}/><span className="text-sm font-semibold tracking-tight">LEXO</span></a>
      <nav className="hidden items-center gap-7 text-xs text-slate-400 sm:flex">
        <a href="#ecosystem" className="hover:text-white">Ecosystem</a>
        <a href="#utility" className="hover:text-white">Utility</a>
        <a href="#identity" className="hover:text-white">Identity</a>
        <a href="#supply" className="hover:text-white">Supply</a>
      </nav>
      <a href="#ecosystem" className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium hover:bg-white/[0.08]">Explore LEXO</a>
    </div>
  </header>
}

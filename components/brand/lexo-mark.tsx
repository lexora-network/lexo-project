export function LexoMark({ size=44 }: { size?: number }) {
  return (
    <div aria-label="LEXO mark" className="relative grid place-items-center rounded-xl border border-white/10 bg-white/[0.035]" style={{width:size,height:size}}>
      <div className="relative h-[54%] w-[54%] rotate-45 border border-[#78b8ff]">
        <div className="absolute inset-[25%] bg-[#78b8ff]/80" />
      </div>
    </div>
  );
}

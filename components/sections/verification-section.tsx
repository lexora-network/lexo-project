import { stellar } from "../../config/stellar";

const rows = [
  ["Asset", stellar.assetId],
  ["Issuer", stellar.issuer],
  ["Decimals", String(stellar.decimals)],
  ["Supply", stellar.supply],
  ["Network", "Stellar Public Network"],
];

export function VerificationSection() {
  return (
    <section id="verification" className="border-t border-white/[0.06] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-[11px] uppercase tracking-[.22em] text-[#69afff]">
          05 / Verification
        </p>

        <div className="mt-5 grid gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-.035em]">
              One identity.
              <br />
              Publicly checkable.
            </h2>
            <p className="mt-6 max-w-md leading-7 text-slate-400">
              LEXO is identified on Stellar by its asset code and issuer. The
              same identity is used by the website, the Stellar asset layer and
              the optional Stellar Asset Contract interface.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={stellar.stellarExpertUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-medium hover:bg-white/[0.07]"
              >
                Open StellarExpert
              </a>
              <a
                href="https://lab.stellar.org/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-medium hover:bg-white/[0.07]"
              >
                Open Stellar Lab
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0b1019]">
            {rows.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-white/[0.06] px-6 py-5 last:border-b-0 sm:grid-cols-[120px_1fr]"
              >
                <span className="font-mono text-[10px] uppercase tracking-[.16em] text-slate-600">
                  {label}
                </span>
                <span className="break-all text-sm text-slate-300">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-[#69afff]/15 bg-[#69afff]/[0.035] p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[#69afff]">
                Soroban path
              </p>
              <p className="mt-2 text-sm text-slate-300">
                LEXO can be exposed to Soroban through its deterministic Stellar
                Asset Contract (SAC).
              </p>
            </div>
            <span className="shrink-0 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[.14em] text-slate-500">
              SAC-ready
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

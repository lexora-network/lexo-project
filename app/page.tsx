import { Header } from "../components/layout/header";
import { HeroSection } from "../components/sections/hero-section";
import { EcosystemSection } from "../components/sections/ecosystem-section";
import { UtilitySection } from "../components/sections/utility-section";
import { IdentitySection } from "../components/sections/identity-section";
import { VerificationSection } from "../components/sections/verification-section";
import { SupplySection } from "../components/sections/supply-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EcosystemSection />
        <UtilitySection />
        <IdentitySection />
        <VerificationSection />
        <SupplySection />
      </main>

      <footer className="border-t border-white/[0.06] py-10">
        <div className="mx-auto flex max-w-6xl justify-between px-6 text-xs text-slate-600">
          <span>L for Lexora</span>
          <span>LEXO · Stellar</span>
        </div>
      </footer>
    </>
  );
}

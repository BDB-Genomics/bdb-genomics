import React from "react";

export default function BDBWebsite() {
  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-cyan-500/20 selection:text-white">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(34,211,238,0.12),transparent_60%),radial-gradient(40%_30%_at_80%_20%,rgba(59,130,246,0.10),transparent_60%)]" />

      {/* Navbar */}
      <header className="sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="public/logo_org.png" alt="BDB Logo" className="h-8 w-8 object-contain" />
            <h1 className="text-sm md:text-base font-medium tracking-[0.18em] uppercase text-white/90">
              BDB Genomics
            </h1>
          </div>

          <nav className="flex items-center gap-6 text-sm text-white/60">
            {[
              { href: "#focus", label: "Research" },
              { href: "#packages", label: "R Packages" },
              { href: "#contact", label: "Contact" },
            ].map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero with Banner */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <div className="text-xs tracking-[0.22em] uppercase text-white/50">
            Computational Epigenomics
          </div>

          <h2 className="mt-6 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              BDB Genomics
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-white/60 leading-relaxed">
            Decoding epigenomic mechanisms in Type 2 Diabetes through computational systems.
          </p>
        </div>

        {/* Right Banner Image */}
        <div className="flex justify-center">
          <img
            src="public/banner.png"
            alt="BDB Banner"
            className="w-full max-w-md opacity-90"
          />
        </div>
      </section>

      {/* Research Focus */}
      <section id="focus" className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white/90">
            Research Focus
          </h3>
          <p className="mt-4 text-white/60 max-w-3xl leading-relaxed">
            Type 2 Diabetes epigenomics. Focused on understanding chromatin
            accessibility and regulatory dynamics through computational analysis
            across datasets.
          </p>
        </div>
      </section>

      {/* R Packages */}
      <section id="packages" className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white/90">
            R Packages
          </h3>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {[
              { name: "AlphaGenomeR", desc: "Tools for genome-scale epigenomic analysis." },
              { name: "Evo2R", desc: "Evolutionary genomics interface for epigenomic workflows." },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className="group relative rounded-2xl p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition"
              >
                <div className="relative">
                  <h4 className="text-lg font-medium text-white/90">
                    {pkg.name}
                  </h4>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white/90">
            Contact
          </h3>
          <p className="mt-4 text-white/60">2032ushimanshu@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-xs tracking-wide text-white/40">
          Built and maintained by Himanshu Bhandary, BDB Genomics.
        </div>
      </footer>
    </div>
  );
}


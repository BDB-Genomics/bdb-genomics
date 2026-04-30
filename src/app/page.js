import Image from "next/image";
import bannerImage from "../../public/banner.png";
import logoImage from "../../public/logo_org.png";

export default function BDBWebsite() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020611] text-white selection:bg-cyan-500/20 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(52%_38%_at_18%_10%,rgba(28,215,228,0.17),transparent_70%),radial-gradient(34%_24%_at_82%_18%,rgba(39,104,248,0.14),transparent_70%),linear-gradient(180deg,#07101f_0%,#020611_38%,#020611_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:84px_84px]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-[#020611]/72 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-cyan-400/20 bg-white/[0.03] p-2 shadow-[0_0_35px_rgba(24,209,222,0.18)]">
              <Image
                src={logoImage}
                alt="BDB Genomics logo"
                fill
                className="object-contain"
                sizes="44px"
                priority
              />
            </div>
            <h1 className="text-sm md:text-base font-medium tracking-[0.24em] uppercase text-white/90">
              BDB Genomics
            </h1>
          </div>

          <nav className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-white/60">
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

      <section className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-18 md:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] md:items-center md:gap-16 md:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/8 px-4 py-2 text-[11px] tracking-[0.26em] uppercase text-cyan-100/70">
            <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.9)]" />
            Computational Epigenomics
          </div>

          <h2 className="mt-7 max-w-2xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl">
            Mapping the regulatory logic behind
            <span className="block bg-gradient-to-r from-cyan-200 via-white to-cyan-300 bg-clip-text text-transparent">
              diabetes genomics.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/68 md:text-lg">
            BDB Genomics studies type 2 diabetes through computational epigenomics,
            chromatin accessibility, and regulatory modeling built for translational datasets.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#focus"
              className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-200"
            >
              Explore Research
            </a>
            <a
              href="#packages"
              className="rounded-full border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white/88 transition hover:bg-white/[0.06]"
            >
              View Packages
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { value: "ATAC-seq", label: "Chromatin accessibility workflows" },
              { value: "RNA-seq", label: "Regulatory signal integration" },
              { value: "T2D", label: "Diabetes-focused systems analysis" },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur-sm"
              >
                <div className="text-lg font-medium text-white">{item.value}</div>
                <p className="mt-1 text-sm leading-relaxed text-white/55">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-full bg-cyan-300/14 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-[0_24px_100px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[1/1] overflow-hidden rounded-[1.5rem] border border-white/8 bg-[#020611]">
              <Image
                src={bannerImage}
                alt="BDB Genomics banner"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 46vw"
                className="object-contain p-6 md:p-8"
              />
            </div>

            <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/8 bg-black/25 px-4 py-3 text-sm text-white/60">
              <span>Systems biology for metabolic disease</span>
              <span className="text-cyan-200">BDB</span>
            </div>
          </div>
        </div>
      </section>

      <section id="focus" className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white/90">
            Research Focus
          </h3>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/60">
            The group focuses on regulatory mechanisms in type 2 diabetes, with
            emphasis on chromatin accessibility, integrative functional genomics,
            and interpretable computational pipelines across public and in-house datasets.
          </p>
        </div>
      </section>

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
                className="group relative rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-cyan-300/30 hover:bg-white/[0.05]"
              >
                <div className="mb-5 h-px w-16 bg-gradient-to-r from-cyan-300/90 to-transparent" />
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

      <section id="contact" className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white/90">
            Contact
          </h3>
          <p className="mt-4 text-white/60">2032ushimanshu@gmail.com</p>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-xs tracking-wide text-white/40">
          Built and maintained by Himanshu Bhandary, BDB Genomics.
        </div>
      </footer>
    </div>
  );
}

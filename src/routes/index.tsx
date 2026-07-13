import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone, MapPin, Facebook, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/igenergy-logo.png.asset.json";
import hero from "@/assets/hero-energy.jpg";
import imgSolar from "@/assets/sol-solar.jpg";
import imgBess from "@/assets/sol-bess.jpg";
import imgEv from "@/assets/sol-ev.jpg";
import imgH2 from "@/assets/sol-hydrogen.jpg";
import imgPpa from "@/assets/sol-ppa.jpg";
import imgPlatform from "@/assets/sol-platform.jpg";
import indGcc from "@/assets/ind-gcc.jpg";
import indRail from "@/assets/ind-railways.jpg";
import indTelecom from "@/assets/ind-telecom.jpg";
import indHealth from "@/assets/ind-healthcare.jpg";
import indEdu from "@/assets/ind-education.jpg";
import indLog from "@/assets/ind-logistics.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IGENERGY — Powering a Better Tomorrow" },
      { name: "description", content: "IGENERGY delivers end-to-end New Energy Solutions: solar, wind, storage, EV infrastructure, green hydrogen and innovative PPAs — from concept to commissioning." },
      { property: "og:title", content: "IGENERGY — Powering a Better Tomorrow" },
      { property: "og:description", content: "End-to-end New Energy Solutions: solar, wind, storage, EV, green hydrogen and PPAs." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const services = [
  { img: imgSolar, title: "Wind and Solar Energy", desc: "Utility-scale wind and solar plants — from resource assessment and turbine/module selection to hybrid plant design — engineered for maximum yield and lifecycle value." },
  { img: imgEv, title: "EV Charging Infrastructure", desc: "Fast, ultra-fast and depot charging networks for fleets, highways and cities — deployed, operated and monetised end-to-end." },
  { img: imgBess, title: "Energy Storage (BESS)", desc: "Battery energy storage systems that firm renewables, stabilise the grid and unlock time-shifted, dispatchable clean power." },
  { img: imgH2, title: "Green Hydrogen", desc: "Electrolyser-based hydrogen production integrated with renewables — for mobility, industrial decarbonisation and export-grade green fuels." },
  { img: imgPpa, title: "Innovative PPAs", desc: "Bankable, flexible Power Purchase Agreements structured to align risk, tenor and price with offtaker and financier goals." },
  { img: imgPlatform, title: "Smart Energy Platform", desc: "Digital energy management platform unifying generation, storage and load data with real-time analytics, forecasting and remote O&M." },
];

const stages = [
  "Concept & Feasibility",
  "Engineering & Design",
  "Financing & PPAs",
  "EPC & Deployment",
  "Commissioning",
  "O&M and Analytics",
];

const industries = [
  {
    img: indGcc,
    title: "Global AI and Capability Centre (GCC)",
    desc: "India's GCCs and AI data centres are among the fastest-growing electricity consumers in the country. IGENERGY delivers 24×7 carbon-free power through solar–wind hybrids, BESS and green PPAs — meeting global net-zero mandates while keeping PUE and tariff economics in check.",
  },
  {
    img: indRail,
    title: "Railways",
    desc: "Indian Railways is targeting net-zero operations with over 30 GW of renewables in its pipeline. We deliver traction-grade solar, track-side storage and green traction PPAs that decarbonise freight and passenger corridors at scale.",
  },
  {
    img: indTelecom,
    title: "Telecom",
    desc: "With 800,000+ telecom towers across India, diesel dependency remains a major cost and emissions burden. IGENERGY deploys solar-plus-storage hybrids and remote-monitored energy systems that cut OPEX and eliminate diesel at cell sites.",
  },
  {
    img: indHealth,
    title: "Healthcare",
    desc: "Hospitals and diagnostic chains need uninterrupted, high-quality power. Our rooftop solar, BESS and hybrid systems deliver resilient, low-carbon energy that safeguards critical loads and reduces lifecycle energy costs.",
  },
  {
    img: indEdu,
    title: "Education",
    desc: "Universities, IITs and school networks across India are moving to green campuses. We deliver end-to-end campus solarisation, EV charging and smart energy platforms — creating living laboratories for sustainability.",
  },
  {
    img: indLog,
    title: "Logistics and Mobility",
    desc: "India's freight and last-mile fleets are electrifying rapidly under FAME and state EV policies. IGENERGY builds depot charging, highway fast-charging corridors and green hydrogen refuelling backed by captive renewables.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2">
            <img src={logo.url} alt="IGENERGY" className="h-9 w-auto" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {["About", "Solutions", "Industries", "Approach", "Contact"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
                {l}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden rounded-full gradient-brand px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow md:inline-flex">
            Talk to us
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/85 to-background/40" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.2fr_1fr] lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green" /> New Energy Hub
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              Powering a <span className="text-gradient">better tomorrow</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
              IGENERGY is a full-stack provider of New Energy Solutions — solar, wind, storage,
              EV infrastructure, green hydrogen and innovative PPAs — delivered from the initial
              concept to the final commissioning.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#solutions" className="inline-flex items-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow">
                Explore solutions <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-6 py-3 text-sm font-semibold backdrop-blur transition hover:bg-background">
                About us
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 self-end">
            {[
              { k: "01", v: "Global Technology Partnership" },
              { k: "02", v: "Local Capability, Global Excellence" },
              { k: "03", v: "Concept to Commission" },
              { k: "04", v: "Sustainable and Future Ready" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur">
                <div className="text-3xl font-bold text-gradient">{s.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">About us</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              A technology-driven Company for the <span className="text-gradient">energy transitions</span>.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="font-semibold text-foreground">IGENERGY</span> is a technology-driven
              company delivering integrated renewable energy infrastructure solutions. Our expertise
              includes solar energy, battery energy storage systems (BESS), green hydrogen, hybrid
              energy systems, distributed energy storage, as well as modernisation of energy systems
              in telecommunications and railways.
            </p>
            <p>
              We partner with governments and institutions to modernise energy infrastructure
              through innovative technologies, intelligent energy systems and scalable solutions —
              by leveraging global partnerships, financing and local capabilities.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {["EPC", "Solar", "BESS", "Green H₂", "Grid Infra", "O&M"].map((t) => (
                <span key={t} className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Strategic Technology Partnerships */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">Strategic Technology Partnerships</p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
              Global partners powering our delivery.
            </h3>
            <p className="mt-3 text-muted-foreground">
              We combine world-class engineering, technology and renewable energy expertise through
              long-term partnerships with global leaders.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <a
              href="https://www.exeo.co.jp/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl gradient-brand text-lg font-bold text-white shadow-soft">
                EXEO
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-green">Engineering Partner</div>
                <h4 className="mt-1 text-lg font-semibold group-hover:text-gradient">EXEO Group, Inc.</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Connecting Engineering Company — a leading Japanese engineering group delivering
                  telecom, energy and urban infrastructure worldwide.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-green">
                  Visit exeo.co.jp <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </a>

            <a
              href="https://i-generation.com.hk/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl gradient-brand text-lg font-bold text-white shadow-soft">
                i-Gen
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-brand-green">Renewables Partner</div>
                <h4 className="mt-1 text-lg font-semibold group-hover:text-gradient">i-Generation Company Limited</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Renewable Energy for Asia — a Hong Kong-based clean-energy platform investing in
                  and developing solar, storage and green infrastructure across the region.
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-green">
                  Visit i-generation.com.hk <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>


      {/* SOLUTIONS */}
      <section id="solutions" className="border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">Solutions</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Integrated Solutions Across the <span className="text-gradient">Energy Value Chain</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              IGENERGY combines strategic advisory, engineering excellence, financing, project
              execution and operational support to deliver renewable energy and infrastructure
              solutions through a single, accountable partner.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ img, title, desc }) => (
              <article key={title} className="group flex gap-4 rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={img}
                    alt={title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold leading-snug">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">Industries · India Focus</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Sector-focused clean energy for <span className="text-gradient">India's core industries</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Deep domain expertise across the sectors driving India's growth — with delivery models tuned
            to each industry's load profile, tariff structure and reliability requirements. From GCCs and
            railways to telecom and mobility, IGENERGY brings integrated solar, storage, EV and green
            hydrogen solutions aligned with India's 500 GW non-fossil target by 2030.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ img, title, desc }) => (
            <article key={title} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-base font-semibold leading-snug">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.75 0.19 145 / 0.35), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.5 0.19 255 / 0.35), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-lime">Approach</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">From the first concept to the final commissioning.</h2>
            <p className="mt-4 text-primary-foreground/70">
              A single, integrated delivery model that removes hand-offs, compresses timelines and
              keeps accountability where it belongs — with us.
            </p>
          </div>
          <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stages.map((s, i) => (
              <li key={s} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <span className="font-display text-2xl font-bold text-brand-lime">0{i + 1}</span>
                <div>
                  <div className="font-semibold">{s}</div>
                  <div className="mt-1 text-sm text-primary-foreground/60">Delivered by a dedicated in-house team.</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">Impact</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Clean energy that pencils out.</h2>
            <p className="mt-4 text-muted-foreground">
              Every project we deliver is engineered around three non-negotiables: bankable
              economics, measurable decarbonisation, and long-term asset performance.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Bankable, third-party-verified project structures",
                "Tariff and PPA design tailored to offtaker needs",
                "Digital O&M with predictive analytics baked in",
                "Local content and skilling built into every build",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl gradient-brand blur-3xl opacity-20" />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "GW-scale", v: "Pipeline under development" },
                { k: "Concept→COD", v: "Single-team delivery" },
                { k: "24×7", v: "Remote operations centre" },
                { k: "Net-zero", v: "Aligned project design" },
              ].map((c) => (
                <div key={c.v} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="text-2xl font-bold text-gradient">{c.k}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{c.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border bg-secondary/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-green">Contact</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">Let's build your next project.</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Whether you're evaluating a rooftop retrofit or a gigawatt-scale hybrid — talk to
              our team about how IGENERGY can deliver it end-to-end.
            </p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-brand-green" /> hello@igenergy.com</div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-brand-green" /> +91 00000 00000</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-brand-green" /> New Delhi · Bengaluru · Global</div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">Full name</span>
                <input className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Your name" />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Organisation</span>
                <input className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Company" />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-medium">Email</span>
              <input type="email" className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="you@company.com" />
            </label>
            <label className="mt-4 block">
              <span className="text-sm font-medium">Project brief</span>
              <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Tell us about your project, timeline and offtake needs…" />
            </label>
            <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:shadow-glow">
              Send enquiry <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="IGENERGY" className="h-8 w-auto" />
            <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} IGENERGY. Powering a better tomorrow.</span>
          </div>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

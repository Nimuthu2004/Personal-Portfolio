import { createFileRoute } from "@tanstack/react-router";
import {
  Home,
  FolderKanban,
  Wrench,
  GraduationCap,
  Mail,
  Github,
  Linkedin,
  Phone,
  MapPin,
  ArrowUpRight,
  Download,
  Trophy,
  Sparkles,
  Layers,
  Code2,
  Smartphone,
  Database,
  Cloud,
  Hammer,
} from "lucide-react";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nimuthu Lakdina Fernando — Software Engineer" },
      {
        name: "description",
        content:
          "Software Engineering undergraduate building full-stack web, mobile, and cloud applications. Portfolio of Nimuthu Lakdina Fernando.",
      },
      { property: "og:title", content: "Nimuthu Lakdina Fernando — Software Engineer" },
      {
        property: "og:description",
        content:
          "Full-stack & mobile developer. React, Node.js, Flutter, MongoDB, Firebase, PostgreSQL.",
      },
    ],
  }),
  component: Portfolio,
});

/* ---------- Data ---------- */

const STATS = [
  { value: "+05", label: "Featured\nProjects" },
  { value: "+10", label: "Technologies\nMastered" },
  { value: "+02", label: "Years\nBuilding" },
];

const SKILLS = [
  { icon: Code2, title: "Languages", items: ["Java", "JavaScript", "Python", "PHP", "Dart"] },
  { icon: Layers, title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Bootstrap"] },
  { icon: Wrench, title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "JWT"] },
  { icon: Smartphone, title: "Mobile", items: ["Flutter", "Android (Kotlin)"] },
  { icon: Database, title: "Databases", items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "SQL"] },
  { icon: Cloud, title: "Cloud & Deploy", items: ["Render", "vercel", "Firebase Hosting"] },
  { icon: Hammer, title: "Tools", items: ["Git", "GitHub", "Postman", "Figma", "ClickUp"] },
  { icon: Sparkles, title: "Practices", items: ["OOP", "Agile", "API Design", "UI/UX"] },
];

const PROJECTS = [
  {
    n: "01",
    title: "Lanka Bus",
    tag: "Full-Stack · Mobile",
    desc: "Smart bus ticketing ecosystem digitising Sri Lanka's public transport with QR validation, wallet, routes and real-time information across web & mobile.",
    stack: ["Flutter", "Node.js", "Express", "MongoDB", "Firebase", "JWT", "PayHere"],
    color: "orange",
    link: "https://github.com/Nimuthu2004/LankaBus",
  },
  {
    n: "02",
    title: "Contact Manager",
    tag: "Full-Stack Web",
    desc: "Modern CRUD contact platform with a responsive React interface and Express API, deployed end-to-end on the cloud.",
    stack: ["React.js", "Node.js", "Express", "Render"],
    color: "lime",
    link: "https://contact-manager-sand-omega.vercel.app/",
  },
  {
    n: "03",
    title: "Traffic Data Analysis",
    tag: "Python · Analytics",
    desc: "Desktop application that processes transport datasets, generating visual reports on traffic volume, weather, speed and vehicle trends.",
    stack: ["Python", "Tkinter", "CSV", "OOP"],
    color: "white",
    link: "https://github.com/Nimuthu2004/Traffic_Data-Analysis_System",
  },
  {
    n: "04",
    title: "SDG Awareness",
    tag: "Collaborative Web",
    desc: "Educational platform promoting the UN Sustainable Development Goals with responsive, accessible interfaces built in a team workflow.",
    stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"],
    color: "orange",
    link: "https://sd-gs-website.vercel.app/",
  },
  {
    n: "05",
    title: "JS Micro Apps",
    tag: "Frontend Lab",
    desc: "Vanilla JavaScript portfolio — quote generator, modal system, stopwatch and FAQ accordion exploring DOM, events and motion.",
    stack: ["HTML5", "CSS3", "JavaScript ES6"],
    color: "lime",
  },
];

/* ---------- Page ---------- */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingNav />
      <main className="mx-auto max-w-7xl px-5 pb-32 pt-8 md:px-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */

function FloatingNav() {
  const items = [
    { icon: Home, href: "#top", label: "Home" },
    { icon: FolderKanban, href: "#projects", label: "Projects" },
    { icon: Wrench, href: "#skills", label: "Skills" },
    { icon: GraduationCap, href: "#education", label: "Education" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ];
  return (
    <nav className="fixed left-1/2 top-6 z-50 -translate-x-1/2">
      <ul className="flex items-center gap-1 rounded-full border border-border bg-surface/80 px-2 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
        {items.map(({ icon: Icon, href, label }) => (
          <li key={href}>
            <a
              href={href}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="pt-24 md:pt-28">
      <div className="grid gap-8 lg:grid-cols-[420px_1fr] lg:items-start">
        {/* Profile card */}
        <div className="relative">
          <div className="absolute -left-3 -top-3 h-40 w-40 rounded-full border-2 border-dashed border-orange/60" aria-hidden />
          <div className="relative rounded-3xl bg-card p-5 text-card-foreground shadow-2xl">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={portrait}
                alt="Nimuthu Lakdina Fernando"
                width={768}
                height={896}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <h3 className="mt-5 text-center text-2xl font-bold">Nimuthu Fernando</h3>
            <div className="my-3 flex justify-center">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange text-primary-foreground">
                <Sparkles className="h-4 w-4" />
              </span>
            </div>
            <p className="text-center text-sm text-neutral-600">
              Software Engineer who turns ambitious ideas into shipped products.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <SocialIcon href="https://github.com/Nimuthu2004" Icon={Github} />
              <SocialIcon href="https://www.linkedin.com/in/nimuthu-fernando/" Icon={Linkedin} />
              <SocialIcon href="mailto:lakdina1@gmail.com" Icon={Mail} />
            </div>
          </div>
        </div>

        {/* Headline */}
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Hi, I'm Nimuthu —
          </p>
          <h1 className="text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9]">
            SOFTWARE
            <br />
            <span className="text-stroke">ENGINEER</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Software Engineering undergraduate at IIT (University of Westminster).
            I build full-stack web, mobile and cloud-integrated systems with
            React, Node.js, Flutter and modern databases.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-bold md:text-5xl">{s.value}</div>
                <div className="mt-2 whitespace-pre-line text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bento cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <BentoCard
              title="FULL-STACK WEB & API DEVELOPMENT"
              tone="orange"
              Icon={Layers}
              href="#projects"
            />
            <BentoCard
              title="FLUTTER, REACT, NODE.JS, MONGODB"
              tone="lime"
              Icon={Code2}
              href="#skills"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface"
            >
              Contact Me
            </a>
            <a
             href="/Nimuthu-Resume.pdf"
             download="Nimuthu-Resume.pdf"
             className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface"
            >
            <Download className="h-4 w-4" /> Resume
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ href, Icon }: { href: string; Icon: typeof Github }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-9 w-9 items-center justify-center rounded-full border border-orange text-orange transition-colors hover:bg-orange hover:text-primary-foreground"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function BentoCard({
  title,
  tone,
  Icon,
  href,
}: {
  title: string;
  tone: "orange" | "lime";
  Icon: typeof Layers;
  href: string;
}) {
  const bg = tone === "orange" ? "bg-orange" : "bg-lime";
  return (
    <a
      href={href}
      className={`${bg} group relative flex h-44 flex-col justify-between overflow-hidden rounded-2xl p-5 text-neutral-900 transition-transform hover:-translate-y-1`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-black/10">
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex items-end justify-between gap-4">
        <h4 className="max-w-[80%] text-lg font-bold leading-tight">{title}</h4>
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black/70 transition-transform group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="about" className="mt-32">
      <SectionLabel>About</SectionLabel>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <h2 className="text-4xl font-bold leading-tight md:text-6xl">
          Designing software that
          <span className="text-orange"> actually ships.</span>
        </h2>
        <div className="space-y-5 text-base text-muted-foreground md:text-lg">
          <p>
            I'm a passionate Software Engineering student with hands-on
            experience designing full-stack web apps, mobile apps, RESTful APIs
            and cloud-integrated systems.
          </p>
          <p>
            From data analysis tools to enterprise-scale transport platforms,
            each project has sharpened my grasp of software architecture,
            database design, UX and collaborative engineering.
          </p>
          <p>
            I'm always exploring new technologies and love transforming ideas
            into meaningful, real-world products.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Skills ---------- */

function Skills() {
  return (
    <section id="skills" className="mt-32">
      <SectionLabel>Skills</SectionLabel>
      <h2 className="mb-12 text-4xl font-bold md:text-6xl">My toolkit.</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map(({ icon: Icon, title, items }) => (
          <div
            key={title}
            className="group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-orange"
          >
            <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-orange transition-colors group-hover:bg-orange group-hover:text-primary-foreground">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mb-3 text-lg font-semibold">{title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {items.map((i) => (
                <span
                  key={i}
                  className="rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */

function Projects() {
  return (
    <section id="projects" className="mt-32">
      <SectionLabel>Selected Work</SectionLabel>
      <h2 className="mb-12 text-4xl font-bold md:text-6xl">Featured projects.</h2>
      <div className="grid gap-5 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} project={p} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  featured,
}: {
  project: (typeof PROJECTS)[number];
  featured?: boolean;
}) {
  const toneMap: Record<string, string> = {
    orange: "bg-orange text-primary-foreground",
    lime: "bg-lime text-accent-foreground",
    white: "bg-card text-card-foreground",
  };
  
  const cardClassName = `${toneMap[project.color]} ${
    featured ? "md:col-span-2" : ""
  } group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 md:p-9 min-h-[320px]`;

  const cardContent = (
    <>
      <div className="flex items-start justify-between">
        <span className="text-sm font-mono opacity-70">{project.n}</span>
        <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-medium">
          {project.tag}
        </span>
      </div>
      <div>
        <h3 className="mt-8 text-3xl font-bold md:text-5xl">{project.title}</h3>
        <p className="mt-4 max-w-2xl text-sm opacity-80 md:text-base">
          {project.desc}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-black/20 px-3 py-1 text-xs"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
      <span className="absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black/70 transition-transform group-hover:rotate-45">
        <ArrowUpRight className="h-5 w-5" />
      </span>
    </>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className={cardClassName}>
        {cardContent}
      </a>
    );
  }

  return (
    <article className={cardClassName}>
      {cardContent}
    </article>
  );
}

/* ---------- Education ---------- */

function Education() {
  return (
    <section id="education" className="mt-32">
      <SectionLabel>Education</SectionLabel>
      <div className="rounded-3xl border border-border bg-surface p-8 md:p-12">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold md:text-4xl">
              BEng (Hons) Software Engineering
            </h3>
            <p className="mt-2 text-muted-foreground">
              Informatics Institute of Technology (IIT) · University of Westminster
            </p>
          </div>
          <span className="chip border-orange text-orange">2025 — Present</span>
        </div>
        <div className="mt-8">
          <p className="mb-4 text-sm uppercase tracking-wider text-muted-foreground">
            Key areas
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Data Structures & Algorithms",
              "OOP",
              "Database Systems",
              "Software Engineering",
              "Web Development",
              "Mobile Development",
              "HCI",
              "Software Architecture",
            ].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Achievements ---------- */

function Achievements() {
  return (
    <section id="achievements" className="mt-32">
      <SectionLabel>Beyond Code</SectionLabel>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-3xl border border-border bg-surface p-8">
          <Trophy className="h-8 w-8 text-orange" />
          <h3 className="mt-5 text-2xl font-bold">Volleyball Athlete</h3>
          <p className="mt-2 text-muted-foreground">
            Represented St. Joseph Vaz College Volleyball Team (2016 — 2023).
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>• DSI Championships — U15 & U19 Champions</li>
            <li>• School Championships — U18 & U20 Champions</li>
            <li>• U16 — Third Place</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-8">
          <Sparkles className="h-8 w-8 text-lime" />
          <h3 className="mt-5 text-2xl font-bold">Team Lead — Lanka Bus</h3>
          <p className="mt-2 text-muted-foreground">
            Coordinated a 6-developer team through architecture, backend and
            delivery of a university-scale transport platform.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Leadership", "Architecture", "Agile", "Code Review"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <section id="contact" className="mt-32">
      <SectionLabel>Contact</SectionLabel>
      <div className="overflow-hidden rounded-3xl bg-lime p-8 text-accent-foreground md:p-16">
        <h2 className="max-w-4xl text-4xl font-bold leading-[0.95] md:text-7xl">
          Let's build something
          <br />
          <span className="italic font-light">remarkable together.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-base opacity-80 md:text-lg">
          Currently seeking Software Engineering Internship opportunities. Open
          to collaborating on full-stack, mobile and cloud projects.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <ContactItem Icon={Mail} label="Email" value="lakdina1@gmail.com" href="mailto:lakdina1@gmail.com" />
          <ContactItem Icon={Phone} label="Phone" value="+94 74 025 5989" href="tel:+94740255989" />
          <ContactItem Icon={MapPin} label="Location" value="Wennappuwa, Sri Lanka" />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="mailto:lakdina1@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Start a conversation <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/Nimuthu2004"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-900/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/10"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nimuthu-fernando/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-neutral-900/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/10"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Wrap: React.ElementType = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      className="block rounded-2xl bg-black/10 p-5 transition-colors hover:bg-black/15"
    >
      <Icon className="h-5 w-5" />
      <p className="mt-3 text-xs uppercase tracking-wider opacity-70">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </Wrap>
  );
}

/* ---------- Helpers ---------- */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">
      — {children}
    </p>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:px-10">
        <p>© 2026 Nimuthu Lakdina Fernando</p>
        <p>Designed & developed by Nimuthu Lakdina Fernando</p>
      </div>
    </footer>
  );
}

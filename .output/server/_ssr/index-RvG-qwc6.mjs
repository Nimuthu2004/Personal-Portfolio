import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as House, F as FolderKanban, W as Wrench, G as GraduationCap, M as Mail, S as Sparkles, a as Github, L as Linkedin, b as Layers, C as CodeXml, A as ArrowUpRight, D as Download, c as Smartphone, d as Database, e as Cloud, f as Hammer, T as Trophy, P as Phone, g as MapPin } from "../_libs/lucide-react.mjs";

const portrait = "/assets/portrait-BZu7es99.jpg";
const STATS = [{
  value: "+05",
  label: "Featured\nProjects"
}, {
  value: "+10",
  label: "Technologies\nMastered"
}, {
  value: "+02",
  label: "Years\nBuilding"
}];
const SKILLS = [{
  icon: CodeXml,
  title: "Languages",
  items: ["Java", "JavaScript", "Python", "PHP", "Dart"]
}, {
  icon: Layers,
  title: "Frontend",
  items: ["React.js", "HTML5", "CSS3", "Bootstrap"]
}, {
  icon: Wrench,
  title: "Backend",
  items: ["Node.js", "Express.js", "REST APIs", "JWT"]
}, {
  icon: Smartphone,
  title: "Mobile",
  items: ["Flutter", "Android (Kotlin)"]
}, {
  icon: Database,
  title: "Databases",
  items: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "SQL"]
}, {
  icon: Cloud,
  title: "Cloud & Deploy",
  items: ["Render", "vercel", "Firebase Hosting"]
}, {
  icon: Hammer,
  title: "Tools",
  items: ["Git", "GitHub", "Postman", "Figma", "ClickUp"]
}, {
  icon: Sparkles,
  title: "Practices",
  items: ["OOP", "Agile", "API Design", "UI/UX"]
}];
const PROJECTS = [{
  n: "01",
  title: "Lanka Bus",
  tag: "Full-Stack · Mobile",
  desc: "Smart bus ticketing ecosystem digitising Sri Lanka's public transport with QR validation, wallet, routes and real-time information across web & mobile.",
  stack: ["Flutter", "Node.js", "Express", "MongoDB", "Firebase", "JWT", "PayHere"],
  color: "orange",
  link: "https://github.com/Nimuthu2004/LankaBus"
}, {
  n: "02",
  title: "Contact Manager",
  tag: "Full-Stack Web",
  desc: "Modern CRUD contact platform with a responsive React interface and Express API, deployed end-to-end on the cloud.",
  stack: ["React.js", "Node.js", "Express", "Render"],
  color: "lime",
  link: "https://contact-manager-sand-omega.vercel.app/"
}, {
  n: "03",
  title: "Traffic Data Analysis",
  tag: "Python · Analytics",
  desc: "Desktop application that processes transport datasets, generating visual reports on traffic volume, weather, speed and vehicle trends.",
  stack: ["Python", "Tkinter", "CSV", "OOP"],
  color: "white",
  link: "https://github.com/Nimuthu2004/Traffic_Data-Analysis_System"
}, {
  n: "04",
  title: "SDG Awareness",
  tag: "Collaborative Web",
  desc: "Educational platform promoting the UN Sustainable Development Goals with responsive, accessible interfaces built in a team workflow.",
  stack: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"],
  color: "orange",
  link: "https://sd-gs-website.vercel.app/"
}, {
  n: "05",
  title: "JS Micro Apps",
  tag: "Frontend Lab",
  desc: "Vanilla JavaScript portfolio — quote generator, modal system, stopwatch and FAQ accordion exploring DOM, events and motion.",
  stack: ["HTML5", "CSS3", "JavaScript ES6"],
  color: "lime"
}];
function Portfolio() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl px-5 pb-32 pt-8 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Projects, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Education, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Achievements, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function FloatingNav() {
  const items = [{
    icon: House,
    href: "#top",
    label: "Home"
  }, {
    icon: FolderKanban,
    href: "#projects",
    label: "Projects"
  }, {
    icon: Wrench,
    href: "#skills",
    label: "Skills"
  }, {
    icon: GraduationCap,
    href: "#education",
    label: "Education"
  }, {
    icon: Mail,
    href: "#contact",
    label: "Contact"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed left-1/2 top-6 z-50 -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex items-center gap-1 rounded-full border border-border bg-surface/80 px-2 py-2 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)]", children: items.map(({
    icon: Icon,
    href,
    label
  }) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, "aria-label": label, className: "flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }) }, href)) }) });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "top", className: "pt-24 md:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 lg:grid-cols-[420px_1fr] lg:items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-3 -top-3 h-40 w-40 rounded-full border-2 border-dashed border-orange/60", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl bg-card p-5 text-card-foreground shadow-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: portrait, alt: "Nimuthu Lakdina Fernando", width: 768, height: 896, className: "aspect-[4/5] w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-center text-2xl font-bold", children: "Nimuthu Fernando" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-full bg-orange text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-sm text-neutral-600", children: "Software Engineer who turns ambitious ideas into shipped products." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcon, { href: "https://github.com/Nimuthu2004", Icon: Github }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcon, { href: "https://www.linkedin.com/in/nimuthu-fernando/", Icon: Linkedin }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SocialIcon, { href: "mailto:lakdina1@gmail.com", Icon: Mail })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm uppercase tracking-[0.3em] text-muted-foreground", children: "Hi, I'm Nimuthu —" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-[clamp(3rem,9vw,8rem)] font-bold leading-[0.9]", children: [
        "SOFTWARE",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-stroke", children: "ENGINEER" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-base text-muted-foreground md:text-lg", children: "Software Engineering undergraduate at IIT (University of Westminster). I build full-stack web, mobile and cloud-integrated systems with React, Node.js, Flutter and modern databases." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-3 gap-6 max-w-lg", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold md:text-5xl", children: s.value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 whitespace-pre-line text-xs uppercase tracking-wider text-muted-foreground", children: s.label })
      ] }, s.label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { title: "FULL-STACK WEB & API DEVELOPMENT", tone: "orange", Icon: Layers, href: "#projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(BentoCard, { title: "FLUTTER, REACT, NODE.JS, MONGODB", tone: "lime", Icon: CodeXml, href: "#skills" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#projects", className: "inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5", children: [
          "View Projects ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface", children: "Contact Me" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Nimuthu-Resume.pdf", download: "Nimuthu-Resume.pdf", className: "inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-surface", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4" }),
          " Resume"
        ] })
      ] })
    ] })
  ] }) });
}
function SocialIcon({
  href,
  Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, target: "_blank", rel: "noreferrer", className: "flex h-9 w-9 items-center justify-center rounded-full border border-orange text-orange transition-colors hover:bg-orange hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) });
}
function BentoCard({
  title,
  tone,
  Icon,
  href
}) {
  const bg = tone === "orange" ? "bg-orange" : "bg-lime";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, className: `${bg} group relative flex h-44 flex-col justify-between overflow-hidden rounded-2xl p-5 text-neutral-900 transition-transform hover:-translate-y-1`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-black/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "max-w-[80%] text-lg font-bold leading-tight", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black/70 transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) })
    ] })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "About" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-[1fr_1.4fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl font-bold leading-tight md:text-6xl", children: [
        "Designing software that",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-orange", children: " actually ships." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-base text-muted-foreground md:text-lg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I'm a passionate Software Engineering student with hands-on experience designing full-stack web apps, mobile apps, RESTful APIs and cloud-integrated systems." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From data analysis tools to enterprise-scale transport platforms, each project has sharpened my grasp of software architecture, database design, UX and collaborative engineering." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I'm always exploring new technologies and love transforming ideas into meaningful, real-world products." })
      ] })
    ] })
  ] });
}
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Skills" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-12 text-4xl font-bold md:text-6xl", children: "My toolkit." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: SKILLS.map(({
      icon: Icon,
      title,
      items
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-orange", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-orange transition-colors group-hover:bg-orange group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mb-3 text-lg font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-md bg-secondary px-2 py-1 text-xs text-muted-foreground", children: i }, i)) })
    ] }, title)) })
  ] });
}
function Projects() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Selected Work" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-12 text-4xl font-bold md:text-6xl", children: "Featured projects." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2", children: PROJECTS.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p, featured: i === 0 }, p.n)) })
  ] });
}
function ProjectCard({
  project,
  featured
}) {
  const toneMap = {
    orange: "bg-orange text-primary-foreground",
    lime: "bg-lime text-accent-foreground",
    white: "bg-card text-card-foreground"
  };
  const cardClassName = `${toneMap[project.color]} ${featured ? "md:col-span-2" : ""} group relative flex flex-col justify-between overflow-hidden rounded-3xl p-7 md:p-9 min-h-[320px]`;
  const cardContent = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-mono opacity-70", children: project.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-black/10 px-3 py-1 text-xs font-medium", children: project.tag })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-8 text-3xl font-bold md:text-5xl", children: project.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-sm opacity-80 md:text-base", children: project.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: project.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-black/20 px-3 py-1 text-xs", children: s }, s)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-xl border-2 border-black/70 transition-transform group-hover:rotate-45", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" }) })
  ] });
  if (project.link) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: project.link, target: "_blank", rel: "noopener noreferrer", className: cardClassName, children: cardContent });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: cardClassName, children: cardContent });
}
function Education() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "education", className: "mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Education" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-surface p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-bold md:text-4xl", children: "BEng (Hons) Software Engineering" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Informatics Institute of Technology (IIT) · University of Westminster" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip border-orange text-orange", children: "2025 — Present" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-sm uppercase tracking-wider text-muted-foreground", children: "Key areas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Data Structures & Algorithms", "OOP", "Database Systems", "Software Engineering", "Web Development", "Mobile Development", "HCI", "Software Architecture"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: t }, t)) })
      ] })
    ] })
  ] });
}
function Achievements() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "achievements", className: "mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Beyond Code" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-surface p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "h-8 w-8 text-orange" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-bold", children: "Volleyball Athlete" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Represented St. Joseph Vaz College Volleyball Team (2016 — 2023)." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• DSI Championships — U15 & U19 Champions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• School Championships — U18 & U20 Champions" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• U16 — Third Place" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-surface p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-8 w-8 text-lime" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-bold", children: "Team Lead — Lanka Bus" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Coordinated a 6-developer team through architecture, backend and delivery of a university-scale transport platform." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: ["Leadership", "Architecture", "Agile", "Code Review"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", children: t }, t)) })
      ] })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionLabel, { children: "Contact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-lime p-8 text-accent-foreground md:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "max-w-4xl text-4xl font-bold leading-[0.95] md:text-7xl", children: [
        "Let's build something",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic font-light", children: "remarkable together." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-base opacity-80 md:text-lg", children: "Currently seeking Software Engineering Internship opportunities. Open to collaborating on full-stack, mobile and cloud projects." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-5 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { Icon: Mail, label: "Email", value: "lakdina1@gmail.com", href: "mailto:lakdina1@gmail.com" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { Icon: Phone, label: "Phone", value: "+94 74 025 5989", href: "tel:+94740255989" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactItem, { Icon: MapPin, label: "Location", value: "Wennappuwa, Sri Lanka" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:lakdina1@gmail.com", className: "inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5", children: [
          "Start a conversation ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/Nimuthu2004", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-neutral-900/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { className: "h-4 w-4" }),
          " GitHub"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.linkedin.com/in/nimuthu-fernando/", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-neutral-900/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-black/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" }),
          " LinkedIn"
        ] })
      ] })
    ] })
  ] });
}
function ContactItem({
  Icon,
  label,
  value,
  href
}) {
  const Wrap = href ? "a" : "div";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Wrap, { href, className: "block rounded-2xl bg-black/10 p-5 transition-colors hover:bg-black/15", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs uppercase tracking-wider opacity-70", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-semibold", children: value })
  ] });
}
function SectionLabel({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-4 text-xs uppercase tracking-[0.4em] text-muted-foreground", children: [
    "— ",
    children
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground md:flex-row md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 Nimuthu Lakdina Fernando" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Designed & developed by Nimuthu Lakdina Fernando" })
  ] }) });
}
export {
  Portfolio as component
};

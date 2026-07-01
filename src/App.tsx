import { useMemo, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProjectCard } from "./components/ProjectCard";
import { MediaFrame } from "./components/MediaFrame";
import { projects } from "./data/projects";
import { services } from "./data/services";
import ecosystemVideo from "./assets/media/yescode-ecosystem.mp4";
import typingVideo from "./assets/media/typing-code.mp4";

type Page = "home" | "work" | "services" | "process" | "about" | "contact" | `project:${string}`;

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const selected = useMemo(
    () => (page.startsWith("project:") ? projects.find((item) => item.slug === page.slice(8)) : undefined),
    [page],
  );

  const navigate = (next: string) => {
    document.body.classList.add("is-transitioning");
    window.setTimeout(() => {
      setPage(next as Page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.setTimeout(() => document.body.classList.remove("is-transitioning"), 320);
    }, 120);
  };

  return (
    <>
      <Navbar page={page} navigate={navigate} />
      {selected ? (
        <ProjectDetail slug={selected.slug} navigate={navigate} />
      ) : page === "work" ? (
        <Work navigate={navigate} />
      ) : page === "services" ? (
        <Services />
      ) : page === "process" ? (
        <Process />
      ) : page === "about" ? (
        <About />
      ) : page === "contact" ? (
        <Contact />
      ) : (
        <Home navigate={navigate} />
      )}
      <ScrollTools />
      <Footer navigate={navigate} />
    </>
  );
}

function Home({ navigate }: { navigate: (page: string) => void }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">AI-assisted. Human-directed. Code-backed.</span>
          <h1>No-code avoids the build. We say yes code.</h1>
          <p>
            yesCode builds web products, AI-assisted systems, automations, backend logic, and launch-ready digital
            tools for people who need more than a template.
          </p>
          <div className="actions">
            <button onClick={() => navigate("work")}>view work</button>
            <button className="secondary" onClick={() => navigate("contact")}>
              start a build
            </button>
          </div>
        </div>
        <div className="hero-media">
          <MediaFrame src={ecosystemVideo} video />
        </div>
      </section>

      <section className="strip">
        {["web apps", "landing pages", "automation", "AI workflows", "backend systems", "product MVPs"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <span className="eyebrow">featured builds</span>
          <h2>Proof first. Claims second.</h2>
        </div>
        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={(slug) => navigate(`project:${slug}`)} />
          ))}
        </div>
      </section>

      <Services compact />
      <AIStance />
      <Process />
      <SisterBrand />
    </main>
  );
}

function Work({ navigate }: { navigate: (page: string) => void }) {
  return (
    <main className="page">
      <PageHeader eyebrow="work" title="Five projects, built as evidence." text="Each card is structured so live links, GitHub URLs, screenshots, and deeper notes can be swapped in as each deployment is finalized." />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={(slug) => navigate(`project:${slug}`)} />
        ))}
      </div>
    </main>
  );
}

function ProjectDetail({ slug, navigate }: { slug: string; navigate: (page: string) => void }) {
  const project = projects.find((item) => item.slug === slug)!;

  return (
    <main className="page">
      <section className="case-hero">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
        <MediaFrame src={project.image} />
      </section>
      <section className="case-grid">
        <div>
          <h2>Role</h2>
          <p>{project.role}</p>
        </div>
        <div>
          <h2>Outcome</h2>
          <p>{project.outcome}</p>
        </div>
        <div>
          <h2>Stack</h2>
          <div className="tool-grid">{project.tools.map((item) => <ToolBadge key={item} name={item} />)}</div>
        </div>
        <div>
          <h2>Skills Applied</h2>
          <ul>{project.skills.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="proof-gallery">
        {project.gallery.map((image) => (
          <MediaFrame key={image} src={image} />
        ))}
      </section>
      <section className="case-grid">
        <div>
          <h2>Build Scope</h2>
          <ul>{project.sections.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h2>Live Surface</h2>
          <p>{project.liveUrl.replace("https://", "")}</p>
        </div>
      </section>
      <div className="case-actions">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">open live project</a>
        <button onClick={() => navigate("work")} className="secondary">back to work</button>
      </div>
    </main>
  );
}

function ToolBadge({ name }: { name: string }) {
  const slug: Record<string, string> = {
    React: "react",
    "Vite": "vite",
    TypeScript: "typescript",
    CSS: "css3",
    Vercel: "vercel",
    GitHub: "github",
    "Next.js": "nextdotjs",
    "Tailwind CSS": "tailwindcss",
    HTML: "html5",
    JavaScript: "javascript",
  };
  const icon = slug[name];
  return (
    <span className="tool-badge">
      {icon ? <img src={`https://cdn.simpleicons.org/${icon}/ffffff`} alt="" /> : null}
      {name}
    </span>
  );
}

function ScrollTools() {
  return (
    <div className="scroll-tools">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">↑</button>
      <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })} aria-label="Scroll to bottom">↓</button>
    </div>
  );
}

function Services({ compact = false }: { compact?: boolean }) {
  return (
    <main className={compact ? "section" : "page"}>
      <PageHeader eyebrow="services" title="Working systems, not decorative software." text="From MVPs to backend setup, yesCode covers the practical engineering layer around modern product launches." />
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

function AIStance() {
  return (
    <section className="ai-section">
      <MediaFrame src={typingVideo} video />
      <div>
        <span className="eyebrow">AI stance</span>
        <h2>We use AI openly.</h2>
        <p>
          AI helps us move faster, generate options, document flows, create scaffolds, and automate repetitive work. It
          does not replace taste, structure, security, product judgment, or final implementation.
        </p>
      </div>
    </section>
  );
}

function Process() {
  const steps = ["understand", "structure", "build", "test", "launch", "iterate"];
  return (
    <main className="section">
      <PageHeader eyebrow="process" title="Lean build process. Real engineering judgment." text="We move from idea to working product through product flow, interface, backend logic, deployment, and iteration." />
      <div className="process-line">{steps.map((step, index) => <span key={step}>{String(index + 1).padStart(2, "0")} {step}</span>)}</div>
    </main>
  );
}

function About() {
  return (
    <main className="page narrow">
      <PageHeader eyebrow="about" title="Software and AI-assisted product builds." text="yesCode is a founder-led software studio for people who need working systems, not just nice pages." />
      <p>
        The name is a response to the no-code wave. We respect speed, automation, and modern tools, but not every
        problem should be trapped inside a drag-and-drop template.
      </p>
      <p>Some ideas need code. Some systems need logic. Some products need structure. That is where yesCode comes in.</p>
    </main>
  );
}

function Contact() {
  return (
    <main className="page contact" id="contact">
      <PageHeader eyebrow="contact" title="Start with the build." text="Tell us what you want to launch, automate, fix, or turn into a working product." />
      <a className="mail-link" href="mailto:hello@yescode.dev">hello@yescode.dev</a>
      <div className="contact-grid">
        {["Name", "Email", "Business / Project", "What do you need?", "Budget range", "Timeline", "Links"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </main>
  );
}

function SisterBrand() {
  return (
    <section className="sister">
      <span className="eyebrow">ecosystem</span>
      <h2>Need the design layer? Visit yesCode Design.</h2>
      <p>yesCode builds the engineering layer. yesCode Design shapes products before they are built.</p>
      <a href="https://github.com/Oyewolesyl/yesCodeDesign" target="_blank" rel="noreferrer">open yesCode Design</a>
    </section>
  );
}

function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

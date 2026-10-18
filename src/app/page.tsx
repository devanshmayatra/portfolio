"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const LINKS = {
  github: "https://github.com/devanshmayatra",
  linkedin: "https://www.linkedin.com/in/devanshmayatra/",
  email: "mailto:devanshm667@gmail.com",
  resume: "/resume.pdf",
};

const navigation = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const experience = [
  {
    company: "Robin Home AI",
    role: "Full Stack Developer Intern",
    time: "Aug 2025 — May 2026",
    description:
      "Helped ship the first mobile-app beta, working directly with the CEO and CTO on product and engineering decisions. Built Python data-processing and FastAPI-backed workflows.",
    outcomes: ["Key workflows under 100 ms", "Product later reached 1M+ downloads"],
  },
  {
    company: "Kraft Nexus",
    role: "Junior React JS Developer",
    time: "Apr 2025 — Aug 2025",
    description:
      "Turned recurring frontend patterns into reusable application components and improved page performance across production interfaces.",
    outcomes: ["30+ reusable components", "~15 engineering hours saved per week"],
  },
  {
    company: "JKB Education",
    role: "Full-Stack Developer Intern",
    time: "Nov 2023 — Mar 2025",
    description:
      "Replaced manual scoring and reporting workflows with full-stack tools used in day-to-day education operations.",
    outcomes: ["80%+ less manual operational work", "~100–200 daily active users"],
  },
];

const skills = [
  {
    category: "Machine learning",
    technologies: "PyTorch · scikit-learn · NumPy · pandas · LightGBM · XGBoost",
  },
  {
    category: "Deep learning & CV",
    technologies: "CNNs · backpropagation · normalization · optimization · evaluation",
  },
  {
    category: "Systems",
    technologies: "FastAPI · PostgreSQL · Redis · Docker · AWS (S3, EC2, RDS)",
  },
  {
    category: "Languages & tools",
    technologies: "Python · C++ · TypeScript · React · Next.js · Linux · Git",
  },
];

function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.2, 0.75, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SectionHeader({
  index,
  label,
  title,
  subtitle,
}: {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="section-header">
      <div className="section-index">
        <span>{index}</span>
        <span>{label}</span>
      </div>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}

/* Conceptual neural-network sketch; not a diagram of a specific trained model. */
function NeuralFigure() {
  const layers = [
    [105, 175, 245],
    [70, 122, 175, 228, 280],
    [90, 147, 204, 261],
    [140, 210],
  ];
  const positions = [45, 150, 265, 375];

  const edges = layers.slice(0, -1).flatMap((from, layerIndex) =>
    from.flatMap((startY) =>
      layers[layerIndex + 1].map((endY) => ({
        x1: positions[layerIndex],
        y1: startY,
        x2: positions[layerIndex + 1],
        y2: endY,
      }))
    )
  );

  return (
    <figure className="neural-figure">
      <div className="figure-header">
        <span className="live-indicator" />
        <span>LEARNING SYSTEMS</span>
        <span className="figure-number">FIG. 01</span>
      </div>

      <svg
        viewBox="0 0 420 350"
        role="img"
        aria-label="Schematic illustration of a layered neural network"
        className="network-svg"
      >
        {edges.map((edge, index) => (
          <line
            key={index}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            className="network-edge"
          />
        ))}
        {edges.filter((_, i) => i % 8 === 0).map((edge, index) => (
          <line
            key={`flow-${index}`}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            className="network-flow"
            style={{ animationDelay: `${-index * 1.4}s` }}
          />
        ))}
        {layers.flatMap((layer, i) =>
          layer.map((y, j) => (
            <g key={`${i}-${j}`}>
              <circle cx={positions[i]} cy={y} r="9" className="network-node-outer" />
              <circle
                cx={positions[i]}
                cy={y}
                r="3.7"
                className={i === 3 ? "network-node output" : "network-node"}
              />
            </g>
          ))
        )}
      </svg>
      <figcaption className="figure-caption">
        <span>INPUT</span>
        <span>HIDDEN REPRESENTATIONS</span>
        <span>OUTPUT</span>
      </figcaption>
      <div className="figure-note">Understanding the model. Building the system.</div>
    </figure>
  );
}

function VisionDiagram() {
  return (
    <div className="vision-diagram" aria-label="DeepVisionLab learning and implementation progression">
      <div className="diagram-title">
        <span>DEEPVISIONLAB / PROGRESSION</span>
        <span>CIFAR-10</span>
      </div>
      <div className="diagram-steps">
        <div className="diagram-step completed">
          <span className="step-index">01</span>
          <strong>MLP baseline</strong>
          <small>First-principles layers</small>
        </div>
        <ArrowRight size={17} aria-hidden="true" />
        <div className="diagram-step completed">
          <span className="step-index">02</span>
          <strong>Convolutional networks</strong>
          <small>Feature learning</small>
        </div>
        <ArrowRight size={17} aria-hidden="true" />
        <div className="diagram-step future">
          <span className="step-index">03</span>
          <strong>Residual architectures</strong>
          <small>Next stage</small>
        </div>
      </div>
      <div className="diagram-footer">
        <div>
          <span>HELD-OUT TEST ACCURACY</span>
          <strong>91.05%</strong>
        </div>
        <div>
          <span>FOCUS</span>
          <strong>Train · Evaluate · Iterate</strong>
        </div>
      </div>
    </div>
  );
}

function SocialLinks({ footer = false }: { footer?: boolean }) {
  return (
    <div className={footer ? "social-links footer-socials" : "social-links"}>
      <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub size={19} />
      </a>
      <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin size={19} />
      </a>
      <a href={LINKS.email} aria-label="Email">
        <Mail size={19} />
      </a>
    </div>
  );
}

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="header-content container">
          <a href="#top" className="logo" aria-label="Devansh Mayatra, back to top">
            <span className="logo-symbol">D<span>.</span></span>
            <span>DEVANSH MAYATRA</span>
          </a>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </nav>

          <div className="header-right">
            <a className="header-resume" href={LINKS.resume} target="_blank" rel="noopener noreferrer">
              Resume <ArrowUpRight size={15} />
            </a>
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {mobileOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="main">
        <section id="top" className="hero container">
          <div className="hero-copy">
            <Reveal>
              <p className="eyebrow"><span className="eyebrow-line" /> ML ENGINEERING · DEEP LEARNING · VISION</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Building ML systems.
                <br />
                <span className="hero-muted">From the inside out.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="hero-description">
                I&apos;m Devansh, an M.S. Applied Machine Learning student at the University of Maryland.
                I work across model development, deep learning, computer vision, and the
                engineering that takes models beyond a notebook.
              </p>
              <div className="hero-meta">
                <MapPin size={15} /> College Park, Maryland <span className="meta-separator">/</span> UMD · May 2028
              </div>
            </Reveal>
            <Reveal delay={0.21}>
              <div className="hero-actions">
                <a href="#work" className="button button-primary">View selected work <ArrowUpRight size={17} /></a>
                <a href={LINKS.resume} target="_blank" rel="noopener noreferrer" className="button button-outline">
                  <Download size={16} /> Resume
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.25}><SocialLinks /></Reveal>
          </div>
          <Reveal className="hero-visual" delay={0.18}><NeuralFigure /></Reveal>
          <a className="scroll-hint" href="#highlights">SCROLL TO EXPLORE <ArrowDown size={14} /></a>
        </section>

        <section id="highlights" className="highlights container" aria-label="Selected engineering highlights">
          {[
            { number: "91.05%", label: "CIFAR-10 test accuracy", context: "CNN experiment" },
            { number: "<100 ms", label: "Key workflow latency", context: "Robin Home AI" },
            { number: "1M+", label: "Product downloads later reached", context: "Robin Home AI" },
            { number: "2.24e-8", label: "Maximum gradient deviation", context: "Manual backprop vs autograd" },
          ].map((metric, index) => (
            <Reveal key={metric.label} className="highlight" delay={index * 0.05}>
              <strong>{metric.number}</strong>
              <span>{metric.label}</span>
              <small>{metric.context}</small>
            </Reveal>
          ))}
        </section>

        <section id="work" className="work-section container section-space">
          <SectionHeader
            index="01"
            label="SELECTED WORK"
            title="Projects with a point of view."
            subtitle="A few focused projects where the model, the implementation, and the evaluation matter."
          />
          <Reveal>
            <motion.article
              className="featured-project"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <div className="featured-copy">
                <div className="project-kicker"><span>FEATURED PROJECT</span><span className="status status-active">ACTIVE</span></div>
                <h3>DeepVisionLab</h3>
                <p className="project-subtitle">Computer vision from first principles.</p>
                <p className="project-description">
                  Building and training neural networks while studying what makes them work:
                  gradient flow, normalization, optimization, convolution, and architecture design.
                  Moving from hand-built layers and CIFAR-10 CNN experiments toward residual networks.
                </p>
                <div className="tag-list">
                  {['PyTorch', 'CNNs', 'CIFAR-10', 'Model evaluation'].map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a
                  className="project-text-link"
                  href="https://github.com/devanshmayatra/neural-networks-zero-to-hero"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View code and experiments <ArrowUpRight size={17} />
                </a>
              </div>
              <VisionDiagram />
            </motion.article>
          </Reveal>

          <div className="secondary-projects">
            <Reveal>
              <motion.article className="secondary-project" whileHover={reduceMotion ? undefined : { y: -3 }}>
                <div className="project-kicker"><span>GENAI / RETRIEVAL SYSTEMS</span><span className="status">IN DEVELOPMENT</span></div>
                <div className="mini-visual retrieval-visual" aria-hidden="true">
                  <span>USCIS / DHS / UMD</span><div className="mini-line" /><strong>HYBRID RETRIEVAL</strong><div className="mini-line" /><span>CITED ANSWERS</span>
                </div>
                <h3>F-1 Compass</h3>
                <p className="project-description">
                  Evolving DocuMind into a source-grounded assistant for international students.
                  Reusing hybrid retrieval, reranking, and source attribution to make official guidance easier to navigate.
                </p>
                <div className="tag-list"><span>Qdrant</span><span>RAG</span><span>Gemini</span><span>Python</span></div>
                <a href="https://documind-v1.streamlit.app/" target="_blank" rel="noopener noreferrer" className="project-text-link">
                  View DocuMind foundation <ArrowUpRight size={17} />
                </a>
              </motion.article>
            </Reveal>
            <Reveal delay={0.08}>
              <motion.article className="secondary-project" whileHover={reduceMotion ? undefined : { y: -3 }}>
                <div className="project-kicker"><span>APPLIED ML / SYSTEMS</span><span className="status">BUILT</span></div>
                <div className="mini-visual dispatch-visual" aria-hidden="true">
                  <span>SPATIAL + TEMPORAL FEATURES</span><div className="dispatch-bars"><i/><i/><i/><i/><i/><i/><i/></div><span>LIGHTGBM → FASTAPI</span>
                </div>
                <h3>SmartDispatch AI</h3>
                <p className="project-description">
                  Predictive dispatch and pricing pipeline using temporal feature engineering,
                  spatial clustering, and gradient-boosted models with API-based serving.
                </p>
                <div className="tag-list"><span>LightGBM</span><span>K-Means</span><span>FastAPI</span><span>Docker</span></div>
                <span className="project-note">Training, features, and serving in one pipeline</span>
              </motion.article>
            </Reveal>
          </div>
        </section>

        <section id="experience" className="experience-section container section-space">
          <SectionHeader
            index="02"
            label="EXPERIENCE"
            title="Engineering in practice."
            subtitle="The software and systems background I bring to machine learning work."
          />
          <div className="experience-list">
            {experience.map((job, index) => (
              <Reveal key={job.company} delay={index * 0.05}>
                <article className="experience-row">
                  <div className="experience-left"><span>{job.time}</span><span className="timeline-point" /></div>
                  <div className="experience-main">
                    <span className="company-name">{job.company}</span>
                    <h3>{job.role}</h3>
                    <p>{job.description}</p>
                    <div className="outcome-list">{job.outcomes.map((outcome) => <span key={outcome}>{outcome}</span>)}</div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="about" className="about-section container section-space">
          <SectionHeader index="03" label="ABOUT & SKILLS" title="Curiosity, backed by implementation." />
          <div className="about-grid">
            <Reveal className="about-copy">
              <p>
                My background started in shipping production software: applications, APIs,
                infrastructure, and data pipelines. That work led me deeper into machine
                learning—first understanding models and their training dynamics, then building
                systems around them.
              </p>
              <p>
                I&apos;m currently focused on deep learning and computer vision while continuing to
                work on deployable ML systems. I care about reproducible experiments, clear
                evaluations, and knowing why a model works—not only that it runs.
              </p>
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="project-text-link">More on GitHub <ArrowUpRight size={17} /></a>
            </Reveal>
            <Reveal delay={0.07}>
              <div className="skill-table">
                {skills.map((skill) => (
                  <div className="skill-row" key={skill.category}>
                    <h3>{skill.category}</h3>
                    <p>{skill.technologies}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="contact-section container section-space">
          <Reveal className="contact-panel">
            <div className="section-index"><span>04</span><span>CONTACT</span></div>
            <h2>Have an interesting problem?</h2>
            <p>I'm always interested in good conversations about applied ML, deep learning, computer vision, and building real systems.</p>
            <a className="button button-primary" href={LINKS.email}>Get in touch <ArrowUpRight size={17} /></a>
          </Reveal>
        </section>
      </main>

      <footer className="footer container">
        <div><strong>Devansh Mayatra</strong><span>From first principles to production.</span></div>
        <SocialLinks footer />
        <small>© 2026 Devansh Mayatra</small>
      </footer>
    </>
  );
}

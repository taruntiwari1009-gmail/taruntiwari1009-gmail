import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MoveUpRight } from 'lucide-react'

const projects = [
  { n:'01', type:'GRAPH INTELLIGENCE · PYTHON', title:'Network Intelligence Engine', text:'Finding the overlooked connections in a network—and turning them into actionable signals.', tags:['NetworkX','Graph analytics','Centrality'], tone:'violet' },
  { n:'02', type:'AI PRODUCT · EXPLORATION', title:'Clarity OS', text:'A discovery experience that helps students navigate universities, courses, and decisions with AI.', tags:['Supabase','AI workflows','Research'], tone:'blue' },
  { n:'03', type:'DATA · AUTOMATION', title:'Data systems & pipelines', text:'Making messy data workflows more reliable, repeatable, and useful to the people who depend on them.', tags:['ETL','Cloud','Analytics'], tone:'green' },
  { n:'04', type:'PRODUCT · WEB', title:'Sushil Consulting', text:'A digital presence with a focus on clarity, thoughtful interaction, and practical backend integration.', tags:['React','Supabase','Web'], tone:'rose' },
]
const jobs = [
  { company:'Sanofi', role:'Visier Functional Expert Lead', period:'2026 — Present', desc:'People analytics systems, security models, integrations, and go-live support.' },
  { company:'Deloitte', role:'Associate Analyst · Consulting', period:'2024 — 2026', desc:'Data, analytics, and consulting work across complex business environments.' },
  { company:'ProcDNA', role:'Associate Analyst', period:'2023 — 2024', desc:'Analytics solutions and network-based intelligence for commercial use cases.' },
]
const rise = { hidden:{opacity:0,y:24}, visible:{opacity:1,y:0} }

function App(){
 return <main>
  <nav className="nav glass">
    <a className="wordmark" href="#top">TT<span>.</span></a>
    <div className="navlinks"><a href="#work">Work</a><a href="#about">About</a><a href="#notes">Research</a></div>
    <a className="nav-contact" href="#contact">Let’s connect <ArrowUpRight size={14}/></a>
  </nav>
  <section className="hero" id="top">
    <div className="hero-meta"><span><i className="live-dot"/> OPEN TO INTERESTING IDEAS</span><span>DELHI, INDIA · 2026</span></div>
    <motion.div initial="hidden" animate="visible" variants={rise} transition={{duration:.7,ease:[.22,1,.36,1]}}>
      <p className="eyebrow">DATA · AI · ENGINEERING · RESEARCH</p>
      <h1>Building at the<br/><span className="gradient-text">intersection of</span><br/>data & intelligence.</h1>
    </motion.div>
    <div className="hero-bottom"><p>I turn complex problems into meaningful systems,<br/>insights, and products.</p><a className="scroll" href="#about">SCROLL TO EXPLORE <ArrowDown size={15}/></a></div>
    <div className="orb-wrap" aria-hidden="true"><div className="orb"/><div className="orb-ring ring-one"/><div className="orb-ring ring-two"/><span className="orb-caption">Curiosity<br/>in motion.</span></div>
  </section>
  <section className="intro section" id="about">
    <div className="section-label"><span>01 / A LITTLE CONTEXT</span><span>ABOUT</span></div>
    <div className="intro-grid"><h2>Curious by default.<br/><span className="muted">Builder by choice.</span></h2><div className="intro-copy"><p>My work sits somewhere between data, technology, and the questions that make both matter. I’ve moved through analytics and consulting, worked around data systems, and found myself increasingly drawn to how intelligence can help people make better decisions.</p><p>I like exploring the space between a problem and a product—understanding it, connecting the dots, and building something useful along the way.</p><a className="text-link" href="#work">A few things I’ve worked on <MoveUpRight size={15}/></a></div></div>
  </section>
  <section className="experience section">
   <div className="section-label"><span>02 / WHERE I’VE BEEN</span><span>EXPERIENCE</span></div>
   <div className="timeline">{jobs.map((job,i)=><motion.div className="job" key={job.company} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.3}} transition={{delay:i*.1}}>
    <span className="job-index">0{i+1}</span><div><h3>{job.company}</h3><p className="job-role">{job.role}</p><p className="job-desc">{job.desc}</p></div><span className="job-period">{job.period}</span>
   </motion.div>)}</div>
  </section>
  <section className="work section" id="work">
   <div className="section-label"><span>03 / SELECTED EXPLORATIONS</span><span>WORK</span></div>
   <div className="work-head"><h2>Things I’ve built,<br/><span className="muted">and questions I’ve chased.</span></h2><p>A collection of projects, experiments, and work-in-progress ideas.</p></div>
   <div className="projects">{projects.map((p,i)=><motion.article className={'project '+p.tone} key={p.n} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{delay:i*.08}}>
    <div className="project-top"><span>{p.n} / {p.type}</span><ArrowUpRight size={18}/></div><div className="project-graphic"><div className={'graphic-core '+p.tone}>{p.n}</div><div className="graphic-lines"/></div><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
   </motion.article>)}</div>
  </section>
  <section className="research section" id="notes">
   <div className="section-label"><span>04 / STILL THINKING</span><span>RESEARCH & IDEAS</span></div>
   <div className="research-layout"><h2>Questions worth<br/>staying with.</h2><div className="research-list"><div><span>01</span><p>Explainable AI & transparency</p><small>Understanding why systems make the decisions they do.</small></div><div><span>02</span><p>Graph & network intelligence</p><small>Finding structure, influence, and hidden relationships.</small></div><div><span>03</span><p>Applied machine learning</p><small>Moving beyond models toward meaningful real-world outcomes.</small></div></div></div>
  </section>
  <section className="outside section">
   <div className="section-label"><span>05 / OFF THE SCREEN</span><span>OUTSIDE WORK</span></div><div className="outside-content"><h2>Life is bigger<br/>than the <span className="muted">next commit.</span></h2><p>Books, long conversations, cricket, chess, football, volunteering, and the occasional trip somewhere greener. I’m happiest when I’m learning something—or discovering a place I haven’t seen before.</p></div>
  </section>
  <footer className="contact section" id="contact"><div className="section-label"><span>06 / YOUR TURN</span><span>CONTACT</span></div><h2>Have something<br/><span className="gradient-text">interesting in mind?</span></h2><a className="contact-cta" href="mailto:hello@taruntiwari.dev">Let’s talk <ArrowUpRight/></a><div className="footer-bottom"><span>© 2026 TARUN TIWARI</span><div className="socials"><a href="https://github.com/taruntiwari1009-gmail" aria-label="GitHub"><Github size={16}/></a><a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={16}/></a><a href="mailto:hello@taruntiwari.dev" aria-label="Email"><Mail size={16}/></a></div><a href="#top">BACK TO TOP ↑</a></div></footer>
 </main>
}
export default App
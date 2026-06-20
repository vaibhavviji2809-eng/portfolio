import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenText,
  Brain,
  Code2,
  Cpu,
  Download,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  Target,
  X,
  Github,
  Rocket,
  ShieldCheck,
  Server,
  Zap,
  Microscope,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay },
  }),
};

const lines = [
  "GPU acceleration",
  "LLM inference",
  "TensorRT",
  "CUDA kernels",
  "Distributed training",
  "Research writing",
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = {
    github: "https://github.com/vaibhavviji2809-eng",
    linkedin: "https://www.linkedin.com/in/vaibhav-viswanath-a65125315",
    email: "mailto:vaibhavviji2809@gmail.com",
    resume: `${import.meta.env.BASE_URL}resume.pdf`,
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#research", label: "Research" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const metrics = [
    { value: "6+", label: "systems projects" },
    { value: "4", label: "research works" },
    { value: "84", label: "classes in vision work" },
    { value: "US", label: "internship ready" },
  ];

  const focusAreas = [
    "GPU acceleration",
    "LLM serving",
    "Distributed training",
    "CUDA + TensorRT",
  ];

  const strengths = [
    "Latency reduction",
    "Throughput tuning",
    "Memory hierarchy",
    "Scheduler awareness",
  ];

  const projects = [
    {
      title: "CUDA Kernel Optimization Suite",
      desc: "Implemented naive and tiled CUDA kernels and achieved up to 240x speedup over a CPU baseline through GPU-level optimization.",
      tech: "CUDA, GPU Optimization, Parallel Computing",
      impact: "240x speedup",
      repo: "https://github.com/vaibhavviji2809-eng/cuda-nn-engine",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: "TensorRT Inference Acceleration",
      desc: "Converted deep learning models into optimized TensorRT engines and reduced inference latency using FP16 precision.",
      tech: "TensorRT, Deep Learning, FP16",
      impact: "Inference latency reduction",
      repo: "https://github.com/vaibhavviji2809-eng",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Multilingual Sign Language Detection",
      desc: "Built a YOLOv8 and MobileNetV2-based pipeline for multilingual sign language detection across 84 classes with GPU-optimized inference.",
      tech: "YOLOv8, MobileNetV2, NVIDIA T4",
      impact: "84 classes",
      repo: "https://github.com/vaibhavviji2809-eng/sign-language-project",
      icon: <Code2 className="h-6 w-6" />,
    },
    {
      title: "LLM Inference Engine",
      desc: "Built an inference engine for running and experimenting with large language models, focused on practical serving and performance work.",
      tech: "LLM Serving, Inference, Optimization",
      impact: "LLM systems",
      repo: "https://github.com/vaibhavviji2809-eng/llm-inference-engine",
      icon: <Layers3 className="h-6 w-6" />,
    },
    {
      title: "MiniPyTorch",
      desc: "Implemented a lightweight PyTorch-inspired framework to explore deep learning internals and core tensor operations.",
      tech: "Deep Learning, Autograd, PyTorch Internals",
      impact: "Framework internals",
      repo: "https://github.com/vaibhavviji2809-eng/MiniPyTorch",
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: "Mini Distributed Training Framework",
      desc: "Built a compact framework for experimenting with distributed training workflows, scaling strategies, and deep learning systems concepts.",
      tech: "Distributed Training, Deep Learning Systems, Scaling",
      impact: "Distributed scaling",
      repo: "https://github.com/vaibhavviji2809-eng/Mini-Distributed-Training-Framework",
      icon: <Rocket className="h-6 w-6" />,
    },
  ];

  const research = [
    {
      title: "Operating System-Level Optimization for Accelerating AI Inference",
      status: "Unpublished manuscript",
      icon: <Target className="h-5 w-5" />,
      points: [
        "Conducted NUMA-based CPU affinity experiments using numactl.",
        "Benchmarked inference latency under memory binding configurations.",
        "Analyzed scheduling impact on throughput and identified system-level bottlenecks affecting AI performance.",
      ],
    },
    {
      title: "Artificial Intelligence and Privacy Concerns",
      link: "https://www.cureusjournals.com/articles/3689-artificial-intelligence-and-privacy-concerns-balancing-innovation-with-security#!/",
      status: "Published research",
      icon: <ShieldCheck className="h-5 w-5" />,
      points: [
        "Published research on privacy vulnerabilities in large-scale AI systems.",
        "Proposed mitigation strategies for secure AI deployment.",
      ],
    },
    {
      title: "Emotion Detection Using Artificial Intelligence",
      status: "Unpublished manuscript",
      icon: <Microscope className="h-5 w-5" />,
      points: [
        "Explored multimodal emotion recognition across facial, speech, and text signals.",
        "Reviewed CNN-based facial emotion recognition approaches, including MTCNN-style detection pipelines.",
        "Analyzed applications, ethical risks, and future scope of AI-driven emotion analysis in healthcare, education, and human-computer interaction.",
      ],
    },
    {
      title: "Suicide Risk Prediction using Machine Learning",
      status: "Unpublished manuscript",
      icon: <Zap className="h-5 w-5" />,
      points: [
        "Designed predictive ML models with imbalance handling.",
        "Evaluated performance using ROC-AUC and F1 metrics.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050814] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.16),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.12),_transparent_26%),linear-gradient(to_bottom,_rgba(255,255,255,0.03),_transparent_18%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-cyan-400/10 to-transparent blur-3xl" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050814]/80 px-4 py-3 backdrop-blur-xl md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <Sparkles className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.22em] text-white/90">
                VAIBHAV VISWANATH
              </p>
              <p className="text-[11px] uppercase tracking-[0.3em] text-cyan-300/80">
                AI Systems Portfolio
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={links.resume}
              className="hidden items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/15 md:inline-flex"
            >
              Resume <ArrowUpRight className="h-4 w-4" />
            </a>
            <button
              type="button"
              className="rounded-2xl border border-white/10 bg-white/5 p-3 text-zinc-100 md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen ? (
          <div
            id="mobile-nav"
            className="mx-auto mt-4 flex max-w-7xl flex-col gap-2 rounded-3xl border border-white/10 bg-[#0a1020]/95 p-3 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm text-zinc-200 transition hover:bg-white/10 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.resume}
              className="rounded-2xl bg-cyan-400/15 px-4 py-3 text-sm font-medium text-cyan-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        ) : null}
      </nav>

      <section id="home" className="px-4 pt-10 md:px-6 md:pt-16">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.4fr_0.95fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl md:p-10"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,238,0.14),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.10),_transparent_30%)]" />
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
                <Zap className="h-3.5 w-3.5" />
                GPU acceleration, LLM inference, deep learning systems
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.92] tracking-tight md:text-7xl">
                Building AI systems that feel fast before they look impressive.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                I focus on high-performance AI infrastructure, CUDA optimization,
                TensorRT deployment, distributed training experiments, and research
                that treats performance as a first-class feature.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#projects">
                  <Button className="rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-6 py-6 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 hover:from-cyan-300 hover:to-teal-300">
                    Explore Work <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href={links.resume} download>
                  <Button
                    variant="outline"
                    className="rounded-full border-white/15 bg-white/5 px-6 py-6 text-base text-white hover:bg-white/10"
                  >
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-3xl border border-white/10 bg-black/20 p-4"
                  >
                    <p className="text-3xl font-black text-white">{metric.value}</p>
                    <p className="mt-1 text-sm text-zinc-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.08}
              className="relative overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#0a1020]/90 p-6 shadow-2xl shadow-teal-950/20 backdrop-blur-xl"
            >
              <div className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                Recruiter snapshot
              </div>
              <div className="flex items-center gap-3 pr-20">
                <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Layers3 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                    Current Focus
                  </p>
                  <p className="text-zinc-300">Systems, inference, and optimization</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 rounded-3xl border border-cyan-300/10 bg-black/20 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                  One-line pitch
                </p>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  I turn research-heavy ML ideas into fast, measurable systems work
                  that feels practical to engineers and compelling to recruiters.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.14}
              className="rounded-[2.2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                    What I optimize
                  </p>
                  <p className="mt-1 text-zinc-300">From kernels to whole pipelines</p>
                </div>
                <BadgeCheck className="h-6 w-6 text-emerald-300" />
              </div>
              <div className="mt-5 space-y-3 text-sm text-zinc-300">
                {strengths.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-6 md:pt-12">
        <section className="overflow-hidden py-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl md:px-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-300">
                Signal
              </span>
              <div className="flex flex-wrap gap-2">
                {lines.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                About
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
                I build systems that survive real constraints.
              </h2>
              <p className="mt-4 leading-8 text-zinc-300">
                My work combines CUDA, TensorRT, Linux systems, computer architecture,
                and research-driven ML to improve inference latency and throughput.
                I like projects where the bottleneck is measurable and the fix has to
                be earned.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {focusAreas.concat(strengths).map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.02 }}
                  className="rounded-2xl border border-white/10 bg-[#0a1020]/80 px-4 py-3 text-sm text-zinc-200 shadow-lg shadow-black/10"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-10 md:py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                Projects
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                A portfolio of systems work, not just code samples
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6 }}
              >
                <Card className="group h-full overflow-hidden rounded-[1.8rem] border-white/10 bg-white/5 shadow-2xl shadow-black/10 transition hover:border-cyan-300/30">
                  <div className="h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-300/20">
                        {project.icon}
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-zinc-400">
                        {project.impact}
                      </span>
                    </div>
                    <h3 className="mt-5 text-2xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{project.desc}</p>
                    <p className="mt-5 text-sm font-semibold tracking-wide text-cyan-300">
                      {project.tech}
                    </p>
                    <div className="mt-6 flex gap-3">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10"
                      >
                        Code <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-teal-300"
                      >
                        Discuss <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="research" className="py-10 md:py-14">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                <BookOpenText className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-200/80">
                  Research
                </p>
                <h2 className="text-3xl font-black tracking-tight md:text-4xl">
                  Research and writing that show technical depth
                </h2>
              </div>
            </div>

            <div className="mt-8 grid gap-6">
              {research.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0a1020]/85 p-6"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-300" />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-2xl border border-white/10 bg-white/5 p-2 text-cyan-200">
                      {item.icon}
                    </span>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    {item.status ? (
                      <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-100">
                        {item.status}
                      </span>
                    ) : null}
                  </div>
                  <ul className="mt-4 grid gap-3 text-sm leading-7 text-zinc-300 md:grid-cols-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-teal-300"
                    >
                      View Publication <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/5 shadow-2xl shadow-black/10">
              <div className="h-1 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3">
                  <span className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
                      Education
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-white">
                      VIT Vellore Institute of Technology
                    </h3>
                  </div>
                </div>
                <p className="mt-5 text-zinc-300">
                  Bachelor of Technology in Computer Science
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  The strongest signal here is the systems background: computer architecture,
                  operating systems, GPU work, and performance analysis all show up in the same profile.
                </p>
              </CardContent>
            </Card>

            <div className="grid gap-4">
              <div className="rounded-[1.6rem] border border-white/10 bg-[#0a1020]/85 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-200/80">
                  What hiring managers should notice
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    "LLM inference and serving",
                    "GPU acceleration and CUDA",
                    "Distributed systems thinking",
                    "Research and experimentation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-200/80">
                  Availability
                </p>
                <p className="mt-3 text-zinc-300">
                  Open to US internships and engineering roles that sit at the
                  intersection of AI systems, ML infrastructure, and high-performance computing.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-10 md:py-14">
          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-gradient-to-br from-cyan-400/10 via-white/5 to-teal-400/10 shadow-2xl shadow-cyan-950/20">
            <CardContent className="p-6 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200/80">
                    Contact
                  </p>
                  <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                    Let&apos;s build something fast, useful, and technically honest.
                  </h2>
                  <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
                    I&apos;m open to AI systems, GPU engineering, CUDA, inference optimization,
                    and research-focused engineering roles.
                  </p>
                </div>

                <div className="grid gap-3">
                  <a href={links.email}>
                    <Button className="w-full rounded-2xl bg-white px-5 py-6 text-base font-semibold text-zinc-950 hover:bg-zinc-100">
                      <Mail className="mr-2 h-4 w-4" /> Email
                    </Button>
                  </a>
                  <a href={links.github} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      className="w-full rounded-2xl border-white/10 bg-black/15 px-5 py-6 text-base text-white hover:bg-white/10"
                    >
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Button>
                  </a>
                  <a href={links.linkedin} target="_blank" rel="noreferrer">
                    <Button
                      variant="outline"
                      className="w-full rounded-2xl border-white/10 bg-black/15 px-5 py-6 text-base text-white hover:bg-white/10"
                    >
                      <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

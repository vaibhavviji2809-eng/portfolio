import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Cpu,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = {
    github: "https://github.com/vaibhavviji2809-eng",
    linkedin: "https://www.linkedin.com/in/vaibhav-viswanath-a65125315",
    email: "mailto:vaibhavvij280@gmail.com",
    resume: `${import.meta.env.BASE_URL}resume.pdf`,
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#research", label: "Research" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  const skills = [
    "C++",
    "Python",
    "C",
    "Swift",
    "Go",
    "R",
    "CUDA",
    "TensorRT",
    "cuDNN",
    "DeepStream",
    "PyTorch",
    "CNNs",
    "RNNs",
    "Transformers",
    "GANs",
    "Linux",
    "NUMA Optimization",
    "CPU Affinity",
    "Memory Hierarchy",
    "OS Scheduling",
    "Data Structures & Algorithms",
    "Computer Architecture",
    "Operating Systems",
    "Probability & Statistics",
  ];

  const projects = [
    {
      title: "CUDA Kernel Optimization Suite",
      desc: "Implemented naive and tiled CUDA kernels and achieved up to 240x speedup over a CPU baseline through GPU-level optimization.",
      tech: "CUDA, GPU Optimization, Parallel Computing",
      repo: "https://github.com/vaibhavviji2809-eng/cuda-nn-engine",
      icon: <Cpu className="h-6 w-6" />,
    },
    {
      title: "TensorRT Inference Acceleration",
      desc: "Converted deep learning models into optimized TensorRT engines and reduced inference latency using FP16 precision.",
      tech: "TensorRT, Deep Learning, FP16",
      repo: "https://github.com/vaibhavviji2809-eng",
      icon: <Brain className="h-6 w-6" />,
    },
    {
      title: "Multilingual Sign Language Detection",
      desc: "Built a YOLOv8 and MobileNetV2-based pipeline for multilingual sign language detection across 84 classes with GPU-optimized inference.",
      tech: "YOLOv8, MobileNetV2, NVIDIA T4",
      repo: "https://github.com/vaibhavviji2809-eng/sign-language-project",
      icon: <Code2 className="h-6 w-6" />,
    },
  ];

  const research = [
    {
      title: "Operating System-Level Optimization for Accelerating AI Inference",
      points: [
        "Conducted NUMA-based CPU affinity experiments using numactl.",
        "Benchmarked inference latency under memory binding configurations.",
        "Analyzed scheduling impact on throughput and identified system-level bottlenecks affecting AI performance.",
      ],
    },
    {
      title: "Artificial Intelligence and Privacy Concerns",
      link: "https://www.cureusjournals.com/articles/3689-artificial-intelligence-and-privacy-concerns-balancing-innovation-with-security#!/",
      points: [
        "Published research on privacy vulnerabilities in large-scale AI systems.",
        "Proposed mitigation strategies for secure AI deployment.",
      ],
    },
    {
      title: "Suicide Risk Prediction using Machine Learning",
      points: [
        "Designed predictive ML models with imbalance handling.",
        "Evaluated performance using ROC-AUC and F1 metrics.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <nav className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 px-6 py-4 backdrop-blur-xl md:px-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <a href="#home" className="text-lg font-bold tracking-tight">
            Vaibhav V
          </a>

          <div className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={links.resume}
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200 md:inline-flex"
          >
            Resume
          </a>

          <button
            type="button"
            className="rounded-md p-1 text-zinc-200 md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div id="mobile-nav" className="mx-auto mt-4 flex max-w-6xl flex-col gap-3 md:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-900 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.resume}
              className="mt-2 inline-flex w-fit rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </a>
          </div>
        ) : null}
      </nav>

      <section id="home" className="relative overflow-hidden px-6 py-24 md:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.25),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(14,165,233,0.18),_transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              AI Systems & GPU Optimization Portfolio
            </p>
            <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
              Hi, I&apos;m Vaibhav Viswanath.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
              AI systems-focused engineer with research experience in OS-level
              inference optimization, GPU acceleration, CUDA kernel development,
              TensorRT deployment, and performance benchmarking across CPU-GPU
              architectures.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects">
                <Button className="rounded-2xl bg-sky-500 px-6 py-6 text-base text-white hover:bg-sky-400">
                  View Projects <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href={links.resume} download>
                <Button
                  variant="outline"
                  className="rounded-2xl border-zinc-700 bg-zinc-900 px-6 py-6 text-base text-white hover:bg-zinc-800"
                >
                  Download Resume <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24 md:px-16">
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="mt-5 max-w-3xl leading-8 text-zinc-300">
            I focus on building high-performance AI systems through GPU
            acceleration, operating-system-level optimization, and deep learning
            deployment. My work combines CUDA, TensorRT, Linux systems, computer
            architecture, and ML research to improve inference latency and
            throughput.
          </p>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="research" className="py-16">
          <h2 className="text-3xl font-bold">Research</h2>
          <div className="relative mt-8 border-l border-zinc-800 pl-6">
            {research.map((item, index) => (
              <motion.div
                key={item.title}
                className="relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="absolute -left-[31px] top-8 h-3 w-3 rounded-full bg-sky-400" />
                <Card className="mb-6 rounded-2xl border-zinc-800 bg-zinc-900/80 shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-400">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
                      >
                        View Publication
                      </a>
                    ) : null}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <Card className="h-full rounded-2xl border-zinc-800 bg-zinc-900/80 shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {project.desc}
                    </p>
                    <p className="mt-5 text-sm font-medium text-sky-400">
                      {project.tech}
                    </p>
                    <div className="mt-6 flex gap-3">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-zinc-800 px-4 py-2 text-sm text-zinc-300 hover:bg-zinc-800"
                      >
                        Code
                      </a>
                      <a
                        href="#contact"
                        className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-400"
                      >
                        Discuss
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="education" className="py-16">
          <h2 className="text-3xl font-bold">Education</h2>
          <Card className="mt-6 rounded-2xl border-zinc-800 bg-zinc-900/80">
            <CardContent className="flex gap-4 p-6">
              <GraduationCap className="mt-1 h-7 w-7 text-sky-400" />
              <div>
                <h3 className="text-xl font-semibold text-white">
                  VIT Vellore Institute of Technology
                </h3>
                <p className="mt-2 text-zinc-400">
                  AI Systems, GPU Optimization, Computer Architecture, and Deep
                  Learning Systems
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section
          id="contact"
          className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-10"
        >
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="mt-4 max-w-2xl text-zinc-300">
            I&apos;m open to AI systems, GPU engineering, CUDA, inference
            optimization, and research-focused engineering roles.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={links.email}>
              <Button className="rounded-2xl bg-white text-zinc-950 hover:bg-zinc-200">
                <Mail className="mr-2 h-4 w-4" /> Email
              </Button>
            </a>
            <a href={links.github} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                className="rounded-2xl border-zinc-700 bg-zinc-950 text-white hover:bg-zinc-800"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Button>
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                className="rounded-2xl border-zinc-700 bg-zinc-950 text-white hover:bg-zinc-800"
              >
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

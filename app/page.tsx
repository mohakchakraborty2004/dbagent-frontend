"use client";

import React, { useState } from 'react';
import { Copy, Check, Github, Database, Code, Zap, Layers } from 'lucide-react';

export default function DBAgentLanding() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('npx dbagent init');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Automated Schema Generation",
      description:
        "Instantly generate clean, production-ready database schemas using AI with deep project awareness.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Backend API Creation",
      description:
        "Convert natural-language instructions into fully structured REST APIs that plug directly into your project.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Local Context Memory",
      description:
        "DB-Agent remembers your folders, patterns, and constraints — giving consistent and context-aware outputs.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Dual-Model Intelligence",
      description:
        "Flash-speed scanning with high-precision generation for the perfect balance of speed and accuracy.",
    },
  ];

  const timeline = [
    {
      step: "1",
      title: "Initialize Your Project",
      description:
        "Start with a single command. DB-Agent sets up its environment and prepares the workspace instantly.",
      image: "🚀",
    },
    {
      step: "2",
      title: "Deep Shallow Scan",
      description:
        "The agent scans your files, detects structures, and stores your Next.js context for future queries.",
      image: "🔍",
    },
    {
      step: "3",
      title: "Describe What You Need",
      description:
        "Ask in simple natural language — migrations, models, schema updates, API routes, anything.",
      image: "💬",
    },
    {
      step: "4",
      title: "DB-Agent Builds It",
      description:
        "Get accurate schema designs, queries, and endpoint code instantly generated and ready to use.",
      image: "⚡",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 0.5 }} />
              <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.5 }} />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 0.4 }} />
            </linearGradient>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
            </filter>
            <filter id="glow">
              <feGaussianBlur stdDeviation="8" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g filter="url(#goo)">
            <circle className="blob blob1" cx="50%" cy="50%" r="250" fill="url(#grad1)" filter="url(#glow)" />
            <circle className="blob blob2" cx="50%" cy="50%" r="250" fill="url(#grad1)" filter="url(#glow)" />
            <circle className="blob blob3" cx="20%" cy="30%" r="200" fill="url(#grad2)" filter="url(#glow)" />
            <circle className="blob blob4" cx="80%" cy="70%" r="200" fill="url(#grad2)" filter="url(#glow)" />
          </g>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 w-full backdrop-blur-md bg-black/20 border-b border-white/5 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Database className="w-6 h-6 text-purple-400" />
              <span className="text-xl font-semibold">DB-Agent</span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-sm"
            >
              <Github className="w-4 h-4" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              DB-Agent
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
              The AI that builds your database, backend, and APIs — exactly the way you describe.
            </p>

            {/* Install Command */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-3">
                <code className="text-purple-300 font-mono mr-3">npx dbagent init</code>
                <button
                  onClick={copyToClipboard}
                  className="p-1.5 hover:bg-white/10 rounded-full transition-all"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-purple-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                >
                  <div className="text-purple-400 mb-3">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-purple-400">STEP {item.step}</span>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Powered by Cutting-Edge AI
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="text-xl font-semibold mb-2 text-purple-300">Gemini 2.0 Flash</h3>
                <p className="text-gray-400 text-sm">
                  High-speed project scanning, file pattern detection, and context extraction.
                </p>
              </div>
              <div className="p-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-2 text-blue-300">Gemini 2.5 Pro</h3>
                <p className="text-gray-400 text-sm">
                  Expert-level schema modeling and highly accurate backend code generation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-4 border-t border-white/5 backdrop-blur-md overflow-hidden">
          <div className="relative">
            <h1 className="text-[15vw] md:text-[12vw] font-black text-center leading-none">
              <span
                className="bg-clip-text text-transparent bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-3xl"
                style={{
                  WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                  textShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
                }}
              >
                DBAGENT
              </span>
            </h1>
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Made for developers who value speed, accuracy, and intelligent automation.
          </p>
        </footer>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob1move {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          25% { transform: translate(-180px, -60px) scale(0.85); opacity: 0.95; }
          50% { transform: translate(-240px, 0) scale(0.8); opacity: 0.9; }
          75% { transform: translate(-180px, 60px) scale(0.85); opacity: 0.95; }
        }
        @keyframes blob2move {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 1; }
          25% { transform: translate(180px, 60px) scale(0.85); opacity: 0.95; }
          50% { transform: translate(240px, 0) scale(0.8); opacity: 0.9; }
          75% { transform: translate(180px, -60px) scale(0.85); opacity: 0.95; }
        }
        @keyframes blob3move {
          0% { transform: translate(0, -200px) scale(0.9); opacity: 0.8; }
          16% { transform: translate(-80px, -150px) scale(0.95); opacity: 0.85; }
          33% { transform: translate(-150px, -80px) scale(1); opacity: 1; }
          50% { transform: translate(-180px, 0) scale(0.85); opacity: 0.9; }
          66% { transform: translate(-150px, 80px) scale(0.9); opacity: 0.85; }
          83% { transform: translate(-80px, 150px) scale(0.95); opacity: 0.8; }
          100% { transform: translate(0, -200px) scale(0.9); opacity: 0.8; }
        }
        @keyframes blob4move {
          0% { transform: translate(0, 200px) scale(0.9); opacity: 0.8; }
          16% { transform: translate(80px, 150px) scale(0.95); opacity: 0.85; }
          33% { transform: translate(150px, 80px) scale(1); opacity: 1; }
          50% { transform: translate(180px, 0) scale(0.85); opacity: 0.9; }
          66% { transform: translate(150px, -80px) scale(0.9); opacity: 0.85; }
          83% { transform: translate(80px, -150px) scale(0.95); opacity: 0.8; }
          100% { transform: translate(0, 200px) scale(0.9); opacity: 0.8; }
        }
        .blob1 { animation: blob1move 18s ease-in-out infinite; }
        .blob2 { animation: blob2move 18s ease-in-out infinite; }
        .blob3 { animation: blob3move 18s ease-in-out infinite; animation-delay: 6s; }
        .blob4 { animation: blob4move 18s ease-in-out infinite; animation-delay: 12s; }
      `}</style>
    </div>
  );
}

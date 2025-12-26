"use client";

import { useState } from "react";
import { useCityStore } from "@/store/cityStore";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORY_COLORS = {
  facilitator: {
    bg: "from-purple-900/50 to-pink-900/50",
    border: "border-pink-500",
    text: "text-pink-400",
    glow: "shadow-pink-500/20",
    gradient: "from-pink-600 to-purple-600",
    shadowColor: "#ec4899",
  },
  service: {
    bg: "from-cyan-900/50 to-blue-900/50",
    border: "border-cyan-500",
    text: "text-cyan-400",
    glow: "shadow-cyan-500/20",
    gradient: "from-cyan-600 to-blue-600",
    shadowColor: "#06b6d4",
  },
  infrastructure: {
    bg: "from-orange-900/50 to-red-900/50",
    border: "border-orange-500",
    text: "text-orange-400",
    glow: "shadow-orange-500/20",
    gradient: "from-orange-600 to-red-600",
    shadowColor: "#f97316",
  },
  integration: {
    bg: "from-green-900/50 to-emerald-900/50",
    border: "border-green-500",
    text: "text-green-400",
    glow: "shadow-green-500/20",
    gradient: "from-green-600 to-emerald-600",
    shadowColor: "#22c55e",
  },
} as const;

type CategoryKey = keyof typeof CATEGORY_COLORS;

interface CategoryDetail {
  tagline: string;
  signal: string;
  highlight: string;
  stats: { label: string; value: string }[];
}

const CATEGORY_DETAILS: Record<CategoryKey, CategoryDetail> = {
  facilitator: {
    tagline: "Spin up compliant facilitators with instant KYT + OFAC coverage.",
    signal: "Operational Rail",
    highlight:
      "Designed for teams rolling out lightning-fast x402 acceptance with observability baked in.",
    stats: [
      { label: "Launch Time", value: "< 5 min" },
      { label: "Network Reach", value: "Multi-chain" },
      { label: "Settlement", value: "Fee-free USDC" },
    ],
  },
  service: {
    tagline:
      "Turn any API, agent, or workflow into a pay-per-call nano business.",
    signal: "Live Service",
    highlight:
      "Perfect for AI-native tools that meter access, bill in stablecoins, and stay borderless.",
    stats: [
      { label: "Latency", value: "Sub-second" },
      { label: "Pricing", value: "Usage-based" },
      { label: "Integration", value: "Drop-in" },
    ],
  },
  infrastructure: {
    tagline:
      "Backbone primitives powering facilitators, routing, and autonomy at scale.",
    signal: "Core Stack",
    highlight:
      "Composable building blocks for infra teams who need resilient x402 throughput.",
    stats: [
      { label: "Reliability", value: "99.9%" },
      { label: "Scale", value: "Global" },
      { label: "Tooling", value: "OSS + Hosted" },
    ],
  },
  integration: {
    tagline: "Native bridges into apps, marketplaces, and agent networks.",
    signal: "Embedded Link",
    highlight:
      "Interconnectivity layer that lets agents trigger value anywhere they roam.",
    stats: [
      { label: "Coverage", value: "Omnichannel" },
      { label: "Security", value: "Audited" },
      { label: "Uptime", value: "24/7" },
    ],
  },
};

const formatDisplayUrl = (url: string) => {
  if (!url) return "—";
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  try {
    const hostname = new URL(normalized).hostname.replace(/^www\./, "");
    return hostname;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
};

export function ProjectModal() {
  const { selectedProject, setSelectedProject } = useCityStore();
  const [copied, setCopied] = useState(false);

  const category: CategoryKey = selectedProject?.category ?? "service";
  const theme = CATEGORY_COLORS[category] || CATEGORY_COLORS.service;
  const detail = CATEGORY_DETAILS[category] || CATEGORY_DETAILS.service;
  const displayUrl = formatDisplayUrl(selectedProject?.website ?? "");

  const handleCopyLink = async () => {
    if (!selectedProject?.website) return;
    try {
      await navigator.clipboard?.writeText(selectedProject.website);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          />

          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 32 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 32 }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className="relative w-full max-w-5xl"
          >
            {/* Outer Container */}
            <div
              className={`relative w-full max-w-5xl rounded-[32px] border ${theme.border} border-opacity-60 p-1.5 md:p-2 transition-all duration-300`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Inner Container */}
              <div className="relative w-full overflow-hidden rounded-[24px] bg-black/90 backdrop-blur-2xl p-6 md:p-8 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
                <div className="absolute -inset-px rounded-[24px] border border-white/10 pointer-events-none" />
                <div
                  className="absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
                  style={{
                    background: `radial-gradient(circle, ${theme.shadowColor}55, transparent 65%)`,
                  }}
                />

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute -top-3 -right-3 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white/60 transition hover:text-white hover:bg-black/90"
                  aria-label="Close project details"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>

                <div className="grid gap-10 lg:grid-cols-[1.05fr_1.2fr]">
                  {/* Left Column - Visuals */}
                  <div
                    className={`relative rounded-3xl border ${theme.border} bg-black/20 p-2 shadow-2xl`}
                  >
                    <div
                      className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${theme.bg}`}
                    >
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_60%)]" />
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage:
                            "linear-gradient(120deg, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
                          backgroundSize: "28px 28px",
                        }}
                      />
                      <motion.div
                        className="absolute -right-28 top-12 h-48 w-48 rounded-full"
                        style={{
                          background: `radial-gradient(circle, ${theme.shadowColor}50, transparent 65%)`,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 22,
                          ease: "linear",
                        }}
                      />

                      {/* Inner Content Container */}
                      <div className="relative z-10 flex flex-col gap-8 p-12 lg:p-14">
                        {/* Logo and Name - Side by Side */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
                          <div
                            className={`relative flex-shrink-0 flex items-center justify-center w-24 h-24 lg:w-28 lg:h-28 rounded-2xl bg-black/40 shadow-inner ${theme.glow} border border-white/5 overflow-hidden p-4`}
                          >
                            <div className="absolute inset-0 rounded-2xl border border-white/10" />
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent" />
                            <img
                              src={selectedProject.logoPath}
                              alt={`${selectedProject.name} logo`}
                              className="relative z-10 w-full h-full object-contain drop-shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
                            />
                          </div>

                          <div className="flex-1 min-w-0 space-y-3">
                            <p className="font-space text-xs uppercase tracking-[0.2em] text-white/70">
                              {detail.signal}
                            </p>
                            <h2 className="font-carter text-4xl lg:text-5xl text-white drop-shadow-md leading-tight break-words">
                              {selectedProject.name}
                            </h2>
                          </div>
                        </div>

                        {/* Tagline */}
                        <p className="font-montserrat text-lg text-white/80 leading-8 px-2">
                          {detail.tagline}
                        </p>

                        {/* Category Badge */}
                        <div className="px-2">
                          <div className="inline-block">
                            <div
                              className={`font-space flex items-center gap-3 rounded-full border ${theme.border} border-opacity-60 bg-black/40 px-8 py-3 text-sm font-bold uppercase tracking-[0.15em] text-white/90`}
                            >
                              <span className="h-2 w-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,1)]" />
                              {selectedProject.category}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Details */}
                  <div className="relative rounded-3xl border border-white/15 bg-black/20 p-2 overflow-hidden">
                    <div className="relative h-full overflow-hidden rounded-2xl bg-black/80">
                      <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                      {/* Inner Content Container */}
                      <div className="relative z-10 flex flex-col gap-8 p-12 lg:p-14">
                        <div className="flex flex-col gap-4 px-2">
                          <div className="font-space flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-white/50">
                            <span className="break-all">{displayUrl}</span>
                            <span>{detail.signal}</span>
                          </div>
                          <p className="font-montserrat text-base text-gray-200 leading-8 font-light">
                            {selectedProject.description}
                          </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3 px-1">
                          {detail.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-5 hover:bg-white/10 transition-colors overflow-hidden"
                            >
                              <p className="font-space text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3 truncate px-1">
                                {stat.label}
                              </p>
                              <p className="font-space text-lg lg:text-xl text-white font-medium truncate px-1">
                                {stat.value}
                              </p>
                            </div>
                          ))}
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 overflow-hidden mx-1">
                          <div className="flex items-center gap-3 mb-4">
                            <div
                              className={`h-1 w-8 rounded-full bg-gradient-to-r ${theme.gradient}`}
                            />
                            <p className="font-space text-xs uppercase tracking-[0.3em] text-white/50">
                              Mission Brief
                            </p>
                          </div>
                          <p className="font-montserrat text-sm text-gray-300 leading-7">
                            {detail.highlight}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-4">
                          <a
                            href={selectedProject.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-space group relative flex flex-[2] min-w-[200px] items-center justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r ${theme.gradient} px-10 py-6 text-sm font-bold text-white shadow-xl transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] tracking-widest`}
                          >
                            <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
                            <span className="relative flex items-center gap-2 uppercase">
                              Visit Website
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transition-transform group-hover:translate-x-1"
                              >
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15 3 21 3 21 9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                              </svg>
                            </span>
                          </a>
                          <button
                            onClick={handleCopyLink}
                            className="font-space flex flex-1 min-w-[160px] items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-8 py-6 text-sm font-bold text-white/70 uppercase tracking-widest transition-all hover:bg-white/10 hover:text-white hover:border-white/30"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <rect
                                width="14"
                                height="14"
                                x="8"
                                y="2"
                                rx="2"
                                ry="2"
                              />
                              <path d="M4 8v12a2 2 0 0 0 2 2h12" />
                            </svg>
                            {copied ? "Copied" : "Copy"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

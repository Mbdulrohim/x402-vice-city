"use client";

import { useCityStore } from "@/store/cityStore";

export function ProjectModal() {
  const { selectedProject, setSelectedProject } = useCityStore();

  if (!selectedProject) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={() => setSelectedProject(null)}
    >
      <div
        className="glass max-w-2xl p-8 m-4 animate-float"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Project Logo */}
        <div className="flex items-start gap-6 mb-6">
          <img
            src={selectedProject.logoPath}
            alt={selectedProject.name}
            className="w-20 h-20 object-contain rounded-lg bg-white/5 p-2"
          />
          <div className="flex-1">
            <h2
              className="text-3xl font-bold mb-2"
              style={{ fontFamily: "var(--font-carter)" }}
            >
              {selectedProject.name}
            </h2>
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#00d9ff]/20 text-[#00d9ff] capitalize"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              {selectedProject.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className="text-gray-300 mb-6 leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat)" }}
        >
          {selectedProject.description}
        </p>

        {/* Actions */}
        <div className="flex gap-4">
          <a
            href={selectedProject.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-[#00d9ff] to-[#ff00cc] text-white font-bold rounded-full text-center hover:scale-105 transition-transform"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Visit Website →
          </a>
          <button
            onClick={() => setSelectedProject(null)}
            className="px-6 py-3 glass text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

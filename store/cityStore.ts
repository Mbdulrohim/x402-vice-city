"use client";

import { create } from "zustand";
import { type EcosystemProject } from "@/data/ecosystem";

interface CityStore {
  selectedProject: EcosystemProject | null;
  currentDistrict: string;
  setSelectedProject: (project: EcosystemProject | null) => void;
  setCurrentDistrict: (district: string) => void;
}

export const useCityStore = create<CityStore>((set) => ({
  selectedProject: null,
  currentDistrict: "facilitator-plaza",
  setSelectedProject: (project) => set({ selectedProject: project }),
  setCurrentDistrict: (district) => set({ currentDistrict: district }),
}));

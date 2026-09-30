import type { ComponentType } from "react";
import { storySlides } from "./slides-story";
import { systemSlides } from "./slides-system";
import { commercialSlides } from "./slides-commercial";
import { closeSlides } from "./slides-close";

export type SlideDef = {
  title: string;
  section: string;
  tone?: "charcoal" | "glow" | "final";
  /** Faint architectural grid behind the slide. */
  grid?: boolean;
  Body: ComponentType;
};

// Story order: problem → solution → system → agents → use cases → process → investment → trust → close.
export const slides: SlideDef[] = [...storySlides, ...systemSlides, ...commercialSlides, ...closeSlides];

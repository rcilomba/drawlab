"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { galleryProjects } from "./gallery-data";

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      className={`size-5 ${direction === "left" ? "rotate-180" : ""}`}
    >
      <path
        d="m7 4 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-5">
      <path
        d="m5 5 10 10M15 5 5 15"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function GalleryCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProjectSlug, setActiveProjectSlug] = useState<string | null>(
    null,
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const pointerStartRef = useRef<number | null>(null);
  const didSwipeRef = useRef(false);

  const activeProject = galleryProjects.find(
    (project) => project.slug === activeProjectSlug,
  );
  const featuredProject = galleryProjects[activeSlide];

  function showPreviousSlide() {
    setActiveSlide((current) =>
      current === 0 ? galleryProjects.length - 1 : current - 1,
    );
  }

  function showNextSlide() {
    setActiveSlide((current) =>
      current === galleryProjects.length - 1 ? 0 : current + 1,
    );
  }

  function getCircularOffset(index: number) {
    let offset = index - activeSlide;
    const halfwayPoint = galleryProjects.length / 2;

    if (offset > halfwayPoint) offset -= galleryProjects.length;
    if (offset < -halfwayPoint) offset += galleryProjects.length;

    return offset;
  }

  function openProject(slug: string) {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setActiveProjectSlug(slug);
    setActiveImageIndex(0);
  }

  function closeProject() {
    setActiveProjectSlug(null);
    setActiveImageIndex(0);
    window.setTimeout(() => previousFocusRef.current?.focus(), 0);
  }

  function showPreviousImage() {
    if (!activeProject) return;

    setActiveImageIndex((current) =>
      current === 0 ? activeProject.images.length - 1 : current - 1,
    );
  }

  function showNextImage() {
    if (!activeProject) return;

    setActiveImageIndex((current) =>
      current === activeProject.images.length - 1 ? 0 : current + 1,
    );
  }

  useEffect(() => {
    if (!activeProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeProject();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <div className="relative overflow-hidden py-4 sm:py-8">
        <div
          className="relative h-[25rem] touch-pan-y outline-none sm:h-[34rem] lg:h-[39rem]"
          style={{ perspective: "1400px" }}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Udvalgte Drawlab-projekter"
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") showPreviousSlide();
            if (event.key === "ArrowRight") showNextSlide();
          }}
          onPointerDown={(event) => {
            pointerStartRef.current = event.clientX;
            didSwipeRef.current = false;
          }}
          onPointerUp={(event) => {
            if (pointerStartRef.current === null) return;

            const distance = event.clientX - pointerStartRef.current;
            pointerStartRef.current = null;

            if (Math.abs(distance) < 45) return;

            didSwipeRef.current = true;
            if (distance > 0) showPreviousSlide();
            else showNextSlide();
          }}
          onPointerCancel={() => {
            pointerStartRef.current = null;
          }}
        >
          {galleryProjects.map((project, index) => {
            const offset = getCircularOffset(index);
            const distance = Math.abs(offset);
            const isActive = offset === 0;
            const isVisible = distance <= 2;

            return (
              <button
                key={project.slug}
                type="button"
                tabIndex={isActive ? 0 : -1}
                aria-hidden={!isVisible}
                aria-label={
                  isActive
                    ? `Åbn projektet ${project.title}`
                    : `Vis projektet ${project.title}`
                }
                onClick={() => {
                  if (didSwipeRef.current) {
                    didSwipeRef.current = false;
                    return;
                  }

                  if (isActive) openProject(project.slug);
                  else setActiveSlide(index);
                }}
                className="group absolute top-1/2 left-1/2 aspect-[4/3] w-[78vw] max-w-[44rem] overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0b0b0e] text-left shadow-2xl transition-[transform,opacity,filter] duration-500 ease-out sm:w-[66vw] lg:w-[52vw]"
                style={{
                  transform: `translate(-50%, -50%) translateX(${offset * 54}%) rotateY(${offset * -7}deg) scale(${1 - distance * 0.1})`,
                  opacity: isVisible ? 1 - distance * 0.27 : 0,
                  filter: `brightness(${1 - distance * 0.2})`,
                  zIndex: 20 - distance,
                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                <Image
                  src={project.images[0]}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 78vw, (max-width: 1280px) 66vw, 52vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-transparent" />
                <div
                  className={`absolute right-0 bottom-0 left-0 p-5 transition-opacity duration-300 sm:p-7 ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="text-[0.65rem] font-semibold tracking-[0.18em] text-accent-secondary uppercase">
                    {project.category}
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <h2 className="text-2xl font-semibold tracking-[-0.03em] sm:text-4xl">
                      {project.title}
                    </h2>
                    <span className="shrink-0 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 font-mono text-xs text-white/65 backdrop-blur-md">
                      {project.images.length} billeder
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="relative mx-auto mt-2 flex max-w-3xl items-center justify-between gap-4 px-2 sm:mt-4">
          <button
            type="button"
            onClick={showPreviousSlide}
            aria-label="Forrige projekt"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
          >
            <ChevronIcon direction="left" />
          </button>

          <div className="min-w-0 text-center" aria-live="polite">
            <p className="text-sm font-semibold sm:text-base">
              {featuredProject.title}
            </p>
            <p className="mt-1 text-xs text-muted">
              {activeSlide + 1} / {galleryProjects.length}
            </p>
          </div>

          <button
            type="button"
            onClick={showNextSlide}
            aria-label="Næste projekt"
            className="grid size-11 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>

        <div className="relative mt-6 flex justify-center gap-2">
          {galleryProjects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Vis ${project.title}`}
              aria-current={activeSlide === index ? "true" : undefined}
              className={`h-1.5 rounded-full transition-[width,background-color] duration-300 ${
                activeSlide === index
                  ? "w-7 bg-accent-secondary"
                  : "w-1.5 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {activeProject ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${activeProject.title}, billede ${activeImageIndex + 1} af ${activeProject.images.length}`}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeProject();
          }}
        >
          <div className="relative flex h-full max-h-[56rem] w-full max-w-[90rem] flex-col overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0c0c0f] shadow-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {activeProject.title}
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  {activeImageIndex + 1} / {activeProject.images.length}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeProject}
                aria-label="Luk galleri"
                className="grid size-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10"
              >
                <CloseIcon />
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              <Image
                key={activeProject.images[activeImageIndex]}
                src={activeProject.images[activeImageIndex]}
                alt={`${activeProject.title}, billede ${activeImageIndex + 1}`}
                fill
                sizes="100vw"
                className="object-contain p-2 sm:p-6"
                priority
              />

              {activeProject.images.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPreviousImage}
                    aria-label="Forrige billede"
                    className="absolute top-1/2 left-3 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-black/80 sm:left-5"
                  >
                    <ChevronIcon direction="left" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextImage}
                    aria-label="Næste billede"
                    className="absolute top-1/2 right-3 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-black/55 text-white backdrop-blur-md transition-colors hover:bg-black/80 sm:right-5"
                  >
                    <ChevronIcon direction="right" />
                  </button>
                </>
              ) : null}
            </div>

            <div className="border-t border-white/10 px-4 py-3 sm:px-6 sm:py-4">
              <p className="text-sm leading-6 text-muted">
                {activeProject.description}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

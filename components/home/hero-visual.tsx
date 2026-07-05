"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { ArrowIcon } from "@/components/arrow-icon";

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-18, 18],
  );
  const cardY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [10, -10],
  );

  return (
    <motion.div
      ref={containerRef}
      className="relative mx-auto w-full max-w-2xl lg:mx-0"
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.985 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, delay: 0.08 }}
    >
      <div className="absolute -inset-8 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative aspect-[4/4.3] overflow-hidden rounded-[2rem] border border-white/15 bg-surface shadow-2xl shadow-black/50 sm:aspect-[4/3.6] lg:aspect-[4/4.4]">
        <motion.div className="absolute -inset-y-8 inset-x-0" style={{ y: imageY }}>
          <Image
            src="/images/typehuse.jpg"
            alt="3D-visualisering af et moderne dansk hus"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5" />

        <div className="absolute top-5 left-5 rounded-full border border-white/20 bg-black/45 px-4 py-2 text-xs font-medium backdrop-blur-md">
          Fra skitse til beslutning
        </div>

        <motion.div
          className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-4 rounded-2xl border border-white/15 bg-black/45 p-4 backdrop-blur-lg sm:p-5"
          style={{ y: cardY }}
        >
          <div>
            <p className="text-xs tracking-[0.16em] text-white/60 uppercase">
              Visualisering
            </p>
            <p className="mt-1 text-lg font-semibold">Bolig i balance</p>
          </div>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-black">
            <ArrowIcon />
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}


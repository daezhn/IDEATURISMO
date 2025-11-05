"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ChevronLeft,
  ChevronRight,
  Bus,
  Camera,
  Compass,
  Hotel,
  Leaf,
  MapPin,
  Menu,
  MoonStar,
  Mountain,
  Music,
  Plane,
  Sun,
  UtensilsCrossed,
  X,
} from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
};

export type HeroAttraction = {
  title: string;
  subtitle: string;
  tag: string;
  image: string;
};

export type HospitalitySlide = {
  image: string;
  alt: string;
  description: string;
};

export type NightlifeSpot = {
  name: string;
  vibe: string;
  description: string;
  image: string;
  highlights: string[];
  schedule: string;
};

export type ExperienceIconKey = "leaf" | "mountain" | "camera" | "music";

export type ExperienceData = {
  title: string;
  description: string;
  icon: ExperienceIconKey;
  accent: string;
};

export type Event = {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  location: string;
};

export type Neighborhood = {
  name: string;
  description: string;
  image: string;
};

export type PlanFeatureIconKey = "hotel" | "plane" | "bus" | "compass";

export type PlanFeatureData = {
  title: string;
  description: string;
  icon: PlanFeatureIconKey;
};

export type TravelTip = {
  title: string;
  description: string;
};

export type HomePageProps = {
  heroAttractions: HeroAttraction[];
  hospitalitySlides: HospitalitySlide[];
  nightlifeSpots: NightlifeSpot[];
  seasonalExperiences: ExperienceData[];
  events: Event[];
  neighborhoods: Neighborhood[];
  planFeatures: PlanFeatureData[];
  travelTips: TravelTip[];
  navLinks: NavLink[];
};

const experienceIcons: Record<ExperienceIconKey, LucideIcon> = {
  leaf: Leaf,
  mountain: Mountain,
  camera: Camera,
  music: Music,
};

const planFeatureIcons: Record<PlanFeatureIconKey, LucideIcon> = {
  hotel: Hotel,
  plane: Plane,
  bus: Bus,
  compass: Compass,
};

const foodCategories = [
  {
    title: "Para los más exigentes",
    subtitle: "Alta cocina, maridajes y servicio de autor.",
    image: "/exigentes.png",
  },
  {
    title: "Comer y pasarla bien",
    subtitle: "Ambientes relajados para celebrar entre amigos.",
    image: "/comerbien.png",
  },
  {
    title: "Comida rápida",
    subtitle: "Opciones listas para seguir explorando la ciudad.",
    image: "/comidarapida.png",
  },
  {
    title: "Un snack",
    subtitle: "Antojos dulces y salados para cualquier hora.",
    image: "/snack.png",
  },
] as const;

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.8, 0.25, 1] as const,
    },
  },
  viewport: { once: true, amount: 0.3 },
});

const primaryButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-200";

export default function HomePage({
  heroAttractions,
  hospitalitySlides,
  nightlifeSpots,
  seasonalExperiences,
  events,
  neighborhoods,
  planFeatures,
  travelTips,
  navLinks,
}: HomePageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentHospitalityIndex, setCurrentHospitalityIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (hospitalitySlides.length <= 1) {
      return undefined;
    }
    const intervalId = window.setInterval(() => {
      setCurrentHospitalityIndex((prev) => (prev + 1) % hospitalitySlides.length);
    }, 7000);
    return () => window.clearInterval(intervalId);
  }, [hospitalitySlides.length]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const showNextHospitalitySlide = () => {
    if (hospitalitySlides.length <= 1) {
      return;
    }
    setCurrentHospitalityIndex((prev) => (prev + 1) % hospitalitySlides.length);
  };

  const showPreviousHospitalitySlide = () => {
    if (hospitalitySlides.length <= 1) {
      return;
    }
    setCurrentHospitalityIndex(
      (prev) => (prev - 1 + hospitalitySlides.length) % hospitalitySlides.length,
    );
  };

  const activeHospitalityIndex =
    hospitalitySlides.length > 0
      ? Math.min(currentHospitalityIndex, hospitalitySlides.length - 1)
      : 0;
  const activeHospitalitySlide =
    hospitalitySlides.length > 0 ? hospitalitySlides[activeHospitalityIndex] : undefined;

  return (
    <div
      className="relative min-h-screen overflow-hidden text-slate-900"
      style={{
        backgroundImage:
          "linear-gradient(190deg, rgba(8, 17, 48, 0.96) 0%, rgba(18, 33, 94, 0.88) 20%, rgba(29, 78, 216, 0.62) 42%, rgba(249, 115, 22, 0.28) 62%, rgba(255, 255, 255, 0.97) 80%, #fff9f4 100%), radial-gradient(circle at 14% 18%, rgba(249, 115, 22, 0.5), transparent 55%), radial-gradient(circle at 86% 22%, rgba(29, 78, 216, 0.4), transparent 58%), radial-gradient(circle at 50% 92%, rgba(255, 196, 124, 0.42), transparent 68%), linear-gradient(120deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0.12) 40%, rgba(255, 255, 255, 0.32) 60%, rgba(255, 255, 255, 0) 85%)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-[-18rem] h-[30rem] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_22%_-10%,rgba(255,255,255,0.4),rgba(255,255,255,0)_52%),radial-gradient(circle_at_82%_6%,rgba(255,255,255,0.24),rgba(255,255,255,0)_50%)] opacity-65 mix-blend-screen" />
      <motion.section
        id="que-hacer"
        className="relative min-h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-delicias.jpg"
            alt="Vista aérea de Delicias, Chihuahua"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.7] blur-[1px] scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1f4b]/85 via-[#1d4ed8]/65 to-[#f97316]/55" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0b1f4b]/70 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0b1d45]/60 via-transparent to-transparent" />

        <motion.div
          className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-6 sm:px-10 lg:px-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
        >
          <motion.nav
            className="flex items-center justify-between rounded-full bg-white/10 px-6 py-4 backdrop-blur-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg shadow-blue-500/30">
                <Sun className="h-5 w-5 text-[#f97316]" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  IDEA Turismo
                </p>
                <p className="text-lg font-semibold text-white">
                  Descubre Delicias
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-6 text-sm text-white/80 md:flex">
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              ))}
              <a
                href="#planifica"
                className="rounded-full bg-white px-4 py-2 font-semibold text-blue-900 transition hover:bg-orange-100"
              >
                Planifica tu viaje
              </a>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-white/15 p-2 text-white transition hover:bg-white/30 focus:outline-none focus-visible:ring focus-visible:ring-white/90 md:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="primary-navigation"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">
                {isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
              </span>
            </button>
          </motion.nav>

          <AnimatePresence>
            {isMenuOpen ? (
              <motion.div
                id="primary-navigation"
                initial={{ opacity: 0, y: -16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="relative mt-4 rounded-3xl border border-white/20 bg-white/15 p-6 text-white backdrop-blur-xl md:hidden"
              >
                <nav className="flex flex-col gap-4 text-sm">
                  {navLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 transition hover:bg-white/20"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <a
                    href="#planifica"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-blue-900 transition hover:bg-orange-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Planifica tu viaje
                  </a>
                </nav>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="relative mt-8 grid flex-1 gap-8 pb-4 sm:mt-10 lg:grid-cols-[1.05fr_1.95fr]">
            <motion.div className="flex flex-col justify-center space-y-5 text-white" {...fadeUp(0.1)}>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[42px]">
                ¿Qué hacer en Delicias?
              </h1>
              <p className="text-base text-white/85 sm:text-lg">
                Inspírate, planifica y reserva experiencias memorables. Te guiamos entre
                desierto, sabores de la tierra y noches que nunca duermen.
              </p>
            </motion.div>

            <motion.div className="grid w-full gap-4 sm:grid-cols-2 xl:grid-cols-3" {...fadeUp(0.25)}>
              {heroAttractions.map((attraction, index) => (
                <motion.div
                  key={attraction.title}
                  className="group relative min-h-[7.5rem] overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-500 ease-out transform-gpu hover:shadow-2xl"
                  {...fadeUp(0.3 + index * 0.02)}
                  whileHover={{ scaleX: 1.07 }}
                >
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px"
                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/30 to-transparent transition-opacity duration-500 group-hover:from-[#0f172a]/95 group-hover:via-[#0f172a]/45" />
                  <div className="relative flex h-full flex-col justify-between px-5 py-4 text-white">
                    <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-[5px] text-[10px] font-semibold uppercase tracking-[0.35em] text-orange-100 transition-colors duration-500 group-hover:bg-white/25 group-hover:text-orange-50">
                      {attraction.tag}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold leading-snug sm:text-lg">
                        {attraction.title}
                      </h3>
                      <p className="text-xs text-white/80 sm:text-sm">{attraction.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-40 top-16 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.85, 1.1, 0.85] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.section>

      <motion.section
        id="hoteles"
          className="relative overflow-hidden py-36 text-white"
          {...fadeUp(0)}
        >
          <div className="absolute inset-0">
            <Image
            src="/hoteles.jpg"
            alt="Fachada de hotel en Delicias, Chihuahua"
            fill
            sizes="100vw"
            className="object-cover blur-sm brightness-75 scale-105"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1d45]/85 via-[#1d4ed8]/65 to-[#f97316]/55" />
        </div>
          <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-blue-400/35 blur-3xl" />
          <div className="pointer-events-none absolute -right-28 bottom-6 h-72 w-72 rounded-full bg-orange-400/35 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.35),rgba(255,255,255,0)_55%)] opacity-60" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0b1d45]/70 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fff9f4] via-transparent to-transparent" />
          <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-10 lg:px-16">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.4em] text-orange-200/85">
                Hospedaje
              </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Inspírate con espacios para descansar en Delicias
            </h2>
            <p className="max-w-2xl text-base text-white/85 sm:text-lg">
              Explora vistas y ambientes de la región antes de reservar con los aliados
              oficiales del municipio.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/5 shadow-[0_35px_90px_-50px_rgba(255,255,255,0.55)] backdrop-blur">
            <AnimatePresence mode="wait">
              {hospitalitySlides.length > 0 ? (
                <motion.figure
                  key={activeHospitalitySlide?.image ?? `hospedaje-${activeHospitalityIndex}`}
                  className="relative h-[320px] w-full overflow-hidden sm:h-[380px] lg:h-[420px]"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={activeHospitalitySlide?.image ?? ""}
                    alt={activeHospitalitySlide?.alt ?? "Fotografía de hospedaje en Delicias"}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 960px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                  <figcaption className="absolute bottom-0 w-full px-6 pb-6 text-sm text-white/85 sm:text-base">
                    {activeHospitalitySlide?.description}
                  </figcaption>
                </motion.figure>
              ) : (
                <div className="flex h-[320px] items-center justify-center text-sm text-white/70 sm:h-[380px] lg:h-[420px]">
                  Estamos reuniendo fotografías de hospedajes.
                </div>
              )}
            </AnimatePresence>

            {hospitalitySlides.length > 1 ? (
              <>
                <button
                  type="button"
                  onClick={showPreviousHospitalitySlide}
                  className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur hover:bg-black/60 focus:outline-none focus-visible:ring focus-visible:ring-blue-200/70"
                  aria-label="Ver imagen anterior de hospedajes"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={showNextHospitalitySlide}
                  className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 backdrop-blur hover:bg-black/60 focus:outline-none focus-visible:ring focus-visible:ring-blue-200/70"
                  aria-label="Ver imagen siguiente de hospedajes"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            ) : null}
          </div>

          {hospitalitySlides.length > 1 ? (
            <div className="flex items-center justify-center gap-3">
              {hospitalitySlides.map((slide, slideIndex) => {
                const isActive = slideIndex === activeHospitalityIndex;
                return (
                  <button
                    key={slide.image}
                    type="button"
                    onClick={() => setCurrentHospitalityIndex(slideIndex)}
                    className={`h-3 w-3 rounded-full transition ${isActive ? "bg-white" : "bg-white/40 hover:bg-white/60"}`}
                    aria-label={`Ver imagen ${slideIndex + 1} de hospedajes`}
                    aria-pressed={isActive}
                  />
                );
              })}
            </div>
          ) : null}

          <div className="flex flex-col gap-4 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
            <p>Consulta la oferta completa y reserva a través del portal oficial.</p>
            <a
              href="https://rebrand.ly/HotelesEnDelicias"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900 shadow-lg transition hover:bg-orange-100 focus:outline-none focus-visible:ring focus-visible:ring-white/70"
            >
              Ver hospedajes en Delicias
            </a>
          </div>
        </div>
      </motion.section>

      <main className="relative z-20 mx-auto w-full max-w-6xl space-y-24 px-6 py-24 sm:px-8 lg:px-0">
        <motion.section
          id="gastronomia"
          className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-white/80 px-6 py-16 shadow-[0_45px_100px_-60px_rgba(249,115,22,0.35)] backdrop-blur sm:px-10 lg:px-16"
          {...fadeUp(0)}
        >
          <div className="pointer-events-none absolute -left-16 top-[-8rem] h-64 w-64 rounded-full bg-orange-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-[-6rem] h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.35fr]">
            <div className="space-y-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-600/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-blue-700">
                Gastronomía
              </span>
              <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
                ¿Qué voy a comer hoy?
              </h2>
              <p className="max-w-xl text-lg text-slate-600">
                Saborea Delicias a través de rutas temáticas: alta cocina para los
                paladares exigentes, spots relajados para compartir y antojos listos para
                continuar la aventura.
              </p>
              <Link
                href="#planifica"
                className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-500/10"
              >
                Ver ruta foodie →
              </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {foodCategories.map((category, index) => (
                <motion.figure
                  key={category.title}
                  className="group relative h-64 overflow-hidden rounded-[2.5rem] shadow-[0_25px_70px_-45px_rgba(15,23,42,0.4)]"
                  {...fadeUp(0.1 + index * 0.05)}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-transparent to-blue-500/30 opacity-0 transition group-hover:opacity-80" />
                  <figcaption className="absolute inset-x-0 bottom-0 space-y-2 px-6 pb-6">
                    <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/80">
                      Sabores
                    </span>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                    <p className="text-sm text-white/80">{category.subtitle}</p>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="vida-nocturna"
          className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-gradient-to-br from-[#0b1120] via-[#1d1442] to-[#5b21b6] p-10 text-white shadow-[0_60px_120px_-60px_rgba(124,58,237,0.6)]"
          {...fadeUp(0)}
        >
          <div className="pointer-events-none absolute -left-20 top-[-6rem] h-64 w-64 rounded-full bg-orange-500/25 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_40%_-10%,rgba(255,255,255,0.35),rgba(255,255,255,0)_55%)] opacity-60" />
          <div className="relative z-10 flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.4em] text-blue-200/80">
                Vida nocturna
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Noches que vibran en Delicias
              </h2>
              <p className="max-w-2xl text-lg text-white/80">
                Terrazas, foros íntimos y experiencias sobre el agua. Planifica tu noche según
                el mood.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {nightlifeSpots.map((spot, index) => (
                <motion.article
                  key={spot.name}
                  className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 shadow-[0_30px_80px_-45px_rgba(255,255,255,0.45)] backdrop-blur transition hover:-translate-y-2 hover:shadow-[0_35px_90px_-40px_rgba(255,255,255,0.55)]"
                  {...fadeUp(0.1 + index * 0.1)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/95 via-[#0b1120]/40 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
                      {spot.vibe}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="text-xl font-semibold text-white">{spot.name}</h3>
                    <p className="text-sm text-white/80">{spot.description}</p>
                    <ul className="space-y-2 text-sm text-white/70">
                      {spot.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <Music className="mt-0.5 h-4 w-4 text-orange-300" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-orange-200/80">
                      <span>{spot.schedule}</span>
                      <MoonStar className="h-4 w-4" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="experiencias"
          className="relative overflow-hidden rounded-[3rem] border border-white/15 bg-white/75 p-10 shadow-[0_45px_100px_-60px_rgba(29,78,216,0.3)] backdrop-blur"
          {...fadeUp(0)}
        >
          <div className="pointer-events-none absolute -left-20 top-[-8rem] h-72 w-72 rounded-full bg-blue-200/35 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-blue-700">
                  Temporada
                </span>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Experiencias de temporada
                </h2>
                <p className="mt-2 max-w-xl text-lg text-slate-600">
                  Complementa tu plan con ideas listas para reservar y guiadas por anfitriones
                  certificados.
                </p>
              </div>
              <Link
                href="#planifica"
                className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-500/10"
              >
                Armar itinerario →
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {seasonalExperiences.map((experience, index) => {
                const Icon = experienceIcons[experience.icon];
                return (
                  <motion.article
                    key={experience.title}
                  className="group relative overflow-hidden rounded-[2.25rem] border border-white/60 bg-white/85 shadow-[0_30px_80px_-50px_rgba(29,78,216,0.25)] transition hover:-translate-y-2 hover:shadow-[0_35px_90px_-45px_rgba(29,78,216,0.35)]"
                    {...fadeUp(0.1 + index * 0.1)}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${experience.accent} opacity-80 transition group-hover:opacity-95`}
                    />
                    <div className="relative z-10 flex h-full flex-col gap-6 p-8">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-2xl font-semibold text-slate-900">
                          {experience.title}
                        </h3>
                      </div>
                      <p className="text-base text-slate-700">{experience.description}</p>
                      <Link
                        href="#planifica"
                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:opacity-80"
                      >
                        Saber más →
                      </Link>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="eventos"
          className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-white/75 p-10 shadow-[0_45px_100px_-60px_rgba(22,101,52,0.35)] backdrop-blur"
          {...fadeUp(0)}
        >
          <div className="pointer-events-none absolute -right-24 top-[-10rem] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.4em] text-blue-700">
                Agenda
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Próximos eventos imprescindibles
              </h2>
              <p className="max-w-2xl text-lg text-slate-600">
                Compra boletos con anticipación y asegura lugar en las actividades más
                esperadas del mes.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {events.map((event, index) => (
                <motion.article
                  key={event.title}
                  className="group flex flex-col overflow-hidden rounded-[2.25rem] border border-blue-100/70 bg-white/85 shadow-[0_30px_80px_-50px_rgba(29,78,216,0.25)] transition hover:-translate-y-2 hover:shadow-[0_35px_90px_-45px_rgba(29,78,216,0.35)]"
                  {...fadeUp(0.1 + index * 0.1)}
                >
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
                      {event.category}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <time className="text-sm font-semibold text-blue-600">
                      {event.date}
                    </time>
                    <h3 className="text-2xl font-semibold text-slate-900">{event.title}</h3>
                    <p className="flex-1 text-sm text-slate-600">{event.description}</p>
                    <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <MapPin className="h-4 w-4 text-blue-500" />
                      {event.location}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="barrios"
          className="relative overflow-hidden rounded-[3rem] border border-white/20 bg-white/75 p-10 shadow-[0_40px_90px_-55px_rgba(30,64,175,0.35)] backdrop-blur"
          {...fadeUp(0)}
        >
          <div className="pointer-events-none absolute -left-12 bottom-[-6rem] h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="relative z-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.4em] text-blue-700">
                Barrios
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Zonas que definen el carácter de Delicias
              </h2>
              <p className="max-w-2xl text-lg text-slate-600">
                Inspírate con estas áreas y conecta con anfitriones locales que te ayudarán a
                sacarle jugo a cada visita.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {neighborhoods.map((neighborhood, index) => (
                <motion.article
                  key={neighborhood.name}
                  className="group relative overflow-hidden rounded-[2.25rem] border border-white/25 bg-slate-900 text-white shadow-[0_30px_80px_-50px_rgba(30,64,175,0.5)] transition hover:-translate-y-2 hover:shadow-[0_35px_90px_-45px_rgba(30,64,175,0.55)]"
                  {...fadeUp(0.1 + index * 0.1)}
                >
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1228]/95 via-[#0b1228]/45 to-transparent" />
                  <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-8">
                    <span className="text-xs uppercase tracking-[0.4em] text-orange-200/80">
                      Explora
                    </span>
                    <h3 className="text-2xl font-semibold">{neighborhood.name}</h3>
                    <p className="text-sm text-white/80">{neighborhood.description}</p>
                    <Link
                      href="#planifica"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-200 transition hover:text-orange-100"
                    >
                      Ver mapa y experiencias →
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="planifica"
          className="relative grid gap-8 rounded-[3rem] border border-white/20 bg-white/80 p-10 shadow-[0_40px_90px_-55px_rgba(29,78,216,0.3)] backdrop-blur md:grid-cols-[2fr_3fr]"
          {...fadeUp(0)}
        >
          <div className="pointer-events-none absolute -right-16 top-[-6rem] h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
              Planifica con IDEA Turismo
            </h2>
            <p className="text-lg text-slate-600">
              Centralizamos información oficial, datos en tiempo real y la voz de la
              comunidad para ayudarte a tomar decisiones inteligentes.
            </p>
            <ul className="space-y-4 text-sm text-slate-600">
              {travelTips.map((tip) => (
                <li
                  key={tip.title}
                  className="flex items-start gap-3 rounded-2xl border border-blue-200/70 bg-white/80 p-4 shadow-[0_20px_40px_-30px_rgba(29,78,216,0.35)]"
                >
                  <Sun className="mt-1 h-5 w-5 flex-none text-orange-500" />
                  <div>
                    <p className="font-semibold text-slate-900">{tip.title}</p>
                    <p className="text-sm text-slate-600">{tip.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 grid gap-4 sm:grid-cols-2">
            {planFeatures.map((feature, index) => {
              const Icon = planFeatureIcons[feature.icon];
              return (
                <motion.article
                  key={feature.title}
                  className="flex h-full flex-col gap-4 rounded-[2rem] border border-white/60 bg-white/85 p-6 shadow-[0_30px_70px_-45px_rgba(29,78,216,0.28)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(29,78,216,0.33)]"
                  {...fadeUp(0.1 + index * 0.1)}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-inner">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                  <Link
                    href="#contacto"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-500"
                  >
                    Habla con un asesor →
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          className="relative grid gap-8 rounded-[3rem] border border-white/20 bg-white/80 p-10 shadow-[0_40px_90px_-55px_rgba(55,48,163,0.3)] backdrop-blur md:grid-cols-[3fr_2fr]"
          {...fadeUp(0)}
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 text-white shadow-[0_30px_80px_-50px_rgba(55,48,163,0.45)]">
            <Image
              src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1600&q=80"
              alt="Mapa nocturno de la ciudad"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/70" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-8">
              <div className="max-w-xl space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-orange-200">
                  Próximamente
                </span>
                <h2 className="text-3xl font-semibold">Mapa interactivo de experiencias</h2>
                <p className="text-sm text-white/80">
                  Visualiza rutas en vivo, disponibilidad de actividades y tiempos de
                  traslado. Integración con Google Maps y filtros personalizados para
                  viajeros.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-medium text-white/80">
                <span className="rounded-full bg-white/10 px-4 py-2">
                  Geolocalización en vivo
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2">
                  Listas colaborativas
                </span>
                <span className="rounded-full bg-white/10 px-4 py-2">
                  Widgets para hoteles
                </span>
              </div>
            </div>
          </div>

          <div
            id="contacto"
            className="flex h-full flex-col justify-between gap-6 rounded-[2.5rem] border border-white/60 bg-white/85 p-8 shadow-[0_30px_70px_-45px_rgba(29,78,216,0.28)]"
          >
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                ¿Quieres recibir novedades de IDEA Turismo?
              </h2>
              <p className="text-sm text-slate-600">
                Suscríbete a nuestro boletín mensual con noticias, convocatorias y
                herramientas para potenciar tu viaje o proyecto turístico.
              </p>
            </div>
            <form className="space-y-3" aria-label="Formulario de suscripción a novedades">
              <div className="space-y-1">
                <label
                  htmlFor="newsletter-name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Nombre
                </label>
                <input
                  id="newsletter-name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="newsletter-email"
                  className="block text-sm font-medium text-slate-700"
                >
                  Correo electrónico
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className={primaryButtonClasses}
              >
                Mantenerme al día
              </button>
            </form>
            <div className="space-y-2 text-sm text-slate-500">
              <p className="font-semibold text-slate-700">Contacto directo</p>
              <p>WhatsApp: +52 639 100 03 14</p>
              <p>Email: turismo@delicias.gob.mx</p>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <div className="space-y-2 text-sm text-slate-600">
            <p className="text-xl font-semibold text-slate-900">IDEA Turismo Delicias</p>
            <p>
              Círculo del Reloj Público Ote. 1, Col. Centro, Delicias, Chihuahua
            </p>
            <p>Teléfono conmutador: (639) 470 86 00</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:text-right">
            <p>
              © {new Date().getFullYear()} Municipio de Delicias. Todos los derechos
              reservados.
            </p>
            <p className="text-xs">
              Plataforma en construcción: datos y fotografías referenciales.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

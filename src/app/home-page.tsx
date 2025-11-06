"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Bus,
  Camera,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
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
  initial: { opacity: 0, y: 28 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
  viewport: { once: true, margin: "-80px" },
});

const primaryButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus-visible:ring focus-visible:ring-blue-200";

const secondaryButtonClasses =
  "inline-flex items-center justify-center gap-2 rounded-full border border-blue-200 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-200";

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
  const [activeFoodIndex, setActiveFoodIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setActiveFoodIndex(null);
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
    document.body.style.overflow = isMenuOpen || activeFoodIndex !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, activeFoodIndex]);

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

  const activeFoodEntry =
    activeFoodIndex !== null ? foodCategories[activeFoodIndex] : null;

  const featuredFoodEntry = activeFoodEntry ?? foodCategories[0];

  return (
    <div className="bg-gradient-to-b from-white via-amber-50/40 to-white text-blue-900">
      <header className="sticky top-0 z-30 border-b border-orange-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-white shadow-sm">
              <Sun className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-500">Idea Turismo</p>
              <p className="text-lg font-semibold text-orange-500">Delicias, Chihuahua</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-orange-500 md:flex">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-blue-800">
                {item.label}
              </Link>
            ))}
            <a
              href="#planifica"
              className="inline-flex items-center justify-center rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Planifica tu viaje
            </a>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full bg-blue-700 p-2 text-white transition hover:bg-blue-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-200 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">
              {isMenuOpen ? "Cerrar navegación" : "Abrir navegación"}
            </span>
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen ? (
            <motion.nav
              id="primary-navigation"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="mx-6 mt-2 rounded-3xl border border-orange-200 bg-white p-6 text-orange-500 shadow-lg md:hidden"
            >
              <div className="flex flex-col gap-4 text-sm font-medium">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-2xl bg-orange-50 px-4 py-2 transition hover:bg-orange-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <a
                  href="#planifica"
                  className="inline-flex items-center justify-center rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Planifica tu viaje
                </a>
              </div>
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </header>

      <main className="space-y-24 pb-24">
        <motion.section
          id="que-hacer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden bg-blue-900 text-white"
        >
          <Image
            src="/hero-delicias.jpg"
            alt="Vista aérea de Delicias, Chihuahua"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-blue-900/85" />
          <div className="relative mx-auto flex h-screen max-w-6xl flex-col justify-center gap-16 px-6 py-24 sm:px-10 lg:px-16">
            <motion.div className="max-w-4xl space-y-10" {...fadeUp(0.05)}>
              <div className="space-y-6 text-orange-100">
                <div className="space-y-4">
                  <h1 className="text-5xl font-semibold leading-tight text-orange-200 sm:text-[60px] sm:leading-[1.05]">
                    Vive la cultura, los sabores y la energía de Delicias.
                  </h1>
                  <p className="text-lg text-orange-100 sm:text-xl">
                    Inspirados en las capitales creativas, curamos itinerarios, eventos y experiencias auténticas para tu siguiente visita.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
          {...fadeUp(0.05)}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-orange-500">
                Experiencias de temporada
              </span>
              <h2 className="text-3xl font-semibold text-orange-600 sm:text-4xl">Programas que no te puedes perder</h2>
              <p className="mt-3 max-w-2xl text-base text-blue-900">
                Curamos actividades guiadas y eventos que cambian con la estación. Inspírate y
                reserva con operadores autorizados.
              </p>
            </div>
            <Link
              href="#planifica"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Ver todas las experiencias →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {seasonalExperiences.map((experience, index) => {
              const Icon = experienceIcons[experience.icon];
              return (
                <motion.article
                  key={experience.title}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
                  {...fadeUp(0.1 + index * 0.05)}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${experience.accent}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-600">{experience.title}</h3>
                  <p className="text-sm text-blue-900">{experience.description}</p>
                  <button
                    type="button"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-500"
                  >
                    Detalles y reservas →
                  </button>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section
          id="hoteles"
          className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
          {...fadeUp(0.05)}
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-5">
              <span className="text-xs uppercase tracking-[0.4em] text-orange-500">
                Hospedaje aliado
              </span>
              <h2 className="text-3xl font-semibold text-orange-600 sm:text-4xl">
                Descansa en hoteles certificados de Delicias
              </h2>
              <p className="text-base text-blue-900">
                Elegimos opciones con altos estándares de servicio, cercanos a atracciones
                clave y con facilidades para tu itinerario.
              </p>
              <ul className="list-inside list-disc space-y-2 text-sm text-blue-900">
                <li>Fotografías verificadas y descripciones curadas por el equipo municipal.</li>
                <li>Reserva directa con aliados locales y paquetes oficiales.</li>
                <li>Actualizamos disponibilidad y promociones cada semana.</li>
              </ul>
              <a
                href="https://rebrand.ly/HotelesEnDelicias"
                target="_blank"
                rel="noreferrer"
                className={primaryButtonClasses}
              >
                Ver alojamientos disponibles
              </a>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm">
              <AnimatePresence mode="wait">
                {hospitalitySlides.length > 0 ? (
                  <motion.figure
                    key={activeHospitalitySlide?.image ?? `hospedaje-${activeHospitalityIndex}`}
                    className="relative h-[360px] w-full overflow-hidden sm:h-[420px]"
                    initial={{ opacity: 0.6, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.2, scale: 1.02 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image
                      src={activeHospitalitySlide?.image ?? ""}
                      alt={activeHospitalitySlide?.alt ?? "Fotografía de hospedaje en Delicias"}
                      fill
                      sizes="(max-width: 1024px) 100vw, 640px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/75 via-blue-900/20 to-transparent" />
                    <figcaption className="absolute inset-x-0 bottom-0 px-6 pb-6 text-sm text-white/85">
                      {activeHospitalitySlide?.description}
                    </figcaption>
                  </motion.figure>
                ) : (
                  <div className="flex h-[360px] items-center justify-center text-sm text-blue-600 sm:h-[420px]">
                    Estamos reuniendo fotografías de hospedajes.
                  </div>
                )}
              </AnimatePresence>

              {hospitalitySlides.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={showPreviousHospitalitySlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-blue-700 shadow transition hover:bg-white"
                    aria-label="Ver imagen anterior de hospedajes"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextHospitalitySlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 text-blue-700 shadow transition hover:bg-white"
                    aria-label="Ver imagen siguiente de hospedajes"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              ) : null}

              {hospitalitySlides.length > 1 ? (
                <div className="flex items-center justify-center gap-2 px-6 py-4">
                  {hospitalitySlides.map((slide, slideIndex) => {
                    const isActive = slideIndex === activeHospitalityIndex;
                    return (
                      <button
                        key={slide.image}
                        type="button"
                        onClick={() => setCurrentHospitalityIndex(slideIndex)}
                        className={`h-2.5 w-2.5 rounded-full transition ${
                          isActive ? "bg-blue-700" : "bg-blue-200 hover:bg-blue-300"
                        }`}
                        aria-label={`Ver imagen ${slideIndex + 1} de hospedajes`}
                        aria-pressed={isActive}
                      />
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="gastronomia"
          className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
          {...fadeUp(0.05)}
        >
          <div className="rounded-3xl border border-blue-100 bg-white p-10 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-[0.4em] text-orange-500">
                    Gastronomía
                  </span>
                  <h2 className="text-3xl font-semibold text-orange-600 sm:text-4xl">
                    ¿Qué voy a comer hoy en Delicias?
                  </h2>
                  <p className="max-w-2xl text-base text-blue-900">
                    Desde cocinas de autor hasta antojitos rápidos. Explora nuestras categorías y
                    abre la selección para ver el menú en alta resolución.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {foodCategories.map((category, index) => (
                    <button
                      key={category.title}
                      type="button"
                      onClick={() => setActiveFoodIndex(index)}
                      className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-3xl border border-blue-200 bg-blue-900/85 p-5 text-left text-white transition hover:-translate-y-1 hover:shadow-lg focus:outline-none focus-visible:ring focus-visible:ring-blue-400 sm:h-48"
                    >
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className={`object-cover opacity-70 transition duration-500 group-hover:opacity-90 ${
                          category.title === "Un snack" ? "object-[5%_50%]" : "object-center"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent" />
                      <div className="relative z-10 space-y-1">
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                        <p className="text-sm text-white/70">{category.subtitle}</p>
                      </div>
                      <span className="relative z-10 mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                        Ver menú →
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-6 rounded-2xl border border-orange-200 bg-orange-50/60 p-5 text-xs font-semibold uppercase tracking-[0.35em] text-orange-500">
                  <span>Distintivo Punto Limpio</span>
                  <span>Programa Moderniza</span>
                  <span>Productores locales</span>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-900/85 text-white shadow-md">
                <Image
                  src={featuredFoodEntry.image}
                  alt={featuredFoodEntry.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-contain p-6"
                />
                <div className="absolute inset-x-0 bottom-0 space-y-2 px-8 pb-8">
                  <span className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-white/75">
                    Selección destacada
                  </span>
                  <h3 className="text-2xl font-semibold">{featuredFoodEntry.title}</h3>
                  <p className="text-sm text-white/70">{featuredFoodEntry.subtitle}</p>
                  <p className="text-xs text-white/60">
                    Consulta disponibilidad con nuestros aliados gastronómicos oficiales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="agenda"
          className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
          {...fadeUp(0.05)}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-orange-500">
                Agenda oficial
              </span>
              <h2 className="text-3xl font-semibold text-orange-600 sm:text-4xl">Eventos y festivales</h2>
              <p className="mt-3 max-w-2xl text-base text-blue-900">
                Vive conciertos, rutas guiadas, muestras gastronómicas y mucho más. Actualizamos
                cada semana con programación oficial.
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Recibir boletín →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {events.map((event, index) => (
              <motion.article
                key={event.title}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-md"
                {...fadeUp(0.1 + index * 0.05)}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover"
                  />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/20 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white">
                    {event.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-orange-600">{event.title}</h3>
                    <p className="text-sm text-blue-900">{event.description}</p>
                  </div>
                  <div className="mt-auto space-y-2 text-sm text-blue-900">
                    <p className="inline-flex items-center gap-2 text-blue-800">
                      <CalendarDays className="h-4 w-4 text-orange-500" />
                      {event.date}
                    </p>
                    <p className="inline-flex items-center gap-2 text-blue-800">
                      <MapPin className="h-4 w-4 text-orange-500" />
                      {event.location}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="vida-nocturna"
          className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
          {...fadeUp(0.05)}
        >
          <div className="rounded-3xl border border-blue-100 bg-white p-10 shadow-sm">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-xs uppercase tracking-[0.4em] text-orange-500">Vida nocturna</span>
                <h2 className="text-3xl font-semibold text-orange-600 sm:text-4xl">
                  Noches que vibran en Delicias
                </h2>
              </div>
              <p className="max-w-xl text-sm text-blue-900">
                Terrazas, cócteles de autor y foros íntimos con música en vivo. Elige tu vibe y arma
                tu ruta nocturna.
              </p>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {nightlifeSpots.map((spot, index) => (
                <motion.article
                  key={spot.name}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-blue-200 bg-blue-900 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  {...fadeUp(0.1 + index * 0.05)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover opacity-90 transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent" />
                    <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                      {spot.vibe}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h3 className="text-xl font-semibold">{spot.name}</h3>
                    <p className="text-sm text-white/80">{spot.description}</p>
                    <ul className="space-y-2 text-sm text-white/70">
                      {spot.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <Music className="mt-0.5 h-4 w-4 text-orange-300" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-white/60">
                      <MoonStar className="h-4 w-4" />
                      {spot.schedule}
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="barrios"
          className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
          {...fadeUp(0.05)}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-orange-500">Rutas y barrios</span>
              <h2 className="text-3xl font-semibold text-orange-600 sm:text-4xl">
                Explora las zonas que definen Delicias
              </h2>
            </div>
            <Link
              href="#planifica"
              className="inline-flex items-center justify-center rounded-full border border-blue-200 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              Consultar mapa →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {neighborhoods.map((neighborhood, index) => (
              <motion.article
                key={neighborhood.name}
                className="relative overflow-hidden rounded-3xl border border-blue-200 bg-blue-900 text-white shadow-sm transition hover:shadow-lg"
                {...fadeUp(0.1 + index * 0.05)}
              >
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 480px"
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/30 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-6">
                  <span className="text-xs uppercase tracking-[0.35em] text-white/70">Explora</span>
                  <h3 className="text-2xl font-semibold">{neighborhood.name}</h3>
                  <p className="text-sm text-white/75">{neighborhood.description}</p>
                  <Link
                    href="#planifica"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-white/80"
                  >
                    Ver recomendaciones →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          {heroAttractions.length > 0 ? (
            <div className="mt-12 space-y-4">
              <h3 className="text-xl font-semibold text-orange-600 sm:text-2xl">
                Espacios culturales y recreativos
              </h3>
              <p className="max-w-3xl text-sm text-blue-900">
                Museos, centros creativos y recintos escénicos para complementar tu ruta por los barrios.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {heroAttractions.map((attraction, index) => (
                  <motion.article
                    key={attraction.title}
                    className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                    {...fadeUp(0.1 + index * 0.05)}
                  >
                    <Image
                      src={attraction.image}
                      alt={attraction.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="absolute inset-0 -z-10 object-cover opacity-25 transition duration-500 group-hover:opacity-35"
                    />
                    <div className="relative z-10 flex h-full flex-col justify-between gap-3">
                      <span className="inline-flex w-fit items-center rounded-full bg-orange-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.4em] text-orange-700">
                        {attraction.tag}
                      </span>
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-orange-600">{attraction.title}</h4>
                        <p className="text-sm text-blue-900">{attraction.subtitle}</p>
                      </div>
                      <Link
                        href="#planifica"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-500"
                      >
                        Ver cómo visitarlo →
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          ) : null}
        </motion.section>

        <motion.section
          id="planifica"
          className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
          {...fadeUp(0.05)}
        >
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 rounded-3xl border border-blue-100 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-semibold text-orange-600 sm:text-4xl">
                Planifica con Idea Turismo
              </h2>
              <p className="text-base text-blue-900">
                Centralizamos datos oficiales y recomendaciones locales para construir un itinerario
                inteligente. Personaliza tu visita con nuestro equipo.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {planFeatures.map((feature) => {
                  const Icon = planFeatureIcons[feature.icon];
                  return (
                    <div
                      key={feature.title}
                      className="flex h-full flex-col gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-orange-600">{feature.title}</h3>
                      <p className="text-sm text-blue-900">{feature.description}</p>
                      <Link
                        href="#contacto"
                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-500"
                      >
                        Hablar con un asesor →
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-4 rounded-3xl border border-blue-100 bg-white p-10 shadow-sm">
              <h3 className="text-2xl font-semibold text-orange-600">Tips del equipo local</h3>
              <p className="text-sm text-blue-900">
                Lo que necesitas saber antes de llegar. Información logística, clima y cultura.
              </p>
              <ul className="space-y-4 text-sm text-blue-900">
                {travelTips.map((tip) => (
                  <li key={tip.title} className="flex gap-3 rounded-2xl border border-orange-200 bg-orange-50 p-4">
                    <Sun className="mt-1 h-5 w-5 flex-none text-orange-500" />
                    <div>
                      <p className="font-semibold text-orange-600">{tip.title}</p>
                      <p>{tip.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contacto"
          className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16"
          {...fadeUp(0.05)}
        >
          <div className="grid gap-10 rounded-3xl border border-blue-100 bg-white p-10 shadow-sm md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-orange-600 sm:text-4xl">
                Mantente al día
              </h2>
              <p className="text-base text-blue-900">
                Recibe la agenda oficial, lanzamientos y promociones especiales directamente en tu
                correo. Sin spam, solo novedades de Delicias.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium text-orange-500" htmlFor="newsletter-name">
                      Nombre completo
                    </label>
                    <input
                      id="newsletter-name"
                      type="text"
                      name="name"
                      placeholder="Nombre y apellidos"
                      className="mt-1 w-full rounded-2xl border border-blue-200 px-4 py-3 text-sm text-blue-900 shadow-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-500" htmlFor="newsletter-email">
                      Correo electrónico
                    </label>
                    <input
                      id="newsletter-email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="tucorreo@ejemplo.com"
                      className="mt-1 w-full rounded-2xl border border-blue-200 px-4 py-3 text-sm text-blue-900 shadow-sm focus:border-blue-600 focus:outline-none"
                    />
                  </div>
                </div>
                <button type="submit" className={primaryButtonClasses}>
                  Suscribirme
                </button>
              </form>
            </div>
            <div className="space-y-6 rounded-2xl border border-orange-200 bg-orange-50 p-6 text-sm text-blue-900">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-orange-500">
                  Contacto directo
                </p>
                <p className="mt-2 text-base font-semibold text-orange-600">IDEA Turismo · Municipalidad de Delicias</p>
              </div>
              <div className="space-y-2">
                <p>Tel. (639) 100 03 14</p>
                <p>Correo: turismo@delicias.gob.mx</p>
                <p>Dirección: Av. Del Parque 120, Zona Centro</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-orange-500">
                  Horario de atención
                </p>
                <p>Lunes a viernes · 9:00 a 17:00 hrs</p>
                <p>Sábados · 10:00 a 14:00 hrs</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <AnimatePresence>
        {activeFoodEntry ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/75 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveFoodIndex(null)}
          >
            <motion.figure
              className="relative mx-4 flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-[2.5rem] bg-blue-900 p-6 shadow-[0_40px_120px_-60px_rgba(11,60,193,0.55)]"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveFoodIndex(null)}
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring focus-visible:ring-white/40"
                aria-label="Cerrar detalle gastronómico"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="relative flex min-h-[60vh] w-full items-center justify-center overflow-hidden rounded-2xl bg-blue-950/60">
                <Image
                  src={activeFoodEntry.image}
                  alt={activeFoodEntry.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="mt-6 space-y-2 text-center text-white">
                <h3 className="text-2xl font-semibold">{activeFoodEntry.title}</h3>
                <p className="text-sm text-white/70">{activeFoodEntry.subtitle}</p>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <footer className="border-t border-orange-200 bg-white py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-orange-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <p>
            © {new Date().getFullYear()} Instituto de Desarrollo Económico y Agropecuario (IDEA) · Delicias.
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#contacto" className="transition hover:text-blue-700">
              Contacto
            </a>
            <a href="#planifica" className="transition hover:text-blue-700">
              Planifica tu viaje
            </a>
            <a href="#agenda" className="transition hover:text-blue-700">
              Agenda
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

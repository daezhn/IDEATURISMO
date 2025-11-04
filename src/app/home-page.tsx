"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
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
  ShieldCheck,
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

export type HotelOption = {
  name: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
};

export type FoodSpot = {
  name: string;
  style: string;
  description: string;
  image: string;
  specialties: string[];
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
  hotels: HotelOption[];
  foodSpots: FoodSpot[];
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

export default function HomePage({
  heroAttractions,
  hotels,
  foodSpots,
  nightlifeSpots,
  seasonalExperiences,
  events,
  neighborhoods,
  planFeatures,
  travelTips,
  navLinks,
}: HomePageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#f6f3ed] text-slate-900">
      <motion.section
        id="que-hacer"
        className="relative overflow-hidden"
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#1f2937]/65 to-[#4c1d95]/55" />
        </div>

        <motion.div
          className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col px-6 pb-24 pt-6 sm:px-10 lg:px-16"
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
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg shadow-purple-500/30">
                <Sun className="h-5 w-5 text-[#d97706]" />
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
                className="rounded-full bg-white px-4 py-2 font-semibold text-slate-900 transition hover:bg-amber-200"
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
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-slate-900 transition hover:bg-amber-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Planifica tu viaje
                  </a>
                </nav>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="relative mt-8 flex flex-1 flex-col justify-center gap-6 pb-4 sm:mt-10">
            <motion.div className="max-w-2xl space-y-5 text-white" {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.35em] text-emerald-200/80 backdrop-blur-md">
                <BadgeCheck className="h-4 w-4" />
                Curado por el equipo IDEA
              </div>
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[42px]">
                ¿Qué hacer en Delicias?
              </h1>
              <p className="text-base text-white/85 sm:text-lg">
                Inspírate, planifica y reserva experiencias memorables. Te guiamos entre
                desierto, sabores de la tierra y noches que nunca duermen.
              </p>
            </motion.div>

            <motion.div
              className="mx-auto flex w-full max-w-[520px] flex-col gap-1.5"
              {...fadeUp(0.25)}
            >
              {heroAttractions.map((attraction, index) => (
                <motion.div
                  key={attraction.title}
                  className="group relative h-[4.6rem] overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg transition-transform duration-500 ease-out transform-gpu hover:shadow-2xl"
                  {...fadeUp(0.3 + index * 0.02)}
                  whileHover={{ scaleX: 1.07 }}
                >
                  <Image
                    src={attraction.image}
                    alt={attraction.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.15]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-[#0f172a]/30 to-transparent transition-opacity duration-500 group-hover:from-[#0f172a]/95 group-hover:via-[#0f172a]/45" />
                  <div className="relative flex h-full flex-col justify-between px-4 py-3 text-white">
                    <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-[4px] text-[9px] font-semibold uppercase tracking-[0.35em] text-emerald-100 transition-colors duration-500 group-hover:bg-white/25 group-hover:text-emerald-50">
                      {attraction.tag}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold leading-snug sm:text-[15px]">
                        {attraction.title}
                      </h3>
                      <p className="text-[11px] text-white/80 sm:text-xs">{attraction.subtitle}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-emerald-400/25 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="pointer-events-none absolute -right-40 top-16 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl"
            animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.85, 1.1, 0.85] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.section>

      <main className="mx-auto max-w-6xl space-y-24 px-6 py-20 sm:px-10 lg:px-16">
        <motion.section id="hoteles" className="space-y-8" {...fadeUp(0)}>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-emerald-700">
              Hospedaje
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Hoteles que elevan tu estancia
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              Diseño, confort y experiencias únicas. Reserva con aliados de IDEA Turismo y
              recibe upgrades especiales.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {hotels.map((hotelOption, index) => (
              <motion.article
                key={hotelOption.name}
                className="group overflow-hidden rounded-4xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                {...fadeUp(0.1 + index * 0.1)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={hotelOption.image}
                    alt={hotelOption.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 shadow">
                    {hotelOption.category}
                  </div>
                </div>
                <div className="space-y-4 bg-white p-7">
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {hotelOption.name}
                  </h3>
                  <p className="text-sm text-slate-600">{hotelOption.description}</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {hotelOption.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#planifica"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-500"
                  >
                    Quiero reservar →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="gastronomia"
          className="space-y-8 rounded-4xl bg-gradient-to-r from-white via-white to-emerald-100/60 p-8 shadow-xl"
          {...fadeUp(0)}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-emerald-700">
                Gastronomía
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">¿Qué voy a comer hoy?</h2>
              <p className="mt-2 max-w-xl text-lg text-slate-600">
                Desde mercados creativos hasta cocinas de temporal. Sigue el rastro de la
                nuez, el sotol y las recetas de casa.
              </p>
            </div>
            <Link
              href="#planifica"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
            >
              Ver ruta foodie →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {foodSpots.map((spot, index) => (
              <motion.article
                key={spot.name}
                className="flex flex-col overflow-hidden rounded-3xl border border-emerald-200/50 bg-white shadow-lg transition hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl"
                {...fadeUp(0.1 + index * 0.1)}
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
                    {spot.style}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{spot.name}</h3>
                  <p className="text-sm text-slate-600">{spot.description}</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    {spot.specialties.map((specialty) => (
                      <li key={specialty} className="flex items-start gap-2">
                        <UtensilsCrossed className="mt-0.5 h-4 w-4 text-emerald-500" />
                        <span>{specialty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="vida-nocturna" className="space-y-8" {...fadeUp(0)}>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-purple-700">
              Vida nocturna
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">Noches que vibran en Delicias</h2>
            <p className="max-w-2xl text-lg text-slate-600">
              Terrazas, foros íntimos y experiencias sobre el agua. Planifica tu noche según
              el mood.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {nightlifeSpots.map((spot, index) => (
              <motion.article
                key={spot.name}
                className="group flex h-full flex-col overflow-hidden rounded-4xl bg-slate-900 text-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
                {...fadeUp(0.1 + index * 0.1)}
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={spot.image}
                    alt={spot.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
                    {spot.vibe}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-xl font-semibold">{spot.name}</h3>
                  <p className="text-sm text-white/80">{spot.description}</p>
                  <ul className="space-y-2 text-sm text-white/70">
                    {spot.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <Music className="mt-0.5 h-4 w-4 text-emerald-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                    <span>{spot.schedule}</span>
                    <MoonStar className="h-4 w-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="experiencias"
          className="space-y-8 rounded-4xl bg-white p-8 shadow-2xl shadow-slate-900/5"
          {...fadeUp(0)}
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-emerald-700">
                Temporada
              </span>
              <h2 className="text-3xl font-semibold sm:text-4xl">Experiencias de temporada</h2>
              <p className="mt-2 max-w-xl text-lg text-slate-600">
                Complementa tu plan con ideas listas para reservar y guiadas por anfitriones
                certificados.
              </p>
            </div>
            <Link
              href="#planifica"
              className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
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
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
                  {...fadeUp(0.1 + index * 0.1)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${experience.accent} opacity-70 transition group-hover:opacity-90`}
                  />
                  <div className="relative z-10 flex h-full flex-col gap-6 p-8">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {experience.title}
                      </h3>
                    </div>
                    <p className="text-base text-slate-700">{experience.description}</p>
                    <Link
                      href="#planifica"
                      className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                    >
                      Saber más →
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section id="eventos" className="space-y-8" {...fadeUp(0)}>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-emerald-700">
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
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
                    {event.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <time className="text-sm font-semibold text-emerald-600">
                    {event.date}
                  </time>
                  <h3 className="text-2xl font-semibold text-slate-900">{event.title}</h3>
                  <p className="flex-1 text-sm text-slate-600">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <MapPin className="h-4 w-4 text-emerald-500" />
                    {event.location}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section id="barrios" className="space-y-8" {...fadeUp(0)}>
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-emerald-700">
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
                className="group relative overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl"
                {...fadeUp(0.1 + index * 0.1)}
              >
                <Image
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-8">
                  <span className="text-xs uppercase tracking-[0.4em] text-emerald-200/80">
                    Explora
                  </span>
                  <h3 className="text-2xl font-semibold">{neighborhood.name}</h3>
                  <p className="text-sm text-white/80">{neighborhood.description}</p>
                  <Link
                    href="#planifica"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-emerald-200 hover:text-emerald-100"
                  >
                    Ver mapa y experiencias →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="planifica"
          className="grid gap-8 rounded-4xl bg-gradient-to-br from-emerald-100 via-white to-amber-50 p-8 shadow-xl md:grid-cols-[2fr_3fr]"
          {...fadeUp(0)}
        >
          <div className="space-y-6">
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
                  className="flex items-start gap-3 rounded-2xl border border-emerald-200/60 bg-white/70 p-4 shadow-sm"
                >
                  <Sun className="mt-1 h-5 w-5 flex-none text-emerald-500" />
                  <div>
                    <p className="font-semibold text-slate-900">{tip.title}</p>
                    <p className="text-sm text-slate-600">{tip.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {planFeatures.map((feature, index) => {
              const Icon = planFeatureIcons[feature.icon];
              return (
                <motion.article
                  key={feature.title}
                  className="flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                  {...fadeUp(0.1 + index * 0.1)}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                  <Link
                    href="#contacto"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
                  >
                    Habla con un asesor →
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </motion.section>

        <motion.section className="grid gap-6 md:grid-cols-[3fr_2fr]" {...fadeUp(0)}>
          <div className="relative overflow-hidden rounded-4xl bg-slate-900 text-white">
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
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
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
            className="flex h-full flex-col justify-between gap-6 rounded-4xl bg-white p-8 shadow-xl"
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
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-emerald-400 focus:outline-none"
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
                  className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-emerald-400 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 focus:outline-none focus-visible:ring focus-visible:ring-emerald-300"
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

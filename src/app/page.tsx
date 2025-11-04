"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Bus,
  Camera,
  Compass,
  Hotel,
  Leaf,
  MapPin,
  MoonStar,
  Mountain,
  Music,
  Plane,
  Sun,
  UtensilsCrossed,
  ShieldCheck,
} from "lucide-react";

type HeroAttraction = {
  title: string;
  subtitle: string;
  tag: string;
  image: string;
};

type HotelOption = {
  name: string;
  category: string;
  description: string;
  image: string;
  highlights: string[];
};

type FoodSpot = {
  name: string;
  style: string;
  description: string;
  image: string;
  specialties: string[];
};

type NightlifeSpot = {
  name: string;
  vibe: string;
  description: string;
  image: string;
  highlights: string[];
  schedule: string;
};

type Experience = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent: string;
};

type Event = {
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
  location: string;
};

type Neighborhood = {
  name: string;
  description: string;
  image: string;
};

type PlanFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
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

const heroAttractions: HeroAttraction[] = [
  {
    title: "Teatro de la Ciudad Manuel Talavera Trejo",
    subtitle: "Agenda cultural semanal - Centro de Delicias",
    tag: "Artes escenicas",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Museo de Sitio Huella de Nuestros Pasos",
    subtitle: "Colecciones arqueologicas y memoria regional",
    tag: "Museo",
    image:
      "https://images.unsplash.com/photo-1529429617124-aee00701f126?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "MUDECH - Museo del Desierto Chihuahuense",
    subtitle: "Fauna, flora y experiencias inmersivas del semidesierto",
    tag: "Naturaleza",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Museo de Paleontologia",
    subtitle: "Vestigios fosiles y laboratorio interactivo",
    tag: "Historia",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Ciudad Infantil",
    subtitle: "Parque tematico y experiencias al aire libre para familias",
    tag: "Familiar",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Museo de Derechos Humanos (DENI)",
    subtitle: "Recorridos guiados y experiencias educativas",
    tag: "Civismo",
    image:
      "https://images.unsplash.com/photo-1596560548467-3fede27db7bb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Parque Fundadores",
    subtitle: "Senderos, ciclovia y zonas de picnic entre nogales",
    tag: "Parques",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Mercado Juarez",
    subtitle: "Antojitos, artesanias y productos locales",
    tag: "Sabores",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Trolebus El Encanto",
    subtitle: "Recorridos historicos y fotografia urbana",
    tag: "Tours",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Gran Estadio Delicias",
    subtitle: "Deportes, conciertos y eventos masivos",
    tag: "Entretenimiento",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Plaza Benito Juarez",
    subtitle: "Ferias, expos y actividades al aire libre",
    tag: "Centro",
    image:
      "https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "El Colibri - Presa Rosetilla",
    subtitle: "Miradores, deportes acuaticos y gastronomia en la ribera",
    tag: "Escapada",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Cavall 7 Vinedos",
    subtitle: "Enoturismo, catas guiadas y experiencias gastronomicas",
    tag: "Vinedos",
    image:
      "https://images.unsplash.com/photo-1517170650633-c4f66e06dfd2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Presa Francisco I. Madero",
    subtitle: "Paisajes iconicos y actividades nauticas",
    tag: "Aventura",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Aguas Termales Julimes",
    subtitle: "Relax natural en el corredor del desierto",
    tag: "Bienestar",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1600&q=80",
  },
];



const hotels: HotelOption[] = [
  {
    name: "Casa Nogal Boutique",
    category: "Escapada romántica",
    description:
      "Hotel con nueve suites diseñadas por artistas locales, terraza con vista a los nogales y desayuno artesanal incluido.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Galería de arte en lobby",
      "Experiencia gastronómica a la carta",
      "A 5 min del centro histórico",
    ],
  },
  {
    name: "Hotel Valle Dorado",
    category: "Viaje de negocios",
    description:
      "Hotel céntrico con salones de reuniones, transporte ejecutivo y habitaciones insonorizadas.",
    image:
      "https://images.unsplash.com/photo-1525955667796-31c11d27b1c1?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Centro de negocios 24/7",
      "Alianzas con coworkings locales",
      "Traslado aeropuerto bajo demanda",
    ],
  },
  {
    name: "Lodge Las Vírgenes",
    category: "Naturaleza",
    description:
      "Cabañas modulares frente a la presa con fogateros privados, actividades acuáticas y observación de estrellas.",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb21078?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Kayaks y paddle board incluidos",
      "Constelaciones guiadas por astronomía",
      "Uso de bicicletas eléctricas",
    ],
  },
  {
    name: "Hotel Ejecutivo 33000",
    category: "Familias y grupos",
    description:
      "Habitaciones conectadas, alberca climatizada y paquetes con tours urbanos para toda la familia.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Club infantil fines de semana",
      "Desayuno buffet regional",
      "Estacionamiento techado gratuito",
    ],
  },
];

const foodSpots: FoodSpot[] = [
  {
    name: "Mercado Gastronómico Central",
    style: "Ruta foodie",
    description:
      "Colectivo de productores y chefs emergentes que reinterpretan ingredientes de la región con técnicas contemporáneas.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80",
    specialties: [
      "Tacos de barbacoa con reducción de nuez",
      "Fresas con crema de sotol",
      "Cold brew de café de la sierra",
    ],
  },
  {
    name: "La Cosecha 330",
    style: "Cocina de temporal",
    description:
      "Menú degustación inspirado en los ciclos agrícolas y maridaje con vinos chihuahuenses.",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=1600&q=80",
    specialties: [
      "Risotto de elote y queso menonita",
      "Pescado al sotol con quelites",
      "Tartaleta de nuez caramelizada",
    ],
  },
  {
    name: "Doña Mago Antojitos",
    style: "Sabores tradicionales",
    description:
      "Comal a la vista, tortillas hechas a mano y menú rotativo con recetas familiares.",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80",
    specialties: [
      "Gorditas de asado rojo",
      "Tacos de deshebrada con chile pasilla",
      "Champurrado con piloncillo",
    ],
  },
  {
    name: "Lunaria Café & Bakeshop",
    style: "Coffee lovers",
    description:
      "Espacio creativo con repostería de autor, barra de método y pop-ups de diseñadores locales.",
    image:
      "https://images.unsplash.com/photo-1525054098605-8e762c017741?auto=format&fit=crop&w=1600&q=80",
    specialties: [
      "Latte con leche de nuez",
      "Croissant de cajeta",
      "Experiencias de cata semanal",
    ],
  },
];

const nightlifeSpots: NightlifeSpot[] = [
  {
    name: "Noches de la Presa",
    vibe: "Sunset lounge",
    description:
      "Plataforma flotante con DJ residentes, mixología de sotol y ambientación lumínica sobre el agua.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Reservaciones con servicio shuttle",
      "Experiencia golden hour incluida",
      "After party silencioso (silent disco)",
    ],
    schedule: "Jue - Dom · 18:00 a 01:00",
  },
  {
    name: "Círculo 45",
    vibe: "Live sessions",
    description:
      "Foro íntimo con sesiones acústicas, stand up y coctelería de autor inspirada en el desierto.",
    image:
      "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Line up semanal curado por IDEA Turismo",
      "Cocteles con sotol y especias locales",
      "Boletos digitales con QR",
    ],
    schedule: "Mié - Sáb · 20:00 a 02:00",
  },
  {
    name: "Mercurio Rooftop",
    vibe: "Rooftop bar",
    description:
      "Una vista panorámica del centro histórico, menú de tapas y noches temáticas con guest bartenders.",
    image:
      "https://images.unsplash.com/photo-1533135091724-62cc5402aa20?auto=format&fit=crop&w=1600&q=80",
    highlights: [
      "Lounge exclusivo para grupos",
      "Playlist colaborativa en vivo",
      "Carta de vinos chihuahuenses",
    ],
    schedule: "Todos los días · 19:00 a 02:00",
  },
];

const seasonalExperiences: Experience[] = [
  {
    title: "Ruta de nogales en flor",
    description:
      "Primavera trae recorridos guiados por huertos y brunch entre árboles.",
    icon: Leaf,
    accent: "from-emerald-200/70 via-emerald-100 to-white",
  },
  {
    title: "Safari desértico",
    description:
      "Glamping con domos, fotografía nocturna y guías certificados en las dunas.",
    icon: Mountain,
    accent: "from-amber-200/70 via-amber-100 to-white",
  },
  {
    title: "Golden hour en la presa",
    description:
      "Tours en velero o paddle al atardecer cuando el cielo pinta tonos dorados.",
    icon: Camera,
    accent: "from-sky-200/80 via-sky-100 to-white",
  },
  {
    title: "Festivales y ferias",
    description:
      "Villancicos, mercados navideños y gastronomía de temporada durante el invierno.",
    icon: Music,
    accent: "from-rose-200/80 via-rose-100 to-white",
  },
];

const events: Event[] = [
  {
    title: "Festival de la Nuez",
    description:
      "Degustaciones, talleres culinarios y mercado de productores en el corazón agrícola de Delicias.",
    date: "Sept 14 – 16",
    category: "Gastronomía",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1600&q=80",
    location: "Plaza Benito Juárez",
  },
  {
    title: "Noches en el Desierto",
    description:
      "Conciertos íntimos, fogatas y observación de estrellas con astronomía guiada.",
    date: "Oct 04",
    category: "Música",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
    location: "Dunas de Samalayuca",
  },
  {
    title: "Ruta de Murales",
    description:
      "Recorrido interactivo por los murales más emblemáticos y estudios de artistas locales.",
    date: "Todo septiembre",
    category: "Arte Urbano",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    location: "Centro Histórico",
  },
];

const neighborhoods: Neighborhood[] = [
  {
    name: "Centro Histórico",
    description:
      "Cafés, museos, arquitectura art déco y la tradicional plaza donde comienza toda visita.",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Corredor de Nogaleras",
    description:
      "Paisajes agrícolas, experiencias agroturísticas y sobremesas con nuez de la región.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Presa Las Vírgenes",
    description:
      "Balnearios, deportes acuáticos y miradores que regalan atardeceres inigualables.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80",
  },
];

const planFeatures: PlanFeature[] = [
  {
    title: "Hospedaje a tu estilo",
    description:
      "Desde hoteles boutique hasta cabañas rurales. Filtra por presupuesto, amenidades y cercanía.",
    icon: Hotel,
  },
  {
    title: "Cómo llegar",
    description:
      "Conecta vía Chihuahua, Camargo o Ciudad Juárez. Encuentra rutas terrestres y vuelos cercanos.",
    icon: Plane,
  },
  {
    title: "Moverte en la ciudad",
    description:
      "Servicios de transporte privado, rutas de autobús y alquiler de bicicletas listas para ti.",
    icon: Bus,
  },
  {
    title: "Recomendaciones locales",
    description:
      "Los anfitriones de IDEA Turismo comparten tips personalizados para tu itinerario.",
    icon: Compass,
  },
];

const travelTips = [
  {
    title: "Clima cálido y cielos despejados",
    description:
      "Empaca capas ligeras y bloqueador solar: los días son soleados y las noches refrescan.",
  },
  {
    title: "Reserva con anticipación",
    description:
      "Los festivales de temporada atraen visitantes de todo el estado. Asegura hospedaje y tours.",
  },
  {
    title: "Conecta con la comunidad",
    description:
      "Únete a talleres gastronómicos, mercados y recorridos guiados por emprendedores locales.",
  },
];

export default function Home() {
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
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80"
            alt="Paisaje desértico cerca de Delicias"
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/80 via-[#1f2937]/70 to-[#4c1d95]/60" />
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
              <Link href="#que-hacer" className="hover:text-white">
                ¿Qué hacer?
              </Link>
              <Link href="#hoteles" className="hover:text-white">
                Hoteles
              </Link>
              <Link href="#gastronomia" className="hover:text-white">
                Qué comer
              </Link>
              <Link href="#vida-nocturna" className="hover:text-white">
                Vida nocturna
              </Link>
              <Link href="#planifica" className="hover:text-white">
                Planifica
              </Link>
              <Link href="#contacto" className="hover:text-white">
                Contacto
              </Link>
              <a
                href="#planifica"
                className="rounded-full bg-white px-4 py-2 font-semibold text-slate-900 transition hover:bg-amber-200"
              >
                Planifica tu viaje
              </a>
            </div>
          </motion.nav>

          <div className="relative mt-16 flex flex-1 flex-col justify-center gap-12 pb-6 sm:mt-24">
            <motion.div
              className="max-w-2xl space-y-6 text-white"
              {...fadeUp(0.1)}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/80 backdrop-blur-md">
                <BadgeCheck className="h-4 w-4" />
                Curado por el equipo IDEA
              </div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                ¿Qué hacer en Delicias?
              </h1>
              <p className="text-lg text-white/85 sm:text-xl">
                Inspírate, planifica y reserva experiencias memorables. Te
                guiamos entre desierto, sabores de la tierra y noches que nunca
                duermen.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              {...fadeUp(0.25)}
            >
              {heroAttractions.map((attraction, index) => {
                const emphasis =
                  index === 0
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[18rem]"
                    : index % 5 === 0
                    ? "lg:row-span-2 min-h-[16rem]"
                    : "min-h-[14rem]";

                return (
                  <motion.div
                    key={attraction.title}
                    className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${emphasis}`}
                    {...fadeUp(0.3 + index * 0.02)}
                  >
                    <Image
                      src={attraction.image}
                      alt={attraction.title}
                      fill
                      className="object-cover opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/35 to-transparent" />
                    <div className="relative flex h-full flex-col justify-between p-5 text-white">
                      <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-100">
                        {attraction.tag}
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-lg font-semibold leading-snug">
                          {attraction.title}
                        </h3>
                        <p className="text-sm text-white/80">
                          {attraction.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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
              Diseño, confort y experiencias únicas. Reserva con aliados de IDEA
              Turismo y recibe upgrades especiales.
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
                  <p className="text-sm text-slate-600">
                    {hotelOption.description}
                  </p>
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
              <h2 className="text-3xl font-semibold sm:text-4xl">
                ¿Qué voy a comer hoy?
              </h2>
              <p className="mt-2 max-w-xl text-lg text-slate-600">
                Desde mercados creativos hasta cocinas de temporal. Sigue el
                rastro de la nuez, el sotol y las recetas de casa.
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
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900">
                    {spot.style}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {spot.name}
                  </h3>
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

        <motion.section
          id="vida-nocturna"
          className="space-y-8"
          {...fadeUp(0)}
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-purple-700">
              Vida nocturna
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Noches que vibran en Delicias
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              Terrazas, foros íntimos y experiencias sobre el agua. Planifica tu
              noche según el mood.
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
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Experiencias de temporada
              </h2>
              <p className="mt-2 max-w-xl text-lg text-slate-600">
                Complementa tu plan con ideas listas para reservar y guiadas por
                anfitriones certificados.
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
            {seasonalExperiences.map((experience, index) => (
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
                      <experience.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {experience.title}
                    </h3>
                  </div>
                  <p className="text-base text-slate-700">
                    {experience.description}
                  </p>
                  <Link
                    href="#planifica"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
                  >
                    Saber más →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="eventos"
          className="space-y-8"
          {...fadeUp(0)}
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-[0.4em] text-emerald-700">
              Agenda
            </span>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Próximos eventos imprescindibles
            </h2>
            <p className="max-w-2xl text-lg text-slate-600">
              Compra boletos con anticipación y asegura lugar en las actividades
              más esperadas del mes.
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
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {event.title}
                  </h3>
                  <p className="flex-1 text-sm text-slate-600">
                    {event.description}
                  </p>
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
              Inspírate con estas áreas y conecta con anfitriones locales que te
              ayudarán a sacarle jugo a cada visita.
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
                  className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end gap-3 p-8">
                  <span className="text-xs uppercase tracking-[0.4em] text-emerald-200/80">
                    Explora
                  </span>
                  <h3 className="text-2xl font-semibold">{neighborhood.name}</h3>
                  <p className="text-sm text-white/80">
                    {neighborhood.description}
                  </p>
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
              Centralizamos información oficial, datos en tiempo real y la voz
              de la comunidad para ayudarte a tomar decisiones inteligentes.
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
            {planFeatures.map((feature, index) => (
              <motion.article
                key={feature.title}
                className="flex h-full flex-col gap-4 rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                {...fadeUp(0.1 + index * 0.1)}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">{feature.description}</p>
                <Link
                  href="#contacto"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500"
                >
                  Habla con un asesor →
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          className="grid gap-6 md:grid-cols-[3fr_2fr]"
          {...fadeUp(0)}
        >
          <div className="relative overflow-hidden rounded-4xl bg-slate-900 text-white">
            <Image
              src="https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&w=1600&q=80"
              alt="Mapa nocturno de la ciudad"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-900/70" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6 p-8">
              <div className="max-w-xl space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
                  Próximamente
                </span>
                <h2 className="text-3xl font-semibold">
                  Mapa interactivo de experiencias
                </h2>
                <p className="text-sm text-white/80">
                  Visualiza rutas en vivo, disponibilidad de actividades y
                  tiempos de traslado. Integración con Google Maps y filtros
                  personalizados para viajeros.
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
                Suscríbete a nuestro boletín mensual con noticias, convocatorias
                y herramientas para potenciar tu viaje o proyecto turístico.
              </p>
            </div>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-emerald-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm shadow-sm focus:border-emerald-400 focus:outline-none"
              />
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
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
            <p className="text-xl font-semibold text-slate-900">
              IDEA Turismo Delicias
            </p>
            <p>
              Círculo del Reloj Público Ote. 1, Col. Centro, Delicias, Chihuahua
            </p>
            <p>Teléfono conmutador: (639) 470 86 00</p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-500 sm:text-right">
            <p>
              © {new Date().getFullYear()} Municipio de Delicias. Todos los
              derechos reservados.
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

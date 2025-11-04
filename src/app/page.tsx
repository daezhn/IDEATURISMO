import HomePage, {
  type ExperienceData,
  type FoodSpot,
  type HeroAttraction,
  type HotelOption,
  type NavLink,
  type Neighborhood,
  type NightlifeSpot,
  type PlanFeatureData,
  type TravelTip,
  type Event,
} from "./home-page";

const navLinks: NavLink[] = [
  { href: "#que-hacer", label: "¿Qué hacer?" },
  { href: "#hoteles", label: "Hoteles" },
  { href: "#gastronomia", label: "Qué comer" },
  { href: "#vida-nocturna", label: "Vida nocturna" },
  { href: "#planifica", label: "Planifica" },
  { href: "#contacto", label: "Contacto" },
];

const heroAttractions: HeroAttraction[] = [
  {
    title: "Teatro de la Ciudad Manuel Talavera Trejo",
    subtitle: "Agenda cultural semanal - Centro de Delicias",
    tag: "Artes escenicas",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
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
    title: "Parque Fundadores",
    subtitle: "Senderos, ciclovia y zonas de picnic entre nogales",
    tag: "Parques",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Parque Vida",
    subtitle: "Recinto familiar con áreas verdes, juegos y talleres recreativos",
    tag: "Recreacion",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
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

const seasonalExperiences: ExperienceData[] = [
  {
    title: "Ruta de nogales en flor",
    description: "Primavera trae recorridos guiados por huertos y brunch entre árboles.",
    icon: "leaf",
    accent: "from-emerald-200/70 via-emerald-100 to-white",
  },
  {
    title: "Safari desértico",
    description:
      "Glamping con domos, fotografía nocturna y guías certificados en las dunas.",
    icon: "mountain",
    accent: "from-amber-200/70 via-amber-100 to-white",
  },
  {
    title: "Golden hour en la presa",
    description:
      "Tours en velero o paddle al atardecer cuando el cielo pinta tonos dorados.",
    icon: "camera",
    accent: "from-sky-200/80 via-sky-100 to-white",
  },
  {
    title: "Festivales y ferias",
    description:
      "Villancicos, mercados navideños y gastronomía de temporada durante el invierno.",
    icon: "music",
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

const planFeatures: PlanFeatureData[] = [
  {
    title: "Hospedaje a tu estilo",
    description:
      "Desde hoteles boutique hasta cabañas rurales. Filtra por presupuesto, amenidades y cercanía.",
    icon: "hotel",
  },
  {
    title: "Cómo llegar",
    description:
      "Conecta vía Chihuahua, Camargo o Ciudad Juárez. Encuentra rutas terrestres y vuelos cercanos.",
    icon: "plane",
  },
  {
    title: "Moverte en la ciudad",
    description:
      "Servicios de transporte privado, rutas de autobús y alquiler de bicicletas listas para ti.",
    icon: "bus",
  },
  {
    title: "Recomendaciones locales",
    description:
      "Los anfitriones de IDEA Turismo comparten tips personalizados para tu itinerario.",
    icon: "compass",
  },
];

const travelTips: TravelTip[] = [
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

export default function Page() {
  return (
    <HomePage
      heroAttractions={heroAttractions}
      hotels={hotels}
      foodSpots={foodSpots}
      nightlifeSpots={nightlifeSpots}
      seasonalExperiences={seasonalExperiences}
      events={events}
      neighborhoods={neighborhoods}
      planFeatures={planFeatures}
      travelTips={travelTips}
      navLinks={navLinks}
    />
  );
}

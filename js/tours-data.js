// Tours data for IDEA Tourism website
const toursData = [
    {
        id: 1,
        title: {
            es: "Tour Histórico del Centro",
            en: "Historic Downtown Tour"
        },
        category: "historico",
        description: {
            es: "Explora la rica historia de Delicias visitando sus monumentos y edificios históricos más emblemáticos.",
            en: "Explore the rich history of Delicias by visiting its most emblematic monuments and historic buildings."
        },
        duration: 180, // minutes
        price: 250,
        rating: 4.8,
        reviews: 124,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%232c5f2d' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EHistoric Tour%3C/text%3E%3C/svg%3E",
        itinerary: {
            es: [
                "Visita al Palacio Municipal",
                "Recorrido por la Plaza Principal",
                "Museo de Historia Regional",
                "Catedral de Delicias",
                "Monumentos históricos del centro"
            ],
            en: [
                "Visit to the Municipal Palace",
                "Tour of the Main Square",
                "Regional History Museum",
                "Delicias Cathedral",
                "Historic downtown monuments"
            ]
        },
        schedule: {
            es: "Salidas diarias a las 9:00 AM y 3:00 PM",
            en: "Daily departures at 9:00 AM and 3:00 PM"
        },
        includes: {
            es: ["Guía certificado", "Entradas a museos", "Agua embotellada"],
            en: ["Certified guide", "Museum tickets", "Bottled water"]
        },
        testimonials: [
            {
                name: "María González",
                rating: 5,
                comment: {
                    es: "Excelente tour, el guía fue muy conocedor de la historia local.",
                    en: "Excellent tour, the guide was very knowledgeable about local history."
                }
            }
        ]
    },
    {
        id: 2,
        title: {
            es: "Tour Gastronómico",
            en: "Gastronomic Tour"
        },
        category: "gastronomico",
        description: {
            es: "Degusta los mejores sabores de la cocina regional en nuestros restaurantes y mercados locales.",
            en: "Taste the best flavors of regional cuisine in our local restaurants and markets."
        },
        duration: 240, // minutes
        price: 450,
        rating: 4.9,
        reviews: 89,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f39c12' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EGastronomic Tour%3C/text%3E%3C/svg%3E",
        itinerary: {
            es: [
                "Visita al mercado local",
                "Degustación de quesos artesanales",
                "Comida tradicional en restaurante típico",
                "Visita a productores locales",
                "Prueba de dulces regionales"
            ],
            en: [
                "Visit to local market",
                "Artisan cheese tasting",
                "Traditional meal at typical restaurant",
                "Visit to local producers",
                "Regional sweets tasting"
            ]
        },
        schedule: {
            es: "Sábados y domingos a las 10:00 AM",
            en: "Saturdays and Sundays at 10:00 AM"
        },
        includes: {
            es: ["Guía especializado", "Todas las degustaciones", "Transporte", "Comida completa"],
            en: ["Specialized guide", "All tastings", "Transportation", "Full meal"]
        },
        testimonials: [
            {
                name: "John Smith",
                rating: 5,
                comment: {
                    es: "¡La mejor experiencia gastronómica! La comida estuvo increíble.",
                    en: "The best gastronomic experience! The food was incredible."
                }
            }
        ]
    },
    {
        id: 3,
        title: {
            es: "Tour de Naturaleza y Ecoturismo",
            en: "Nature and Ecotourism Tour"
        },
        category: "natural",
        description: {
            es: "Conecta con la naturaleza explorando los paisajes naturales y áreas protegidas de la región.",
            en: "Connect with nature by exploring the natural landscapes and protected areas of the region."
        },
        duration: 360, // minutes
        price: 350,
        rating: 4.7,
        reviews: 67,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2397bc62' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ENature Tour%3C/text%3E%3C/svg%3E",
        itinerary: {
            es: [
                "Caminata por senderos naturales",
                "Observación de flora y fauna local",
                "Visita a reserva ecológica",
                "Almuerzo campestre",
                "Actividades de educación ambiental"
            ],
            en: [
                "Walk through natural trails",
                "Observation of local flora and fauna",
                "Visit to ecological reserve",
                "Countryside lunch",
                "Environmental education activities"
            ]
        },
        schedule: {
            es: "Viernes a domingo a las 8:00 AM",
            en: "Friday to Sunday at 8:00 AM"
        },
        includes: {
            es: ["Guía naturalista", "Transporte", "Almuerzo", "Equipo de observación"],
            en: ["Naturalist guide", "Transportation", "Lunch", "Observation equipment"]
        },
        testimonials: [
            {
                name: "Ana Martínez",
                rating: 5,
                comment: {
                    es: "Perfecto para familias. Los niños disfrutaron mucho la naturaleza.",
                    en: "Perfect for families. The children really enjoyed nature."
                }
            }
        ]
    },
    {
        id: 4,
        title: {
            es: "Tour Cultural y Artístico",
            en: "Cultural and Artistic Tour"
        },
        category: "cultural",
        description: {
            es: "Sumérgete en la cultura local visitando galerías de arte, talleres artesanales y centros culturales.",
            en: "Immerse yourself in local culture by visiting art galleries, craft workshops and cultural centers."
        },
        duration: 210, // minutes
        price: 300,
        rating: 4.6,
        reviews: 45,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e74c3c' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ECultural Tour%3C/text%3E%3C/svg%3E",
        itinerary: {
            es: [
                "Galería de arte contemporáneo",
                "Talleres de artesanos locales",
                "Centro cultural municipal",
                "Demostración de oficios tradicionales",
                "Tienda de artesanías"
            ],
            en: [
                "Contemporary art gallery",
                "Local artisan workshops",
                "Municipal cultural center",
                "Traditional crafts demonstration",
                "Handicrafts shop"
            ]
        },
        schedule: {
            es: "Martes a sábado a las 10:00 AM y 4:00 PM",
            en: "Tuesday to Saturday at 10:00 AM and 4:00 PM"
        },
        includes: {
            es: ["Guía cultural", "Entradas", "Material didáctico", "Recuerdo artesanal"],
            en: ["Cultural guide", "Tickets", "Educational material", "Artisan souvenir"]
        },
        testimonials: [
            {
                name: "Carlos Hernández",
                rating: 4,
                comment: {
                    es: "Muy interesante conocer el arte local. Recomendado.",
                    en: "Very interesting to learn about local art. Recommended."
                }
            }
        ]
    },
    {
        id: 5,
        title: {
            es: "Tour de Aventura",
            en: "Adventure Tour"
        },
        category: "aventura",
        description: {
            es: "Para los amantes de la adrenalina: ciclismo, senderismo y actividades al aire libre.",
            en: "For adrenaline lovers: cycling, hiking and outdoor activities."
        },
        duration: 300, // minutes
        price: 500,
        rating: 4.8,
        reviews: 56,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%233498db' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAdventure Tour%3C/text%3E%3C/svg%3E",
        itinerary: {
            es: [
                "Ciclismo de montaña",
                "Caminata por senderos desafiantes",
                "Rappel (opcional)",
                "Almuerzo energético",
                "Retos y juegos en equipo"
            ],
            en: [
                "Mountain biking",
                "Challenging trail hiking",
                "Rappelling (optional)",
                "Energy lunch",
                "Team challenges and games"
            ]
        },
        schedule: {
            es: "Sábados y domingos a las 7:00 AM",
            en: "Saturdays and Sundays at 7:00 AM"
        },
        includes: {
            es: ["Guía especializado", "Equipo de seguridad", "Bicicletas", "Almuerzo", "Seguro"],
            en: ["Specialized guide", "Safety equipment", "Bicycles", "Lunch", "Insurance"]
        },
        testimonials: [
            {
                name: "Roberto Sánchez",
                rating: 5,
                comment: {
                    es: "¡Increíble experiencia! Perfecto para los que buscan aventura.",
                    en: "Incredible experience! Perfect for those seeking adventure."
                }
            }
        ]
    },
    {
        id: 6,
        title: {
            es: "Tour Nocturno de la Ciudad",
            en: "City Night Tour"
        },
        category: "cultural",
        description: {
            es: "Descubre el encanto de Delicias de noche con iluminación especial de sus monumentos.",
            en: "Discover the charm of Delicias at night with special illumination of its monuments."
        },
        duration: 150, // minutes
        price: 200,
        rating: 4.5,
        reviews: 38,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%2334495e' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3ENight Tour%3C/text%3E%3C/svg%3E",
        itinerary: {
            es: [
                "Plaza Principal iluminada",
                "Monumentos con iluminación especial",
                "Paseo nocturno por el centro",
                "Cafetería tradicional",
                "Mirador nocturno"
            ],
            en: [
                "Illuminated Main Square",
                "Monuments with special lighting",
                "Night walk through downtown",
                "Traditional coffee shop",
                "Night viewpoint"
            ]
        },
        schedule: {
            es: "Viernes y sábados a las 8:00 PM",
            en: "Fridays and Saturdays at 8:00 PM"
        },
        includes: {
            es: ["Guía", "Bebida caliente", "Iluminación especial"],
            en: ["Guide", "Hot beverage", "Special lighting"]
        },
        testimonials: [
            {
                name: "Laura Pérez",
                rating: 5,
                comment: {
                    es: "Muy romántico y hermoso. Ideal para parejas.",
                    en: "Very romantic and beautiful. Ideal for couples."
                }
            }
        ]
    },
    {
        id: 7,
        title: {
            es: "Tour Agropecuario",
            en: "Agricultural Tour"
        },
        category: "natural",
        description: {
            es: "Conoce de cerca la actividad agrícola y ganadera que caracteriza a nuestra región.",
            en: "Get to know the agricultural and livestock activity that characterizes our region."
        },
        duration: 270, // minutes
        price: 320,
        rating: 4.7,
        reviews: 52,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23d35400' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EAgricultural Tour%3C/text%3E%3C/svg%3E",
        itinerary: {
            es: [
                "Visita a campo de cultivo",
                "Rancho ganadero",
                "Proceso de producción agrícola",
                "Degustación de productos frescos",
                "Actividades con animales de granja"
            ],
            en: [
                "Visit to crop field",
                "Cattle ranch",
                "Agricultural production process",
                "Fresh produce tasting",
                "Farm animal activities"
            ]
        },
        schedule: {
            es: "Lunes, miércoles y viernes a las 9:00 AM",
            en: "Monday, Wednesday and Friday at 9:00 AM"
        },
        includes: {
            es: ["Guía agrónomo", "Transporte", "Productos frescos", "Almuerzo campestre"],
            en: ["Agronomist guide", "Transportation", "Fresh products", "Countryside lunch"]
        },
        testimonials: [
            {
                name: "Miguel Torres",
                rating: 5,
                comment: {
                    es: "Excelente para entender la importancia del sector agrícola.",
                    en: "Excellent for understanding the importance of the agricultural sector."
                }
            }
        ]
    },
    {
        id: 8,
        title: {
            es: "Tour para Niños",
            en: "Children's Tour"
        },
        category: "cultural",
        description: {
            es: "Tour especialmente diseñado para familias con niños, con actividades educativas y divertidas.",
            en: "Tour specially designed for families with children, with educational and fun activities."
        },
        duration: 180, // minutes
        price: 0, // Free
        rating: 4.9,
        reviews: 112,
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%239b59b6' width='400' height='300'/%3E%3Ctext x='50%25' y='50%25' font-size='24' fill='white' text-anchor='middle' dominant-baseline='middle'%3EChildren Tour%3C/text%3E%3C/svg%3E",
        itinerary: {
            es: [
                "Parque recreativo",
                "Actividades educativas",
                "Juegos tradicionales",
                "Cuentacuentos",
                "Merienda para niños"
            ],
            en: [
                "Recreation park",
                "Educational activities",
                "Traditional games",
                "Storytelling",
                "Children's snack"
            ]
        },
        schedule: {
            es: "Sábados y domingos a las 10:00 AM",
            en: "Saturdays and Sundays at 10:00 AM"
        },
        includes: {
            es: ["Guía especializado en niños", "Materiales didácticos", "Merienda", "Recuerdos"],
            en: ["Child-specialized guide", "Educational materials", "Snack", "Souvenirs"]
        },
        testimonials: [
            {
                name: "Patricia Ruiz",
                rating: 5,
                comment: {
                    es: "¡Mis hijos lo amaron! Muy bien organizado y educativo.",
                    en: "My kids loved it! Very well organized and educational."
                }
            }
        ]
    }
];

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — Automóviles Trafalgar
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'Automóviles Trafalgar',
  tagline: 'Tu concesionario multimarca y taller de confianza.',
  description:
    'Especialistas en la compra-venta de vehículos de ocasión, todoterrenos y servicio de taller mecánico integral. Calidad, garantía y financiación a tu medida.',
  url: 'https://automovilestrafalgar.es',
  locale: 'es_ES',

  /** Número de licencia o registro mercantil (déjalo vacío si no aplica) */
  license: '',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'info@automovilestrafalgar.es',
  phoneForTel: '+34900000000', // Actualizar con tu teléfono real
  phoneFormatted: '+34 900 000 000',
  address: {
    lineOne: 'Calle de Trafalgar, 1', // Actualizar con tu dirección real
    lineTwo: '',
    city: 'Madrid',
    state: 'Madrid',
    zip: '28010',
    country: 'ES',
    mapLink: 'https://maps.app.goo.gl/example', // Actualizar con enlace a Google Maps
  },
  hours: [
    { days: 'Lunes - Viernes', time: '10:00 - 14:00 | 16:30 - 20:00' },
    { days: 'Sábados', time: '10:00 - 14:00' },
    { days: 'Domingos', time: 'Cerrado' },
  ],
  emergencyService: 'Servicio de grúa y taller 24/7 disponible',

  // ── Social media ─────────────────────────────────────────────────────────
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },

  // ── Navigation ───────────────────────────────────────────────────────────
  nav: [
    { label: 'Inicio', href: '/' },
    { label: 'Vehículos', href: '/vehiculos' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contacto', href: '/contacto' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'Compra y Venta de Vehículos',
      description:
        'Amplio stock de coches de ocasión, seminuevos y km 0. Todos nuestros vehículos se entregan totalmente revisados y con garantía.',
    },
    {
      title: 'Especialistas en 4x4',
      description:
        'Contamos con una amplia experiencia en la venta y preparación de vehículos todoterreno y SUVs para que disfrutes de cualquier aventura.',
    },
    {
      title: 'Taller Mecánico',
      description:
        'Servicio de mantenimiento integral: revisiones pre-ITV, cambios de aceite, frenos, neumáticos y diagnosis avanzada para todas las marcas.',
    },
    {
      title: 'Financiación a Medida',
      description:
        'Colaboramos con las mejores financieras para ofrecerte el plan que mejor se adapte a tu bolsillo. Financiación de hasta el 100% sin entrada.',
    },
    {
      title: 'Tasación de Vehículos',
      description:
        'Compramos tu coche antiguo. Realizamos una tasación justa y transparente basada en los precios de mercado actuales y el estado del vehículo.',
    },
    {
      title: 'Gestoría Integral',
      description:
        'Nos ocupamos de todo el papeleo: transferencias, matriculaciones y bajas, para que tú solo te preocupes de disfrutar de tu nuevo coche.',
    },
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    { quote: "Compré mi todoterreno aquí y la experiencia fue inmejorable. El coche estaba como nuevo y el trato fue súper cercano.", name: 'Carlos M.', location: 'Madrid', rating: 5 },
    { quote: "Llevo mi coche a su taller desde hace años. Son honestos con los precios y muy rápidos. 100% recomendables.", name: 'Javier R.', location: 'Madrid', rating: 5 },
    { quote: 'Me tasaron el coche viejo muy por encima de lo que me ofrecían en otros concesionarios. Muy transparentes.', name: 'Laura K.', location: 'Getafe', rating: 5 },
    { quote: 'Me ayudaron a conseguir la financiación en menos de 24 horas. Salí conduciendo el mismo día.', name: 'Tomás y Elena P.', location: 'Leganés', rating: 5 },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'Automóviles Trafalgar nació con la pasión por el mundo del motor y un claro objetivo: ofrecer vehículos de confianza y un servicio técnico impecable. Llevamos años siendo el referente para conductores y amantes de los 4x4 en nuestra ciudad.',
      'Nuestro equipo está formado por asesores comerciales y mecánicos altamente cualificados. No solo vendemos coches, construimos relaciones de confianza con nuestros clientes a través de la transparencia y la garantía de nuestro trabajo.',
    ],
    team: [
      { name: 'Director', role: 'Gerente y Ventas', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
      { name: 'Mecánico Jefe', role: 'Jefe de Taller', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&q=80' },
    ],
  },

  // ── Trust bar items ──────────────────────────────────────────────────────
  trustItems: [
    { label: 'Vehículos Revisados' },
    { label: 'Garantía 12 Meses' },
    { label: 'Financiación 100%' },
    { label: 'Clientes Satisfechos', value: '1,000+' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Concesionario',
      links: [
        { label: 'Nuestro Stock', href: '/vehiculos' },
        { label: 'Taller', href: '/servicios' },
        { label: 'Nosotros', href: '/nosotros' },
      ],
    },
    {
      title: 'Atención al Cliente',
      links: [
        { label: 'Contacto', href: '/contacto' },
        { label: 'Aviso Legal', href: '/aviso-legal' },
        { label: 'Política de Privacidad', href: '/privacidad' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
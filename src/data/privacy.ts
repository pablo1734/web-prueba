/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PRIVACY POLICY — edit the sections below with your own policy content.
 * ─────────────────────────────────────────────────────────────────────────────
 * Each section has a `heading` and a `content` array of paragraphs.
 * Add, remove, or reorder sections as needed for your business.
 *
 * The `effectiveDate` is displayed at the top of the page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const privacyPolicy = {
  effectiveDate: '1 de septiembre de 2026',

  sections: [
    {
      heading: 'Información que recopilamos',
      content: [
        'Recopilamos la información personal que nos facilitas de forma voluntaria cuando contactas con nosotros, solicitas un presupuesto o utilizas nuestros servicios. Esto puede incluir tu nombre, correo electrónico, teléfono, dirección y detalles sobre el vehículo o servicio que te interesa.',
        'También podemos recopilar cierta información técnica cuando visitas nuestra web, como tu dirección IP, tipo de navegador, referencia de origen y páginas visitadas. Este dato nos ayuda a mejorar la experiencia del usuario.',
      ],
    },
    {
      heading: 'Cómo usamos tu información',
      content: [
        'Utilizamos la información para responder a tus consultas, gestionar presupuestos, coordinar la compra o venta del vehículo y ofrecer un servicio personalizado.',
        'También podemos usar tus datos para enviar información relevante sobre novedades, promociones o servicios que puedan interesarte. Puedes darte de baja en cualquier momento contactando con nosotros.',
      ],
    },
    {
      heading: 'Compartir información',
      content: [
        'No vendemos ni alquilamos tus datos personales a terceros. Solo podemos compartir información con proveedores de confianza que colaboran en la operación del negocio, siempre bajo confidencialidad y con fines claramente relacionados con nuestro servicio.',
        'También podremos revelar tus datos cuando lo exija la ley o para proteger derechos legales y cumplir con procesos judiciales o administrativos.',
      ],
    },
    {
      heading: 'Cookies y seguimiento',
      content: [
        'Nuestra página puede usar cookies y tecnologías similares para mejorar la navegación, analizar el tráfico y conocer cómo interactúan los usuarios con los contenidos. Puedes gestionar tus preferencias desde la configuración de tu navegador.',
      ],
    },
    {
      heading: 'Seguridad de los datos',
      content: [
        'Aplicamos medidas razonables de seguridad para proteger la información personal. Sin embargo, ningún sistema es completamente infalible y no podemos garantizar una seguridad absoluta en Internet.',
      ],
    },
    {
      heading: 'Tus derechos',
      content: [
        'Puedes ejercer tus derechos de acceso, rectificación, eliminación o limitación del tratamiento de tus datos en cualquier momento contactando con nosotros.',
      ],
    },
    {
      heading: 'Cambios en esta política',
      content: [
        'Podemos actualizar esta política de privacidad ocasionalmente. Cuando lo hagamos, publicaremos la nueva versión con su fecha de vigencia y te recomendamos revisarla periódicamente.',
      ],
    },
    {
      heading: 'Contacto',
      content: [
        'Si tienes dudas sobre esta política de privacidad, puedes contactarnos a través de la información disponible en nuestra página de contacto.',
      ],
    },
  ],
} as const;

export type PrivacyPolicy = typeof privacyPolicy;

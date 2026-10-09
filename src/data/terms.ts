/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TERMS OF SERVICE — edit the sections below with your own terms.
 * ─────────────────────────────────────────────────────────────────────────────
 * Each section has a `heading` and a `content` array of paragraphs.
 * Add, remove, or reorder sections as needed for your business.
 *
 * The `effectiveDate` is displayed at the top of the page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const termsOfService = {
  effectiveDate: '1 de septiembre de 2026',

  sections: [
    {
      heading: 'Aceptación de los términos',
      content: [
        'Al acceder y utilizar nuestra web y servicios, aceptas quedar sujeto a estos términos y condiciones. Si no estás de acuerdo, por favor no utilices la web ni nuestros servicios.',
      ],
    },
    {
      heading: 'Servicios',
      content: [
        'Ofrecemos servicios de compraventa, financiación, asesoramiento, mantenimiento y reparación de vehículos según se describe en nuestra web. Todos los servicios están sujetos a disponibilidad y pueden variar según la ubicación y la situación del vehículo.',
        'Los términos específicos de cada proyecto, incluyendo alcance, plazos y presupuesto, se concretarán en un presupuesto o contrato previo antes de comenzar el trabajo.',
      ],
    },
    {
      heading: 'Presupuestos y precios',
      content: [
        'Los presupuestos se elaboran en base a la información disponible en el momento de la valoración. Los costes finales pueden variar si se detectan condiciones no previstas durante la revisión o el trabajo.',
        'Los plazos de pago, métodos aceptados y posibles pagos iniciales se indicarán en el documento específico de cada servicio.',
      ],
    },
    {
      heading: 'Citas y cancelaciones',
      content: [
        'Haremos todo lo posible por cumplir los horarios previstos. No obstante, los tiempos pueden variar por motivos de trabajo previo, requerimientos del vehículo o incidencias externas.',
        'Si necesitas reprogramar o cancelar una cita, avísanos con la mayor antelación posible. En ciertos casos pueden aplicarse condiciones de cancelación.',
      ],
    },
    {
      heading: 'Garantías y devoluciones',
      content: [
        'Respaldamos la calidad de nuestro trabajo y ofrecemos garantía en los servicios prestados según lo indicado en cada caso.',
        'Las garantías no cubren daños causados por uso indebido, negligencia, accidente o modificaciones realizadas por terceros después del servicio.',
      ],
    },
    {
      heading: 'Limitación de responsabilidad',
      content: [
        'En la medida permitida por la ley, la responsabilidad total por cualquier reclamación derivada de nuestros servicios no superará el importe abonado por el servicio concreto que la originó.',
        'No asumimos responsabilidad por daños indirectos, incidentales o consecuentes, incluidos posibles perjuicios derivados de la operación.',
      ],
    },
    {
      heading: 'Propiedad intelectual',
      content: [
        'Todo el contenido de esta web, incluyendo textos, imágenes, logotipos y diseño, es propiedad de Automóviles Trafalgar o se utiliza con autorización y está protegido por la legislación aplicable.',
      ],
    },
    {
      heading: 'Ley aplicable',
      content: [
        'Estos términos se rigen por la legislación vigente en España y cualquier conflicto se resolverá ante los tribunales competentes de Madrid, salvo que la normativa aplicable disponga otra cosa.',
      ],
    },
    {
      heading: 'Cambios en estos términos',
      content: [
        'Nos reservamos el derecho a actualizar estos términos y condiciones. Cualquier cambio se publicará en esta página con su fecha de revisión, y el uso continuado de la web tras la actualización implicará su aceptación.',
      ],
    },
    {
      heading: 'Contacto',
      content: [
        'Si tienes dudas sobre estos términos y condiciones, puedes contactarnos a través de la información disponible en nuestra página de contacto.',
      ],
    },
  ],
} as const;

export type TermsOfService = typeof termsOfService;

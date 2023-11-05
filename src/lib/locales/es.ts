export default {
  metadata: {
    defaultTitle: 'Monospace — Experiencias web creativas',
    description:
      'Monospace es un estudio creativo enfocado en experiencias web.',
    url: 'https://monospace.ar/es',
    locale: 'es'
  },
  home: {
    header: {
      headline: ['Experiencias', 'preparadas', 'para el futuro.']
    },
    introducing: {
      sectionTitle: 'Conóceme',
      headline:
        'Desarrollador Full Stack de JavaScript y Diseñador UI/UX con +{experience} años de experiencia laboral.',
      biography:
        'Mi nombre es Gonzalo y tengo {yearsOld} años. Me encanta diseñar y desarrollar experiencias de usuarios que sean atemporales, simples y tengan un buen rendimiento.',
      contactButton: '¡Hablemos!',
      portraitAlt: 'Foto de Gonzalo'
    },
    since2017: {
      headline: 'Desde—2017.'
    },
    otherProjects: {
      headline: ['Otros proyectos', 'igual de importantes...'],
      websiteButton: 'Sitio Web',
      repositoryButton: 'Repositorio',
      otherProjectsButtons: [
        'Cargar más',
        'Hay {number} proyectos más',
        'Hay 1 proyecto más',
        'No hay más. ¿Quieres ser parte?'
      ]
    },
    knowledge: {
      sectionTitle: 'Sobre Mí',
      educationTitle: 'Educación',
      experienceTitle: 'Experiencia',
      clientsTitle: 'Clientes',
      approachTitle: 'Enfoque'
    }
  },
  project: {
    visitButton: 'Visitar',
    notFoundMessage: 'Proyecto no encontrado',
    stacksHeadline: 'Tecnologías',
    roleHeadline: 'Rol',
    yearHeadline: 'Año'
  },
  footer: {
    contact: '¡Hablemos!',
    goToTop: 'Ir arriba'
  },
  navbar: {
    description: ['Un estudio creativo enfocado ', 'en experiencias web.']
  },
  contactForm: {
    fields: {
      name: 'Tu nombre',
      email: 'Tu email',
      message: 'Tu mensaje'
    },
    sendButton: [
      'Enviar mensaje',
      'Enviando...',
      'Intentar de nuevo',
      '¡Mensaje enviado!'
    ],
    errorMessage: 'Algo salió mal =(',
    successMessage: '¡Gracias por tu mensaje =)',
    suggestionMessage: 'Puedes hacer saltos de línea con Shift + Enter!',
    welcomeMessage: 'Por favor, completa el formulario =)',
    warningModal: {
      headline: '¿Cerrar la terminal?',
      description: [
        'Presiona',
        'enter',
        'si estás seguro o',
        'cualquier',
        'tecla para seguir escribiendo.'
      ]
    }
  },
  cookiesConsent: {
    headline: 'Hola, cookies aquí!',
    description:
      'Las utilizo para mejorar la experiencia de internacionalización. Eres libre de aceptarlas o rechazarlas.',
    acceptButton: 'Aceptar',
    declineButton: 'Rechazar',
    closeWarning: 'Vas a rechazar'
  }
} as const

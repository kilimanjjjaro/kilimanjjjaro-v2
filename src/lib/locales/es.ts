export default {
  home: {
    header: {
      headline: ['Experiencias', 'preparadas', 'para', 'el', 'futuro.']
    },
    introducing: {
      sectionTitle: 'Presentándome',
      headline:
        'Desarrollador Full Stack de JavaScript y Diseñador UI/UX con +{experience} años de experiencia laboral.',
      description:
        '<i>— Hola,</i> mi nombre es Gonzalo y tengo {yearsOld} años. En mi experiencia aprendí que la diferencia radica en cuidar los detalles y aplicar buenas prácticas. Me entusiasma abordar soluciones de manera eficiente y simple.',
      letsTalkButton: '¡Hablemos!'
    },
    lessButBetter: {
      headline: 'Menos, pero mejor.'
    },
    moreProjects: {
      headline: ['Más proyectos', 'igual de importantes...'],
      visitButton: 'Visitar',
      moreProjectsButtons: [
        'Cargar más',
        'Hay {number} proyectos más',
        'Hay 1 proyecto más',
        'No hay más. ¿Quieres ser parte?'
      ]
    },
    knowledge: {
      sectionTitle: 'Conóceme'
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
    letsTalk: '¡Hablemos!',
    goToTop: 'Ir arriba'
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
      '¡Enviado!'
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
  }
} as const

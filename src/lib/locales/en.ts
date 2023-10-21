export default {
  metadata: {
    defaultTitle: 'Kilimanjjjaro — Creative web experiences',
    description:
      'Kilimanjjjaro is a creative studio focused on web experiences.',
    url: 'https://kilimanjjjaro.com',
    locale: 'en'
  },
  home: {
    header: {
      headline: ['Thinking', 'future—proff', 'experiences.']
    },
    introducing: {
      sectionTitle: 'Introducing Me',
      headline:
        'Full Stack JavaScript Developer & UX/UI Designer with +{experience} years of work experience.',
      biography:
        'My name is Gonzalo and I am {yearsOld} years old. In my experience, I learned that the difference lies in taking care of the details and applying good practices. I am excited to approach solutions in an efficient and simple way.',
      letsTalkButton: "Let's talk!"
    },
    since2017: {
      headline: 'Since—2017.'
    },
    otherProjects: {
      headline: ['And other equally', 'important projects...'],
      visitButton: 'Visit',
      otherProjectsButtons: [
        'Load more',
        'There are {number} more projects',
        'There are 1 more project',
        "There's no more. Do you want to be part?"
      ]
    },
    knowledge: {
      sectionTitle: 'Knowledge',
      educationTitle: 'Education',
      experienceTitle: 'Experience',
      clientsTitle: 'Clients',
      approachTitle: 'Approach'
    }
  },
  project: {
    visitButton: 'Visit',
    notFoundMessage: 'Project not found',
    stacksHeadline: 'Stacks',
    roleHeadline: 'Role',
    yearHeadline: 'Year'
  },
  footer: {
    letsTalk: 'Let’s talk!',
    goToTop: 'Go to top'
  },
  navbar: {
    description: ['A creative studio focused ', 'on web experiences.']
  },
  contactForm: {
    fields: {
      name: 'Your name',
      email: 'Your email',
      message: 'Your message'
    },
    sendButton: ['Send message', 'Sending...', 'Try again!', 'Message sent!'],
    successMessage: 'Thanks for your message =)',
    errorMessage: 'Something went wrong =(',
    suggestionMessage: 'You can make line breaks with Shift + Enter!',
    welcomeMessage: 'Please, fill in the form =)',
    warningModal: {
      headline: 'Close the terminal?',
      description: [
        'Press',
        'enter',
        'if you are sure or',
        'any',
        'key to keep writing.'
      ]
    }
  },
  cookiesConsent: {
    headline: 'Hi, cookies here!',
    description:
      'I uses them to enhance the internationalization experience. You are free to accept or decline them.',
    acceptButton: 'Accept',
    declineButton: 'Decline',
    closeWarning: 'You will decline'
  }
} as const

export default {
  home: {
    header: {
      headline: ['Thinking', 'future', '—', 'proff', 'experiences.']
    },
    introducing: {
      sectionTitle: 'Introducing Me',
      headline:
        'Full Stack JavaScript Developer & UX/UI Designer with +{experience} years of work experience.',
      description:
        '<i>— Hello,</i> my name is Gonzalo and I am {yearsOld} years old. In my experience, I learned that the difference lies in taking care of the details and applying good practices. I am excited to approach solutions in an efficient and simple way.',
      letsTalkButton: "Let's talk!"
    },
    lessButBetter: {
      headline: 'Less, but better.'
    },
    moreProjects: {
      headline: ['And more equally', 'important projects...'],
      visitButton: 'Visit',
      moreProjectsButtons: [
        'Load more',
        'There are {number} more projects',
        'There are 1 more project',
        "There's no more. Do you want to be part?"
      ]
    },
    knowledge: {
      sectionTitle: 'Knowledge'
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
  contactForm: {
    fields: {
      name: 'Your name',
      email: 'Your email',
      message: 'Your message'
    },
    sendButton: ['Send message', 'Sending...', 'Try again!', 'Sent!'],
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
  }
} as const

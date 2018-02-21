// @flow

const dictionary = {
  eng: {
    'ABOUT-ME': 'ABOUT ME',
    BACK: 'Back',
    BACK_TO: 'Back to the landing page',
    CONTACT: 'CONTACT',
    DOWNLOAD_RESUME: 'Download Résumé',
    EDIT: 'EDIT',
    FRONTEND: 'Front-end developer',
    NOT_EXIST: ' does not exist.',
    PAGE_NOT_FOUND: 'Page not found',
    POSTS: 'POSTS',
    PROJECTS: 'PROJECTS',
    RESUME: 'Thanks for downloading my Résumé.',
    SORRY: 'Sorry, but the url: ',
    WELCOME: 'Welcome to ',
    DESCRIPTION: 'Hi I\'m Xavi, a front-end developer from Lleida (Catalunya) currently living with my wife and our dog and two cats in Ferndale (Michigan).'
  },
  cat: {
    'ABOUT-ME': 'SOBRE MI',
    BACK: 'Torna',
    BACK_TO: 'Torna a la pàgina principal',
    CONTACT: 'CONTACTA',
    DOWNLOAD_RESUME: 'Descarregat el CV',
    EDIT: 'EDITA',
    FRONTEND: 'Desenvolupador web',
    NOT_EXIST: ' no existeix.',
    PAGE_NOT_FOUND: 'No s\'ha trobat la pàgina',
    POSTS: 'ARTICLES',
    PROJECTS: 'PROJECTES',
    RESUME: 'Gràcies per descarregar el meu CV.',
    SORRY: 'Ho sento, però la pàgina: ',
    WELCOME: 'Benvinguts a ',
    DESCRIPTION: 'Hola sóc en Xavi, un desenvolupador web de Lleida (Catalunya) actualment vivint amb la meva dona i els nostres gats i gos a Ferndale (Michigan).'
  }
}

export const getDictionary = (lang: string) => dictionary[lang]

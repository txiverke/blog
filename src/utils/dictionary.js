// @flow

const dictionary = {
  eng: {
    'ABOUT-ME': 'ABOUT ME',
    BACK: 'Back',
    BACK_TO: 'Back to the landing page',
    CONTACT: 'CONTACT',
    DOWNLOAD_RESUME: 'Download Résumé',
    DOWNLOADED_RESUME: 'Résumé downloaded',
    EDIT: 'EDIT',
    FRONTEND: 'Front-end developer',
    NO_POSTS_MSG: 'Press a tag button to see content.',
    NOT_EXIST: ' does not exist.',
    PAGE_NOT_FOUND: 'Page not found',
    POSTS: 'POSTS',
    POSTED_AT: 'Posted at ',
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
    DOWNLOADED_RESUME: 'CV descarregat',
    EDIT: 'EDITA',
    FRONTEND: 'Desenvolupador web',
    NO_POSTS_MSG: 'Prem algun botó per veure el contingut.',
    NOT_EXIST: ' no existeix.',
    PAGE_NOT_FOUND: 'No s\'ha trobat la pàgina',
    POSTS: 'ARTICLES',
    POSTED_AT: 'Creat el ',
    PROJECTS: 'PROJECTES',
    RESUME: 'Gràcies per descarregar el meu CV.',
    SORRY: 'Ho sento, però la pàgina: ',
    WELCOME: 'Benvinguts a ',
    DESCRIPTION: 'Hola sóc en Xavi, un desenvolupador web de Lleida (Catalunya) actualment vivint amb la meva dona i els nostres gats i gos a Ferndale (Michigan).'
  }
}

export const getDictionary = (lang: string) => dictionary[lang]

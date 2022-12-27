const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://AbdessamadAyoub2022.github.io/portfolio',
  title: 'Portfolio',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Allay Abdessamad',
  role: 'Cloud Engineer',
  description:
    'Allay Abdessamad , étudiant en 4 éme année',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/AbdessamadAyoub2022',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'social media mobile app',
    description:
      'application qui permet ajouter et supprimer des posts',
    stack: ['java', 'android studio'],
    sourceCode: 'https://github.com/AbdessamadAyoub2022/socialmedia',
    livePreview: 'https://github.com',
  },
  {
    name: 'Portfolio',
    description:
      'portfolio project s1',
    stack: ['SASS', 'js', 'React'],
    sourceCode: 'https://github.com/AbdessamadAyoub2022/portfolio',
    livePreview: 'https://github.com/AbdessamadAyoub2022/portfolio',

  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'JAVA',
  'SPRING BOOT',
  'GCP',
  'Git',
  'DOCKER',
  'JUNIT',
  'LINUX',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'abdessamadallay.isi@gmail.com',
}

export { header, about, projects, skills, contact }

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  reactjs,
  redux,
  nodejs,
  spa,
  qubicle,
  premier,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
  codinoz,
  polosys,
  mobx,
  cypress,
  universe,
  earthWork,
  aiText,
  zinia,
  chitfund,
  covid,
  aiImage,
  netflix,
  crowdfund,
  jobChain,
  slack,
  chat,
  donatecrypto,
  amazon,
  instagram,
  git,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: backend,
  },
  {
    title: 'Frontend Engineer',
    icon: web,
  },
  {
    title: 'React Specialist',
    icon: mobile,
  },

  {
    title: 'TypeScript Programmer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'React JS',
    icon: reactjs,
    map: mars,
  },
  {
    name: 'TypeScript',
    icon: typescript,
    map: earth,
  },
  {
    name: 'JavaScript',
    icon: javascript,
    map: saturn,
  },
  {
    name: 'Node JS',
    icon: nodejs,
    map: mercury,
  },
  {
    name: 'Git',
    icon: git,
    map: jupiter,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
    map: venus,
  },
  {
    name: 'MobX',
    icon: mobx,
    map: uranus,
  },
  {
    name: 'Cypress',
    icon: cypress,
    map: neptune,
  },
];

const experiences = [
  {
    title: 'Frontend Engineer',
    company_name: 'Sport Alliance GmbH',
    icon: spa,
    iconBg: '#E6DEDD',
    date: 'Dec 2021 - Current',
    points: [
      'Integral part of team Communication & Retention in Magicline (Leading ERP for gyms in DACH region).',
      'Responsibilities include managing various communication channels, including letters, emails, text messages, and in-app messaging.',
      'Implemented complex user interfaces using ReactJS with TypeScript, ensuring high performance and responsiveness with enhanced code quality and maintainability.',
      'Implemented end-to-end tests with cypress.',
      `Conduct code reviews and contribute to the team's growth and knowledge.`,
      'Oversaw technical maintenance, which involved updating packages and proactively identifying vulnerabilities.',
    ],
  },
  {
    title: 'Tech Lead',
    company_name: 'Qubicle Innovations',
    icon: qubicle,
    iconBg: '#E6DEDD',
    date: 'Sept 2019 - Nov 2021',
    points: [
      'Lead the team for developing single page ERP applications which automated, fastened and improved the day to day businesses of the organization.',
      'Scheduled automated manufacturing orders from Sales orders on a single click.',
      'Structured manufacturing workflow tracking.',
      'Integrated Inventory, Sales, Purchase, Manufacturing, Accounts, Banking and HRM modules.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Premier Logistics Corporation',
    icon: premier,
    iconBg: '#E6DEDD',
    date: 'Jul 2017 - Aug 2019',
    points: [
      'Delivered performance-driven and user-centric websites that met all business requirements.',
      'Structured internal systems comprising order entry/management tools, conversion/revenue reporting and production workflow tracking.',
      'Designed and implemented web applications, streamlining high-server traffic resource configuration and allocation.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Codinoz Technologies',
    icon: codinoz,
    iconBg: '#E6DEDD',
    date: 'May 2014 - Jun 2017',
    points: [
      'Built different applications such as warehouse management, cargo shipping portal and asset management.',
      'Successfully generated back-end programming utilizing LAMP stack; Linux, Apache, Php, CSS, JavaScript/jQuery, and MySQL.',
      'Discussed project progress with customers, collected feedback on different stages and directly addressed concerns.',
    ],
  },
  {
    title: 'Junior Software Engineer',
    company_name: 'Polosys Technologies',
    icon: polosys,
    iconBg: '#E6DEDD',
    date: 'Jun 2013 - Apr 2014',
    points: [
      'Designed, implemented and monitored web pages, plugins and functionality for continuous improvement.',
      'Built online and offline business applications in C# and Asp.net with HTML and Javascript on the front-end and SQLServer as the database.',
      'Implemented new C# class library for the SQL server database access layer, and updated previous web page frameworks.',
    ],
  },
];

const projects = [
  {
    name: 'Universe',
    description: '3D model of the solar system using ThreeJS and React',
    demo: 'https://universe-threejs.netlify.app/',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'threeJS',
        color: 'pink-text-gradient',
      },
    ],
    image: universe,
    source_code_link: 'https://github.com/Jameem/universe',
  },
  {
    name: 'Earth',
    description: '3D model of the Earth using ThreeJS and React',
    demo: 'https://earth-mj.netlify.app/',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'threeJS',
        color: 'pink-text-gradient',
      },
    ],
    image: earthWork,
    source_code_link: 'https://github.com/Jameem/earth',
  },
  {
    name: 'Zinia BSuite',
    description: 'ERP application for small to medium scale businesses',
    demo: 'https://app.zinia.tech',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'nodeJS',
        color: 'orange-text-gradient',
      },
      {
        name: 'postgresql',
        color: 'pink-text-gradient',
      },
    ],
    image: zinia,
  },
  {
    name: 'AI Text to Speech',
    description: 'Application to convert text to speech powered by OpenAI',
    demo: 'https://ai-text-to-voice.netlify.app/',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'openAI',
        color: 'green-text-gradient',
      },
    ],
    image: aiText,
    source_code_link: 'https://github.com/Jameem/ai-text-to-speech-generator',
  },
  {
    name: 'AI Image Generator',
    description:
      'Application to generate image from input text powered by OpenAI',
    demo: 'https://ai-image-jm.netlify.app/',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'openAI',
        color: 'green-text-gradient',
      },
    ],
    image: aiImage,
    source_code_link: 'https://github.com/Jameem/AI-Image-Generator-Frontend',
  },
  {
    name: 'Covid-19 Tracker',
    description: 'Application to track covid-19 infection across the globe',
    demo: 'https://covid-tracker-7fed5.web.app/',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
    ],
    image: covid,
    source_code_link: 'https://github.com/Jameem/covid19-tracker',
  },
  {
    name: 'Chit Fund',
    description:
      'Idea proposal to solve problems faced by existing Chit fund using blockchain.',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'blockchain',
        color: 'green-text-gradient',
      },
      {
        name: 'solidity',
        color: 'pink-text-gradient',
      },
    ],
    image: chitfund,
    source_code_link: 'https://github.com/Jameem/chit-fund',
  },
  {
    name: 'Netflix Clone',
    description: 'A clone of Netflix frontend using ReactJS and Firebase',
    demo: 'https://netflix-clone-5ea22.web.app/',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
    ],
    image: netflix,
    source_code_link: 'https://github.com/Jameem/netflix-clone',
  },
  {
    name: 'KickStarter',
    description:
      'Crowd funding ideas on the ethereum blockchain using smart contracts.',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'blockchain',
        color: 'green-text-gradient',
      },
      {
        name: 'solidity',
        color: 'pink-text-gradient',
      },
    ],
    image: crowdfund,
    source_code_link: 'https://github.com/Jameem/kickstarter',
  },
  {
    name: 'Amazon Clone',
    description: 'A clone of Amazon frontend using ReactJS and Firebase',
    demo: 'https://clone-186ce.web.app/',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
    ],
    image: amazon,
    source_code_link: 'https://github.com/Jameem/amazon-clone',
  },
  {
    name: 'JobChain',
    description: 'A Platform idea for freelancers on the blockchain.',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'blockchain',
        color: 'green-text-gradient',
      },
      {
        name: 'solidity',
        color: 'pink-text-gradient',
      },
    ],
    image: jobChain,
    source_code_link: 'https://github.com/Jameem/job-chain',
  },
  {
    name: 'Slack Clone',
    description: 'A clone of Slack  frontend using ReactJS and Firebase',
    demo: 'https://slack-clone-f421e.web.app/ ',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
    ],
    image: slack,
    source_code_link: 'https://github.com/Jameem/slack-clone',
  },
  {
    name: 'Zea Chat',
    description:
      'Zea Chat is a browser based chat application where users can create and join chat rooms.',
    tags: [
      {
        name: 'nodeJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'socketIO',
        color: 'green-text-gradient',
      },
    ],
    image: chat,
    source_code_link: 'https://github.com/Jameem/chat-room',
  },
  {
    name: 'DonateCrypto',
    description:
      'Donation campaign for patients suffering from chronic diseases on the blockchain.    ',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'blockchain',
        color: 'green-text-gradient',
      },
      {
        name: 'solidity',
        color: 'pink-text-gradient',
      },
    ],
    image: donatecrypto,
    source_code_link: 'https://github.com/Jameem/donate-crypto',
  },
  {
    name: 'Instagram Clone',
    description: 'A clone of Instagram frontend using ReactJS and Firebase',
    demo: 'https://instagram-clone-2a6a2.web.app/',
    tags: [
      {
        name: 'reactJS',
        color: 'blue-text-gradient',
      },
    ],
    image: instagram,
    source_code_link: 'https://github.com/Jameem/instagram-clone',
  },
];

export { services, technologies, experiences, projects };

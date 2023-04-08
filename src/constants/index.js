import {
  dba,
  backend,
  webdev,
  javadev,
  javascript,
  html,
  css,
  nodejs,
  mongodb,
  git,
  react,
  figma,
  ubuntu,
  docker,
  csharp,
  firebase,
  java,
  tailwind,
  jquery,
  postman,
  python,
  postgre,
  aws,
  centennial,
  uofthacks,
  nsbe,
  travelTherapy,
  opzioneZen,
  datadefender,
  idveri,
  jobsApi,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Machine Learning Engineer",
    icon: webdev,
  },
  {
    title: "Data Scientist",
    icon: javadev,
  },
  {
    title: "Software Engineer",
    icon: backend,
  },
  {
    title: "Cybersecurity Engineer",
    icon: dba,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "c#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React",
    icon: react,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "postgresql",
    icon: postgre,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "Ubuntu",
    icon: ubuntu,
  },
  {
    name: "JQuery",
    icon: jquery,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name:"Postman",
  //   icon: postman,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  // {
  //   name: "firebase",
  //   icon: firebase,
  // },
];

const experiences = [
  {
    title: "Financial Analyst Intern",
    company_name: "RBC Headquarters | Toronto, ON",
    icon: centennial,
    iconBg: "#454546",
    date: "May 2023 - Present",
    points: [
      "Conducted financial modeling and analysis using VBA, Excel, and Python to support decision-making processes and optimize financial performance, resulting in a 15% increase in revenue.",
      "Developed and maintained financial models and forecasting tools to monitor and analyze business trends and performance metrics, improving accuracy by 20%.",
      "Demonstrated strong communication and interpersonal skills in liaising with clients, stakeholders, and team members to gather requirements and provide guidance and support.",
    ],
    website: "https://www.rbc.com/about-rbc.html",
  },
  {
    title: "Financial Service Representative",
    company_name: "Cash Money | Toronto, ON",
    icon: uofthacks,
    iconBg: "#000",
    date: "July 2022 - Present",
    points: [
      "Demonstrated strong critical thinking and problem-solving skills by effectively handling various account and loan functions, including account validation, conducting AML investigations, and performing currency exchange transactions, resulting in a 95% customer satisfaction rate.",
      "Utilized excellent communication and collaboration skills to create and implement successful sales strategies, resulting in a 20% increase in sales.",
    ],
    website: "https://www.cashmoney.ca/?_gl=1*y4kqel*_ga*Njk1OTE4NDQ0LjE2ODA4OTIwNTM.*_ga_TWPE9F4H8S*MTY4MDg5MjA1Mi4xLjAuMTY4MDg5MjA1Mi4wLjAuMA..",
  },
  {
    title: "Financial Advisor",
    company_name: "Life100 Insurance and Investments | Toronto, ON",
    icon: nsbe,
    iconBg: "#271744",
    date: "August 2021 - Present",
    points: [
      "Educated more than 70 clients on various financial matters and delivered professional recommendations on investment opportunities, products and services based on each client’s individual needs.",
      "Earned a 100% continuous production bonus (CPB) for demonstrating a high level of commitment to the job, involving, tracking data and projecting future performances of various stocks, bonds, and funds",
    ],
    website:
      "https://life100.ca/",
  },
];

const projects = [
  {
    name: "GreenSleuth",
    type: "NLP Project",

    description:
      "GreenSleuth is an award-winning ML-driven project developed by a team of four diverse students at Hack the Mist. It utilizes NLP to analyze emergency distress calls, resulting in a 35% reduction in response times and potentially saving lives. The team strategically employed GPT API, Whisper, and Google Maps API within the innovative solution, which won the Future Impact Award. The project demonstrates adaptability, teamwork, and creativity in a high-pressure environment. GreenSleuth is a game-changer in the field of emergency services, leveraging cutting-edge technology to solve a critical problem and potentially revolutionizing the way emergency services respond to distress calls.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI",
        color: "purple-text-gradient",
      },
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "green-text-gradient",
      },
      {
        name: "Whisper",
        color: "purple-text-gradient",
      },
      {
        name: "GoogleMapsAPI",
        color: "orange-text-gradient",
      },
    ],
    image: travelTherapy,
    source_code_link:
      "https://github.com/JoshFernando/GreenSleuth---HACK-THE-MIST",
  },
  {
    name: "HackTheFeed",
    type: "Cybersecurity-related RSS aggregator and live news feed",
    description:
      "HackTheFeed is an award-winning cybersecurity RSS feed aggregator developed using Flowbite Svelte, PostgreSQL, Prisma, and Fastify at Hack the Hill. The project utilizes machine learning algorithms to personalize news content for users and provides end-to-end encryption for 256-bit secure data storage. The platform won several awards at Hack the Hill, including Best Cybersecurity Project, Best Developer Experience Project, and 1st Place Ciena-Hack the Hill awards. The platform is designed to keep individuals and organizations informed and up-to-date on the latest cybersecurity news and best practices.",
    tags: [
      {
        name: "Flowbite Svelte",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "purple-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "purple-text-gradient",
      },
      {
        name: "Fastify",
        color: "green-text-gradient",
      },
    ],
    image: opzioneZen,
    source_code_link: "https://github.com/JoshFernando/hackthefeedbackend",
    live_demo_link:
      "https://hackthefeed.com/",
  },
  {
    name: "LocalEyes",
    type: "Explore, Learn, Reward, Connect web app",
    description:
      "LocalEyes is a revolutionary web application that encourages users to explore their local communities. It won the Second Overall Winner and Best Sustainable Travel Hack in North America. With LocalEyes, users can filter and rank nearby locations based on proximity, type, and accessibility. The app incentivizes users to explore these locations by awarding coupons and points for every place they visit. When a user gets within 1km of a location, LocalEyes automatically generates contextually relevant quizzes generated by Cohere.ai that provide educational resources and award additional points. The app also uses Mapbox to provide a map for easy navigation and displays reviews from Google to help users decide which places to visit. With LocalEyes, users can explore their community while supporting local businesses and feeling more connected to their community.",
    tags: [
      {
        name: "GooglePlacesAPI",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
      {
        name: "JWT",
        color: "purple-text-gradient",
      },
      {
        name: "JSONSchema",
        color: "orange-text-gradient",
      },
      {
        name: "Swagger",
        color: "green-text-gradient",
      },
      {
        name: "DaisyUI / TailwindCSS",
        color: "purple-text-gradient",
      },
  
    ],
    image: jobsApi,
    source_code_link: "https://github.com/JoshFernando/LocalEye-backend---MAPHACKS",
    live_demo_link: "https://localey.es/",
  },
  {
    name: "DataDefender",
    type: " A Cybersecurity Chrome extension",
    description:
      "DataDefender is a chrome extension that analyzes the security and ethical standards of websites to provide users with a comprehensive understanding of the risks associated with their online activities. It generates a security score and cyber ethics analysis for each website and provides alternative options for websites with subpar privacy policies. DataDefender uses the OpenAI GPT-3 model and a third-party API to gather data on each website's security protocols, privacy policies, and data collection practices. DataDefender won the first overall winner in all in hacakton in North America and is designed to empower internet users to take control of their online privacy and security.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI GPT-3 API",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "purple-text-gradient",
      },
      {
        name: "Third-party API",
        color: "orange-text-gradient",
      },
    ],
    image: datadefender,
    source_code_link: "https://github.com/JoshFernando/DataDefender",
  },
  {
    name: "CheckMate Verification",
    type: "Explore, Learn, Reward, Connect web app",
    description:
      "Checkmate Verification, a project that verifies the legitimacy of IDs such as passports and driver's licenses to prevent fraudulent loan applications. Developed a Canadian ID verification website using OpenCV and Tesseract OCR, resulting in a 50% reduction in fraudulent loan applications and saving the company $100,000 annually. Also, explored various deep learning models, resulting in a 20% increase in accuracy of face detection.",
    tags: [
      {
        name: "Python",
        color: "purple-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
  
      {
        name: "Tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Keras",
        color: "purple-text-gradient",
      },
      {
        name: "TesseractOCR",
        color: "orange-text-gradient",
      },
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
    ],
    image: idveri,
    source_code_link: "https://github.com/JoshFernando/Checkmate-Verification-repo",
  },
];

export { services, technologies, experiences, projects };

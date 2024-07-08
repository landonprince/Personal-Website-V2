import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  python,
  java,
  rust,
  go,
  js,
  c,
  reactLogo,
  htmlLogo,
  cssLogo,
  cpp,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "About Me",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Portfolio",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Contact",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  python,
  java,
  cpp,
  rust,
  js,
  reactLogo,
  htmlLogo,
  cssLogo,
];

export const brainwaveServices = [
  "Software Engineering",
  "Artificial Intelligence",
  "Programming Languages",
];

export const brainwaveServices2 = [
  "Intermediate Software Design",
  "Data Structures & Algorithms",
  "Discrete Structures",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: python,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: java,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "High School",
    price: "2019 - 2022",
    description:
      "Graduated from Highland Park High School, located in Dallas, Texas",
    features: [
      "Began learning the fundamentals of computer science",
      "Graduated Magna Cum Laude with a GPA of 4.23 / 5.00",
      "Earned the AP Scholar award, having taken 9 AP courses ",
      "Active member of the Computer Science National Honor Society ",
    ],
  },
  {
    id: "1",
    title: "Vanderbilt University",
    price: "2022 - 2026",
    description:
      "Expected to graduate from Vanderbilt University, located in Nashville, Tennessee",
    features: [
      "Majoring in Computer Science through the Vanderbilt School of Engineering",
      "Minoring in Business through the Hoogland Business Program",
      "Received the Dean's List Honor in 2023 & 2024 for high GPA",
      "Active member of the Pi Kappa Alpha fraternity & network",
    ],
  },
  {
    id: "2",
    title: "Beyond",
    price: "2026 + +",
    description:
      "Planning to pursue a career in software development and engineering",
    features: [
      "Thrilled to apply my programming knowledge to my career",
      "Dedicated to evolving the technology sector",
      "Will continue to develop my personal portfolio & skills",
      "Committed to bringing a blend of curiosity & collaborative spirit",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Pixalyze",
    text: "Pixalyze is an easy-to-use command-line application. It allows for the use of an ever-growing collection of commands to analyze and process images.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: cpp,
    imageUrl: benefitImage2,
    githubUrl: "https://github.com/landonprince/Pixalyze",
  },
  {
    id: "1",
    title: "PySlice",
    text: "PySlice is an addictively fun 2D platformer made entirely with Python & Pygame. Play as a katana-wielding ninja and traverse treacherous worlds.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: python,
    imageUrl: benefitImage2,
    light: true,
    githubUrl: "https://github.com/landonprince/PySlice",
  },
  {
    id: "2",
    title: "Mad Libs Generator",
    text: "Mad Libs Generator is a program that allows the player to generate their own custom Mad Lib templates, and then fill in the blank spaces to create fun stories.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: java,
    imageUrl: benefitImage2,
    githubUrl: "https://github.com/landonprince/Mad-Libs-Generator",
  },
  {
    id: "3",
    title: "Personal Website",
    text: "This website displays my portfolio, information about me, and more in a visually appealing design using React & Tailwind.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: reactLogo,
    imageUrl: benefitImage2,
    light: true,
    githubUrl: "https://github.com/landonprince/websiteV2",
  },
  {
    id: "4",
    title: "ChatFlow Manager",
    text: "ChatFlow manager is a program that allows the user to store, retrieve, and manipulate messages.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: java,
    imageUrl: benefitImage2,
    githubUrl: "https://github.com/landonprince/Chat-Flow-Manager",
  },
  {
    id: "5",
    title: "Image To ASCII",
    text: "Image to ASCII is a program that uses the OpenCV library to allow users to convert any image to high-quality ASCII art.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: cpp,
    imageUrl: benefitImage2,
    githubUrl: "https://github.com/landonprince/Image-To-ASCII-Converter",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

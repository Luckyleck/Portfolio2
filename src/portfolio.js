/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Alex Lecky",
  description:
    "A Full-Stack Developer with a unique background in teaching, a can-do attitude, and an eagerness to be a part of an impactful team.",
  og: {
    title: "Alex Lecky Portfolio",
    type: "website",
    url: "http://alexlecky.com/",
  },
};

//Home Page
const greeting = {
  title: "Alex Lecky",
  logo_name: "AlexLecky",
  nickname: "luckyleck",
  subTitle:
    "A Full-Stack Developer with a unique background in teaching, a can-do attitude, and an eagerness to be a part of an impactful team.",
  resumeLink:
    "https://docs.google.com/document/d/1Tzui46qHv2WwnP-5j4jgKQNwi7DIJkfxwTpwdsseHp4/edit?usp=sharing",
  portfolio_repository: "https://github.com/Luckyleck/Portfolio2",
  githubProfile: "https://github.com/luckyleck",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/luckyleck",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/alexthelecky1875273/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:mralexanderlecky@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Deeplearning",
    //       imageSrc: "deeplearning_ai_logo.png",
    //     },
    //   ],
    // },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front-ends using React-Redux",
        "⚡ Developing intuitive mobile applications using React Native, Expo, NestJS and TypeScript",
        "⚡ Creating scalable and efficient backends in Rails and Express",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
        },
        {
          skillName: "ReactJS & Native",
          fontAwesomeClassname: "logos:react",
          style: {
            color: "#149eca",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos:redux",
        },
        {
          skillName: "Ruby on Rails",
          fontAwesomeClassname: "skill-icons:rails",
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "skill-icons:git",
        },
      ],
    },
    // {
    //   title: "Cloud Infra-Architecture",
    //   fileName: "CloudInfraImg",
    //   skills: [
    //     "⚡ Experience working on multiple cloud platforms",
    //     "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
    //     "⚡ Deploying deep learning models on cloud to use on mobile devices",
    //     "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "AWS",
    //       fontAwesomeClassname: "simple-icons:amazonaws",
    //       style: {
    //         color: "#FF9900",
    //       },
    //     },
    //     {
    //       skillName: "Azure",
    //       fontAwesomeClassname: "simple-icons:microsoftazure",
    //       style: {
    //         color: "#0089D6",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "PostgreSQL",
    //       fontAwesomeClassname: "simple-icons:postgresql",
    //       style: {
    //         color: "#336791",
    //       },
    //     },
    //     {
    //       skillName: "MongoDB",
    //       fontAwesomeClassname: "simple-icons:mongodb",
    //       style: {
    //         color: "#47A248",
    //       },
    //     },
    //     {
    //       skillName: "Docker",
    //       fontAwesomeClassname: "simple-icons:docker",
    //       style: {
    //         color: "#1488C6",
    //       },
    //     },
    //     {
    //       skillName: "Kubernetes",
    //       fontAwesomeClassname: "simple-icons:kubernetes",
    //       style: {
    //         color: "#326CE5",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "FreeCodeCamp",
      iconifyClassname: "simple-icons:freecodecamp",
    },
    {
      siteName: "The Odin Project",
      iconifyClassname: "simple-icons:theodinproject",
      style: {
        color: "#5d5d5d",
      },
    },
    {
      siteName: "Codewars",
      iconifyClassname: "cib:codewars",
      style: {
        color: "#f05656",
      },
      profileLink: "https://www.codewars.com/users/Luckyleck",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "App Academy",
      subtitle: "Full Stack Development",
      logo_path: "app_academy_logo.png",
      alt_name: "App Academy",
      duration: "Dec 2022 - April 2023",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.appacademy.io/",
    },
    {
      title: "University of Cambridge",
      subtitle: "Certificate in English Language Teaching to Adults (CELTA)",
      logo_path: "cambridge_uni_logo.png",
      alt_name: "cambridge uni logo",
      duration: "Sep 2018",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link:
        "https://www.cambridgeenglish.org/teaching-english/teaching-qualifications/celta/",
    },
  ],
};

// const certifications = {
// certifications: [
//   {
//     title: "Machine Learning",
//     subtitle: "- Andrew Ng",
//     logo_path: "stanford_logo.png",
//     certificate_link:
//       "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//     alt_name: "Stanford University",
//     color_code: "#8C151599",
//   },
//   {
//     title: "Deep Learning",
//     subtitle: "- Andrew Ng",
//     logo_path: "deeplearning_ai_logo.png",
//     certificate_link:
//       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
//     alt_name: "deeplearning.ai",
//     color_code: "#00000099",
//   },
//   {
//     title: "ML on GCP",
//     subtitle: "- GCP Training",
//     logo_path: "google_logo.png",
//     certificate_link:
//       "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
//     alt_name: "Google",
//     color_code: "#0C9D5899",
//   },
//   {
//     title: "Data Science",
//     subtitle: "- Alex Aklson",
//     logo_path: "ibm_logo.png",
//     certificate_link:
//       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
//     alt_name: "IBM",
//     color_code: "#1F70C199",
//   },
//   {
//     title: "Big Data",
//     subtitle: "- Kim Akers",
//     logo_path: "microsoft_logo.png",
//     certificate_link:
//       "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
//     alt_name: "Microsoft",
//     color_code: "#D83B0199",
//   },
//   {
//     title: "Advanced Data Science",
//     subtitle: "- Romeo Kienzler",
//     logo_path: "ibm_logo.png",
//     certificate_link:
//       "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
//     alt_name: "IBM",
//     color_code: "#1F70C199",
//   },
//   {
//     title: "Advanced ML on GCP",
//     subtitle: "- GCP Training",
//     logo_path: "google_logo.png",
//     certificate_link:
//       "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
//     alt_name: "Google",
//     color_code: "#0C9D5899",
//   },
//   {
//     title: "DL on Tensorflow",
//     subtitle: "- Laurence Moroney",
//     logo_path: "deeplearning_ai_logo.png",
//     certificate_link:
//       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
//     alt_name: "deeplearning.ai",
//     color_code: "#00000099",
//   },
//   {
//     title: "Fullstack Development",
//     subtitle: "- Jogesh Muppala",
//     logo_path: "coursera_logo.png",
//     certificate_link:
//       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
//     alt_name: "Coursera",
//     color_code: "#2A73CC",
//   },
//   {
//     title: "Kuberenetes on GCP",
//     subtitle: "- Qwiklabs",
//     logo_path: "gcp_logo.png",
//     certificate_link:
//       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
//     alt_name: "GCP",
//     color_code: "#4285F499",
//   },
//   {
//     title: "Cryptography",
//     subtitle: "- Saurabh Mukhopadhyay",
//     logo_path: "nptel_logo.png",
//     certificate_link:
//       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
//     alt_name: "NPTEL",
//     color_code: "#FFBB0099",
//   },
//   {
//     title: "Cloud Architecture",
//     subtitle: "- Qwiklabs",
//     logo_path: "gcp_logo.png",
//     certificate_link:
//       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
//     alt_name: "GCP",
//     color_code: "#4285F499",
//   },
// ],
// };

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Contributions",
  description:
    "I have worked in various areas of coding. Most recently, I finished an internship with a small travel startup. Other endeavors include the construction of SaaS apps and tools for developers. and contributing to open-source projects and communities such as Chance.JS and Beyond All Reason.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "English Language Teacher",
          company: "Smile English",
          company_url: "https://smileenglish.ru/",
          logo_path: "smile_english.png",
          duration: "Dec 2018 - March 2022",
          location: "Moscow, Russia",
          description:
            "Designed and customized an extensive array of educational materials, comprising textbooks, handouts, audiovisual aids, and online platforms, tailored to diverse age groups, proficiency levels, and learning objectives. Prepared students for official English exams such as the Cambridge IELTS or the American TOEFL. Cultivated a supportive and inclusive classroom atmosphere by advocating mutual respect, fostering active participation, and encouraging collaborative learning. Oversaw teacher schedules and engaged in contract negotiations with schools and businesses.",
          color: "#000000",
        },
        {
          title: "Freelance Tutor",
          company: "Fiverr",
          company_url:
            "https://www.fiverr.com/luckyleck/tutor-in-english-at-any-level-new-york-native-speaker",
          logo_path: "fiverr_logo.png",
          duration: "Apr 2022 - Present",
          location: "Remote",
          description:
            "Delivering comprehensive English instruction online across diverse age groups and proficiency levels. Distinguished as a 'Level 2 Seller,' with a focus on accent refinement and conversational fluency. Honed adeptness in remote work methodologies, encompassing precise time management and scheduling proficiency. Garnered a consistent stream of 5-star reviews and fostered enduring client relationships through exceptional service delivery.",
        },
        {
          title: "Full Stack Developer",
          company: "Travel Hotline",
          company_url: "https://travelhotline.info/",
          logo_path: "TH_logo.png",
          duration: "Feb 2024 - Apr 2024",
          location: "Remote",
          description:
            "Worked dilligently as an intern, utilizing React Native, TypeScript, Node.js, NestJS, Prisma, PostgreSQL, Expo, Redux, Husky, ESLint, Figma, and Babel. Designed and implemented numerous React Native components and screens, helped architect and develop a robust backend solution with NestJS, and coded pixel-perfect UI/UX translations from Figma files.",
          color: "#9b1578",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Machine Learning Intern",
    //       company: "TikTok Inc.",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "May 2022 - Aug 2022",
    //       location: "San Francisco, USA",
    //       description:
    //         "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    {
      title: "Contributions",
      experiences: [
        {
          title: "Chance.JS",
          company: "Opensource",
          company_url: "https://chancejs.com/",
          logo_path: "chancejs_logo.png",
          description:
            "Crafted a function enabling users to generate random music genres from a pool of over 600 options. Implemented thorough unit tests using AVA to maintain functionality integrity during development. Additionally, documented the function's purpose and provided user-friendly instructions in a markdown file.",
        },
        {
          title: "Beyond All Reason",
          company: "Opensource Video Game",
          company_url: "https://github.com/Luckyleck/Bar-Mod-Installer",
          logo_path: "beyond_all_reason_logo.png",
          duration: "Aug 2019 - May 2020",
          description:
            "As an opensource community driven game with many developers and players from around the world, mods have become commonplace and players use them to enhance their gameplay experience. To make the installation of mods easier, I built a command line application that will automatically install mod scripts from github. It uses the 'fs' library and the node package 'pkg'",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Showcased here are projects that I built during my initial learning of full stack development. They use various technologies and stacks, each highlighting a certain skill of mine",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "cartoon_me.png",
    description:
      "Feel free to reach out to me on any of the platforms below. I will respond in less than 24 hours. I'm currently searching for a full time position as a developer.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Location",
    subtitle: "New York, NY, USA",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/kjhx7xjjYmmu3f5V7",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "(970) 765-7934",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  // certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

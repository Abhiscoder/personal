// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
// import mcLogo from './assets/tech_logo/mc.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import java from './assets/tech_logo/java.png';
import typescript from './assets/tech_logo/typescript.png';
import jwt from './assets/tech_logo/jwt.png';
import cloudinary from './assets/tech_logo/cloudinary.png';
import bcrypt from './assets/tech_logo/bcrypt.jpg';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/shriram.jpg';
import csprepLogo from './assets/work_logo/cs_prep.jpg';
import movierecLogo from './assets/work_logo/movie_rec.jpg';
import abhichat from './assets/work_logo/abhichat.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescript },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'Framer Motion', logo: materialuiLogo },
      // { name: 'daisy UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
      { name: 'Material UI', logo: materialuiLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'JWT', logo: jwt },
      { name: 'Bcrypt', logo: bcrypt },
    ],
  },
  {
    title: 'DataBase',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'cloudinary', logo: cloudinary },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'JAVA', logo: java },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Quality Assurance Engineer",
    company: "TalextXO",
    date: "Jan 2025 - Apr 2025",
    desc: "As a Quality Assurance Engineer, I was responsible for ensuring the quality and reliability of software products through rigorous testing and validation processes. I collaborated with cross-functional teams to identify and resolve defects, conducted thorough testing of applications, and implemented automated testing frameworks to enhance efficiency. My role involved creating detailed test plans, executing test cases, and providing valuable feedback to developers to ensure the delivery of high-quality software solutions.",
    skills: [
      "Manual Testing",
      "Test Case Design",
      "Bug Reporting",
      "SDLC & STLC Knowledge",
      "Functional Testing",
      "Regression Testing",
      "Smoke & Sanity Testing",
      "API Testing (Postman - Basics)",
      "HTML (Basic Understanding)",
      "Git & GitHub (Basic Version Control)",
      "Cross-Browser Testing",
      "Test Scenario Writing",
      "Mobile App Testing (Basics)",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "GEU University, Dehradun",
    date: "Aug 2023 - July 2025",
    grade: "7.78 CGPA",
    desc: "I am pursuing my Master's degree (MCA) in Computer Applications from GEU University, Dehradun. During my time at GEU, I gained a strong foundation in programming, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, and Web Development. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GEU University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Master of Computer Applications - MCA",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "TPS College, Patna",
    date: "Apr 2020 - Apr 2023",
    grade: "65%",
    desc: "I completed my Bachelor's degree in Bachelor of Computer Application (BCA) from TPS College, Patna. Throughout my studies. From exploring Web Development and Database Management Systems. My time at TPS College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Application - BSC (BCA)",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "S.R.R.S +2 High School, Punpun",
    date: "Apr 2018 - March 2019",
    grade: "62%",
    desc: "I completed my class 12 education from S.R.R.S +2 High School, Punpun, under the BSEB Board, where I studied Physics, Chemistry, and Mathematics (PCM)",
    degree: "BSEB(XII)",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "High School, Dumari",
    date: "Apr 2016 - March 2017",
    grade: "50%",
    desc: "I completed my class 10 education from High School, Dumari, under the BSEB Board, where I studied Science.",
    degree: "BSEB(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Ram Mandir Ayodhya - Booking & Donation Portal",
    description:
      "Developed a full-stack web application featuring secure user authentication and donation workflow.Implemented JWT and Bcrypt for secure user sessions, reducing unauthorized access risks.Integrated Cloudinary API for efficient image management and Axios for optimized frontend to backend.Designed a responsive UI with Tailwind CSS, resulting in a 25% improvement in mobile load speeds.",
    image: githubdetLogo,
    tags: ["React JS", "TailwindCSS", "JavaScript", "Node Js", "Express", "MongoDB", "Cloudinary", "HTML", "CSS", "Git", "GitHub", "Vercel", "Postman"],
    // github: "",
  },
  {
    id: 1,
    title: "Cilli Blog -  Blogging Platform",
    description:
      "Architected a full CRUD blogging system allowing users to create, edit, and manage content in real-time.Leveraged MongoDB for flexible data storage and RESTful API endpoints for high-performance data retrieval.Validate application stability through manual testing and deployed via Vercel for 99.9% uptime. The site is designed to provide a smooth experience across all devices.",
    image: csprepLogo,
    tags: ["React JS", "Redux", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt.js", "Axios", "React Router", "Tailwind CSS", "Vercel", "Render"],
    github: "https://github.com/Abhiscoder/ChiliBlogs",
  },
  {
    id: 2,
    title: "Wanderlust - Hotel Booking Web Application",
    description:
      "Designed an interactive frontend using Bootstrap and JavaScript to enhance user engagement.Built a robust backend with Node.js and Express.js to handle complex form validations and secure data submission.Managed data persistent using MongoDB, ensuring scalable storage for user booking information. The platform includes image uploads, filters, and map integration to deliver a user-friendly, travel-focused interface.",
    image: movierecLogo,
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Abhiscoder/wonderlust",
  },
  {
    id: 3,
    title: "AbhiChat - Real-Time Chat Application",
    description:
      "Developed a full-stack chat application with separate client and server architecture to enable real-time user communication.Implemented backend APIs using Node.js, Express.js, Socet.IO for message handling, user interactions.Built a responsive and interactive frontend using JavaScript to ensure smooth user experience.",
    image: abhichat,
    tags: ["React.js", "TailwindCSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    github: "https://github.com/Abhiscoder/AbhiChat.git",
  },
];  

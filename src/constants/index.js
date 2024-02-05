import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "c/c++ Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mostrisimo",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C",
    icon: redux,
  },
  {
    name: "Python",
    icon: tailwind,
  },
  {
    name: "Java",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Internship",
    company_name: "Amazon",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Dec 2021",
    points: [
      "Internship working in Financial Operations at Amazon",
      "Collaborating with a team of 5 people meeting deadlines for accounts in Brasil, Mexico and India",
      "While being in High School perusing an accounting technician",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Spect Soluciones Informaticas",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2022 - Now",
    points: [
      "Developed a responsive website that increased user engagement by 20%. Using HTML, CSS and JavaScript.",
      "Collaborating with a team of three to meet project deadlines and design changes on the site.",
      "Remained working with the company on making websites to customers and maintaining the existing ones",
    ],
  },
  {
    title: "Be the next one!",
    company_name: "Your company",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Now - ...",
    points: [
      "I'm looking for intenships or part time jobs to be able to keep studying while gaining real experience in the industry.",
      "I'm a fast learner person and starved for knowledge. I can easly adap to any circumstance that is put in front of me, very collaborative and passionate.",
      "Don't doubt to reach me out in the contact section!"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Fut Reducido",
    description:
      "Web-based platform that shows information aboout a soccer project named Fut Reducido. The page is used to show information about future tournaments and also to stream those tournaments.",
    tags: [
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/spectprueba/FUTREDUCIDO",
  },
  {
    name: "Tanks",
    description:
      "A recreation of the 1990 NES game. Developed with a team of 5 meeting project deadlines working with a system of milestones for a college project.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "qt",
        color: "green-text-gradient",
      },
      {
        name: "x86-64 assembly",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://https://git.ucr.ac.cr/CAMILA.ATEHORTUA/tanksdefinitivo.com/",
  },
  {
    name: "Much more to come",
    description:
      "I'm currently working on various projects to expand my knowled as well as my portfolio (of course). Meanwhile you can check my github to see my college-related projects exploring parallel programing, OOP and assembly.",
    tags: [
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
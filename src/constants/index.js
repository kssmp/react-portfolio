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
      title: "Software Developer",
      icon: mobile,
    },
    {
      title: "Product Manager",
      icon: backend,
    },
     {
      title: "Web Developer",
      icon: web,
    }, 
    {
      title: "Content Writer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: redux,
    },
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "JAVA",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Research Intern",
      company_name: "Society of Space Reasearch and Development (SSERD)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "June 2021 - August 2021",
      points: [
        "Formulated a research paper on the role of Magnetic Fields and Turbulence in star formation via theoretical models by using data of star forming giant molecular clouds (SFC GMCs) in Milky Way.",
        "Collaborated with professionals from diverse fields and worked together to create cohesive presentations for our supervising professors.",
        "Spearheaded the management of the abundant data that was being collected and sorted by the team.",
      ],
    },
    {
      title: "Content Writer",
      company_name: "The City One Initiative",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "April 2022",
      points: [
        "Collaborated with other team members to write and proofread website blogs and social media posts, implementing SEO-efficient techniques that resulted in increased traffic.",
        "Worked one on one with clients to understand their needs and long term goals.",
      ],
    },
    {
      title: "Cultural Head",
      company_name: "SAC, IITN",
      icon: shopify,
      iconBg: "#383E56",
      date: "Aug 2022 - May 2023",
      points: [
        "Spearheaded the establishment of several recurring annual events, which served as a catalyst for instilling a diverse cultural ethos within the institution during my tenure",
        "Effectively communicated our goals and motives to potential investors, resulting in the successful acquisition of sponsorships",
        "Constructively oversaw a team of approximately 113 individuals therby curated and managed the institutes' annual cultural festival ABHIVYAKTI'23, which drew an impressive aggregate footfall of over 10,000 patrons",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "Bank Management System",
      description:
        "Designed and developed a complete interface that replicated the functionalities of a banking system, utilizing MySQL as the regional database management system to store and process the user inputs.Worked closely with a team of 5 over the span of 4 weeks to create multiple modules like Account Opening, Withdrawal and Deposit, Current Status etc.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "API",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/kssmp",
    },
    {
      name: "3D Developer Portfolio",
      description:
        "A 3D web developer Portfolio in ReactJS incorporating ThreeJs to render and animate 3D models, along with TailwindCSS and Framer Motion to enhance interactivity on the webpage. Additionally, the portfolio integrates emailJS to enable modern email sending functionality.",
      tags: [
        {
          name: "reactJS",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
        {
          name: "FramerMotion",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/kssmp",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/kssmp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
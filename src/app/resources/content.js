
const person = {
  firstName: "Shawnee",
  lastName: "Amos",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Engineer",
  avatar: "/images/avatar.jpg",
  location: "America/Los_Angeles", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "shawneeamos@gmail.com",
    icon: "email",
    link: "mailto:shawneeamos@gmail.com",
  },
  {
    name: "https://github.com/jusdy",
    icon: "github",
    link: "https://github.com/jusdy",
  },
  {
    name: "+1 (541)-918 3871",
    icon: "clipboard",
    link: "tele:+1 (541)-918 3871"
  },
 
  
  
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Engineer and Web3 Developer</>,
  subline: (
    <>
      I'm Shawnee Amos, a full-stack engineer with a focus on creating user-friendly experiences and building solutions from front-end to back-end. I also specialize in web3 technologies and work on personal projects to keep improving my skills.
      
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Shawnee Amos is a full-stack engineer and web3 developer based in Albany, OR. 
        With a keen interest in solving complex problems, Shawnee specializes in crafting seamless and efficient web applications. 
        Their expertise bridges the gap between web2 and web3 technologies, delivering innovative solutions that combine functionality with a user-centric design approach.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Steady Platform",
        timeframe: "07/2023 - 01/2025",
        role: "Lead Full Stack Developer",
        achievements: [
          <>
            Led front-end development efforts to improve accessibility and usability, migrating 50+ Next.js components from SCSS to
            Chakra UI to align with ADA compliance standards.
          </>,
          <>
            Developed an MVP fundraising CRM using Next.js, TypeScript, and Redux Toolkit, optimizing performance with Dockerized
            microservices, leading to a 30% improvement in load times.
          </>,
          <>
            Enhanced UX by adapting 20+ Figma wireframes, collaborating with clients to align designs with business objectives,
            resulting in an increase in user engagement.
          </>,
          <>
            Integrated a Django-based Python back-end for API management, enhancing data flow efficiency and reducing API response
            times by 35%.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          
        ],
      },
      {
        company: "Meltwater",
        timeframe: "03/2020 – 06/2023",
        role: "Senior Software Engineer",
        achievements: [
          <>
            Improved the performance and usability of B2B and B2C media intelligence and social analytics software, reducing load
            times by 30% and increasing user engagement.
          </>,
          <>
            Enhanced a MERN-based eCommerce system, optimizing the checkout process by 40%, resulting in a 15% higher conversion
            rate and contributing to $2M+ in annual revenue.
          </>,
          <>
            Optimized web applications with Tailwind CSS, achieving full mobile responsiveness and improving user satisfaction scores
            by 35%.
          </>,
          <>
            Developed a scalable data storage system using React, Node.js, and Express.js, optimizing retrieval times by 50% and
            improving efficiency for 500,000+ active users.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Meltwater",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Hodldevs",
        timeframe: "04/2018 – 02/2020",
        role: "Front-End Developer",
        achievements: [
          <>
            Designed and maintained a blockchain-based real estate platform using Next.js and TypeScript, increasing site speed by
            40% and boosting user engagement.
          </>,
          <>
            Optimized website performance, reducing loading speed by 35%, which led to a 20% decrease in bounce rates and improved
            overall user retention.
          </>,
          <>
            Implemented cryptocurrency payment gateways with smart contracts, reducing transaction processing time by 50% through
            optimized blockchain interactions.
          </>,
          <>
            Collaborated with UI/UX designers and back-end teams to develop high-performance, interactive pages, improving user
            satisfaction scores by 30% based on customer feedback.
          </>,
          <>
            Developed blockchain-based authentication solutions, improving security and decentralization, reducing unauthorized
            access by 60%.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/image-04.png",
            alt: "Meltwater",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Freelance / Contract Work",
        timeframe: "01/2017 – 03/2018",
        role: "Full-Stack Developer ",
        achievements: [
          <>
            Developed and deployed 10+ scalable web applications with React, Node.js, and MongoDB, improving system efficiency and
            supporting 100,000+ users.
          </>,
          <>
            Designed and implemented 15+ RESTful APIs with Node.js and PostgreSQL, reducing data retrieval time by 30% and
            improving backend performance.
          </>,
          <>
            Reduced website load times by 40%, leading to a 25% increase in user retention, through lazy loading, code splitting, and
            image optimization.
          </>,
          <>
            Managed cloud deployment for 20+ applications, containerizing services with Docker and deploying on AWS and Azure,
            achieving 99.9% uptime and enhanced scalability.
          </>,
          <>
            Utilized Git/GitHub for version control, streamlining collaboration across cross-functional teams of 10+ developers, reducing
            code conflicts by 50%.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/image-05.png",
            alt: "Meltwater",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "The College of Saint Rose",
        description: <>Bachelor’s Degree in Computer Science</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

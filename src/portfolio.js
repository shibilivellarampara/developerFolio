/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Shibil Muhamed",
  title: "Hi all, I'm Shibliee",
  subTitle:
    "Java Backend Developer | Spring Boot | Microservices | Cloud | Learning Angular",
  resumeLink:
    "https://drive.google.com/file/d/1lcgcoOVcNkY3swzsjbayNsqmUmCcWnRP/view?usp=sharing",
  githubProfile: "https://github.com/shibilivellarampara"
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/shibilivellarampara",
  linkedin: "https://www.linkedin.com/in/shibil-muhamed-v-b51b55100/",
  gmail: "ShibilVellarampara@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100008176482284",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "PASSIONATE BACKEND DEVELOPER WITH A KEEN EYE FOR CLEAN CODE",
  skills: [
    emoji("⚡ Develop robust Java Spring Boot Microservices for scalable enterprise apps"),
    emoji("⚡ RESTful APIs integration with secure authentication and logging"),
    emoji("⚡ Deployment experience with Google Cloud Run, AWS, and DigitalOcean")
  ],

  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "AWS", fontAwesomeClassname: "fab fa-aws" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Angular", fontAwesomeClassname: "fab fa-angular" },
    { skillName: "Maven", fontAwesomeClassname: "fas fa-cogs" },
    { skillName: "JUnit/Mockito", fontAwesomeClassname: "fas fa-vial" }
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "MEA Engineering College, Perinthalmanna",
      logo: require("./assets/images/MEALogo.png"),
      subHeader: "B.Tech in Computer Science and Engineering",
      duration: "August 2017 - July 2021",
      desc: "Completed degree with practical exposure in AI/ML, MEAN stack, and system design.",
      descBullets: [
        "MEAN stack certified by ICT Academy",
        "Volunteered in IEEE and IEDC for startup initiatives"
      ]
    }
  ]
};

// Tech Stack Experience
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Backend", progressPercentage: "85%" },
    { Stack: "Cloud & DevOps", progressPercentage: "70%" },
    { Stack: "Frontend (Angular)", progressPercentage: "50%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
      {
        role: "Senior Java Developer",
        company: "Allianz Technology",
        companylogo: require("./assets/images/allianzLogo.png"),
        date: "Mar 2025 – Present",
        desc: "Currently working as a Senior Java Backend Developer handling microservices and cloud deployments."
      },
      {
        role: "Software Engineer",
        company: "SunTec Business Solutions",
        companylogo: require("./assets/images/suntecLogo.png"),
        date: "Jan 2021 – Oct 2024",
        desc: "Worked on Java 8/17, Spring Boot microservices, and Xelerate platform integrations.",
        descBullets: [
          "Migrated product from TBMS to Xelerate2.4, reducing revenue loss and boosting performance",
          "Developed APIs, custom validations, and enhanced BE services with catalog integration"
        ]
      }
    ]
};

// Open Source
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Projects
const bigProjects = {
  title: "Personal Projects",
  subtitle: "PROJECTS THAT SOLVE REAL PROBLEMS",
  projects: [
    {
      image: require("./assets/images/instaBuddy.png"),
      projectName: "InstaBuddy Bot",
      projectDesc: "Telegram bot that analyzes Instagram data (followers, pending requests, etc.) and generates styled PDF reports.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/shibilivellarampara/DevSpace"
        }
      ]
    },
    {
      image: require("./assets/images/bankingSystem.jpeg"),
      projectName: "Java Banking System",
      projectDesc: "A full-stack Java banking app with Angular UI, GCP deployment, REST APIs, and PDF reporting.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/shibilivellarampara/java-banking-system"
        }
      ]
    },
    {
          image: require("./assets/images/facemask.png"),
          projectName: "Face Mask Detection",
          projectDesc: "Final year project using Python, OpenCV, and deep learning to detect face masks in real-time video streams.",
          footerLink: [
            {
              name: "GitHub",
              url: "https://github.com/shibilivellarampara/face_mask_detection"
            }
          ]
        }
  ],
  display: true
};

// Achievements
const achievementSection = {
  title: emoji("Achievements and Certifications 🏆"),
  subtitle: "Certifications and recognitions earned over time.",
  achievementsCards: [
    {
      title: "MEAN Stack Course",
      subtitle: "Completed Full Stack course with 70% scholarship at ICT Academy.",
      image: require("./assets/images/ictLogo.png"),
      imageAlt: "ICT Logo",
      footerLink: []
    },
    {
      title: "Kedarkantha Trek",
      subtitle: "Completed adventurous Himalayan trek in 2025.",
      image: require("./assets/images/trekLogo.png"),
      imageAlt: "Trek Logo",
      footerLink: []
    }
  ],
  display: true
};

// Blogs
const blogSection = {
  title: "Blogs",
  subtitle: "Writing on useful dev tools and learning paths coming soon.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks
const talkSection = {
  title: "TALKS",
  subtitle: emoji("Soon sharing talks on Java and backend best practices 💬"),
  talks: [],
  display: false
};

// Podcast
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Planning to launch tech podcast series for backend enthusiasts.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Got a project or opportunity? I’m open to discussions.",
  number: "+91-9947919201",
  email_address: "ShibilVellarampara@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

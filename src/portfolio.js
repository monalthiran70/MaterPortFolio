/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Monalthiran's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Monal Thiran Portfolio",
    type: "website",
    url: "http://.com/",
  },
};

//Home Page
const greeting = {
  title: "Monalthiran",
  logo_name: "Monalthiran",
  nickname: "DotNet Developer",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  // resumeLink:
  //   "https://drive.google.com/file/d/1FL_wydnPF2SWCdw2goYAgZ1KKBx8TpcD/view?usp=sharing",
  resumeLink:
  "https://www.showwcase.com/monalthiran70",
  portfolio_repository: "https://github.com/monalthiran70/masterPortfolio",
  githubProfile: "https://github.com/monalthiran70",
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
    link: "https://github.com/monalthiran70",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/monal-periyasamy-96bbb1252/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:monalthiran804@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/#",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/monalthiran70",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/monal_the_innocent/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "WhatsApp",
    link: "https://wa.me/+971525254619",
    fontAwesomeIcon: "fa-whatsapp", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#05F44F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "ERP Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing and customizing ERP systems to improve business processes.",
        "⚡ Integrating ERP with other applications and systems to ensure seamless data flow.",
        "⚡ Writing code and developing software modules to implement required functionalities.",
        "⚡ Conducting thorough testing to identify and fix bugs and ensure the system functions smoothly.",
        "⚡ Providing ongoing support and troubleshooting to assist end-users with technical issues.",
      ],
      softwareSkills: [
        {
          skillName: "ERP",
          fontAwesomeClassname: "tabler:brand-office",
          style: {
            backgroundColor: "transparent",
            color: "blue",
          },
        },
        {
          skillName: "Material Management",
          fontAwesomeClassname: "devicon:materialui",
          style: {
            backgroundColor: "transparent",
            //backgroundColor: "white",
            //color: "#D00000",
          },
        },
        {
          skillName: "Finance Management",
          fontAwesomeClassname: "carbon:finance",
          style: {
            backgroundColor: "transparent",
            color: "green",
          },
        },
        {
          skillName: "HR Management",
          fontAwesomeClassname: "twemoji:office-worker",
          style: {
            backgroundColor: "transparent",
            //color: "#3776AB",
          },
        },
        // {
        //   skillName: "Deeplearning",
        //   imageSrc: "deeplearning_ai_logo.png",
        // },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Utilizing the .NET Framework to develop both web and Windows applications.",
        "⚡ Building web applications using ASP.NET and MVC.NET with C# as the server-side language.",
        "⚡ Enhancing web application interactivity with jQuery and JavaScript on the front-end.",
        "⚡ Creating user-friendly web interfaces that are responsive and work seamlessly across devices.",
        "⚡ Developing Windows applications using C# and VB.NET for specific business needs.",
        "⚡ Integrating Oracle and SQL databases with the applications for efficient data management.",
        "⚡ Ensuring data security and integrity through robust database design and implementation.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "logos:html-5",
          style: {
            backgroundColor: "transparent",
            color: "#E34F26",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            backgroundColor: "transparent",
            color: "#1572B6",
          },
        },
        {
          skillName: "JQuery",
          fontAwesomeClassname: "devicon:jquery-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            backgroundColor: "transparent",
            color: "#61DAFB",
          },
        },
        {
          skillName: "DotNet",
          fontAwesomeClassname: "skill-icons:dotnet",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "devicon:csharp",
          style: {
            backgroundColor: "transparent",
            color: "#CB3837",
          },
        },
        {
          skillName: "SQL Server",
          fontAwesomeClassname: "devicon-plain:microsoftsqlserver-wordmark",
          style: {
            backgroundColor: "transparent",
            color: "#CC2927",
          },
        },
        {
          skillName: "SQL Database",
          fontAwesomeClassname: "devicon:azuresqldatabase",
          style: {
            backgroundColor: "transparent",
            color: "#663399",
          },
        },
        {
          skillName: "Oracle Database",
          fontAwesomeClassname: "devicon:oracle",
          style: {
            backgroundColor: "transparent",
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Maintenance, Technical Support",
      fileName: "CloudInfraImg",
      skills: [       
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Customizing the software to meet specific business requirements and workflows.",
        "⚡ Conducting data migration from existing systems to the new software, ensuring data integrity and accuracy.",
        "⚡ Assisting users in adapting to the customized software and providing training and documentation as needed.",
      ],
      softwareSkills: [
        {
          skillName: "Cloud Support",
          fontAwesomeClassname: "grommet-icons:cloud-software",
          style: {
            color: "##0078D7",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Tech Support",
          fontAwesomeClassname: "la:laptop-code",
          style: {
            color: "#057B00",
          },
        },
        {
          skillName: "Maintanance",
          fontAwesomeClassname: "devicon-plain:xcode",
          style: {
            color: "#336791",
          },
        },
       
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Canva",
          fontAwesomeClassname: "devicon:canva",
          style: {
            //color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/##/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/##",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/##",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/##",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/##",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/##",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Jayam College of Engineering & Technology - Dharmapuri",
      subtitle: "B.E. in Mechanical Engineering",
      logo_path: "R.png",
      alt_name: "Jayam Engineering",
      //duration: "2016 - 2020",
      descriptions: [
        "⚡ Core Engineering Principles: Students study fundamental concepts in physics, mathematics, and engineering sciences, including mechanics, thermodynamics, fluid mechanics, and materials science.",
        "⚡ Mechanics and Machine Design: Courses focus on understanding the behavior of materials and mechanical systems, along with designing and analyzing machines, mechanisms, and structures.",
        "⚡ Control Systems and Robotics: Students explore the theory and practice of control systems, automation, and robotics, enabling them to design and program robotic systems and automated processes.",
      ],
      website_link: "https://jet.jcet.ac.in/",
    },
    {
      title: "SMEClabs - Kochin",
      subtitle: "Automation & Siemens TIA Advanced Engineering",
      logo_path: "smec.png",
      alt_name: "SMEC",
      //duration: "2021 - 2023",
      descriptions: [
        "⚡ Industrial automation, including programmable logic controllers (PLCs), human-machine interfaces (HMIs), sensors, actuators, and data communication protocols.",
        "⚡ Learn about robotic systems, kinematics, dynamics, motion planning, and the integration of mechanical systems with electronics and software in mechatronic devices.",
        "⚡ Automation Engineering drives technological innovation, especially in robotics, AI, and IoT, leading to new solutions and applications in various fields.",
      ],
      website_link: "https://www.smeclabs.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "HTML",
      subtitle: "- Kim Akers",
      logo_path: "html.png",
      // certificate_link:
      //   "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "HTML/CSS",
      color_code: "#FFFFF",
    },
    {
      title: "JavaScript",
      subtitle: "- Romeo Kienzler",
      logo_path: "js.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "JavaScript",
      color_code: "#F4E11E",
    },
    {
      title: "JQuery",
      subtitle: "- GCP Training",
      logo_path: "jquery.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "JQuery",
      color_code: "#FFFFF",
    },
    {
      title: ".NET Core/.NET 5+",
      subtitle: "- Andrew Ng",
      logo_path: "dotnet.jpg",
      //certificate_link:
      //  "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: ".NET Core",
      color_code: "#662279",
    },
    {
      title: "C#",
      subtitle: "- Andrew Ng",
      logo_path: "csharp.png",
      //certificate_link:
      //  "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "C#",
      color_code: "#662279",
    },
    {
      title: "MsSQL",
      subtitle: "- GCP Training",
      logo_path: "sql.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "MsSQL",
      color_code: "#0C9D5899",
    },
    {
      title: "Oracle Database",
      subtitle: "- Alex Aklson",
      logo_path: "oracle.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "Oracle",
      color_code: "#FFFFF",
    },      
    {
      title: "React",
      subtitle: "- Laurence Moroney",
      logo_path: "react.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "React",
      color_code: "#FFFFF",
    },
    {
      title: "Angular",
      subtitle: "- Jogesh Muppala",
      logo_path: "angular.png",
      // certificate_link:
      //   "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Angular",
      color_code: "#FFFFF",
    },
    {
      title: "RESTful APIs",
      subtitle: "- Qwiklabs",
      logo_path: "api.png",
      // certificate_link:
      //   "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "API",
      color_code: "#FFFFF",
    },
    {
      title: "Git",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "git.png",
      // certificate_link:
      //   "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "Git",
      color_code: "#FFFFF",
    },
    {
      title: "GitHub",
      subtitle: "- Qwiklabs",
      logo_path: "github.png",
      // certificate_link:
      //   "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "Github",
      color_code: "#FFFFF",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: ">.NET Developer",
          company: "Refulgence Inc Pvt Ltd.",
          company_url: "https://www.refulgenceinc.com/",
          logo_path: "reful.png",
          duration: "2021 - Present",
          location: "Chennai",
          description:
            "As a Full Stack Developer using .NET technology, you develop both front-end and back-end web applications. You use HTML, CSS, and JavaScript for the front-end, and ASP.NET Core with C# for the back-end. You work with databases like Microsoft SQL Server and design RESTful APIs for seamless communication between components. You deploy applications on cloud platforms like Microsoft Azure, ensuring scalability and reliability.",
          color: "#0879bf",
        },
        {
          title: "Full Stack Developer",
          company: "kaashiv Infotech",
          company_url: "https://www.kaashivinfotech.com/",
          logo_path: "kaashiv.png",
          duration: " 2021 - 2022",
          location: "Chennai",
          description:
            "As a Full Stack Developer using .NET technology, you develop both front-end and back-end web applications. You use HTML, CSS, and JavaScript for the front-end, and ASP.NET Core with C# for the back-end. You work with databases like Microsoft SQL Server and design RESTful APIs for seamless communication between components. You deploy applications on cloud platforms like Microsoft Azure, ensuring scalability and reliability.",
          color: "#9b1578",
        },
        {
          title: "CAM Engineer",
          company: "ADT Engineering Fazco",
          company_url: "#",
          logo_path: "cam.png",
          duration: "2020 -  2021",
          location: "UAE, Dubai",
          description:
            "As a CAM Engineer, you leverage CAD/CAM software to automate manufacturing processes, optimizing efficiency and precision. You create CNC programs and toolpaths to guide machines in material cutting and shaping based on CAD models. Collaborating with production teams, you ensure the successful implementation of CAM processes and maintain quality standards. Staying updated on the latest CAM technologies, you continuously improve manufacturing operations to enhance productivity.",
          color: "#fc1f20",
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
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          // duration: "June 2019 - April 2020",
          // location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Customer Relationship Management",
          company: "Salesforce",
          company_url: "https://www.salesforce.com/in/",
          logo_path: "crm.png",
          // duration: "Aug 2019 - May 2020",
          // location: "Hyderabad, Telangana",
          description:
            "Volunteer CRM bootcamps offer intensive training to gain practical skills in customer relationship management. Participants learn to utilize CRM software like Salesforce, Microsoft Dynamics, or HubSpot for sales, marketing, and customer service. These short-duration programs provide hands-on experience and are valuable for individuals pursuing roles in business development and customer engagement.",
          color: "#D83B01",
        },
        {
          title: "SAP BootCamps",
          company: "SAP",
          company_url: "https://www.sap.com/index.html",
          logo_path: "sap.png",
          // duration: "Oct 2019 - May 2020",
          // location: "Kurnool, Andhra Pradesh",
          description:
            "SAP bootcamps offer intensive, hands-on training for gaining practical skills in SAP software. Participants learn to manage business processes and develop expertise in specific SAP modules. Volunteering opportunities may provide real-world experience in SAP projects.",
          color: "#000000",
        },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published",
      // url:
      //   "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      // url:
      //   "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      // url:
      //   "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      // url:
      //   "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      // url:
      //   "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "monal.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Web Application & Windows Application and .NET development, plus React expertise and Opensource Development.",
  },
  blogSection: {
    title: "Hire Me",
    subtitle:
      "Open for hiring across ERP solutions, Web Application & Windows Application and .NET development, plus React expertise. Backed by robust proficiency in these realms, I assure impactful contributions and top-tier outcomes. If you seek a dedicated, adept professional to enrich your team, let's confer on how my skills harmonize with your needs. Reach out to connect, and let's forge a potent collaboration.",
    link: "mailto:monalthiran804@gmail.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Phone No",
    subtitle:
      "+971 525254619",
  //   locality: "Kanodar",
  //   country: "IN",
  //   region: "Gujarat",
  //   postalCode: "385520",
  //   streetAddress: "Ambavadi vas",
  //   avatar_image_path: "address_image.svg",
  //  location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "E-Mail",
    subtitle: "monalthiran804@gmail.com",
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
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};

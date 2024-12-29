import calculator from "../assets/calculator.png";


import weather from "../assets/weather.png";

import portfolio from "../assets/portfolio.png"

import zomato from "../assets/zomato.png"

export const projects = [

  


  {
    name: "Portfolio",
    image: portfolio, 
    description: [
      "Built a personal portfolio website using React.js to showcase projects, skills, and professional achievements",
      "Created dynamic and reusable components to efficiently manage sections like About, Projects, Skills, and Contact details.",
      "Implemented smooth navigation using React Router, enabling seamless transitions between sections of the portfolio."
    ],
    techStack: ["React JS"],
    "github": "https://github.com/Amjathaj/Personal-Portfolio",
    "liveLink": "https://personal-portfolio-psi-navy-11.vercel.app/"
  }, 
 
  {
    "name": "Zomato Clone",
    "image": zomato, 
    "description": [
      "Created a Zomato clone, a restaurant discovery website, using HTML, CSS, JavaScript, and Bootstrap for a responsive and user-friendly interface.",
      "Designed and implemented an engaging user interface, ensuring a seamless experience across various devices through responsive web design techniques.",
    
    ],
    "techStack": [ "HTML", "CSS","JavaScript"],
    "github": "https://github.com/Amjathaj/zomato",
    "liveLink": "https://amjathaj.github.io/zomato/"
  },  
    {
      "name": "Weather App",
      "image": weather, 
      "description": [
        "Developed a user-friendly interface that displays current weather conditions, forecasts, and additional weather details.",
        "Integrated OpenWeatherMap API to retrieve real-time weather data for various locations.",
        "Implemented responsive design principles to ensure usability on both desktop and mobile devices."
      ],
      "techStack": ["React JS", "Open API"],
      "github": "https://github.com/Amjathaj/weather-app", 
      "liveLink": "https://weather-app-chi-hazel.vercel.app/"
    },
    {
      "name": "Calculator App",
      "image": calculator,      
      "description": [
        "Developed a robust calculator app using HTML, CSS and Javascript for streamlined and efficient state management.",
        "Designed an intuitive user interface with clear button layouts and responsive design for optimal usability.",
        "Added keyboard support for enhanced user interaction and accessibility.",
      ],
      "techStack": [ "HTML", "CSS","JavaScript"],
      "github": "https://github.com/Amjathaj/Calculator",
      "liveLink": "https://calculator-beryl-eight.vercel.app/"
    }
  
];

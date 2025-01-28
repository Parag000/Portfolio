import {
  mech,
  mrs,
  bcd,
  nyc,
  ccp,
  monster,
  aws,
  mysql,
  python,
  r,
  pytorch,
  databricks,
  flask,
  hadoop,
  kafka,
  powerbi,
  tensorflow,
  spark,
  tableau,
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
  gobaskt,
  flareai,
  tfjs,
  turing,
  tripguide,
  threejs,
  arbol_ai,
  tfjspic,
  resume,
  fine,
  mediapipe,
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
    title: "ML Developer",
    icon: web,
  },
  {
    title: "Analytical Reporting",
    icon: mobile,
  },
  {
    title: "Statistical Modeler",
    icon: backend,
  },
  {
    title: "Chess Player",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "Pytorch",
    icon: pytorch,
  },
  {
    name: "Spark",
    icon: spark,
  },
  {
    name: "Hadoop",
    icon: hadoop,
  },
  {
    name: "PowerBI",
    icon: powerbi,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "AWS",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Data Scientist",
    company_name: "FlareAI",
    icon: flareai,
    iconBg: "#383E56",
    date: "June 2023 - Dec 2023",
    points: [
      "Improved Google search indexability by 70% with an average CTR of 40% by fine-tuning a generative algorithm to paraphrase blogs for Shopify stores.",
      "Enhanced content readability of blogs using LLMs to achieve Gunning Fog Index scores between 9-12.",
      "Increased sign up rates by 12% through A/B testing various on boarding processes.",
      "Architected data pipelines using Apache Airflow and compiled SQL queries to visualize data on Tableau",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "FlareAI",
    icon: flareai,
    iconBg: "#E6DEDD",
    date: "April 2023 - June 2023",
    points: [
      "Designed a content-based recommendation system using cosine similarity, processing 10K+ products",
      "Reduced data retrieval time by 15% through optimizing existing SQL queries",
      "Implemented role-based access control (RBAC) policies on database tables from 20+ sources",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I've had the pleasure of working with Parag for a short period, and I truly enjoyed it. His positive energy and passion for uplifting student developer communities are inspiring. Parag is a natural leader with empathy and innovative ideas, I hope we get to work together again!",
    name: "Ashwin Kiran",
    designation: "Machine Learning Engineer",
    company: "FlareAI",
    image: "https://media.licdn.com/dms/image/C4D03AQGOaH_GfQ--QA/profile-displayphoto-shrink_800_800/0/1623085651736?e=1684368000&v=beta&t=ZKinLP8f7xqLYAK_fGIqiwom6oZnqZYn69h0OZ0oVNc",
  },
  {
    testimonial:
      "Working with Parag was an absolute pleasure. He has a unique ability to break down complex concepts into actionable insights and always brings innovative ideas to the table. Parag’s positive energy and dedication make him a true asset to any team",
    name: "Abhishek Agrawal",
    designation: "Data Scientist",
    company: "NVIDIA",
    image: "https://media.licdn.com/dms/image/C4E03AQEf0uSaZPp0Lg/profile-displayphoto-shrink_400_400/0/1629462035915?e=1684368000&v=beta&t=O0hf7wS0IJb_-Xo2EcxfL0JADcHrJH_y-lUhvOEDI50",
  },
  {
    testimonial:
      "Parag has a quiet yet impactful presence that makes him a valuable addition to any team. His ability to approach data challenges methodically and deliver thoughtful solutions is truly commendable.",
    name: "Dheeraj Ghosh",
    designation: "Data Analyst",
    company: "NVIDIA",
    image: "https://media.licdn.com/dms/image/D4D03AQFPP5zOEN-J2w/profile-displayphoto-shrink_100_100/0/1673415983591?e=1684368000&v=beta&t=DZ-23ESj0nC6bLdnZXUqsKudi0QRQN5NPR3LaiIVxdI",
  },
];

const projects = [
  {
    name: "GPU Accelerated ML For Big Data Processing",
    description:
      "This project predicts the 'Scariest Monster' using a dataset of 12 million entries and 106 features. Utilizing GPU-accelerated processing and the Random Forest Regressor using the Nvidia Rapids API. The goal is to minimize RMSE for accurate predictions",
    tags: [
      {
        name: "rapidsai",
        color: "blue-text-gradient",
      },
      {
        name: "cuML",
        color: "green-text-gradient",
      },
      {
        name: "cuDF",
        color: "pink-text-gradient",
      },
    ],
    image: monster,
    source_code_link: "https://github.com/Parag000/GPU-Accelerated-ML-For-Big-Data-Processing",
  },
  {
    name: "Explainable AI For Breast Cancer Detection",
    description:
      "This project develops an explainable AI model for breast cancer detection, It uses feature masking, cooperative game theory, and SHAP values to analyze model behavior. The goal is to make predictions interpretable and actionable for medical applications.",
    tags: [
      {
        name: "rexplain",
        color: "blue-text-gradient",
      },
      {
        name: "cooperative-game-theory",
        color: "green-text-gradient",
      },
      {
        name: "explainable ai",
        color: "pink-text-gradient",
      },
    ],
    image: bcd,
    source_code_link: "https://github.com/Parag000/XAI-Breast-Cancer-Detection",
  },
  {
    name: "Customer Churn Prediction",
    description:
      "An end to end ML solution to predict customer churn. This project features a tuned LightGBM model, custom preprocessing pipeline, SMOTE for class balancing, and a user-friendly Streamlit app for predictions, emphasizing model optimization and deployment.",
    tags: [
      {
        name: "model-pipeline",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "SMOTE",
        color: "pink-text-gradient",
      },
    ],
    image: ccp,
    source_code_link: "https://github.com/Parag000/Customer-Churn-Prediction",
  },

  {
    name: "NYC Taxi Fare Prediction Using PySpark",
    description:
      "This project analyzes NYC Yellow Taxi data spanning 13.2M records. The primary goal was to familiarize myself with PySpark and big data handling. Through this project, I conducted exploratory data analysis (EDA), implemented feature engineering, and built machine learning models for fare prediction.",
    tags: [
      {
        name: "PySpark",
        color: "blue-text-gradient",
      },
      {
        name: "Hive",
        color: "green-text-gradient",
      },
      {
        name: "MLlib",
        color: "pink-text-gradient",
      },
    ],
    image: nyc,
    source_code_link: "https://github.com/Parag000/NYC-Taxi-Fare-Prediction-Using-Pyspark",
  },

  {
    name: "Movie Recommendation System",
    description:
      "This project builds a content-based movie recommendation system using the TMDB dataset. By constructing a 'metadata soup,' it calculates movie similarity with vectorizers and cosine similarity.",
    tags: [
      {
        name: "scikit-learn",
        color: "blue-text-gradient",
      },
      {
        name: "vectorization",
        color: "green-text-gradient",
      },
      {
        name: "cosine-similarity",
        color: "pink-text-gradient",
      },
    ],
    image: mrs,
    source_code_link: "https://github.com/Parag000/Content-Based-Movie-Recommender",
  },
  {
    name: "Predictive Machine maintainance",
    description:
      "This project performs multiclass classification to identify machine failure types from features like temperature, torque, and tool wear. It includes data analysis, feature engineering, and model training to optimize maintenance strategies and reduce downtime through predictive insights.",
    tags: [
      {
        name: "multiclass-classification",
        color: "blue-text-gradient",
      },
      {
        name: "scikit-learn",
        color: "green-text-gradient",
      },
      {
        name: "decision-tree-models",
        color: "pink-text-gradient",
      },
    ],
    image: mech,
    source_code_link: "https://github.com/Parag000/Predictive-Machine-Maintenance",
  },

];

export { services, technologies, experiences, testimonials, projects };
export const profile = {
  name: 'Rubanchinnarathinam Muthu',
  role: 'Software Engineer',
  location: 'Chennai, India',
  email: 'rubanchinnarathinam@gmail.com',
  availability: 'Let’s create something useful together',
  intro: 'Complex problems, simple solutions—through engineering',
  bio: 'I’m a full-stack developer working with React and .NET to build reliable, maintainable applications. I’ve contributed to real-world projects, developing user interfaces and backend services with a focus on clean code and practical solutions.',
  github: 'https://github.com/rubanch',
  linkedin: 'https://linkedin.com/in/yourusername',
};
export const skills = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML & CSS', 'Accessible UI'] },
  { title: 'Backend', items: ['C#', '.NET', 'REST APIs', 'Service design'] },
  { title: 'Data & cloud', items: ['SQL Server', 'MySQL', 'Azure', 'Data modeling'] },
  { title: 'Ways of working', items: ['Git', 'CI/CD', 'Docker', 'Testing'] },
];
export const experience = [
  {
    role: 'Software Engineer',
    company: 'Relevantz Technology Services',
    location: 'Chennai, India',
    period: '2025 — Present',
    summary:
      'Build and maintain full-stack business applications, including ecommerce administration and warehouse management systems. Work across React interfaces and .NET APIs, with SQL Server for data storage, focusing on reliable workflows, clear data views, and efficient handling of operational records.',
    points: [
      'Developed features for an ecommerce administration system covering customer prospects, standard and blanket orders, warehouse dispatch history, and warranty claims.',
      'Built and maintained React UI and backend API features using .NET Core and SQL Server, with Redux Toolkit for shared state and MUI components for forms and data grids.',
      'Created keyboard-friendly warehouse entry workflows designed to support high-volume data entry and make large sets of records easier to review.',
      'Improved API and database query handling for the sales and client modules, helping streamline intake workflows and support more responsive data retrieval.',
      'Collaborated across UI and backend work to connect operational processes and present users with clear order, dispatch, and claim status.'
    ],
  },
  {
    role: 'Junior Software Engineer',
    company: 'Relevantz Technology Services',
    location: 'Chennai, India',
    period: '2023 — 2025',
    summary:
      'Contributed to full-stack learning and financial services prototypes using React, Redux, .NET, REST APIs, and relational databases. Helped build user and administrator workflows for course delivery, assessments, certificates, and credit card discovery.',
    points: [
      'Built features for a learning and assessment portal, including course assignment, learning progress, assessments, and certificate workflows for users, managers, and administrators.',
      'Used React and Redux to support consistent application state and connected workflows across the learning portal.',
      'Developed a credit card discovery flow that used customer-provided salary and credit score to present potentially suitable card options.',
      'Implemented supporting administrator capabilities for managing customer records and card offerings.',
      'Worked across frontend and backend features using .NET REST APIs and MySQL or SQL Server, depending on the project.'
    ],
  },
  {
    role: 'Trainee Software Engineer',
    company: 'Relevantz Technology Services',
    location: 'Chennai, India',
    period: '2023 — 2024',
    summary:"",
    points: [ 'Completed structured training in full-stack web development, building foundational skills in React, .NET, REST APIs, and SQL. Applied these skills through guided exercises and project work while learning development workflows and team practices.' ],
  },
];
export const projects = [
  {
    title: 'Ecommerce Admin System',
    type: 'Full-stack Admin portal',
   role: 'Backend and UI Developer',
    year: '2025',
    description:"A full-stack order and warranty management system for tracking customer prospects, orders, and product dispatches across warehouses. It supports standard and blanket orders, records dispatch history, and manages warranty claims from item receipt through defect assessment and resolution. Each step is logged to give teams a clear view of order progress and claim handling." ,   impact: 'Engineered scalable background logic and robust API endpoints for the sales and client modules. Reduced endpoint query latency and streamlined intake management processing.',
    stack: [
  'React',
  '.NET Core',
  'SQL Server',
  'Redux Toolkit',
  'React Hook Form',
  'MUI',
  'MUI Data Grid',
  'SCSS',
],
    number: '01',
    url: '',
    category: 'Client Project',
  },
  {
  title: 'Warehouse Entry Management System',
  type: 'Warehouse management application',
  role: 'Backend and UI Developer',
  year: '2026',
  description:
    'Developed a warehouse entry system for recording up to 10,000 items per day. The interface was designed for fast, keyboard-friendly data entry, allowing staff to work without relying on a mouse. Large data grids made it easier to review and manage warehouse records, while the application focused on responsive performance and reliable data handling.',
  impact:
    'Built the UI and backend features to support high-volume daily entries, keyboard-based workflows, and efficient viewing of large datasets.',
  stack: [
  'React',
  '.NET Core',
  'SQL Server',
  'Redux Toolkit',
  'React Hook Form',
  'MUI',
  'Prime React data table',
  'SCSS',
],
  number: '02',
  url: '',
  category: 'Client Project',
},
{
  title: 'Learning and Assessment Portal',
  type: 'Learning management platform',
  role: 'Full-Stack Developer',
  year: '2024',
  description:
    'Built a learning portal that brings course delivery, assessments, and certification into one platform. Admins can manage courses, assessments, and certificates; assign learning paths to users; and track progress and completion. Managers can monitor their team’s learning activity, while users can access assigned courses, complete assessments, and view their earned certificates. The React frontend uses Redux to manage shared application state and support consistent workflows across the portal.',
  impact:
    'Delivered connected workflows for course assignment, assessment, progress tracking, and certificate management, giving admins and managers a clearer view of learning activity.',
  stack: ['React', 'Redux', '.NET', 'REST API', 'MySQL',"Bootstrap"],
  number: '03',
  url: '',
  category: 'Prototype',
},
  {
  title: 'Credit Card Recommendation System',
  type: 'Financial services application',
  role: 'Full-Stack Developer',
  year: '2024',
  description:
    'Built an application that collects customer details, including salary and credit score, then helps identify credit card options that may fit their profile. The system presents relevant card information to support the selection process and gives administrators a way to manage customer records and card offerings.',
  impact:
    'Created a guided card discovery flow that uses customer-provided salary and credit score to present potentially suitable options.',
  stack: ['React', 'Redux', '.NET', 'REST API', 'SQL Server',"Bootstrap"],
  number: '04',
  url: '',
    category: 'Prototype',
}
];
export const recognition = {
  name: 'Add a certification or award',
  issuer: 'Issuing organization',
  year: '2025',
  note: 'Use this space for a credential, award, talk, or other recognition you have earned.',
  url: '',
};

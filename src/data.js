export const projects = [
  {
    slug: 'xmartcredit-mobile-app',
    index: 'P1',
    meta: 'Client product',
    year: '2025',
    title: 'XmartCredit Mobile App',
    subtitle: 'Credit & loan services, in the field',
    description:
      'A Flutter app for credit and loan operations: OTP login, task approvals, pre-approval and credit-card appraisal flows, site inspection with geolocation, and document upload — with token-expiry interception and offline caching.',
    points: [
      'Layered repository / view-model architecture with Riverpod state management',
      'Token-expiry interception on every authenticated API call',
      'Hive offline caching so field agents can keep working without signal',
    ],
    tags: ['Flutter', 'Riverpod', 'Dio', 'Hive'],
    image: '/assets/projects/p1.jpg',
    imageAlt: 'Phone showing a banking app on a desk with a laptop, calculator and documents',
    credit: 'Photo: Homedust — CC BY 2.0',
  },
  {
    slug: 'loan-origination-system',
    index: 'P2',
    meta: 'Enterprise · Banking',
    year: '2024',
    title: 'Loan Origination System',
    subtitle: 'Applications, approvals and audit trail',
    description:
      'Loan processing workflows and business functionality backed by stored procedures and query optimisation, built for high-volume origination with configurable approval stages.',
    points: [
      'Configurable workflow stages for approval and rejection routing',
      'Stored procedures and tuned queries on SQL Server',
      'Business rules kept in the database layer for auditability',
    ],
    tags: ['ASP.NET MVC', 'C#', 'SQL Server', 'Stored Procedures'],
    image: '/assets/projects/p2.jpg',
    imageAlt: 'Project management documents and charts spread across a wooden desk',
    credit: 'Photo: MART PRODUCTION — Pexels',
  },
  {
    slug: 'disbursement-system',
    index: 'P3',
    meta: 'Enterprise · Banking',
    year: '2024',
    title: 'Disbursement System',
    subtitle: 'Stage-based release of funds',
    description:
      'Automated loan disbursement workflows with status tracking and stage-based business rules, giving operations a single view of every file moving through the cycle.',
    points: [
      'Stage-based automation replacing manual release steps',
      'Live status tracking across the disbursement cycle',
      'Rules-driven validation before funds are released',
    ],
    tags: ['ASP.NET', 'C#', 'Workflow', 'SQL Server'],
    image: '/assets/projects/p3.jpg',
    imageAlt: 'A fan of banknotes beside a calculator',
    credit: 'Photo: free pictures of money — CC BY 2.0',
  },
  {
    slug: 'loan-public-portal',
    index: 'P4',
    meta: 'Public platform',
    year: '2025',
    title: 'Loan Public Portal',
    subtitle: 'Customer-facing account visibility',
    description:
      'A public portal that delivers loan status and information through secure backend APIs — responsive, fast, and readable by customers rather than operators.',
    points: [
      'Secure REST endpoints behind the public interface',
      'Responsive layouts for mobile-first customers',
      'Readable status views instead of internal jargon',
    ],
    tags: ['ASP.NET', 'REST APIs', 'Responsive UI'],
    image: '/assets/projects/p4.jpg',
    imageAlt: 'Laptop displaying an analytics dashboard with charts',
    credit: 'Photo: Zuko.io Images — CC BY 2.0',
  },
  {
    slug: 'hospital-management-system',
    index: 'P5',
    meta: 'Healthcare',
    year: '2024',
    title: 'Hospital Management System',
    subtitle: 'Patients, appointments and records',
    description:
      'Patient and appointment management modules built in Flutter with REST API integration and state management, designed around how clinic staff actually move through a day.',
    points: [
      'Patient and appointment modules with API integration',
      'Form validation and state management across screens',
      'UI optimisation for lower-end Android devices',
    ],
    tags: ['Flutter', 'REST APIs', 'State Management'],
    image: '/assets/projects/p5.jpg',
    imageAlt: 'Clean modern clinic reception with wooden doors and blue chairs',
    credit: 'Photo: Los Muertos Crew — Pexels',
  },
];

export const experiences = [
  {
    company: 'XmartPoint Technologies',
    role: 'Software Developer (.NET Full-Stack)',
    period: 'Jan 2024 — Present',
    current: true,
    meta: 'Banking & financial systems',
    points: [
      'Enterprise-scale full-stack applications for banking operations: loan origination, disbursement and customer portals.',
      'Configurable, workflow-driven systems for approvals and business automation across multiple databases.',
      'Schema design, complex queries and stored procedures, with performance tuning on SQL Server and PostgreSQL.',
      'Background and scheduling services, REST API integration, deployment on IIS/VPS behind Cloudflare.',
    ],
    tags: ['C#', 'ASP.NET Core', 'React', 'SQL Server', 'PostgreSQL'],
  },
  {
    company: 'MR Axis Human Capital Pvt. Ltd.',
    role: 'Freelance Full-Stack Developer',
    period: '2025',
    meta: 'Client delivery',
    points: [
      'Developed and deployed a responsive portfolio website using React and Cloudflare.',
      'Owned the delivery lifecycle end to end — requirements, implementation, deployment and direct client communication.',
    ],
    tags: ['React', 'Cloudflare'],
  },
  {
    company: 'Medipro',
    role: 'Flutter Developer Intern',
    period: 'Oct 2023 — Jan 2024',
    meta: 'Healthcare mobility',
    points: [
      'Flutter-based Hospital Management System with patient and appointment modules.',
      'REST API integration and data flow between the mobile client and backend services.',
      'Form validation, state management and UI optimisation with the backend team.',
    ],
    tags: ['Flutter', 'REST APIs', 'State Management'],
  },
];

export const services = [
  {
    title: 'Web Applications',
    body: 'React front ends backed by ASP.NET Core — dashboards, portals and workflow tools built for real users and real load.',
    tech: 'React · ASP.NET Core · Tailwind',
  },
  {
    title: 'Backend & APIs',
    body: 'C# services with authentication, business logic and REST APIs shaped around how your product actually works.',
    tech: 'C# · ASP.NET MVC · REST',
  },
  {
    title: 'Mobile Apps',
    body: 'Flutter apps that ship to Android and iOS together — offline caching, token handling and field-ready flows.',
    tech: 'Flutter · Riverpod · Hive',
  },
  {
    title: 'Databases & Performance',
    body: 'Schema design, stored procedures and query tuning on SQL Server and PostgreSQL, including multi-database reporting.',
    tech: 'SQL Server · PostgreSQL',
  },
  {
    title: 'Deployment & Infrastructure',
    body: 'IIS, VPS, Cloudflare and dependable handovers — so the product goes live, and stays online afterwards.',
    tech: 'IIS · VPS · Cloudflare',
  },
];

export const education = [
  {
    degree: 'Bachelor in Information Management (BIM)',
    institution: 'Kantipur College of Management and Information Technology, Kathmandu',
  },
  {
    degree: '+2 Management',
    institution: 'Shikshadeep College, Biratnagar',
  },
  {
    degree: 'School Leaving Certificate (SLC)',
    institution: 'Eden National Secondary Boarding School, Biratnagar',
  },
];

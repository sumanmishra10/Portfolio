import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';

const OUT = 'public/assets/Suman_Resume.pdf';
const PAGE_W = 595.28;
const PAGE_H = 841.89;
const M = 46;
const CONTENT_W = PAGE_W - M * 2;

const colors = {
  ink: rgb(0.05, 0.08, 0.15),
  body: rgb(0.22, 0.27, 0.34),
  muted: rgb(0.45, 0.5, 0.57),
  accent: rgb(0.11, 0.32, 0.78),
  line: rgb(0.86, 0.89, 0.93),
};

const resume = {
  name: 'SUMAN MISHRA',
  title: 'Software Engineer  |  .NET Full-Stack Developer',
  contact:
    'Kathmandu, Nepal   •   +977 9820344113   •   beingsuman10@gmail.com   •   linkedin.com/in/suman-mishra-a52999369   •   github.com/sumanmishra10',
  summary:
    'Software Engineer with 3 years of full-stack experience in .NET technologies, specialized in enterprise banking systems, workflow automation, and database design. Delivered loan origination, disbursement, and public portal platforms using C#, ASP.NET Core/MVC, React, and SQL Server/PostgreSQL. Experienced in REST API integration, background services, and performance tuning on multi-database systems. Fluent English; available for remote contract or full-time roles with reliable overlap across UAE, EU, and US time zones.',
  skills: [
    ['Backend', 'C#, ASP.NET Core, ASP.NET MVC, REST APIs, Background & Scheduling Services'],
    ['Frontend', 'JavaScript, React, jQuery, HTML5, CSS3, Tailwind CSS'],
    ['Mobile', 'Flutter, Dart (Riverpod, Dio, Hive)'],
    ['Databases', 'Microsoft SQL Server, PostgreSQL, stored procedures, query optimization, multi-database design'],
    ['Deployment', 'IIS, VPS hosting, Cloudflare, Git, GitHub, TFS (Team Foundation Server)'],
    ['Practices', 'Workflow automation, API integration, performance tuning, schema design, SDLC collaboration'],
  ],
  experience: [
    {
      role: 'Software Developer (.NET Full-Stack)',
      org: 'XmartPoint Technologies',
      period: 'Jan 2024 – Present',
      points: [
        'Develop and maintain enterprise-scale full-stack applications for banking and financial operations, including loan origination, disbursement, and customer-facing public portals.',
        'Build configurable, workflow-driven systems for approval processes and business automation with multi-database handling.',
        'Design database schemas, write complex queries and stored procedures, and tune performance on Microsoft SQL Server and PostgreSQL.',
        'Implement background and scheduling services, and integrate REST APIs across multiple application components and databases.',
        'Improve reliability and maintainability through debugging, refactoring, code review, and deployment on IIS/VPS with Cloudflare.',
      ],
    },
    {
      role: 'Freelance Full-Stack Developer',
      org: 'MR Axis Human Capital Pvt. Ltd.',
      period: '2025',
      points: [
        'Developed and deployed a responsive portfolio website using React and Cloudflare.',
        'Owned the delivery lifecycle end to end — requirements, implementation, deployment, and direct client communication.',
      ],
    },
    {
      role: 'Flutter Developer Intern',
      org: 'Medipro',
      period: 'Oct 2023 – Jan 2024',
      points: [
        'Developed a Flutter-based Hospital Management System mobile app with patient and appointment modules.',
        'Integrated REST APIs and handled data flow between the mobile client and backend services.',
        'Implemented form validation, state management, and UI optimization in collaboration with the backend team.',
      ],
    },
  ],
  projects: [
    {
      name: 'XmartCredit Mobile App',
      stack: 'Flutter, Riverpod, Dio, Hive',
      points: [
        'Built a credit and loan-services mobile app: OTP login, task approvals, pre-approval and credit-card appraisal flows, site inspection with geolocation, and document upload.',
        'Implemented token-expiry interception, offline caching, and responsive UI with layered repository/view-model architecture.',
      ],
    },
    {
      name: 'Loan Origination System',
      stack: 'ASP.NET MVC, C#, SQL Server',
      points: [
        'Developed loan processing workflows and business functionality backed by stored procedures and query optimization.',
      ],
    },
    {
      name: 'Disbursement System',
      stack: 'ASP.NET, C#, SQL Server',
      points: ['Automated loan disbursement workflows with status tracking and stage-based business rules.'],
    },
    {
      name: 'Loan Public Portal',
      stack: 'ASP.NET, REST APIs, SQL Server',
      points: ['Built a public-facing portal that delivers loan status and information through secure backend APIs.'],
    },
    {
      name: 'Hospital Management System',
      stack: 'Flutter, REST APIs',
      points: ['Developed patient and appointment management modules with API integration and state management.'],
    },
  ],
  education: [
    [
      'Bachelor in Information Management (BIM)',
      'Kantipur College of Management and Information Technology, Kathmandu',
    ],
    ['+2 Management', 'Shikshadeep College, Biratnagar'],
    ['School Leaving Certificate (SLC)', 'Eden National Secondary Boarding School, Biratnagar'],
  ],
};

const pdf = await PDFDocument.create();
const font = await pdf.embedFont(StandardFonts.Helvetica);
const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);

pdf.setTitle('Suman Mishra — Software Engineer, .NET Full-Stack');
pdf.setAuthor('Suman Mishra');
pdf.setSubject('Resume');
pdf.setCreator('Suman Mishra Portfolio');

let page = pdf.addPage([PAGE_W, PAGE_H]);
let y = PAGE_H - 52;

const newPage = () => {
  page = pdf.addPage([PAGE_W, PAGE_H]);
  y = PAGE_H - 52;
};

const ensure = (height) => {
  if (y - height < 48) newPage();
};

const wrapText = (text, size, fontRef, maxWidth) => {
  const words = String(text).split(/\s+/);
  const lines = [];
  let line = '';

  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (fontRef.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
    } else {
      if (line) lines.push(line);
      line = word;
    }
  }

  if (line) lines.push(line);
  return lines;
};

const write = (text, x, size, fontRef, color) => {
  page.drawText(text, { x, y, size, font: fontRef, color });
};

const paragraph = (text, { size = 9, fontRef = font, color = colors.body, leading = 11.9, indent = 0 } = {}) => {
  const lines = wrapText(text, size, fontRef, CONTENT_W - indent);

  lines.forEach((line, index) => {
    if (index > 0) ensure(leading);
    write(line, M + indent, size, fontRef, color);
    y -= leading;
  });
};

const section = (title) => {
  ensure(30);
  y -= 6;
  write(title.toUpperCase(), M, 8.8, bold, colors.accent);
  y -= 6;
  page.drawLine({
    start: { x: M, y },
    end: { x: M + CONTENT_W, y },
    thickness: 0.7,
    color: colors.line,
  });
  y -= 13;
};

const bullet = (text) => {
  const indent = 11;
  const lines = wrapText(text, 9, font, CONTENT_W - indent - 4);

  ensure(12);
  page.drawRectangle({ x: M + 2, y: y + 2.4, width: 2.4, height: 2.4, color: colors.accent });

  lines.forEach((line, index) => {
    if (index > 0) ensure(11.6);
    write(line, M + indent, 9, font, colors.body);
    y -= 11.6;
  });
};

const roleRow = (role, org, period) => {
  ensure(30);
  const periodWidth = font.widthOfTextAtSize(period, 8.5);
  write(role, M, 10.2, bold, colors.ink);
  write(period, M + CONTENT_W - periodWidth, 8.5, font, colors.muted);
  y -= 12;
  write(org, M, 9, italic, colors.accent);
  y -= 13.5;
};

const labeled = (label, value) => {
  const size = 8.9;
  const leading = 11.8;
  const indent = 74;
  const lines = wrapText(value, size, font, CONTENT_W - indent);

  ensure(leading);
  write(label, M, size, bold, colors.ink);

  lines.forEach((line, index) => {
    if (index > 0) ensure(leading);
    write(line, M + indent, size, font, colors.body);
    y -= leading;
  });
};

// ---------- Header ----------

write(resume.name, M, 22, bold, colors.ink);
y -= 17;
write(resume.title, M, 10.2, font, colors.accent);
y -= 14;
paragraph(resume.contact, { size: 8.3, color: colors.muted, leading: 11 });
y -= 4;
page.drawLine({
  start: { x: M, y },
  end: { x: M + CONTENT_W, y },
  thickness: 1.4,
  color: colors.accent,
});
y -= 16;

// ---------- Summary ----------

section('Professional Summary');
paragraph(resume.summary);

// ---------- Skills ----------

section('Technical Skills');
resume.skills.forEach(([label, value]) => labeled(`${label}:`, value));
y -= 3;

// ---------- Experience ----------

section('Professional Experience');
resume.experience.forEach((job, index) => {
  roleRow(job.role, job.org, job.period);
  job.points.forEach(bullet);
  if (index < resume.experience.length - 1) y -= 7;
});

// ---------- Projects ----------

section('Key Projects');
resume.projects.forEach((project, index) => {
  ensure(26);
  write(project.name, M, 9.8, bold, colors.ink);
  const stackWidth = italic.widthOfTextAtSize(project.stack, 8.4);
  write(project.stack, M + CONTENT_W - stackWidth, 8.4, italic, colors.muted);
  y -= 12;
  project.points.forEach(bullet);
  if (index < resume.projects.length - 1) y -= 6;
});

// ---------- Education ----------

section('Education');
resume.education.forEach(([degree, institution], index) => {
  ensure(26);
  write(degree, M, 9.6, bold, colors.ink);
  y -= 11.5;
  write(institution, M, 8.9, font, colors.body);
  y -= index < resume.education.length - 1 ? 15 : 11.5;
});

const bytes = await pdf.save();
fs.writeFileSync(OUT, bytes);
console.log(`Wrote ${OUT} (${pdf.getPageCount()} pages, ${Math.round(bytes.length / 1024)} KB)`);

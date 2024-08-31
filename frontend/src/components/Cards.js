import React from 'react';
import Card from './Card'; // Adjust the import path if necessary

const jobData = [
  {
    title: 'Software Engineer',
    company: 'Tech Corp',
    location: 'New York, NY',
    description: 'Develop and maintain software applications.'
  },
  {
    title: 'Data Scientist',
    company: 'Data Inc',
    location: 'San Francisco, CA',
    description: 'Analyze and interpret complex data sets.'
  },
  {
    title: 'Product Manager',
    company: 'Product Co',
    location: 'Austin, TX',
    description: 'Manage product development lifecycle.'
  },
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "New York, NY",
    description: "Develop and maintain software applications."
  }, {
    title: "Data Scientist",
    company: "Data Inc",
    location: "San Francisco, CA",
    description: "Analyze and interpret complex data sets."
  }, {
    title: "Product Manager",
    company: "Product Co",
    location: "Austin, TX",
    description: "Manage product development lifecycle."
  }, {
    title: "UX Designer",
    company: "Design Studios",
    location: "Los Angeles, CA",
    description: "Create user-friendly designs and interfaces."
  }, {
    title: "Marketing Specialist",
    company: "Marketing Hub",
    location: "Chicago, IL",
    description: "Develop and execute marketing strategies."
  }, {
    title: "Web Developer",
    company: "Web Solutions",
    location: "Seattle, WA",
    description: "Build and maintain websites and web applications."
  }, {
    title: "HR Manager",
    company: "HR Experts",
    location: "Boston, MA",
    description: "Manage hiring processes and employee relations."
  }, {
    title: "Data Analyst",
    company: "Analytics Group",
    location: "Denver, CO",
    description: "Analyze data to support business decisions."
  }, {
    title: "Sales Executive",
    company: "Sales Pros",
    location: "Dallas, TX",
    description: "Drive sales and develop client relationships."
  }, {
    title: "Graphic Designer",
    company: "Creative Agency",
    location: "San Diego, CA",
    description: "Design visual content for various media."
  }, {
    title: "Customer Support Representative",
    company: "Support Services",
    location: "Phoenix, AZ",
    description: "Assist customers with inquiries and issues."
  }, {
    title: "Accountant",
    company: "Finance Solutions",
    location: "Philadelphia, PA",
    description: "Manage financial records and reports."
  }, {
    title: "Software Tester",
    company: "QA Labs",
    location: "San Jose, CA",
    description: "Test software applications for quality assurance."
  }, {
    title: "Network Engineer",
    company: "Tech Networks",
    location: "Atlanta, GA",
    description: "Design and manage network systems and infrastructure."
  }, {
    title: "Business Analyst",
    company: "Business Insights",
    location: "Houston, TX",
    description: "Analyze business processes and recommend improvements."
  }, {
    title: "Project Manager",
    company: "Project Leaders",
    location: "Minneapolis, MN",
    description: "Oversee and manage project execution and deliverables."
  }, {
    title: "Content Writer",
    company: "Content Creations",
    location: "Austin, TX",
    description: "Create written content for digital platforms."
  }, {
    title: "SEO Specialist",
    company: "SEO Masters",
    location: "San Francisco, CA",
    description: "Optimize websites for search engines."
  }, {
    title: "UI Developer",
    company: "UI Innovations",
    location: "Seattle, WA",
    description: "Develop and implement user interfaces."
  }, {
    title: "Cloud Engineer",
    company: "Cloud Tech",
    location: "New York, NY",
    description: "Design and manage cloud computing systems."
  }, {
    title: "Database Administrator",
    company: "Data Management",
    location: "Chicago, IL",
    description: "Manage and maintain database systems."
  }, {
    title: "DevOps Engineer",
    company: "DevOps Solutions",
    location: "San Diego, CA",
    description: "Implement and manage CI/CD pipelines."
  }, {
    title: "IT Support Specialist",
    company: "IT Helpdesk",
    location: "Dallas, TX",
    description: "Provide technical support to end-users."
  }, {
    title: "Software Architect",
    company: "Tech Architects",
    location: "Boston, MA",
    description: "Design software systems and architecture."
  }, {
    title: "Network Security Analyst",
    company: "Security Experts",
    location: "Atlanta, GA",
    description: "Monitor and protect network security."
  }, {
    title: "Systems Analyst",
    company: "Systems Solutions",
    location: "Denver, CO",
    description: "Analyze and improve IT systems and processes."
  }, {
    title: "Full Stack Developer",
    company: "Dev World",
    location: "San Jose, CA",
    description: "Develop both frontend and backend applications."
  }, {
    title: "Technical Writer",
    company: "Tech Docs",
    location: "Phoenix, AZ",
    description: "Create technical documentation and manuals."
  }, {
    title: "Application Support Analyst",
    company: "App Support",
    location: "Houston, TX",
    description: "Provide support for application issues and troubleshooting."
  }, {
    title: "Digital Marketer",
    company: "Digital Pros",
    location: "San Diego, CA",
    description: "Develop and manage digital marketing campaigns."
  }, {
    title: "Research Scientist",
    company: "Science Labs",
    location: "Philadelphia, PA",
    description: "Conduct research and experiments in a scientific field."
  }, {
    title: "Operations Manager",
    company: "Ops Solutions",
    location: "Minneapolis, MN",
    description: "Manage daily operations and optimize efficiency."
  }, {
    title: "Business Development Manager",
    company: "Biz Dev Co",
    location: "Dallas, TX",
    description: "Identify and develop business opportunities."
  }, {
    title: "Sales Manager",
    company: "Sales Experts",
    location: "Chicago, IL",
    description: "Lead and manage the sales team."
  }, {
    title: "Frontend Developer",
    company: "Frontend Pros",
    location: "New York, NY",
    description: "Build and design the frontend of web applications."
  }, {
    title: "Backend Developer",
    company: "Backend Solutions",
    location: "San Francisco, CA",
    description: "Develop and maintain backend services and APIs."
  }, {
    title: "Game Developer",
    company: "Game Studios",
    location: "Los Angeles, CA",
    description: "Design and develop video games."
  }, {
    title: "Mobile Developer",
    company: "Mobile Apps",
    location: "Seattle, WA",
    description: "Develop applications for mobile platforms."
  }, {
    title: "Automation Engineer",
    company: "Automation Tech",
    location: "Austin, TX",
    description: "Develop and implement automation solutions."
  }, {
    title: "Site Reliability Engineer",
    company: "SRE Experts",
    location: "Boston, MA",
    description: "Ensure reliability and performance of production systems."
  }, {
    title: "CRM Specialist",
    company: "CRM Solutions",
    location: "San Diego, CA",
    description: "Manage and optimize CRM systems."
  }, {
    title: "Technical Support Engineer",
    company: "Tech Support",
    location: "San Jose, CA",
    description: "Provide technical assistance and support."
  }, {
    title: "Business Intelligence Analyst",
    company: "BI Analysts",
    location: "Phoenix, AZ",
    description: "Analyze business data to provide actionable insights."
  }, {
    title: "Product Designer",
    company: "Design Co",
    location: "Denver, CO",
    description: "Design and create product concepts and prototypes."
  }, {
    title: "Content Strategist",
    company: "Content Strategies",
    location: "Philadelphia, PA",
    description: "Develop content strategies and manage content creation."
  }, {
    title: "Video Editor",
    company: "Video Productions",
    location: "Chicago, IL",
    description: "Edit and produce video content."
  }, {
    title: "E-commerce Specialist",
    company: "E-commerce Hub",
    location: "Dallas, TX",
    description: "Manage and optimize online sales channels."
  }, {
    title: "UI/UX Developer",
    company: "UI/UX Experts",
    location: "Houston, TX",
    description: "Develop and design user interfaces and experiences."
  }, {
    title: "Cloud Solutions Architect",
    company: "Cloud Architects",
    location: "San Francisco, CA",
    description: "Design and implement cloud solutions."
  }, {
    title: "Business Systems Analyst",
    company: "Business Systems",
    location: "Minneapolis, MN",
    description: "Analyze and improve business systems and processes."
  }, {
    title: "Penetration Tester",
    company: "Security Testing",
    location: "New York, NY",
    description: "Test and secure systems against cyber threats."
  }, {
    title: "Quality Assurance Engineer",
    company: "QA Innovations",
    location: "Seattle, WA",
    description: "Ensure the quality of software through testing and validation."
  }, {
    title: "IT Project Manager",
    company: "IT Projects",
    location: "San Diego, CA",
    description: "Manage IT projects and coordinate with stakeholders."
  }, {
    title: "Marketing Manager",
    company: "Marketing Pro",
    location: "Chicago, IL",
    description: "Develop and execute marketing strategies and campaigns."
  }
  // Add more job objects as needed
];

const Cards = () => {
  return (
    <div className="container my-4">
      <div className="row">
        {jobData.map((job, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card 
              title={job.title} 
              company={job.company} 
              location={job.location} 
              description={job.description} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;

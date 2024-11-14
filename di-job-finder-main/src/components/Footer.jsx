import React from "react";

const Footer = () => {
  const sections = [
    {
      title: "For Job Seekers",
      links: [
        "Search Jobs",
        "Browse Jobs",
        "Salaries",
        "Job Seeker Reviews",
        "Mobile Apps",
        "Create Free Account",
        "Job Seeker Support",
        "Trust and Safety",
      ],
    },
    {
      title: "For Employers",
      links: [
        "Post a Job Now",
        "How it Works",
        "Job Sites",
        "Oval Reviews",
        "Plans",
        "Enterprise",
        "Search Resumes",
        "New Account Help",
        "Employer Support",
      ],
    },
    {
      title: "Industry Solutions",
      links: [
        "Accounting",
        "Construction",
        "Healthcare",
        "Legal",
        "Sales",
        "Technology",
      ],
    },
    {
      title: "Partner with Us",
      links: [
        "Overview",
        "Job Board API",
        "Email Alert Program",
        "Reseller Program",
        "Job Board Software",
        "ATS Integrations",
        "Newspaper Partnerships",
      ],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Blog", "Press", "Oval.org", "Oval ID"],
    },
  ];

  const socialLinks = [
    { platform: "Twitter", icon: "./src/assets/twitter.svg" },
    { platform: "Facebook", icon: "./src/assets/fb.svg" },
    { platform: "LinkedIn", icon: "./src/assets/linkedin.svg" },
  ];

  return (
    <footer className="bg-white pt-12 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="mr-12">
            <img
              src="./src/assets/oval.svg"
              alt="Oval Logo"
              className=" mb-4"
            />
            <p className="text-sm">© 2019 Oval</p>
          </div>
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="font-semibold mb-4">{section.title}</h2>
              <ul>
                {section.links.map((link, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="text-gray-600 hover:text-gray-800">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-16">
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 hover:text-gray-800"
              >
                <img src={social.icon} alt={social.platform} className="h-6" />
              </a>
            ))}
          </div>
          <div className="flex space-x-10 text-gray-600 text-sm">
            <a href="#" className="hover:text-gray-800">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-800">
              Trust & Safety
            </a>
          </div>
          <div className="text-sm">
            Language
            <select className="bg-gray-100 border ml-2 border-gray-300 rounded p-2">
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

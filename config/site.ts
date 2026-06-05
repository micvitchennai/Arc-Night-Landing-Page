export const siteConfig = {
  name: "Arcnight",
  url: "https://arcnight.microsoftinnovations.club",
  getStartedUrl: "#register",
  ogImage: "https://arcnight.microsoftinnovations.club/og.png",
  description:
    "Design, develop, and deploy a complete website or web app within 24 hours.",
  version: "1.0",
  links: {
    instagram : "https://www.instagram.com/microsoft.innovations.vitc/",
    github: "https://github.com/micvitc",
    email: "mailto:mic.vit.chennai@gmail.com",
  },
  coordinators: {
    faculty: [
      { name: "Dr Anusha K", role: "Faculty Coordinator" },
      { name: "Dr Braveen", role: "Faculty Coordinator" },
    ],
    student: [
      { name: "Preeti B R", phone: "7397440445", role: "Student Coordinator" },
      { name: "Tarang", phone: "6206305176", role: "Student Coordinator" },
    ],
  },
};

export type SiteConfig = typeof siteConfig;


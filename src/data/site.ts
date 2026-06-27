export const site = {
  name: "CTL Amedica",
  description:
    "CTL Amedica is a forward-thinking medical device design, development, and manufacturing company.",
  email: "info@ctlamedica.com",
  phone: "1.800.713.9489",
  fax: "1.888.831.4892",
  social: {
    linkedin: "https://www.linkedin.com/company/ctl-amedica/",
    instagram: "https://www.instagram.com/ctlamedica/",
    facebook: "https://www.facebook.com/CTLAmedica/",
  },
  locations: [
    {
      label: "Manufacturing & Distribution HQ",
      lines: ["2052 McKenzie Drive, Building 1", "Carrollton, TX 75006"],
    },
    {
      label: "Research & Development Center",
      lines: ["460 Norristown Rd. Suite 100", "Blue Bell, PA 19422"],
    },
  ],
  founded: 2014,
  copyright: "© 2026 CTL Amedica. All Rights Reserved.",
} as const;

/** Primary nav (mirrors the live site exactly). "Product" uses the mega menu. */
export const mainNav = [
  { label: "Product", href: "/products", mega: true },
  {
    label: "Technology",
    href: "/technology",
    children: [{ label: "Silicon Nitride", href: "/silicon-nitride" }],
  },
  { label: "Publications", href: "/publications" },
  { label: "Careers", href: "/careers" },
  { label: "About us", href: "/about-us" },
] as const;

export const footerNav = {
  company: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/about-us" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  quickLinks: [
    { label: "Technology", href: "/technology" },
    { label: "News and Updates", href: "/news-and-updates" },
    { label: "NITRO", href: "/nitro" },
    { label: "Silicon Nitride", href: "/silicon-nitride" },
  ],
};

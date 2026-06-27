export const site = {
  name: "CTL Amedica",
  tagline: "Rethink What's Possible",
  description:
    "The world's exclusive provider of Silicon Nitride implants for spine.",
  email: "info@ctlamedica.com",
  phone: "1.800.713.9489",
  fax: "1.888.831.4892",
  locations: [
    {
      label: "Manufacturing & Distribution HQ",
      address: "2052 McKenzie Drive, Building 1",
      city: "Carrollton, TX 75006",
    },
    {
      label: "R&D Center",
      address: "460 Norristown Rd. Suite 100",
      city: "Blue Bell, PA 19422",
    },
  ],
  founded: 2014,
} as const;

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const mainNav: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All Products", href: "/products" },
      { label: "Cervical Fixation", href: "/products?category=cervical-fixation" },
      { label: "Cervical Fusion", href: "/products?category=cervical-fusion" },
      { label: "Lumbar Fixation", href: "/products?category=lumbar-fixation" },
      { label: "Lumbar Fusion", href: "/products?category=lumbar-fusion" },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    children: [
      { label: "Silicon Nitride", href: "/silicon-nitride" },
      { label: "The NITRO Family", href: "/nitro" },
      { label: "Technology Overview", href: "/technology" },
    ],
  },
  { label: "Publications", href: "/publications" },
  { label: "Careers", href: "/careers" },
  { label: "About Us", href: "/about" },
];

export const footerNav = [
  {
    title: "Products",
    links: [
      { label: "Cervical Fixation", href: "/products?category=cervical-fixation" },
      { label: "Cervical Fusion", href: "/products?category=cervical-fusion" },
      { label: "Lumbar Fixation", href: "/products?category=lumbar-fixation" },
      { label: "Lumbar Fusion", href: "/products?category=lumbar-fusion" },
    ],
  },
  {
    title: "Technology",
    links: [
      { label: "Silicon Nitride", href: "/silicon-nitride" },
      { label: "The NITRO Family", href: "/nitro" },
      { label: "Technology Overview", href: "/technology" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Publications", href: "/publications" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

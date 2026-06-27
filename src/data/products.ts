// All product copy below is transcribed verbatim from ctlamedica.com — do not edit wording.

export type Segment = "Cervical" | "Lumbar";
export type Procedure = "Fixation" | "Fusion";

export type ProductCategory =
  | "cervical-fixation"
  | "cervical-fusion"
  | "lumbar-fixation"
  | "lumbar-fusion";

export interface Product {
  slug: string;
  /** Name exactly as shown on the product page */
  name: string;
  /** Name exactly as shown in the mega menu */
  menuLabel: string;
  category: ProductCategory;
  segment: Segment;
  procedure: Procedure;
  /** System type / tagline, verbatim */
  type: string;
  material: string;
  nitro?: boolean;
  /** Description paragraphs, verbatim */
  description: string[];
  /** Key features, verbatim */
  features: string[];
}

export const categoryMeta: Record<
  ProductCategory,
  { label: string; segment: Segment; procedure: Procedure }
> = {
  "cervical-fixation": { label: "Cervical Fixation", segment: "Cervical", procedure: "Fixation" },
  "cervical-fusion": { label: "Cervical Fusion", segment: "Cervical", procedure: "Fusion" },
  "lumbar-fixation": { label: "Lumbar Fixation", segment: "Lumbar", procedure: "Fixation" },
  "lumbar-fusion": { label: "Lumbar Fusion", segment: "Lumbar", procedure: "Fusion" },
};

export const categoryOrder: ProductCategory[] = [
  "cervical-fixation",
  "cervical-fusion",
  "lumbar-fixation",
  "lumbar-fusion",
];

const SIN_DESC = [
  "In the race to achieve interbody fusion, material matters. And no material fosters an environment for more bone fusion like silicon nitride. Featuring the ability to achieve superior new bone growth and osseointegration, along with proven bacteriostatic properties and enhanced imaging attributes, silicon nitride outperforms PEEK and titanium.",
];

const SIN_FEATURES = [
  "Nanotopography enhances osteoblast response, initiating more bone fusion",
  "Optimal material density enables radiotranslucent and reduced artifact imaging",
  "Surface chemistry generates bacteriostatic properties",
];

const NITRO_FEATURES = [
  "Precisely Sized Axial Pores",
  "Macro-Texturing",
  "Integration Options and Configurations",
  "Enhanced Osteogenic Response",
  "Bacteriostatic Properties",
  "Artifact-Free Imaging",
];

export const products: Product[] = [
  // ───────────── Cervical Fixation ─────────────
  {
    slug: "monet",
    name: "MONET™",
    menuLabel: "MONET™",
    category: "cervical-fixation",
    segment: "Cervical",
    procedure: "Fixation",
    type: "ANTERIOR CERVICAL FUSION PLATFORM",
    material: "Titanium / PEEK",
    description: [
      "The MONET™ Anterior Cervical Fusion system is designed for intra-operative flexibility. The cage component can be implanted in conjunction with the MONET™ supplemental fixation plates, making it a truly comprehensive Anterior Cervical Fusion solution.",
    ],
    features: [
      "Secure Fastening",
      "Variable Configurations",
      "Multiple screw options",
      "Two-hole and four-hole plate configurations accommodate anatomical variation",
      "Torsional stabilizers enhance rotational stability (two-hole plate only)",
      "Efficient screw blocking mechanism",
      "Tapered leading edge for ease of insertion",
      "Large graft window allows for maximum graft volume and greater likelihood of fusion",
    ],
  },
  {
    slug: "van-gogh-ii",
    name: "VAN GOGH™ II",
    menuLabel: "VAN GOGH II™",
    category: "cervical-fixation",
    segment: "Cervical",
    procedure: "Fixation",
    type: "ANTERIOR CERVICAL PLATING PLATFORM",
    material: "Titanium",
    description: [
      "VAN GOGH™ Anterior Cervical Plate System offers a low profile plate, robust screws, and intuitive instruments that are designed to provide a safe and streamlined procedural experience.",
      "The Van Gogh™ Spinal Implant, named after the legendary artist Vincent van Gogh, embodies the spirit of innovation and meticulous craftsmanship. Van Gogh's use of bold colors and dynamic brushstrokes parallels the advanced design and functionality of this spinal implant. Designed to provide enhanced stability and optimal integration, the Van Gogh™ Spinal Implant offers a blend of strength and precision, much like the timeless masterpieces of its namesake.",
    ],
    features: [
      "Available in a variety of sizes to accommodate anatomical variation",
      "Multiple screw options and a high degree of angulation provide intraoperative flexibility",
      "Features a simple integrated screw head blocking mechanism",
      "1.9mm thickness and 17mm width minimizes tissue disruption",
      "Plate window for improved visualization",
    ],
  },
  {
    slug: "renoir",
    name: "RENOIR™",
    menuLabel: "RENOIR™",
    category: "cervical-fixation",
    segment: "Cervical",
    procedure: "Fixation",
    type: "POSTERIOR CERVICO-THORACIC FIXATION PLATFORM",
    material: "Titanium",
    description: [
      "The RENOIR™ Posterior Cervico-Thoracic Fixation System consisted of various rods, multi-application polyaxial screws and locking set screws to provide efficient and secure top-loading rigid fixation.",
    ],
    features: [
      "Set Screw available in standard and cap with cap screw configuration to be used with crosslink",
      "Straight and transition rods available",
      "Self-tapping screws with a pitch distance of 1.7mm",
      "Trilobe drive feature for increasing torque",
      "Tulip height 10.6mm for a low profile construct",
    ],
  },

  // ───────────── Cervical Fusion ─────────────
  {
    slug: "matisse",
    name: "MATISSE™",
    menuLabel: "MATISSE™",
    category: "cervical-fusion",
    segment: "Cervical",
    procedure: "Fusion",
    type: "ANTERIOR CERVICAL INTERBODY FUSION DEVICES",
    material: "PEEK with TiCro™–PEEK coating",
    description: [
      "The MATISSE™ ACIF Cage is engineered to accommodate a wide range of patient anatomies and surgeon preferences and is available in various footprints, heights, and lordotic angles.",
    ],
    features: [
      "PEEK cages with TiCro™ - PEEK coating to promote adhesion and improved imaging",
      "Design that accommodates various patient anatomies and resists migration",
      "PEEK cages built with distinct radiographic markers helping to ensure proper implant placement",
      "Large graft window allows for maximum graft volume",
      "TiCro™ - PEEK cages manufactured with titanium end plate shell and radiolucent PEEK bodies",
      "Tapered leading edge for ease of insertion",
      "Two-hole and four-hole plate configurations",
      "Torsional stabilizers enhance rotational stability (two-hole plate only)",
      "Efficient screw blocking mechanism",
      "Multiple screw options",
    ],
  },
  {
    slug: "matisse-nitro",
    name: "MATISSE NITRO™",
    menuLabel: "MATISSE NITRO™",
    category: "cervical-fusion",
    segment: "Cervical",
    procedure: "Fusion",
    type: "ANTERIOR CERVICAL INTERBODY FUSION DEVICES",
    material: "Silicon Nitride",
    nitro: true,
    description: [
      "The MATISSE NITRO™ Anterior Cervical Interbody Fusion Device is CTL Amedica's exclusive and revitalized addition to the NITRO family of interbody implants crafted entirely of the heavily researched and proven bio-ceramic material, silicon nitride.",
    ],
    features: NITRO_FEATURES,
  },
  {
    slug: "monet-nitro",
    name: "MONET NITRO™",
    menuLabel: "MONET NITRO™",
    category: "cervical-fusion",
    segment: "Cervical",
    procedure: "Fusion",
    type: "ANTERIOR CERVICAL INTERBODY FUSION CAGE SYSTEM",
    material: "Silicon Nitride",
    nitro: true,
    description: [
      "MONET NITRO™ anterior cervical fusion system is CTL Amedica's exclusive and enhanced addition to the NITRO™ family of interbody implants crafted entirely of the heavily researched and proven biomaterial, silicon nitride.",
    ],
    features: NITRO_FEATURES,
  },
  {
    slug: "valeo-vbr",
    name: "VALEO™ VBR",
    menuLabel: "Valeo™ VBR",
    category: "cervical-fusion",
    segment: "Cervical",
    procedure: "Fusion",
    type: "Cervical Vertebral Body Replacement Interbody Fusion Device",
    material: "Silicon Nitride",
    description: SIN_DESC,
    features: SIN_FEATURES,
  },
  {
    slug: "valeo-ii-c",
    name: "VALEO™ II C",
    menuLabel: "Valeo™ II C",
    category: "cervical-fusion",
    segment: "Cervical",
    procedure: "Fusion",
    type: "Anterior Cervical Interbody Fusion Devices",
    material: "Silicon Nitride",
    description: SIN_DESC,
    features: SIN_FEATURES,
  },

  // ───────────── Lumbar Fixation ─────────────
  {
    slug: "taurus",
    name: "TAURUS™",
    menuLabel: "TAURUS™",
    category: "lumbar-fixation",
    segment: "Lumbar",
    procedure: "Fixation",
    type: "THORACOLUMBAR MODULAR FIXATION PLATFORM",
    material: "Titanium",
    description: [
      "The TAURUS™ modular thoracolumbar fixation platform allows for true intra-operative flexibility. Headbodys can be connected in-situ or prior to insertion to allow direct screw to screw distraction for improved visualization. The combination of intra-operative flexibility and system strength provides powerful benefits to both patients and surgeons.",
    ],
    features: [
      "Modularity provides intra-operative flexibility",
      "Helical Flange eliminates cross threading and head splay",
      "Tension Head holds its position at any angle",
    ],
  },
  {
    slug: "preference-2",
    name: "PREFERENCE 2™",
    menuLabel: "Preference 2™",
    category: "lumbar-fixation",
    segment: "Lumbar",
    procedure: "Fixation",
    type: "POSTERIOR LUMBAR COMPLEX FIXATION PLATFORM",
    material: "Titanium",
    description: [
      "The Preference 2™ complex fixation platform consists of various rods, multi-action monoaxial and polyaxial pedicle screws, robust connecting components and locking set screws, which together can be rigidly fixated into a variety of configurations. The Preference 2™ platform provides strong and secure fixation, while allowing intra-operative flexibility.",
    ],
    features: [
      "Low-profile implants help reduce soft tissue disruption",
      "Patented Helical Flange™ technology prevents head splay without compromising grip on the rod",
      "Cross-connectors enable multi-plane adjustments to facilitate placement on any construct",
    ],
  },
  {
    slug: "picasso-ll",
    name: "PICASSO™ II",
    menuLabel: "PICASSO ll™",
    category: "lumbar-fixation",
    segment: "Lumbar",
    procedure: "Fixation",
    type: "Posterior Lumbar Minimally Invasive Fixation Platform",
    material: "Titanium",
    description: [
      "PICASSO ll™ percutaneous screws are designed with simplicity in mind. Made for true percutaneous implantation, they allow for complete pedicle stabilization while minimizing tissue disruption.",
      "The PICASSO™ II Posterior Lumbar Minimally Invasive Fixation Platform, named after the influential artist Pablo Picasso, combines innovation with meticulous design. The system features percutaneous screws designed for true percutaneous implantation, allowing for complete pedicle stabilization while minimizing tissue disruption. The slim integrated tower sleeve provides stability and control during insertion and reduction.",
    ],
    features: [
      "True percutaneous implantation for complete pedicle stabilization",
      "Slim integrated tower sleeve provides stability and control during insertion and reduction",
      "Minimizes tissue disruption",
    ],
  },
  {
    slug: "flex",
    name: "FLEX",
    menuLabel: "FLEX",
    category: "lumbar-fixation",
    segment: "Lumbar",
    procedure: "Fixation",
    type: "Posterior Lumbar Modular MIS Fixation Platform",
    material: "Titanium",
    description: [
      "FLEX modular percutaneous polyaxial screws are designed with versatility in mind. Made for true percutaneous implantation, they allow for complete pedicle stabilization, and are designed with a proprietary mid-tower accordion hinge. This system is to be used in conjunction with the PICASSO ll™ system.",
    ],
    features: [
      "Flexible tower provides superior usability in crowded areas",
      "Stability ring prevents head splay during implantation, reduction and set screw insertion",
      "Precisely scored and tapered housing provides a clean break every time",
      "6.0 percutaneous rod available in straight and curved, and designed with a bulleted tip, which allows for smooth insertion",
      "Dual lead polyaxial screw with an angulation of ±20°",
    ],
  },

  // ───────────── Lumbar Fusion ─────────────
  {
    slug: "klimt",
    name: "KLIMT™",
    menuLabel: "KLIMT",
    category: "lumbar-fusion",
    segment: "Lumbar",
    procedure: "Fusion",
    type: "3D PRINTED EXPANDABLE LUMBAR INTERBODY FUSION CAGE SYSTEM",
    material: "3D-Printed Titanium",
    description: [
      "KLIMT™ Expandable LIF Cage System are 3D-printed titanium lumbar interbody fusion implants for posterior and transforaminal approach to thoracolumbar disease. The implant is designed to accommodate a wide range of patient anatomies and surgical preferences.",
    ],
    features: [
      "MINIMIZED INSERTION HEIGHT allows for reduced tissue disruption and nerve retraction",
      "GRADUAL VERTICAL EXPANSION adjusts between (0 to 4mm) -or- (0 to 6mm) based on the minimized insertion height and leads to less endplate disruption",
      'MICRO "3D POROUS" TEXTURE enhances bone interdigitation',
      'MACRO "SERRATED" SURFACE prevents cage migration',
      "LARGE BONE GRAFT WINDOW provides maximum volume for bone graft packing",
      "MANY SIZE OPTIONS accommodates a wide range of patient anatomies",
    ],
  },
  {
    slug: "valeo-ii-ll",
    name: "VALEO™ II LL",
    menuLabel: "Valeo™ II LL",
    category: "lumbar-fusion",
    segment: "Lumbar",
    procedure: "Fusion",
    type: "Lateral Lumbar Interbody Fusion Devices",
    material: "Silicon Nitride",
    description: SIN_DESC,
    features: SIN_FEATURES,
  },
  {
    slug: "mondrian-alif",
    name: "MONDRIAN™ ALIF",
    menuLabel: "MONDRIAN™ ALIF",
    category: "lumbar-fusion",
    segment: "Lumbar",
    procedure: "Fusion",
    type: "ANTERIOR LUMBAR INTERBODY FUSION SYSTEM",
    material: "Titanium (TiCro®)",
    description: [
      "The MONDRIAN™ ALIF System is an integrated plate and cage construct, featuring CTL Amedica's proprietary TiCro® surface technology. The implant is designed to provide anterior column stabilisation and supplemental fixation, while accommodating a wide range of patient anatomies and surgical preferences.",
    ],
    features: [
      "Large graft window allows for maximum graft volume",
      "Smooth tapered leading edge for ease of insertion",
      "Efficient screw locking mechanism",
      "Supplementary screw blocking plate for additional reinforcement",
      "Multiple screw plate configurations to better accommodate patient anatomy",
      "Two-hole and four-hole plate configurations accommodate anatomical variation",
      "Torsional stabilizers enhance rotational stability (two-hole plate only)",
      "Multiple screw options",
    ],
  },
  {
    slug: "mondrian-plif-tlif",
    name: "MONDRIAN™ PLIF/TLIF",
    menuLabel: "MONDRIAN™ PLIF/TLIF",
    category: "lumbar-fusion",
    segment: "Lumbar",
    procedure: "Fusion",
    type: "Transforaminal Lumbar Interbody Fusion Devices",
    material: "Titanium (TiCRO®)",
    description: [
      "MONDRIAN™ lumbar cages are titanium lumbar interbody fusion implants designed to accommodate a wide range of patient anatomies and surgical preferences. The system, named after influential artist Piet Mondrian, reflects a commitment to precision and innovative design. This posterior lumbar interbody fusion system features a titanium integrated plate and cage construct with CTL Amedica's proprietary TiCRO surface technology. The MONDRIAN™ PLIF/TLIF provides posterior column stabilization and supplemental fixation, accommodating diverse patient anatomies and surgical preferences.",
    ],
    features: [
      "Large graft window allows for maximum graft volume and greater likelihood of fusion",
      "Implant designed to accommodate a wide variety of patient anatomies",
      "Aggressive serrations ensure endplate fixation",
      "Bi-convex profile to maximize endplate contact",
      "Lateral aperture for improved visualization via imaging",
    ],
  },
  {
    slug: "mondrian-tlif",
    name: "MONDRIAN™ TLIF | Curved",
    menuLabel: "MONDRIAN™ TLIF | Curved",
    category: "lumbar-fusion",
    segment: "Lumbar",
    procedure: "Fusion",
    type: "Transforaminal Lumbar Interbody Fusion Devices | Curved",
    material: "Titanium-PEEK Hybrid",
    description: [
      "MONDRIAN™ curved transforaminal lumbar cages are titanium-PEEK hybrid lumbar interbody fusion implants designed to accommodate a wide range of patient anatomies and surgical preferences.",
    ],
    features: [
      "Large graft window allows for maximum graft volume and greater likelihood of fusion",
      "Implant designed to accommodate a wide variety of patient anatomies",
      "Aggressive serrations ensure endplate fixation",
      "Bi-convex profile to maximize endplate contact",
      "Lateral aperture for improved visualization via imaging",
    ],
  },
  {
    slug: "valeo-ll-pl-ol",
    name: "VALEO™ ll PL/OL",
    menuLabel: "VALEO™ ll PL/OL",
    category: "lumbar-fusion",
    segment: "Lumbar",
    procedure: "Fusion",
    type: "Posterior/Transforaminal Lumbar Interbody Fusion Devices",
    material: "Silicon Nitride",
    description: SIN_DESC,
    features: SIN_FEATURES,
  },
  {
    slug: "valeo-ii-al",
    name: "VALEO™ II AL",
    menuLabel: "Valeo™ II AL",
    category: "lumbar-fusion",
    segment: "Lumbar",
    procedure: "Fusion",
    type: "Anterior Lumbar Interbody Fusion Devices",
    material: "Silicon Nitride",
    description: SIN_DESC,
    features: SIN_FEATURES,
  },
  {
    slug: "valeo-ii-tl",
    name: "VALEO™ II TL",
    menuLabel: "Valeo™ II TL",
    category: "lumbar-fusion",
    segment: "Lumbar",
    procedure: "Fusion",
    type: "Transforaminal Lumbar Interbody Fusion Devices",
    material: "Silicon Nitride",
    description: SIN_DESC,
    features: SIN_FEATURES,
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

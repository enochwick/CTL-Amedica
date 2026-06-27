export type Segment = "cervical" | "lumbar";
export type Procedure = "fixation" | "fusion";
export type Material = "Silicon Nitride" | "Titanium" | "PEEK" | "PEEK / Titanium";

export type ProductCategory =
  | "cervical-fixation"
  | "cervical-fusion"
  | "lumbar-fixation"
  | "lumbar-fusion";

export interface Product {
  slug: string;
  name: string;
  trademark?: string;
  category: ProductCategory;
  segment: Segment;
  procedure: Procedure;
  approach: string;
  material: Material;
  nitro?: boolean;
  tagline: string;
  summary: string;
  features: string[];
}

export const categoryMeta: Record<
  ProductCategory,
  { label: string; segment: Segment; procedure: Procedure; blurb: string }
> = {
  "cervical-fixation": {
    label: "Cervical Fixation",
    segment: "cervical",
    procedure: "fixation",
    blurb:
      "Anterior and posterior cervical plating and screw systems engineered for low-profile stability and intuitive instrumentation.",
  },
  "cervical-fusion": {
    label: "Cervical Fusion",
    segment: "cervical",
    procedure: "fusion",
    blurb:
      "Silicon Nitride interbody and standalone devices built to drive osteogenesis, resist bacteria, and image with clarity.",
  },
  "lumbar-fixation": {
    label: "Lumbar Fixation",
    segment: "lumbar",
    procedure: "fixation",
    blurb:
      "Pedicle screw and posterior fixation platforms designed for versatile constructs and streamlined surgical workflow.",
  },
  "lumbar-fusion": {
    label: "Lumbar Fusion",
    segment: "lumbar",
    procedure: "fusion",
    blurb:
      "A comprehensive interbody portfolio — ALIF, TLIF, PLIF, LLIF — including Silicon Nitride and NITRO options across every approach.",
  },
};

export const products: Product[] = [
  // ── Cervical Fixation ──────────────────────────────────────────────
  {
    slug: "monet",
    name: "MONET",
    trademark: "™",
    category: "cervical-fixation",
    segment: "cervical",
    procedure: "fixation",
    approach: "Anterior Cervical Plate",
    material: "Titanium",
    tagline: "Low-profile anterior cervical plating",
    summary:
      "The MONET™ Anterior Cervical Plate System delivers a thin, contoured profile with a self-guiding locking mechanism for secure, efficient fixation from one to four levels.",
    features: [
      "Low-profile, anatomically contoured plates",
      "Single-step locking screw retention",
      "Variable and fixed-angle screw options",
      "Large graft windows for direct visualization",
    ],
  },
  {
    slug: "van-gogh-ii",
    name: "VAN GOGH II",
    trademark: "™",
    category: "cervical-fixation",
    segment: "cervical",
    procedure: "fixation",
    approach: "Posterior Cervical Fixation",
    material: "Titanium",
    tagline: "Posterior cervico-thoracic stabilization",
    summary:
      "VAN GOGH II™ is a posterior cervico-thoracic system offering a versatile range of screws, hooks, and rods for complex occipito-cervical and thoracic constructs.",
    features: [
      "Occiput to thoracic construct versatility",
      "Polyaxial and uniplanar screw options",
      "Tapered, pre-bent and straight rods",
      "Streamlined reduction instrumentation",
    ],
  },
  {
    slug: "renoir",
    name: "RENOIR",
    trademark: "™",
    category: "cervical-fixation",
    segment: "cervical",
    procedure: "fixation",
    approach: "Anterior Cervical Plate",
    material: "Titanium",
    tagline: "Streamlined anterior cervical plating",
    summary:
      "The RENOIR™ system pairs a refined plate geometry with intuitive instrumentation for fast, reproducible anterior cervical fixation.",
    features: [
      "Minimal-footprint plate design",
      "Integrated anti-backout mechanism",
      "Color-coded instrumentation",
      "Single-tray efficiency",
    ],
  },

  // ── Cervical Fusion ────────────────────────────────────────────────
  {
    slug: "matisse",
    name: "MATISSE",
    trademark: "™",
    category: "cervical-fusion",
    segment: "cervical",
    procedure: "fusion",
    approach: "ACDF Interbody",
    material: "Silicon Nitride",
    tagline: "Silicon Nitride cervical interbody",
    summary:
      "MATISSE™ is a Silicon Nitride cervical interbody that actively stimulates bone formation while resisting bacterial colonization — and images with exceptional clarity.",
    features: [
      "100% Silicon Nitride (Si3N4) construction",
      "Osteogenic, hydrophilic surface chemistry",
      "Artifact-free CT and MRI visualization",
      "Anatomic footprints and lordotic options",
    ],
  },
  {
    slug: "matisse-nitro",
    name: "MATISSE NITRO",
    trademark: "™",
    category: "cervical-fusion",
    segment: "cervical",
    procedure: "fusion",
    approach: "ACDF Interbody",
    material: "Silicon Nitride",
    nitro: true,
    tagline: "NITRO cervical interbody fusion",
    summary:
      "MATISSE NITRO™ advances the cervical interbody with precisely sized axial pores and macro-texturing for a true pathway to bony through-growth.",
    features: [
      "Precisely sized axial pores for capillary action",
      "Macro-textured surface for greater bony contact",
      "Enhanced osteogenic response",
      "Artifact-free imaging",
    ],
  },
  {
    slug: "monet-nitro",
    name: "MONET NITRO",
    trademark: "™",
    category: "cervical-fusion",
    segment: "cervical",
    procedure: "fusion",
    approach: "Standalone ACDF",
    material: "Silicon Nitride",
    nitro: true,
    tagline: "Standalone NITRO cervical system",
    summary:
      "MONET NITRO™ combines a Silicon Nitride NITRO interbody with integrated zero-profile fixation for a streamlined standalone ACDF solution.",
    features: [
      "Integrated standalone fixation",
      "NITRO axial pores and macro-texturing",
      "Zero-profile anterior footprint",
      "Bacteriostatic Silicon Nitride surface",
    ],
  },
  {
    slug: "valeo-ii-c",
    name: "Valeo II C",
    trademark: "™",
    category: "cervical-fusion",
    segment: "cervical",
    procedure: "fusion",
    approach: "Cervical Interbody",
    material: "Silicon Nitride",
    tagline: "Cervical interbody device",
    summary:
      "Valeo™ II C is a Silicon Nitride cervical interbody with an established clinical track record for predictable fusion outcomes.",
    features: [
      "Clinically established Silicon Nitride platform",
      "Wide range of heights and lordosis",
      "Radiographic markers for placement",
      "Bone-building surface chemistry",
    ],
  },
  {
    slug: "valeo-vbr",
    name: "Valeo VBR",
    trademark: "™",
    category: "cervical-fusion",
    segment: "cervical",
    procedure: "fusion",
    approach: "Vertebral Body Replacement",
    material: "Silicon Nitride",
    tagline: "Silicon Nitride corpectomy device",
    summary:
      "Valeo™ VBR is a Silicon Nitride vertebral body replacement for corpectomy reconstruction across the cervical and thoracolumbar spine.",
    features: [
      "Silicon Nitride corpectomy construct",
      "Multiple footprints and heights",
      "Large central graft chamber",
      "Imaging-friendly assessment of fusion",
    ],
  },

  // ── Lumbar Fixation ────────────────────────────────────────────────
  {
    slug: "taurus",
    name: "TAURUS",
    trademark: "™",
    category: "lumbar-fixation",
    segment: "lumbar",
    procedure: "fixation",
    approach: "Pedicle Screw System",
    material: "Titanium",
    tagline: "Versatile posterior pedicle screw system",
    summary:
      "TAURUS™ is a comprehensive posterior pedicle screw system supporting open and minimally invasive constructs with a robust set of reduction and derotation tools.",
    features: [
      "Polyaxial, uniplanar, and reduction screws",
      "Open and MIS instrumentation",
      "Dual-lead thread for strong purchase",
      "Modular tulip and rod options",
    ],
  },
  {
    slug: "preference-2",
    name: "Preference 2",
    trademark: "™",
    category: "lumbar-fixation",
    segment: "lumbar",
    procedure: "fixation",
    approach: "Pedicle Screw System",
    material: "Titanium",
    tagline: "Refined posterior fixation platform",
    summary:
      "Preference 2™ refines posterior lumbar fixation with simplified instrumentation and a low-profile construct designed for surgeon workflow.",
    features: [
      "Low-profile tulip design",
      "Favored-angle screw options",
      "Quick-connect instrumentation",
      "Streamlined construct assembly",
    ],
  },
  {
    slug: "picasso-ll",
    name: "PICASSO LL",
    trademark: "™",
    category: "lumbar-fixation",
    segment: "lumbar",
    procedure: "fixation",
    approach: "Lateral Plate Fixation",
    material: "Titanium",
    tagline: "Lateral lumbar supplemental fixation",
    summary:
      "PICASSO™ LL provides lateral supplemental fixation that complements lateral interbody fusion with a low-profile, single-incision construct.",
    features: [
      "Single-incision lateral fixation",
      "Low-profile plate and screw design",
      "Complements LLIF interbody devices",
      "Efficient lateral instrumentation",
    ],
  },

  // ── Lumbar Fusion ──────────────────────────────────────────────────
  {
    slug: "mondrian-alif",
    name: "MONDRIAN ALIF",
    trademark: "™",
    category: "lumbar-fusion",
    segment: "lumbar",
    procedure: "fusion",
    approach: "ALIF Interbody",
    material: "Silicon Nitride",
    tagline: "Anterior lumbar interbody fusion",
    summary:
      "MONDRIAN™ ALIF is a Silicon Nitride anterior lumbar interbody with integrated fixation, combining a large graft window with osteogenic surface chemistry.",
    features: [
      "Silicon Nitride construction",
      "Integrated anterior screw fixation",
      "Large central graft aperture",
      "Lordotic and hyperlordotic options",
    ],
  },
  {
    slug: "mondrian-tlif",
    name: "MONDRIAN TLIF",
    trademark: "™",
    category: "lumbar-fusion",
    segment: "lumbar",
    procedure: "fusion",
    approach: "TLIF Interbody",
    material: "Silicon Nitride",
    tagline: "Transforaminal lumbar interbody fusion",
    summary:
      "MONDRIAN™ TLIF delivers a curved Silicon Nitride interbody designed for smooth insertion and broad endplate coverage through a transforaminal approach.",
    features: [
      "Bullet-nose curved geometry",
      "Silicon Nitride osteogenic surface",
      "Broad endplate footprint",
      "Radiographic placement markers",
    ],
  },
  {
    slug: "mondrian-plif-tlif",
    name: "MONDRIAN PLIF / TLIF",
    trademark: "™",
    category: "lumbar-fusion",
    segment: "lumbar",
    procedure: "fusion",
    approach: "PLIF / TLIF Interbody",
    material: "Silicon Nitride",
    tagline: "Posterior & transforaminal interbody",
    summary:
      "MONDRIAN™ PLIF/TLIF offers straight and curved Silicon Nitride interbodies for posterior and transforaminal approaches across a wide size range.",
    features: [
      "Straight and curved options",
      "Silicon Nitride construction",
      "Bilateral or unilateral placement",
      "Aggressive endplate teeth for stability",
    ],
  },
  {
    slug: "klimt",
    name: "KLIMT",
    trademark: "™",
    category: "lumbar-fusion",
    segment: "lumbar",
    procedure: "fusion",
    approach: "Expandable TLIF",
    material: "Titanium",
    tagline: "Expandable lumbar interbody",
    summary:
      "KLIMT™ is an expandable lumbar interbody that restores disc height and lordosis in situ through a minimal annular window.",
    features: [
      "In-situ height and lordosis expansion",
      "Minimal insertion footprint",
      "Continuous graft delivery channel",
      "MIS-compatible instrumentation",
    ],
  },
  {
    slug: "flex",
    name: "FLEX",
    trademark: "™",
    category: "lumbar-fusion",
    segment: "lumbar",
    procedure: "fusion",
    approach: "Articulating TLIF",
    material: "Titanium",
    tagline: "Articulating lumbar interbody",
    summary:
      "FLEX™ articulates during insertion to achieve true anterior column placement through a single posterior or transforaminal corridor.",
    features: [
      "Articulating insertion for anterior placement",
      "Single-corridor delivery",
      "Restores sagittal balance",
      "Large graft volume",
    ],
  },
  {
    slug: "valeo-ii-ll",
    name: "Valeo II LL",
    trademark: "™",
    category: "lumbar-fusion",
    segment: "lumbar",
    procedure: "fusion",
    approach: "LLIF Interbody",
    material: "Silicon Nitride",
    tagline: "Lateral lumbar interbody fusion",
    summary:
      "Valeo™ II LL is a Silicon Nitride lateral interbody offering broad endplate coverage and the bone-building advantages of Si3N4 through a lateral approach.",
    features: [
      "Wide lateral footprint",
      "Silicon Nitride surface chemistry",
      "Multiple lengths and lordosis",
      "Imaging-friendly fusion assessment",
    ],
  },
  {
    slug: "valeo-ii-al",
    name: "Valeo II AL",
    trademark: "™",
    category: "lumbar-fusion",
    segment: "lumbar",
    procedure: "fusion",
    approach: "ALIF Interbody",
    material: "Silicon Nitride",
    tagline: "Anterior lumbar interbody fusion",
    summary:
      "Valeo™ II AL is a Silicon Nitride anterior lumbar interbody designed for stable, osteogenic fusion with optional integrated fixation.",
    features: [
      "Silicon Nitride construction",
      "Optional integrated fixation",
      "Generous graft chamber",
      "Lordotic restoration options",
    ],
  },
  {
    slug: "valeo-ii-tl",
    name: "Valeo II TL",
    trademark: "™",
    category: "lumbar-fusion",
    segment: "lumbar",
    procedure: "fusion",
    approach: "TLIF Interbody",
    material: "Silicon Nitride",
    tagline: "Transforaminal lumbar interbody fusion",
    summary:
      "Valeo™ II TL brings Silicon Nitride to the transforaminal approach with a curved geometry for smooth insertion and broad endplate contact.",
    features: [
      "Curved transforaminal geometry",
      "Silicon Nitride osteogenic surface",
      "Radiographic markers",
      "Range of footprints and heights",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function productsByCategory(category: ProductCategory) {
  return products.filter((p) => p.category === category);
}

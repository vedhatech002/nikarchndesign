// src/data/sampleProjects.js
// Replace the image imports below with real asset paths for each project.
import dehradunHero from "../assets/dehradun/dehardun_project_hero.jpg";
import dehradun1 from "../assets/dehradun/deharadun_landScape.jpg";
import dehradun2 from "../assets/dehradun/dehradun_garden.jpg";
import dehradun3 from "../assets/dehradun/dehradun_bedroom.jpg";
import dehradun4 from "../assets/dehradun/dehradun_kitchen.jpg";

import kannurHero from "../assets/kannur/kannur_hero.jpg";
import kannur1 from "../assets/kannur/kannur_interior.jpg";
import kannur2 from "../assets/kannur/kannur_kitchen.jpg";
import kannur3 from "../assets/kannur/elavation.jpg";

import hospitalHero from "../assets/hospital/hospital_hero.jpg";
import hospital1 from "../assets/hospital/hospital1.jpg";
import hospital2 from "../assets/hospital/hospital2.jpg";
import hospital3 from "../assets/hospital/hospital3.jpg";
import hospital4 from "../assets/hospital/hospital4.jpg";
import hospital5 from "../assets/hospital/hospital5.jpg";
import hospital6 from "../assets/hospital/hospital6.jpg";

import landscapeHero from "../assets/landscape/landscape_hero.jpg";
import landscape1 from "../assets/landscape/terrace.jpg";
import landscape2 from "../assets/landscape/landscape_garden.jpg";
import landscape3 from "../assets/landscape/terrace2.jpg";

import livingHero from "../assets/Interiors/BAR 1.jpg";
import living1 from "../assets/Interiors/BAR 2.jpg";
import living2 from "../assets/Interiors/LIVING ROOM 2.png";
import living3 from "../assets/Interiors/LIVING ROOM 3.jpg";
import living4 from "../assets/Interiors/LIVING 1.jpg";

import kitchenHero from "../assets/Interiors/KITCHEN 1-1.jpg";
import kitchen1 from "../assets/Interiors/KITCHEN 1-2.jpg";
import kitchen2 from "../assets/Interiors/KITCHEN 2.jpg";
import kitchen3 from "../assets/Interiors/KITCHEN 3.jpg";

import bedroomHero from "../assets/Interiors/BEDROOM 1-1.jpg";
import bedroom1 from "../assets/Interiors/BEDROOM 1-2.jpg";
import bedroom2 from "../assets/Interiors/BEDROOM 2-1.jpg";
import bedroom3 from "../assets/Interiors/BEDROOM 2-2.jpg";

import vedaHero from "../assets/exhibition/RENDER 1.jpg";
import veda1 from "../assets/exhibition/RENDER 2.jpg";
import veda2 from "../assets/exhibition/RENDER 3.jpg";
import veda3 from "../assets/exhibition/RENDER 4.jpg";
import veda4 from "../assets/exhibition/RENDER 5.jpg";

const SAMPLE_PROJECTS = [
  {
    id: 101,
    title: "Dehradun Residence",
    type: "Residential",
    location: "Dehradun, Uttarakhand",
    siteArea: "450 sqm",
    builtUpArea: "395 sqm",
    areaSqft: "4200 sq ft",
    status: "On going",
    year: "2025",
    client: "Private",
    hero: dehradunHero,
    leadin:
      "A warm, intimate family home that embraces Dehradun’s pleasant climate through strong indoor–outdoor connections.",
    description:
      "Located in the picturesque city of Dehradun, this residence is conceived as a sanctuary for family life — balancing privacy with generous outdoor connections. The design prioritizes natural light and cross-ventilation while respecting Vastu principles.",
    detailParagraph:
      "The ground floor accommodates a double-height living area, formal drawing room, master suite, guest bedroom, and an open kitchen-dining zone that visually connects to the outdoors. The upper level houses a home office, gym, bar lounge, terrace, and an additional bedroom — creating a balanced blend of leisure, work, and repose.",
    moreDescription:
      "Landscape design is integral: a composed balance of hardscape and softscape forms the outdoor environment, with dense perimeter planting creating a green buffer that enhances privacy and a calm visual enclosure.",
    gallery: [dehradunHero, dehradun1, dehradun2, dehradun3, dehradun4],
    featureImg: dehradun1,
    featureImg2: dehradun2,
    tags: ["Vastu", "Private Residence", "Indoor–Outdoor"],
  },

  {
    id: 102,
    title: "Kannur House",
    type: "Residential",
    location: "Kannur, Kerala",
    siteArea: "330 sqm",
    builtUpArea: "195 sqm",
    areaSqft: "2000 sq ft",
    status: "On going",
    year: "2024",
    client: "Private",
    hero: kannurHero,
    leadin:
      "A 3-BHK duplex that blends minimal modern aesthetics with practical, Vastu-informed planning.",
    description:
      "The Kannur project is a 3BHK duplex planned around an open central zone that integrates living, dining and kitchen areas. The layout creates a flexible, well-lit central space aided by a double-height living room with tall windows.",
    detailParagraph:
      "The ground floor includes a master suite with walk-in closet, guest bedroom and an open central area. The first floor provides a private drawing room, second master bedroom, terraces and utility spaces. The façade uses textured stone with horizontal and vertical grooves and a sloping roof for rainwater drainage.",
    moreDescription:
      "Extensive glazing and careful orientation balance direct and indirect sunlight throughout the day, creating bright, comfortable interiors while maintaining privacy where needed. Use of local materials and restrained detailing emphasizes craft and durability.",
    gallery: [kannurHero, kannur3, kannur1, kannur2],
    featureImg: kannur1,
    featureImg2: kannur2,
    tags: ["Vastu", "Duplex", "Minimal Facade"],
  },

  {
    id: 103,
    title: "Maheshwari Hospital",
    type: "Healthcare",
    location: "Bisauli, UP",
    siteArea: "30,000 sq ft",
    builtUpArea: "30,000 sq ft",
    areaSqft: "30,000 sq ft",
    status: "Under Construction",
    year: "2025",
    client: "Maheshwari Hospital",
    hero: hospitalHero,
    leadin:
      "Expansion and modernization of an existing hospital campus to enhance capacity, clinical services and long-term sustainability.",
    description:
      "Maheshwari Hospital’s Phase 2 expands an existing 20,000 sq ft facility to introduce specialized medical facilities and increase bed capacity. The scheme is planned across four floors (including a basement) to improve patient flow and clinical adjacency.",
    detailParagraph:
      "The ground floor focuses on high-volume outpatient (OPD) operations and emergency services. The first and second floors accommodate IPD wards, private rooms, NICUs, operating theatres and pediatric care. Planning follows Vastu principles to support patient wellbeing and staff efficiency.",
    moreDescription:
      "Sustainability features include passive cooling strategies, rainwater harvesting pits, Sewage Treatment Plant (STP) for reuse, and rooftop/open-area solar installations. The campus is designed for operational efficiency and fire-safety compliance.",
    gallery: [
      hospitalHero,
      hospital1,
      hospital2,
      hospital3,
      hospital4,
      hospital5,
      hospital6,
    ],
    featureImg: hospital3,
    featureImg2: hospital4,
    tags: ["Hospital", "Sustainability", "Healthcare Masterplan"],
  },

  {
    id: 104,
    title: "Public / Private Garden",
    type: "Landscape",
    location: "Unknown (Client provided imagery only)",
    siteArea: "—",
    builtUpArea: "—",
    status: "Design",
    year: "2025",
    client: "Client (imagery-only)",
    hero: landscapeHero,
    leadin:
      "Conceptual landscape composition focused on calm public/private outdoor spaces.",
    description:
      "A small landscape package intended to complement multiple project types — courtyard, entry garden or public pocket park. The brief promotes native planting, water-sensitive design and a balanced hardscape-softscape composition.",
    detailParagraph:
      "This entry is a placeholder for a landscape design package; client provided image(s) only. Use this slot to attach the final planting plan, sections, or 3D imagery as they become available.",
    moreDescription:
      "Design intent: create a layered planting strategy with seating nodes, shaded walkways, and low-maintenance material choices that integrate with building edges and patios.",
    gallery: [landscapeHero, landscape1, landscape2, landscape3],
    featureImg: landscape1,
    featureImg2: landscape2,
    tags: ["Landscape", "Planting", "Public Space"],
  },
  {
    id: 201,
    title: "Modern Living Room Design",
    type: "Interior",
    location: "Noida, Uttar Pradesh",
    siteArea: "120 sqm",
    builtUpArea: "105 sqm",
    areaSqft: "1130 sq ft",
    status: "Completed",
    year: "2024",
    client: "Private Client",
    hero: livingHero,
    leadin:
      "A warm and welcoming living area crafted with rich textures, earthy tones, and refined lighting for a cozy modern ambiance.",
    description:
      "The living space was designed as a contemporary retreat balancing comfort and elegance. Subtle contrasts in materials, warm accent lighting, and clean-lined furniture define a serene and balanced environment.",
    detailParagraph:
      "A layered lighting concept combines ambient, task, and accent sources to highlight textures and enhance spatial depth. Natural materials like wood veneer and stone cladding add warmth, while plush fabrics bring tactile softness.",
    moreDescription:
      "Designed for both everyday comfort and intimate gatherings, this living space embraces timeless design sensibilities — calm, elegant, and effortlessly functional.",
    gallery: [livingHero, living1, living2, living3, living4],
    featureImg: living1,
    featureImg2: living2,
    tags: ["Living Room", "Warm Palette", "Modern Comfort"],
  },
  {
    id: 203,
    title: "Luxury Bedroom Suite",
    type: "Interior",
    location: "Bangalore, Karnataka",
    siteArea: "150 sqm",
    builtUpArea: "130 sqm",
    areaSqft: "1400 sq ft",
    status: "Completed",
    year: "2025",
    client: "Private Client",
    hero: bedroomHero,
    leadin:
      "An elegant master suite defined by muted tones, plush finishes, and a soothing palette for complete relaxation.",
    description:
      "This bedroom suite integrates comfort and sophistication. A soft material palette, hidden lighting, and clean geometry create a sense of calm luxury.",
    detailParagraph:
      "The centerpiece bed is framed by textured wall panels and subtle metallic trims. Wooden flooring complements the neutral tones, while soft drapes filter daylight for a serene mood.",
    moreDescription:
      "Functionality meets aesthetic refinement — concealed storage, acoustic finishes, and bespoke furniture enhance the usability and mood of the space.",
    gallery: [bedroomHero, bedroom1, bedroom2, bedroom3],
    featureImg: bedroom1,
    featureImg2: bedroom2,
    tags: ["Bedroom", "Luxury Interiors", "Warm Minimalism"],
  },

  {
    id: 202,
    title: " Kitchen Space",
    type: "Interior",
    location: "Gurgaon, Haryana",
    siteArea: "80 sqm",
    builtUpArea: "70 sqm",
    areaSqft: "750 sq ft",
    status: "Completed",
    year: "2024",
    client: "Private Residence",
    hero: kitchenHero,
    leadin:
      "A sleek modular kitchen designed to integrate functionality and form with minimalist precision and soft natural tones.",
    description:
      "The kitchen combines refined finishes, seamless storage, and efficient ergonomics to create an elegant yet highly functional cooking environment.",
    detailParagraph:
      "The layout features an island counter that doubles as a breakfast space. Integrated appliances, quartz counters, and ambient cove lighting emphasize sleekness and practicality.",
    moreDescription:
      "A neutral color palette of beige, white, and walnut finishes creates visual continuity. Every cabinet and drawer is customized for clutter-free operation and durability.",
    gallery: [kitchenHero, kitchen1, kitchen2, kitchen3],
    featureImg: kitchen1,
    featureImg2: kitchen2,
    tags: ["Kitchen", "Minimal Design", "Modular Space"],
  },
  {
    id: 205,
    title: "VEDA DEFENCE SYSTEM",
    type: "Exhibition Design",
    location: "New Delhi, India",
    siteArea: "250 sqm",
    builtUpArea: "220 sqm",
    areaSqft: "2360 sq ft",
    status: "Completed",
    year: "2025",
    client: "VEDA Defence Systems Pvt. Ltd.",
    hero: vedaHero,
    leadin:
      "A bold and immersive exhibition booth design for a defence technology brand — blending precision, identity, and storytelling.",
    description:
      "The VEDA Defence System exhibition booth was conceived as a dynamic spatial experience that visually reflects technological strength and innovation. The design language draws from angular geometries and layered light.",
    detailParagraph:
      "The pavilion uses a modular structure to accommodate displays, demo zones, and client meeting areas. Integrated LED lighting outlines the form, reinforcing the brand's futuristic tone.",
    moreDescription:
      "Strategic lighting, dark matte surfaces, and highlighted product zones establish a balance between sophistication and bold identity. The spatial organization ensures seamless visitor flow while showcasing key technologies effectively.",
    gallery: [vedaHero, veda1, veda2, veda3, veda4],
    featureImg: veda2,
    featureImg2: veda3,
    tags: ["Exhibition", "Brand Experience", "Defense Design"],
  },
];

export default SAMPLE_PROJECTS;

import { Home, Building2, Truck, Package, ArrowUpDown, MapPin } from "lucide-react";
import serviceResidential from "@/assets/service-residential.jpg";
import serviceOffice from "@/assets/service-office.jpg";
import serviceTransport from "@/assets/service-transport.jpg";
import householdingone from "@/assets/householding/hosehold-shifting-packers-and-movers-service-man.jpg";
import householdingtwo from "@/assets/householding/household-goods-packing-moving-service.jpg";
import householdingthree from "@/assets/householding/young-adult-moving-into-new-home.jpg";
import householdingfour from "@/assets/householding/home-relocation-packers-movers-service.jpg";
import householdingfive from "@/assets/householding/household-goods-packing-moving-service-family.jpg";

import officeshiftingone from "@/assets/officeshiftingandrelocation/Office-Packers-Movers-one.jpg";
import officeshiftingtwo from "@/assets/officeshiftingandrelocation/office-relocation-packers-and-movers-two.jpg";
import officeshiftingthree from "@/assets/officeshiftingandrelocation/office-shifting-packers-and-movers-three.png";
import officeshiftingfour from "@/assets/officeshiftingandrelocation/office-relocation-packers-and-movers-four.jpg";
import officeshiftingfive from "@/assets/officeshiftingandrelocation/office-shifting-packers-and-movers-five.jpg";


import vehicletransportone from "@/assets/vehicletransport/vehicle-transport-packers-and-movers-one.jpg";
import vehicletransporttwo from "@/assets/vehicletransport/vehicle-transport-packers-and-movers-two.jpg";
import vehicletransportthree from "@/assets/vehicletransport/vehicle-transport-packers-and-movers-three.jpeg";
import vehicletransportfour from "@/assets/vehicletransport/vehicle-transport-packers-and-movers-four.jpg";
import vehicletransportfive from "@/assets/vehicletransport/vehicle-transport-packers-and-movers-five.jpg";


import packingunpackingone from "@/assets/packingandunpacking/unpacking-packers-and-movers-one.webp";
import packingunpackingtwo from "@/assets/packingandunpacking/packing-packers-and-movers-two.avif";
import packingunpackingthree from "@/assets/packingandunpacking/packing-packers-and-movers-three.jpg";
import packingunpackingfour from "@/assets/packingandunpacking/unpacking-packers-and-movers-four.jpg";
import packingunpackingfive from "@/assets/packingandunpacking/packing-packers-and-movers-five.jpg";


import loadingunloadingone from "@/assets/loadingandunloading/loading-and-unloading-packers-and-movers-one.jpeg";
import loadingunloadingtwo from "@/assets/loadingandunloading/loading-and-unloading-packers-and-movers-two.jpg";
import loadingunloadingthree from "@/assets/loadingandunloading/loading-and-unloading-packers-and-movers-three.jpg";
import loadingunloadingfour from "@/assets/loadingandunloading/loading-and-unloading-packers-and-movers-four.webp";
import loadingunloadingfive from "@/assets/loadingandunloading/loading-and-unloading-packers-and-movers-five.jpg";


import localshiftingone from "@/assets/localshifting/local-shifting-packers-and-movers-one.webp";
import localshiftingtwo from "@/assets/localshifting/local-shifting-packers-and-movers-two.jpg";
import localshiftingthree from "@/assets/localshifting/local-shifting-packers-and-movers-three.jpg";
import localshiftingfour from "@/assets/localshifting/local-shifting-packers-and-movers-four.jpg";
import localshiftingfive from "@/assets/localshifting/local-shifting-packers-and-movers-five.jpg";



export interface ServiceData {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  icon: typeof Home;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  includes: string[];
  features: { title: string; description: string }[];
}

export const allServices: ServiceData[] = [
  {
    id: 1,
    slug: "household-shifting",
    title: "Household Shifting",
    shortTitle: "Household",
    icon: Home,
    description: "Complete household packing and moving with utmost care.",
    longDescription:
      "We provide end to end household shifting services across Guntur and Andhra Pradesh. Our trained team carefully packs every item from delicate glassware to heavy furniture using premium materials. We ensure safe loading, GPS tracked transport, and careful unloading at your new home.",
    image: householdingfive,
    images: [householdingtwo, householdingthree, householdingfour, householdingone, householdingfive],
    includes: [
      "Packing furniture & appliances",
      "Kitchen items & crockery",
      "Electronics & TV packing",
      "Loading & unloading",
      "Safe transportation",
      "Rearranging",
    ],
    features: [
      { title: "Door-to-Door Service", description: "Complete shifting from your old home to the new one without hassle." },
      { title: "Premium Packing", description: "Bubble wrap, corrugated sheets, and sturdy cartons for maximum safety." },
      { title: "Trained Staff", description: "Experienced workers who handle your belongings with care." },
      { title: "Insurance Coverage", description: "Transit insurance available for valuable items." },
    ],
  },
  {
    id: 2,
    slug: "office-relocation",
    title: "Office Relocation",
    shortTitle: "Office",
    icon: Building2,
    description: "Seamless office shifting with minimal downtime.",
    longDescription:
      "Relocating your office? We handle everything from IT equipment and server rooms to furniture and important documents. Our team works on weekends and off hours to ensure zero disruption to your business operations.",
    image: officeshiftingfive,
    images: [officeshiftingone, officeshiftingtwo, officeshiftingthree, officeshiftingfour, officeshiftingfive],
    includes: [
      "Office furniture disassembly & packing",
      "Computer & server relocation",
      "File and document safety",
      "Workstation setup at new location",
      "Quick shifting to avoid downtime",
    ],
    features: [
      { title: "Weekend Shifting", description: "We work on weekends so your business doesn't stop." },
      { title: "IT Equipment Care", description: "Special handling for computers, servers, and networking gear." },
      { title: "Document Security", description: "Sealed packing for confidential files and records." },
      { title: "Layout Planning", description: "Help setting up furniture at the new office." },
    ],
  },
  {
    id: 3,
    slug: "vehicle-transportation",
    title: "Vehicle Transportation",
    shortTitle: "Vehicle",
    icon: Truck,
    description: "Safe car and bike transport to any city in India.",
    longDescription:
      "We transport your car, bike, or any vehicle safely using enclosed carriers and open trailers. Every vehicle is secured with wheel locks and soft straps. GPS tracking lets you monitor your vehicle throughout the journey.",
    image: vehicletransportfive,
    images: [vehicletransportone, vehicletransporttwo, vehicletransportthree, vehicletransportfour, vehicletransportfive],
    includes: [
      "Car transportation",
      "Bike transportation",
      "Secure vehicle carriers",
      "Door-to-door delivery",
      "GPS tracking",
    ],
    features: [
      { title: "Enclosed Carriers", description: "Protection from weather and road debris during transport." },
      { title: "GPS Tracking", description: "Real-time location updates for your vehicle." },
      { title: "Insurance", description: "Full transit insurance for your peace of mind." },
      { title: "Pan-India Network", description: "We deliver vehicles to any city across India." },
    ],
  },
  {
    id: 4,
    slug: "packing",
    title: "Packing",
    shortTitle: "Packing",
    icon: Package,
    description: "Professional packing to protect items during transport.",
    longDescription:
      "Our expert packing team uses industry grade materials bubble wrap, thermocol, corrugated sheets, wooden crates, and heavy duty cartons to ensure every item is protected. We also offer complete unpacking and arrangement at your destination.",
    image: packingunpackingfive,
    images: [packingunpackingone, packingunpackingtwo, packingunpackingthree, packingunpackingfour, packingunpackingfive],
    includes: [
      "Bubble wrap packing",
      "Carton box packing",
      "Fragile item protection",
      "Wooden crating for valuables",
      "packing at destination",
    ],
    features: [
      { title: "Quality Materials", description: "We use the best packing materials available in the market." },
      { title: "Fragile Care", description: "Special multi layer packing for glass, ceramics, and electronics." },
      { title: "Labeling System", description: "Every box is labeled for easy identification and unpacking." },
      { title: "Eco-Friendly Options", description: "Recyclable and reusable packing materials available." },
    ],
  },
  {
    id: 5,
    slug: "loading-unloading",
    title: "Loading & Unloading",
    shortTitle: "Loading",
    icon: ArrowUpDown,
    description: "Safe lifting and handling of heavy items.",
    longDescription:
      "Our skilled labor team specializes in safe loading and unloading of heavy furniture, appliances, and industrial equipment. We use trolleys, ramps, and lifting equipment to prevent damage and ensure worker safety.",
    image: loadingunloadingfive,
    images: [loadingunloadingone, loadingunloadingtwo, loadingunloadingthree, loadingunloadingfour, loadingunloadingfive],
    includes: [
      "Heavy furniture handling",
      "Appliance loading",
      "Safety equipment",
      "Skilled & trained labor",
      "Floor protection",
    ],
    features: [
      { title: "Professional Equipment", description: "Trolleys, ramps, and straps for safe handling." },
      { title: "Trained Workers", description: "Our team is trained in proper lifting techniques." },
      { title: "Damage Prevention", description: "Floor and wall protection during the moving process." },
      { title: "Timely Execution", description: "Efficient loading to save your time." },
    ],
  },
  {
    id: 6,
    slug: "local-shifting",
    title: "Local Shifting",
    shortTitle: "Local",
    icon: MapPin,
    description: "Quick and affordable moves within your city.",
    longDescription:
      "Need to move within Guntur, Vijayawada, or nearby cities? Our local shifting service is fast, affordable, and reliable. We offer same day delivery with mini trucks and tempos for small to medium moves.",
    image: localshiftingfive,
    images: [localshiftingone, localshiftingtwo, localshiftingthree, localshiftingfour, localshiftingfive],
    includes: [
      "Same-day delivery",
      "Mini truck & tempo available",
      "Affordable local rates",
      "Within Guntur & Vijayawada",
      "Small & medium moves",
    ],
    features: [
      { title: "Same-Day Service", description: "Book in the morning, move by evening." },
      { title: "Affordable Rates", description: "Budget friendly pricing for local moves." },
      { title: "Flexible Vehicles", description: "Choose from mini trucks, tempos, or full trucks." },
      { title: "No Hidden Charges", description: "Transparent pricing with no surprises." },
    ],
  },
];
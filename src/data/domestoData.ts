import type { ServiceItem, PricingCard, TeamMember, Testimonial, ProjectItem, StatItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Domesto Home Services',
  tagline: 'Professional Home & Property Services in Melbourne',
  shortDesc: 'Trusted Melbourne based provider of comprehensive home service solutions including cleaning, gardening, lawn maintenance, handyman assistance, carpet care, and caretaker support.',
  phone: '03 8824 0742',
  phoneClean: '0388240742',
  mobile: '0411 557 598',
  mobileClean: '0411557598',
  email: 'info@domesto.com.au',
  address: 'Level 23, 727 Collins St, Docklands VIC 3008',
  location: 'Melbourne, Victoria, Australia',
  ndisRegistered: true,
  ndisProviderNumber: 'NDIS Registered Supplier',
  operatingHours: 'Mon - Sat: 7:00 AM - 7:00 PM | Sun: By Appointment',
  googleMapsUrl: 'https://maps.google.com/?q=727+Collins+St,+Docklands+VIC+3008',
  pricingDisclaimer: 'Prices may vary depending on property size, service requirements, location and scope of work. Contact Domesto for an accurate quote.',
};

export const STATISTICS: StatItem[] = [
  {
    value: 500,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Successful residential & commercial jobs delivered'
  },
  {
    value: 1000,
    suffix: '+',
    label: 'Satisfied Customers',
    description: 'Happy home & property owners across Melbourne'
  },
  {
    value: 50,
    suffix: '+',
    label: 'Dedicated Professionals',
    description: 'Vetted, trained, and insured service specialists'
  },
  {
    value: 10,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Delivering excellence and quality property care'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'domestic-cleaning',
    name: 'Domestic Cleaning',
    category: 'Cleaning Services',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Comprehensive home cleaning services tailored to the specific needs of every household.',
    fullDesc: 'Our regular and deep domestic cleaning services keep your house immaculate, fresh, and healthy. We use eco-friendly products and structured checklists for kitchen, bathroom, living area, and bedroom hygiene.',
    popular: true,
    startingPrice: 'From $38/hr',
    includes: [
      'Kitchen cleaning & cooktop degreasing',
      'Bathroom & toilet sanitisation',
      'Bedroom cleaning & linen change',
      'General house dusting & cobweb removal',
      'Interior window & glass wiping',
      'Carpet vacuuming & floor mopping',
      'Regular weekly or fortnightly cleaning',
      'Detailed deep cleaning options'
    ]
  },
  {
    id: 'commercial-cleaning',
    name: 'Commercial Cleaning',
    category: 'Commercial Care',
    iconName: 'Building2',
    image: 'https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Professional cleaning solutions for offices, workplaces, and commercial environments.',
    fullDesc: 'Maintain a pristine, hygienic, and welcoming environment for your employees and clients. Tailored schedules outside business hours available across Melbourne corporate hubs.',
    popular: true,
    startingPrice: 'Custom Quote',
    includes: [
      'Office desk & workstation sanitisation',
      'Workspace & meeting room upkeep',
      'Common area & reception cleaning',
      'Commercial bathroom sanitisation',
      'Kitchen & break room hygiene',
      'Regular commercial maintenance plans'
    ]
  },
  {
    id: 'carpet-cleaning',
    name: 'Carpet Cleaning',
    category: 'Floor Care',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Professional carpet cleaning designed to eliminate dirt, stains, and embedded contaminants.',
    fullDesc: 'Utilising industrial-grade steam extraction equipment and non-toxic stain removers, we restore carpets to soft, vibrant, and allergy-free perfection.',
    popular: true,
    startingPrice: 'From $99',
    includes: [
      'Carpet hot water steam extraction',
      'Dry carpet cleaning techniques',
      'Stubborn stain & spot treatment',
      'Pet odor & allergen neutralisation',
      'Deep fiber sanitisation'
    ]
  },
  {
    id: 'hard-floor-cleaning',
    name: 'Hard Floor Cleaning',
    category: 'Floor Care',
    iconName: 'Grid',
    image: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Specialised cleaning, scrubbing, and polishing for all hard flooring surfaces.',
    fullDesc: 'From high-traffic tile grout to delicate timber and vinyl floors, our machine scrubbing and surface treatment restores high gloss and durability.',
    popular: false,
    startingPrice: 'From $120',
    includes: [
      'Tile & grout deep cleaning',
      'Hard floor rotary scrubbing',
      'Surface polishing & sealing',
      'Vinyl & hardwood floor care',
      'Stain removal & protective coating'
    ]
  },
  {
    id: 'ground-maintenance',
    name: 'Ground Maintenance & Lawn Mowing',
    category: 'Gardening & Outdoor',
    iconName: 'Trees',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb1b7a5?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Professional lawn mowing, hedge trimming, and outdoor garden maintenance.',
    fullDesc: 'Keep your garden neat, healthy, and stunning all year round. We provide regular mowing, edging, weeding, green waste removal, and full seasonal landscaping touch-ups.',
    popular: true,
    startingPrice: 'From $49/hr',
    includes: [
      'Lawn mowing & precise edging',
      'Hedge pruning & bush shaping',
      'Weeding & flowerbed maintenance',
      'Garden cleanup & leaf blowing',
      'Mulching & soil nourishment',
      'Outdoor green waste disposal'
    ]
  },
  {
    id: 'high-pressure-cleaning',
    name: 'High Pressure Cleaning',
    category: 'Exterior Care',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Powerful exterior pressure cleaning for residential driveways, paths, and walls.',
    fullDesc: 'Remove years of built-up grime, moss, oil stains, and dirt from your exterior hard surfaces using commercial high-pressure jet washers.',
    popular: true,
    startingPrice: 'From $150',
    includes: [
      'Driveway & concrete cleaning',
      'Pathway & paved patio washing',
      'Outdoor entertaining area refresh',
      'Building exterior & brick wash',
      'Oil stain & algae removal'
    ]
  },
  {
    id: 'gutter-cleaning',
    name: 'Gutter Cleaning',
    category: 'Roof & Exterior',
    iconName: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Safe gutter cleaning to prevent blockages, overflows, and water damage.',
    fullDesc: 'Thorough roof gutter and downpipe clearing to protect your foundations, prevent water intrusion, and maintain roof drainage integrity.',
    popular: true,
    startingPrice: 'From $130',
    includes: [
      'Debris & leaf sludge removal',
      'Downpipe flow checks & flushing',
      'Roofline inspection',
      'Gutter guard cleaning',
      'Waste disposal included'
    ]
  },
  {
    id: 'home-maintenance',
    name: 'Home Maintenance & Handyman',
    category: 'Property Repair',
    iconName: 'Wrench',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Reliable repair, installation, and handyman support for homes and properties.',
    fullDesc: 'From minor fixture replacements to door adjustments, patch painting, and general repairs, our skilled handymen keep your property functional and safe.',
    popular: true,
    startingPrice: 'From $65/hr',
    includes: [
      'General home repairs & fixings',
      'Minor plaster patching & touch-ups',
      'Door, lock & handle adjustments',
      'Furniture assembly & mounting',
      'Fence & gate repairs',
      'General property upkeep'
    ]
  },
  {
    id: 'furniture-cleaning',
    name: 'Furniture & Upholstery Cleaning',
    category: 'Interior Care',
    iconName: 'Armchair',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Deep fabric and leather furniture cleaning to refresh couches and chairs.',
    fullDesc: 'Eliminate spills, odors, dust mites, and stains from your favourite sofas, dining chairs, and upholstered furniture pieces.',
    popular: false,
    startingPrice: 'From $85',
    includes: [
      'Sofa & lounge steam cleaning',
      'Fabric upholstery stain removal',
      'Dining chair deep cleaning',
      'Leather conditioning & care',
      'Deodorising & fabric protection'
    ]
  },
  {
    id: 'caretaker-services',
    name: 'Caretaker & NDIS Support Services',
    category: 'Property & Support Care',
    iconName: 'HeartHandshake',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1000&q=80',
    shortDesc: 'Dedicated property support and NDIS registered care for everyday living.',
    fullDesc: 'Tailored property assistance, household management, and personal support for self-managed, plan-managed, and agency NDIS participants across Melbourne.',
    popular: true,
    startingPrice: 'From $42/hr',
    includes: [
      'Property monitoring & safety checks',
      'Household management assistance',
      'Meal preparation support',
      'Mobility & daily living assistance',
      'Medication reminders & routine care',
      'Personalised care coordination'
    ]
  }
];

export const PRICING_CARDS: PricingCard[] = [
  {
    id: 'house-cleaning',
    title: 'House Cleaning',
    price: '$38',
    unit: 'per hour',
    icon: 'Sparkles',
    popular: true,
    serviceCategory: 'domestic-cleaning',
    buttonText: 'Book House Cleaning',
    features: [
      'Kitchen deep cleaning & stovetops',
      'Bathroom & toilet sanitisation',
      'Carpet vacuuming & hard floor mopping',
      'Bedroom dusting & bed making',
      'Window & glass streak-free wiping',
      'Eco-friendly cleaning supplies included'
    ]
  },
  {
    id: 'ground-maintenance',
    title: 'Ground Maintenance & Mowing',
    price: '$49',
    unit: 'per hour',
    icon: 'Trees',
    popular: false,
    serviceCategory: 'ground-maintenance',
    buttonText: 'Book Ground Maintenance',
    features: [
      'Precision lawn mowing & edge trimming',
      'Hedge pruning & shrub shaping',
      'Garden bed weeding & cleanup',
      'Path leaf blowing & debris disposal',
      'Landscaping maintenance',
      'All commercial machinery supplied'
    ]
  },
  {
    id: 'caretaker-services',
    title: 'Caretaker & NDIS Support',
    price: '$42',
    unit: 'per hour',
    icon: 'HeartHandshake',
    popular: false,
    serviceCategory: 'caretaker-services',
    buttonText: 'Enquire Now',
    features: [
      'Personal care & living assistance',
      'Mobility & safety support',
      'Household chores & management',
      'Meal prep & kitchen support',
      'Medication reminders & routine check-ins',
      'Tailored to individual NDIS plans'
    ]
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Marcus Vance',
    role: 'Operations & Quality Lead',
    experience: '8+ Years Exp.',
    bio: 'Oversees daily field operations across Melbourne, ensuring all cleaning and property care tasks strictly meet Domesto quality benchmarks.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80',
    skills: ['Operations', 'Quality Assurance', 'Team Training']
  },
  {
    id: 'team-2',
    name: 'Elena Rostova',
    role: 'Senior Domestic & Hygiene Specialist',
    experience: '6+ Years Exp.',
    bio: 'Specialises in deep domestic sanitisation, eco-friendly product applications, and high-detail residential hygiene routines.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    skills: ['Residential Hygiene', 'Deep Cleaning', 'Eco Products']
  },
  {
    id: 'team-3',
    name: 'Julian Thorne',
    role: 'Head Grounds & Property Technician',
    experience: '10+ Years Exp.',
    bio: 'Passionate horticulturalist and exterior maintenance expert managing commercial pressure washing, gutter clearing, and lawn care.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80',
    skills: ['Lawn Care', 'Pressure Washing', 'Gutter Safety']
  },
  {
    id: 'team-4',
    name: 'Priya Sharma',
    role: 'NDIS & Support Coordinator',
    experience: '7+ Years Exp.',
    bio: 'Dedicated to tailoring caretaker and domestic support plans for NDIS participants, ensuring comfort, respect, and seamless care.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80',
    skills: ['NDIS Care', 'Client Welfare', 'Personal Support']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    suburb: 'Brighton, VIC',
    role: 'Homeowner',
    rating: 5,
    comment: 'Domesto Home Services has completely transformed my living space! The cleaning team is exceptionally polite, punctual, and pays attention to every single detail. Highly recommended for busy Melbourne families.',
    serviceUsed: 'Domestic Cleaning',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    date: 'August 2026'
  },
  {
    id: 'test-2',
    name: 'David O\'Connor',
    suburb: 'Docklands, VIC',
    role: 'Commercial Facility Manager',
    rating: 5,
    comment: 'We hired Domesto for our office complex cleaning and high pressure exterior maintenance. Outstanding reliability, clear communication, and impeccable results every single week.',
    serviceUsed: 'Commercial & Pressure Cleaning',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    date: 'July 2026'
  },
  {
    id: 'test-3',
    name: 'Margaret & Arthur Williams',
    suburb: 'Toorak, VIC',
    role: 'NDIS Plan Participants',
    rating: 5,
    comment: 'The caretaker services provided by Domesto have made staying in our family home so comfortable and easy. The team is friendly, respectful, and genuinely cares about our well-being.',
    serviceUsed: 'Caretaker & Lawn Maintenance',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    date: 'August 2026'
  },
  {
    id: 'test-4',
    name: 'Liam Chen',
    suburb: 'Richmond, VIC',
    role: 'Property Investor',
    rating: 5,
    comment: 'Booked end-of-lease carpet steam cleaning and gutter clearing with Domesto. Super fast response, transparent pricing, and the carpets look brand new!',
    serviceUsed: 'Carpet & Gutter Cleaning',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    date: 'June 2026'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Lawn & Garden Transformation',
    category: 'Garden Maintenance',
    description: 'Overgrown Melbourne backyard revitalised with precision lawn mowing, edging, weed removal, and hedge pruning.',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6eb1b7a5?auto=format&fit=crop&w=1000&q=80',
    suburb: 'Camberwell, VIC',
    highlights: ['Lawn Mowing', 'Weed Removal', 'Debris Cleanup']
  },
  {
    id: 'proj-2',
    title: 'Deep Kitchen & Tile Restoration',
    category: 'Home Cleaning',
    description: 'Comprehensive deep cleaning of a high-use domestic kitchen, gas cooktop degreasing, and floor tile grout restoration.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    suburb: 'Southbank, VIC',
    highlights: ['Stovetop Degreasing', 'Tile Grout Scrubbing', 'Sanitisation']
  },
  {
    id: 'proj-3',
    title: 'Commercial Office Floor Care',
    category: 'Commercial Cleaning',
    description: 'Rotary scrubbing and deep vacuuming for a 3-level corporate office space in Docklands.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    suburb: 'Docklands, VIC',
    highlights: ['Rotary Scrubbing', 'Carpet Extraction', 'Sanitisation']
  },
  {
    id: 'proj-4',
    title: 'Residential Carpet Steam Extraction',
    category: 'Carpet Cleaning',
    description: 'Industrial steam cleaning removing deep embedded pet stains and allergens from a 4-bedroom house carpet.',
    image: 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1000&q=80',
    suburb: 'Hawthorn, VIC',
    highlights: ['Steam Extraction', 'Stain Treatment', 'Deodorising']
  },
  {
    id: 'proj-5',
    title: 'High Pressure Driveway Wash',
    category: 'Pressure Cleaning',
    description: 'Heavy duty pressure cleaning removing oil stains, algae, and years of grime from a concrete driveway.',
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1000&q=80',
    suburb: 'St Kilda, VIC',
    highlights: ['Oil Stain Removal', 'Pressure Washing', 'Concrete Refresh']
  },
  {
    id: 'proj-6',
    title: 'Roof Gutter Debris Clearing',
    category: 'Property Maintenance',
    description: 'Full roofline gutter clearing and downpipe flushing for a two-storey residential home ahead of winter rains.',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1000&q=80',
    suburb: 'Malvern, VIC',
    highlights: ['Sludge Removal', 'Downpipe Flushing', 'Safety Inspection']
  }
];

export const QUALITY_METRICS = [
  { label: 'Cleaning Quality', percentage: 99, color: 'bg-blue-600' },
  { label: 'Customer Satisfaction', percentage: 98, color: 'bg-emerald-500' },
  { label: 'Service Reliability', percentage: 100, color: 'bg-indigo-600' },
  { label: 'Customer Support', percentage: 99, color: 'bg-amber-500' },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Personalised Service',
    description: 'Every customer has unique requirements. Our services are customized to your home layout, preferences, and schedule.',
    icon: 'Sliders'
  },
  {
    title: 'Professional Team',
    description: 'All Domesto technicians are background-checked, fully insured, rigorously trained, and wear official branded uniforms.',
    icon: 'UserCheck'
  },
  {
    title: 'Easy Online Booking',
    description: 'Book your preferred domestic service in under 60 seconds with transparent pricing and flexible scheduling options.',
    icon: 'CalendarCheck'
  },
  {
    title: 'Customer Focused Support',
    description: 'We prioritize prompt communication, 100% satisfaction guarantees, and dedicated account care on every visit.',
    icon: 'Headphones'
  }
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Tell Us What You Need',
    description: 'Choose your desired service, property type, and specify any custom requests using our easy online system.'
  },
  {
    number: '02',
    title: 'Choose a Convenient Time',
    description: 'Select your preferred date and time slot that fits seamlessly around your work or family routine.'
  },
  {
    number: '03',
    title: 'Our Team Gets to Work',
    description: 'A friendly, uniformed Domesto professional arrives fully equipped to complete the service to perfection.'
  },
  {
    number: '04',
    title: 'Enjoy a Cleaner, Better Home',
    description: 'Step into a spotless, beautifully maintained property and enjoy complete peace of mind.'
  }
];

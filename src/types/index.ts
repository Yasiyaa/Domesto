export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  iconName: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  popular?: boolean;
  startingPrice?: string;
  includes: string[];
}

export interface PricingCard {
  id: string;
  title: string;
  price: string;
  unit: string;
  icon: string;
  popular?: boolean;
  features: string[];
  buttonText: string;
  serviceCategory: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string;
  skills: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  suburb: string;
  role: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  image: string;
  date: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Home Cleaning' | 'Carpet Cleaning' | 'Garden Maintenance' | 'Commercial Cleaning' | 'Property Maintenance' | 'Pressure Cleaning';
  description: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  suburb: string;
  highlights: string[];
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  propertyType: string;
  propertySize?: string;
  bedrooms?: string;
  message: string;
}

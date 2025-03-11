export interface Media {
  type: "image" | "video"
  url: string
  alt?: string
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  yearBuilt: number;
  propertyType: string;
  availableFrom: string;
  isPremium: boolean;
  features: string[];
  media: Media[]; // Assuming Media is another defined type
  image?: string; // Make image optional
}

export interface User {
  id: string
  name: string
  email: string
  role: "renter" | "owner" | "admin"
  image?: string
}


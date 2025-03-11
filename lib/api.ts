import type { Property } from "@/types"



const mockProperties: Property[] = [
  {
    id: "prop-1",
    title: "Modern Luxury Villa",
    description:
      "This stunning modern villa offers panoramic views and luxury finishes throughout. Featuring an open floor plan, gourmet kitchen, and resort-style pool.",
    price: 1250000,
    location: "Beverly Hills, CA",
    bedrooms: 5,
    bathrooms: 4.5,
    squareFeet: 4200,
    yearBuilt: 2020,
    propertyType: "Villa",
    availableFrom: "Immediate",
    isPremium: true,
    features: ["Private pool", "Home theater", "Smart home system", "Wine cellar", "3-car garage"],
    media: [
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/15556048/15556048-uhd_2560_1440_24fps.mp4",
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/28356608/pexels-photo-28356608/free-photo-of-a-pool-with-lounge-chairs-and-umbrellas-on-the-side.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Modern villa exterior",
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/29702273/pexels-photo-29702273/free-photo-of-aerial-view-of-coastal-villas-with-pools.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Luxury kitchen",
      },
    ],
  },
  {
    id: "prop-2",
    title: "Downtown Penthouse",
    description:
      "Exclusive penthouse in the heart of downtown with floor-to-ceiling windows offering spectacular city views. Features include custom finishes and private elevator access.",
    price: 3200000,
    location: "Manhattan, NY",
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2800,
    yearBuilt: 2018,
    propertyType: "Penthouse",
    availableFrom: "30 days",
    isPremium: true,
    features: ["Private terrace", "24/7 concierge", "Fitness center", "Wine storage", "Pet spa"],
    media: [
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/13761467/13761467-uhd_2560_1440_30fps.mp4",
      },
      {
        type: "image",
        url: "https://www.pexels.com/video/drone-video-of-residential-buildings-13761467",
        alt: "Penthouse living room",
      },
    ],
  },
  {
    id: "prop-3",
    title: "Waterfront Estate",
    description:
      "Magnificent waterfront property with private dock and breathtaking views. This estate features luxurious finishes, a gourmet kitchen, and expansive outdoor living areas.",
    price: 4750000,
    location: "Miami Beach, FL",
    bedrooms: 6,
    bathrooms: 7,
    squareFeet: 6500,
    yearBuilt: 2015,
    propertyType: "Estate",
    availableFrom: "60 days",
    isPremium: false,
    features: ["Private beach access", "Infinity pool", "Outdoor kitchen", "Guest house", "Boat dock"],
    media: [
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/5744424/5744424-uhd_2560_1440_30fps.mp4",
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/31056458/pexels-photo-31056458/free-photo-of-university-building-surrounded-by-palm-trees-in-florida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Waterfront estate",
      },
    ],
  },
  {
    id: "prop-4",
    title: "Mountain Retreat",
    description:
      "Secluded mountain home with stunning views and modern amenities. Perfect for those seeking privacy without sacrificing luxury and comfort.",
    price: 1850000,
    location: "Aspen, CO",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3800,
    yearBuilt: 2019,
    propertyType: "Cabin",
    availableFrom: "Immediate",
    isPremium: false,
    features: ["Hot tub", "Stone fireplace", "Heated floors", "Game room", "Ski storage"],
    media: [
      {
        type: "video",
        url: "https://videos.pexels.com/video-files/2253719/2253719-uhd_2732_1440_30fps.mp4",
      },
      {
        type: "image",
        url: "https://images.pexels.com/photos/189333/pexels-photo-189333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        alt: "Living room with mountain view",
      },
    ],
  },
  
]

// Simulate API call with delay
export const fetchProperties = async (page: number, limit = 3): Promise<Property[]> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  // For demo purposes, we'll cycle through the mock data to simulate infinite scroll
  const result: Property[] = []

  for (let i = 0; i < limit; i++) {
    const index = (startIndex + i) % mockProperties.length
    // Create a deep copy with a unique ID to simulate different properties
    const property = JSON.parse(JSON.stringify(mockProperties[index]))
    property.id = `${property.id}-${page}-${i}`
    result.push(property)
  }

  return result
}


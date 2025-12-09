export interface MousePosition {
  x: number;
  y: number;
}

export interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  price: string;
  rating: number;
  code: string;
  coordinates: string;
  season: string;
  difficulty: string;
  tourId: string;
}

export interface DayItinerary {
  day: string;
  title: string;
  altitude?: string;
  distance?: string;
  duration?: string;
  difficulty?: string;
  description?: string;
  highlights?: string[];
}

export interface TourOption {
  name: string;
  itinerary: DayItinerary[];
}

export interface TourDetails {
  overview?: string;
  inclusions?: string[];
  importantInfo?: string[];
  options: TourOption[];
}

export interface Place {
  id: number;
  name: string;
  location: string;
  description: string;
  image: string;
  bestTime: string;
  category: string;
}
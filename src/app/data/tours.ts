import { Destination, TourDetails } from '../types/tour';

export const tourDetails: Record<string, TourDetails> = {
  "TSQ004": {
    overview: "Experience the essence of Bhutan in this carefully curated 4-day journey. Trek to the legendary Tiger's Nest Monastery, explore ancient fortresses, and immerse yourself in authentic Bhutanese culture. Perfect for travelers seeking a concise yet comprehensive introduction to the Kingdom of the Thunder Dragon.",
    inclusions: [
      "3 nights accommodation in 3-star hotels",
      "All meals (breakfast, lunch, dinner)",
      "English-speaking licensed tour guide",
      "Private transportation throughout the tour",
      "All entrance fees and permits",
      "Sustainable Development Fee (SDF)",
      "Airport transfers"
    ],
    importantInfo: [
      "Tiger's Nest hike requires moderate fitness level",
      "Best seasons: March-May and September-November",
      "Altitude range: 2,250m - 3,120m",
      "Visa processing takes 7-10 working days",
      "Travel insurance is mandatory",
      "Comfortable hiking shoes required",
      "Layered clothing recommended for varying temperatures"
    ],
    options: [
      {
        name: "Option 1",
        itinerary: [
          {
            day: "Day 01",
            title: "Paro",
            altitude: "2250m/7382ft",
            description: "Welcome to Bhutan, Land of the Thunder Dragon. Transfer to your accommodation. Visit Ta Dzong (National Museum) and Paro Dzong, a historic fortress-monastery."
          },
          {
            day: "Day 02",
            title: "Paro Tiger's Nest Monastery Hike",
            altitude: "3120m/10,240ft",
            distance: "3 km (One Way)",
            duration: "4-6 hours",
            difficulty: "Moderate",
            description: "Hike to Taktsang Monastery, Bhutan's most iconic landmark. Built in 1692, legend tells of Guru Rinpoche riding a tigress here and meditating for three years. A UNESCO World Heritage Site perched on a cliff face."
          },
          {
            day: "Day 03",
            title: "Paro Sightseeing",
            highlights: ["Paro Dzong", "Drugyel Dzong", "Kichu Lhakhang", "National Museum"],
            description: "Explore Drukgyel Dzong ruins and experience traditional life in Lingshi village. Stroll through Paro town and discover its local charm."
          },
          {
            day: "Day 04",
            title: "Departure",
            description: "Transfer to airport after breakfast."
          }
        ]
      },
      {
        name: "Option 2",
        itinerary: [
          {
            day: "Day 01",
            title: "Paro-Thimphu",
            distance: "47.2 Km",
            duration: "1 hour",
            altitude: "2250m/7,382ft",
            description: "Welcome to Bhutan. Transfer to Thimphu. Visit the National Memorial Chorten and Tashichho Dzong, housing the King's throne room and government offices."
          },
          {
            day: "Day 02",
            title: "Thimphu-Paro",
            distance: "47.2 Km",
            duration: "1 hour",
            description: "Visit Kuensel Phodrang with Bhutan's largest Buddha statue. Explore the National Institute for Zorig Chusum and Simply Bhutan museum. Return to Paro for illuminated views of Paro Dzong."
          },
          {
            day: "Day 03",
            title: "Paro Tiger's Nest Monastery Hike",
            altitude: "3120m/10,240ft",
            distance: "3 km (One Way)",
            duration: "4-6 hours",
            difficulty: "Moderate",
            description: "Hike to Taktsang Monastery. Visit Kichu Lhakhang, one of the oldest temples, or the National Museum."
          },
          {
            day: "Day 04",
            title: "Departure",
            description: "Transfer to airport after breakfast."
          }
        ]
      }
    ]
  },
  "HTJ006": {
    overview: "Discover the cultural heartland of Bhutan on this 6-day journey through Thimphu, Punakha, and Paro valleys. Trek to the iconic Tiger's Nest, explore majestic dzongs, witness stunning Himalayan views from Dochula Pass, and experience the spiritual essence of this mystical kingdom.",
    inclusions: [
      "5 nights accommodation in 3-star hotels",
      "All meals (breakfast, lunch, dinner)",
      "English-speaking licensed tour guide",
      "Private vehicle with driver",
      "All entrance fees and monument charges",
      "Sustainable Development Fee (SDF)",
      "Airport pickup and drop-off",
      "Complimentary bottled water during tours"
    ],
    importantInfo: [
      "Moderate fitness level required for Tiger's Nest hike",
      "Altitude ranges from 1,200m to 3,120m",
      "Best time to visit: March-May, September-November",
      "Visa fee included in package price",
      "Minimum 2 travelers required",
      "Travel insurance mandatory",
      "Pack warm layers and rain gear",
      "Photography restrictions apply at religious sites"
    ],
    options: [
      {
        name: "Complete Journey",
        itinerary: [
          {
            day: "Day 01",
            title: "Paro Airport - Thimphu",
            description: "Transfer to Thimphu. Visit the National Memorial Chorten and Tashichho Dzong on the Wang Chu River, seat of Bhutan's government and monastic body."
          },
          {
            day: "Day 02",
            title: "Thimphu Sightseeing",
            description: "Visit Kuensel Phodrang (largest Buddha statue), Takin Preserve (national animal), National Institute for Zorig Chusum, and Simply Bhutan museum."
          },
          {
            day: "Day 03",
            title: "Thimphu - Punakha",
            description: "Drive through Dochula Pass with 108 chortens and Himalayan views. Visit magnificent Punakha Dzong at the confluence of Pho Chu and Mo Chu rivers."
          },
          {
            day: "Day 04",
            title: "Punakha - Paro",
            description: "Hike to Khamsum Yuelley Namgyal Chorten. Visit Chimi Lhakhang (Fertility Temple). Return to Paro for illuminated dzong views."
          },
          {
            day: "Day 05",
            title: "Tiger's Nest Hike",
            altitude: "3120m/10,240ft",
            description: "Hike to Taktsang Monastery. Visit Drukgyel Dzong ruins, Ta Dzong (National Museum), and explore Paro town."
          },
          {
            day: "Day 06",
            title: "Departure",
            description: "Transfer to airport."
          }
        ]
      }
    ]
  },
  "FVE010": {
    overview: "Embark on an extensive 10-day exploration of Bhutan's hidden valleys and pristine landscapes. From the capital Thimphu to the remote Haa Valley, experience diverse ecosystems, ancient monasteries, and traditional villages. This comprehensive journey includes the legendary Tiger's Nest hike and optional Phobjikha Valley, winter home of rare black-necked cranes.",
    inclusions: [
      "9 nights accommodation in 3-4 star hotels",
      "All meals throughout the tour",
      "Professional English-speaking guide",
      "Private air-conditioned vehicle",
      "All entrance fees and permits",
      "Sustainable Development Fee (SDF)",
      "Trekking permits for all hikes",
      "Airport transfers",
      "Emergency medical evacuation insurance",
      "Cultural evening with traditional dinner (Day 5)"
    ],
    importantInfo: [
      "Good fitness level required - includes multiple hikes",
      "Altitude range: 1,200m - 3,988m (Chele La Pass)",
      "Best seasons: March-May (rhododendrons), September-November (clear skies)",
      "October-March for black-necked cranes in Phobjikha Valley",
      "Visa processing: 10-14 working days",
      "Comprehensive travel insurance required",
      "Acclimatization days included in itinerary",
      "Hiking boots and warm clothing essential",
      "Mobile connectivity limited in remote areas",
      "Respect local customs at religious sites"
    ],
    options: [
      {
        name: "Option 1 - Classic Route",
        itinerary: [
          {
            day: "Day 01",
            title: "Arrive Paro - Drive to Thimphu",
            distance: "47.2 Km",
            duration: "1 hour",
            description: "Visit Changangkha Lhakhang temple, Takin Sanctuary (national animal), and BBS Tower for panoramic valley views."
          },
          {
            day: "Day 02",
            title: "Thimphu Tour",
            description: "Visit Memorial Chorten, National Library (ancient manuscripts), Buddha Dordenma statue, and Handicraft Market."
          },
          {
            day: "Day 03",
            title: "Thimphu",
            description: "Visit Tashichho Dzong, housing the King's throne room and government offices. Summer residence of the monastic body."
          },
          {
            day: "Day 04",
            title: "Thimphu - Punakha",
            distance: "73 Km",
            duration: "2 hours",
            description: "Drive through Dochula Pass (3,100m). Visit Lamperi Botanical Park, Punakha Dzong, and Chimi Lhakhang (Fertility Temple)."
          },
          {
            day: "Day 05",
            title: "Punakha Sightseeing",
            description: "Hike to Khamsum Yuelley Namgyal Chorten. Visit peaceful Limbukha Village for authentic rural life."
          },
          {
            day: "Day 06",
            title: "Punakha - Paro",
            distance: "115 Km",
            duration: "3hr 7min",
            description: "Stop at Chuzom (confluence of three rivers) and Thamchok Lhakhang. Visit Ta Dzong (National Museum) and Paro Dzong."
          },
          {
            day: "Day 07",
            title: "Tiger's Nest Monastery Hike",
            altitude: "3120m/10,240ft",
            description: "Hike to Taktsang Monastery, perched 900 meters above the valley. Sacred site where Guru Rinpoche meditated in the 8th century."
          },
          {
            day: "Day 08",
            title: "Paro Sightseeing",
            description: "Visit Drukgyel Dzong ruins, explore Lingshi village, and stroll through Paro town."
          },
          {
            day: "Day 09",
            title: "Paro - Haa Valley - Paro",
            distance: "67 km (One Way)",
            altitude: "2700m/8858ft",
            description: "Drive through Chele La Pass (3,988m), Bhutan's highest motorable road. Explore pristine Haa Valley and visit Katso Lhakhang temple."
          },
          {
            day: "Day 10",
            title: "Departure",
            description: "Transfer to airport."
          }
        ]
      },
      {
        name: "Option 2 - Phobjikha Valley Route",
        itinerary: [
          {
            day: "Days 01-05",
            title: "Same as Option 1",
            description: "Follow Option 1 itinerary covering Thimphu and Punakha valleys."
          },
          {
            day: "Day 06",
            title: "Punakha - Phobjikha",
            distance: "78.6 km",
            duration: "2hr 20 min",
            altitude: "3000m/9800ft",
            description: "Journey to Phobjikha Valley, one of the Himalaya's most beautiful glacial valleys. Visit Gangtey Gompa monastery and Black-necked Crane Information Center."
          },
          {
            day: "Day 07",
            title: "Phobjikha - Paro",
            distance: "171.4 km",
            duration: "4hr 35 min",
            description: "Travel to Paro. Enjoy valley views and illuminated Paro Dzong at night."
          },
          {
            day: "Day 08",
            title: "Tiger's Nest Monastery Hike",
            description: "Hike to Taktsang Monastery, one of Buddhism's holiest sites."
          },
          {
            day: "Day 09",
            title: "Paro Sightseeing",
            description: "Visit Drukgyel Dzong ruins, explore Lingshi village, and walk through Paro town."
          },
          {
            day: "Day 10",
            title: "Departure",
            description: "Transfer to airport."
          }
        ]
      }
    ]
  },
  "CVO010": {
    overview: "A specialized 10-day journey designed for nature enthusiasts and bird watchers. Witness the magnificent black-necked cranes in Phobjikha Valley, one of the world's most important wildlife sanctuaries. Combine wildlife observation with cultural immersion, including the iconic Tiger's Nest trek and exploration of Bhutan's most significant dzongs and monasteries.",
    inclusions: [
      "9 nights premium accommodation (3-4 star hotels)",
      "All meals with special dietary options available",
      "Expert bird-watching guide for Phobjikha Valley",
      "English-speaking cultural guide throughout",
      "Private luxury vehicle with experienced driver",
      "All entrance fees and conservation permits",
      "Sustainable Development Fee (SDF)",
      "Black-necked Crane Center visit with expert briefing",
      "Airport transfers with meet and greet",
      "Binoculars and bird identification guide",
      "Emergency evacuation insurance"
    ],
    importantInfo: [
      "Crane season: October to March (best November-February)",
      "Moderate to good fitness required",
      "Altitude range: 1,200m - 3,120m",
      "Early morning starts for wildlife viewing",
      "Weather can be cold in Phobjikha Valley (bring warm layers)",
      "Visa processing: 10-14 working days",
      "Travel and medical insurance mandatory",
      "Camera equipment recommended for wildlife photography",
      "Respectful distance from wildlife required",
      "Silence during crane observation",
      "Limited facilities in Phobjikha Valley",
      "Mobile coverage intermittent in remote areas"
    ],
    options: [
      {
        name: "Crane Valley Special",
        itinerary: [
          {
            day: "Day 01",
            title: "Arrive Paro - Drive to Thimphu",
            distance: "47.2 Km",
            duration: "1 hour",
            description: "Visit Changangkha Lhakhang temple, Takin Sanctuary, and BBS Tower for valley views."
          },
          {
            day: "Day 02",
            title: "Thimphu Tour",
            description: "Visit Memorial Chorten, National Library (rare Buddhist texts), Buddha Dordenma statue, and Handicraft Market."
          },
          {
            day: "Day 03",
            title: "Thimphu",
            description: "Visit Tashichho Dzong, housing the King's throne room and serving as the kingdom's administrative center."
          },
          {
            day: "Day 04",
            title: "Thimphu - Punakha",
            distance: "73 Km",
            duration: "2 hours",
            description: "Drive through Dochula Pass with 108 chortens. Visit Lamperi Botanical Park, Punakha Dzong, and Chimi Lhakhang (Fertility Temple)."
          },
          {
            day: "Day 05",
            title: "Punakha Sightseeing",
            description: "Hike to Khamsum Yuelley Namgyal Chorten with valley views. Visit serene Limbukha Village."
          },
          {
            day: "Day 06",
            title: "Punakha - Phobjikha Valley",
            distance: "78.6 km",
            duration: "2hr 20 min",
            altitude: "3000m/9800ft",
            description: "Journey to Phobjikha Valley, winter home of rare black-necked cranes. Visit Gangtey Gompa monastery and crane conservation center."
          },
          {
            day: "Day 07",
            title: "Phobjikha - Paro",
            distance: "171.4 km",
            duration: "4hr 35 min",
            description: "Travel to Paro through mountain scenery. Enjoy views of the valley and illuminated Paro Dzong."
          },
          {
            day: "Day 08",
            title: "Tiger's Nest Monastery Hike",
            altitude: "3120m/10,240ft",
            description: "Hike to Taktsang Monastery on a cliff face. Sacred meditation site of Guru Rinpoche, spiritual heart of Bhutan."
          },
          {
            day: "Day 09",
            title: "Paro Day Sightseeing",
            description: "Visit Drukgyel Dzong ruins, explore Lingshi village, and stroll through Paro town."
          },
          {
            day: "Day 10",
            title: "Departure",
            description: "Transfer to airport."
          }
        ]
      }
    ]
  }
};

export const destinations: Destination[] = [
  {
    id: 1,
    name: "TIGER'S SANCTUARY QUEST",
    country: "Bhutan - 4 Days",
    image: "/1.jpg",
    price: "$1,299 USD",
    rating: 4.9,
    code: "TSQ004",
    coordinates: "27.4712° N, 89.6339° E",
    season: "Mar - May",
    difficulty: "Moderate",
    tourId: "TSQ004"
  },
  {
    id: 2,
    name: "HIMALAYAN THRONE JOURNEY",
    country: "Bhutan - 6 Days",
    image: "/2.jpg",
    price: "$1,899 USD",
    rating: 4.8,
    code: "HTJ006",
    coordinates: "27.4712° N, 89.6339° E",
    season: "Year Round",
    difficulty: "Moderate",
    tourId: "HTJ006"
  },
  {
    id: 3,
    name: "FORBIDDEN VALLEY EXPEDITION",
    country: "Bhutan - 10 Days",
    image: "/3.jpg",
    price: "$2,899 USD",
    rating: 4.9,
    code: "FVE010",
    coordinates: "27.4712° N, 89.6339° E",
    season: "Mar - Oct",
    difficulty: "Advanced",
    tourId: "FVE010"
  },
  {
    id: 4,
    name: "CRANE VALLEY ODYSSEY",
    country: "Bhutan - 10 Days",
    image: "/4.jpg",
    price: "$3,199 USD",
    rating: 4.8,
    code: "CVO010",
    coordinates: "27.4712° N, 89.6339° E",
    season: "Oct - Mar",
    difficulty: "Expert",
    tourId: "CVO010"
  }
];
export type MarkerType = "airport" | "hotel" | "activity" | "restaurant" | "transit";

export interface TripStop {
  id: string;
  name: string;
  type: MarkerType;
  lat: number;
  lng: number;
  description: string;
  link?: string;
  day: number;
}

export interface DayActivity {
  time: "morning" | "lunch" | "afternoon" | "dinner" | "transit" | "evening";
  name: string;
  description: string;
  cost?: string;
  link?: string;
  bookAhead?: boolean;
}

export interface TripDay {
  day: number;
  date: string;
  city: string;
  theme: string;
  activities: DayActivity[];
  estimatedCost: string;
  stopIds: string[];
}

export interface FlightOption {
  airline: string;
  price: string;
  route: string;
  stops: string;
  duration: string;
  link: string;
  airlineLink: string;
  note: string;
  badge?: string;
}

export interface HotelOption {
  name: string;
  city: string;
  pricePerNight: string;
  neighborhood: string;
  rating: string;
  highlights: string[];
  bookingLink: string;
}

export interface BudgetItem {
  category: string;
  estimated: string;
}

export const flights: FlightOption[] = [
  {
    airline: "Gulf Air",
    price: "~$759",
    route: "Mumbai (BOM) → New York (JFK)",
    stops: "1 stop via Bahrain",
    duration: "~20–22h total",
    link: "https://www.google.com/flights#flt=BOM.JFK.2026-06-20*JFK.BOM.2026-07-04;c:USD;e:1;sd:1;t:f",
    airlineLink: "https://www.gulfair.com/en/book/flight-search",
    note: "Cheapest option — great value for solo budget-conscious travelers",
    badge: "Best Value",
  },
  {
    airline: "Emirates",
    price: "~$990",
    route: "Mumbai (BOM) → New York (JFK)",
    stops: "1 stop via Dubai",
    duration: "~18–20h total",
    link: "https://www.google.com/flights#flt=BOM.JFK.2026-06-20*JFK.BOM.2026-07-04;c:USD;e:1;sd:1;t:f",
    airlineLink: "https://www.emirates.com/english/book/flights/?origin=BOM&destination=JFK",
    note: "Popular route, excellent service, great lounge at Dubai DXB",
    badge: "Most Popular",
  },
  {
    airline: "Air India",
    price: "~$1,225",
    route: "Mumbai (BOM) → New York (JFK)",
    stops: "Nonstop available",
    duration: "~17h nonstop",
    link: "https://www.google.com/flights#flt=BOM.JFK.2026-06-20*JFK.BOM.2026-07-04;c:USD;e:1;sd:1;t:f",
    airlineLink: "https://www.airindia.com/us/en/book-flight.html",
    note: "Nonstop convenience — worth it to skip a layover on a 17-day trip",
  },
];

export const hotels: HotelOption[] = [
  {
    name: "Pod 39 Hotel",
    city: "New York City",
    pricePerNight: "~$150",
    neighborhood: "Midtown East",
    rating: "3-star",
    highlights: ["Rooftop bar with NYC views", "Modern pod-style rooms", "Steps from Grand Central"],
    bookingLink: "https://www.booking.com/hotel/us/pod-39.html",
  },
  {
    name: "citizenM Times Square",
    city: "New York City",
    pricePerNight: "~$180",
    neighborhood: "Midtown / Times Square",
    rating: "3-star boutique",
    highlights: ["Smart rooms with mood lighting", "24/7 canteen, great social vibe", "Perfect Times Square location"],
    bookingLink: "https://www.booking.com/hotel/us/citizenm-new-york-times-square.html",
  },
  {
    name: "NYMA The New York Manhattan Hotel",
    city: "New York City",
    pricePerNight: "~$130",
    neighborhood: "Midtown",
    rating: "3-star",
    highlights: ["Budget-friendly central location", "Clean modern rooms", "Easy subway access"],
    bookingLink: "https://www.booking.com/hotel/us/nyma-the-new-york-manhattan.html",
  },
  {
    name: "Hotel Hive",
    city: "Washington DC",
    pricePerNight: "~$110",
    neighborhood: "Northwest DC / Foggy Bottom",
    rating: "3-star boutique",
    highlights: ["Stylish micro-hotel", "Walkable to National Mall", "Great local neighborhood feel"],
    bookingLink: "https://www.booking.com/hotel/us/hive.html",
  },
  {
    name: "Holiday Inn Capitol",
    city: "Washington DC",
    pricePerNight: "~$140",
    neighborhood: "Capitol Hill (near National Mall)",
    rating: "3-star",
    highlights: ["Walking distance to Smithsonian museums", "Rooftop pool", "Reliable comfort"],
    bookingLink: "https://www.booking.com/hotel/us/holiday-inn-washington-dc-capitol.html",
  },
  {
    name: "The Line DC",
    city: "Washington DC",
    pricePerNight: "~$160",
    neighborhood: "Adams Morgan",
    rating: "4-star boutique",
    highlights: ["Converted 1940s church building", "Vibrant neighborhood nightlife and dining", "Rooftop views"],
    bookingLink: "https://www.booking.com/hotel/us/the-line-dc.html",
  },
  {
    name: "Hampton Inn Washington DC Convention Center",
    city: "Washington DC",
    pricePerNight: "~$130",
    neighborhood: "Penn Quarter / Downtown",
    rating: "3-star",
    highlights: ["Free hot breakfast", "Walking distance to most attractions", "Reliable chain quality"],
    bookingLink: "https://www.booking.com/hotel/us/hampton-inn-washington-dc-convention-center.html",
  },
  {
    name: "Hyatt Place Washington DC / US Capitol",
    city: "Washington DC",
    pricePerNight: "~$150",
    neighborhood: "Near Capitol Hill",
    rating: "3-star",
    highlights: ["Great location near Capitol and Union Station", "Modern rooms with good amenities", "Free breakfast"],
    bookingLink: "https://www.booking.com/hotel/us/hyatt-place-washington-dc-us-capitol.html",
  },
  {
    name: "Loews Philadelphia Hotel",
    city: "Philadelphia",
    pricePerNight: "~$160",
    neighborhood: "Center City",
    rating: "4-star",
    highlights: ["Landmark 1929 skyscraper, stunning lobby", "Steps from Reading Terminal Market", "Iconic Philadelphia landmark"],
    bookingLink: "https://www.booking.com/hotel/us/loews-philadelphia.html",
  },
  {
    name: "Aloft Philadelphia Downtown",
    city: "Philadelphia",
    pricePerNight: "~$130",
    neighborhood: "Old City / Downtown",
    rating: "3-star",
    highlights: ["Modern boutique-style rooms", "Walking distance to Liberty Bell and Independence Hall", "Lively bar scene"],
    bookingLink: "https://www.booking.com/hotel/us/aloft-philadelphia-downtown.html",
  },
  {
    name: "Kimpton Hotel Monaco Philadelphia",
    city: "Philadelphia",
    pricePerNight: "~$175",
    neighborhood: "Old City",
    rating: "4-star boutique",
    highlights: ["Housed in a historic 1907 building", "Free evening wine hour", "Steps from all Old City attractions"],
    bookingLink: "https://www.booking.com/hotel/us/kimpton-hotel-monaco-philadelphia.html",
  },
  {
    name: "The Revolution Hotel",
    city: "Boston",
    pricePerNight: "~$140",
    neighborhood: "South End / Theater District",
    rating: "3-star boutique",
    highlights: ["Boutique vibes, near Swan Boats", "Top-rated location score", "Arts-focused design"],
    bookingLink: "https://www.booking.com/hotel/us/the-revolution-boston.html",
  },
  {
    name: "Copley Square Hotel",
    city: "Boston",
    pricePerNight: "~$170",
    neighborhood: "Back Bay / Copley Square",
    rating: "3-star",
    highlights: ["Right on Copley Square", "Walkable to Newbury Street", "Historic Boston feel"],
    bookingLink: "https://www.booking.com/hotel/us/copley-square.html",
  },
  {
    name: "Hampton Inn Boston Crosstown Center",
    city: "Boston",
    pricePerNight: "~$120",
    neighborhood: "South End",
    rating: "3-star",
    highlights: ["Free hot breakfast daily", "Short walk to Freedom Trail and Downtown", "Good value for Boston"],
    bookingLink: "https://www.booking.com/hotel/us/hampton-inn-boston-crosstown-center.html",
  },
  {
    name: "Hyatt Centric Faneuil Hall Boston",
    city: "Boston",
    pricePerNight: "~$180",
    neighborhood: "Faneuil Hall / Downtown",
    rating: "4-star",
    highlights: ["Steps from Quincy Market and waterfront", "Modern rooms with harbor views", "Central location for sightseeing"],
    bookingLink: "https://www.booking.com/hotel/us/hyatt-centric-faneuil-hall-boston.html",
  },
];

export const budget: BudgetItem[] = [
  { category: "Flights (roundtrip BOM → NYC)", estimated: "$900" },
  { category: "Accommodation (13 nights, avg $150/night)", estimated: "$1,950" },
  { category: "Food ($50/day × 14 days)", estimated: "$700" },
  { category: "Activities & Entry Fees", estimated: "$400" },
  { category: "Intercity Transport (Amtrak)", estimated: "$300" },
  { category: "Local Transit (Subway/Metro)", estimated: "$150" },
  { category: "Misc / Buffer (10%)", estimated: "$440" },
];

export const totalBudget = "$4,840";

export const stops: TripStop[] = [
  // Airports
  { id: "jfk", name: "JFK International Airport", type: "airport", lat: 40.6413, lng: -73.7781, description: "Arrival Jun 20. Also main return airport on Jul 4.", day: 1 },

  // NYC Hotels
  { id: "nyc-hotel", name: "Hotel (NYC)", type: "hotel", lat: 40.7549, lng: -73.9840, description: "Stay near Midtown: Pod 39, citizenM Times Square, or NYMA. Jun 20–24.", link: "https://www.booking.com", day: 1 },

  // NYC Activities
  { id: "times-square", name: "Times Square", type: "activity", lat: 40.7580, lng: -73.9855, description: "Start your NYC adventure at the iconic Times Square. Great on Day 1 after arrival.", day: 1 },
  { id: "statue-of-liberty", name: "Statue of Liberty & Ellis Island", type: "activity", lat: 40.6892, lng: -74.0445, description: "Book ahead! ~$25. Take the ferry from Battery Park. Allow 3-4 hours.", link: "https://www.statuecruises.com", day: 2 },
  { id: "brooklyn-bridge", name: "Brooklyn Bridge", type: "activity", lat: 40.7061, lng: -73.9969, description: "Run across the bridge! The pedestrian path starts from Centre St on the Manhattan side. ~1.8 miles one way. Free. Epic skyline views.", day: 2 },
  { id: "central-park", name: "Central Park – Bethesda Fountain", type: "activity", lat: 40.7851, lng: -73.9683, description: "Bethesda Fountain and Terrace — the iconic backdrop from Kal Ho Na Ho. Enter at 72nd St, head to the Terrace for that exact spot. Free.", day: 3 },
  { id: "met-museum", name: "Metropolitan Museum of Art", type: "activity", lat: 40.7794, lng: -73.9632, description: "The Met. ~$30. World-class art across 5,000 years. Allow 3–4 hours.", link: "https://www.metmuseum.org", day: 3 },
  { id: "high-line", name: "The High Line", type: "activity", lat: 40.7479, lng: -74.0048, description: "Elevated park built on a former railway. Free. Great views and street art. ~1.5 miles.", link: "https://www.thehighline.org", day: 3 },
  { id: "911-memorial", name: "9/11 Memorial & Museum", type: "activity", lat: 40.7115, lng: -74.0134, description: "Deeply moving tribute. Museum ~$33. Memorial pools free. Book ahead.", link: "https://www.911memorial.org", day: 4 },
  { id: "one-world", name: "One World Observatory", type: "activity", lat: 40.7127, lng: -74.0134, description: "Top of One World Trade Center. ~$44. Stunning 360° city views.", link: "https://www.oneworldobservatory.com", day: 4 },
  { id: "empire-state", name: "Empire State Building", type: "activity", lat: 40.7484, lng: -73.9967, description: "Iconic NYC landmark. ~$44. Book ahead to avoid queues. Morning light is best.", link: "https://www.esbnyc.com", day: 5 },
  { id: "moma", name: "MoMA", type: "activity", lat: 40.7614, lng: -73.9776, description: "Museum of Modern Art. ~$30. Matisse, Warhol, Picasso. Worth a half-day.", link: "https://www.moma.org", day: 5 },

  // NYC Bollywood Filming Locations
  { id: "grand-central", name: "Grand Central Terminal", type: "activity", lat: 40.7527, lng: -73.9772, description: "Kabhi Alvida Naa Kehna — the grand concourse and iconic four-faced clock where Rishi and Maya first meet. One of NYC's most stunning interiors. Free to enter.", link: "https://www.grandcentralterminal.com", day: 5 },
  { id: "washington-square-park", name: "Washington Square Park", type: "activity", lat: 40.7308, lng: -73.9973, description: "Kal Ho Na Ho — Naina's Greenwich Village neighbourhood. The iconic arch and fountain featured in the film. A beloved NYC gathering spot. Free.", link: "https://maps.google.com/?q=Washington+Square+Park+NYC", day: 5 },
  { id: "st-patricks", name: "St. Patrick's Cathedral", type: "activity", lat: 40.7585, lng: -73.9759, description: "Kal Ho Na Ho — the cathedral appeared in pivotal scenes. Stunning Neo-Gothic architecture on 5th Avenue. Free to enter.", link: "https://www.saintpatrickscathedral.org", day: 5 },

  // NYC Restaurants
  { id: "joe-shanghai", name: "Joe's Shanghai (Chinatown)", type: "restaurant", lat: 40.7153, lng: -73.9990, description: "Famous for soup dumplings. Cash only. Budget ~$20/person. Don't skip!", link: "https://maps.google.com/?q=Joe%27s+Shanghai+NYC", day: 4 },
  { id: "the-spotted-pig", name: "The Spotted Pig (West Village)", type: "restaurant", lat: 40.7330, lng: -74.0040, description: "Classic West Village gastropub. Great burgers and wine. ~$40/person.", link: "https://maps.google.com/?q=The+Spotted+Pig+NYC", day: 5 },

  // DC Transit
  { id: "nyc-penn", name: "NYC Penn Station", type: "transit", lat: 40.7506, lng: -73.9971, description: "Amtrak departure to Washington DC. ~$35–75. Northeast Regional takes ~3.5h.", link: "https://www.amtrak.com", day: 6 },
  { id: "dc-union", name: "Washington Union Station", type: "transit", lat: 38.8973, lng: -77.0063, description: "Amtrak arrival from NYC. Beautiful Beaux-Arts station. Great food hall inside.", day: 6 },

  // DC Hotel
  { id: "dc-hotel", name: "Hotel (Washington DC)", type: "hotel", lat: 38.9072, lng: -77.0369, description: "Stay in NW DC or Capitol Hill: Hotel Hive or Holiday Inn Capitol. Jun 25–27.", link: "https://www.booking.com", day: 6 },

  // DC Activities
  { id: "national-mall", name: "National Mall", type: "activity", lat: 38.8895, lng: -77.0353, description: "Walk from Lincoln Memorial to US Capitol. Lincoln Memorial, WWII Memorial, Washington Monument. Free. ~2.5 miles.", day: 6 },
  { id: "lincoln-memorial", name: "Lincoln Memorial", type: "activity", lat: 38.8893, lng: -77.0502, description: "Iconic monument. Free. Best at golden hour. Steps have epic reflective pool view.", link: "https://www.nps.gov/linc", day: 6 },
  { id: "smithsonian-air-space", name: "Smithsonian Air & Space Museum", type: "activity", lat: 38.8882, lng: -77.0199, description: "Free! Actual moon rocks and space shuttles. Half a day well spent.", link: "https://airandspace.si.edu", day: 7 },
  { id: "us-capitol", name: "US Capitol", type: "activity", lat: 38.8899, lng: -77.0091, description: "Visitor center tours are free but require advance reservations. Book at congress.gov.", link: "https://www.visitthecapitol.gov", day: 7 },
  { id: "smithsonian-natural-history", name: "Natural History Museum", type: "activity", lat: 38.8913, lng: -77.0261, description: "Free Smithsonian museum. Hope Diamond, dinosaur skeletons, ocean hall. Crowd-pleaser.", link: "https://naturalhistory.si.edu", day: 7 },
  { id: "arlington", name: "Arlington National Cemetery", type: "activity", lat: 38.8784, lng: -77.0695, description: "Solemn and powerful. Changing of the Guard at Tomb of Unknown Soldier. ~$3 tram.", link: "https://www.arlingtoncemetery.mil", day: 8 },
  { id: "library-of-congress", name: "Library of Congress", type: "activity", lat: 38.8889, lng: -77.0047, description: "Stunning architecture and exhibits. Free. One of the world's greatest libraries.", link: "https://www.loc.gov", day: 8 },
  { id: "white-house", name: "White House (Exterior)", type: "activity", lat: 38.8977, lng: -77.0365, description: "Exterior views from the North Lawn. Free. Reserve interior tours months in advance.", link: "https://www.whitehouse.gov/about-the-white-house/tours-and-events", day: 8 },

  // DC Restaurant
  { id: "old-ebbitt-grill", name: "Old Ebbitt Grill", type: "restaurant", lat: 38.8977, lng: -77.0332, description: "DC institution since 1856. Oysters, cocktails. Great for a solo dinner at the bar. ~$50/person.", link: "https://www.ebbitt.com", day: 7 },

  // Philly Transit
  { id: "philly-amtrak", name: "Amtrak to Philadelphia", type: "transit", lat: 39.9526, lng: -75.1652, description: "30th Street Station Philadelphia. ~1.5h from DC. $20–50 Northeast Regional.", link: "https://www.amtrak.com", day: 9 },

  // Philly Activities
  { id: "liberty-bell", name: "Liberty Bell Center", type: "activity", lat: 39.9496, lng: -75.1503, description: "America's most iconic bell. Free! No ticket required. Allow 30–45 min.", link: "https://www.nps.gov/inde/liberty-bell-center.htm", day: 9 },
  { id: "independence-hall", name: "Independence Hall", type: "activity", lat: 39.9489, lng: -75.1500, description: "Where the Declaration of Independence was signed. Tours ~$1. Book at recreation.gov.", link: "https://www.nps.gov/inde/independence-hall.htm", day: 9 },
  { id: "reading-terminal", name: "Reading Terminal Market", type: "restaurant", lat: 39.9537, lng: -75.1589, description: "Historic public market. Amish pretzels, cheesesteaks, everything. Perfect lunch. ~$15/person.", link: "https://www.readingterminalmarket.org", day: 9 },
  { id: "philly-art-museum", name: "Philadelphia Museum of Art", type: "activity", lat: 39.9656, lng: -75.1810, description: "Run the 'Rocky steps'! Great Impressionist collection too. ~$25. Allow 2 hours.", link: "https://www.philamuseum.org", day: 9 },

  // Boston Transit
  { id: "boston-south-station", name: "Boston South Station", type: "transit", lat: 42.3519, lng: -71.0552, description: "Amtrak arrives from Philadelphia (~5h). Welcome to Boston!", link: "https://www.amtrak.com", day: 10 },

  // Boston Hotel
  { id: "boston-hotel", name: "Hotel (Boston)", type: "hotel", lat: 42.3467, lng: -71.0742, description: "Stay in South End or Back Bay: The Revolution Hotel or Copley Square Hotel. Jun 29–Jul 1.", link: "https://www.booking.com", day: 10 },

  // Boston Activities
  { id: "freedom-trail", name: "Freedom Trail", type: "activity", lat: 42.3554, lng: -71.0640, description: "2.3-mile walking trail through 16 historic sites. Free self-guided. Pick up a map at Boston Common.", link: "https://www.thefreedomtrail.org", day: 10 },
  { id: "paul-revere-house", name: "Paul Revere House", type: "activity", lat: 42.3634, lng: -71.0541, description: "Part of the Freedom Trail. Oldest building in downtown Boston. ~$6.", link: "https://www.paulreverehouse.org", day: 10 },
  { id: "bunker-hill", name: "Bunker Hill Monument", type: "activity", lat: 42.3763, lng: -71.0606, description: "Climb 294 steps for panoramic Boston views. Free! Great endpoint for Freedom Trail.", link: "https://www.nps.gov/bost/planyourvisit/bunker-hill-monument.htm", day: 10 },
  { id: "harvard", name: "Harvard & MIT Campus", type: "activity", lat: 42.3770, lng: -71.1167, description: "Self-guided walk through Cambridge. Harvard Yard is stunning. Free. Take the Red Line T.", link: "https://www.harvard.edu/on-campus/visit-harvard", day: 11 },
  { id: "newbury-street", name: "Newbury Street", type: "activity", lat: 42.3511, lng: -71.0791, description: "Back Bay's famous shopping and dining street. Great for an afternoon stroll and cafe stop.", day: 11 },
  { id: "museum-of-science", name: "Museum of Science", type: "activity", lat: 42.3676, lng: -71.0693, description: "Fun and interactive. Lightning shows! ~$32. Great for a rainy day too.", link: "https://www.mos.org", day: 12 },
  { id: "boston-harbor", name: "Boston Harbor Cruise", type: "activity", lat: 42.3591, lng: -71.0500, description: "See the city from the water. ~$35. Sunset cruises are especially scenic.", link: "https://www.bostonharborcruises.com", day: 12 },
  { id: "faneuil-hall", name: "Faneuil Hall Marketplace", type: "activity", lat: 42.3600, lng: -71.0559, description: "Historic market with street performers and great food. Free to browse. Perfect for dinner.", link: "https://www.faneuilhallmarketplace.com", day: 12 },

  // Boston Restaurant
  { id: "neptune-oyster", name: "Neptune Oyster (North End)", type: "restaurant", lat: 42.3638, lng: -71.0553, description: "Best oysters and lobster rolls in Boston. Tiny — arrive early or wait. ~$50/person.", link: "https://www.neptuneoyster.com", day: 11 },
  { id: "regina-pizzeria", name: "Regina Pizzeria (North End)", type: "restaurant", lat: 42.3649, lng: -71.0571, description: "Boston's oldest pizza — since 1926. Thin-crust, coal-fired. Cash only. ~$20/person.", link: "https://www.reginapizzeria.com", day: 11 },

  // NYC Return
  { id: "boston-back", name: "Amtrak: Boston → NYC", type: "transit", lat: 42.3519, lng: -71.0552, description: "Jul 2: South Station back to Penn Station, NYC. ~$35–90. 3.5–4h ride.", link: "https://www.amtrak.com", day: 13 },
  { id: "brooklyn-williamsburg", name: "Williamsburg, Brooklyn", type: "activity", lat: 40.7081, lng: -73.9571, description: "Cool neighborhood for your final days. Vintage shops, great coffee, street art, rooftop bars.", day: 13 },
  { id: "coney-island", name: "Coney Island", type: "activity", lat: 40.5755, lng: -73.9707, description: "Amusement park and beach. Nathan's hot dogs! Easy 40-min subway ride. Great summer vibes.", link: "https://www.brooklynusa.com/parks/coney-island", day: 13 },
];

export const days: TripDay[] = [
  {
    day: 1,
    date: "Jun 20, Sat",
    city: "New York City",
    theme: "Arrival & First Impressions",
    activities: [
      { time: "morning", name: "Arrive at JFK / EWR", description: "Immigration, collect baggage, take AirTrain + subway or taxi to hotel. Budget 2–3h for the full arrival process." },
      { time: "afternoon", name: "Check In & Rest", description: "Day 1 after a long-haul flight is a recovery day. Jet lag is real — don't book anything timed." },
      { time: "afternoon", name: "Times Square Stroll", description: "Easy walk to Times Square to soak in your first NYC moment. Just wander — no agenda." },
      { time: "dinner", name: "Hell's Kitchen Dinner", description: "Explore the neighborhood around your hotel for dinner. NYC cuisine is everywhere — try a slice of New York pizza first.", link: "https://maps.google.com/?q=restaurants+near+times+square+new+york" },
    ],
    estimatedCost: "$60",
    stopIds: ["jfk", "nyc-hotel", "times-square"],
  },
  {
    day: 2,
    date: "Jun 21, Sun",
    city: "New York City",
    theme: "Statue of Liberty & Brooklyn",
    activities: [
      { time: "morning", name: "Statue of Liberty & Ellis Island", description: "Take the morning ferry from Battery Park. Book tickets well in advance — they sell out!", cost: "~$25", link: "https://www.statuecruises.com", bookAhead: true },
      { time: "lunch", name: "Lunch in Lower Manhattan", description: "Grab a bite near Fulton Street or South Street Seaport after returning from the ferry.", link: "https://maps.google.com/?q=restaurants+lower+manhattan", cost: "~$20" },
      { time: "afternoon", name: "Brooklyn Bridge Run", description: "Run across the bridge — start at the pedestrian entrance on Centre St, Manhattan side. ~1.8 miles one way. Free. The skyline view from the middle is unreal.", link: "https://maps.google.com/?q=brooklyn+bridge+pedestrian+walkway" },
      { time: "dinner", name: "Dinner in DUMBO or Brooklyn Heights", description: "Great food scene in Brooklyn. Try Juliana's for pizza or explore the waterfront.", link: "https://maps.google.com/?q=restaurants+DUMBO+brooklyn", cost: "~$35" },
    ],
    estimatedCost: "$85",
    stopIds: ["statue-of-liberty", "brooklyn-bridge"],
  },
  {
    day: 3,
    date: "Jun 22, Mon",
    city: "New York City",
    theme: "Central Park, The Met & The High Line",
    activities: [
      { time: "morning", name: "Morning Run: Central Park Reservoir", description: "Start your day with a run on the 1.58-mile Jacqueline Kennedy Onassis Reservoir track — soft packed dirt, no concrete, and the NYC skyline to the south. Best before 8am when it's cool and quiet. Enter at 90th St & 5th Ave.", link: "https://www.centralparknyc.org/activities/running" },
      { time: "morning", name: "Central Park — Kal Ho Na Ho Locations", description: "Enter at 72nd St and head straight to Bethesda Fountain & Terrace — the heart of KHNH. The archway, the fountain, the steps — all exactly as in the film. Then stroll Strawberry Fields and the Great Lawn. Free.", link: "https://www.centralparknyc.org" },
      { time: "morning", name: "Metropolitan Museum of Art", description: "One of the world's greatest museums. Egyptian Wing, European paintings, Arms & Armor. Allow 3+ hours.", cost: "~$30", link: "https://www.metmuseum.org", bookAhead: false },
      { time: "lunch", name: "Lunch at The Met or Upper East Side", description: "The Met has a great cafeteria, or grab food on Madison Ave nearby.", cost: "~$20" },
      { time: "afternoon", name: "The High Line", description: "Walk south along the elevated park from 34th St to Gansevoort St. Stunning views and great public art.", link: "https://www.thehighline.org" },
      { time: "dinner", name: "Dinner in Chelsea", description: "Vibrant neighborhood with excellent restaurants. Try Creamline or explore Ninth Avenue.", link: "https://maps.google.com/?q=restaurants+chelsea+new+york", cost: "~$40" },
    ],
    estimatedCost: "$100",
    stopIds: ["central-park", "met-museum", "high-line"],
  },
  {
    day: 4,
    date: "Jun 23, Tue",
    city: "New York City",
    theme: "Ground Zero, Financial District & Chinatown",
    activities: [
      { time: "morning", name: "9/11 Memorial & Museum", description: "Deeply moving. The twin reflecting pools are breathtaking. Museum inside is powerful. Book ahead.", cost: "~$33", link: "https://www.911memorial.org", bookAhead: true },
      { time: "morning", name: "One World Observatory", description: "Next door to the 9/11 Memorial. Fastest elevator in the Western Hemisphere. Book online.", cost: "~$44", link: "https://www.oneworldobservatory.com", bookAhead: true },
      { time: "lunch", name: "Joe's Shanghai (Chinatown)", description: "Famous soup dumplings (xiao long bao). Line moves fast. Budget ~$20/person. Cash only.", cost: "~$20", link: "https://maps.google.com/?q=Joe%27s+Shanghai+NYC" },
      { time: "afternoon", name: "Explore SoHo, Little Italy & Chinatown", description: "Wander through SoHo's galleries and shops, then into the narrow streets of Little Italy and Chinatown." },
      { time: "dinner", name: "Dinner in Chinatown", description: "Stay in the area — so much great affordable food. Try Nom Wah Tea Parlor for dim sum.", link: "https://maps.google.com/?q=nom+wah+tea+parlor+chinatown", cost: "~$25" },
    ],
    estimatedCost: "$130",
    stopIds: ["911-memorial", "one-world", "joe-shanghai"],
  },
  {
    day: 5,
    date: "Jun 24, Wed",
    city: "New York City",
    theme: "Empire State, MoMA & Bollywood NYC Tour",
    activities: [
      { time: "morning", name: "Empire State Building", description: "Book the first entry slot online to beat crowds. Morning light is best for photos.", cost: "~$44", link: "https://www.esbnyc.com", bookAhead: true },
      { time: "lunch", name: "Koreatown Lunch", description: "Korea Way on 32nd St is steps from the Empire State. Try K-BBQ or bibimbap for ~$20.", link: "https://maps.google.com/?q=koreatown+32nd+street+nyc", cost: "~$20" },
      { time: "afternoon", name: "Grand Central Terminal — KANK Scene", description: "Step inside the grand concourse and find the iconic four-faced clock — exactly where Rishi and Maya meet in Kabhi Alvida Naa Kehna. Free to enter and explore.", link: "https://www.grandcentralterminal.com" },
      { time: "afternoon", name: "St. Patrick's Cathedral — KHNH", description: "Walk south on 5th Ave to St. Patrick's — featured in Kal Ho Na Ho's pivotal church scenes. The Neo-Gothic interior is breathtaking. Free to enter.", link: "https://www.saintpatrickscathedral.org" },
      { time: "afternoon", name: "Washington Square Park — KHNH", description: "Take the subway to Greenwich Village — the neighbourhood where Naina lived in Kal Ho Na Ho. The iconic arch and fountain are right here. Perfect late afternoon stop.", link: "https://maps.google.com/?q=Washington+Square+Park+NYC" },
      { time: "dinner", name: "Dinner in Greenwich Village / West Village", description: "End your last NYC day in the neighbourhood from the film. The Spotted Pig, or dozens of excellent options on Bleecker and Cornelia St.", cost: "~$45", link: "https://maps.google.com/?q=restaurants+west+village+nyc" },
    ],
    estimatedCost: "$150",
    stopIds: ["empire-state", "moma", "grand-central", "st-patricks", "washington-square-park", "the-spotted-pig"],
  },
  {
    day: 6,
    date: "Jun 25, Thu",
    city: "Washington DC",
    theme: "Travel Day + National Mall",
    activities: [
      { time: "morning", name: "Amtrak NYC → Washington DC", description: "Take Northeast Regional from Penn Station. ~3.5h. Book tickets on amtrak.com — prices rise last-minute.", cost: "~$35–75", link: "https://www.amtrak.com", bookAhead: true },
      { time: "afternoon", name: "Check In & National Mall Walk", description: "Drop bags at hotel, then walk to the National Mall. It's enormous — save your legs for highlights.", link: "https://www.nps.gov/nama" },
      { time: "afternoon", name: "Lincoln Memorial & WWII Memorial", description: "Two of the most powerful monuments in America. Free. Arrange your visit at golden hour if possible.", link: "https://www.nps.gov/linc" },
      { time: "dinner", name: "Dinner near Union Station", description: "Union Station has a great food hall, or head to nearby Capitol Hill restaurants.", link: "https://maps.google.com/?q=restaurants+near+union+station+dc", cost: "~$35" },
    ],
    estimatedCost: "$120",
    stopIds: ["nyc-penn", "dc-union", "dc-hotel", "national-mall", "lincoln-memorial"],
  },
  {
    day: 7,
    date: "Jun 26, Fri",
    city: "Washington DC",
    theme: "Smithsonian, Capitol & Georgetown",
    activities: [
      { time: "morning", name: "Morning Run: National Mall Sunrise Loop", description: "Lace up early and run the full Mall — Lincoln Memorial to the Capitol and back (~4.5 miles). Completely flat, and at 6–7am the monuments are bathed in golden light with almost no one around. One of the most memorable runs on Earth.", link: "https://www.nps.gov/nama/planyourvisit/running.htm" },
      { time: "morning", name: "Smithsonian National Air & Space Museum", description: "Actual moon rocks, Apollo 11 capsule, Wright Brothers' Flyer. Free! Allow 2–3 hours.", link: "https://airandspace.si.edu" },
      { time: "lunch", name: "Lunch on the Mall", description: "Multiple Smithsonian cafeterias, or grab a sandwich from a street vendor. Budget option.", cost: "~$15" },
      { time: "afternoon", name: "US Capitol (Visitor Center)", description: "Reserve free tour at visitthecapitol.gov well in advance. Exterior views are free anytime.", link: "https://www.visitthecapitol.gov", bookAhead: true },
      { time: "afternoon", name: "Natural History Museum", description: "The Hope Diamond. Free Smithsonian museum. Great if you have time after the Capitol.", link: "https://naturalhistory.si.edu" },
      { time: "evening", name: "Georgetown Evening Stroll", description: "Head to Georgetown for dinner by the C&O Canal. Charming cobblestone streets." },
      { time: "dinner", name: "Old Ebbitt Grill", description: "DC institution since 1856. Best oysters in the city. Great solo dining at the bar.", cost: "~$50", link: "https://www.ebbitt.com" },
    ],
    estimatedCost: "$80",
    stopIds: ["smithsonian-air-space", "us-capitol", "smithsonian-natural-history", "old-ebbitt-grill"],
  },
  {
    day: 8,
    date: "Jun 27, Sat",
    city: "Washington DC",
    theme: "Arlington, Library of Congress & Departure",
    activities: [
      { time: "morning", name: "Arlington National Cemetery", description: "Start early. Changing of the Guard at the Tomb of the Unknown Soldier is at 10am. Moving experience.", cost: "~$3 tram", link: "https://www.arlingtoncemetery.mil" },
      { time: "lunch", name: "Quick Lunch Near Capitol Hill", description: "Head back across the river. Grab a bite near the Capitol." },
      { time: "afternoon", name: "Library of Congress", description: "The world's largest library. Main Reading Room is jaw-dropping. Free. Jefferson Building.", link: "https://www.loc.gov" },
      { time: "afternoon", name: "White House (Exterior)", description: "Walk by the North Lawn for photos. Interior tours require booking months in advance.", link: "https://www.whitehouse.gov/about-the-white-house/tours-and-events" },
      { time: "transit", name: "Amtrak DC → Philadelphia", description: "Afternoon departure. ~1.5h ride. $20–50. Arrives 30th Street Station, Philadelphia.", link: "https://www.amtrak.com", bookAhead: true },
      { time: "dinner", name: "Arrive Philadelphia", description: "Check in and grab dinner in Old City or Society Hill.", cost: "~$30" },
    ],
    estimatedCost: "$75",
    stopIds: ["arlington", "library-of-congress", "white-house"],
  },
  {
    day: 9,
    date: "Jun 28, Sun",
    city: "Philadelphia",
    theme: "The Birthplace of America",
    activities: [
      { time: "morning", name: "Liberty Bell Center", description: "America's most iconic bell. Free — no ticket required. Allow 30–45 min. Opens 9am.", link: "https://www.nps.gov/inde/liberty-bell-center.htm" },
      { time: "morning", name: "Independence Hall", description: "Where the Declaration of Independence was signed. ~$1 tour. Reserve at recreation.gov.", cost: "~$1", link: "https://www.recreation.gov/ticket/facility/300016", bookAhead: true },
      { time: "lunch", name: "Reading Terminal Market", description: "Historic indoor market since 1893. Amish baked goods, Philly cheesesteaks, world cuisine. A must!", cost: "~$15", link: "https://www.readingterminalmarket.org" },
      { time: "afternoon", name: "Philadelphia Museum of Art", description: "Run up the Rocky steps! Also great Impressionist art inside. Allow 2 hours.", cost: "~$25", link: "https://www.philamuseum.org" },
      { time: "dinner", name: "Dinner in Old City", description: "Great restaurant scene in Old City near Independence Hall.", link: "https://maps.google.com/?q=restaurants+old+city+philadelphia", cost: "~$35" },
      { time: "transit", name: "Evening: Amtrak to Boston", description: "Optional: evening Amtrak from Philadelphia 30th St to Boston South Station (~5h). Or stay a night and travel in the morning.", link: "https://www.amtrak.com" },
    ],
    estimatedCost: "$90",
    stopIds: ["philly-amtrak", "liberty-bell", "independence-hall", "reading-terminal", "philly-art-museum"],
  },
  {
    day: 10,
    date: "Jun 29, Mon",
    city: "Boston",
    theme: "Arrive & The Freedom Trail",
    activities: [
      { time: "morning", name: "Arrive Boston South Station", description: "If arriving from evening train, check in and rest. Otherwise travel this morning." },
      { time: "morning", name: "Check In", description: "Drop bags at hotel in South End or Back Bay." },
      { time: "afternoon", name: "Freedom Trail Walk", description: "Self-guided 2.3-mile trail through 16 historic sites. Start at Boston Common Visitor Center. Free map available.", link: "https://www.thefreedomtrail.org" },
      { time: "afternoon", name: "Paul Revere House & North End", description: "Part of the Freedom Trail. Walk through Boston's Little Italy neighborhood afterward.", cost: "~$6", link: "https://www.paulreverehouse.org" },
      { time: "afternoon", name: "Bunker Hill Monument", description: "Climb 294 steps for panoramic Boston views. Free! Natural trail endpoint.", link: "https://www.nps.gov/bost/planyourvisit/bunker-hill-monument.htm" },
      { time: "dinner", name: "North End Italian Dinner", description: "Boston's Italian neighborhood. Dozens of authentic restaurants. Try Giacomo's or Daily Catch.", link: "https://maps.google.com/?q=restaurants+north+end+boston", cost: "~$35" },
    ],
    estimatedCost: "$55",
    stopIds: ["boston-south-station", "boston-hotel", "freedom-trail", "paul-revere-house", "bunker-hill"],
  },
  {
    day: 11,
    date: "Jun 30, Tue",
    city: "Boston",
    theme: "Harvard, Back Bay & North End",
    activities: [
      { time: "morning", name: "Morning Run: Charles River Esplanade", description: "Boston's most loved run — a 4-mile loop along the Charles River between the Longfellow and Mass Ave bridges. Flat, paved, and beautiful. You'll see Harvard and MIT rowing crews out on the water at this hour. Start at the Hatch Shell near Arlington T stop.", link: "https://www.esplanade.org/activities/running" },
      { time: "morning", name: "Harvard & MIT Campus Tour", description: "Take the Red Line T to Harvard Square. Self-guided walk through Harvard Yard and MIT. Free.", link: "https://www.harvard.edu/on-campus/visit-harvard" },
      { time: "lunch", name: "Lunch in Harvard Square", description: "Excellent food scene in Cambridge. Try Mr. Bartley's Burger Cottage (cash only, legendary).", link: "https://maps.google.com/?q=restaurants+harvard+square+cambridge", cost: "~$20" },
      { time: "afternoon", name: "Back Bay: Newbury Street", description: "Return to Boston proper. Stroll Newbury Street for shopping, galleries, and coffee." },
      { time: "afternoon", name: "Copley Square & Trinity Church", description: "Beautiful Neo-Romanesque church free to view from outside. Boston Public Library is free inside.", link: "https://maps.google.com/?q=trinity+church+copley+square+boston" },
      { time: "dinner", name: "Neptune Oyster (North End)", description: "Boston's best oysters and lobster rolls. Tiny spot — arrive at 5pm to avoid a long wait.", cost: "~$50", link: "https://www.neptuneoyster.com" },
    ],
    estimatedCost: "$80",
    stopIds: ["harvard", "newbury-street", "neptune-oyster", "regina-pizzeria"],
  },
  {
    day: 12,
    date: "Jul 1, Wed",
    city: "Boston",
    theme: "Science, Sea & Faneuil Hall",
    activities: [
      { time: "morning", name: "Museum of Science", description: "Interactive and fun. Live lightning shows, planetarium. Great if the weather is uncertain.", cost: "~$32", link: "https://www.mos.org" },
      { time: "lunch", name: "Quincy Market at Faneuil Hall", description: "Great casual lunch spot — clam chowder, lobster bisque, fresh pastries.", cost: "~$20", link: "https://www.faneuilhallmarketplace.com" },
      { time: "afternoon", name: "Boston Harbor Cruise", description: "See the city from the water. ~1.5h cruise with narration. Gorgeous on a clear day.", cost: "~$35", link: "https://www.bostonharborcruises.com" },
      { time: "evening", name: "Faneuil Hall Marketplace", description: "Evening street performers, outdoor dining, and easy browsing. Great vibe." },
      { time: "dinner", name: "Dinner at Faneuil Hall Area", description: "Multiple options — try Legal Sea Foods or Durgin-Park for classic New England seafood.", link: "https://maps.google.com/?q=restaurants+faneuil+hall+boston", cost: "~$40" },
    ],
    estimatedCost: "$130",
    stopIds: ["museum-of-science", "boston-harbor", "faneuil-hall"],
  },
  {
    day: 13,
    date: "Jul 2, Thu",
    city: "New York City",
    theme: "Return to NYC & Brooklyn Exploration",
    activities: [
      { time: "morning", name: "Amtrak: Boston → NYC", description: "South Station to Penn Station. ~3.5–4h. Book ahead! Summer travel is busy.", cost: "~$35–90", link: "https://www.amtrak.com", bookAhead: true },
      { time: "afternoon", name: "Williamsburg, Brooklyn", description: "Cool neighborhood: vintage shops, street art, rooftop bars. Easy L train from Manhattan." },
      { time: "afternoon", name: "Optional: Coney Island", description: "Amusement park, beach, Nathan's famous hot dogs. Only 40 min on the subway from Midtown. Pure summer.", link: "https://www.brooklynusa.com/parks/coney-island" },
      { time: "dinner", name: "Final NYC Dinner", description: "One last great New York meal. Treat yourself!", link: "https://maps.google.com/?q=best+restaurants+nyc", cost: "~$50" },
    ],
    estimatedCost: "$120",
    stopIds: ["boston-back", "brooklyn-williamsburg", "coney-island"],
  },
  {
    day: 14,
    date: "Jul 3, Fri",
    city: "New York City",
    theme: "Buffer Day & Departure Prep",
    activities: [
      { time: "morning", name: "Free Morning", description: "Use this day to revisit a favorite spot, do last-minute shopping, or simply relax. You've earned it." },
      { time: "afternoon", name: "Last-Minute Shopping", description: "Times Square flagship stores, Macy's Herald Square, or SoHo boutiques." },
      { time: "afternoon", name: "Airport Transfer (Jul 4)", description: "Depart Jul 4 — Independence Day! Book your airport transport well in advance. Massive crowds. Budget 3+ hours for the airport on departure day.", link: "https://www.jfkairport.com" },
      { time: "dinner", name: "Farewell Dinner", description: "Make it count — you're heading home tomorrow.", cost: "~$50" },
    ],
    estimatedCost: "$70",
    stopIds: ["nyc-hotel"],
  },
];

export const visaInfo = {
  required: true,
  type: "US B1/B2 Tourist Visa",
  note: "Indian passport holders require a valid US B1/B2 visa to enter the United States. India is NOT part of the Visa Waiver Program. Apply well in advance — interview wait times at Mumbai consulate can be 100+ days in 2026.",
  steps: [
    "Fill DS-160 form online at ceac.state.gov",
    "Pay the $185 MRV fee",
    "Schedule a visa interview at the US Consulate Mumbai",
    "Attend interview with required documents",
  ],
  link: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
  passportNote: "Ensure passport is valid for at least 6 months beyond July 4, 2026",
};

// ── Explore section data ─────────────────────────────────────────────────────

export interface CoffeeShop {
  name: string;
  city: string;
  neighborhood: string;
  specialty: string;
  description: string;
  priceRange: string;
  link: string;
  lat: number;
  lng: number;
}

export interface RunningRoute {
  name: string;
  city: string;
  distance: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  description: string;
  highlights: string[];
  startPoint: string;
  link?: string;
  lat: number;
  lng: number;
}

export interface HikingOption {
  name: string;
  nearCity: string;
  travelTime: string;
  trailLength: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  description: string;
  bestFor: string;
  link?: string;
  lat: number;
  lng: number;
}

export interface HiddenGem {
  name: string;
  city: string;
  category: string;
  description: string;
  insiderTip: string;
  link?: string;
  lat: number;
  lng: number;
}

export const coffeeShops: CoffeeShop[] = [
  // New York City
  {
    name: "Blue Bottle Coffee",
    city: "New York City",
    neighborhood: "Williamsburg / Multiple",
    specialty: "Single-origin pour-overs",
    description: "Cult West Coast roaster that made its NYC home. Minimalist cafés with obsessively sourced beans. The New Orleans iced coffee is legendary.",
    priceRange: "$$",
    link: "https://bluebottlecoffee.com/pages/locations",
    lat: 40.7140,
    lng: -73.9613,
  },
  {
    name: "Stumptown Coffee Roasters",
    city: "New York City",
    neighborhood: "Midtown (Ace Hotel)",
    specialty: "Hair Bender espresso blend",
    description: "Portland's finest in the Ace Hotel lobby — a buzzing, creative space. Perfect before MoMA or the Empire State Building. Great cold brew.",
    priceRange: "$$",
    link: "https://www.stumptowncoffee.com/pages/locations",
    lat: 40.7479,
    lng: -73.9904,
  },
  {
    name: "Joe Coffee",
    city: "New York City",
    neighborhood: "Upper West Side / Multiple",
    specialty: "Seasonal espresso & cortados",
    description: "NYC's homegrown specialty roaster since 2003. Cosy neighbourhood feel, consistently excellent espresso. The UWS original is a classic.",
    priceRange: "$$",
    link: "https://www.joecoffeecompany.com/locations",
    lat: 40.7844,
    lng: -73.9800,
  },
  {
    name: "Abraço Espresso",
    city: "New York City",
    neighborhood: "East Village",
    specialty: "Espresso + olive oil cake",
    description: "A tiny East Village gem — possibly NYC's best espresso shot in a 100 sq ft space. Always a queue, always worth it. Grab their famous olive oil cake.",
    priceRange: "$",
    link: "https://maps.google.com/?q=Abraco+Espresso+NYC",
    lat: 40.7265,
    lng: -73.9843,
  },
  // Washington DC
  {
    name: "Compass Coffee",
    city: "Washington DC",
    neighborhood: "Shaw / Multiple",
    specialty: "Light-roast drip & espresso",
    description: "DC's best local roaster, founded by two Marines. Clean, bright flavours, excellent drip coffee. Multiple locations around the city — a DC institution.",
    priceRange: "$",
    link: "https://compasscoffee.com/pages/locations",
    lat: 38.9126,
    lng: -77.0220,
  },
  {
    name: "La Colombe Coffee",
    city: "Washington DC",
    neighborhood: "Penn Quarter",
    specialty: "Draft Latte (signature canned)",
    description: "The Philly roaster's DC outpost. Their draft latte on tap is unlike anything else — cold-pressed espresso with textured milk straight from the tap.",
    priceRange: "$$",
    link: "https://www.lacolombe.com/pages/cafes",
    lat: 38.8966,
    lng: -77.0228,
  },
  {
    name: "The Wydown Coffee Bar",
    city: "Washington DC",
    neighborhood: "14th Street NW",
    specialty: "Aeropress & syphon brewing",
    description: "Neighbourhood gem on the vibrant 14th St corridor. Meticulous brew methods and great single-origin options. Ideal pre-stroll before the National Mall.",
    priceRange: "$$",
    link: "https://maps.google.com/?q=The+Wydown+Coffee+Bar+DC",
    lat: 38.9211,
    lng: -77.0330,
  },
  // Philadelphia
  {
    name: "La Colombe Coffee — Original",
    city: "Philadelphia",
    neighborhood: "Old City (Fishtown flagship)",
    specialty: "Pure Black cold brew",
    description: "La Colombe was born in Philly. The Fishtown flagship is the spiritual home — a beautiful industrial space. Try the Pure Black cold brew, invented here.",
    priceRange: "$$",
    link: "https://www.lacolombe.com/pages/cafes",
    lat: 39.9735,
    lng: -75.1343,
  },
  {
    name: "ReAnimator Coffee",
    city: "Philadelphia",
    neighborhood: "Northern Liberties",
    specialty: "Light-roast single-origin",
    description: "Philly's beloved independent roaster with a loyal following. Clean, bright coffees and a relaxed neighbourhood vibe. The best coffee in the city, full stop.",
    priceRange: "$",
    link: "https://reanimatorcoffee.com",
    lat: 39.9647,
    lng: -75.1394,
  },
  // Boston
  {
    name: "George Howell Coffee",
    city: "Boston",
    neighborhood: "Downtown / Financial District",
    specialty: "Terroir-focused single-origin",
    description: "A Boston legend — George Howell literally invented the specialty coffee movement in the city. Precise, transparent sourcing. Perfect before a Freedom Trail walk.",
    priceRange: "$$",
    link: "https://www.georgehowellcoffee.com",
    lat: 42.3564,
    lng: -71.0566,
  },
  {
    name: "Gracenote Coffee",
    city: "Boston",
    neighborhood: "South End",
    specialty: "Espresso & filter",
    description: "A tiny, serious coffee bar in the South End. Rotating seasonal roasters, expert baristas, and one of Boston's best flat whites. Arrive early — it fills up.",
    priceRange: "$$",
    link: "https://maps.google.com/?q=Gracenote+Coffee+Boston",
    lat: 42.3443,
    lng: -71.0684,
  },
  {
    name: "Thinking Cup",
    city: "Boston",
    neighborhood: "Downtown (near Boston Common)",
    specialty: "Stumptown roasts, crêpes",
    description: "Perfectly placed for a pre-walk coffee before the Freedom Trail or Boston Common. Serves Stumptown roasts with excellent crêpes and pastries.",
    priceRange: "$",
    link: "https://www.thinkingcup.com",
    lat: 42.3556,
    lng: -71.0627,
  },
];

export const runningRoutes: RunningRoute[] = [
  {
    name: "Central Park Reservoir & Loop",
    city: "New York City",
    distance: "1.6 mi (reservoir) / 6.1 mi (full outer loop)",
    difficulty: "Easy",
    description: "NYC's most iconic run. The Jacqueline Kennedy Onassis Reservoir track (1.58 miles) is soft, packed dirt — perfect for an early morning run. For a longer session, take the full outer loop. The park is magical before 8am.",
    highlights: ["Bethesda Fountain at dawn", "Skyline views from the south end", "Soft reservoir track (no concrete)", "Runners-only early morning hours"],
    startPoint: "72nd St & Central Park West (West Side) or 90th St & 5th Ave (Reservoir track)",
    link: "https://www.centralparknyc.org/activities/running",
    lat: 40.7851,
    lng: -73.9683,
  },
  {
    name: "Hudson River Greenway",
    city: "New York City",
    distance: "4–13 mi (customisable)",
    difficulty: "Easy",
    description: "A dedicated car-free path running the entire western edge of Manhattan. Flat, scenic, and fast. Start near the High Line (Gansevoort St) and run north as far as you like. Great views of New Jersey and the Hudson.",
    highlights: ["Completely car-free paved path", "Little Island park along the way", "George Washington Bridge views from the north", "No traffic lights"],
    startPoint: "Gansevoort Street, Hudson River Park",
    link: "https://www.hudsonriverpark.org",
    lat: 40.7409,
    lng: -74.0089,
  },
  {
    name: "National Mall Loop",
    city: "Washington DC",
    distance: "~4.5 mi round trip",
    difficulty: "Easy",
    description: "Run from the Lincoln Memorial to the US Capitol and back — past the WWII Memorial, Washington Monument, and the Reflecting Pool. Completely flat, stunning at sunrise when almost no tourists are around. A once-in-a-lifetime morning run.",
    highlights: ["Lincoln Memorial at golden hour", "Reflection pool at sunrise", "Washington Monument loop", "Almost no crowds before 8am"],
    startPoint: "Lincoln Memorial steps (start here for the best sunrise view)",
    link: "https://www.nps.gov/nama/planyourvisit/running.htm",
    lat: 38.8893,
    lng: -77.0502,
  },
  {
    name: "Rock Creek Park Trail",
    city: "Washington DC",
    distance: "4–10 mi (customisable)",
    difficulty: "Moderate",
    description: "DC's secret green lung — 1,754 acres of forest literally inside the city. The Valley Trail runs through shaded woodland along Rock Creek. A complete escape from the urban environment. Trailheads near Adams Morgan and Georgetown.",
    highlights: ["Forested canopy, zero urban feel", "Cool even in summer heat", "Multiple loop options from 4–10 miles", "Wildlife sightings common"],
    startPoint: "Pierce Mill (2401 Tilden St NW) or Beach Drive",
    link: "https://www.nps.gov/rocr/planyourvisit/running.htm",
    lat: 38.9432,
    lng: -77.0511,
  },
  {
    name: "Kelly Drive (Schuylkill River Trail)",
    city: "Philadelphia",
    distance: "4.5 mi one way (9 mi out-and-back)",
    difficulty: "Easy",
    description: "Philadelphia's beloved riverside run — flat, paved, and beautiful. From the Art Museum steps, run north along the river through Fairmount Park. Boathouses line the water and rowing clubs are out early. Genuinely stunning.",
    highlights: ["Boathouse Row at sunrise (lit up)", "Rowing crews on the water", "Completely flat and paved", "The Rocky steps as a warm-up"],
    startPoint: "Philadelphia Museum of Art (Rocky Steps) — run up the steps, then go!",
    link: "https://www.schuylkillbanks.org",
    lat: 39.9656,
    lng: -75.1810,
  },
  {
    name: "Charles River Esplanade Loop",
    city: "Boston",
    distance: "~4 mi loop",
    difficulty: "Easy",
    description: "Boston's most loved running path — a 4-mile loop along the Charles River between the Longfellow and Mass Ave bridges. Flat, paved, with Boston's skyline on one side and Cambridge on the other. Crews out rowing at dawn make this unforgettable.",
    highlights: ["MIT and Harvard boathouses visible", "Boston skyline reflections on water", "Flat, fast, well-lit", "Iconic Hatch Shell bandstand midway"],
    startPoint: "Hatch Shell, Charles River Esplanade (near Arlington T stop)",
    link: "https://www.esplanade.org/activities/running",
    lat: 42.3566,
    lng: -71.0742,
  },
];

export const hikingOptions: HikingOption[] = [
  {
    name: "Bear Mountain State Park",
    nearCity: "New York City",
    travelTime: "~1.5h by car or NJ Transit + bus",
    trailLength: "2–8 mi (multiple trails)",
    difficulty: "Moderate",
    description: "The best day hike from NYC. Summit of Perkins Memorial Drive has sweeping Hudson Valley views. The Appalachian Trail crosses here. Perkins Memorial Tower at the top. Incredible on a clear summer day.",
    bestFor: "Hudson Valley panoramas, Appalachian Trail experience, lake swimming",
    link: "https://parks.ny.gov/parks/bearmountain",
    lat: 41.3148,
    lng: -74.0022,
  },
  {
    name: "Breakneck Ridge",
    nearCity: "New York City",
    travelTime: "~1.5h by Metro-North train from Grand Central",
    trailLength: "~5 mi loop",
    difficulty: "Challenging",
    description: "The most popular day hike from NYC — and one of the most dramatic. The opening scramble is hands-and-feet rock climbing with stunning Hudson River views at the top. Take the Metro-North Hudson Line from Grand Central straight to the trailhead.",
    bestFor: "Rock scrambling, Hudson River views, no car needed (train access)",
    link: "https://www.dec.ny.gov/outdoor/9452.html",
    lat: 41.4373,
    lng: -73.9843,
  },
  {
    name: "Great Falls Park (Potomac)",
    nearCity: "Washington DC",
    travelTime: "~25 min by car (Maryland side)",
    trailLength: "3–5 mi (multiple trails)",
    difficulty: "Easy",
    description: "The Potomac River crashes through a dramatic gorge just 15 miles from the White House — most DC visitors never know it exists. The Maryland-side overlooks are jaw-dropping. Billy Goat Trail section C is a great add-on.",
    bestFor: "Dramatic waterfall views, easy access, no crowds on weekdays",
    link: "https://www.nps.gov/grfa/index.htm",
    lat: 39.0002,
    lng: -77.2479,
  },
  {
    name: "Old Rag Mountain (Shenandoah)",
    nearCity: "Washington DC",
    travelTime: "~1.5h by car",
    trailLength: "9 mi loop",
    difficulty: "Challenging",
    description: "One of the most famous hikes on the entire East Coast. The summit ridge scramble is legendary — a full-body rock puzzle. Views from the top stretch for 50+ miles over the Shenandoah Valley. Go early to beat the crowds.",
    bestFor: "Epic ridge scramble, Shenandoah Valley panoramas, bucket-list hike",
    link: "https://www.nps.gov/shen/planyourvisit/old-rag-mountain.htm",
    lat: 38.5654,
    lng: -78.2914,
  },
  {
    name: "Blue Hills Reservation",
    nearCity: "Boston",
    travelTime: "~20 min by car or commuter rail (Canton Junction)",
    trailLength: "2–7 mi (multiple trails)",
    difficulty: "Easy",
    description: "6,500 acres of rolling hills and forests, just 10 miles south of downtown Boston. Great Blue Hill summit has panoramic views all the way to the ocean. Uncrowded, well-marked, and remarkably wild for being so close to a major city.",
    bestFor: "Easy summit views, escape from the city, wide trail options",
    link: "https://www.mass.gov/locations/blue-hills-reservation",
    lat: 42.2126,
    lng: -71.1151,
  },
  {
    name: "Franconia Ridge Loop (White Mountains, NH)",
    nearCity: "Boston",
    travelTime: "~2.5h by car",
    trailLength: "8.9 mi loop",
    difficulty: "Challenging",
    description: "One of the finest ridge walks in the eastern United States. A classic loop through Franconia Notch: summit Little Haystack, walk the exposed ridge to Mt. Lafayette, and descend through the valley. Views in every direction from above treeline.",
    bestFor: "Above-treeline ridge walking, East Coast mountain scenery, unforgettable views",
    link: "https://www.fs.usda.gov/whitemountain",
    lat: 44.1578,
    lng: -71.6809,
  },
];

export const hiddenGems: HiddenGem[] = [
  // New York City
  {
    name: "Governors Island",
    city: "New York City",
    category: "Island / Viewpoint",
    description: "A car-free island in Upper New York Bay accessible by a short ferry from Lower Manhattan. Lush parks, art installations, historic forts, and the absolute best unobstructed view of the Manhattan skyline you will ever see — with almost no tourists.",
    insiderTip: "Take the 10-minute ferry from the Battery Maritime Building ($4 round trip). The view from the Hammock Grove facing Manhattan is something special. No cars, no crowds, just skyline.",
    link: "https://www.govisland.com",
    lat: 40.6892,
    lng: -74.0166,
  },
  {
    name: "Gantry Plaza State Park (Queens)",
    city: "New York City",
    category: "Waterfront / Viewpoint",
    description: "Long Island City's waterfront park has the best Manhattan skyline view in the city — better than Brooklyn Bridge Park, with far fewer people. The Pepsi-Cola sign, Chrysler Building, and midtown towers all line up perfectly across the East River.",
    insiderTip: "Take the 7 train to Vernon Blvd–Jackson Ave. Come at sunset. You'll have the view largely to yourself while tourists pile onto the Brooklyn Bridge.",
    link: "https://parks.ny.gov/parks/gantryplaza",
    lat: 40.7467,
    lng: -73.9578,
  },
  {
    name: "The Cloisters",
    city: "New York City",
    category: "Museum / Viewpoint",
    description: "The Met's medieval art branch occupies a reconstructed monastery at the very northern tip of Manhattan, in Fort Tryon Park, overlooking the Hudson River and the Palisades. Tapestries, stained glass, and Romanesque chapels — all with almost no visitors.",
    insiderTip: "Included in your Met ticket ($30). Take the A train to 190th St. The view from the terrace over the Hudson is otherworldly and almost nobody makes the trip.",
    link: "https://www.metmuseum.org/visit/met-cloisters",
    lat: 40.8648,
    lng: -73.9317,
  },
  // Washington DC
  {
    name: "Theodore Roosevelt Island",
    city: "Washington DC",
    category: "Nature Reserve",
    description: "An 88-acre forested island in the Potomac River, accessible only by a short footbridge from the Virginia bank. In the middle of a major city, it feels completely wild — a rare patch of old-growth forest with a central memorial plaza to TR.",
    insiderTip: "Accessible from the George Washington Memorial Parkway (Virginia side). Combine with a run along the Potomac. Almost no tourists know this exists despite being 5 minutes from Georgetown.",
    link: "https://www.nps.gov/this/index.htm",
    lat: 38.8975,
    lng: -77.0626,
  },
  {
    name: "Meridian Hill Park",
    city: "Washington DC",
    category: "Park / Viewpoint",
    description: "A terraced formal park on a 16th Street hill in Columbia Heights, featuring a stunning 13-basin cascading fountain — one of the longest in North America. Statues of Joan of Arc and Dante, and panoramic views south over the city.",
    insiderTip: "Very much a local neighbourhood park. Sunday afternoon drum circles are a DC tradition here. Upper terrace gives an excellent elevated view over NW DC. Almost zero tourists.",
    link: "https://www.nps.gov/mehi/index.htm",
    lat: 38.9285,
    lng: -77.0364,
  },
  {
    name: "US National Arboretum",
    city: "Washington DC",
    category: "Garden / Nature",
    description: "446 acres of woodland garden run by the USDA, 15 minutes from the Capitol. Azalea collections, a Japanese bonsai museum, towering original Capitol columns relocated to a meadow — and practically zero visitors on a weekday.",
    insiderTip: "The Capitol Columns stand in an open meadow — 22 original sandstone columns from the 1828 Capitol portico, now framing an American elm. One of DC's most surreal and photogenic spots with barely a soul around.",
    link: "https://www.usna.usda.gov",
    lat: 38.9121,
    lng: -76.9741,
  },
  // Philadelphia
  {
    name: "Elfreth's Alley",
    city: "Philadelphia",
    category: "Historic Street",
    description: "America's oldest continuously inhabited residential street, dating to 1702. A narrow cobblestone alley of Federal-style rowhouses that feels unchanged for 300 years. Just steps from the touristy Independence area but almost always quiet.",
    insiderTip: "Enter from 2nd Street between Arch and Race. Best early in the morning before any visitors arrive. No entry fee — just walk through and soak in 300 years of living history.",
    link: "https://www.elfrethsalley.org",
    lat: 39.9531,
    lng: -75.1448,
  },
  {
    name: "Fairmount Water Works",
    city: "Philadelphia",
    category: "Historic Site / Viewpoint",
    description: "A stunning Neoclassical pumphouse on the Schuylkill River, directly below the Philadelphia Museum of Art. Built in 1815, it was once considered the most beautiful industrial building in America. Interpretive centre inside, gorgeous riverside setting.",
    insiderTip: "Most Art Museum visitors walk straight past it. Follow the path down the hill from the Rocky Steps — the view back up at the museum from the river walk is spectacular and entirely crowd-free.",
    link: "https://fairmountwaterworks.org",
    lat: 39.9675,
    lng: -75.1830,
  },
  // Boston
  {
    name: "Castle Island",
    city: "Boston",
    category: "Waterfront / Fort / Viewpoint",
    description: "An 18th-century waterfront fort on a peninsula jutting into Boston Harbor in South Boston. Free to visit, with panoramic views of the harbour, Logan Airport planes, and the Boston skyline. Fort Independence is one of the oldest fortifications in the US.",
    insiderTip: "Take the 10 bus from Downtown Crossing (free with CharlieCard). Very much a local South Boston spot — buy a famous Sullivan's Frozen Custard and walk the outer loop of the peninsula at sunset.",
    link: "https://www.mass.gov/locations/castle-island",
    lat: 42.3343,
    lng: -71.0107,
  },
  {
    name: "Arnold Arboretum",
    city: "Boston",
    category: "Garden / Nature",
    description: "281 acres of living tree museum managed by Harvard, free to visit. Thousands of labelled trees from around the world, a striking Chinese Path, and elevated ridge walks with views over the Boston skyline. Absolutely stunning in June/July.",
    insiderTip: "Take the Orange Line to Forest Hills — the main entrance is a 5-minute walk. Climb to the top of Bussey Hill for the best skyline view in Boston that most visitors have never heard of.",
    link: "https://arboretum.harvard.edu",
    lat: 42.3060,
    lng: -71.1218,
  },
  {
    name: "Mount Auburn Cemetery",
    city: "Boston",
    category: "Historic / Nature",
    description: "America's first garden cemetery (1831) in Cambridge — a 175-acre Victorian landscape of winding paths, ponds, and monument-studded hills. The tower at the top of the hill gives a 360° view over Greater Boston. Peaceful, beautiful, and unlike any other place.",
    insiderTip: "Take the 71 or 73 bus from Harvard Square. Washington Tower at the summit gives one of the best and most unusual views of the Boston skyline — and you'll likely have it entirely to yourself.",
    link: "https://mountauburn.org",
    lat: 42.3728,
    lng: -71.1468,
  },
];

// ── Music & Nightlife ─────────────────────────────────────────────────────────

export interface PlaylistTrack {
  title: string;
  artist: string;
  tag: "Bollywood" | "International";
  vibe: string;
  mood: string;
}

export interface PlaylistMood {
  id: string;
  label: string;
  emoji: string;
  description: string;
  tracks: PlaylistTrack[];
}

export interface NightlifeVenue {
  name: string;
  city: string;
  neighborhood: string;
  type: string;
  vibe: string;
  crowd: string;
  musicGenre: string;
  nonDrinkerNote: string;
  bestTime: string;
  coverCharge: string;
}

export const playlistMoods: PlaylistMood[] = [
  {
    id: "arrival-hype",
    label: "City Arrival Hype",
    emoji: "🛬",
    description: "The moment you land, collect your bags, and step into the city. Turn these on as the taxi or subway pulls you toward Manhattan.",
    tracks: [
      { title: "Saturday Saturday", artist: "Badshah ft. Indeep Bakshi", tag: "Bollywood", vibe: "High-energy banger — pure arrival energy", mood: "arrival-hype" },
      { title: "Abcd", artist: "Badshah", tag: "Bollywood", vibe: "Catchy hook, instant hype lift", mood: "arrival-hype" },
      { title: "Cheap Thrills", artist: "Sia", tag: "International", vibe: "Euphoric and carefree — perfect first-city feeling", mood: "arrival-hype" },
      { title: "Blinding Lights", artist: "The Weeknd", tag: "International", vibe: "Synth-driven rush that mirrors city lights at night", mood: "arrival-hype" },
      { title: "Desi Beat", artist: "Badshah", tag: "Bollywood", vibe: "Swagger-loaded groove for first-day confidence", mood: "arrival-hype" },
      { title: "Level Up", artist: "Ciara", tag: "International", vibe: "Motivational anthem — you just flew 20 hours, you earned this", mood: "arrival-hype" },
    ],
  },
  {
    id: "street-walks",
    label: "Walking the Streets",
    emoji: "🚶",
    description: "Background music for wandering Central Park, crossing the Brooklyn Bridge, exploring the National Mall, or just getting lost between landmarks.",
    tracks: [
      { title: "Gallan Goodiyaan", artist: "Shankar-Ehsaan-Loy (Dil Dhadakne Do)", tag: "Bollywood", vibe: "Joyful, celebratory — tailor-made for city exploration", mood: "street-walks" },
      { title: "Badtameez Dil", artist: "Pritam (Yeh Jawaani Hai Deewani)", tag: "Bollywood", vibe: "Fun and breezy — pairs well with sunny afternoon walks", mood: "street-walks" },
      { title: "Iktara", artist: "Amit Trivedi (Wake Up Sid)", tag: "Bollywood", vibe: "Gentle indie folk — perfect for a reflective stroll", mood: "street-walks" },
      { title: "Walking on Sunshine", artist: "Katrina & The Waves", tag: "International", vibe: "Impossibly happy — the perfect park anthem", mood: "street-walks" },
      { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", tag: "International", vibe: "Warm, groovy pop — for when the city looks beautiful", mood: "street-walks" },
      { title: "Happy", artist: "Pharrell Williams", tag: "International", vibe: "The universal feel-good track that works everywhere", mood: "street-walks" },
      { title: "London Thumakda", artist: "Neha Kakkar (Queen)", tag: "Bollywood", vibe: "Quirky, upbeat — oddly perfect for an international city wander", mood: "street-walks" },
    ],
  },
  {
    id: "evening-wind-down",
    label: "Evening Wind-Down",
    emoji: "🌆",
    description: "Sunset from the High Line, a quiet moment at the Lincoln Memorial after crowds leave, or a post-dinner walk back to the hotel.",
    tracks: [
      { title: "Tum Hi Ho", artist: "Arijit Singh (Aashiqui 2)", tag: "Bollywood", vibe: "Soulful, introspective — the city at dusk deserves this", mood: "evening-wind-down" },
      { title: "Channa Mereya", artist: "Arijit Singh (Ae Dil Hai Mushkil)", tag: "Bollywood", vibe: "Melancholic beauty — for sunsets and slow walks", mood: "evening-wind-down" },
      { title: "City of Stars", artist: "Ryan Gosling & Emma Stone (La La Land)", tag: "International", vibe: "Dreamy and cinematic — exactly right for golden hour", mood: "evening-wind-down" },
      { title: "Lose You to Love Me", artist: "Selena Gomez", tag: "International", vibe: "Soft and reflective for a quieter evening mood", mood: "evening-wind-down" },
      { title: "Jag Ghoomeya", artist: "Rahat Fateh Ali Khan (Sultan)", tag: "Bollywood", vibe: "Soulful Sufi notes — beautiful for late-evening walks", mood: "evening-wind-down" },
      { title: "Fix You", artist: "Coldplay", tag: "International", vibe: "Emotionally grounding — perfect solo-traveller soundtrack", mood: "evening-wind-down" },
    ],
  },
  {
    id: "party-groove",
    label: "Late Night Groove",
    emoji: "🎉",
    description: "You're out — rooftop bar, jazz club, or dancing floor. This playlist is for absorbing the energy and feeling alive in the city after dark.",
    tracks: [
      { title: "Kar Gayi Chull", artist: "Badshah & Fazilpuria (Kapoor & Sons)", tag: "Bollywood", vibe: "Groovy, irresistible hook — instant dancefloor energy", mood: "party-groove" },
      { title: "Dj Waley Babu", artist: "Badshah ft. Aastha Gill", tag: "Bollywood", vibe: "Made for dancing — loud and unabashedly fun", mood: "party-groove" },
      { title: "Balam Pichkari", artist: "Vishal-Shekhar (Yeh Jawaani Hai Deewani)", tag: "Bollywood", vibe: "Festival energy — the track that turns any room into a party", mood: "party-groove" },
      { title: "Shake It Off", artist: "Taylor Swift", tag: "International", vibe: "Effortless fun — impossible to stand still during this one", mood: "party-groove" },
      { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", tag: "International", vibe: "Vintage funk groove that works at every venue", mood: "party-groove" },
      { title: "As It Was", artist: "Harry Styles", tag: "International", vibe: "Modern groove — danceable and cool without being overwhelming", mood: "party-groove" },
      { title: "Illegal Weapon", artist: "Jasmine Sandlas & Garry Sandhu", tag: "Bollywood", vibe: "Punchy Punjabi pop — guaranteed energy boost", mood: "party-groove" },
      { title: "Senorita", artist: "Shawn Mendes & Camila Cabello", tag: "International", vibe: "Warm Latin groove — great for rooftop summer vibes", mood: "party-groove" },
    ],
  },
];

export const nightlifeVenues: NightlifeVenue[] = [
  // NYC
  {
    name: "230 Fifth Rooftop Bar",
    city: "New York City",
    neighborhood: "NoMad / Flatiron",
    type: "Rooftop Bar",
    vibe: "NYC's largest open-air rooftop with an insane Empire State Building view. Festive crowd, outdoor heaters, incredible city panorama.",
    crowd: "Mixed 25–45, tourists and locals, lively but not rowdy",
    musicGenre: "Top 40, Pop, Hip-Hop",
    nonDrinkerNote: "Mocktails and fresh juices available. You pay the same cover as drinkers and can stay as long as you like — no drink minimum.",
    bestTime: "9pm–midnight (weekends)",
    coverCharge: "$20–30 (may include 1 drink token)",
  },
  {
    name: "Jazzercise at Smalls Jazz Club",
    city: "New York City",
    neighborhood: "West Village",
    type: "Jazz Club",
    vibe: "One of NYC's most authentic and intimate jazz venues — a basement club where serious musicians play late into the night. Close-up, real jazz, no gimmicks.",
    crowd: "Jazz enthusiasts, locals, laid-back mixed ages",
    musicGenre: "Traditional & Contemporary Jazz",
    nonDrinkerNote: "Cover charge includes unlimited soft drinks and water at the bar. Zero pressure to order alcohol — the music is the entire point here.",
    bestTime: "10pm onwards (late sets are best)",
    coverCharge: "$25 (soft drinks included)",
  },
  {
    name: "Westlight at The William Vale",
    city: "New York City",
    neighborhood: "Williamsburg, Brooklyn",
    type: "Rooftop Bar",
    vibe: "22nd-floor rooftop with a jaw-dropping Manhattan skyline view from Brooklyn. Stylish, more relaxed than Manhattan rooftops, impossibly beautiful views.",
    crowd: "Brooklyn creative crowd, stylish 25–40s",
    musicGenre: "Chill electronic, lounge",
    nonDrinkerNote: "Excellent mocktail menu and soft drink options. Dress smart — they enforce a dress code but entry without alcohol is no issue.",
    bestTime: "8pm–11pm",
    coverCharge: "Free entry (reservation recommended)",
  },
  {
    name: "Elsewhere",
    city: "New York City",
    neighborhood: "Bushwick, Brooklyn",
    type: "Live Music & Dance Venue",
    vibe: "Multi-room Brooklyn venue with rooftop, basement club, and main hall. Independent artists, electronic music nights, and the heartbeat of Brooklyn's underground scene.",
    crowd: "Young Brooklyn crowd, music lovers, 21–35",
    musicGenre: "Electronic, Indie, Alternative",
    nonDrinkerNote: "18+ events often available. Non-alcoholic drinks at bar. The music and energy are the draw — nobody cares what's in your cup.",
    bestTime: "10pm onwards",
    coverCharge: "$15–35 depending on event",
  },
  // DC
  {
    name: "Mi Vida Rooftop at The Wharf",
    city: "Washington DC",
    neighborhood: "The Wharf / Southwest Waterfront",
    type: "Rooftop Bar",
    vibe: "Stunning rooftop overlooking the Potomac River and DC's newest waterfront district. Mexican-inspired, colourful, lively without being a nightclub.",
    crowd: "Professionals, mixed 25–45, DC locals",
    musicGenre: "Latin, Pop, Top 40",
    nonDrinkerNote: "Excellent agua fresca, horchata, and non-alcoholic mocktails. The view and vibe make it worth going regardless of what you're drinking.",
    bestTime: "7pm–11pm",
    coverCharge: "No cover (reservation recommended)",
  },
  {
    name: "Blues Alley",
    city: "Washington DC",
    neighborhood: "Georgetown",
    type: "Jazz & Blues Club",
    vibe: "DC's most famous jazz supper club since 1965. Intimate, legendary venue with world-class performers. Dizzy Gillespie and Wynton Marsalis have played here. A genuine institution.",
    crowd: "Jazz aficionados, couples, older crowd on weeknights",
    musicGenre: "Jazz, Blues, Soul",
    nonDrinkerNote: "Dinner + show format — you can order food and non-alcoholic drinks throughout. No alcohol pressure; the performance is the focus. Food minimum applies.",
    bestTime: "Shows at 8pm and 10pm",
    coverCharge: "$20–45 + food/drink minimum (~$15)",
  },
  {
    name: "Echostage",
    city: "Washington DC",
    neighborhood: "Northeast DC",
    type: "EDM & Electronic Venue",
    vibe: "One of the top-rated nightclubs in North America. Massive venue, world-class DJs, incredible sound system. If you want to feel the energy of a real American superclub, this is it.",
    crowd: "Young 21–35, electronic music fans, high energy",
    musicGenre: "Electronic, EDM, House, Techno",
    nonDrinkerNote: "Non-alcoholic beverages available at the bar. The sound, lights, and crowd energy are the experience — no drinking required to have the time of your life.",
    bestTime: "11pm–3am (weekends)",
    coverCharge: "$30–50 depending on DJ",
  },
  {
    name: "Pearl Street Warehouse",
    city: "Washington DC",
    neighborhood: "The Wharf",
    type: "Live Music Venue",
    vibe: "Intimate live music venue at DC's vibrant Wharf development. Diverse line-up from Americana to indie rock to jazz. Waterfront location, no velvet-rope attitude.",
    crowd: "Music lovers, young professionals, 25–45",
    musicGenre: "Live Music — varies (rock, indie, folk, jazz)",
    nonDrinkerNote: "Full bar with non-alcoholic options. Casual and welcoming — no pressure to drink, just enjoy the live act.",
    bestTime: "Shows typically 8pm–11pm",
    coverCharge: "$10–25 depending on artist",
  },
  // Philadelphia
  {
    name: "Stratus Rooftop Lounge",
    city: "Philadelphia",
    neighborhood: "Center City",
    type: "Rooftop Bar",
    vibe: "Panoramic rooftop views over the Philly skyline and the Philadelphia Museum of Art. Sophisticated vibe, elegant setting, far less touristy than NYC rooftops.",
    crowd: "Upscale 25–45, Philly young professionals",
    musicGenre: "Lounge, Chill House, Top 40",
    nonDrinkerNote: "Non-alcoholic cocktails and juices on the menu. Smart casual dress code. Entry and staying is no issue for non-drinkers.",
    bestTime: "8pm–midnight",
    coverCharge: "No cover (dress code enforced)",
  },
  {
    name: "Ortlieb's Jazz Club",
    city: "Philadelphia",
    neighborhood: "Kensington",
    type: "Jazz Club",
    vibe: "A beloved neighbourhood jazz bar with an authentic, unpretentious atmosphere. Home of Philly's jazz scene — regulars, musicians, and lovers of the genre co-exist beautifully.",
    crowd: "Local jazz fans, musicians, mixed ages",
    musicGenre: "Jazz, Blues, Funk",
    nonDrinkerNote: "Soft drinks available. Very relaxed, community-oriented vibe — nobody is watching what you drink. Just a place where people love music.",
    bestTime: "9pm–1am (weekends)",
    coverCharge: "$10–20",
  },
  {
    name: "Underground Arts",
    city: "Philadelphia",
    neighborhood: "Chinatown / Center City",
    type: "Live Music & Arts Venue",
    vibe: "An impressive arts venue in a converted church basement. Hosts indie, alternative, hip-hop, and world music acts in an atmospheric setting with great acoustics.",
    crowd: "Creative crowd, young adults, music enthusiasts",
    musicGenre: "Indie, Hip-Hop, Alternative, Electronic",
    nonDrinkerNote: "Non-alcoholic beverages available. Arts-forward crowd is extremely open and non-judgmental — a great environment regardless of drinking preferences.",
    bestTime: "Doors usually 7pm–8pm",
    coverCharge: "$15–35 depending on event",
  },
  // Boston
  {
    name: "Lookout Rooftop Bar at Envoy Hotel",
    city: "Boston",
    neighborhood: "Seaport District",
    type: "Rooftop Bar",
    vibe: "Boston Harbour and Fort Point Channel views from a stylish hotel rooftop. One of Boston's best views — the Boston skyline at night is genuinely beautiful from up here.",
    crowd: "Hotel guests, young professionals, tourists, 25–40",
    musicGenre: "Top 40, Chill Pop, Live DJ on weekends",
    nonDrinkerNote: "Mocktails and non-alcoholic drinks available. Reservation recommended for weekends. You're there for the view, which is completely free to appreciate.",
    bestTime: "7pm–11pm",
    coverCharge: "No cover (reservations recommended on weekends)",
  },
  {
    name: "Wally's Café Jazz Club",
    city: "Boston",
    neighborhood: "South End",
    type: "Jazz Club",
    vibe: "Boston's oldest jazz club (since 1947) — tiny, historic, and absolutely electric. Live jazz every night from Berklee students and seasoned professionals. This is the real thing.",
    crowd: "Jazz lovers, Berklee students, mixed ages",
    musicGenre: "Jazz, Blues, R&B — live nightly",
    nonDrinkerNote: "Soft drinks and water at the bar. The entire bar is about 10 tables — the music fills every inch. Non-drinkers are regulars here. Cash preferred.",
    bestTime: "9pm–1am (gets packed after 10pm)",
    coverCharge: "No cover (one of Boston's best free live music spots)",
  },
  {
    name: "City Winery Boston",
    city: "Boston",
    neighborhood: "South End / Ink Block",
    type: "Live Music Venue",
    vibe: "Intimate indoor concert venue with consistently great live acts — from jazz to Americana to international artists. Restaurant setting with excellent food and a proper stage.",
    crowd: "Music-loving adults, 30–55, mixed",
    musicGenre: "Varied — jazz, folk, Americana, world music",
    nonDrinkerNote: "Full non-alcoholic drinks menu. Food is the main pairing here and it's excellent. Show-focused experience where the music is central — no awkwardness for non-drinkers.",
    bestTime: "Shows typically 7:30pm–10:30pm",
    coverCharge: "$20–50 depending on artist",
  },
];

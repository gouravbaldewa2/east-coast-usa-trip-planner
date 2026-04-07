import { useState } from "react";
import { MapPin, Star, UtensilsCrossed, ExternalLink } from "lucide-react";

type Restaurant = {
  name: string;
  cuisine: string;
  description: string;
  price: string;
  rating: number;
  reviews: string;
  address: string;
  neighborhood: string;
  tag: "Fully Vegan" | "Fully Vegetarian" | "Vegetarian-Friendly";
};

type CityData = {
  city: string;
  restaurants: Restaurant[];
};

const cityColors: Record<string, { bar: string; active: string; activeBg: string; badge: string }> = {
  "New York City": {
    bar: "bg-indigo-600",
    active: "text-indigo-600 border-indigo-600",
    activeBg: "bg-indigo-50",
    badge: "bg-indigo-100 text-indigo-700",
  },
  "Washington DC": {
    bar: "bg-red-600",
    active: "text-red-600 border-red-600",
    activeBg: "bg-red-50",
    badge: "bg-red-100 text-red-700",
  },
  Philadelphia: {
    bar: "bg-amber-600",
    active: "text-amber-600 border-amber-600",
    activeBg: "bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
  },
  Boston: {
    bar: "bg-emerald-600",
    active: "text-emerald-600 border-emerald-600",
    activeBg: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
};

const tagColors: Record<Restaurant["tag"], string> = {
  "Fully Vegan": "bg-green-100 text-green-700",
  "Fully Vegetarian": "bg-lime-100 text-lime-700",
  "Vegetarian-Friendly": "bg-teal-100 text-teal-700",
};

const foodData: CityData[] = [
  {
    city: "New York City",
    restaurants: [
      {
        name: "Peacefood Cafe",
        cuisine: "Vegan / Global",
        description:
          "A beloved fully vegan café with a globally inspired menu — think falafel wraps, avocado toast, and house-made desserts. Calm, airy vibe perfect for a solo meal.",
        price: "$$",
        rating: 4.5,
        reviews: "1,200+",
        address: "460 Amsterdam Ave",
        neighborhood: "Upper West Side",
        tag: "Fully Vegan",
      },
      {
        name: "Bhojan",
        cuisine: "Indian (Gujarati/Rajasthani)",
        description:
          "Authentic Indian vegetarian thalis with Gujarati and Rajasthani flavours. An affordable taste of home away from home in the heart of Queens' Little India.",
        price: "$",
        rating: 4.3,
        reviews: "600+",
        address: "74-14 37th Ave",
        neighborhood: "Jackson Heights, Queens",
        tag: "Fully Vegetarian",
      },
      {
        name: "Taim",
        cuisine: "Israeli / Middle Eastern",
        description:
          "Famous for crispy falafel and shakshuka. Fast-casual and filling — a perfect cheap lunch stop between sightseeing. Multiple Manhattan locations for convenience.",
        price: "$",
        rating: 4.4,
        reviews: "2,500+",
        address: "Multiple Manhattan locations",
        neighborhood: "Multiple Manhattan locations",
        tag: "Vegetarian-Friendly",
      },
      {
        name: "Hoomoos Asli",
        cuisine: "Middle Eastern",
        description:
          "Silky hummus bowls and mezze platters in a cosy East Village spot. Simple, satisfying, and reliably good for a budget-friendly lunch or dinner.",
        price: "$",
        rating: 4.4,
        reviews: "800+",
        address: "100 Kenmare St",
        neighborhood: "East Village",
        tag: "Vegetarian-Friendly",
      },
      {
        name: "Superiority Burger",
        cuisine: "American Veggie",
        description:
          "Creative smashed veggie burgers, rotating sides, and cult-favourite soft-serve. Tiny counter-service spot with big flavour — grab a burger and eat in Tompkins Square Park.",
        price: "$",
        rating: 4.4,
        reviews: "700+",
        address: "119 Avenue A",
        neighborhood: "East Village",
        tag: "Fully Vegetarian",
      },
    ],
  },
  {
    city: "Washington DC",
    restaurants: [
      {
        name: "Shouk",
        cuisine: "Israeli / Plant-Based",
        description:
          "Fully plant-based Israeli fast casual with crispy falafel burgers, loaded bowls, and tahini shakes. Quick, fresh, and incredibly flavourful.",
        price: "$",
        rating: 4.5,
        reviews: "1,100+",
        address: "655 K St NW",
        neighborhood: "Penn Quarter",
        tag: "Fully Vegan",
      },
      {
        name: "Rasika (lunch)",
        cuisine: "Modern Indian",
        description:
          "Award-winning modern Indian with inventive vegetarian dishes like palak chaat. The lunch menu offers the same quality at friendlier prices — a splurge worth making.",
        price: "$$",
        rating: 4.6,
        reviews: "3,800+",
        address: "633 D St NW",
        neighborhood: "Penn Quarter",
        tag: "Vegetarian-Friendly",
      },
      {
        name: "Zaytinya (lunch/happy hour)",
        cuisine: "Mediterranean / Mezze",
        description:
          "José Andrés' celebrated Mediterranean mezze restaurant. Go for lunch or happy hour to enjoy the vegetarian-rich menu — stuffed grape leaves, falafel, labneh — at lower prices.",
        price: "$$",
        rating: 4.4,
        reviews: "5,200+",
        address: "701 9th St NW",
        neighborhood: "Penn Quarter",
        tag: "Vegetarian-Friendly",
      },
      {
        name: "Amsterdam Falafelshop",
        cuisine: "Middle Eastern",
        description:
          "Build-your-own falafel wraps and bowls piled high with toppings. Casual, cheap, and consistently satisfying — a go-to for budget vegetarian eating in DC.",
        price: "$",
        rating: 4.4,
        reviews: "900+",
        address: "2425 18th St NW",
        neighborhood: "Adams Morgan",
        tag: "Vegetarian-Friendly",
      },
      {
        name: "Daru",
        cuisine: "Indian-Inspired",
        description:
          "Indian-inspired cocktail bar with inventive small plates — think masala fries, dahi puri, and paneer skewers. Great for an evening out on the vibrant H Street corridor.",
        price: "$$",
        rating: 4.5,
        reviews: "750+",
        address: "1451 H St NE",
        neighborhood: "H Street Corridor",
        tag: "Vegetarian-Friendly",
      },
    ],
  },
  {
    city: "Philadelphia",
    restaurants: [
      {
        name: "Vedge (lunch)",
        cuisine: "Upscale Vegetable",
        description:
          "One of America's most celebrated vegetable restaurants. The lunch menu makes this upscale experience accessible — creative, seasonal plant-based cuisine at its finest.",
        price: "$$",
        rating: 4.5,
        reviews: "2,100+",
        address: "1221 Locust St",
        neighborhood: "Washington Square West",
        tag: "Fully Vegan",
      },
      {
        name: "Minerva Indian Restaurant",
        cuisine: "South Indian",
        description:
          "Reliable South Indian staples — dosas, idlis, sambar — at honest prices. A comfort stop for Indian vegetarians missing home food mid-trip.",
        price: "$",
        rating: 4.2,
        reviews: "400+",
        address: "1007 Race St",
        neighborhood: "Chinatown / Center City",
        tag: "Fully Vegetarian",
      },
      {
        name: "HipCityVeg",
        cuisine: "Plant-Based Fast Casual",
        description:
          "Fully plant-based wraps, bowls, and milkshakes with a feel-good vibe. Fast and filling — perfect for a quick lunch between Philadelphia's many historic sights.",
        price: "$",
        rating: 4.4,
        reviews: "800+",
        address: "121 S Broad St",
        neighborhood: "Center City",
        tag: "Fully Vegan",
      },
      {
        name: "Kabobeesh",
        cuisine: "Pakistani / Indian",
        description:
          "Beloved Pakistani-Indian spot in West Philly with hearty vegetarian staples like dal makhani, chana masala, and freshly baked naan. Massive portions at student-friendly prices.",
        price: "$",
        rating: 4.3,
        reviews: "600+",
        address: "4201 Chestnut St",
        neighborhood: "West Philadelphia",
        tag: "Vegetarian-Friendly",
      },
      {
        name: "Nan Zhou Hand Drawn Noodle House",
        cuisine: "Chinese",
        description:
          "Hand-pulled noodles in rich vegetarian broth options in the heart of Philly's Chinatown. Simple, warming, and incredibly cheap — a hidden gem for noodle lovers.",
        price: "$",
        rating: 4.3,
        reviews: "500+",
        address: "1022 Race St",
        neighborhood: "Chinatown",
        tag: "Vegetarian-Friendly",
      },
    ],
  },
  {
    city: "Boston",
    restaurants: [
      {
        name: "Veggie Galaxy",
        cuisine: "American Diner (Vegetarian)",
        description:
          "A fully vegetarian diner serving classic American comfort food — pancakes, burgers, mac & cheese — with a retro vibe. Beloved by locals across the river in Cambridge.",
        price: "$",
        rating: 4.4,
        reviews: "1,600+",
        address: "450 Massachusetts Ave",
        neighborhood: "Central Square, Cambridge",
        tag: "Fully Vegetarian",
      },
      {
        name: "Clover Food Lab",
        cuisine: "Farm-to-Table Fast Casual",
        description:
          "Entirely plant-based fast casual with rotating seasonal menus — think chickpea fritters, grain bowls, and fresh-pressed juices. Multiple Boston locations make it very convenient.",
        price: "$",
        rating: 4.3,
        reviews: "1,200+",
        address: "Multiple Boston locations",
        neighborhood: "Multiple Boston locations",
        tag: "Fully Vegan",
      },
      {
        name: "Rangoli",
        cuisine: "South Indian",
        description:
          "Authentic South Indian dosas, uttapam, and thali meals at unbeatable prices. A neighbourhood favourite in Allston, popular with Boston's Indian student community.",
        price: "$",
        rating: 4.4,
        reviews: "700+",
        address: "129 Brighton Ave",
        neighborhood: "Allston",
        tag: "Fully Vegetarian",
      },
      {
        name: "Machu Picchu",
        cuisine: "Peruvian",
        description:
          "Family-run Peruvian restaurant with excellent vegetarian options including quinoa soups, stuffed peppers, and hearty vegetable stews. An adventurous and delicious stop.",
        price: "$$",
        rating: 4.2,
        reviews: "450+",
        address: "307 Meridian St",
        neighborhood: "East Boston",
        tag: "Vegetarian-Friendly",
      },
      {
        name: "Taiwan Cafe",
        cuisine: "Taiwanese",
        description:
          "Old-school Taiwanese comfort food with good tofu dishes, vegetable stir-fries, and scallion pancakes. Cash-only, no-frills, and deeply satisfying.",
        price: "$",
        rating: 4.3,
        reviews: "900+",
        address: "34 Oxford St",
        neighborhood: "Chinatown",
        tag: "Vegetarian-Friendly",
      },
    ],
  },
];

const cities = foodData.map((d) => d.city);

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-1">
      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      <span className="text-xs font-semibold text-gray-700">{rating.toFixed(1)}/5</span>
    </span>
  );
}

export default function FoodGuide() {
  const [activeCity, setActiveCity] = useState(cities[0]);

  const cityData = foodData.find((d) => d.city === activeCity)!;
  const colors = cityColors[activeCity];

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Food Guide</h2>
        <p className="text-gray-500 mt-1 text-sm">
          Vegetarian-friendly picks for Indian vegetarians exploring global cuisines. Budget-focused ($10–20/meal).
        </p>
      </div>

      {/* City tabs */}
      <div className="flex overflow-x-auto gap-2 no-scrollbar pb-1">
        {cities.map((city) => {
          const c = cityColors[city];
          const isActive = city === activeCity;
          return (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold border-2 transition-all
                ${isActive
                  ? `${c.active} ${c.activeBg} border-current`
                  : "border-gray-200 text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-800"
                }
              `}
            >
              {city}
            </button>
          );
        })}
      </div>

      {/* City heading */}
      <div className="flex items-center gap-3">
        <div className={`w-2 h-6 rounded-full ${colors.bar}`} />
        <div>
          <h3 className="font-bold text-gray-900">{activeCity}</h3>
          <p className="text-xs text-gray-500">{cityData.restaurants.length} vegetarian-friendly picks</p>
        </div>
      </div>

      {/* Restaurant cards */}
      <div className="space-y-3">
        {cityData.restaurants.map((r, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden"
          >
            <div className="px-5 py-4">
              {/* Header row */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-bold text-gray-900 text-sm">{r.name}</h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[r.tag]}`}>
                      {r.tag}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">{r.cuisine}</p>
                </div>
                <div className="flex-shrink-0 text-right">
                  <span className="text-lg font-bold text-blue-600">{r.price}</span>
                  <p className="text-xs text-gray-400">per meal</p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-2 text-xs text-gray-600 leading-relaxed">{r.description}</p>

              {/* Footer row */}
              <div className="mt-3 flex items-center gap-4 flex-wrap">
                <StarRating rating={r.rating} />
                <span className="text-xs text-gray-400">{r.reviews} reviews</span>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                  <span>{r.neighborhood}</span>
                </div>
              </div>

              {/* Address + Maps link */}
              <div className="mt-1.5 flex items-center gap-3 flex-wrap">
                <p className="text-xs text-gray-400">{r.address}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(r.name + " " + r.address + " " + activeCity)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 hover:text-green-800 transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  Google Maps
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips banner */}
      <div className="bg-green-50 border border-green-200 rounded-2xl px-5 py-4">
        <div className="flex items-center gap-2 mb-2">
          <UtensilsCrossed className="w-4 h-4 text-green-700" />
          <h3 className="font-bold text-green-900 text-sm">Vegetarian Tips</h3>
        </div>
        <ul className="space-y-1.5 text-xs text-green-800">
          <li className="flex gap-2"><span>•</span> Always mention you're vegetarian when ordering — "no meat, no fish" is the clearest phrasing in the US</li>
          <li className="flex gap-2"><span>•</span> Indian restaurants in Jackson Heights (NYC) and Allston (Boston) offer the most authentic vegetarian Indian meals</li>
          <li className="flex gap-2"><span>•</span> Yelp and Google Maps have vegetarian filters — useful for finding extras beyond this guide</li>
          <li className="flex gap-2"><span>•</span> Most grocery stores (Whole Foods, Trader Joe's) have excellent salad bars and hot food sections for cheap vegetarian meals</li>
        </ul>
      </div>
    </div>
  );
}

import { useState, lazy, Suspense } from "react";
import { ExternalLink, Coffee, Footprints, Mountain, Gem, MapPin, Clock, ChevronRight, Map } from "lucide-react";
import {
  coffeeShops,
  runningRoutes,
  hikingOptions,
  hiddenGems,
  type CoffeeShop,
  type RunningRoute,
  type HikingOption,
  type HiddenGem,
} from "@/data/tripData";
import { toExplorePins } from "@/components/explorePins";

const ExploreMapView = lazy(() => import("@/components/ExploreMapView"));

type SubView = "coffee" | "running" | "hiking" | "gems" | "map";

const cityOrder = ["New York City", "Washington DC", "Philadelphia", "Boston"];
const cityColors: Record<string, { bg: string; text: string; badge: string; dot: string }> = {
  "New York City": { bg: "bg-indigo-50", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-700", dot: "bg-indigo-500" },
  "Washington DC": { bg: "bg-red-50", text: "text-red-700", badge: "bg-red-100 text-red-700", dot: "bg-red-500" },
  Philadelphia: { bg: "bg-amber-50", text: "text-amber-700", badge: "bg-amber-100 text-amber-700", dot: "bg-amber-500" },
  Boston: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500" },
};

const difficultyColor: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-amber-100 text-amber-700",
  Challenging: "bg-red-100 text-red-700",
};

// ── Sub-views ────────────────────────────────────────────────────────────────

function CoffeeTab() {
  const [activeCity, setActiveCity] = useState("New York City");
  const filtered = coffeeShops.filter((c) => c.city === activeCity);

  return (
    <div className="space-y-4">
      <div className="px-4 py-3 bg-amber-50 rounded-xl border border-amber-200">
        <p className="text-xs text-amber-800 leading-relaxed">
          <span className="font-semibold">Specialty coffee tip:</span> All spots below are independent or craft roasters — no Starbucks needed. Most open by 7–8am, perfect after a morning run.
        </p>
      </div>

      {/* City switcher */}
      <div className="flex gap-2 flex-wrap">
        {cityOrder.filter((c) => coffeeShops.some((s) => s.city === c)).map((city) => {
          const col = cityColors[city];
          return (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCity === city ? `${col.badge} ring-2 ring-offset-1 ring-current` : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {city}
            </button>
          );
        })}
      </div>

      <div className="grid gap-3">
        {filtered.map((shop: CoffeeShop) => {
          const col = cityColors[shop.city] ?? cityColors["New York City"];
          return (
            <div key={shop.name} className="bg-white rounded-2xl border border-gray-200 p-4 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{shop.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${col.badge}`}>{shop.priceRange}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    {shop.neighborhood}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-2">{shop.description}</p>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">
                      ☕ {shop.specialty}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <a
                  href={shop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Website
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(shop.name + " " + shop.neighborhood + " " + shop.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-800 transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  Google Maps
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function RunningTab() {
  const [activeCity, setActiveCity] = useState("New York City");
  const filtered = runningRoutes.filter((r) => r.city === activeCity);

  return (
    <div className="space-y-4">
      <div className="px-4 py-3 bg-blue-50 rounded-xl border border-blue-200">
        <p className="text-xs text-blue-800 leading-relaxed">
          <span className="font-semibold">Morning run tip:</span> All routes are best before 8am — cooler temperatures in June/July heat and far fewer people. Bring a water bottle; fountains are plentiful in all parks.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {cityOrder.filter((c) => runningRoutes.some((r) => r.city === c)).map((city) => {
          const col = cityColors[city];
          return (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCity === city ? `${col.badge} ring-2 ring-offset-1 ring-current` : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {city}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4">
        {filtered.map((route: RunningRoute) => {
          const col = cityColors[route.city] ?? cityColors["New York City"];
          return (
            <div key={route.name} className="bg-white rounded-2xl border border-gray-200 p-4 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-8 h-8 rounded-xl ${col.bg} flex items-center justify-center flex-shrink-0`}>
                  <Footprints className={`w-4 h-4 ${col.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{route.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColor[route.difficulty]}`}>
                      {route.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="font-medium text-gray-700">{route.distance}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-3">{route.description}</p>

              <div className="flex items-start gap-1.5 text-xs text-gray-500 mb-3">
                <MapPin className="w-3 h-3 flex-shrink-0 mt-0.5 text-blue-500" />
                <span><span className="font-semibold text-gray-700">Start:</span> {route.startPoint}</span>
              </div>

              <div className="space-y-1 mb-3">
                {route.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-1.5 text-xs text-gray-600">
                    <ChevronRight className="w-3 h-3 text-green-500 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                {route.link && (
                  <a
                    href={route.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Route info
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {route.link && <span className="text-gray-300">|</span>}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(route.startPoint + " " + route.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-800 transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  Start on Maps
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HikingTab() {
  const [activeCity, setActiveCity] = useState("New York City");
  const filtered = hikingOptions.filter((h) => h.nearCity === activeCity);

  return (
    <div className="space-y-4">
      <div className="px-4 py-3 bg-green-50 rounded-xl border border-green-200">
        <p className="text-xs text-green-800 leading-relaxed">
          <span className="font-semibold">Trekking tip:</span> All options below are practical day trips — leave early morning, back by evening. June/July weather is warm; bring water, sunscreen, and good shoes. No permits needed for most trails.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {cityOrder.filter((c) => hikingOptions.some((h) => h.nearCity === c)).map((city) => {
          const col = cityColors[city];
          return (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCity === city ? `${col.badge} ring-2 ring-offset-1 ring-current` : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {city}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4">
        {filtered.map((hike: HikingOption) => {
          const col = cityColors[hike.nearCity] ?? cityColors["New York City"];
          return (
            <div key={hike.name} className="bg-white rounded-2xl border border-gray-200 p-4 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-8 h-8 rounded-xl ${col.bg} flex items-center justify-center flex-shrink-0`}>
                  <Mountain className={`w-4 h-4 ${col.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{hike.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColor[hike.difficulty]}`}>
                      {hike.difficulty}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-500 flex-wrap">
                    <span className="font-semibold text-gray-700">{hike.trailLength}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {hike.travelTime} from city
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-3">{hike.description}</p>

              <div className="flex items-start gap-1.5 text-xs text-gray-600 mb-3">
                <span className="font-semibold text-gray-700 flex-shrink-0">Best for:</span>
                <span>{hike.bestFor}</span>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                {hike.link && (
                  <a
                    href={hike.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Trail info
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {hike.link && <span className="text-gray-300">|</span>}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(hike.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-800 transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  Trailhead Map
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GemsTab() {
  const [activeCity, setActiveCity] = useState("New York City");
  const filtered = hiddenGems.filter((g) => g.city === activeCity);

  return (
    <div className="space-y-4">
      <div className="px-4 py-3 bg-purple-50 rounded-xl border border-purple-200">
        <p className="text-xs text-purple-800 leading-relaxed">
          <span className="font-semibold">Off-the-beaten-path:</span> These are places most tourists completely miss — less crowded, often free, and frequently better than the famous alternatives. Each one has an insider tip worth reading.
        </p>
      </div>

      <div className="flex gap-2 flex-wrap">
        {cityOrder.filter((c) => hiddenGems.some((g) => g.city === c)).map((city) => {
          const col = cityColors[city];
          return (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCity === city ? `${col.badge} ring-2 ring-offset-1 ring-current` : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {city}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4">
        {filtered.map((gem: HiddenGem) => {
          const col = cityColors[gem.city] ?? cityColors["New York City"];
          return (
            <div key={gem.name} className="bg-white rounded-2xl border border-gray-200 p-4 hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-8 h-8 rounded-xl ${col.bg} flex items-center justify-center flex-shrink-0`}>
                  <Gem className={`w-4 h-4 ${col.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{gem.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${col.badge}`}>{gem.category}</span>
                </div>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed mb-3">{gem.description}</p>

              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-3">
                <p className="text-xs text-yellow-900 leading-relaxed">
                  <span className="font-semibold">Insider tip:</span> {gem.insiderTip}
                </p>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                {gem.link && (
                  <a
                    href={gem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    More info
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
                {gem.link && <span className="text-gray-300">|</span>}
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(gem.name + " " + gem.city)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-800 transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  Google Maps
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

const subTabs: { id: SubView; label: string; icon: React.ReactNode }[] = [
  { id: "coffee", label: "Coffee", icon: <Coffee className="w-4 h-4" /> },
  { id: "running", label: "Running", icon: <Footprints className="w-4 h-4" /> },
  { id: "hiking", label: "Hiking & Trails", icon: <Mountain className="w-4 h-4" /> },
  { id: "gems", label: "Hidden Gems", icon: <Gem className="w-4 h-4" /> },
  { id: "map", label: "Map", icon: <Map className="w-4 h-4" /> },
];

export default function ExploreSection() {
  const [activeTab, setActiveTab] = useState<SubView>("coffee");
  const [mapCity, setMapCity] = useState<string | null>(null);

  const allPins = toExplorePins(coffeeShops, runningRoutes, hikingOptions, hiddenGems);
  const filteredPins = mapCity ? allPins.filter((p) => p.city === mapCity) : allPins;

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 mb-1">Explore</h2>
        <p className="text-xs text-gray-500">Coffee shops, morning runs, day hikes, and hidden gems across the trip</p>
      </div>

      {/* Sub-tab switcher (including Map) */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-5 pb-1">
        {subTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
              activeTab === tab.id
                ? "bg-gray-900 text-white shadow-sm"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "map" ? (
        <div className="space-y-4">
          {/* City filter for map */}
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setMapCity(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                mapCity === null ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Cities
            </button>
            {cityOrder.map((city) => {
              const col = cityColors[city];
              return (
                <button
                  key={city}
                  onClick={() => setMapCity(city)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    mapCity === city ? `${col.badge} ring-2 ring-offset-1 ring-current` : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {city}
                </button>
              );
            })}
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <Suspense fallback={<div className="h-[480px] bg-gray-50 flex items-center justify-center text-xs text-gray-400">Loading map…</div>}>
              <ExploreMapView items={filteredPins} selectedCity={mapCity} />
            </Suspense>
          </div>

          <p className="text-xs text-gray-400 text-center">
            {filteredPins.length} location{filteredPins.length !== 1 ? "s" : ""} shown — click a pin for details
          </p>
        </div>
      ) : (
        <>
          {activeTab === "coffee" && <CoffeeTab />}
          {activeTab === "running" && <RunningTab />}
          {activeTab === "hiking" && <HikingTab />}
          {activeTab === "gems" && <GemsTab />}
        </>
      )}
    </div>
  );
}

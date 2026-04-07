import { hotels } from "@/data/tripData";
import { ExternalLink, MapPin, Home, Map } from "lucide-react";

const cityOrder = ["New York City", "Washington DC", "Philadelphia", "Boston"];
const cityNights: Record<string, string> = {
  "New York City": "5 nights (Jun 20–24)",
  "Washington DC": "3 nights (Jun 25–27)",
  "Philadelphia": "1 night optional stopover (Jun 28)",
  "Boston": "3 nights (Jun 29–Jul 1)",
};

const cityColors: Record<string, string> = {
  "New York City": "bg-indigo-600",
  "Washington DC": "bg-red-600",
  "Philadelphia": "bg-amber-600",
  "Boston": "bg-emerald-600",
};

export default function HotelsSection() {
  const grouped = cityOrder.reduce((acc, city) => {
    acc[city] = hotels.filter((h) => h.city === city);
    return acc;
  }, {} as Record<string, typeof hotels>);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Hotels</h2>
        <p className="text-gray-500 mt-1 text-sm">
          Mid-range picks (3-star) across all four cities. Prices are estimates — verify on booking sites.
        </p>
      </div>

      {cityOrder.map((city) => {
        const cityHotels = grouped[city];
        if (!cityHotels || cityHotels.length === 0) return null;

        return (
          <div key={city}>
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-2 h-6 rounded-full ${cityColors[city]}`} />
              <div>
                <h3 className="font-bold text-gray-900">{city}</h3>
                <p className="text-xs text-gray-500">{cityNights[city]}</p>
              </div>
            </div>

            <div className="space-y-3">
              {city === "New York City" && (
                <div className="bg-teal-50 border border-teal-300 rounded-2xl overflow-hidden">
                  <div className="px-5 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Home className="w-5 h-5 text-teal-700" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-teal-900 text-sm">Cousin's place in Long Island</h4>
                            <span className="text-xs bg-teal-200 text-teal-800 px-2 py-0.5 rounded-full font-semibold">Optional — Personal Stay</span>
                          </div>
                          <div className="flex items-center gap-1.5 mt-1">
                            <MapPin className="w-3 h-3 text-teal-500 flex-shrink-0" />
                            <p className="text-xs text-teal-700">Long Island, New York</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xl font-bold text-teal-700">Free</p>
                        <p className="text-xs text-teal-500">personal stay</p>
                      </div>
                    </div>

                    <ul className="mt-3 space-y-1.5">
                      <li className="flex items-start gap-2 text-xs text-teal-800">
                        <span className="text-teal-500 flex-shrink-0 mt-0.5">✓</span>
                        Stay with your cousin — no hotel cost for NYC nights
                      </li>
                      <li className="flex items-start gap-2 text-xs text-teal-800">
                        <span className="text-teal-500 flex-shrink-0 mt-0.5">✓</span>
                        Could save ~$650–900 (5 nights of mid-range NYC hotels)
                      </li>
                      <li className="flex items-start gap-2 text-xs text-teal-800">
                        <span className="text-teal-500 flex-shrink-0 mt-0.5">✓</span>
                        Long Island Rail Road (LIRR) connects easily to Midtown Manhattan
                      </li>
                    </ul>

                    <p className="text-xs text-teal-700 mt-3 bg-teal-100 rounded-lg px-3 py-2">
                      This is a personal option, not a bookable listing. Coordinate directly with your cousin if you'd like to use this instead of a hotel.
                    </p>
                  </div>
                </div>
              )}

              {cityHotels.map((hotel, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden">
                  <div className="px-5 py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-bold text-gray-900 text-sm">{hotel.name}</h4>
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{hotel.rating}</span>
                        </div>
                        <div className="flex items-center gap-1.5 mt-1">
                          <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                          <p className="text-xs text-gray-500">{hotel.neighborhood}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-xl font-bold text-blue-600">{hotel.pricePerNight}</p>
                        <p className="text-xs text-gray-400">/ night</p>
                      </div>
                    </div>

                    <ul className="mt-3 space-y-1.5">
                      {hotel.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="text-green-500 flex-shrink-0 mt-0.5">✓</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 flex items-center gap-3 flex-wrap">
                      <a
                        href={hotel.bookingLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        View on Booking.com
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-gray-300">|</span>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(hotel.name + ", " + hotel.city)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-green-600 hover:text-green-800 transition-colors"
                      >
                        <Map className="w-3.5 h-3.5" />
                        Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
        <h3 className="font-bold text-amber-900 text-sm mb-2">Hotel Tips</h3>
        <ul className="space-y-1.5 text-xs text-amber-800">
          <li className="flex gap-2"><span>•</span> Book hotels with free cancellation — summer rates fluctuate and plans can change</li>
          <li className="flex gap-2"><span>•</span> NYC weekends (Fri–Sat) are significantly more expensive — book well ahead</li>
          <li className="flex gap-2"><span>•</span> Consider a hostel or Airbnb as cheaper alternatives in NYC ($80–100/night)</li>
          <li className="flex gap-2"><span>•</span> Midtown Manhattan is most convenient for solo travelers — walking distance to subway everywhere</li>
        </ul>
      </div>
    </div>
  );
}

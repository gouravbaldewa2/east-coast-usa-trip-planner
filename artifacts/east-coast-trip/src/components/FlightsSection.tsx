import { flights } from "@/data/tripData";
import { ExternalLink, Plane } from "lucide-react";

const USD_TO_INR = 84;

function toInr(usdString: string): string {
  const match = usdString.replace(/,/g, "").match(/\d+/);
  if (!match) return usdString;
  const inr = Math.round(parseInt(match[0]) * USD_TO_INR);
  return "₹" + inr.toLocaleString("en-IN");
}

export default function FlightsSection() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Flights from Mumbai</h2>
        <p className="text-gray-500 mt-1 text-sm">
          Mumbai (BOM) → New York (JFK) · June 20, 2026 · Return July 4
        </p>
        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-3">
          Prices are estimates. Verify on airline sites before booking. Book direct with airlines — not OTAs — for best support if flights change.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          1 USD ≈ ₹84 · Rate is approximate
        </p>
      </div>

      <div className="space-y-3">
        {flights.map((flight, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden">
            <div className="px-5 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Plane className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-gray-900">{flight.airline}</span>
                      {flight.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                          flight.badge === "Best Value"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        }`}>
                          {flight.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5">{flight.route}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-2xl font-bold text-blue-600">{toInr(flight.price)}</p>
                  <p className="text-xs text-gray-400">{flight.price} · roundtrip</p>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-500">Stops</p>
                  <p className="text-sm font-semibold text-gray-800">{flight.stops}</p>
                </div>
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <p className="text-xs text-gray-500">Total time</p>
                  <p className="text-sm font-semibold text-gray-800">{flight.duration}</p>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-3 leading-relaxed">{flight.note}</p>

              <div className="mt-3 flex items-center gap-3 flex-wrap">
                <a
                  href={flight.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Google Flights
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-gray-300">|</span>
                <a
                  href={flight.airlineLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Book with {flight.airline}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4 mt-4">
        <h3 className="font-bold text-blue-900 text-sm mb-2">Booking Tips</h3>
        <ul className="space-y-1.5 text-xs text-blue-800">
          <li className="flex gap-2"><span>•</span> Book 2–4 months ahead for international flights — prices rise fast for June departures</li>
          <li className="flex gap-2"><span>•</span> Tuesday/Wednesday departures are often cheaper — consider Jun 18 or 17 to save</li>
          <li className="flex gap-2"><span>•</span> July 4 is Independence Day in the US — airport will be busy. Allow extra time</li>
          <li className="flex gap-2"><span>•</span> Find the fare on an aggregator, then book direct with the airline for better rebooking support</li>
        </ul>
      </div>
    </div>
  );
}

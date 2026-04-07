import { Map, List, Plane, Hotel, DollarSign, UtensilsCrossed, Compass, Music, X } from "lucide-react";

export type View = "map" | "itinerary" | "flights" | "hotels" | "budget" | "food" | "explore" | "music";

interface HeaderProps {
  activeView: View;
  onViewChange: (view: View) => void;
  selectedDay: number | null;
  onClearDay: () => void;
}

const navItems: { id: View; label: string; icon: React.ReactNode }[] = [
  { id: "itinerary", label: "Itinerary", icon: <List className="w-4 h-4" /> },
  { id: "map", label: "Map", icon: <Map className="w-4 h-4" /> },
  { id: "flights", label: "Flights", icon: <Plane className="w-4 h-4" /> },
  { id: "hotels", label: "Hotels", icon: <Hotel className="w-4 h-4" /> },
  { id: "budget", label: "Budget", icon: <DollarSign className="w-4 h-4" /> },
  { id: "food", label: "Food Guide", icon: <UtensilsCrossed className="w-4 h-4" /> },
  { id: "explore", label: "Explore", icon: <Compass className="w-4 h-4" /> },
  { id: "music", label: "Music & Nightlife", icon: <Music className="w-4 h-4" /> },
];

export default function Header({ activeView, onViewChange, selectedDay, onClearDay }: HeaderProps) {
  return (
    <header className="flex-shrink-0 bg-white border-b border-gray-200 shadow-sm z-10">
      {/* Top bar */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0">
            ✈
          </div>
          <div>
            <h1 className="font-bold text-gray-900 text-sm leading-tight">East Coast USA</h1>
            <p className="text-xs text-gray-500 leading-tight">Jun 20 – Jul 4, 2026 · Solo from Mumbai</p>
          </div>
        </div>

        {selectedDay && (
          <button
            onClick={onClearDay}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 transition-colors px-3 py-1.5 rounded-full"
          >
            <X className="w-3 h-3" />
            Day {selectedDay}
          </button>
        )}
      </div>

      {/* Navigation tabs */}
      <div className="flex overflow-x-auto border-t border-gray-100 no-scrollbar">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`
              flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold whitespace-nowrap border-b-2 transition-all flex-shrink-0
              ${activeView === item.id
                ? "border-blue-600 text-blue-600 bg-blue-50"
                : "border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }
            `}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </div>
    </header>
  );
}

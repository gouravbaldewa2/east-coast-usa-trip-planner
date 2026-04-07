import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { ExploreCategory, ExplorePinItem } from "@/components/explorePins";

export type { ExploreCategory, ExplorePinItem };

const categoryConfig: Record<
  ExploreCategory,
  { color: string; emoji: string; label: string }
> = {
  coffee: { color: "#d97706", emoji: "☕", label: "Coffee" },
  running: { color: "#2563eb", emoji: "🏃", label: "Running" },
  hiking: { color: "#16a34a", emoji: "🥾", label: "Hiking" },
  gems: { color: "#7c3aed", emoji: "💎", label: "Hidden Gems" },
};

const cityCoords: Record<string, [number, number]> = {
  "New York City": [40.7549, -73.984],
  "Washington DC": [38.9072, -77.0369],
  Philadelphia: [39.9526, -75.1652],
  Boston: [42.3601, -71.0589],
};

const cityZoom = 13;
const allCitiesCenter: [number, number] = [40.0, -74.5];
const allCitiesZoom = 6;

function createExploreIcon(category: ExploreCategory) {
  const { color, emoji } = categoryConfig[category];
  const size = 30;
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border: 2px solid white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.3);
      ">
        ${emoji}
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

function MapController({ selectedCity, items }: { selectedCity: string | null; items: ExplorePinItem[] }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedCity) {
      map.setView(allCitiesCenter, allCitiesZoom, { animate: true });
      return;
    }
    if (items.length > 0) {
      const bounds = L.latLngBounds(items.map((i) => [i.lat, i.lng]));
      map.fitBounds(bounds, { padding: [50, 50], animate: true });
    } else {
      const coords = cityCoords[selectedCity];
      if (coords) {
        map.setView(coords, cityZoom, { animate: true });
      }
    }
  }, [selectedCity, items, map]);

  return null;
}

interface ExploreMapViewProps {
  items: ExplorePinItem[];
  selectedCity: string | null;
}

export default function ExploreMapView({ items, selectedCity }: ExploreMapViewProps) {
  const initialCenter = selectedCity && cityCoords[selectedCity]
    ? cityCoords[selectedCity]
    : allCitiesCenter;
  const initialZoom = selectedCity && cityCoords[selectedCity] ? cityZoom : allCitiesZoom;

  return (
    <div className="relative w-full" style={{ height: "480px" }}>
      <MapContainer
        center={initialCenter}
        zoom={initialZoom}
        style={{ width: "100%", height: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController selectedCity={selectedCity} items={items} />

        {items.map((item, idx) => (
          <Marker
            key={`${item.category}-${item.name}-${idx}`}
            position={[item.lat, item.lng]}
            icon={createExploreIcon(item.category)}
          >
            <Popup>
              <div className="min-w-[180px] max-w-[220px]">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-sm">{categoryConfig[item.category].emoji}</span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                    {categoryConfig[item.category].label}
                  </span>
                </div>
                <p className="font-bold text-gray-900 text-sm mb-0.5">{item.name}</p>
                <p className="text-xs text-gray-500 mb-1">{item.city}</p>
                {item.detail && (
                  <p className="text-xs text-gray-600 mb-2">{item.detail}</p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                  >
                    More info →
                  </a>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-3 py-2.5 z-[1000] flex flex-col gap-1.5">
        {(Object.entries(categoryConfig) as [ExploreCategory, typeof categoryConfig[ExploreCategory]][]).map(([cat, cfg]) => (
          <div key={cat} className="flex items-center gap-2">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-xs border-2 border-white shadow-sm flex-shrink-0"
              style={{ background: cfg.color }}
            >
              {cfg.emoji}
            </span>
            <span className="text-xs text-gray-600">{cfg.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

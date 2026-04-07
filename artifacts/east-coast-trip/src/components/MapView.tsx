import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { stops, type TripStop } from "@/data/tripData";

const markerColors: Record<TripStop["type"], string> = {
  airport: "#6366f1",
  hotel: "#2563eb",
  activity: "#dc2626",
  restaurant: "#ea580c",
  transit: "#16a34a",
};

const markerEmojis: Record<TripStop["type"], string> = {
  airport: "✈",
  hotel: "🏨",
  activity: "📍",
  restaurant: "🍽",
  transit: "🚆",
};

function createCustomIcon(type: TripStop["type"], isHighlighted: boolean) {
  const color = markerColors[type];
  const emoji = markerEmojis[type];
  const size = isHighlighted ? 36 : 28;
  const borderWidth = isHighlighted ? 3 : 2;

  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border: ${borderWidth}px solid white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${isHighlighted ? 16 : 13}px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.3), 0 0 0 ${isHighlighted ? 4 : 0}px ${color}40;
        transition: all 0.3s ease;
        ${isHighlighted ? "animation: pulse 1.5s ease-in-out infinite;" : ""}
      ">
        ${emoji}
      </div>
    `,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2],
  });
}

function MapController({ selectedDay }: { selectedDay: number | null }) {
  const map = useMap();

  useEffect(() => {
    if (selectedDay === null) {
      map.setView([40.0, -74.5], 6, { animate: true });
      return;
    }

    const dayStops = stops.filter((s) => s.day === selectedDay);
    if (dayStops.length === 0) return;

    if (dayStops.length === 1) {
      map.setView([dayStops[0].lat, dayStops[0].lng], 13, { animate: true });
    } else {
      const bounds = L.latLngBounds(dayStops.map((s) => [s.lat, s.lng]));
      map.fitBounds(bounds, { padding: [60, 60], animate: true });
    }
  }, [selectedDay, map]);

  return null;
}

function DayPolylines({ selectedDay }: { selectedDay: number | null }) {
  if (selectedDay === null) return null;

  const dayStops = stops
    .filter((s) => s.day === selectedDay)
    .sort((a, b) => {
      const order: Record<TripStop["type"], number> = {
        transit: 0, airport: 0, hotel: 1, activity: 2, restaurant: 3
      };
      return order[a.type] - order[b.type];
    });

  if (dayStops.length < 2) return null;

  const positions = dayStops.map((s) => [s.lat, s.lng] as [number, number]);

  return (
    <Polyline
      positions={positions}
      pathOptions={{
        color: "#2563eb",
        weight: 2.5,
        opacity: 0.6,
        dashArray: "8 6",
      }}
    />
  );
}

interface MapViewProps {
  selectedDay: number | null;
}

export default function MapView({ selectedDay }: MapViewProps) {
  const highlightedStopIds = selectedDay !== null
    ? stops.filter((s) => s.day === selectedDay).map((s) => s.id)
    : [];

  const visibleStops = selectedDay !== null
    ? stops.filter((s) => s.day === selectedDay)
    : stops;

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={[40.0, -74.5]}
        zoom={6}
        style={{ width: "100%", height: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapController selectedDay={selectedDay} />
        <DayPolylines selectedDay={selectedDay} />

        {visibleStops.map((stop) => {
          const isHighlighted = highlightedStopIds.includes(stop.id) || selectedDay === null;

          return (
            <Marker
              key={stop.id}
              position={[stop.lat, stop.lng]}
              icon={createCustomIcon(stop.type, isHighlighted)}
            >
              <Popup>
                <div className="min-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="inline-block w-2 h-2 rounded-full flex-shrink-0"
                      style={{ background: markerColors[stop.type] }}
                    />
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {stop.type}
                    </span>
                  </div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{stop.name}</p>
                  <p className="text-gray-600 text-xs leading-relaxed mb-2">{stop.description}</p>
                  <div className="flex items-center gap-3 flex-wrap mt-1">
                    {stop.link && (
                      <a
                        href={stop.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Visit site →
                      </a>
                    )}
                    <a
                      href={`https://www.google.com/maps?q=${stop.lat},${stop.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-green-600 hover:text-green-800 font-medium"
                    >
                      📍 Google Maps →
                    </a>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Map legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg px-3 py-2.5 z-[1000] flex flex-col gap-1.5">
        {Object.entries(markerColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-2">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-xs border-2 border-white shadow-sm"
              style={{ background: color }}
            >
              {markerEmojis[type as TripStop["type"]]}
            </span>
            <span className="text-xs text-gray-600 capitalize">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

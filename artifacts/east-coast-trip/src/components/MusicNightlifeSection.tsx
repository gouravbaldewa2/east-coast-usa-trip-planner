import { useState } from "react";
import { Music, Moon, MapPin, Clock, Ticket, Users, Radio } from "lucide-react";
import {
  playlistMoods,
  nightlifeVenues,
  type PlaylistMood,
  type PlaylistTrack,
  type NightlifeVenue,
} from "@/data/tripData";

type SubView = "playlist" | "nightlife";

const cityOrder = ["New York City", "Washington DC", "Philadelphia", "Boston"];

const cityColors: Record<string, { bg: string; text: string; badge: string; bar: string }> = {
  "New York City": { bg: "bg-indigo-50", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-700", bar: "bg-indigo-600" },
  "Washington DC": { bg: "bg-red-50", text: "text-red-700", badge: "bg-red-100 text-red-700", bar: "bg-red-600" },
  Philadelphia: { bg: "bg-amber-50", text: "text-amber-700", badge: "bg-amber-100 text-amber-700", bar: "bg-amber-600" },
  Boston: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-700", bar: "bg-emerald-600" },
};

const moodColors: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  "arrival-hype":     { bg: "bg-orange-50",  text: "text-orange-700", border: "border-orange-200", accent: "bg-orange-500" },
  "street-walks":     { bg: "bg-sky-50",     text: "text-sky-700",    border: "border-sky-200",    accent: "bg-sky-500" },
  "evening-wind-down":{ bg: "bg-purple-50",  text: "text-purple-700", border: "border-purple-200", accent: "bg-purple-500" },
  "party-groove":     { bg: "bg-pink-50",    text: "text-pink-700",   border: "border-pink-200",   accent: "bg-pink-500" },
};

function TrackCard({ track }: { track: PlaylistTrack }) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-gray-100 last:border-0">
      <div className="flex-shrink-0 mt-0.5">
        <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
          track.tag === "Bollywood"
            ? "bg-orange-100 text-orange-700"
            : "bg-blue-100 text-blue-700"
        }`}>
          {track.tag === "Bollywood" ? "🎬" : "🌍"} {track.tag}
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-bold text-gray-900 leading-tight">{track.title}</p>
        <p className="text-xs text-gray-500 mt-0.5">{track.artist}</p>
        <p className="text-xs text-gray-400 mt-1 italic leading-relaxed">{track.vibe}</p>
      </div>
    </div>
  );
}

function PlaylistVibesTab() {
  const [activeMood, setActiveMood] = useState(playlistMoods[0].id);
  const mood = playlistMoods.find((m) => m.id === activeMood) as PlaylistMood;
  const colors = moodColors[activeMood] ?? moodColors["arrival-hype"];

  return (
    <div className="space-y-4">
      <div className="px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
        <p className="text-xs text-purple-900 leading-relaxed">
          <span className="font-semibold">Your trip soundtrack:</span> A curated mix of Bollywood bangers and international groove tracks, organised by the moments they're made for. Play these on your earphones and the city comes alive differently.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {playlistMoods.map((m) => {
          const mc = moodColors[m.id];
          return (
            <button
              key={m.id}
              onClick={() => setActiveMood(m.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex-shrink-0 ${
                activeMood === m.id
                  ? `${mc.bg} ${mc.text} ring-2 ring-offset-1 ${mc.text.replace("text-", "ring-")}`
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <span>{m.emoji}</span>
              {m.label}
            </button>
          );
        })}
      </div>

      <div className={`rounded-2xl border ${colors.border} ${colors.bg} p-4`}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{mood.emoji}</span>
          <h3 className={`font-bold text-base ${colors.text}`}>{mood.label}</h3>
          <span className="ml-auto text-xs text-gray-500 font-medium">{mood.tracks.length} tracks</span>
        </div>
        <p className={`text-xs leading-relaxed mb-4 ${colors.text} opacity-80`}>{mood.description}</p>

        <div className="bg-white rounded-xl border border-gray-100 divide-y divide-gray-50 px-3">
          {mood.tracks.map((track) => (
            <TrackCard key={`${track.title}-${track.artist}`} track={track} />
          ))}
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800">Tip:</span> Search these on Spotify, Apple Music, or YouTube Music and add them to a trip playlist. Most tracks are globally available without regional restrictions.
        </p>
      </div>
    </div>
  );
}

function VenueCard({ venue }: { venue: NightlifeVenue }) {
  const col = cityColors[venue.city] ?? cityColors["New York City"];
  return (
    <div className="bg-white rounded-2xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all p-4">
      <div className="flex items-start gap-3 mb-3">
        <div className={`w-9 h-9 rounded-xl ${col.bg} flex items-center justify-center flex-shrink-0`}>
          <Music className={`w-4 h-4 ${col.text}`} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <h3 className="font-bold text-gray-900 text-sm leading-tight">{venue.name}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0 ${col.badge}`}>{venue.type}</span>
          </div>
          <div className="flex items-center gap-1 mt-0.5 text-xs text-gray-500">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            {venue.neighborhood}
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-600 leading-relaxed mb-3">{venue.vibe}</p>

      <div className="space-y-2 mb-3">
        <div className="flex items-start gap-2 text-xs">
          <Users className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
          <span className="text-gray-600"><span className="font-semibold text-gray-700">Crowd:</span> {venue.crowd}</span>
        </div>
        <div className="flex items-start gap-2 text-xs">
          <Radio className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
          <span className="text-gray-600"><span className="font-semibold text-gray-700">Music:</span> {venue.musicGenre}</span>
        </div>
        <div className="flex items-start gap-2 text-xs">
          <Clock className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
          <span className="text-gray-600"><span className="font-semibold text-gray-700">Best time:</span> {venue.bestTime}</span>
        </div>
        <div className="flex items-start gap-2 text-xs">
          <Ticket className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
          <span className="text-gray-600"><span className="font-semibold text-gray-700">Cover:</span> {venue.coverCharge}</span>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-xl px-3 py-2.5">
        <p className="text-xs text-green-900 leading-relaxed">
          <span className="font-semibold">Non-drinker friendly:</span> {venue.nonDrinkerNote}
        </p>
      </div>
    </div>
  );
}

function NightlifeSpotsTab() {
  const [activeCity, setActiveCity] = useState("New York City");
  const filtered = nightlifeVenues.filter((v) => v.city === activeCity);
  const col = cityColors[activeCity] ?? cityColors["New York City"];

  return (
    <div className="space-y-4">
      <div className="px-4 py-3 bg-gray-900 rounded-xl">
        <p className="text-xs text-gray-300 leading-relaxed">
          <span className="font-semibold text-white">This is about the energy, not the alcohol.</span> Every venue here welcomes non-drinkers — rooftops, jazz clubs, live stages. You're there to absorb the culture, feel the music, and soak in the city after dark.
        </p>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {cityOrder.filter((c) => nightlifeVenues.some((v) => v.city === c)).map((city) => {
          const c = cityColors[city];
          return (
            <button
              key={city}
              onClick={() => setActiveCity(city)}
              className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${
                activeCity === city
                  ? `${c.badge} border-current`
                  : "bg-gray-100 text-gray-600 border-transparent hover:bg-gray-200"
              }`}
            >
              {city}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <div className={`w-2 h-6 rounded-full ${col.bar}`} />
        <div>
          <h3 className="font-bold text-gray-900">{activeCity}</h3>
          <p className="text-xs text-gray-500">{filtered.length} venues — rooftops, jazz, live music</p>
        </div>
      </div>

      <div className="space-y-3">
        {filtered.map((venue) => (
          <VenueCard key={venue.name} venue={venue} />
        ))}
      </div>
    </div>
  );
}

export default function MusicNightlifeSection() {
  const [activeTab, setActiveTab] = useState<SubView>("playlist");

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900 mb-1">Music & Nightlife</h2>
        <p className="text-xs text-gray-500">Your trip soundtrack and the best spots to feel the city's energy after dark — without needing a drink in hand</p>
      </div>

      <div className="flex gap-2 mb-5">
        <button
          onClick={() => setActiveTab("playlist")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "playlist"
              ? "bg-gray-900 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <Music className="w-4 h-4" />
          Playlist Vibes
        </button>
        <button
          onClick={() => setActiveTab("nightlife")}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
            activeTab === "nightlife"
              ? "bg-gray-900 text-white shadow-sm"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <Moon className="w-4 h-4" />
          Nightlife Spots
        </button>
      </div>

      {activeTab === "playlist" && <PlaylistVibesTab />}
      {activeTab === "nightlife" && <NightlifeSpotsTab />}
    </div>
  );
}

import { days, type DayActivity } from "@/data/tripData";

const cityColors: Record<string, { bg: string; text: string; dot: string }> = {
  "New York City": { bg: "bg-indigo-50 border-indigo-200", text: "text-indigo-700", dot: "bg-indigo-500" },
  "Washington DC": { bg: "bg-red-50 border-red-200", text: "text-red-700", dot: "bg-red-500" },
  "Philadelphia": { bg: "bg-amber-50 border-amber-200", text: "text-amber-700", dot: "bg-amber-500" },
  "Boston": { bg: "bg-emerald-50 border-emerald-200", text: "text-emerald-700", dot: "bg-emerald-500" },
};

const activityTimeConfig: Record<DayActivity["time"], { label: string; icon: string; color: string }> = {
  morning: { label: "Morning", icon: "🌅", color: "text-amber-600" },
  lunch: { label: "Lunch", icon: "🍴", color: "text-orange-600" },
  afternoon: { label: "Afternoon", icon: "☀️", color: "text-yellow-600" },
  evening: { label: "Evening", icon: "🌆", color: "text-purple-600" },
  dinner: { label: "Dinner", icon: "🍽️", color: "text-red-600" },
  transit: { label: "Transit", icon: "🚆", color: "text-green-600" },
};

interface ItineraryViewProps {
  selectedDay: number | null;
  onSelectDay: (day: number) => void;
}

export default function ItineraryView({ selectedDay, onSelectDay }: ItineraryViewProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {days.map((day) => {
          const cityTheme = cityColors[day.city] ?? { bg: "bg-gray-50 border-gray-200", text: "text-gray-700", dot: "bg-gray-500" };
          const isSelected = selectedDay === day.day;

          return (
            <div
              key={day.day}
              onClick={() => onSelectDay(day.day)}
              className={`
                rounded-2xl border-2 overflow-hidden cursor-pointer transition-all duration-300
                ${isSelected
                  ? "border-blue-500 shadow-lg shadow-blue-100 scale-[1.01]"
                  : "border-gray-200 hover:border-blue-300 hover:shadow-md"
                }
              `}
            >
              {/* Day header */}
              <div className={`px-5 py-3.5 flex items-center justify-between ${cityTheme.bg} border-b ${cityTheme.bg.split(" ")[1]}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full ${cityTheme.dot} flex items-center justify-center text-white font-bold text-sm shadow-sm`}>
                    {day.day}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm leading-tight">{day.date}</p>
                    <p className={`text-xs font-semibold ${cityTheme.text}`}>{day.city}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 font-medium leading-tight">{day.theme}</p>
                  <p className="text-sm font-bold text-gray-800 mt-0.5">Est. {day.estimatedCost}</p>
                </div>
              </div>

              {/* Activities timeline */}
              <div className="bg-white px-5 py-4 space-y-3">
                {day.activities.map((activity, i) => {
                  const timeConfig = activityTimeConfig[activity.time];

                  return (
                    <div key={i} className="flex gap-3">
                      {/* Timeline dot + line */}
                      <div className="flex flex-col items-center gap-0 flex-shrink-0">
                        <div className="w-7 h-7 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-sm">
                          {timeConfig.icon}
                        </div>
                        {i < day.activities.length - 1 && (
                          <div className="w-px bg-gray-200 flex-1 my-1 min-h-[12px]" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 pb-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-semibold uppercase tracking-wide ${timeConfig.color}`}>
                            {timeConfig.label}
                          </span>
                          {activity.bookAhead && (
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                              Book ahead
                            </span>
                          )}
                          {activity.cost && (
                            <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                              {activity.cost}
                            </span>
                          )}
                        </div>
                        <p className="font-semibold text-gray-900 text-sm mt-0.5">{activity.name}</p>
                        <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{activity.description}</p>
                        {activity.link && (
                          <a
                            href={activity.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium mt-1 transition-colors"
                          >
                            More info →
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer tap hint */}
              {isSelected && (
                <div className="bg-blue-50 px-5 py-2 text-xs text-blue-600 font-medium text-center border-t border-blue-100">
                  Map updated to show Day {day.day} locations
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

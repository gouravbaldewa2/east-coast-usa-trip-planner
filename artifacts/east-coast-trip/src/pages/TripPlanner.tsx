import { useState, lazy, Suspense } from "react";
import Header, { type View } from "@/components/Header";
import ItineraryView from "@/components/ItineraryView";
import FlightsSection from "@/components/FlightsSection";
import HotelsSection from "@/components/HotelsSection";
import BudgetSection from "@/components/BudgetSection";
import FoodGuide from "@/components/FoodGuide";
import ExploreSection from "@/components/ExploreSection";
import MusicNightlifeSection from "@/components/MusicNightlifeSection";

const MapView = lazy(() => import("@/components/MapView"));

export default function TripPlanner() {
  const [activeView, setActiveView] = useState<View>("itinerary");
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  function handleSelectDay(day: number) {
    setSelectedDay((prev) => (prev === day ? null : day));
    if (activeView !== "map" && activeView !== "itinerary") {
      setActiveView("itinerary");
    }
  }

  function handleViewChange(view: View) {
    setActiveView(view);
  }

  function handleClearDay() {
    setSelectedDay(null);
  }

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden">
      <Header
        activeView={activeView}
        onViewChange={handleViewChange}
        selectedDay={selectedDay}
        onClearDay={handleClearDay}
      />

      {/* Main content area */}
      <div className="flex-1 overflow-hidden relative">
        {/* Map + Itinerary split view */}
        {(activeView === "map" || activeView === "itinerary") && (
          <div className="h-full flex flex-col lg:flex-row">
            {/* Itinerary panel */}
            <div
              className={`
                lg:w-[400px] xl:w-[480px] flex-shrink-0 h-full overflow-hidden border-r border-gray-200
                ${activeView === "itinerary" ? "flex flex-col" : "hidden lg:flex lg:flex-col"}
              `}
            >
              <div className="flex-1 overflow-hidden">
                <ItineraryView
                  selectedDay={selectedDay}
                  onSelectDay={handleSelectDay}
                />
              </div>
            </div>

            {/* Map panel */}
            <div
              className={`
                flex-1 h-full relative
                ${activeView === "map" ? "flex flex-col" : "hidden lg:flex lg:flex-col"}
              `}
            >
              {selectedDay && (
                <div className="absolute top-4 left-4 right-4 z-[1000] pointer-events-none">
                  <div className="bg-white rounded-xl shadow-md px-4 py-2.5 border border-blue-200 inline-flex items-center gap-2 pointer-events-auto max-w-full">
                    <span className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                    <span className="text-xs font-semibold text-blue-800 truncate">
                      Showing Day {selectedDay} locations
                    </span>
                    <button
                      onClick={handleClearDay}
                      className="text-xs text-blue-600 hover:text-blue-900 ml-1 font-medium flex-shrink-0"
                    >
                      Show all
                    </button>
                  </div>
                </div>
              )}

              <Suspense
                fallback={
                  <div className="flex-1 flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                      <p className="text-xs text-gray-500">Loading map...</p>
                    </div>
                  </div>
                }
              >
                <MapView selectedDay={selectedDay} />
              </Suspense>
            </div>
          </div>
        )}

        {activeView === "flights" && (
          <div className="h-full overflow-y-auto">
            <FlightsSection />
          </div>
        )}

        {activeView === "hotels" && (
          <div className="h-full overflow-y-auto">
            <HotelsSection />
          </div>
        )}

        {activeView === "budget" && (
          <div className="h-full overflow-y-auto">
            <BudgetSection />
          </div>
        )}

        {activeView === "food" && (
          <div className="h-full overflow-y-auto">
            <FoodGuide />
          </div>
        )}

        {activeView === "explore" && (
          <div className="h-full overflow-y-auto">
            <ExploreSection />
          </div>
        )}

        {activeView === "music" && (
          <div className="h-full overflow-y-auto">
            <MusicNightlifeSection />
          </div>
        )}
      </div>

      {/* Mobile: Map/Itinerary toggle button when on map or itinerary view */}
      {(activeView === "map" || activeView === "itinerary") && (
        <div className="lg:hidden fixed bottom-6 right-4 z-[1001]">
          <button
            onClick={() => handleViewChange(activeView === "map" ? "itinerary" : "map")}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-full shadow-xl text-sm font-semibold hover:bg-blue-700 transition-colors active:scale-95"
          >
            {activeView === "map" ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Itinerary
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Map
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

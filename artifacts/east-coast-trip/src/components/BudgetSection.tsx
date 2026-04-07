import { budget, totalBudget, visaInfo } from "@/data/tripData";
import { ExternalLink, AlertTriangle, CheckCircle } from "lucide-react";

export default function BudgetSection() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
      {/* Visa Alert — critical, show first */}
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 bg-red-100 px-5 py-3 border-b border-red-200">
          <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0" />
          <h2 className="font-bold text-red-800 text-sm">Visa Required — Do This First</h2>
        </div>
        <div className="px-5 py-4">
          <p className="font-semibold text-red-900 text-sm">{visaInfo.type}</p>
          <p className="text-red-700 text-xs leading-relaxed mt-2">{visaInfo.note}</p>

          <div className="mt-4 space-y-2">
            {visaInfo.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-red-200 text-red-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </div>
                <p className="text-xs text-red-700">{step}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-red-100 rounded-lg">
            <p className="text-xs text-red-800 font-semibold">
              Passport check: {visaInfo.passportNote}
            </p>
          </div>

          <a
            href={visaInfo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-red-700 hover:text-red-900 transition-colors"
          >
            US Visa official info (travel.state.gov)
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Budget Summary */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
          <h2 className="font-bold text-gray-900">Budget Summary</h2>
          <p className="text-xs text-gray-500 mt-0.5">Estimated costs for 1 solo traveler (mid-range)</p>
        </div>
        <div className="divide-y divide-gray-100">
          {budget.map((item, i) => (
            <div key={i} className="px-5 py-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <span className="text-sm text-gray-700">{item.category}</span>
              <span className="font-bold text-gray-900 text-sm">{item.estimated}</span>
            </div>
          ))}
        </div>
        <div className="px-5 py-4 bg-blue-600 flex items-center justify-between">
          <span className="font-bold text-white text-base">Total Estimated</span>
          <span className="font-bold text-white text-2xl">{totalBudget}</span>
        </div>
      </div>

      {/* Budget breakdown bar */}
      <div className="bg-white rounded-2xl border border-gray-200 px-5 py-5">
        <h3 className="font-bold text-gray-900 text-sm mb-4">Cost Breakdown</h3>
        <div className="space-y-3">
          {[
            { label: "Flights", pct: 19, color: "bg-indigo-500", amount: "$900" },
            { label: "Hotels", pct: 40, color: "bg-blue-500", amount: "$1,950" },
            { label: "Food", pct: 14, color: "bg-orange-500", amount: "$700" },
            { label: "Activities", pct: 8, color: "bg-red-500", amount: "$400" },
            { label: "Transport", pct: 9, color: "bg-green-500", amount: "$450" },
            { label: "Misc / Buffer", pct: 9, color: "bg-gray-400", amount: "$440" },
          ].map((row, i) => (
            <div key={i}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-600">{row.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-800">{row.amount}</span>
                  <span className="text-xs text-gray-400">{row.pct}%</span>
                </div>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${row.color} rounded-full`}
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 mt-4">All amounts in USD. Estimates only — actual costs will vary.</p>
      </div>

      {/* Inter-city transport details */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100 bg-gray-50">
          <h2 className="font-bold text-gray-900 text-sm">Intercity Transport (Amtrak)</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {[
            { leg: "NYC → Washington DC", train: "Northeast Regional", time: "~3.5h", price: "$35–75" },
            { leg: "DC → Philadelphia", train: "Northeast Regional", time: "~1.5h", price: "$20–50" },
            { leg: "Philadelphia → Boston", train: "Northeast Regional", time: "~5h", price: "$40–90" },
            { leg: "Boston → NYC (return)", train: "Northeast Regional", time: "~3.5–4h", price: "$35–90" },
          ].map((row, i) => (
            <div key={i} className="px-5 py-3.5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{row.leg}</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-gray-500">🚆 {row.train}</span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-500">⏱ {row.time}</span>
                  </div>
                </div>
                <span className="font-bold text-blue-600 text-sm">{row.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="px-5 py-3 bg-green-50 border-t border-green-100">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
            <p className="text-xs text-green-800 font-medium">
              Book on{" "}
              <a href="https://www.amtrak.com" target="_blank" rel="noopener noreferrer" className="underline font-bold">
                amtrak.com
              </a>
              {" "}— buy tickets at least 2–3 weeks ahead for best prices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

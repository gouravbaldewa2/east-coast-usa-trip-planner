import type { CoffeeShop, RunningRoute, HikingOption, HiddenGem } from "@/data/tripData";

export type ExploreCategory = "coffee" | "running" | "hiking" | "gems";

export interface ExplorePinItem {
  name: string;
  city: string;
  lat: number;
  lng: number;
  category: ExploreCategory;
  detail?: string;
  link?: string;
}

export function toExplorePins(
  coffeeShops: CoffeeShop[],
  runningRoutes: RunningRoute[],
  hikingOptions: HikingOption[],
  hiddenGems: HiddenGem[]
): ExplorePinItem[] {
  return [
    ...coffeeShops.map((s) => ({
      name: s.name,
      city: s.city,
      lat: s.lat,
      lng: s.lng,
      category: "coffee" as ExploreCategory,
      detail: s.neighborhood,
      link: s.link,
    })),
    ...runningRoutes.map((r) => ({
      name: r.name,
      city: r.city,
      lat: r.lat,
      lng: r.lng,
      category: "running" as ExploreCategory,
      detail: r.distance,
      link: r.link,
    })),
    ...hikingOptions.map((h) => ({
      name: h.name,
      city: h.nearCity,
      lat: h.lat,
      lng: h.lng,
      category: "hiking" as ExploreCategory,
      detail: h.trailLength,
      link: h.link,
    })),
    ...hiddenGems.map((g) => ({
      name: g.name,
      city: g.city,
      lat: g.lat,
      lng: g.lng,
      category: "gems" as ExploreCategory,
      detail: g.category,
      link: g.link,
    })),
  ];
}

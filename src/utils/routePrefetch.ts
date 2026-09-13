/**
 * Intelligent Route Prefetching Engine
 * 
 * Safely warms up route JavaScript bundles before the user clicks,
 * delivering instantaneous page transitions without bandwidth contention.
 */

const prefetchedRoutes = new Set<string>();

export const routeImporters = {
  explore: () => import('../pages/ExplorePage'),
  exploreDetail: () => import('../pages/ExploreDetailPage'),
  activities: () => import('../pages/ActivitiesPage'),
  activityDetail: () => import('../pages/ActivityDetailPage'),
  packages: () => import('../pages/PackagesPage'),
  packageDetail: () => import('../pages/PackageDetailPage'),
  tripPlans: () => import('../pages/TripPlansPage'),
  tripPlanDetail: () => import('../pages/TripPlanDetailPage'),
  resorts: () => import('../pages/ResortsPage'),
  resortDetail: () => import('../pages/ResortDetailPage'),
  gallery: () => import('../pages/GalleryPage'),
  about: () => import('../pages/AboutPage'),
  contact: () => import('../pages/ContactPage'),
};

export type RouteKey = keyof typeof routeImporters;

export function prefetchRoute(key: RouteKey): void {
  if (prefetchedRoutes.has(key)) return;
  prefetchedRoutes.add(key);
  try {
    const importer = routeImporters[key];
    if (importer) {
      importer();
    }
  } catch (err) {
    // Fail gracefully in background
  }
}

/**
 * Prefetches high-priority routes during browser idle time after initial render
 */
export function scheduleIdlePrefetch(): void {
  const idleCallback =
    (window as any).requestIdleCallback ||
    ((cb: () => void) => setTimeout(cb, 2000));

  idleCallback(() => {
    // Prioritize highest traffic routes
    prefetchRoute('explore');
    prefetchRoute('activities');
    prefetchRoute('packages');
  });
}

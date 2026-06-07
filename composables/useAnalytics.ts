export interface Analytics {
  /** Send a custom GA4 event (no-op until the visitor accepts cookies). */
  trackEvent: (name: string, params?: Record<string, unknown>) => void;
}

/**
 * Thin accessor for the analytics helper provided by the gtag plugin.
 * Safe to call anywhere; tracking is a no-op until consent is granted.
 */
export function useAnalytics(): Analytics {
  const { $analytics } = useNuxtApp();
  return (
    ($analytics as Analytics | undefined) ?? {
      trackEvent: () => {},
    }
  );
}

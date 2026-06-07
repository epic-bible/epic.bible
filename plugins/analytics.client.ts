// Consent-gated Google Analytics (gtag.js). Nothing loads or fires until the
// visitor accepts cookies via the consent banner. Page views are sent on every
// client-side route change so book/chapter/verse navigation is captured.
const GA_MEASUREMENT_ID = "G-L6KC31JY0P";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export default defineNuxtPlugin(() => {
  const { consent } = useCookieConsent();
  const router = useRouter();
  let initialized = false;

  function initGtag() {
    if (initialized || typeof window === "undefined") return;
    initialized = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, {
      anonymize_ip: true,
      // We emit page_view manually so SPA route changes are tracked.
      send_page_view: false,
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    trackPageView(router.currentRoute.value.fullPath);
  }

  function trackPageView(path: string) {
    if (!initialized || typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }

  function trackEvent(name: string, params: Record<string, unknown> = {}) {
    if (!initialized || typeof window.gtag !== "function") return;
    window.gtag("event", name, params);
  }

  // Returning visitor who already accepted → start immediately.
  if (consent.value === "accepted") initGtag();

  // React to the banner's Accept action.
  watch(consent, (value) => {
    if (value === "accepted") initGtag();
  });

  // Track in-app navigation.
  router.afterEach((to) => {
    nextTick(() => trackPageView(to.fullPath));
  });

  return {
    provide: {
      analytics: { trackEvent },
    },
  };
});

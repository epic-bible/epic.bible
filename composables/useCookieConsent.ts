export type ConsentValue = "accepted" | "declined";

const COOKIE_NAME = "epic_cookie_consent";

/**
 * Cookie-consent state.
 *
 * Backed by `useState` (app-wide, reliably reactive — shared by the banner and
 * the analytics plugin) and mirrored to a first-party cookie so the choice
 * survives reloads.
 */
export function useCookieConsent() {
  const cookie = useCookie<ConsentValue | null>(COOKIE_NAME, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    sameSite: "lax",
    default: () => null,
  });

  const state = useState<ConsentValue | null>(
    "cookie-consent",
    () => cookie.value
  );

  const decided = computed(
    () => state.value === "accepted" || state.value === "declined"
  );
  const accepted = computed(() => state.value === "accepted");

  function set(value: ConsentValue) {
    state.value = value;
    cookie.value = value;
  }

  return {
    consent: state,
    decided,
    accepted,
    accept: () => set("accepted"),
    decline: () => set("declined"),
  };
}

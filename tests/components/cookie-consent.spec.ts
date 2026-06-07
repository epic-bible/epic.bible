import { beforeEach, describe, expect, it } from "vitest";
import { defineComponent, h } from "vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import CookieConsent from "@/components/widgets/cookie-consent.vue";
import { useCookieConsent } from "@/composables/useCookieConsent";
import { useAnalytics } from "@/composables/useAnalytics";

// Reset the consent cookie before each test.
beforeEach(() => {
  document.cookie = "epic_cookie_consent=; path=/; max-age=0";
});

const ConsentHarness = defineComponent({
  setup() {
    const { decided, accepted, accept, decline } = useCookieConsent();
    return { decided, accepted, accept, decline };
  },
  render() {
    return h("div", [
      h("span", { class: "decided" }, String(this.decided)),
      h("span", { class: "accepted" }, String(this.accepted)),
      h("button", { class: "acc", onClick: this.accept }, "a"),
      h("button", { class: "dec", onClick: this.decline }, "d"),
    ]);
  },
});

// NOTE: consent is backed by a shared `useState`, which persists across mounts
// within this file. Tests that expect an *undecided* state run first; later
// tests set their own state explicitly so order-independence holds.
describe("widgets/CookieConsent", () => {
  it("shows a friendly banner with Accept/Decline when undecided", async () => {
    const w = await mountSuspended(CookieConsent);
    expect(w.text()).toContain("We use cookies");
    const labels = w.findAll("button").map((b) => b.text().trim());
    expect(labels).toContain("Accept");
    expect(labels).toContain("Decline");
  });
});

describe("useCookieConsent", () => {
  it("starts undecided", async () => {
    const w = await mountSuspended(ConsentHarness);
    expect(w.find(".decided").text()).toBe("false");
    expect(w.find(".accepted").text()).toBe("false");
  });

  it("accept() marks decided and accepted", async () => {
    const w = await mountSuspended(ConsentHarness);
    await w.find(".acc").trigger("click");
    expect(w.find(".decided").text()).toBe("true");
    expect(w.find(".accepted").text()).toBe("true");
  });

  it("decline() marks decided but not accepted", async () => {
    const w = await mountSuspended(ConsentHarness);
    await w.find(".dec").trigger("click");
    expect(w.find(".decided").text()).toBe("true");
    expect(w.find(".accepted").text()).toBe("false");
  });
});

const AnalyticsHarness = defineComponent({
  setup() {
    const { trackEvent } = useAnalytics();
    // Must be a safe no-op (no throw) regardless of consent state.
    trackEvent("test_event", { foo: "bar" });
    return { ok: typeof trackEvent === "function" };
  },
  render() {
    return h("span", String(this.ok));
  },
});

describe("useAnalytics", () => {
  it("exposes a trackEvent function that never throws", async () => {
    const w = await mountSuspended(AnalyticsHarness);
    expect(w.text()).toBe("true");
  });
});

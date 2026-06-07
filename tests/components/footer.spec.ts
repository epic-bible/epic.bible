import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Footer from "@/components/widgets/footer.vue";

describe("widgets/Footer", () => {
  it("renders the current year and brand", async () => {
    const wrapper = await mountSuspended(Footer);
    expect(wrapper.text()).toContain("Epic Bible");
    expect(wrapper.text()).toContain(new Date().getFullYear().toString());
  });

  it("renders the external links", async () => {
    const wrapper = await mountSuspended(Footer);
    const hrefs = wrapper.findAll("a").map((a) => a.attributes("href"));
    expect(hrefs).toContain("https://github.com/epic-bible/epic.bible");
    expect(hrefs).toContain("https://twitter.com/codebender828");
    expect(hrefs).toContain("mailto:excellence@jbakebwa.dev");
  });

  it("no longer shows the 'Powered by Nuxt' attribution", async () => {
    const wrapper = await mountSuspended(Footer);
    expect(wrapper.text()).not.toContain("Powered by");
  });
});

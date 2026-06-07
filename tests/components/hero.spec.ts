import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Hero from "@/components/widgets/hero.vue";
import type { IBook } from "@/types/models";

const books = [
  { name: "Genesis" },
  { name: "1 Samuel" },
] as unknown as IBook[];

describe("widgets/Hero", () => {
  it("renders the heading", async () => {
    const wrapper = await mountSuspended(Hero, { props: { books } });
    expect(wrapper.text()).toContain("Welcome to Epic Bible");
  });

  it("renders one prefetchable link per book with encoded hrefs", async () => {
    const wrapper = await mountSuspended(Hero, { props: { books } });
    const hrefs = wrapper.findAll("a").map((a) => a.attributes("href"));
    expect(hrefs).toContain("/books/Genesis");
    expect(hrefs).toContain("/books/1%20Samuel");
    expect(hrefs).toHaveLength(2);
  });

  it("renders no links when given an empty list", async () => {
    const wrapper = await mountSuspended(Hero, { props: { books: [] } });
    expect(wrapper.findAll("a")).toHaveLength(0);
  });
});

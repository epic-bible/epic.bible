import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Chapter from "@/components/widgets/chapter.vue";
import type { IVerses } from "@/types/models";

const verses = [
  {
    ref: "Genesis 1:1",
    book: "Genesis",
    chapter: 1,
    verse: 1,
    text: "In the beginning God created the heaven and the earth.",
  },
  {
    ref: "Genesis 1:2",
    book: "Genesis",
    chapter: 1,
    verse: 2,
    text: "And the earth was without form, and void.",
  },
] as unknown as IVerses[];

describe("widgets/Chapter", () => {
  it("renders the book + chapter heading", async () => {
    const wrapper = await mountSuspended(Chapter, {
      props: { verses, book: "Genesis", chapter: "1" },
    });
    expect(wrapper.text()).toContain("Genesis 1");
  });

  it("renders verse text via v-html", async () => {
    const wrapper = await mountSuspended(Chapter, {
      props: { verses, book: "Genesis", chapter: "1" },
    });
    expect(wrapper.html()).toContain("In the beginning God created");
  });

  it("links each verse to its deep route", async () => {
    const wrapper = await mountSuspended(Chapter, {
      props: { verses, book: "Genesis", chapter: "1" },
    });
    const hrefs = wrapper.findAll("a").map((a) => a.attributes("href"));
    expect(hrefs).toContain("/books/Genesis/1/1");
    expect(hrefs).toContain("/books/Genesis/1/2");
  });
});

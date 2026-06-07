import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Book from "@/components/widgets/book.vue";
import type { IBook } from "@/types/models";

const book = { name: "Genesis", chapters: 3 } as unknown as IBook;

describe("widgets/Book", () => {
  it("renders the book name as a heading", async () => {
    const wrapper = await mountSuspended(Book, { props: { book } });
    expect(wrapper.text()).toContain("Genesis");
  });

  it("renders one chapter link per chapter", async () => {
    const wrapper = await mountSuspended(Book, { props: { book } });
    const chapterHrefs = wrapper
      .findAll("a")
      .map((a) => a.attributes("href"))
      .filter((href) => /^\/books\/Genesis\/\d+$/.test(href ?? ""));
    expect(chapterHrefs).toEqual([
      "/books/Genesis/1",
      "/books/Genesis/2",
      "/books/Genesis/3",
    ]);
  });

  it("renders a breadcrumb back to the home (KJV) route", async () => {
    const wrapper = await mountSuspended(Book, { props: { book } });
    const hrefs = wrapper.findAll("a").map((a) => a.attributes("href"));
    expect(hrefs).toContain("/");
  });
});

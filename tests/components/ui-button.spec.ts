import { describe, expect, it } from "vitest";
import { h } from "vue";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import { Button, buttonVariants } from "@/components/ui/button";

describe("ui/Button", () => {
  it("renders a <button> by default with slot content", async () => {
    const wrapper = await mountSuspended(Button, {
      slots: { default: () => "Click me" },
    });
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.text()).toContain("Click me");
  });

  it("applies variant + size classes", async () => {
    const wrapper = await mountSuspended(Button, {
      props: { variant: "outline", size: "icon" },
      slots: { default: () => "x" },
    });
    const cls = wrapper.find("button").classes().join(" ");
    expect(cls).toContain("border");
    expect(cls).toContain("h-10");
    expect(cls).toContain("w-10");
  });

  it("renders as the child element when as-child is set", async () => {
    const wrapper = await mountSuspended(Button, {
      props: { asChild: true },
      slots: { default: () => h("a", { href: "/x" }, "link") },
    });
    // With asChild, the button styles are merged onto the anchor (no <button>).
    expect(wrapper.find("button").exists()).toBe(false);
    const anchor = wrapper.find("a");
    expect(anchor.exists()).toBe(true);
    // buttonVariants classes are forwarded onto the child element
    expect(anchor.classes().join(" ")).toContain("inline-flex");
  });

  it("buttonVariants exposes the expected variant classes", () => {
    expect(buttonVariants({ variant: "ghost" })).toContain("hover:bg-accent");
    expect(buttonVariants({ size: "sm" })).toContain("h-9");
  });
});

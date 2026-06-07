// @vitest-environment node
import { describe, expect, it } from "vitest";
import { cn } from "../../lib/utils";

describe("cn", () => {
  it("joins truthy class values", () => {
    expect(cn("a", "b")).toBe("a b");
  });

  it("ignores falsy values", () => {
    expect(cn("a", false, null, undefined, "b")).toBe("a b");
  });

  it("supports conditional object syntax", () => {
    expect(cn("base", { active: true, hidden: false })).toBe("base active");
  });

  it("merges conflicting tailwind utilities (last wins)", () => {
    expect(cn("px-2 py-1", "px-4")).toBe("py-1 px-4");
  });
});

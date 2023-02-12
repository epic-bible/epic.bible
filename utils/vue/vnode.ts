import { isVNode, type Slots } from "vue";

export function getValidChildren(slots: Slots | null): VNode[] {
  const slotArray = slots?.default?.() || [];
  return slotArray.filter((child) => {
    return isVNode(child);
  });
}

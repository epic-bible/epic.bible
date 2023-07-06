import { tinykeys } from "tinykeys";

export type KeyboardShortcut = {
  ArrowRight?: VoidFunction;
  ArrowLeft?: VoidFunction;
  ArrowUp?: VoidFunction;
  ArrowDown?: VoidFunction;
};

export function useKeyboardShortcuts(shortcuts: KeyboardShortcut) {
  const tk = ref<ReturnType<typeof tinykeys>>();
  onMounted(() => {
    tk.value = tinykeys(window, shortcuts);
  });

  onUnmounted(() => tk.value?.());
}

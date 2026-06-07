// tinykeys ships type declarations but its package.json `exports` map does not
// expose them under bundler/node resolution, so TS cannot find them. Provide a
// minimal ambient declaration covering the API this app uses.
declare module "tinykeys" {
  export type KeyBindingHandler = (event: KeyboardEvent) => void;
  export type KeyBindingMap = Record<string, KeyBindingHandler>;
  export interface KeyBindingOptions {
    event?: "keydown" | "keyup";
    capture?: boolean;
    timeout?: number;
  }
  export function tinykeys(
    target: Window | HTMLElement,
    keyBindingMap: KeyBindingMap,
    options?: KeyBindingOptions
  ): () => void;
}

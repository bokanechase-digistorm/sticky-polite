/**
 * Polite Sticky (Directional Reveal) Utility
 */

import { initPoliteSticky, mountElement } from "./observer";

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPoliteSticky);
  } else {
    initPoliteSticky();
  }
}

export { mountElement };
export default initPoliteSticky;

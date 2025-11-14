// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * - Call from inside Router (e.g. in your App layout that renders <Outlet />)
 * - Respects:
 *    - location.state.scrollTo -> a CSS selector (e.g. "#projects")
 *    - location.hash (e.g. "#overview")
 *    - otherwise scrolls to top
 * - Considers fixed nav height from CSS var --nav-h (fallback 72px)
 */
export default function ScrollToTop({ behavior = "auto" } = {}) {
  const { pathname, hash, state } = useLocation();

  useEffect(() => {
    // compute nav height (CSS var)
    const navHRaw = getComputedStyle(document.documentElement).getPropertyValue(
      "--nav-h"
    );
    const navH = Math.max(0, parseInt(navHRaw, 10) || 72);

    const scrollInto = (el, mode = behavior) => {
      if (!el) {
        window.scrollTo({ top: 0, behavior: mode });
        return;
      }
      // compute Y position adjusted for fixed nav
      const rect = el.getBoundingClientRect();
      const target = window.scrollY + rect.top - navH - 12; // small gap
      window.scrollTo({ top: Math.max(0, Math.round(target)), behavior: mode });
    };

    // run after a frame so new route content can render
    const run = () => {
      // priority: explicit state.scrollTo (from your Navigation) -> hash -> top
      if (state && state.scrollTo) {
        // state.scrollTo may be "#projects" or ".selector"
        const sel = state.scrollTo;
        const el = document.querySelector(sel);
        if (el) {
          scrollInto(el, "smooth");
        } else {
          // fallback: top
          window.scrollTo({ top: 0, behavior });
        }
        // clear navigation state so it doesn't re-run on back/forward (best effort)
        try {
          // replace history state (keeps url intact) — this clears the custom state object
          window.history.replaceState(
            null,
            "",
            window.location.pathname + window.location.hash
          );
        } catch (e) {
          /* noop */
        }
        return;
      }

      // if url has hash, try to scroll to that element id
      if (hash) {
        const id = hash.replace("#", "");
        const el =
          document.getElementById(id) ||
          document.querySelector(`a[name="${id}"]`);
        if (el) {
          scrollInto(el, behavior === "auto" ? "auto" : "smooth");
          return;
        }
        // fallback to top if not found
        window.scrollTo({ top: 0, behavior });
        return;
      }

      // default: scroll to top
      window.scrollTo({ top: 0, behavior });
    };

    // use rAF then small timeout to be robust with animations / lazy renders
    let raf = requestAnimationFrame(() => {
      // tiny timeout (50ms) to allow content/animations to mount — minimal and robust
      const t = setTimeout(run, 25);
      // cleanup function cancels timeout if unmounted quickly
      return () => clearTimeout(t);
    });

    return () => {
      cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, hash, JSON.stringify(state)]); // watch state changes too
  return null;
}

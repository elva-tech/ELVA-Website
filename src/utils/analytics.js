/**
 * Thin passthrough to whatever analytics the site already loads.
 * No provider is bundled: if gtag/dataLayer is absent the call is a no-op,
 * so events start flowing automatically once a provider is added.
 */
export function trackEvent(name, params = {}) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
    return;
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({ event: name, ...params });
  }
}

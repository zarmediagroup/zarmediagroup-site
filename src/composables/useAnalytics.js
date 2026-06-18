/**
 * GA4 helpers — only fire when analytics consent is granted (POPIA).
 */
export function trackGaEvent(eventName, params = {}) {
  if (typeof window.gtag !== 'function' || window.__zmgAnalyticsConsentGranted !== true) {
    return
  }
  window.gtag('event', eventName, params)
}

/** Primary conversion for Google Ads landing pages (mark as conversion in GA4). */
export function trackFormSubmission(formName, extra = {}) {
  trackGaEvent('form_submission', {
    form_name: formName,
    page_path: window.location.pathname,
    ...extra,
  })
}

/** Secondary lead events (optional Google Ads import). */
export function trackLeadConversion(method, pagePath = window.location.pathname) {
  trackGaEvent('generate_lead', { method, page_path: pagePath })
  trackGaEvent('ads_conversion_Submit_lead_form_1', { method, page_path: pagePath })
}

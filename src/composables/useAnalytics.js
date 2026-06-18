/**
 * GA4 helpers — only fire when analytics consent is granted (POPIA).
 */

function runWhenAnalyticsReady(fn) {
  if (window.__zmgAnalyticsConsentGranted !== true) return

  const run = () => {
    if (typeof window.gtag !== 'function') return
    fn()
  }

  if (window.__zmgGaLoaded) {
    run()
    return
  }

  if (typeof window.loadGoogleAnalytics === 'function') {
    window.loadGoogleAnalytics()
  }

  let attempts = 0
  const timer = setInterval(() => {
    attempts += 1
    if (window.__zmgGaLoaded || attempts >= 50) {
      clearInterval(timer)
      run()
    }
  }, 100)
}

export function trackGaEvent(eventName, params = {}) {
  runWhenAnalyticsReady(() => {
    window.gtag('event', eventName, params)
  })
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

/** LP thank-you: all conversion events for /lp/client-portal-demo. */
export function trackLpDemoConversion() {
  trackFormSubmission('lp_client_portal_demo')
  trackLeadConversion('lp_client_portal_demo')
}

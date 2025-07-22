// Google Ads conversion tracking
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
  }
}

// Track conversion events
export const trackConversion = (eventName: string, conversionData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: 'AW-17383063044/' + eventName,
      ...conversionData
    });
    
    console.log(`Conversion tracked: ${eventName}`, conversionData);
  }
};

// Specific conversion tracking functions
export const trackContactFormSubmission = () => {
  trackConversion('contact_form_submit', {
    event_category: 'engagement',
    event_label: 'contact_form'
  });
};

// Track contact success page conversion (main conversion for Google Ads)
export const trackContactSuccess = () => {
  trackConversion('contact_success', {
    event_category: 'conversion',
    event_label: 'contact_success_page',
    value: 1
  });
};

export const trackPhoneClick = () => {
  trackConversion('phone_click', {
    event_category: 'engagement', 
    event_label: 'phone_number'
  });
};

export const trackServiceInquiry = (service: string) => {
  trackConversion('service_inquiry', {
    event_category: 'engagement',
    event_label: service,
    custom_parameter: service
  });
};

export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
};

// Track when user scrolls to pricing section (high intent)
export const trackPricingView = () => {
  trackConversion('pricing_view', {
    event_category: 'engagement',
    event_label: 'pricing_section'
  });
};

// Track portfolio item clicks
export const trackPortfolioClick = (projectName: string) => {
  trackConversion('portfolio_click', {
    event_category: 'engagement',
    event_label: 'portfolio',
    custom_parameter: projectName
  });
};
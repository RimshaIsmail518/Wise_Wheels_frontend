
export const ROUTES = {
  HOME: "/",
  
  // Cars routes
  CARS: {
    BASE: "/",
    NEW: "/",
    USED: "/",
  },
  
  // Settings routes
  SETTINGS: {
    BASE: "/settings/profile",
    PROFILE: "/settings/profile",
    ADS: "/settings/ads",
    AUCTION_BOOKINGS: "/settings/auction-bookings",
    INSPECTION_BOOKINGS: "/settings/inspection-bookings",
    PAYMENT_HISTORY: "/settings/payment-history",
  },
  
  // Post Ad
  POST_AD: "/",
  
  // Dealer & Services
  BECOME_DEALER: "/",
  FIND_CARS: "/find-cars",
  
  // Tools & Services
  TOOLS: {
    CAR_LOAN_CALCULATOR: "/",
    CAR_AFFORDABILITY: "/",
    SHIP_CAR: "/",
    CAR_WARRANTY: "/",
    CAR_INSURANCE: "/",
    CAR_MAINTENANCE: "/",
  },
  
  // Other
  SITEMAP: "/",
} as const;

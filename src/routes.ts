export const ROUTES = {
  HOME: "/",

  AUTH: {
    LOGIN: "/login",
    REGISTER: "/Registernow",
    FORGOT_PASSWORD: "/forgot-password",
  },

  CARS: {
    BASE: "/",
    NEW: "/cars/new",
    USED: "/cars/used",
  },

  SETTINGS: {
    BASE: "/settings",
    PROFILE: "/settings/profile",
    ADS: "/settings/ads",
    AUCTION_BOOKINGS: "/settings/auction-bookings",
    INSPECTION_BOOKINGS: "/settings/inspection-bookings",
    PAYMENT_HISTORY: "/settings/payment-history",
  },

  POST_AD: "/sell-car",

  // ✅ add these
  BECOME_DEALER: "/become-dealer",
  FIND_CARS: "/find-cars",

  TOOLS: {
    CAR_LOAN_CALCULATOR: "/car-loan-calculator",
    CAR_AFFORDABILITY: "/car-affordability",
    SHIP_CAR: "/ship-car",
    CAR_WARRANTY: "/car-warranty",
    CAR_INSURANCE: "/car-insurance",
    CAR_MAINTENANCE: "/car-maintenance",
  },

  SITEMAP: "/sitemap",
} as const;

export type AdStatus = "active" | "pending" | "drafts" | "sold" | "expired";

export interface Ad {
  title: string;
  price: string;
  features: string[];
  status: AdStatus;
  image: string;
  specifications: {
    mileage: string;
    fuelType: string;
    engineSize: string;
    transmission: string;
  };
}

export const sampleAds: Ad[] = [
  // Active ads (2)
  {
    title: "Toyota Corolla Altis X Manual 1.6",
    price: "PKR 2,450,000",
    features: [
      "2 Airbags",
      "Navigation",
      "Steering Switches",
      "Rear Camera",
      "ABS",
      '9.0" Infotainment',
    ],
    status: "active",
    image: "/images/car-1.png",
    specifications: {
      mileage: "12-15/L",
      fuelType: "Diesel",
      engineSize: "1600cc",
      transmission: "Automatic",
    },
  },
  {
    title: "Honda Civic RS Turbo",
    price: "PKR 3,200,000",
    features: [
      "6 Airbags",
      "Sunroof",
      "Leather Seats",
      "360 Camera",
      "ABS",
      '10.2" Infotainment',
    ],
    status: "active",
    image: "/images/car-1.png",
    specifications: {
      mileage: "10-12/L",
      fuelType: "Petrol",
      engineSize: "1800cc",
      transmission: "CVT",
    },
  },
  // Pending ads (1)
  {
    title: "Toyota Corolla Altis X Manual 1.6",
    price: "PKR 2,450,000",
    features: [
      "2 Airbags",
      "Navigation",
      "Steering Switches",
      "Rear Camera",
      "ABS",
      '9.0" Infotainment',
    ],
    status: "pending",
    image: "/images/car-1.png",
    specifications: {
      mileage: "12-15/L",
      fuelType: "Diesel",
      engineSize: "1600cc",
      transmission: "Automatic",
    },
  },
  // Drafts (2)
  {
    title: "Suzuki Swift GLX",
    price: "PKR 1,800,000",
    features: ["2 Airbags", "Touchscreen", "Rear Camera", "ABS"],
    status: "drafts",
    image: "/images/car-1.png",
    specifications: {
      mileage: "15-18/L",
      fuelType: "Petrol",
      engineSize: "1200cc",
      transmission: "Manual",
    },
  },
  {
    title: "Toyota Vitz 1.3",
    price: "PKR 1,500,000",
    features: ["2 Airbags", "CD Player", "Power Steering"],
    status: "drafts",
    image: "/images/car-1.png",
    specifications: {
      mileage: "18-20/L",
      fuelType: "Petrol",
      engineSize: "1300cc",
      transmission: "Manual",
    },
  },
  // Sold ads (3)
  {
    title: "Honda City Aspire",
    price: "PKR 2,800,000",
    features: ["4 Airbags", "Navigation", "Rear Camera", "ABS"],
    status: "sold",
    image: "/images/car-1.png",
    specifications: {
      mileage: "12-14/L",
      fuelType: "Petrol",
      engineSize: "1500cc",
      transmission: "CVT",
    },
  },
  {
    title: "Toyota Corolla XLI",
    price: "PKR 2,200,000",
    features: ["2 Airbags", "Navigation", "Rear Camera"],
    status: "sold",
    image: "/images/car-1.png",
    specifications: {
      mileage: "13-15/L",
      fuelType: "Petrol",
      engineSize: "1800cc",
      transmission: "Manual",
    },
  },
  {
    title: "Suzuki Cultus VXL",
    price: "PKR 1,600,000",
    features: ["2 Airbags", "Touchscreen", "ABS"],
    status: "sold",
    image: "/images/car-1.png",
    specifications: {
      mileage: "16-18/L",
      fuelType: "Petrol",
      engineSize: "1000cc",
      transmission: "Manual",
    },
  },
  // Expired ads (1)
  {
    title: "Toyota Corolla Altis X Manual 1.6",
    price: "PKR 2,450,000",
    features: [
      "2 Airbags",
      "Navigation",
      "Steering Switches",
      "Rear Camera",
      "ABS",
      '9.0" Infotainment',
    ],
    status: "expired",
    image: "/images/car-1.png",
    specifications: {
      mileage: "12-15/L",
      fuelType: "Diesel",
      engineSize: "1600cc",
      transmission: "Automatic",
    },
  },
];

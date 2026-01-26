export type AuctionStatus = "paid" | "pending" | "cancel";

export interface Auction {
  title: string;
  price: string;
  vehicleId: string;
  features: string[];
  status: AuctionStatus;
  image: string;
  specifications: {
    mileage: string;
    fuelType: string;
    engineSize: string;
    transmission: string;
  };
}

export const sampleAuctions: Auction[] = [
  // Paid auctions (5)
  {
    title: "Toyota Corolla Altis X Manual 1.6",
    price: "PKR 2,450,000",
    vehicleId: "6MMTW8D425T006276",
    features: [
      "2 Airbags",
      "Navigation",
      "Steering Switches",
      "Rear Camera",
      "ABS",
      '9.0" Infotainment',
    ],
    status: "paid",
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
    vehicleId: "7HNDC8D425T006277",
    features: [
      "6 Airbags",
      "Sunroof",
      "Leather Seats",
      "360 Camera",
      "ABS",
      '10.2" Infotainment',
    ],
    status: "paid",
    image: "/images/car-1.png",
    specifications: {
      mileage: "10-12/L",
      fuelType: "Petrol",
      engineSize: "1800cc",
      transmission: "CVT",
    },
  },
  {
    title: "Suzuki Swift GLX",
    price: "PKR 1,800,000",
    vehicleId: "8SUZSW8D425T006278",
    features: ["2 Airbags", "Touchscreen", "Rear Camera", "ABS"],
    status: "paid",
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
    vehicleId: "9TOYVT8D425T006279",
    features: ["2 Airbags", "CD Player", "Power Steering"],
    status: "paid",
    image: "/images/car-1.png",
    specifications: {
      mileage: "18-20/L",
      fuelType: "Petrol",
      engineSize: "1300cc",
      transmission: "Manual",
    },
  },
  {
    title: "Honda City Aspire",
    price: "PKR 2,800,000",
    vehicleId: "10HNDCT8D425T006280",
    features: ["4 Airbags", "Navigation", "Rear Camera", "ABS"],
    status: "paid",
    image: "/images/car-1.png",
    specifications: {
      mileage: "12-14/L",
      fuelType: "Petrol",
      engineSize: "1500cc",
      transmission: "CVT",
    },
  },
  // Pending auctions (5)
  {
    title: "Toyota Corolla XLI",
    price: "PKR 2,200,000",
    vehicleId: "11TOYCR8D425T006281",
    features: ["2 Airbags", "Navigation", "Rear Camera"],
    status: "pending",
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
    vehicleId: "12SUZCL8D425T006282",
    features: ["2 Airbags", "Touchscreen", "ABS"],
    status: "pending",
    image: "/images/car-1.png",
    specifications: {
      mileage: "16-18/L",
      fuelType: "Petrol",
      engineSize: "1000cc",
      transmission: "Manual",
    },
  },
  {
    title: "Honda Accord 2.4",
    price: "PKR 4,500,000",
    vehicleId: "13HNDAC8D425T006283",
    features: ["6 Airbags", "Sunroof", "Leather Seats", "360 Camera"],
    status: "pending",
    image: "/images/car-1.png",
    specifications: {
      mileage: "8-10/L",
      fuelType: "Petrol",
      engineSize: "2400cc",
      transmission: "Automatic",
    },
  },
  {
    title: "Toyota Camry 2.5",
    price: "PKR 5,200,000",
    vehicleId: "14TOYCM8D425T006284",
    features: [
      "8 Airbags",
      "Sunroof",
      "Leather Seats",
      "360 Camera",
      "ABS",
    ],
    status: "pending",
    image: "/images/car-1.png",
    specifications: {
      mileage: "9-11/L",
      fuelType: "Petrol",
      engineSize: "2500cc",
      transmission: "Automatic",
    },
  },
  {
    title: "Suzuki Wagon R VXL",
    price: "PKR 1,400,000",
    vehicleId: "15SUZWR8D425T006285",
    features: ["2 Airbags", "Touchscreen", "ABS"],
    status: "pending",
    image: "/images/car-1.png",
    specifications: {
      mileage: "17-19/L",
      fuelType: "Petrol",
      engineSize: "1000cc",
      transmission: "Manual",
    },
  },
  // Cancel auctions (2)
  {
    title: "Honda Civic 1.8",
    price: "PKR 3,000,000",
    vehicleId: "16HNDCV8D425T006286",
    features: ["4 Airbags", "Sunroof", "Navigation", "Rear Camera"],
    status: "cancel",
    image: "/images/car-1.png",
    specifications: {
      mileage: "11-13/L",
      fuelType: "Petrol",
      engineSize: "1800cc",
      transmission: "CVT",
    },
  },
  {
    title: "Toyota Vitz 1.0",
    price: "PKR 1,300,000",
    vehicleId: "17TOYVT8D425T006287",
    features: ["2 Airbags", "CD Player"],
    status: "cancel",
    image: "/images/car-1.png",
    specifications: {
      mileage: "20-22/L",
      fuelType: "Petrol",
      engineSize: "1000cc",
      transmission: "Manual",
    },
  },
];

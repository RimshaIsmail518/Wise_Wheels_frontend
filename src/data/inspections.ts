export type InspectionStatus = "completed" | "upcoming" | "pending" | "cancelled";

export interface InspectionBooking {
  carModel: string;
  image: string;
  status: InspectionStatus;
  location: string;
  referenceNumber: string;
  completedDate?: string;
  scheduledDate?: string;
  reportScore?: string;
  inspector?: string;
}

export const sampleBookings: InspectionBooking[] = [
  // Upcoming inspections (3)
  {
    carModel: "Toyota Corolla Altis X Manual 1.6",
    image: "/images/car-1.png",
    status: "upcoming",
    location: "Johar Town Lahore",
    referenceNumber: "INS-8842",
    scheduledDate: "Jan 30, 2026",
    inspector: "Sarah J.",
  },
  {
    carModel: "Honda Civic RS Turbo",
    image: "/images/car-1.png",
    status: "upcoming",
    location: "Gulberg Lahore",
    referenceNumber: "INS-8843",
    scheduledDate: "Feb 5, 2026",
    inspector: "Ahmed K.",
  },
  {
    carModel: "Suzuki Swift GLX",
    image: "/images/car-1.png",
    status: "upcoming",
    location: "Model Town Lahore",
    referenceNumber: "INS-8844",
    scheduledDate: "Feb 10, 2026",
    inspector: "Fatima M.",
  },
  // Completed inspections (5)
  {
    carModel: "Toyota Corolla Altis X Manual 1.6",
    image: "/images/car-1.png",
    status: "completed",
    location: "Johar Town Lahore",
    referenceNumber: "INS-8842",
    completedDate: "Dec 20, 2025",
    reportScore: "92/100 (Excellent)",
    inspector: "Sarah J.",
  },
  {
    carModel: "Honda Civic RS Turbo",
    image: "/images/car-1.png",
    status: "completed",
    location: "Gulberg Lahore",
    referenceNumber: "INS-8843",
    completedDate: "Dec 18, 2025",
    reportScore: "88/100 (Very Good)",
    inspector: "Ahmed K.",
  },
  {
    carModel: "Suzuki Swift GLX",
    image: "/images/car-1.png",
    status: "completed",
    location: "Model Town Lahore",
    referenceNumber: "INS-8844",
    completedDate: "Dec 15, 2025",
    reportScore: "85/100 (Good)",
    inspector: "Fatima M.",
  },
  {
    carModel: "Toyota Camry Hybrid",
    image: "/images/car-1.png",
    status: "completed",
    location: "DHA Lahore",
    referenceNumber: "INS-8845",
    completedDate: "Dec 12, 2025",
    reportScore: "95/100 (Excellent)",
    inspector: "Sarah J.",
  },
  {
    carModel: "Honda City Aspire",
    image: "/images/car-1.png",
    status: "completed",
    location: "Faisalabad",
    referenceNumber: "INS-8846",
    completedDate: "Dec 10, 2025",
    reportScore: "90/100 (Excellent)",
    inspector: "Ahmed K.",
  },
  // Pending inspections (2)
  {
    carModel: "Toyota Vitz",
    image: "/images/car-1.png",
    status: "pending",
    location: "Multan",
    referenceNumber: "INS-8847",
    scheduledDate: "Jan 25, 2026",
    inspector: "Fatima M.",
  },
  {
    carModel: "Suzuki Cultus",
    image: "/images/car-1.png",
    status: "pending",
    location: "Karachi",
    referenceNumber: "INS-8848",
    scheduledDate: "Jan 28, 2026",
    inspector: "Sarah J.",
  },
  // Cancelled inspections (2)
  {
    carModel: "Toyota Prius",
    image: "/images/car-1.png",
    status: "cancelled",
    location: "Islamabad",
    referenceNumber: "INS-8849",
    scheduledDate: "Jan 15, 2026",
  },
  {
    carModel: "Honda Accord",
    image: "/images/car-1.png",
    status: "cancelled",
    location: "Rawalpindi",
    referenceNumber: "INS-8850",
    scheduledDate: "Jan 20, 2026",
  },
];

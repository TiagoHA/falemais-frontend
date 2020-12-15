import { PriceReport } from "./price-report.model";

export class PhonePlan {
  id: string;

  name: string;

  minutes: number;

  initialCost: number;

  percentageAdditionalMinuteCost: number;

  report: PriceReport[];

  createdAt: Date;

  updatedAt: Date;
}

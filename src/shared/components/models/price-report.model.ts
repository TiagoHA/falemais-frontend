import { PhonePlan } from "./phone-plan.model";
import { Rate } from "./rate.model";

export class PriceReport {
  id: string;

  minutesSpent: number;

  phonePlan: PhonePlan;

  rate: Rate;

  createdAt: Date;

  updatedAt: Date;
}

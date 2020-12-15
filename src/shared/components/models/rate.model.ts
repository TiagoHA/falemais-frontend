import { PriceReport } from "./price-report.model";

export class Rate {
  id: string;

  prefixOrigin: string;

  prefixDestiny: string;

  price: number;

  report: PriceReport[];

  createdAt: Date;

  updatedAt: Date;

  description?: string;
}

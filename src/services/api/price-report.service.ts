import { api } from "./api";

export const priceReportApi = {
  get,
  delete: kill,
  post,
};

export interface IFilteredPlan {
  id: string;
  prefixOrigin: string;
  prefixDestiny: string;
  minutesSpent: number;
  namePlan: string;
  withPlan: string;
  withoutPlan: string;
}

async function get() {
  try {
    const res = await api.get("/price-report");

    const filteredPlans: IFilteredPlan[] = res.data.map((report) => {
      return {
        id: report.id,
        prefixOrigin: report.rate.prefixOrigin,
        prefixDestiny: report.rate.prefixDestiny,
        minutesSpent: report.minutesSpent,
        namePlan: report.phonePlan.name,
        withPlan: report.withPlan,
        withoutPlan: report.withoutPlan,
      };
    });

    return filteredPlans;
  } catch (error) {
    console.error("ApiServices: ", error);
  }
}

async function kill(id: string) {
  try {
    return await api.delete(`/price-report/${id}`);
  } catch (error) {
    console.error("ApiServices: ", error);
  }
}

export interface IDataPost {
  minutesSpent: number;
  rate: {
    id: string;
  };
  phonePlan: {
    id: string;
  };
}

async function post(data: IDataPost) {
  try {
    return await api.post("/price-report", data);
  } catch (error) {
    console.error("ApiServices: ", error);
  }
}

import { api } from "./api";

export const rateService = {
  get,
  delete: kill,
  post,
};

async function get() {
  try {
    const res = await api.get("/rate");

    const withDescription = res.data.map((rate) => {
      return {
        ...rate,
        description: `Origin: ${rate.prefixOrigin} - Destiny: ${rate.prefixDestiny} - price minute: ${rate.price}`,
      };
    });

    return withDescription;
  } catch (error) {
    console.error("ApiServices: ", error);
  }
}

async function kill(id: string) {
  try {
    return await api.delete(`/rate/${id}`);
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
    return await api.post("/rate", data);
  } catch (error) {
    console.error("ApiServices: ", error);
  }
}

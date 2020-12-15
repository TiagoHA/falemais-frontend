import { api } from "./api";

export const phonePlanService = {
  get,
  delete: kill,
  post,
};

async function get() {
  try {
    const res = await api.get("/phone-plans");
    const withDescription = res.data.map((plan) => {
      return { ...plan, description: plan.name };
    });

    return withDescription;
  } catch (error) {
    console.error("ApiServices: ", error);
  }
}

async function kill(id: string) {
  try {
    return await api.delete(`/phone-plans/${id}`);
  } catch (error) {
    console.error("ApiServices: ", error);
  }
}

async function post(data) {
  try {
    return await api.post("/phone-plans", data);
  } catch (error) {
    console.error("ApiServices: ", error);
  }
}

import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Select } from "./components/select";

export default function ReportsNew() {
  const [rates, setRates] = useState();
  const [selectedRate, setSelectedRate] = useState();
  const [selectedPlan, setSelectedPlan] = useState();
  const [phonePlans, setPhonePlans] = useState();
  const [minutesSpent, setMinutesSpent] = useState(0);

  useEffect(() => {
    getRates();
    getPhonePlans();
  }, []);

  async function getRates() {
    const res: any = await api.get("/rate");

    const withDescription = res.data.map((rate) => {
      return {
        ...rate,
        description: `Origin: ${rate.prefixOrigin} - Destiny: ${rate.prefixDestiny} - price minute: ${rate.price}`,
      };
    });
    setRates(withDescription);
    console.log("dbg ~ getRates ~ rates", res);
  }

  async function getPhonePlans() {
    const res: any = await api.get("/phone-plans");
    const withDescription = res.data.map((plan) => {
      return { ...plan, description: plan.name };
    });
    setPhonePlans(withDescription);
    console.log("dbg ~ getRates ~ rates", res);
  }

  function handleMinutes(e) {
    const numb = Number(e.target.value);
    if (numb >= 0) {
      setMinutesSpent(numb);
    }
  }

  async function submit() {
    const data = {
      minutesSpent: Number(minutesSpent),
      rate: {
        id: selectedRate,
      },
      phonePlan: {
        id: selectedPlan,
      },
    };

    try {
      const res = await api.post("/report-plans", data);
      console.log("dbg ~ submit ~ res", res);
    } catch (error) {
      console.log("dbg ~ submit ~ error", error);
    }
  }

  return (
    <div className="reports-new">
      <div className="row">
        <div className="col s12 m6">
          <Select
            data={rates}
            label="Choose one prefix and destiny"
            onChange={setSelectedRate}
          />
        </div>
        <div className="col s12 m6">
          <Select
            data={phonePlans}
            label="Choose one prefix and destiny"
            onChange={setSelectedPlan}
          />
        </div>
      </div>
      <div className="row">
        <form className="col s12 m6">
          <div className="row">
            <div className="input-field col s12">
              <input
                placeholder="minutes"
                id="minutes_spent"
                type="text"
                className="validate"
                onChange={handleMinutes}
                value={minutesSpent}
              />
              <label htmlFor="minutes_spent">
                Desired minutes minutes you want to spend
              </label>
            </div>
          </div>
        </form>
      </div>
      <button
        className="btn waves-effect waves-light right"
        type="submit"
        name="action"
        onClick={submit}
      >
        Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
}

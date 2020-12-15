import "./reports-new.scss";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Select } from "./components/select";
import { rateService } from "../../services/api/rate.service";
import { priceReportApi } from "../../services/api/price-report.service";
import { phonePlanService } from "../../services/api/phone-plan.service";

export default function ReportsNew() {
  const [rates, setRates] = useState();
  const [selectedRate, setSelectedRate] = useState<string>();
  const [selectedPlan, setSelectedPlan] = useState<string>();
  const [phonePlans, setPhonePlans] = useState();
  const [minutesSpent, setMinutesSpent] = useState<number>();
  const [loading, setLoading] = useState(0);
  const history = useHistory();

  useEffect(() => {
    getRates();
    getPhonePlans();
  }, []);

  const itsLoading = () => setLoading((prev) => prev + 1);
  const itsNotLoading = () => setLoading((prev) => prev - 1);

  async function getRates() {
    itsLoading();
    const rates = await rateService.get();
    setRates(rates);
    itsNotLoading();
  }

  async function getPhonePlans() {
    itsLoading();
    const plans = await phonePlanService.get();
    setPhonePlans(plans);
    itsNotLoading();
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

    await priceReportApi.post(data);
    history.push("/");
  }

  if (loading) {
    return <div className="col c-reports-new">Loading</div>;
  }

  return (
    <div className="col c-reports-new">
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
          <div className="input-field s12">
            <input
              placeholder=""
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
        </form>
      </div>
      <button
        className="btn waves-effect waves-light right"
        type="submit"
        name="action"
        onClick={submit}
      >
        Create
        <i className="material-icons right">send</i>
      </button>
    </div>
  );
}

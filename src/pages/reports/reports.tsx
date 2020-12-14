import "./reports.scss";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Link } from "react-router-dom";

interface IPlan {
  id: string;
  prefixOrigin: string;
  prefixDestiny: string;
  minutesSpent: number;
  namePlan: string;
  withPlan: string;
  withoutPlan: string;
}

export default function Reports() {
  const [plans, setPlans] = useState<IPlan[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res: any = await api.get("/price-report");
      console.log("dbg ~ getData ~ res", res);

      const filteredPlans: IPlan[] = res.data.map((report) => {
        return {
          id: report.id,
          prefixOrigin: report.rate.prefixOrigin,
          prefixDestiny: report.rate.prefixDestiny,
          minutesSpent: report.minutesSpent,
          namePlan: report.phonePlan.name,
          withPlan: report.withPlan.toFixed(2),
          withoutPlan: report.withoutPlan.toFixed(2),
        };
      });
      if (!filteredPlans.length) return null;
      setPlans(filteredPlans);
      console.log("dbg ~ getData ~ plans", filteredPlans);
    } catch (error) {
      console.log("dbg ~ getData ~ error", error);
    }
  }

  function clicked(e, id) {
    e.preventDefault();
    console.log("dbg ~ clicked ~ e", id);
  }

  return (
    <div className="r-home l-home">
      {plans.length && (
        <table className="centered c-home-table">
          <thead>
            <tr>
              <th>Origin</th>
              <th>Destiny</th>
              <th>Time</th>
              <th>Phone plan</th>
              <th>With plan</th>
              <th>Without plan</th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan) => (
              <tr onClick={(e) => clicked(e, plan.id)} key={plan.id}>
                <td className="c-home-table__items">{plan.prefixDestiny}</td>
                <td className="c-home-table__items">{plan.prefixDestiny}</td>
                <td className="c-home-table__items">{plan.minutesSpent}</td>
                <td className="c-home-table__items">{plan.namePlan}</td>
                <td className="c-home-table__items">{plan.withPlan}</td>
                <td className="c-home-table__items">{plan.withoutPlan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link
        to="/reports/new"
        className="btn-floating btn-large waves-effect waves-light red c-home-button"
      >
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
}

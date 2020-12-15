import "./reports.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  IFilteredPlan,
  priceReportApi,
} from "../../services/api/price-report.service";

export default function Reports() {
  const [plans, setPlans] = useState<IFilteredPlan[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const reports = await priceReportApi.get();

    if (!reports.length) return null;
    setPlans(reports);
  }

  async function onDelete(plan) {
    await priceReportApi.delete(plan.id);
    getData();
  }

  return (
    <div className="r-home l-home">
      {!!plans.length && (
        <table className="centered c-home-table">
          <thead>
            <tr>
              <th>Origin</th>
              <th>Destiny</th>
              <th>Time</th>
              <th>Phone plan</th>
              <th>With plan</th>
              <th>Without plan</th>
              <th>action</th>
            </tr>
          </thead>

          <tbody>
            {plans.map((plan) => (
              <tr className="c-home-table" key={plan.id}>
                <td className="c-home-table__items">{plan.prefixDestiny}</td>
                <td className="c-home-table__items">{plan.prefixOrigin}</td>
                <td className="c-home-table__items">{plan.minutesSpent}</td>
                <td className="c-home-table__items">{plan.namePlan}</td>
                <td className="c-home-table__items">{plan.withPlan}</td>
                <td className="c-home-table__items">{plan.withoutPlan}</td>

                <td
                  onClick={(e) => onDelete(plan)}
                  className="c-home-table__items -clicked"
                >
                  delete
                </td>
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

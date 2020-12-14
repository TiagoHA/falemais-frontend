import { lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ReportsNew from "../pages/reports-new/reports-new";

const Reports = lazy(() => import("../pages/reports/reports"));
// const PhonePlans = lazy(() => import("../pages/phone_plans/phone-plans"));
// const Rate = lazy(() => import("../pages/rate/rate"));

export default function Routes() {
  return (
    <Switch>
      <Redirect exact path="/" to="reports" />
      <Route path="/reports" exact component={Reports} />
      <Route path="/reports/new" exact component={ReportsNew} />
      <Redirect exact path="**" to="reports" />
    </Switch>
  );
}

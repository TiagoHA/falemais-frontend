import { lazy } from "react";
import { Switch, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/home/home"));
const PhonePlans = lazy(() => import("../pages/phone_plans/phone-plans"));
const Rate = lazy(() => import("../pages/rate/rate"));

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/rate" component={Rate} />

      <Route path="/phone-plans" component={PhonePlans} isPrivate />
    </Switch>
  );
}

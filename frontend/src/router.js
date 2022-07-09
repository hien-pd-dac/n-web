import { BrowserRouter, Switch, Route } from "react-router-dom";

import Learn from "./pages/learn";
import Test from "./pages/test";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Test />
        </Route>

        <Route exact path="/learn">
          <Learn />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

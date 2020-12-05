import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, CertificatePage } from "@pages";
import { DefaultLayout } from "@components/layouts";

function App() {
  return (
    <Router>
      <Switch>
        <DefaultLayout>
          <Route path="/" exact>
            <HomePage />
          </Route>
        </DefaultLayout>
        <Route path="/" exact>
          <CertificatePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

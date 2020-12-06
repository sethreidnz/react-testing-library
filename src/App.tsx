import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomePage, CertificatePage } from "@pages";
import { DefaultLayout } from "@components/layouts";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/certificate" component={CertificatePage} />
        <DefaultLayout>
          <Route exact path="/" component={HomePage} />
        </DefaultLayout>
      </Switch>
    </Router>
  );
}

export default App;

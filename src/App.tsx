import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.component";
import HomePage from "./pages/homepage/homepage.component";
import Spinner from "./components/spinner/spinner.component";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path="/" component={HomePage} />
        </Suspense>
      </Switch>
    </div>
  );
};

export default App;

import { Redirect, Route, Switch } from "react-router-dom";
import { IonApp, setupIonicReact, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login";
import MainTabs from "./components/MainTabs";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => (
  <IonReactRouter>
    <IonApp>
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/login" component={Login} />
        <IonRouterOutlet>
          {/* <Route path="/register" component={RegistrationPage} /> */}
          {/* <PrivateRoute name="home" path="/home" component={HomePage} /> */}
          <Route path="/tab1" component={MainTabs} />
          <Route path="/tab2" component={MainTabs} />
          <Route path="/tab3" component={MainTabs} />
        </IonRouterOutlet>
      </Switch>
    </IonApp>
  </IonReactRouter>
);

export default App;

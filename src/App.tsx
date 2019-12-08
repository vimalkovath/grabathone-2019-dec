import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Phone from './pages/Phone';
import Cameraa from './pages/Cameraa';
import Signup from './pages/Signup';
import Payment from './pages/Payment';
import Success from './pages/Success';
import Invalid from './pages/Invalid';
import Security from './pages/Security';
import Signupcamera from './pages/Signupcamera';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/phone" component={Phone} exact={true} />
        <Route path="/signup" component={Signup} exact={true} />
        <Route path="/payment" component={Payment} exact={true} />
        <Route path="/cameraa" component={Cameraa} exact={true} />
        <Route path="/success" component={Success} exact={true} />
        <Route path="/invalid" component={Invalid} exact={true} />
        <Route path="/security" component={Security} exact={true} />
        <Route path="/signupcamera" component={Signupcamera} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/payment" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

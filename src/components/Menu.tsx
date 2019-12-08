import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
  IonToggle
} from '@ionic/react';
import { calendar, contacts, hammer, help, informationCircle, logIn, logOut, map, person, personAdd } from 'ionicons/icons';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';



interface Pages {
  title: string,
  path: string,
  icon: { ios: string, md: string },
  routerDirection?: string
}
interface StateProps {
  darkMode: boolean;
  isAuthenticated: boolean;
}


interface MenuProps extends RouteComponentProps, StateProps { }

const Menu: React.FC = (props) => {
  const [disableMenu, setDisableMenu] = useState(false);


  return (
    <IonMenu type="overlay" disabled={disableMenu} contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="outer-content">
       
    
       
      </IonContent>
    </IonMenu>
  );
};

export default Menu
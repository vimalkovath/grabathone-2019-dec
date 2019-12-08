import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';



const Invalid: React.FC = (props) => {


  const res = props;

  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
        <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
        </IonButtons>
          <IonTitle>Invalid</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo" >
          <img src="assets/g_400x400.png" className="gimage" alt="Ionic logo" />
        </div>
        <p>
          Please try other method
</p>
<IonRow>
<IonCol>
  <IonButton routerLink="/security" className="next" color="Invalid" expand="block">TRY ALPHA-NUMERIC</IonButton>
</IonCol>
</IonRow>
      </IonContent>
      <IonRow>
        <IonCol>
          <IonButton routerLink="/payment" className="next" color="Invalid" expand="block">BILL PAY</IonButton>
        </IonCol>
      </IonRow>

    </IonPage>
  );
};

export default Invalid;


import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';



const Success: React.FC = (props) => {


  const res=props;
  
  return (
    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
        <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
        </IonButtons>
          <IonTitle>Success</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo" >
        <img src="assets/g_400x400.png" className="gimage" alt="Ionic logo" />
        </div>

      </IonContent>
      <IonRow>
      <IonCol>
        <IonButton routerLink="/payment" className="next" color="success" expand="block">Return</IonButton>
      </IonCol>
    </IonRow>

    </IonPage>
  );
};

export default Success;


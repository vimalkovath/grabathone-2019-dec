import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';



const Security: React.FC = (props) => {

  const [code, setCode] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [codeError, setCodeError] = useState(false);

  const Phone = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!code) {
      setCodeError(true);
    }
  };

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
         What is your birthStar
</p>
<IonItem>
<IonLabel position="stacked" color="primary"></IonLabel>
<IonInput name="code" type="text" className="center"  value={code} spellCheck={false} autocapitalize="off" onIonChange={e => setCode(e.detail.value!)}
  required>
</IonInput>
</IonItem>
      </IonContent>
      <IonRow>
        <IonCol>
          <IonButton routerLink="/success" className="next" color="Invalid" expand="block"> PAY</IonButton>
        </IonCol>
      </IonRow>

    </IonPage>
  );
};

export default Security;


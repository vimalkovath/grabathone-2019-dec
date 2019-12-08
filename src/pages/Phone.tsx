import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom'
import './phone.css';
import '../Data/data.js';
interface OwnProps extends RouteComponentProps {}

interface DispatchProps {
}


const Phone: React.FC = (props) => {

  const [phoneno, setPhoneno] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [phonenoError, setPhonenoError] = useState(false);

  const Phone = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!phoneno) {
      setPhonenoError(true);
    }else{   
            goForward();}
  };


  let goForward = ()=>{
    (props as any).history.push("/cameraa")
  }

  return (

    <IonPage id="login-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
        <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
        </IonButtons>
          <IonTitle>Phone</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo">
        <br></br>
        </div>

        <form noValidate onSubmit={Phone}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Phoneno / User ID</IonLabel>
              <IonInput name="phoneno" type="text" className="center"  value={phoneno} spellCheck={false} autocapitalize="off" onIonChange={e => setPhoneno(e.detail.value!)}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && phonenoError && <IonText color="danger">
              <p className="ion-padding-start">
                phoneno is required
              </p>
            </IonText>}

          </IonList>
          <IonRow>
          <IonCol>
         
          <Link to={{
            pathname: '/cameraa',
           
            state: { "phoneno": phoneno}
          }} className="next" color="success" >
          <IonButton  className="next" color="success" expand="block">Next</IonButton>
           </Link>
          
          </IonCol>
        </IonRow>
       
       
        </form>

      </IonContent>

    </IonPage>
  );
};

export default Phone;

// <IonButton type="submit" expand="block">Next</IonButton>
// <IonRow>
// <IonCol>
//   <IonButton routerLink="/cameraa" className="next" color="success" expand="block">Next</IonButton>
// </IonCol>
// </IonRow>
import React, { useState } from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonMenuButton, IonRow, IonCol, IonButton, IonList, IonItem, IonLabel, IonInput, IonText } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { Redirect } from "react-router";

interface OwnProps extends RouteComponentProps {}



const Signup: React.FC= (props) => {

  const [username, setUsername] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [usernameError, setUsernameError] = useState(false);

  const Signup = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    if(!username) {
      setUsernameError(true);
    }else{console.log('inside');
        // return <Redirect to={"/signupcamera"} />;
        goForward();
      
      
    }
 
  
        
  
  };
  let goForward = ()=>{
    (props as any).history.push("/")
  }

  return (
    <IonPage id="signup-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
        <img src="assets/g_400x400.png" className="gimageLogo" alt="Ionic logo" />
        </IonButtons>
          <IonTitle>Signup</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        <div className="login-logo">
        <img src="assets/g_400x400.png" className="gimage" alt="Ionic logo" />
        </div>

        <form noValidate onSubmit={Signup}>
          <IonList>
            <IonItem>
              <IonLabel position="stacked" color="primary">Phone No</IonLabel>
              <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => {
                setUsername(e.detail.value!);
                setUsernameError(false);
              }}
                required>
              </IonInput>
            </IonItem>

            {formSubmitted && usernameError && <IonText color="danger">
              <p className="ion-padding-start">
                Username is required
              </p>
            </IonText>}

         
          </IonList>

          <IonRow>
            <IonCol>
              <IonButton type="submit" expand="block">Next</IonButton>
            </IonCol>
          </IonRow>
        </form>

      </IonContent>

    </IonPage>
  );
};

export default Signup;

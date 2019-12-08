import { IonContent,  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  withIonLifeCycle,
  useIonViewWillLeave,
   IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonFab, IonFabButton, IonIcon } from '@ionic/react';
import React, { Component } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

const { Camera } = Plugins;

const INITIAL_STATE = {
  photo: '',
};

export class Home extends Component {
  state: any = {};
  props: any = {};



  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
    defineCustomElements(window);
  }

  async takePicture() {
    const image = await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri
    });
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    this.setState({
    photo: imageUrl
    })

    console.log('Move to next page');
    }
    
    ionViewWillEnter() {
      console.log('ionViewWillEnter event fired');
      this.takePicture();
    }
    
    

  render() {
    const { photo } = this.state;
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Grab</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonImg style={{ 'border': '1px solid black', 'minHeight': '100px' }} src={photo} ></IonImg>
          <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
            <IonFabButton color="primary" onClick={() => this.takePicture()}>
              <IonIcon name="add" />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage >
    );
  };
}
export default withIonLifeCycle(Home);

// import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// import React from 'react';
// import { Plugins, CameraResultType } from '@capacitor/core';

// const { Camera } = Plugins;




// const Home: React.FC = () => {

  

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Ionic Blank</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent className="ion-padding">
//         The world is your oyster.
//         <p>
//           If you get lost, the{' '}
//           <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
//             docs
//           </a>{' '}
//           will be your guide.
//         </p>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Home;

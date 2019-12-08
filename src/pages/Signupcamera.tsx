import {
  IonContent, useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  withIonLifeCycle,
  useIonViewWillLeave,
  IonHeader, IonPage, IonTitle, IonToolbar, IonSlide, IonList, IonItem, IonLabel, IonInput, IonButton, IonRow, IonCol, IonFab, IonFabButton, IonIcon
} from '@ionic/react';
import React, { Component } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Redirect } from "react-router";
import axios from 'axios';


const { Camera } = Plugins;

const INITIAL_STATE = {
  photo: '',
  userId: ''
};

export class Signupcameraa extends Component {
  state: any = {};
  props: any = {};


  constructor(props: any) {
    super(props);
    this.state = { ...INITIAL_STATE };
    defineCustomElements(window);
  }

  async takePicture() {
    const isLoggedIn = false;
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64

    });
    // const data = await takePicture(options);
    var imageUrl = image.base64String;
    console.log(image);

    // Can be set to the src of an image now
    this.setState({
      photo: imageUrl
    })

    await this.afterTakecall();

  }

  async ionViewWillEnter() {
    // await this.takePicture();
  }

  
  afterTakecall() {
    console.log('ionViewWillEnter event fired', this.state);

    const time = new Date();
    const obj = {
      timestamp: time,
      user_id: this.state.userId,
      img64: this.state.photo
    };
    // console.log(obj, 'obj');
    axios.put(`https://ihx78u17y1.execute-api.us-east-1.amazonaws.com/prod`, obj)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
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

            <IonItem>
              <IonLabel position="stacked" color="primary">User ID</IonLabel>
              <IonInput name="username" type="text"  spellCheck={false} value={ this.state.userId } autocapitalize="off" onIonChange={e => {  this.setState({ userId: e.detail.value})}}
                required>
              </IonInput>
            </IonItem>


              <img src="assets/img/ica-slidebox-img-1.png" alt="" className="slide-image" />

                <IonFabButton color="primary" onClick={() => this.takePicture()}>
                  <IonIcon name="add" /> Take
              </IonFabButton>
           
            </IonContent>
          <IonRow>
            <IonCol>
              <IonButton routerLink="/payment" className="next" color="success" expand="block">BILL PAY</IonButton>
            </IonCol>
          </IonRow>

          </IonPage >
        );
    };
  }
  export default withIonLifeCycle(Signupcameraa);
  
  

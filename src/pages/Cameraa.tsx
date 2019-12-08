import {
    IonContent, useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    withIonLifeCycle,
    useIonViewWillLeave,
                IonHeader, IonPage, IonTitle, IonToolbar,IonSlide, IonImg, IonFab, IonFabButton, IonIcon
} from '@ionic/react';
import React, { Component } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { Redirect } from "react-router";
import axios from 'axios';


const { Camera } = Plugins;

const INITIAL_STATE = {
    photo: '',
    phoneno:''
};

export class Cameraa extends Component {
    state: any = {};
    props: any = {};
phone:any;

    constructor(props: any) {
        super(props);
        this.state = { ...INITIAL_STATE };
        defineCustomElements(window);
        console.log(props.history.location.state ,'history');
        this.phone=  props.history.location.state;
        this.setState({
            phoneno:props.history.location.state
        })
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
            photo: imageUrl,
        })

        await this.afterTakecall();

    }

    async ionViewWillEnter() {
        await this.takePicture();
    }

    afterTakecall() {
        console.log('ionViewWillEnter event fired', this.state);
        // 




        // const obj = {
        //     timestamp:'1111.jpeg',
        //      user_id:'vimal123',
        //        img64: this.state.photo
        //   };
        //   console.log(obj,'obj');

        //   axios.put(`https://ihx78u17y1.execute-api.us-east-1.amazonaws.com/prod`, obj )
        //     .then(res => {
        //       console.log(res);
        //       console.log(res.data);
        //     })


        const obj = {
            user_id: this.phone.phoneno,
            image: this.state.photo
        };
        console.log(obj, 'obj',this.phone.phoneno);

        axios.post(`https://dpratqle5f.execute-api.us-east-1.amazonaws.com/prod`, obj)
            .then(res => {
                // console.log(res.data);
                const resData = res.data
                
                const { history } = this.props;

                if(resData.confidence>60){
                history.push({
                    pathname: '/success', state: { res: resData }
                });
            }else{
                history.push({
                    pathname: '/invalid', state: { res: resData }
                });
            }


            })



        //    fetch('https://ihx78u17y1.execute-api.us-east-1.amazonaws.com/prod', {
        //     method: 'PUT',
        //     headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': '*'},
        //     body: JSON.stringify(obj)
        //   })
        //    .then(res => res.json())
        //    .then((data) => {
        //     //  this.setState({ times: data })
        //     //  this.setState({ duetime: data.results })
        //      console.log(data)
        //    })
        //    .catch(()=>console.log('data on catch'));


        // history.push({
        //     pathname: '/success',
        // });
        // state: { token: result.authToken, userId: result.userID, userName: result.userName }

    }

//     <IonContent className="ion-padding">
//     <IonImg style={{ 'border': '1px solid black', 'minHeight': '100px' }} src={photo} ></IonImg>
//     <IonFab color="primary" vertical="bottom" horizontal="center" slot="fixed">
//         <IonFabButton color="primary" onClick={() => this.takePicture()}>
//             <IonIcon name="add" />
//         </IonFabButton>
//     </IonFab>
// </IonContent>



    render() {
        const { photo } = this.state;
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Grab</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonSlide>
                <img src="assets/img/ica-slidebox-img-1.png" alt="" className="slide-image" />
                <h2 className="slide-title">
                
                </h2>
                <p>
                   <b>Loading</b>
                </p>
              </IonSlide>

            </IonPage >
        );
    };
}
export default withIonLifeCycle(Cameraa);



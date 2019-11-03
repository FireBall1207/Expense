import {IonApp, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonCardContent, IonInput, IonLabel, IonItem, IonButton, IonAlert, IonFabButton, IonFab, IonIcon } from '@ionic/react';
import React, { useState } from 'react';
// import './icons.css'
const Sites: React.FC = () => {
    return(
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Sites</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          The world is your oyster.
          <p>
            If you get lost, the{' '}
            <a
              target="_blank"
              rel="noopener"
              href="https://ionicframework.com/docs/"
            >
              docs
            </a>{' '}
            will be your guide.
          </p>
            <IonFab vertical="bottom" horizontal="end" slot="fixed">
                <IonFabButton style={{display:"flex",justifyContent:"center", color:"white"}}>
                    <i className="fa fa-plus"></i>
                </IonFabButton>
            </IonFab>

        </IonContent>
      </IonPage>
    )
}
export default Sites
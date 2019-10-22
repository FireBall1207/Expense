import { IonAvatar, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import React from 'react';

interface Site {
    name: string;
    place: string;
}

const Tab3page: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sites</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonItemSliding>
                        <IonItem>
                            <IonLabel>Goa</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption onClick={() => { }}>Visit</IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>

                    <IonItemSliding>
                        <IonItem>
                            <IonLabel>Mumbai</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption onClick={() => { }}>Visit</IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                </IonList>
            </IonContent>
        </IonPage >
    );
};


export default Tab3page;
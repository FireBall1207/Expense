import { IonAvatar, IonRouterOutlet, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonItemSliding, IonItemOptions, IonItemOption } from '@ionic/react';
import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
// import { Route } from 'react-router';

const SitePage: React.FC = () => {
    return (
        <IonPage>
            <IonReactRouter>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Sites Page</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItemSliding>
                            <IonItem>
                                <IonLabel>
                                    Goa
                            </IonLabel>
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
            </IonReactRouter>
        </IonPage >
    )
}

export default SitePage;

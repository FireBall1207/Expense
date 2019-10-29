import { IonAvatar,IonRouterOutlet, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, useIonViewWillEnter, IonItemSliding, IonItemOptions, IonItemOption, IonTabButton, IonButton } from '@ionic/react';
import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import SitePage from './SitePage';
// interface Site {
//     name: string;
//     place: string;
// }

const Tab3page: React.FC = () => {

    return (
        <IonPage>
            <IonReactRouter>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Sites</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    <IonRouterOutlet>
                        <Route path="/SitePage" component={SitePage}></Route> 
                    </IonRouterOutlet>
                    <IonItemSliding>
                       {/* <IonButton href="/SitePage"> */}
                        <IonItem href="/SitePage">
                            <IonLabel>
                                Goa
                            </IonLabel>
                        </IonItem>
                        {/* </IonButton> */}
                        <IonItemOptions side="end">
                            <IonItemOption onClick={() => { }}>Visit</IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>

                    <IonItemSliding>
                        <IonItem href="/SitePage">
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
    );
};


export default Tab3page;
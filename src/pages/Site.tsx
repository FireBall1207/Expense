import React from 'react';
import { IonPage, IonFab, IonGrid, IonCol, IonRow, IonLabel, IonSelect, IonSelectOption, IonItem } from '@ionic/react';
const Site:React.FC =()=>{
    return(<IonPage>
        <IonGrid class="container">
            <IonRow>
                <IonCol >

                    
                    <IonLabel class="big">Select a site</IonLabel>
                    <IonSelect class="medium">
                        <IonSelectOption selected>A</IonSelectOption>
                        <IonSelectOption>B</IonSelectOption>
                        <IonSelectOption>C</IonSelectOption>
                    </IonSelect>
                    
    
                </IonCol>
            </IonRow>
        </IonGrid>
    </IonPage>)
}

export default Site;
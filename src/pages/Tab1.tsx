import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonItem, IonLabel, IonItemOptions, IonItemOption } from '@ionic/react';

// import { Route } from 'react-router';

const Tab1: React.FC = () => {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
    {name: 'Page A', uv: 800, pv: 2400, amt: 2400}, 
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400}, 
    {name: 'Page A', uv: 200, pv: 2400, amt: 2400}, 

];
    return (
        <IonPage>
            <IonReactRouter>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Tab 1 Page</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                <LineChart width={window.screen.width-10} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
                </IonContent>
            </IonReactRouter>
        </IonPage >
    )
}

export default Tab1;
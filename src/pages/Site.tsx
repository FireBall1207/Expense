import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonApp, IonTab, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import React from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import Tab3page from './Tab3';

const Site: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/tab3"></Route>
            <Route path="/tab2"></Route>
            <Route path="/tab1" component={Tab3page}></Route> 
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
              <IonIcon />
              <IonLabel>Sites</IonLabel>
            </IonTabButton>
            
            <IonTabButton tab="tab2">
              <IonIcon />
              <IonLabel>Accounts</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab3">
              <IonIcon />
              <IonLabel>Expenses</IonLabel>
            </IonTabButton>
            
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default Site;

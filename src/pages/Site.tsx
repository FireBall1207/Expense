import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonApp, IonTab, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonGrid, IonRow, IonCol, IonText } from '@ionic/react';
import React, { useEffect } from 'react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router';
import Tab3page from './Tab3';
import Tab1 from './Tab1';
import Accounts from './Accounts';
import Expenses from './Expenses';
import Sites from './Sites';
const Site: React.FC = () => {
  let x:any = null
  useEffect(()=>{
    console.log("useeffect")

    console.log(x.click())
  })

  return (
    <IonPage>
     
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/sites" component={Sites}></Route>
            <Route path="/accounts" component={Accounts}></Route>
            <Route path="/expenses" component={Expenses}></Route> 
          
          </IonRouterOutlet>
          <Sites></Sites>
          <IonTabBar slot="bottom">
            
            <IonTabButton tab="sites" href="/sites" 
            
            
            selected ref={(r)=>{x=r}}>
              <IonIcon />
              <IonLabel>Sites</IonLabel>
            </IonTabButton>
            
            <IonTabButton tab="accounts" href="/accounts">
              <IonIcon />
              <IonLabel>Accounts</IonLabel>
            </IonTabButton>

            <IonTabButton tab="expenses" href="/expenses">
              <IonIcon />
              <IonLabel>Expenses</IonLabel>
            </IonTabButton>
            
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};

export default Site;

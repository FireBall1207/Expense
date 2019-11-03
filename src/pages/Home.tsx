import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonRow, IonCol, IonCardContent, IonInput, IonLabel, IonItem, IonButton, IonAlert } from '@ionic/react';
import React, { useState } from 'react';
import './Home.css'

const Home: React.FC = () => {
  let [username ,updateUsername] = useState("Esatto")
  let [password ,updatePassword] = useState("supersecret")
  let [alert, updateAlert] = useState(false)
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Esatto Expense Manager</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        <div className="container">
        <span className="login-title">LOGIN</span>
        <IonCard className="ion-padding">
            <IonCardHeader>
              {/* <IonCardSubtitle>LOGIN</IonCardSubtitle> */}
              {/* <IonCardTitle className="login-title">LOGIN</IonCardTitle> */}
            </IonCardHeader>
            <IonCardContent>
            
              <IonItem>
                <IonLabel position="floating">Username</IonLabel>
                <IonInput value={username} 
                onIonChange={
                  (evt)=>{
                    if(evt.detail.value)
                      updateUsername(evt.detail.value)
                  }
                }>
              
                </IonInput>
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput value={password} onIonChange={
                  (evt)=>{
                    if(evt.detail.value)
                      updatePassword(evt.detail.value)
                  }
                  } type="password"></IonInput>
              </IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol offset="8">
                    
                      <IonButton onClick={(e)=>{
                        if(username==="Esatto" && password==="supersecret"){

                          window.history.pushState("asdas","SITES","/site")
                          window.history.go()
                        } else {
                          updateAlert(true)
                        }
                        // e.preventDefault()
                      }} color="primary">LogIn</IonButton>
                    
                    {/* <a href="/site">CLICK</a> */}
                  </IonCol>
                </IonRow>
              </IonGrid>
              
            </IonCardContent>

          </IonCard>
        </div>
        

        <IonAlert 
        isOpen={alert}
        onDidDismiss={()=>{updateAlert(false)}}
        message={"Contact admin for support."}
        header={"Invalid Credentials"}
        buttons={["OK"]}></IonAlert>

      </IonContent>
    </IonPage>
  );
};

export default Home;

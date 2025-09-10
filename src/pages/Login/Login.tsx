import React from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./Login.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="login-content">
        <div className="login-center">
          <h1>hola</h1>
          <p>(Login)</p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;

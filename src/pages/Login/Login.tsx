import React, { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Login con: ${email}`);
  };

  return (
    <IonPage>
      <IonContent className="login-page" fullscreen>
        {/* Header con logo */}
        <header className="login-header">
         <img
  src="/assets/logo.png"
  alt="UCV Green Mobility"
  className="login-logo"
/>
          <h1 className="brand">UCV Green Mobility</h1>
        </header>

        {/* Card de Login */}
        <main className="login-card">
          <h2 className="card-title">Login</h2>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              className="input"
              type="DNI"
              placeholder="DNI"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="submit-btn" type="submit">
              Login
            </button>
          </form>

          {/* Divider */}
          {/*<div className="divider">
            <span>Or login with</span>
          </div>

          {/* Social buttons */}
          {/* <div className="socials">
            <button className="social-box" aria-label="social-1" />
            <button className="social-box" aria-label="social-2" />
          </div>*/}

          <p className="signup">
            No tienes una cuenta ? <span className="signup-link">Registrate Aqui</span>
          </p>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Login;

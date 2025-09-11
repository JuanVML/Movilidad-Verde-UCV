import React, { useState } from "react";
import { IonPage, IonContent, IonRouterLink } from "@ionic/react";
import "./Login.css";

const Login: React.FC = () => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Bienvenido, DNI: ${dni}`);
  };

  return (
    <IonPage>
      <IonContent className="login-page" fullscreen>
        {/* Fondo decorativo */}
        <div className="bg-leaves" aria-hidden="true"></div>

        {/* Header con logo e icono ambiental */}
        <header className="login-header">
          <h1 className="brand">UCV Green Mobility</h1>

          <img
            src="/assets/logo.png"
            alt="UCV Green Mobility"
            className="login-logo"
          />

          <p className="subtitle">Movilidad sostenible para todos</p>
        </header>

        {/* Card de Login */}
        <main className="login-card">
          <h2 className="card-title">Inicia sesión</h2>
          <form className="login-form" onSubmit={handleLogin}>
            <input
              className="input"
              type="text"
              placeholder="DNI"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              required
            />
            <input
              className="input"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="submit-btn" type="submit">
              Acceder
            </button>
          </form>

          <div className="divider">
            <span>O ingresa con</span>
          </div>
          <div className="socials">
            <button className="social-box" aria-label="Google">
              <img
                src="/assets/Escudo-ucv.png"
                className="social-icon"
              />
            </button>
          </div>
          <p className="signup">
            ¿No tienes una cuenta?{" "}
            <IonRouterLink className="signup-link" routerLink="/registro">
              Regístrate aquí
            </IonRouterLink>
          </p>
        </main>

        {/* Footer ambiental */}
        <footer className="login-footer">
          <span className="footer-leaf" role="img" aria-label="leaf">
            🍃
          </span>
          <span>Movilidad Verde UCV &copy; 2025</span>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default Login;

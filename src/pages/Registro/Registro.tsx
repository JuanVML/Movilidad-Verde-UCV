import React, { useState } from "react";
import { IonPage, IonContent } from "@ionic/react";
import "./Registro.css";

const Registro: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    email: "",
    carrera: "",
    ciclo: "",
    password: "",
    confirmPassword: "",
    foto: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Datos de registro:", formData);
    alert("Registro enviado 🚀");
  };

  return (
    <IonPage>
      <IonContent className="registro-page" fullscreen>
        <header className="registro-header">
          <img
            src={require("../../assets/logo.png")}
            alt="logo"
            className="registro-logo"
          />
          <h1 className="brand">UCV Green Mobility</h1>
        </header>

        <main className="registro-card">
          <h2 className="card-title">Registrate</h2>

          <form className="registro-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="nombre completo"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="dni"
              placeholder="DNI"
              value={formData.dni}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <div className="row">
              <input
                type="text"
                name="carrera"
                placeholder="carrera"
                value={formData.carrera}
                onChange={handleChange}
                required
              />

              <div className="foto-upload">
                <label htmlFor="foto">foto</label>
                <input
                  type="file"
                  name="foto"
                  id="foto"
                  accept="image/*"
                  onChange={handleChange}
                />
                <span className="upload-text">Subir Imagen</span>
              </div>
            </div>

            <input
              type="text"
              name="ciclo"
              placeholder="ciclo"
              value={formData.ciclo}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />

            <button type="submit" className="submit-btn">
              ENVIAR
            </button>
          </form>
        </main>
      </IonContent>
    </IonPage>
  );
};

export default Registro;

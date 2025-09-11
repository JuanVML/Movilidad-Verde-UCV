# 🌱 Movilidad Verde UCV

Aplicación híbrida desarrollada con **Ionic + React + Capacitor**.  
El objetivo es contar con una base funcional que permita visualizar en navegador y emular en Android Studio.  

Actualmente, al iniciar la app, la primera pantalla muestra un **Login en blanco con el texto "hola"** como prueba de funcionamiento.  

---

## 📦 Requisitos previos

Asegúrate de tener instalados en tu sistema:

- [Node.js (LTS recomendado)](https://nodejs.org/)  
- [Ionic CLI](https://ionicframework.com/docs/cli)  
- [Android Studio](https://developer.android.com/studio)  
- Git (para clonar el proyecto)

---

## 🚀 Instalación desde cero

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/JuanVML/Movilidad-Verde-UCV.git
   cd Movilidad-Verde-UCV

PARA QUE CORRA EL PROGRAMA ALBERT RONY Y BRIAN :

- Instalar dependencias : 
npm install

- Levantar en navegador (modo desarrollo) : 
ionic serve

- Compilar y probar en Android Studio :
 ionic build

- Añadir plataforma Android :
 npx cap add android

- Sincronizar cambios con Android : 
npx cap sync android

-Abrir Android Studio : npx cap open android

🗂️ Estructura del proyecto:
src/
├── assets/                 # imágenes, íconos, etc.
├── components/             # componentes reutilizables
│   └── Navbar.tsx
├── pages/                  # páginas principales
│   ├── Login/
│   │   ├── Login.tsx
│   │   └── Login.css
│   ├── Registro/
│   │   ├── Registro.tsx
│   │   └── Registro.css
│   └── Home/
│       ├── Home.tsx
│       └── Home.css
├── services/               # lógica de conexión y base de datos
│   └── database.service.ts
├── routes.tsx              # enrutador con React Router (próximamente)
├── App.tsx                 # punto de entrada de la app
└── global.css              # estilos globales


-----------------------------------------------------
🚀 Paso a paso para subir tu proyecto a GitHub:
1. Agregar todos los archivos del proyecto

git add .
git commit -m " ACA PONGAN UN COMENTARIO CUALQUIERA "
git push


-----------------------------------------------------
Instalacion para mapas
npx expo install react-native-maps
npm install @react-navigation/native @react-navigation/stack
npx expo install react-native-screens react-native-safe-area-context
npx expo install expo-location

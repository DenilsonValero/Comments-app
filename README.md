# 💬 Comments App API

API RESTful desarrollada con **Node.js**, **Express** y **MySQL** que permite manejar usuarios, comentarios y reacciones (Like/Dislike).  
Incluye autenticación con **JWT**, validaciones y conexión a base de datos mediante `mysql2/promise`.

---

## 🚀 Características principales

- 🔑 Registro e inicio de sesión con JWT.  
- 🗣️ CRUD completo de comentarios.  
- ❤️ Sistema de reacciones (Like / Dislike).  
- 🧩 Estructura modular con controladores, rutas y middleware.  
- 🌐 Desplegable en Railway u otros servicios compatibles con Node.js.

---

## 🗂️ Estructura del proyecto

src/
│
├── app.js
├── config/
│   └── db.js
│
├── controllers/
│   ├── userC.js
│   ├── commentsC.js
│   └── reactionsControllers.js
│
├── middleware/
│   └── auth.js
│
├── operations/
│   └── commentOperations.js
│
├── routers/
│   ├── user.js
│   ├── comments.js
│   └── reactionRouter.js

---

## ⚙️ Instalación y configuración

### 1️⃣ Clonar el repositorio
git clone https://github.com/tuusuario/Comments-app.git
cd Comments-app

### 2️⃣ Instalar dependencias
npm install

### 3️⃣ Crear archivo .env
PORT=8080
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=tu_contraseña
DB_NAME=api_comments
DB_PORT=3306
SECRET_KEY=2025jwtdev

### 4️⃣ Ejecutar el servidor
npm start

Por defecto se ejecuta en:  
🔗 http://localhost:8080

---

## 🧩 Endpoints principales

### 👤 Usuarios (/users)
| Método | Ruta | Descripción | Autenticación |
|:-------:|:-----|:-------------|:---------------:|
| POST | /users/register | Registrar un nuevo usuario | ❌ |
| POST | /users/login | Iniciar sesión y obtener token JWT | ❌ |
| GET | /users | Listar todos los usuarios | ✅ Requiere token |

---

### 💬 Comentarios (/comments)
| Método | Ruta | Descripción |
|:-------:|:-----|:-------------|
| GET | /comments | Listar todos los comentarios |
| POST | /comments/add-comment/:user_id | Agregar un nuevo comentario |
| PUT | /comments/:comment_id | Editar comentario |
| DELETE | /comments/:comment_id | Eliminar comentario |

---

### ❤️ Reacciones (/reactions)
| Método | Ruta | Descripción |
|:-------:|:-----|:-------------|
| POST | /reactions/toggle-reaction | Agregar, actualizar o eliminar una reacción (LIKE/DISLIKE) |
| GET | /reactions/comment/:comment_id | Obtener el conteo de likes y dislikes de un comentario |

---

## 🧠 Ejemplo de flujo

1. Registrar usuario → POST /users/register  
2. Iniciar sesión → POST /users/login → recibe token  
3. Crear comentario → POST /comments/add-comment/:user_id  
4. Listar comentarios → GET /comments  
5. Dar “Like” → POST /reactions/toggle-reaction  
6. Ver resumen → GET /reactions/comment/:id

---

## 🔒 Autenticación

Esta API utiliza **JSON Web Tokens (JWT)**.  
Debes enviar el token en el header para acceder a rutas protegidas.

Authorization: Bearer <token>

---

## 💾 Base de datos MySQL

### Tabla users
| Campo | Tipo | Descripción |
|--------|------|-------------|
| user_id | INT | PK, autoincrement |
| user_name | VARCHAR(100) | Nombre del usuario |
| email | VARCHAR(50) | Único |
| password | VARCHAR(255) | Encriptado con bcrypt |

### Tabla comments
| Campo | Tipo | Descripción |
|--------|------|-------------|
| comment_id | INT | PK |
| user_id | INT | FK a users |
| comment_text | TEXT | Texto del comentario |

### Tabla reactions
| Campo | Tipo | Descripción |
|--------|------|-------------|
| reaction_id | INT | PK |
| user_id | INT | FK a users |
| comment_id | INT | FK a comments |
| status | ENUM('LIKE','DISLIKE') | Tipo de reacción |

---

## 🧰 Dependencias principales

{
  "express": "^4.18.2",
  "mysql2": "^3.9.2",
  "dotenv": "^16.4.5",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2",
  "cors": "^2.8.5"
}

---

## 🧑‍💻 Autores

Bryan Márquez  
📧 bryan_amg1@icloud.com  
💻 https://github.com/bryanamg1
Denilson valero
📧 denilsonvalero@gmail.com
💻 https://github.com/DenilsonValero

---

## ☁️ Despliegue en Railway

1. Sube tu repo a GitHub  
2. Conecta Railway → Deploy from GitHub  
3. Configura las variables de entorno (igual que .env)  
4. Railway detecta Node.js y ejecuta:
   npm install
   npm start
5. ¡Listo! 🚀 Tu API quedará en línea con una URL como:
   https://comments-app-production.up.railway.app/

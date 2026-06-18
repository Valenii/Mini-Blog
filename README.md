# MiniBlog API

Una API sencilla para manejar autores, posts y comentarios, hecha con Node.js, Express y PostgreSQL.

## ¿Qué necesitás para correrla?

- Node.js v18 o superior
- PostgreSQL instalado

## Cómo arrancar el proyecto

1. Cloná el repositorio y entrá a la carpeta:
   git clone https://github.com/tu-usuario/mini-blog.git
   cd mini-blog

2. Instalá las dependencias:
   npm install

3. Creá tu archivo de configuración copiando el ejemplo:
   cp .env.example .env

4. Abrí el archivo `.env` y completá con tus datos:
   PORT=3000
   DB_HOST=localhost
   DB_PORT=5432
   DB_USER=postgres
   DB_PASSWORD=tuContraseña
   DB_NAME=miniblog

5. Creá la base de datos en PostgreSQL:
   CREATE DATABASE miniblog;

6. Creá las tablas ejecutando el archivo `src/db/schema.sql`
   en el Query Tool de pgAdmin.

7. Opcional - cargá datos de ejemplo ejecutando `src/db/seed.sql`
   en el Query Tool de pgAdmin.

8. Arrancá el servidor:
   npm run dev

Listo, la API corre en http://localhost:3000

## Comandos útiles

- npm run dev  → arranca el servidor en modo desarrollo
- npm start    → arranca el servidor en producción
- npm test     → corre los tests

## Rutas disponibles

### Autores
- GET    /authors          → trae todos los autores
- GET    /authors/:id      → trae un autor específico
- POST   /authors          → crea un autor nuevo
- PUT    /authors/:id      → actualiza un autor
- DELETE /authors/:id      → borra un autor

### Posts
- GET    /posts                    → trae todos los posts
- GET    /posts/:id                → trae un post específico
- GET    /posts/author/:authorId   → trae los posts de un autor
- POST   /posts                    → crea un post nuevo
- PUT    /posts/:id                → actualiza un post
- DELETE /posts/:id                → borra un post

### Comentarios
- GET    /comments/post/:postId    → trae los comentarios de un post
- POST   /comments                 → crea un comentario nuevo

## Variables de entorno

| Variable    | Para qué sirve            |
|-------------|---------------------------|
| PORT        | Puerto donde corre la app |
| DB_HOST     | Dirección de PostgreSQL   |
| DB_PORT     | Puerto de PostgreSQL      |
| DB_USER     | Usuario de PostgreSQL     |
| DB_PASSWORD | Contraseña                |
| DB_NAME     | Nombre de la base         |

## Documentación OpenAPI

La documentación completa de los endpoints está en el archivo `openapi.yml`.

Si querés verla con interfaz visual, podés pegarla en:
https://editor.swagger.io

## Cómo correr los tests

npm test

Los tests cubren todos los endpoints de autores y posts,
incluyendo casos de error como 404 y validaciones.

## Deploy en Railway

1. Subí el proyecto a GitHub
2. Entrá a https://railway.app y creá una cuenta
3. Hacé clic en "New Project" → "Deploy from GitHub repo"
4. Seleccioná tu repositorio
5. Agregá un servicio de PostgreSQL: clic en "New" → "Database" → "PostgreSQL"
6. Configurá las variables de entorno en Railway:
   - DB_HOST → usar la "Internal URL" que da Railway
   - DB_PORT → 5432
   - DB_USER → el usuario que da Railway
   - DB_PASSWORD → la contraseña que da Railway
   - DB_NAME → el nombre que da Railway
   - PORT → 3000
7. Railway despliega automáticamente con cada push a GitHub

Una vez desplegado, tu API va a estar disponible en una URL pública
del tipo https://mini-blog-production.up.railway.app

## Uso de IA en el proyecto

Durante el desarrollo usé Claude (Anthropic) como asistente.

### Prompts principales que usé

- "¿Qué estructura de carpetas necesito para una API REST con Express?"
- "¿Qué va dentro del archivo index.js?"
- "Dame el código para conectar Node.js a PostgreSQL con pg"
- "Dame el código de los servicios con consultas SQL parametrizadas"
- "¿Cómo escribo tests con supertest para mis endpoints?"

### Cómo influyó en el desarrollo

La IA me ayudó a entender la estructura del proyecto y el orden
en que debía construir cada parte. Cada bloque de código fue
revisado y copiado por mí, lo que me permitió entender qué hacía
cada archivo y por qué estaba organizado de esa manera.
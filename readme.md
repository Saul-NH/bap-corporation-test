## Task API

### Clonar el proyecto

```sh
# clonado
git clone https://github.com/Saul-NH/bap-corporation-test.git

# mover al directorio
cd bap-corporation-test

# Crear el archivo .env
 node initEnvFile

# Instalar las dependencias
npm install

## Crear la base de datos

database : bap-corporativo

## Usar el transpilador Babel
npm run build

## Correr la aplicación
npm start

```
# Introducción
** Task API by Saul Navarro**
Email: saul.navarro.utj@gmail.com

## Forma de operar
* La aplicación hace un llamado a la ruta raiz  `http://localhost:3000/` para retornar el mensaje "Welcome to the API"

* Todas rutas estan validadas por un middleware de autentificación. Se debe estar autenticado para acceder a ellas


### Códigos de estado

**TASK API** devuelve los siguientes códigos de estado en su API:

| Código de estado | Descripción |
| ----------- | ----------- |
| 200 | `OK` |
| 201 | `CREATED` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
| 500 | `ERROR DE SERVIDOR INTERNO` |

----

## Endpoint POST /api/authentication
Autentifica al usuario con email y contraseña. Nos devulve le token que debemos agregar a los header de la petición con el nombre de: user-token
### body
{
	"email":"user1@gmail.com",
	"password": "user1password"
}
### Response
`
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJpYXQiOjE2NTg3MTYyMjEsImV4cCI6MTY1ODcxOTgyMX0.1qFyQooZrJR4UH8c3mwVP1mYSAzvgwguDxrqseTF37E"
`
<hr>

## Endpoint GET /api/tasks
Nos devuelve las tareas asociadas al usuario

### Response
 `[
    {
        "id": 1,
        "title": "Do excersice",
        "description": "Go to the gym",
        "status": "PENDING",
        "delivery_date": "2022-07-24",
        "responsible": "Saul Navarro"
    }
]`

<hr>

## Endpoint GET /api/tasks/:id
Nos devuelve la tarea con el id asociado

### Response
`
{
  "task": {
    "id": 1,
    "title": "Do excersice",
    "description": "Go to the gym",
    "status": "PENDING",
    "delivery_date": "2022-07-24",
    "comments": "For 30 minutes",
    "responsible": "Saul Navarro",
    "tags": "[\"healthy\"]",
    "createdAt": "2022-07-25T03:12:29.000Z",
    "updatedAt": "2022-07-25T03:12:29.000Z",
    "deletedAt": null
  }
}
`

<hr>

## Endpoint POST /api/tasks
Crea una nueva tarea asociada al usuario que realiza la petición

### body
{
	"title":"Do excersice",
	"description": "Go to the gym",
	"status": "PENDING",
	"delivery_date": "2022-07-25",
	"comments": "For 30 minutes",
	"responsible": "Saul Navarro",
	"tags": ["healthy"]
}

### Response
`
{
  "message": "Task created",
  "task": {
    "id": 1,
    "title": "Do excersice",
    "description": "Go to the gym",
    "status": "PENDING",
    "delivery_date": "2022-07-24",
    "comments": "For 30 minutes",
    "responsible": "Saul Navarro",
    "tags": "[\"healthy\"]",
    "user_id": 1,
    "updatedAt": "2022-07-25T03:12:29.318Z",
    "createdAt": "2022-07-25T03:12:29.318Z"
  }
}
`
<hr>

## Endpoint PUT /api/tasks/:id
Actualiza la tarea con el id asociado

### Response
`{
  "message": "Task Updated seccessfully"
}`

<hr>

## Endpoint DELETE /api/tasks/:id
Elimina la tarea asociada el id


### Response
`{
  "message": "Task deleted successfully"
}`


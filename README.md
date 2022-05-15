# Artisanal Fishing API

La Artisanal Fishing API permite obtener, crear y eliminar capitanes, empresas y botes de pesca.

## Captains

La Captains API permite obtener, crear y eliminar capitanes.

### GET /captains

`localhost:8000/api/v1/captains`

Obtener a todos los capitanes.

### GET /captains/:id

`localhost:8000/api/v1/captains/:id`

Obtener a un capitán por su id.

### POST /captains

`localhost:8000/api/v1/captains`

Crear a un capitán.

#### BODY raw

```
{
    "name": String,
    "email": String,
    "country": String,
    "state": String
}
```

### PUT /captains/:id

`localhost:8000/api/v1/captains/:id`

Actualizar a un capitán por su id.

#### BODY raw

```
{
    "name": String,
    "email": String,
    "country": String,
    "state": String
}
```

### DEL /captains/:id

`localhost:8000/api/v1/captains/:id`

## Companies

La Companies API permite obtener, crear y eliminar empresas.

### GET /companies

`localhost:8000/api/v1/companies`

Obtener a todas las empresas.

### GET /companies/:id

`localhost:8000/api/v1/companies/:id`

Obtener a una empresa por su id.

### POST /companies

`localhost:8000/api/v1/companies`

Crear a una empresa.

#### BODY raw

```
{
    "name": String
}
```

### PUT /companies/:id

`localhost:8000/api/v1/companies/:id`

Actualizar a una empresa por su id.

#### BODY raw

```
{
    "name": String
}
```

### DEL /companies/:id

`localhost:8000/api/v1/companies/:id`

Eliminar a una empresa por su id.

## Boats

La Boats API permite obtener, crear y eliminar botes de pesca.

### GET /boats

`localhost:8000/api/v1/boats`

Obtener a todos los botes de pesca.

### GET /boats/:id

`localhost:8000/api/v1/boats/:id`

Obtener a un bote de pesca por su id.

### POST /boats

`localhost:8000/api/v1/boats`

Crear a un bote de pesca.

#### BODY raw

```
{
    "idCaptain": Int,
    "idCompany": Int,
    "name": String,
    "fishingDate": DateTime,
    "fishingLocation": String,
    "capture": String,
    "zarpe": String
}
```

### PUT /boats/:id

`localhost:8000/api/v1/boats/:id`

Actualizar a un bote de pesca por su id.

#### BODY raw

```
{
    "idCaptain": Int,
    "idCompany": Int,
    "name": String,
    "fishingDate": DateTime,
    "fishingLocation": String,
    "capture": String,
    "zarpe": String
}
```

### DEL /boats/:id

`localhost:8000/api/v1/boats/:id`

Eliminar a un bote de pesca por su id.

## Proposals

La Proposals API permite obtener, crear y eliminar propuestas.

### GET /proposals

`localhost:8000/api/v1/proposals`

Obtener a todas las propuestas.

### GET /proposals/:id

`localhost:8000/api/v1/proposals/:id`

Obtener a una propuesta por su id.

### POST /proposals

`localhost:8000/api/v1/proposals`

Crear a una propuesta.

#### BODY raw

```
{
    "name": String,
    "email": String,
    "phone": String,
    "proposal": String
}
```

### PUT /proposals/:id

`localhost:8000/api/v1/proposals/:id`

Actualizar a una propuesta por su id.

#### BODY raw

```
{
    "name": String,
    "email": String,
    "phone": String,
    "proposal": String
}
```

### DEL /proposals/:id

Eliminar a una propuesta por su id.

## Dependencias

- [Express](https://expressjs.com/): Creación del servidor
- [cors](https://www.npmjs.com/package/cors): Configuración de CORS
- [Prisma](https://www.npmjs.com/package/@prisma/client): Gestión de la base de datos
- [Jest](https://jestjs.io/): Pruebas unitarias
- [Supertest](https://www.npmjs.com/package/supertest): Pruebas HTTP en Jest
- [ESLint](https://eslint.org/): Linting de código

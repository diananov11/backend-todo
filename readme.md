## Dokumentasi API

````
## Models

Todo

- title : string (required),
- done : boolean (default: false)

Student

- name : string (required),
- age : number (required),
- todo : reference with id Todo models

User

- name : string,
- username : string, unique (required),
- password : string (required)

## Endpoints

List of available endpoints:

** middleware **
- POST `/auth/register`
- POST `/auth/login`

** public endpoint **
-   POST `/todos`
-   POST `/todos/seeder`
-   GET `/todos`
-   GET `/todos/:id`
-   PUT `/todos/:id`
-   DELETE `/todos/:id`
-   DELETE `/todos`

** auth endpoint (need bearer token to access) **
-   POST `/students`
-   POST `/students/seeder`
-   GET `/students`
-   GET `/students/:id`
-   PUT `/students/:id`
-   DELETE `/students/:id`
-   DELETE `/students`

## 1. POST /auth/register

- Request body:

```json
{
  "name": "string",
  "username": "string",
  "password": "string"
}
```
````

- Response (201 - Created)

```json
{
  "message": "Berhasil melakukan register"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal melakukan register"
}
```

## 2. POST /auth/login

- Request body:

```json
{
  "username": "string",
  "password": "string"
}
```

- Response (200 - OK)

```json
{
  "message": "Berhasil login",
  "token": "string"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal melakukan login"
}
```

- Response (401 - Unauthorized)

```json
{
  "message": "Password salah"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Username tidak ditemukan"
}
```

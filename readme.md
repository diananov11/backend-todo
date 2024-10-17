## Dokumentasi API

```
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
```

## 1. POST /auth/register

- Request body:

```json
{
  "name": "string",
  "username": "string",
  "password": "string"
}
```

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

## 3. POST /todos

- Request body:

```json
{
  "title": "string",
  "done": "boolean"
}
```

- Response (201 - Created)

```json
{
  "message": "data Todo berhasil dibuat",
  "data": "Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal membuat data todo, pastikan data title telah diinput"
}
```

## 4. POST /todos/seeder

- Request body:

```json
[
  {
    "title": "string",
    "done": "boolean"
  },
  {
    "title": "string",
    "done": "boolean"
  },
  {
    "title": "string",
    "done": "boolean"
  }
]
```

- Response (201 - Created)

```json
{
  "message": "data Bulk Todo berhasil dibuat",
  "data": "Array of Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal membuat data Bulk Todo, pastikan data title sudah benar"
}
```

## 5. GET /todos

- Response (200 - OK)

```json
{
  "message": "Berhasil mendapatkan semua data Todo",
  "data": "Array of Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Terjadi Error, Gagal mendapatkan semua data todo"
}
```

## 6. GET /todos/:id

- Response (200 - OK)

```json
{
  "message": "Berhasil mendapatkan data Todo <id>",
  "data": "Object"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal mendapatkan data todo <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Todo <id> tidak ditemukan"
}
```

## 7. PUT /todos/:id

- Request body:

```json
{
  "title": "string",
  "done": "boolean"
}
```

- Response (200 - OK)

```json
{
  "message": "Berhasil mengedit data Todo <id>"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Gagal mengedit data todo <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Todo <id> tidak ditemukan"
}
```

## 8. DELETE /todos/:id

- Response (200 - OK)

```json
{
  "message": "Berhasil menghapus data Todo <id>"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Terjadi Error, gagal menghapus data todo <id>"
}
```

- Response (404 - Not Found)

```json
{
  "message": "Todo <id> tidak ditemukan"
}
```

## 9. DELETE /todos

- Response (200 - OK)

```json
{
  "message": "Berhasil menghapus semua data Todo"
}
```

- Response (400 - Bad Request)

```json
{
  "message": "Terjadi Error, berhasil menghapus data todo <id>"
}
```

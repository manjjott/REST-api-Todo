# Daily Todos API :clipboard:

A simple RESTful API for managing daily todos.

## Endpoints :rocket:

### Get Todos :clipboard:

- **Endpoint:** `/todos`
- **Method:** `GET`
- **Description:** Fetches all the todos.
- **Response:** Returns an array of todos in JSON format.

### Post Todo :heavy_plus_sign:

- **Endpoint:** `/todos`
- **Method:** `POST`
- **Description:** Creates a new todo.
- **Request Body:** Send a JSON object with the following properties:
  - `title`: The title of the todo.
  - `description`: The description of the todo.
- **Response:** Returns the created todo in JSON format.

### Patch Todo :pencil2:

- **Endpoint:** `/todos/{id}`
- **Method:** `PATCH`
- **Description:** Updates an existing todo.
- **Request Body:** Send a JSON object with the properties you want to update:
  - `title`: The new title of the todo.
  - `description`: The new description of the todo.
- **Response:** Returns the updated todo in JSON format.

### Delete Todo :x:

- **Endpoint:** `/todos/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a todo.
- **Response:** Returns a success message if the todo was deleted successfully.

## CORS :globe_with_meridians:

Cross-Origin Resource Sharing (CORS) is enabled in this API, allowing requests from different origins.

## Technologies Used :computer:

- Node.js
- Express.js

## Setup Instructions :gear:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Run the server using `npm start`.

Happy coding! :rocket:

### Get Todos

**Request:**

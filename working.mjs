{
  "openapi": "3.0.0",
  "info": {
    "title": "Sample API",
    "version": "1.0.0",
    "description": "This API manages users",
    "contact": {
      "name": "API Support",
      "email": "support@example.com"
    }
  },
  "servers": [
    {
      "url": "https://api.example.com"
    }
  ],
  "tags": [
    {
      "name": "users",
      "description": "Operations related to users"
    }
  ],
  "paths": {
    "/users": {
      "get": {
        "operationId": "getUsers",
        "summary": "Get a list of users",
        "description": "Retrieve all users",
        "tags": ["users"],
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "post": {
        "operationId": "createUser",
        "description": "Create a new user",
        "tags": ["users"],
        "responses": {
          "201": {
            "description": "Created"
          }
        }
      }
    }
  }
}

{
  "openapi": "3.0.0",
  "info": {
    "title": "Sample API (Not working)",
    "version": "1.0.0",
    "description": "",  // ❌ Empty, violates spectral:oas
    "contact": {}       // ❌ Missing name/email
  },
  "servers": [],        // ❌ Empty, violates spectral:oas
  "tags": [
    {
      "name": "users",
      "description": "Operations related to users"
    }
  ],
  "paths": {
    "/users": {
      "get": {
        "description": "",          // ❌ Missing description
        "tags": ["accounts"],       // ❌ Not defined in global tags
        "responses": {
          "200": {
            "description": "OK"
          }
        }
      },
      "post": {
        "operationId": "",          // ❌ Empty operationId
        "tags": [],                 // ❌ Missing tags
        "responses": {
          "201": {
            "description": "Created"
          }
        }
      }
    }
  }
}

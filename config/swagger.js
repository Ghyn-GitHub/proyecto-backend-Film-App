/**
 * Especificación OpenAPI de la API, generada con swagger-jsdoc a partir de
 * los comentarios `@swagger` de routes/*.js. app.js la sirve en /api-docs.
 *
 * @module config/swagger
 */

const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Film App API",
            version: "1.0.0",
            description: "API para gestión de películas y usuarios"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },
    apis: ["./routes/*.js"]
};

const specs = swaggerJsdoc(options);

module.exports = specs;
const app = require("./server"); // Importando o Express configurado
const serverless = require("serverless-http");

module.exports = serverless(app);

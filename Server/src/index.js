const server = require("./App")
const PORT = 3001;
const { conn } = require("./DB_connection");


conn.sync({ force: true }).then(() => {
   // Inicia el servidor
   server.listen(PORT, () => {
      console.log('Server raised in port:/cartnetapp ' + PORT);
   });
});
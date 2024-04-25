// importando o app de dentro de app.js
import app from "./app";

// para iniciar o servidor, la no terminal:  node src/server.js
// o app está sendo exposto na porta 3001 para ser utilizado como uma API
app.listen(3001, () => console.log("O servidor está rodando na porta 3001..."));

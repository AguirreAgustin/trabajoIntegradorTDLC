const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
});


const AnalizadorLexico = () => {
    var entradaUsuario = process.openStdin();

    entradaUsuario.addListener("data", function (entrada) { 
        console.log("ENTRADA DEL USUARIO: ", entrada.toString())
    });
}


server.listen(port, hostname, () => {
    AnalizadorLexico();
});
  
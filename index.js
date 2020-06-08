const http = require("http")
const hostname = "127.0.0.1"
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
});


const AnalizadorLexico = () => {
    var entradaUsuario = process.openStdin();
    entradaUsuario.addListener("data", function (entrada) { 
        var entradaSplit = entrada.toString().split(" ")

        for (let index = 0; index < entradaSplit.length; index++) {
            clasificador(entradaSplit[index])
        }      
    })
}


const clasificador = (palabra) => {
    operadoresBooleanos(palabra)
    operadoresAritmeticos(palabra)
}


const operadoresBooleanos = (palabra) => {
    if(palabra === "=="){
        console.log(palabra, "Es un operador de igualdad")
    }
    if(palabra === "&&"){
        console.log(palabra, "Es un operador AND booleano")
    }
    if(palabra === "||"){
        console.log(palabra, "Es un operador OR booleano")
    }
    if(palabra === "!"){
        console.log(palabra, "Es un operador NOT booleano")
    }
}

const operadoresAritmeticos = (palabra) => {
    if(palabra === "+"){
        console.log(palabra, "Es un operador aritmetico de suma")
    }
    if(palabra === "-"){
        console.log(palabra, "Es un operador aritmetico de resta")
    }
    if(palabra === "/"){
        console.log(palabra, "Es un operador aritmetico de division")
    }
    if(palabra === "*"){
        console.log(palabra, "Es un operador aritmetico de multiplicacion")
    }
    if(palabra === "%"){
        console.log(palabra, "Es un operador aritmetico de modulo")
    }
}


server.listen(port, hostname, () => {
    AnalizadorLexico();
});
  


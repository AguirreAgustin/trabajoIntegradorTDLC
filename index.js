const http = require("http")
const hostname = "127.0.0.1"
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
});

const AnalizadorLexico = () => {
    console.log("Entrada:")
    var entradaUsuario = process.openStdin();
    entradaUsuario.addListener("data", function (entrada) {
        entrada = entrada.toString().replace("\r\n","") 
        var entradaSplit = entrada.split(" ")
        console.log("Salida:")
        for (let index = 0; index < entradaSplit.length; index++) {
        clasificador(entradaSplit[index])
        }      
    })
}


const clasificador = (palabra) => { 
    operadoresBooleanos(palabra)
    operadoresAritmeticos(palabra)
    operadoresDeComparacion(palabra)
    operadoresDeAsignacion(palabra)
    palabrasReservadas(palabra)
    delimitadores(palabra)
    simbolosEspeciales(palabra)
    literales(palabra)
}

const literales = (palabra) => {

    var controlEsNumero = parseInt(palabra)

    if(!isNaN(controlEsNumero)){
        console.log(palabra, "Es un número")
    }

} 

const simbolosEspeciales = (palabra) =>{

    if(palabra === "//"){
        console.log(palabra, "Es el inicio de un comentario")
    }

}

const delimitadores = (palabra) => {

    if(palabra === "{"){
        console.log(palabra, "Es el inicio de cuerpo de funciones")
    }
    if(palabra === "}"){
        console.log(palabra, "Es el fin de cuerpo de funciones")
    }
    if(palabra === "("){
        console.log(palabra, "Es el inicio de cuerpo de parámetros")
    }
    if(palabra === ")"){
        console.log(palabra, "Es el fin de cuerpo de parámetros")
    }
    if(palabra === "["){
        console.log(palabra, "Es el inicio de cuerpo de arreglo")
    }
    if(palabra === "]"){
        console.log(palabra, "Es el fin de cuerpo de arreglo")
    }
    if(palabra === ";"){
        console.log(palabra, "Es el fin de sentencia")
    }
    if(palabra === "''"){
        console.log(palabra, "Es el comienzo/fin de caracter")
    }
}

const palabrasReservadas = (palabra) =>{

    if(palabra === "var"){
        console.log(palabra, "Es una palabra reservada que indica una 'variable'")
    }
    if(palabra === "function"){
        console.log(palabra, "Es una palabra reservada que indica una 'función'")
    }
    if(palabra === "const"){
        console.log(palabra, "Es una palabra reservada que indica una 'constante'")
    }
    if(palabra === "booolean"){
        console.log(palabra, "Es una palabra reservada que indica 'tipo booleano'")
    }
    if(palabra === "false"){
        console.log(palabra, "Es una palabra reservada que indica valor 'falso'")
    }
    if(palabra === "true"){
        console.log(palabra, "Es una palabra reservada que indica valor 'verdadero'")
    }
    if(palabra === "return"){
        console.log(palabra, "Es una palabra reservada que indica un 'retorno'")
    }
    if(palabra === "if"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control condicional'")
    }
    if(palabra === "else"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control condicional'")
    }
    if(palabra === "while"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control en bucle'")
    }
    if(palabra === "switch"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control de múltiples casos'")
    }
    if(palabra === "for"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control cíclica'")
    }
}

const operadoresDeAsignacion = (palabra) =>{

    if(palabra === "="){
        console.log(palabra, "Es un operador de asignación")
    }

}

const operadoresDeComparacion = (palabra) =>{
    if(palabra === "=="){
        console.log(palabra, "Es un operador de igualdad")
    }
    if(palabra === "!="){
        console.log(palabra, "Es un operador de distinto")
    }
    if(palabra === ">="){
        console.log(palabra, "Es un operador de mayor igual que")
    }
    if(palabra === "<="){
        console.log(palabra, "Es un operador de menor igual que")
    }
    if(palabra === ">"){
        console.log(palabra, "Es un operador de mayor que")
    }
    if(palabra === "<"){
        console.log(palabra, "Es un operador de menor que")
    }
}

const operadoresBooleanos = (palabra) => {
    
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
        console.log(palabra, "Es un operador aritmético de suma")
    }
    if(palabra === "-"){
        console.log(palabra, "Es un operador aritmético de resta")
    }
    if(palabra === "/"){
        console.log(palabra, "Es un operador aritmético de división")
    }
    if(palabra === "*"){
        console.log(palabra, "Es un operador aritmético de multiplicación")
    }
    if(palabra === "%"){
        console.log(palabra, "Es un operador aritmético de módulo")
    }
}


server.listen(3000, "", () => {
    AnalizadorLexico();
});
  


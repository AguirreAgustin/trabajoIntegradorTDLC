const http = require("http")
const hostname = "127.0.0.1"
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200
});

var identified = false

const AnalizadorLexico = () => {
    console.log("Entrada:")
    var entradaUsuario = process.openStdin();
    entradaUsuario.addListener("data", function (entrada) {
        entrada = entrada.toString().replace("\r\n","") 
        var entradaSplit = entrada.split(" ")
        console.log("Salida:")
        for (let index = 0; index < entradaSplit.length; index++) {
            identified = false
            if(entradaSplit[index+1] === "="){
                console.log(entradaSplit[index], " Es una variable")
                identified = true
            }
            clasificador(entradaSplit[index])
        }      
    })
}


const clasificador = (palabra) => { 
    !identified && operadoresBooleanos(palabra)
    !identified && operadoresAritmeticos(palabra)
    !identified && operadoresDeComparacion(palabra)
    !identified && operadoresDeAsignacion(palabra)
    !identified && palabrasReservadas(palabra)
    !identified && delimitadores(palabra)
    !identified && simbolosEspeciales(palabra)
    !identified && literales(palabra)
    !identified && console.log(palabra, " No ha sido identificado")
}

const literales = (palabra) => {
    
    if(!isNaN(palabra)){
        console.log(palabra, "Es un número")
        identified = true
    }

} 

const simbolosEspeciales = (palabra) =>{

    if(palabra === "//"){
        console.log(palabra, "Es el inicio de un comentario")
        identified = true
    }

}

const delimitadores = (palabra) => {

    if(palabra === "{"){
        console.log(palabra, "Es el inicio de cuerpo de funciones")
        identified = true
    }
    if(palabra === "}"){
        console.log(palabra, "Es el fin de cuerpo de funciones")
        identified = true
    }
    if(palabra === "("){
        console.log(palabra, "Es el inicio de cuerpo de parámetros")
        identified = true
    }
    if(palabra === ")"){
        console.log(palabra, "Es el fin de cuerpo de parámetros")
        identified = true
    }
    if(palabra === "["){
        console.log(palabra, "Es el inicio de cuerpo de arreglo")
        identified = true
    }
    if(palabra === "]"){
        console.log(palabra, "Es el fin de cuerpo de arreglo")
        identified = true
    }
    if(palabra === ";"){
        console.log(palabra, "Es el fin de sentencia")
        identified = true
    }
    if(palabra === "''"){
        console.log(palabra, "Es el comienzo/fin de caracter")
        identified = true
    }
}

const palabrasReservadas = (palabra) =>{

    if(palabra === "var"){
        console.log(palabra, "Es una palabra reservada que indica una 'variable'")
        identified = true
    }
    if(palabra === "function"){
        console.log(palabra, "Es una palabra reservada que indica una 'función'")
        identified = true
    }
    if(palabra === "const"){
        console.log(palabra, "Es una palabra reservada que indica una 'constante'")
        identified = true
    }
    if(palabra === "booolean"){
        console.log(palabra, "Es una palabra reservada que indica 'tipo booleano'")
        identified = true
    }
    if(palabra === "false"){
        console.log(palabra, "Es una palabra reservada que indica valor 'falso'")
        identified = true
    }
    if(palabra === "true"){
        console.log(palabra, "Es una palabra reservada que indica valor 'verdadero'")
        identified = true
    }
    if(palabra === "return"){
        console.log(palabra, "Es una palabra reservada que indica un 'retorno'")
        identified = true
    }
    if(palabra === "if"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control condicional'")
        identified = true
    }
    if(palabra === "else"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control condicional'")
        identified = true
    }
    if(palabra === "while"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control en bucle'")
        identified = true
    }
    if(palabra === "switch"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control de múltiples casos'")
        identified = true
    }
    if(palabra === "for"){
        console.log(palabra, "Es una palabra reservada que indica una estructura de 'control cíclica'")
        identified = true
    }
}

const operadoresDeAsignacion = (palabra) =>{

    if(palabra === "="){
        console.log(palabra, "Es un operador de asignación")
        identified = true
    }

}

const operadoresDeComparacion = (palabra) =>{
    if(palabra === "=="){
        console.log(palabra, "Es un operador de igualdad")
        identified = true
    }
    if(palabra === "!="){
        console.log(palabra, "Es un operador de distinto")
        identified = true
    }
    if(palabra === ">="){
        console.log(palabra, "Es un operador de mayor igual que")
        identified = true
    }
    if(palabra === "<="){
        console.log(palabra, "Es un operador de menor igual que")
        identified = true
    }
    if(palabra === ">"){
        console.log(palabra, "Es un operador de mayor que")
        identified = true
    }
    if(palabra === "<"){
        console.log(palabra, "Es un operador de menor que")
        identified = true
    }
}

const operadoresBooleanos = (palabra) => {
    
    if(palabra === "&&"){
        console.log(palabra, "Es un operador AND booleano")
        identified = true
    }
    if(palabra === "||"){
        console.log(palabra, "Es un operador OR booleano")
        identified = true
    }
    if(palabra === "!"){
        console.log(palabra, "Es un operador NOT booleano")
        identified = true
    }
}

const operadoresAritmeticos = (palabra) => {
    if(palabra === "+"){
        console.log(palabra, "Es un operador aritmético de suma")
        identified = true
    }
    if(palabra === "-"){
        console.log(palabra, "Es un operador aritmético de resta")
    }
    if(palabra === "/"){
        console.log(palabra, "Es un operador aritmético de división")
        identified = true
    }
    if(palabra === "*"){
        console.log(palabra, "Es un operador aritmético de multiplicación")
        identified = true
    }
    if(palabra === "%"){
        console.log(palabra, "Es un operador aritmético de módulo")
        identified = true
    }
}


server.listen(3000, "", () => {
    AnalizadorLexico();
});
  


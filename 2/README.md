# Test 2

El fragmento de código de nuestro fichero `test.js` nos devuelve un output no 
deseado. Queremos imprimir un valor incremental a cada segundo pero lo que 
nos devuelve el código es el mismo valor en cada iteración. 

1. Sin necesidad de ejecutar el código, ¿sabrías decirnos qué valor imprimiría
 por consola el script? ¿Cuál es el motivo?
 El codigo que hay primero hace el bucle de repeticion hasta 5 y luego se ejecuta el settimeout y cada 1000 ms imprime 5
2. Sabiendo que el output que buscamos es el que encuentras bajo estas líneas… 
¿Cómo solucionarías el fragmento de código para que el output sea el deseado?
```
for (var i = 0; i < 5; i++) {
    var j =0;
    setTimeout(function () {
        console.log(">",j++);
    }, 1000* i)
}

```

```
    > 0
    > 1
    > 2
    > 3
    > 4
```
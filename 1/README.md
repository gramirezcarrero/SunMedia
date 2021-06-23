# Test 1

Para responder a este test encontrarás un archivo llamado `test.js` en esta 
misma carpeta donde hay un pequeño fragmento de código que deberás analizar 
y responder a las siguientes cuestiones. 

1. En el fragmento de código de nuestro archivo (`test.js`) podemos encontrar
 hasta 3 variables. ¿Podrías decirnos cuál sería el valor de todas ellas al 
 finalizar la ejecución del script?
  # Solucion
 el valor de color es : 
```
{
  red: '#FF0000',
  green: '#00FF00',
  blue: '#0000FF',
  white: '#FFFFFF',
  black: '#000000'
}
```
2. Modifica el código para que las variables `rgb` y `wb` mantengan sus valores 
iniciales y `colors` tenga los valores de ambas al finalizar la ejecución del 
script.
 # Solucion
planteo en vez de un Object.assing crear una nueva basada en ecma... 

```
const colors_2 = {...rgb, ...wb}
```
3. Además, tenemos un bug localizado en dispositivos con Internet Explorer… 
El código de nuestro script no funciona y necesitamos que se ejecute también 
en este navegador. ¿Sabrías identificar cuál es el problema? ¿Qué solución nos
 propones?
 # Solucion
 Hacer un reduce en ultima instancia usar webpack para cubrir la necesidad o alguna libreria como modernizer. o babel par transpilar a es5:
 ```
 var objs = [rgb, wb],
    result =  objs.reduce(function (r, o) {
        Object.keys(o).forEach(function (k) {
            r[k] = o[k];
        });
        return r;
    }, {});

console.log(result);
 ```

**PS**: No es estrictamente necesario tener Internet Explorer para poder identificar y/o resolver el bug. 

# Test 3

En este caso, tenemos un código usando el objeto `Promise` (Promesa). Las *promises* 
(promesas) nos permiten manejar situaciones asíncronas en nuestras ejecuciones, 
pero tenemos un pequeño problema… No es una solución totalmente cross-browser. 
Sabemos que no funciona en Internet Explorer así que nos gustaría saber cómo 
modificarías nuestro código (`test.js`) para que funcione correctamente.

 # Solucion
Implementaria babel para solucionar este problema y me iria por una libreria que me permita transpilar que se llama babel-polyfill
## Desarrollo:
- Se escribe una configuracion de babelrc
- Se escribe un script para hacer el build
- Para ejecutar ``` npm run build ``` genera una carpeta llamada es5.

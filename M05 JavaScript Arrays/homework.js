/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
  return array[0];

}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
      return array[array.length - 1];
   }

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
      return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var dobles = array.map(function (x) {
     return x + 1
   });
     return dobles;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   const indice = array.push(elemento) ;
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   const indice = array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   //var suma; 
   //for (var i=0;i < palabras.length;i++){
   //   suma = suma + palabras[i] + " ";
   // }
   //    return suma;
  
  // for (var i=0;i < palabras.length;i++){
  //    suma = concat(palabras[i].join(" "));
  // }
     return palabras.join(" ");      
 }

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
//   for (var i=0;i<array.length;i++){
//      if (array[i] == 10){
//         return true;
//      }else{
//         if (i = array.length){
//            return false;   
//       }    
//      }
//    } 
//   }

  // var array = [2,3,5,7];
   const idx = array.find(( x ) => x == elemento)
   if (idx == elemento){
      return true;
   }else{
      return false;
   }  
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
      let suma = 0;
      var idx  = arrayOfNums.map(function( x ){
          return suma = suma + x     
      });
      return suma; 

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var suma = 0;
   var idx = resultadosTest.map(function ( x ){
      suma = suma + x
   });
   return  suma / resultadosTest.length  
}

function numeroMasGrande(arrayOfNums) {

   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   // return arrayOfNums.sort.pop();
   //var arrayres = [];
   //var arrayOfNums = [5,1,7,3,2,0,6,10];
   //var arrayres=arrayOfNums.sort();
   //console.log(arrayres);
   var elemcopy = 0;
   var band=0;
   do 
     for (var i = 0;i<arrayOfNums.length;i++){
       if (arrayOfNums[i]>arrayOfNums[i+1]){ 
           band = 1;
           elemcopy = arrayOfNums[i];
           arrayOfNums[i] = arrayOfNums[i+1]; 
           arrayOfNums[i+1] = elemcopy;
      }
   }
    while (band=0)      
     return arrayOfNums.pop(); 
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let res = 1; 
   if (arguments.length == 0){
      return 0;
   }else
        if (arguments.length == 1 ) {
            return 1;
        }    
           for (var i=0;i<arguments.length;i++){
               res  = res *  arguments[i] ;
            }
            return res;
         }         

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var acumulador = 0;
   for (var i=0;i<array.length;i++){
      if (array[i]>18){
         acumulador = acumulador + 1
      }  
   }
   return acumulador; 
}
    
function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   //var nrodiaordenado = [];
   //nrodiaordenado = numeroDeDia.sort();
   //for (var i=0;i<=numeroDeDia.length;i++)
   //var nomdia = ['Domingo','Lunes','Martes','Miercoles','jueves','Viernes','Sabado'];
   if (numeroDeDia == 1 || numeroDeDia == 7){
        return "Es fin de semana";
   }else{
        return "Es dia laboral";     
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var str = num.toString();
   for (var i=0;i<str.length;i++){
        if (str[0] == 9){
          return true;
        }else{
          return false;
        }  
   }
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
     // Caso contrario retornar false.
   // Tu código:
   var res = 0
   var xban=0
   do
   for (var i=0;i<array.length;i++){
      if(array[i] == array[i+1]){
             res = res + 1
             xban = 1
      }else
        if (array[i] != array[i+1] && xban == 0){
        xban = 0
      }          
   }
   while ( i < array.length)
   if (xban == 1 && res == array.length-1){
       return true;
   }else{
       return false;
   }
}  

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

/* 
 * Programa: a04_scope.js
 * Objetivo: scope
 * 
 * No forma parte de un curso de "ExtJS", pero si es necesario repasar
 * temas base de JavaScript para entender mejor el framework.
 * 
 *
 * Scope: Se refiere al "alcance" de las variables, esto es, donde
 *        es "visible" la variable. Este es un tema muy importante
 *        para cualquier programador "decente"... :)
 * 
 */

var var_global = 'global';


Ext.onReady(function () {

    // 1. Las variables globales son aquellas que se declaran fuera
    //    de cualquier función y pertenece al conexto de la ventana
    //    actual (window).
    console.log(var_global);
    console.log(window.var_global);

    // 2. Tambien se pueden declarar variables globales, asignandoles
    //    un valor sin usar la palabra reservada "var".
    var_global_in = 'global_in';
    console.log(var_global_in);
    console.log(window.var_global_in);


    // 3. En JavaScript no existen las variables de bloque (las que
    //    se defininen dentro de bloques de codigo tales como for,
    //    while, if, etc.).
    //
    var test1 = 'test1';
    if (true) {
        // Si JavaScript funcionara como en otros lenguajes (como
        // por ejemplo C++), la variable "test1" declarada dentro
        // de este if, sería independiente de la declarada fuera
        // del if.
        //
        var test1 = 'test1.b';
        console.log(test1);
    }
    console.log(test1);


    /* 4. En JS, existen las variables de función,  es  decir  que las
     *    variables declaradas dentro de una función solo son visibles
     *    dentro de ella misma (la función).
     *    Por ejemplo en este caso, todas las variables declaradas ---
     *    dentro de esta función (Ext.onReady) van a estar disponibles
     *    mientras exista la función... para efectos practicos, en ---
     *    nuestro caso, estarían vivas siempre.
     *    
     *    EXTRA:
     *    Primero declaro la función  y  la guardo en la variable "fn"
     *    para posteriormente mandarla llamar (ejecutar) en el momento
     *    que lo necesitemos.
     *    Esto es un poco "raro" pero perfectamente posible en JS.
     */
    var fn = function () {
        var valor1 = "mi valor";
        console.log(valor1);
    }
    fn();


    /* Para comprobar el punto anterior:
     * 1: Declaro la variable "c" (dentro de onReady)
     * 2: Declaro una función que usa esta variable (inc)
     *    --Lo que hace es incrementar el valor--
     * 3: Mediante la función de JS "setInterval" ejecuto la función 
     *    "inc" cada 2 segundos.
     * 
     */
    var c = 0;
    var inc = function () {
        c++;
        console.log(c);
    }
    setInterval(inc, 2000);

}); // Hasta aqui se termina onReady()

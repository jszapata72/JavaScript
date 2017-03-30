/* 
 * Programa:a06_closures.js
 * Objetivo: closures
 *
 * Closures:
 * Los closures son funciones que manejan variables independientes.
 * En otras palabras, la función definida en el closure "recuerda" 
 * el entorno en el que se ha creado.
 *
 * Otra definición:
 * Los closures en JavaScript son funciones que llevan información
 * asociada relativa al momento en que son invocadas.
 *
 */
Ext.onReady(function () {

    /*
     * Uno de los usos mas comunes: Una función que tiene
     * otra función (en este caso anonima) que se programa
     * para que se ejecute cada ciertos minutos.
     * Esta función tiene una variable local "cnt", a la
     * cual puede acceder la función interna (la que se 
     * ejecuta cada cierto tiempo)
     *
     * Lo "especial" o "raro" de esto es que estamos
     * "accediendo" a las variables (cnt) despues de que
     * la función ya "caduco".
     * 
     */
    function fnHola(txt, seg) {
        var cnt = 0;

        setInterval(function () {
            cnt++;
            console.debug(txt + ': ' + cnt);
        }, 1000 * seg);
    }
    fnHola("Texto1", 4);
    fnHola("Texto2", 1);


    /* Un ejemplo sencillo: Aqui estamos declarando una función
     * que crea otra función (muestraNombre), la cual accede a
     * la variable "nombre". Posteriormente accedemos a estos
     * valores a traves de la función.
     *
     */
    function creaFunc() {
        var nombre = "Mozilla";
        function muestraNombre() {
            alert(nombre);
        }
        return muestraNombre;
    }
    var miFunc = creaFunc();
    miFunc();


    /* Algo mas "interesante": Aqui tenemos una función que 
     * "construye" funciones. En este caso estamos creando
     * funciones que suma el numero que se le da cuando se
     * crea mas el numero que se le da cuando se manda
     * llamar :)... esta "raro" no... :)
     * 
     * Pero esto es muy interesante, con esta caracteristica
     * de JavaScript se pueden hacer muchas cosas!
     * 
     */
    function creaSumador(x) {
        return function (y) {
            return x + y;
        };
    }
    var suma5 = creaSumador(5);
    var suma10 = creaSumador(10);
    console.log(suma5(2));  // muestra 7
    console.log(suma10(2)); // muestra 12 

});
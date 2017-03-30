/* 
 * Programa: a04_this.js
 * Objetivo: contexto y la variable "this"
 *
 * Contexto: Es el objeto en el que se esta operando en este momento en
 *           la ejecución de nuestro programa.
 *
 * this: Hace referencia al contexto actual (o dicho de otra manera,
 *       hace referencia al objeto actual).
 *
 */

Ext.onReady(function () {

    // Resultado: window, que es el contexto "global"
    console.log(this);  // this=window


    // Todas las funciones crean un nuevo "scope", pero si no se
    // le ha especificado en cual contexto se va a ejecutar, toma
    // "window" como contexto.
    //
    function test() {
        console.log(this);  // this=window
    };
    test();


    // Lo normal: Si estamos trabajando dentro de un objeto, el
    // contexto es el propio objeto!!!
    //
    objeto = {
        name: 'objeto',
        prop1: 'uno',
        prop2: 'dos',

        run: function () {
            console.log(this);  // this=objeto
        }
    };
    objeto.run();


    // Lo no tan normal: Si tenemos un metodo (función) dentro de un
    // objeto, y dentro de este metodo otra función (anonima o no)
    // toma el contexto global (window), no el contexto del objeto.
    //
    objeto2 = {
        name: 'objeto2',
        prop1: 'uno',
        prop2: 'dos',

        run: function () {
            console.log(this);  // this=objeto2

            // función dentro de un metodo
            function test() {
                console.log(this);  // this=window
            };
            test();

            // función anonima dentro de un metodo
            (function () {
                console.log(this);  // this=window
            })();
        }
    };
    objeto2.run();



    // Lo raro: Para que una función que esta dentro de otra función
    //          tome el contexto del objeto que la contiene debe de
    //          "autoejecutarse" en el caso de las funciones anonimas
    //          o definir la función como un metodo del objeto.
    //
    objeto3 = {
        name: 'objeto3',
        prop1: 'uno',
        prop2: 'dos',

        run: function () {
            console.log(this);  // this=Objeto3

            // función dentro de un metodo
            this.test = function () {
                console.log(this);  // this=objeto3
            };
            this.test();

            // función anonima dentro de un metodo
            (function () {
                console.log(this);  // this=objeto3
            }).call(this);
        }
    };
    objeto3.run();


    // Por ultimo: Existe una manera para ejecutar un metodo (función)
    //             en otro contexto (al que se encuentra). Este es el
    //             metodo "apply" que en JavaScrit tienen implicitas
    //             todas las funciones.
    //
    //             ESTO ES BASTANTE INTERESANTE, CUANDO QUIERES HACER
    //             LIBRERIAS CON FUNCIONES UTILES PARA CUALQUIER OBJETO.
    // 
    function miFuncion() {
        console.log(this);
    };
    miFuncion();   // this=window
    miFuncion.apply(objeto3);  // this=objeto3

});
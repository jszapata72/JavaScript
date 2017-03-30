/**
 * Programa: a02_declara_objetos.js
 * Objetivo: declarando objetos
 * 
 * No forma parte de un curso de "ExtJS", pero si es necesario repasar
 * la "POO" en JavaScript para entender mejor el framework.
 * 
 */
Ext.onReady(function () {

    // Los objetos en JavaScript se pueden declarar de varias maneras
    var o1 = {};
    var o2 = new Object();


    // Tambien se les puede asignar propiedades de estas dos maneras:
    o1.prop1 = 0;
    o2["prop1"] = 100;

    // y acceder a su valor de estas dos maneras:
    console.log(o1["prop1"]);
    console.log(o2.prop1);


    // Tambien es posible asignar funciones a nuesto objeto
    // ... que raro, no?
    // ... por cierto, es importante hacer notar el uso de "this"
    // 
    o2.imprimeNumero = function () {
        console.log("El numero es: " + this.prop1);
    }

    // Y por supuesto, es posible usar esta función!
    o2.imprimeNumero();



    /**
     * Y por ultimo esta, por supuesto, JSON; que es la manera
     * mas practica (y completa) de declarar un objeto.
     *
     * JSON, no es mas que una lista de propiedades separados
     * por comas. Cada propiedad debe tener el nombre y el
     * valor separado por dos puntos, el nombre de la propiedad
     * puede estar entre comillas (o sin comillas). Los valores
     * puedes ser cualquiera de los valores aceptados por
     * JavaScripts (incluyendo otro objeto o funciones!) y debe 
     * estar entre llaves ({}).
     *
     */
    var o3 = {
        prop1: 1,  // número
        prop2: 'Hola',  // string
        prop3: [0, 1, 2, 3],  // array de numeros
        prop4: true, // valor booleano

        // una función
        prop5: function () {
            console.log('prop4');
        },

        // otro objeto dentro el primero
        prop6: {
            prop1: 800,
            prop2: 'string'
        }
    };

    console.log(o3.prop1);
    console.log(o3.prop6.prop1);
});
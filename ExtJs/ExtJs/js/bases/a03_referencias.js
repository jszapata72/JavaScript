/* 
 * Programa: a03_referencias.js
 * Objetivo: referencias
 * 
 * No forma parte de un curso de "ExtJS", pero si es necesario repasar
 * la "POO" en JavaScript para entender mejor el framework.
 * 
 */
Ext.onReady(function () {

    // Objeto vacio (si te acuerdas de JSON, los objetos van entre {})
    var objeto = {};

    // Creamos una referencia a este objeto
    var ref = objeto;

    // Agregamos una propiedad al objeto original.
    // (Hay que recordar que para agregar una propiedad a un objeto
    //  en JavaScript, basta con asignarle un valor)
    //
    objeto.miPropiedad = 100;

    // Mostramos el valor de la nueva propiedad usando la referencia (ref)
    console.log(ref.miPropiedad);


    // ======== Algo "raro" =========
    var objeto1 = { miPropiedad: 'Original' };  // Creamos objeto1
    var ref = objeto1;                          // Definimos referencia a este objeto
    var objeto1 = { miPropiedad: 'Pirata' };    // Creamos nuevo objeto (con el mismo nombre)

    // Ahora objeto1 y ref son diferentes !!!
    console.log(objeto1.miPropiedad);
    console.log(ref.miPropiedad);
});
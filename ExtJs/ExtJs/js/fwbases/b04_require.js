/* 
 * Programa: b04_require.js
 * Objetivo: Ext.require, Ext.Loader.require
 * 
 * NOTA: Se me paso comentar en los ejemplos anteriores: Como todos
 *       sabemos, los archivos de script (*.js) se cargan desde la
 *       pagina HTML y/o ASP con las lineas
 *       
 *       <script type="text/javascript" src="xxx.js"></script>
 *       
 *       Sería muy incomdo agregar una linea por cada una de nuestras
 *       clases (o por cada uno de los archivos de nuestro programa),
 *       ademas de que sería muy tardado el inicio de nuestro sistema
 *
 *       ExtJS4 tiene la ventaja de la "carga dinamica", de tal manera
 *       que se van cargando los archivos conforme se van necesitando,
 *       al momento de ejecutarse. Una de estas maneras es, con el uso
 *       de "Ext.create", el cual, si no esta definida la clase que --
 *       necesitamos, la intenta cargar.
 *
 *       Otra manera es la que se comenta en este ejemplo.
 * 
 */
Ext.onReady(function () {

    /* Ext.Loader.require:
     * ===================
     *   Cuando se crea un objeto con el metodo "Ext.create" y la clase 
     * no esta definida, el ExtJS intenta cargar el script que contiene
     * la clase (basandose en el estandar que se menciono antes).
     *
     *   Nosotros podemos realizar la carga tambien con el metodo -----
     * "Ext.Loader.require". La ventaja de usar este metodo es que ----
     * esta función nos permite saber cuando se tuvo exito con la carga
     * del archivo (con el segundo parametro de la función). De tal ---
     * manera que podemos crear un objeto de la clase, despues de que -
     * se cargo.
     *
     */
    Ext.Loader.require('App.base.Objeto', function () {
        console.log('Ok, cargado');
        var obj1 = new App.base.Objeto();
        var obj2 = Ext.create('App.base.Objeto');
    });


    /* Ext.require:
     * ============
     * Este metodo es un poco mas practico, porque permite cargar varios
     * archivos (clases) a la vez; pero pierde la posibilidad de saber -
     * si tuvo exito o no la carga.
     *
     * NOTA: En este caso va a fallar la carga de los tres intentos, ya
     *       que no tengo ninguno de los archivos del ejemplo :).
     *       Si se fijan en la consola del navegador, van a ver los tres
     *       errores.
     *
     */
    Ext.require([
        'App.base.Objeto1',
        'App.base.Objeto2'
    ]);

});
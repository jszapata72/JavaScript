/* 
 * Programa: js/fwbases/b01_define.js
 * Objetivo: Ext.create
 *           Ext.Loader.setConfig
 *           Ext.Loader.setPath
 *
 */
Ext.onReady(function () {

    // Defino la clase App.Usuario
    Ext.define("App.Usuario", {
        config: {
            nombre: 'Selene',
            edad: 0
        },

        constructor: function (cfg) {
            this.initConfig(cfg);
        }
    });


    // 
    // En el ejemlo anterior creamos los objetos con "new"
    // Otra manera de crear objetos en ExtJS es usando el metodo "create"
    // 
    var usr = Ext.create("App.Usuario", {
        nombre: 'Juan Antonio',
        edad: 35
    });
    console.log(usr.nombre);
    console.log(usr.getNombre());


    /* Carga bajo demanda (carga dinamica):
     * ====================================
     * Una de las ventajas que tiene Ext.create (en lugar de new) es que
     * el metodo Ext.create en el caso de que el objeto no este cargado
     * (que el script donde esta declarado el objeto no este cargado) 
     * realiza la carga (dinamicamente, se dice) del script (.js) que 
     * contiene dicho objeto. Para esto, debemos seguir un estandar en
     * el nombre del objeto y la ruta al archivo.
     *
     * Por ejemplo, en la linea de abajo. Para que se realize la carga
     * dinamicamente del archivo que contenga la clase "App.base.Objeto"
     * debe haber un archivo llamado "Objeto.js" dentro de la ruta
     * "base", o sea, debe existir el archivo "/base/Objeto.js".
     *
     * Si se fijan, el estandar para nombrar las clases es:
     * 1. La primer letra del nombre de la aplicación en mayusculas.
     * 2. La ruta al objeto en minusculas
     * 3. La primer letra del nombre de la clase en mayusculas.
     * 
     * Para definir el "root path" de nuestra aplicación, podemos usar
     * el metodo "Ext.loader.setPath" o "Ext.loader.setConfig".
     *
     * El estandar se sigue para que, cuando tengamos una aplicación
     * muy grande, no "choquen" los nombres de nuestras clases.
     * Asi podemos tener una clase "Factura" para proveedores y otra
     * clase "Factura" para clientes.
     * (App.proveedores.Factura y App.clientes.Factura).
     *
     * Desventajas:
     * ============
     * 1. Solo se puede definir una clase por archivo.
     * 2. El nombre de la clase tiene que corresponder
     *    con el nombre de archivo.
     * 3. El "namespace" de la clase debe corresponder
     *    con la ruta del archivo.
     *
     * En este ejemplo, nos marca un error debido a que no existe el
     * archivo en nuestro proyecto.
     *
     */

    // El path de nuestra aplicación, se puede configurar asi:
    Ext.Loader.setPath({
        'App': './js'
    });

    // O tambien asi (este metodo es mas completo):
    Ext.Loader.setConfig({
        enabled: true,
        paths: {
            'App': './js'
        }
    });

    /* Esto va a fallar, porque el objeto "App.base.Objeto" no esta definido
     * en este codigo y no existe el archivo ./js/base/Objeto.js
     *
     */
    var obj = Ext.create("App.base.Objeto")

});

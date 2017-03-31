/* 
 * Programa: js/fwbases/b01_define.js
 * 
 * Objetivo: Ext.define
 * 
 * Ademas las opciones:
 *           constructor
 *           config
 *           statics
 *           extend
 *           singleton
 *
 * Ahora si, vamos a ver como se manejan las clases y los objetos
 * dentro de ExtJS.
 *
 */
Ext.onReady(function () {

    /* Ext.define: 
     * ===========
     * Define una clase. Se debe proporcionar el nombre (que debe tener
     * una estructura de acuerdo a nuestra aplicación) y las propiedades
     * y funciones de nuestra clase.
     *
     * Hay una función especial que se puede definir "constructor" que se
     * ejecuta en el momento en que se construye un objeto de esta clase.
     * 
     */
    Ext.define("app.Usuario", {
        // Propiedades a las que se puede acceder desde fuera
        // (En realidad cualquier propiedad puede accederse
        //  "desde afuera", solo que al incluirla dentro de 
        //  "config" se generan automaticamente los "setters
        //  y getters". Ademas, se puede incluir dentro del
        // constructor --initConfig--).
        //
        config: {
            nombre: 'Selene',
            edad: 0
        },

        // Propiedades "estaticas" (o propiedades de clase).
        statics: {
            objectCount: 0
        },

        // Nuestro constructor:
        constructor: function (cfg) {
            // Para tener un contador de objetos instanciados.
            // "self" se refiere a la clase y no al objeto :)
            //
            this.self.objectCount++;

            console.log("app.Usuario::Init:" + this.self.objectCount);

            // Usando esta función hacemos que se asignen valores a nuestras propiedades
            this.initConfig(cfg);
        }
    });


    /* De esta manera podemos crear objetos desde nuestra clase
     * que definimos con la palabra reservada "new". Podemos
     * pasarle valores de configuración y ademas podemos usar 
     * los "setters y getters".
     *
     */
    var usr1 = new app.Usuario({
        nombre: 'Juan Antonio'
    });
    usr1.setEdad(28);
    console.log(usr1.getNombre());
    console.log(usr1.getEdad());
    // Por supuesto que tambien podemos usarlos asi:
    usr1.nombre = 'Otro Nombre';
    console.log(usr1.nombre);


    // Un segundo objeto (solo para probar la propiedad "static", "objectCount")
    var usr2 = new app.Usuario();




    /* Extend:
     * =======
     * La palabra "extend" permite simular la herencia en el 
     * framework ExtJS. De esta manera podemos decirle que una
     * clase desciende de otra. Como por ejemplo en la clase
     * "app.Empleado", le estamos diciendo que desciende de
     * la clase "app.Usuario", por lo tanto esta clase incluye
     * las propiedades y funciones de la primera.
     * 
     */
    Ext.define("app.Empleado", {
        extend: 'app.Usuario',
        salario: 0.0
    });
    var emp = new app.Empleado({
        salario: 300
    });
    console.log(emp.salario);
    console.log(emp.nombre);  // Imprime "Selene" que es el valor x default
                              // declarado en la clase base "app.Usuario".



    /* Singleton:
     * ==========
     * La palabra "singleton" nos permite hacer que una clase
     * sea "estatica", esto es, que no pueda ser instanciada
     * (que no se puedan crear objetos de ella, pues).
     * Normalmente se usa para declarar clases que contengan
     * librerias de funciones y/o valores constantes.
     * 
     */
    Ext.define("app.Constantes", {
        singleton: true,

        PI: 3.1416,  // :)
        TIMEOUT: 10000,
        PATH: 'myApp/js'
    });
    console.log(app.Constantes.PI);
});
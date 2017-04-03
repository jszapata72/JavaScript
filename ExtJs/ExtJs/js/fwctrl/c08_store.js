/* 
 * Programa: fwctrl/c08_store.js
 * Objetivo: store
 *           Este objeto administra el manejo de datos, inclusive
 *           permite obtener los datos desde un a fuente externa,
 *           como puede ser un servidor (ASP, PHP, JSON, etc.).
 */
Ext.onReady(function () {

    var st = new Ext.data.Store({
        // DEBE ponerse el nombre de los campos
        fields: ['firstName', 'lastName'],

        /**
         * La principal propiedad del objeto store es 'data'
         * que es donde guardamos los datos.
         * Esta puede almacenar cualquier dato, lo normal es
         * que contenga un array de registros (objetos).
         * 
         */
        data: [
            { firstName: 'Ed',    lastName: 'Spencer' },
            { firstName: 'Tommy', lastName: 'Maintz' },
            { firstName: 'Aaron', lastName: 'Conran' },
            { firstName: 'Jamie', lastName: 'Avins' }
        ]
    });


    /**
     * Y asi podemos tener acceso a los registros individuales :)
     * 
     * NOTA: Hay que consultar en la pagina de ayuda de extjs para
     *       ver todas las propiedades y metodos de est objeto.
     */
    console.log("Registros: " + st.getTotalCount());
    console.log(st.data.items[0].data.firstName);
    var rec = st.getAt(1).data;
    console.log("Nombre: " + rec.firstName);



    /* Ahora lo cargamos desde un JSON en un URL externo
     * ==== ESTO REQUIERE QUE SE LLAME A ESTA PAGINA 
     *                     DESDE UN SERVIDOR WEB !!! ===
     */
    var stJson = new Ext.data.Store({
        fields: ['Nombre', 'Edad'],
        actionMethods: { read: "POST" },
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: './resources/json/ejemplo_nombres.json',

            reader: {
                type: 'json',
                root: 'data'
            }
        },
    });

    // Porque la siguiente linea no muestra los datos?... si tiene el autoLoad:true ???
    try {
        console.log(stJson.getAt(1).data.Nombre);
    } catch (err) {
        console.log(err.message)
    }



    /* 
     * Y porque, cargandolo de esta manera (abajo), si muestra los datos???
     * 
     * Pues es parte de la filosofia "asincrona" de javascript!, esto es:
     * Arriba, el autoload hace que se carguen automaticamente los datos
     * desde la pagina, pero (por esta forma de trabajar de js) la PC ---
     * sigue ejecutando el código,  por lo que al ejecutar la linea donde
     * intenta mostrar el campo Nombre del registro 1 el servidor todavia
     * no regresa los datos.
     * 
     * Al contrario de este código (abajo). Aqui se le indica que cuando-
     * reciba los datos del servidor ejecuta la función "callback".
     * Asi, dentro de esta función ya podemos tranquilamente usar los ---
     * datos regresados (siempre consultando la variable success).
     * 
     * Por lo que es recomendable dejar "autoLoad:false" y usar el metodo
     * "load" del store. Asi podemos enviarle un mensaje al usuario------
     * cuando por alguna razon no se tenga acceso a los datos.
     * 
     */
    stJson.load({
        callback: function (records, operation, success) {
            if (!success) {
                Ext.alert("Error en la jugada!");
                return;
            }

            if (success) {
                console.log("Ya se cargo");
                console.log(records[0].data.Nombre);  // desde el parametro
                console.log(stJson.getAt(0).data.Nombre);  // con el store
            }
        }
    });



    // OTRAS FUNCIONES INTERESANTES
    st.sort({
        property: 'firstName',
        direction: 'DESC'
    });
    console.log("Ordenada desc x nombre: " + st.getAt(0).data.firstName);

    st.clearFilter();
    st.filter({
        property: 'fistName',
        value: 'Yo',
        anyMatch: true,
        caseSensitive: false
    });
});

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

/* 
 * Programa: fwctrl/c08_store_asp.js
 * Objetivo: store
 *           Mismo caso que el ejemplo anterior, pero en esta ocación
 *           estamos trabajando del lado del servidor con una  pagina
 *           ASP.
 */
Ext.onReady(function () {

    /** 
     * Al store le digo que es una página ASP
     * 
     */
    var stJson = new Ext.data.Store({
        fields: ['id', 'describe'],
        actionMethods: { read: "POST" },
        autoLoad: false,

        proxy: {
            type: 'ajax',
            url: './asp/servidor_c10.aspx',

            reader: {
                type: 'json',
                root: 'data'
            }
        },
    });


    /** 
     * Cargo los datos
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
                console.log(records[0].data);  // desde el parametro
                console.log(stJson.getAt(0).data);  // con el store
            }
        }
    });
});

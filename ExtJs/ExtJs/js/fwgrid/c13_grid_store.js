/* 
 * Programa: js/fwctrl/c13_grid_store.js
 * Objetivo: grid + store
 * 
 *           Este es uno de los controles/objetos mas completos 
 *           por lo que vamos a tener varios ejemplos.
 */
Ext.onReady(function () {
    /** 
     ** Ahora vamos a usar un store para que muestre datos
     ** Los datos los estamos asignando directamente, pero
     ** igual (mediante load) podemos  obtener  los  datos
     ** desde el servidor.
     ** 
     ** Ademas aprovechamos para ver otras  propiedades de
     ** las columnas y agregamos columnas "especiales".
     **
     */
    var st = new Ext.data.Store({
        fields: ['folio', 'cliente', 'fecha', 'monto'],

        data: [
            { folio: 3657, cliente: 'DAIMLER', fecha: '2017-04-5', monto: 23789.62 },
            { folio: 3658, cliente: 'NAVISTAR', fecha: '2017-04-6', monto: 2500.00 },
            { folio: 3659, cliente: 'DINA', fecha: '2017-04-7', monto: 16870.23 }
        ]
    });

    var grid = new Ext.grid.GridPanel({
        title: 'Lista de facturas',
        store: st,

        /** columns:
         ** ==========================================================
         ** format:   Para darle un formato a los valores
         ** flex:     En lugar de especificar el ancho de las columnas
         **           mediante flex se le da una "proporción" del 
         **           ancho total del grid a cada columna.
         ** align:    right, left, center
         ** 
         */
        columns: [
            // Columna especial con el numero del renglon
            {
                xtype: 'rownumberer',
                width: 40,
                align: 'right'
            },

            { header: "Folio", flex: 1, dataIndex: 'folio' },
            { header: "Cliente", flex: 4, dataIndex: 'cliente' },
            { header: "Fecha", flex: 1, dataIndex: 'fecha' },
            { header: "Monto", flex: 2, dataIndex: 'monto', align: 'right' },


            /* actioncolumn: Para agregar columnas con "botones". normalmente
             *               usadas para eliminar/editar registros.
             * 
             */
            {
                xtype: 'actioncolumn',
                width: 50,
                align: 'center',
                items: [
                    {
                        icon: 'resources/images/16x16/delete.png',
                        tooltip: 'borrar registro'
                    },
                    {
                        icon: 'resources/images/16x16/zoom.png',
                        tooltip: 'ver registro'
                    }                    
                ]
            }
        ],
        height: 300
    });


    // WIN
    var win = new Ext.Window({
        title: 'Mi Grid en una Ventana',
        width: 600,
        items: grid
    });
    win.show();
});

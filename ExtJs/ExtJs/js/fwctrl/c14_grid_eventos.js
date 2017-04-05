/* 
 * Programa: js/fwctrl/c13_grid_eventos.js
 * Objetivo: grid + store + eventos
 * 
 *           Este es uno de los controles/objetos mas completos 
 *           por lo que vamos a tener varios ejemplos.
 */
Ext.onReady(function () {
    /** 
     ** Con el mismo grid de los ejemplos anteriores ahora
     ** vamos a ver que eventos podemos atrapar.
     **
     */
    var st = new Ext.data.Store({
        fields: ['folio', 'cliente', 'fecha', 'monto'],

        data: [
            { folio: 3657, cliente: 'DAIMLER', fecha: '2017-04-05', monto: 23789.62 },
            { folio: 3658, cliente: 'NAVISTAR', fecha: '2017-04-06', monto: 2500.00 },
            { folio: 3659, cliente: 'DINA', fecha: '2017-04-07', monto: 16870.23 }
        ]
    });

    var grid = new Ext.grid.GridPanel({
        title: 'Lista de facturas',
        store: st,
        height: 300,


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

            {
                header: "Folio",
                flex: 1,
                dataIndex: 'folio',

                // Para la primer columna, atrapamos el evento 'headerclick'
                listeners: {
                    headerclick: function (ct, column, e, t, eOpts) {
                        console.log(column);
                    }
                }
            },
            { header: "Cliente", flex: 4, dataIndex: 'cliente' },
            { header: "Fecha", flex: 1, dataIndex: 'fecha', format: 'd-M-Y' },
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
                        tooltip: 'borrar registro',

                        // Para el 'actioncolumn' atrapamos el click
                        handler: function (grid, rowIndex, colIndex) {
                            console.log(rowIndex, colIndex);
                        }
                    },
                    {
                        icon: 'resources/images/16x16/zoom.png',
                        tooltip: 'ver registro'
                    }
                ]
            }
        ],



        /** Eventos: Como en ejemplos pasados, podemos atrapar los eventos con "listeners"
         **          la lista de eventos la podemos obtener de la ayuda.
         ** 
         */
        listeners: {
            celldblclick: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {
                console.log(record.data);
            }
        }
    });



    /**
     ** ALGO NUEVO: CON ESTO SE ACTIVAN LOS 'tooltiptext'
     **/
    Ext.tip.QuickTipManager.init();



    // WIN
    var win = new Ext.Window({
        title: 'Mi Grid en una Ventana',
        width: 600,
        items: grid
    });
    win.show();
});

/* 
 * Programa: js/fwctrl/c12_grid.js
 * Objetivo: grid
 * 
 *           Este es uno de los controles/objetos mas completos 
 *           por lo que vamos a tener varios ejemplos.
 */
Ext.onReady(function () {
    /**
     ** En este primer ejemplo solo vamos a definir las propiedades basicas
     ** del objeto grid, como son las columnas.
     **
     ** No estoy asignando ningun store, por lo que el grid no va a mostrar
     ** datos, solo las columnas.
     **
     */
    var grid = new Ext.grid.GridPanel({
        title: 'Lista de facturas',
        //store: store,

        /** columns:
         ** ==========================================================
         ** header:    Titulo de la columna
         ** width:     Ancho de la columna
         ** dataIndex: Se enlaza con el "store" para mostrar los datos
         ** 
         */
        columns: [
            { header: "Folio", width: 100, dataIndex: 'folio' },
            { header: "Cliente", width: 300, dataIndex: 'cliente' },
            { header: "Fecha", width: 70, dataIndex: 'fecha' },
            { header: "Monto", width: 100, dataIndex: 'monto' }
        ],
        height: 300,

        listeners: {
            columnresize: function (ct, column, width, eOpts) {
                console.log('columnresize: ' + column.dataIndex);
            }
        }
    });


    // WIN
    var win = new Ext.Window({
        title: 'Mi Grid en una Ventana',
        width: 600,
        items: grid
    });
    win.show();
});

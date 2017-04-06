/* 
 * Programa: js/fwctrl/c13_grid_store.js
 * Objetivo: grid + edit cell mode
 * 
 *           Este es uno de los controles/objetos mas completos 
 *           por lo que vamos a tener varios ejemplos.
 */
Ext.onReady(function () {
    /** 
     ** Existen dos modos de editar valores de un grid:
     **   1. Cell Mode: Aqui se edita el valor individual de una celda
     **   2. Row Mode:  Aqui se edita el renglon completo
     **
     ** En este caso vamos a ver el segundo caso
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

        /** 
         ** Para que el grid pueda editar los datos, tenemos que 
         ** especificarle si es en modo celda o en modod renglon.
         ** Si es en modo celda, edita las columnas individuales
         ** y si es en modo renglon, edita todas las columnas---
         ** al mismo tiempo.
         ** 
         ** Para esto hay que agregarle un "plugin" al grid.
         ** 
         */
        selType: 'rowmodel',
        plugins: [
            Ext.create('Ext.grid.plugin.RowEditing', {
                clicksToEdit: 2
            })
        ],


        columns: [
            { xtype: 'rownumberer', width: 40, align: 'right' },

            /** 
             ** Ademas de decirle al grid en la configuración que tipo de 
             ** edición vamos a usar,  a cada columna le tenemos que decir
             ** que se va a editar y con que tipo de control se va a ----
             ** realizar dicha edición.
             ** 
             ** Si no especificamos ningun control para editar la columna
             ** esta columna no podra ser editada.
             **  
             */
            { header: "Folio", flex: 1, dataIndex: 'folio' },
            {
                header: "Cliente",
                flex: 4,
                dataIndex: 'cliente',
                editor: { xtype: 'textfield' }
            },
            {
                header: "Fecha",
                flex: 2,
                align: 'center',
                dataIndex: 'fecha',
                renderer: Ext.util.Format.dateRenderer('d/m/Y'),
                editor: { xtype: 'datefield' }
            },
            { header: "Monto", flex: 2, dataIndex: 'monto', align: 'right' },
        ]
    });


    // WIN
    Ext.tip.QuickTipManager.init();
    var win = new Ext.Window({
        title: 'Mi Grid en una Ventana',
        width: 600,
        items: grid
    });
    win.show();
});

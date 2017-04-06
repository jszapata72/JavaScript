/* 
 * Programa: c16_grid_summary.js
 * Objetivo: grid + formato de numero y summary
 * 
 *           Este es uno de los controles/objetos mas completos 
 *           por lo que vamos a tener varios ejemplos.
 */
Ext.onReady(function () {
    // Cambie de 'store', otro ejemplo para no aburrir
    var st = new Ext.data.Store({
        fields: ['cuenta', 'describe', 'debe', 'haber'],

        data: [
            { 'cuenta': '0000012', "describe": "CUENTA UNO", "debe": 523.12, "haber": 0.0 },
            { 'cuenta': '0000013', "describe": "CUENTA DOS", "debe": 10.00, "haber": 0.0 },
            { 'cuenta': '0000014', "describe": "CUENTA TRES", "debe": 0.00, "haber": 533.12 }
        ]
    });


    /** 
     ** Mediante el metodo 'format' de Ext podemos realizar 
     ** configuraciones globales. En este caso  le  estamos
     ** diciendo a ExtJs que use el  punto  como  separador
     ** decimal y '$' como signo de pesos.
     ** 
     */
    Ext.apply(Ext.util.Format, {
        thousandSeparator: ',',
        decimalSeparator: '.',
        currencySign: '$ '
    });


    var grid = new Ext.grid.GridPanel({
        title: 'Poliza',
        store: st,
        height: 300,

        /**
         ** Para poner sumatoria en la parte final del grid es necesario
         ** agregar este "feature".
         **
         */
        features: [{
            ftype: 'summary'
        }],

        columns: [
            { text: 'Cuenta', dataIndex: 'cuenta', flex: 3 },
            { text: 'Describe', dataIndex: 'describe', flex: 4 },

            /**
             ** A las columnas que les queramos agregar sumatorias al final,
             ** debemos especificar las  propiedades  "summaryType";  ademas
             ** es posible darles un formato con "summaryRenderer".
             **
             ** Ya hemos usado en ejemplos anteriores 'renderer',  en  estos
             ** ejemplos usamos funciones que trae el propio framework ExtJs
             ** Es posible usar tambien una función creada por nosotros,pero
             ** 
             ** 
             */
            {
                text: 'Debe',
                dataIndex: 'debe',
                flex: 2,
                forcePrecision: true,
                decimalPrecision: 2,
                decimalSeparator: '.',
                align: 'right',
                renderer: function (value, meta, dataIndex) {
                    return Ext.util.Format.currency(value, ' ', 2);
                },

                summaryType: 'sum',
                summaryRenderer: function (value, meta, dataIndex) {
                    //
                    // '<b>', como ya sabemos es una etiqueta HTML para
                    // que se muestre el contenido en "negrita".
                    //
                    return '<b>' + Ext.util.Format.currency(value, '$', 2) + '</b>';
                },
            },

            {
                text: 'Haber',
                dataIndex: 'haber',
                flex: 2,
                forcePrecision: true,
                decimalPrecision: 2,
                decimalSeparator: '.',
                align: 'right',
                renderer: function (value, meta, dataIndex) {
                    return Ext.util.Format.currency(value, ' ', 2);
                },

                summaryType: 'sum',
                summaryRenderer: function (value, meta, dataIndex) {
                    return '<b>' + Ext.util.Format.currency(value, '$', 2) + '</b>';
                },
            },
        ] // columns
    });


    // WIN
    var win = new Ext.Window({
        title: 'Mi Grid en una Ventana',
        width: 500,
        items: grid
    });
    win.show();
});

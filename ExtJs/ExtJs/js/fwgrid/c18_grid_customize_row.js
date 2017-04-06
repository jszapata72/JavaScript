/* 
 * Programa: c18_grid_customize_row.js
 * Objetivo: grid + customizar presentación (nivel renglon)
 * 
 *           Este es uno de los controles/objetos mas completos 
 *           por lo que vamos a tener varios ejemplos.
 */
Ext.onReady(function () {
    var st = new Ext.data.Store({
        fields: ['cuenta', 'describe', 'debe', 'haber'],

        data: [
            { 'cuenta': '0000012', "describe": "CUENTA UNO", "debe": 523.12, "haber": 0.0 },
            { 'cuenta': '0000013', "describe": "CUENTA DOS", "debe": 10.00, "haber": -1.0 },
            { 'cuenta': '0000014', "describe": "CUENTA TRES", "debe": 0.00, "haber": 533.12 }
        ]
    });

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
         ** Para customizar la presentación general del grid  podemos
         ** usar la propiedad "viewconfig".
         **
         ** En este caso cuando el debe sea  negativo,  cambiamos  el
         ** colo a rojo. Esto lo hacemos a traves de un clase CSS. 
         ** 
         ** "mx-color-red"  debe declararse dentro de un archivo  CSS
         ** o dentro de cualquier HTML. En nuestro ejemplo lo agregue
         ** dentro de index.html.
         **
         */
        viewConfig: {
            getRowClass: function (record, rowIndex, rowParams, store) {
                if (record.get('haber') < 0)
                    return 'mx-color-red';
            }
        },

        features: [{
            ftype: 'summary'
        }],

        columns: [
            { xtype: 'rownumberer', width: 30, align: 'right' },
            { text: 'Cuenta', dataIndex: 'cuenta', flex: 3 },
            { text: 'Describe', dataIndex: 'describe', flex: 4 },

            {
                text: 'Debe',
                dataIndex: 'debe',
                flex: 2,
                forcePrecision: true,
                decimalPrecision: 2,
                align: 'right',

                renderer: function (value, meta, record) {
                    return Ext.util.Format.currency(value, ' ', 2);
                },

                summaryType: 'sum',
                summaryRenderer: function (value, meta, dataIndex) {
                    return '<b>' + Ext.util.Format.currency(value, '$', 2) + '</b>';
                },
            },

            {
                text: 'Haber',
                dataIndex: 'haber',
                flex: 2,
                forcePrecision: true,
                decimalPrecision: 2,
                align: 'right',
                renderer: function (value, meta, record) {
                    return Ext.util.Format.currency(value, ' ', 2);
                },

                summaryType: 'sum',
                summaryRenderer: function (value, meta, dataIndex) {
                    return '<b>' + Ext.util.Format.currency(value, '$', 2) + '</b>';
                },
            },
        ], // columns
    });



    // WIN
    var win = new Ext.Window({
        title: 'Mi Grid en una Ventana',
        width: 500,
        items: grid
    });
    win.show();
});

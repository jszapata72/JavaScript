/* 
 * Programa: c19_grid_customize_cell.js
 * Objetivo: grid + customizar presentación (nivel celda)
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

        features: [{
            ftype: 'summary'
        }],

        columns: [
            { xtype: 'rownumberer', width: 30, align: 'right' },
            { text: 'Cuenta', dataIndex: 'cuenta', flex: 3 },
            { text: 'Describe', dataIndex: 'describe', flex: 4 },


            /** 
             ** Para customizar una celda, se usa la función 'renderer'
             ** de la columna. Puede ser a traves de una  etiqueta  CSS
             ** como en el ejemplo anterior o se puede cambiar directa-
             ** -mente con la propiedad "meta.style".
             ** 
             ** En el ejemplo estoy customizando la columna "debe",  la
             ** columna "haber" y sus respectivas sumatorias.
             ** 
             */
            {
                text: 'Debe',
                dataIndex: 'debe',
                flex: 2,
                forcePrecision: true,
                decimalPrecision: 2,
                align: 'right',

                renderer: function (value, meta, record) {
                    if (value == 0) {
                        meta.style = "color:gray; font-weight:bold";
                    }
                    if (value < 0) {
                        meta.style = "color:red; font-weight:bold";
                  1  }
                    return Ext.util.Format.currency(value, ' ', 2);
                },

                summaryType: 'sum',
                summaryRenderer: function (value, meta, dataIndex) {
                    meta.style = 'font-weight:bold; text-decoration:underline';
                    return Ext.util.Format.currency(value, '$ ', 2);
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
                    if (value == 0) {
                        meta.style = "color:gray; font-weight:bold";
                    }
                    if (value < 0) {
                        meta.style = "color:red; font-weight:bold";
                    }
                    return Ext.util.Format.currency(value, ' ', 2);
                },

                summaryType: 'sum',
                summaryRenderer: function (value, meta, dataIndex) {
                    meta.style = 'font-weight:bold; text-decoration:underline';
                    return Ext.util.Format.currency(value, '$ ', 2);
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

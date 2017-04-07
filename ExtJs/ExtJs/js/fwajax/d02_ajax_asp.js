/**
 ** Programa: d01_ajax_asp.js
 ** Objetivo: AJAX
 ** 
 */
Ext.onReady(function () {
    //
    // Ahora vamos a usar el servidor d02
    // El unico cambio con respecto al c10 es que vamos
    // a tener acceso a los parametros.
    // 
    Ext.Ajax.request({
        url: './asp/servidor_d02.aspx',
        method: 'POST',
        //timeout: 1200000,

        params: {
            'par1': 'VALOR1',
            'par2': 'VALOR2'
        },

        callback: function (options, success, response) {
            console.log(options);
            console.log(success);

            // Texto recibido
            console.log(response.responseText);

            // Convierto a objeto
            var obj = Ext.decode(response.responseText);
            console.log(obj);
        }
    });
})

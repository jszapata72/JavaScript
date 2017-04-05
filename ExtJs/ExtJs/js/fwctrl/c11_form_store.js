/* 
 * Programa: ./fwctrl/c11_form_store.js
 * Objetivo: form + store
 *           Aqui vamos a ver como podemos llenar los controles
 *           con valores obtenidos/manejados  a  travez  de  un
 *           objeto store.
 * 
 */
Ext.onReady(function () {
    // Store
    var st = new Ext.data.Store({
        fields: ['Nombre', 'Edad'],
        data: [
            { "Nombre": "Juan Antonio", "Edad": 34 },
            { "Nombre": "Sandra Mascorro", "Edad": 28 },
            { "Nombre": "Edgar Orlando", "Edad": 16 }
        ]
    });

    // Campo nombre
    var nombre = new Ext.form.field.Text({
        fieldLabel: 'Nombre',
        name: 'Nombre',
        emptyText: 'Captura aqui tu nombre',
        anchor: '90%'
    });

    // Campo edad
    var edad = new Ext.form.field.Number({
        fieldLabel: 'Edad',
        name: 'Edad'
    });

    // Form
    var form = new Ext.FormPanel({
        defaults: { xtype: 'textfield' },
        bodyStyle: 'padding: 10px',
        layout: 'anchor',

        items: [
            nombre,
            edad
        ],

        buttons: [
            {
                text: 'Grabar',
                handler: function () {
                    /**
                     ** metodos interesantes del objeto form:
                     ** getValues: Valores actuales
                     **            useDataValues:true (formato p1&p1)
                     **            dirtyOnly:true (solo campos modificados)
                     ** getRecord: Valores originales
                     ** 
                     ** Hay muchos otros metodos interesantes, hay que revisar
                     ** en la documentación.
                     ** 
                     */
                    var rec = form.getValues();
                    console.log(rec);
                    console.log(form.getRecord().data);

                    /** 
                     ** lo lógico en esta parte del código sería mandar los  datos
                     ** al servidor para que se almacenen en  una  base  de  datos
                     ** (y por supuesto, tambien se pueden obtener los datos desde
                     **  una b.d.).
                     ** ---esto lo dejamos para un ejemplo mas adelante---
                     **
                     */
                }
            },

            {
                text: 'Salir',
                handler: function () {
                    console.log('Salir');
                    win.close();
                }
            }
        ]
    });


    /* Ahora cargamos los datos en el form desde el store
     * Y me pregunto: Como sabe donde poner cada dato???. Pues quien sabe!,
     *                supongo que mediante el  nombre  de  los  campos  del
     *                store VS nombre de los campos en los controles.
     *                Para comprobarlo  podemos cambiar el nombre en alguno
     *                de los dos lados... :)
     */
    form.loadRecord(st.getAt(0));


    // WIN
    var win = new Ext.Window({
        title: 'Mi Form en una Ventana',
        width: 500,
        items: form
    });
    win.show();
});

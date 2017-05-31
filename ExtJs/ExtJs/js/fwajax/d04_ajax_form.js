/**
 ** Programa: d04_ajax_form.js
 ** Objetivo: AJAX
 ** 
 */
Ext.onReady(function () {
    /** 
     ** Este ejemplo esta mas completo, voy a explicar a detalle lo
     ** que necesitamos y lo que vamos a hacer:
     ** 
     ** 1. Se requiere un store para guardar los datos de una persona
     ** 2. Un form donde se puedan editar estos datos
     ** 3. Una pagina ASP que reciba los datos desde el form
     **
     ** Pasos:
     ** ======
     ** 
     ** Cliente
     ** 1. Pide los datos al servidor
     ** 2. Los pone en el form y los muestra
     ** 3. Dentro del form, debe haber un boton para "guardar"
     ** 4. Atrapar el evento "click" para "enviar" los datos al servidor
     ** 
     ** Servidor:
     ** 5. Un ASP donde podamos recibir los datos
     ** 6. "Guardar" los datos desde la pagina ASP (en cualquier parte!)
     ** 7. Regresar el resultado
     **
     ** Cliente:
     ** 8. Recibir resultado y mostrar mensaje
     **
     **
     ** PD: AHORA VAMOS A USAR EL OBJETO 'store' PARA OBTENER LOS
     **     DATOS. EN LOS EJEMPLOS  ANTERIORES  ESTUVIMOS  USANDO
     **     'Ext.Ajax.request', ES MUY PARECIDO.
     **     DE HECHO YA HABIAMOS USADO  EL  OBJETO  'store'  PARA 
     **     ESTO EN LOS EJEMPLOS DEL ESTE MISMO OBJETO ('store').
     **
     */
    var stPersona = new Ext.data.Store({
        fields: ['nombre', 'apaterno', 'amaterno', 'email', 'alta'],
        actionMethods: { read: "POST" },
        autoLoad: false,

        proxy: {
            type: 'ajax',
            url: './asp/servidor_d04.aspx',

            reader: {
                type: 'json',
                root: ''
            }
        }
    });


    // El form
    var myForm = new Ext.FormPanel({
        defaults: { xtype: 'textfield', anchor: '70%' },
        bodyStyle: 'padding: 10px',
        layout: 'anchor',

        // Campos
        items: [
            { fieldLabel: 'Nombre', name: 'nombre' },
            { fieldLabel: 'AP Paterno', name: 'apaterno' },
            { fieldLabel: 'AP Materno', name: 'amaterno' },
            { fieldLabel: 'email', name: 'email' },
            {
                fieldLabel: 'Fecha Alta',
                name: 'alta',
                anchor: '50%',
                xtype: 'datefield',
                format: 'd/m/Y'
            }
        ],


        // Botones
        buttons: [
            {
                text: 'Limpiar',
                handler: function () {
                    myForm.getForm().reset();
                }
            },
            {
                text: 'Recuperar',
                handler: function () {
                    myForm.loadRecord(stPersona.getAt(0));
                }
            },
            {
                text: 'Grabar',
                handler: function () {
                    /** 
                     ** En este ejemplo la opción 'grabar' realmente no va a 
                     ** guardar los datos en un archivo o una b.d., solo  va 
                     ** a enviar los datos al servidor y el  servidor  lo va
                     ** a guardar en el objeto 'p',  o sea que solo se  va a
                     ** a 'guardar' en memoria.
                     ** 
                     */
                    var rec = myForm.getValues();
                    console.log("grabando...");
                    console.log(rec);

                    // Por lo pronto solo vuelvo a cargar los datos
                    stPersona.load({
                        params: {
                            'cmd': 'app.cmd.GuardaDatosPersona',
                            'rec': Ext.encode(rec)
                        },
                        extraParams: {
                            'cmd': 'app.cmd.GuardaDatosPersona',
                            'rec': Ext.encode(rec)
                        },

                        callback: function (records, operation, success) {
                            if (!success) {
                                console.log("ERROR");
                                return;
                            }
                            else {
                                console.log(stPersona.getAt(0));
                                myForm.loadRecord(stPersona.getAt(0));
                            }
                        }
                    });
                }
            }
        ]
    });


    // Cargo datos desde la página
    stPersona.load({
        params: {
            'cmd': 'app.cmd.LeeDatosPersona'
        },
        extraParams: {
            'cmd': 'app.cmd.LeeDatosPersona'
        },

        callback: function (records, operation, success) {
            if (!success) {
                console.log("ERROR");
                return;
            }
            else {
                console.log(stPersona.getAt(0));
                myForm.loadRecord(stPersona.getAt(0));
            }
        }
    });


    // La ventana
    var win = new Ext.Window({
        title: 'Mi Form en una Ventana',
        width: 500,
        items: myForm
    });
    win.show();
})

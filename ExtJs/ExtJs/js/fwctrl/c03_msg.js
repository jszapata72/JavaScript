/* 
 * Programa: fwctrl/c03_msg.js
 * Objetivo: Alertas, Mensajes
 * 
 * 
 * Pregunta: Porque solo se muestra el ultimo mensaje?
 *           ---- esto es algo importante, es parte de
 *           la filosofia de JavaScrit ----
 * 
 *           Es importante entender esto, porque si no
 *           vamos a tener problemas cuando desarro---
 *           llemos aplicaciones con ExtJS (y con ----
 *           JavaScript en general).
 */
Ext.onReady(function () {

    // Un mensaje
    Ext.MessageBox.alert('Titulo', 'Mi mensaje perron');

    // Versón corta
    Ext.Msg.alert('Titulo', 'Versión corta');

    // Confirmación
    Ext.Msg.confirm('Confirmación', '¿Estás seguro de querer hacer esto?');

    // Prompt
    Ext.Msg.prompt('Name', 'Please enter your name:', function (btn, text) {
        console.log(btn);
        console.log(text);
        if (btn == Ext.Msg.OK) {
            // boton presionado = ok
        }
    });

    // Wait
    Ext.Msg.wait('Cargando... porfavor espere!');

    /* Personalizado
     * 
     * Icon:
     * Ext.Msg.ERROR //Icono de error
     * Ext.Msg.INFO //Icono de información
     * Ext.Msg.WARNING //Icono de advertencia
     * Ext.Msg.QUESTION //Icono de pregunta
     * 
     * buttons:
     * Ext.Msg.YES
     * Ext.Msg.YESNO
     * Ext.Msg.YESNOCANCEL
     * Ext.Msg.NO
     * Ext.Msg.OK
     * 
     */
    Ext.Msg.show({
        title: 'Personalizado', //<- el título del diálogo
        msg: 'Esto es un mensaje personalizado!', //<- El mensaje
        buttons: Ext.Msg.YESNO, //<- Botones de SI y NO
        icon: Ext.Msg.ERROR, // <- un ícono de error

        fn: function (btn, text) {
            console.log(btn);
            console.log(text);
        }
    });
});

/* 
 * Programa: fwctrl/c04_tabs.js
 * Objetivo: tabs
 *  
 */
Ext.onReady(function () {

    /* Creamos los tabs
     * Realmente no hay un objeto "tab", solo hay un objeto
     * "tabs" el cual separa objetos "panel".
     * 
     * Y como se vio en los ejemplos pasados, cada objeto--
     * "panel" puede contener cualquiera de los controles--
     * que mas adelante vamos a ver (y los que ya vimos).
     * 
     */
    var tab1 = new Ext.Panel({
        title: 'Tab1',
        html: 'Contenido TAB 1',
    });

    var tab2 = new Ext.Panel({
        title: 'Tab2',
        html: 'Esta es otra cosa',
        closable: true,

        /* Y aqui capturamos los eventos...
         *
         * porque se la complican tanto con los famosos "controladores"
         * aqui mero ponemos el código para controlar los eventos y no
         * complicamos tanto el asunto!
         * 
         * Y para darle estructura y claridad al codigo pues generamos
         * un objeto para ahi poner todas las funciones  que van a dar
         * servicio a estos eventos y ya!
         * 
         * Y si nos vale todo!!!,  pues ponemos directamente el código
         * aqui y se acabo!
         * 
         */
        listeners: {
            beforeclose: function (panel, eOpts) {
                console.log(panel);
                console.log(eOpts);
            },

            activate: function () {
                console.log("Se activo tab2");
            }
        }
    });


    // Creamos el contendor "tabs" y le decimos que se muestre sobre "main"
    var tabs = new Ext.TabPanel({
        renderTo: 'main',
        activeTab: 1,
        enableTabScroll: true,

        items: [tab1, tab2]
    });


    // Tambien los podemos poner en una ventana...
    var win = new Ext.Window({
        title: 'Window con tabs',
        width: 600,
        height: 500,
        //bodyStyle: 'background-color:#fff;',
        items: tabs
    });
    win.show();
});

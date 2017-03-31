/* 
 * Programa: fwctrl/c02_window.js
 * Objetivo: Window
 */
Ext.onReady(function () {

    /* El objeto Window de ExtJs tiene las mismas caracteristicas
     * que el objeto Panel, la diferencia es que este objeto ----
     * es mas similar a las ventanas de las aplicaciones de -----
     * escritorio, ya que puede "flotar" por el navegador.
     * Podemos usar este objeto para avisos, mostrar el detalle--
     * de un registro, etc.
     * 
     */
    var win = Ext.create('Ext.window.Window', {
        renderTo: 'main',
        title: 'Mi Ventana',
        minimizable: true,
        maximizable: true,
        modal: true,

        width: 800,
        height: 500,
        x: 250,
        y: 100,

        html: '<iframe id="container" src="http://www.sencha.com" style="width:100%;height:100%;border:none"></iframe>',

        tools: [
          { type: 'refresh' },
          { type: 'prev' },
          { type: 'next' }
        ],

        bbar: {
            align: 'right',
            items: [
                {
                    text: 'Agregar',
                    icon: 'resources/images/16x16/android.png',
                    iconAlign: 'left',
                    enabled: true
                }
            ]
        }
    });
    win.show();
});

/**
 * Programa: fwctrl/c01_panel.js
 * Objetivo: Comenzamos con la parte "visual", tal como lo hariamos con aplicaciones
 *           de ventanas, vamos a ver que controles visuales no ofrece ExtJS.
 *
 *           1. Panel
 */
Ext.onReady(function () {

    /**
     * funciones usadas para atrapar los eventos
     * si quisiera podria escribir este código en otro archivo y 
     * para cargarlo puedo usar Ext.require("App.sistema.otracosa.Ctrl")
     * 
     * Tambien pueden ser funciones que no pertenezcan a un objeto,
     * esto lo hago para que el código este mas estructurado.
     * 
     * No es necesario crear funciones para atrapar los eventos, el 
     * código puede declararse directamente en los objetos.
     * 
     */
    Ctrl = {
        onClickAgregar: function () {
            console.log('onClickAgregar');
        },

        onMouseOver: function () {
            console.log("onMouseOver");
        }
    };


    /**
     * El panel es el control básico del framework ExtJS, sobre el estan
     * basados los demas componente contenedores.
     * 
     * El panel es un "contenedor", esto es, que podemos "meter" otros--
     * controles dentro de el.
     * 
     */

    Ext.create('Ext.Panel', {
        id: 'mpanel',  // le asigno un nombre unico para identificarlo
        icon: 'resources/images/16x16/android.png',
        renderTo: Ext.getBody(),  // donde lo va a mostrar?... en la ventana del browser
        renderTo: 'main', // tambien puede ser en el DIV principal (y unico)
        width: 250,
        height: 350,
        bodyPadding: 5, // el espacio que queda entre el panel y su contenido
        title: 'Hola Mundo',
        html: 'Hola <b>Mundo</b>...', // en todos los controles contenedores podemos
                                      // asignarle un HTML


        /* Botones "tool": Estos son los pequeños botones que estan en
         *                 en la parte superior derecha de los panels.
         * 
         * De acuerdo a la documentación de ExtJS, los posibles
         * valores (type) que hay son:
         * 
         * collapse, expand, maximize, minimize, resize, restore, move, close 
         *
         * minus, plus, prev, next, pin, unpin, search, toggle, refresh
         *
         * save, print, gear, help
         *
         * right, left, up, down
         *
         *
         * Con la propiedad "tools" podemos agregarle estos botones y asignarle
         * una "función controladora"  para que ejecute algo cuando se presione
         * dicho boton.
         * 
         */
        tools: [
            {
                type: 'refresh',
                name: 'mpanel-refresh',

                callback: function (panel) {
                    console.log(this.name);
                }
            },
            //{ type: 'help' },
            //{ type: 'search' },
            //{ type: 'prev' },
            //{ type: 'next' }
        ],



        /* TOOLBAR: Botones en la parte superior o inferior del panel
         * 
         * tbar: parte superior
         * bbar: parte inferior
         * 
         * Lsita de controles:
         * Si no le ponemos que tipo de control es,,,, por default
         * pone un boton.
         * Todos los controles tienen un alias, hay que revisar---
         * la documentación de ExtJS para ver cuales controles hay
         * disponibles. Ademas en la documentación tenemos los ---
         * eventos, metodos, propiedades, etc. de cada control.
         * 
         * Cuando queremos hacer referencia a un control por su---
         * alias, se usa la propiedad "xtype".
         * 
         */
        bbar: [
            { text: 'Grabar' }
        ],

        tbar: [
            {
                text: 'Agregar',
                icon: 'resources/images/16x16/bullet_disk.png',
                iconAlign: 'left',
                enabled: true,

                /*
                // Se puede asignar una función anonima al evento click
                handler: function () {
                    console.log("Click");
                }
                */


                /*  EVENTOS
                    Tambien se puede atrapar (listeners) cualquiera de los eventos de
                    un "button". Podemos encontrar en la docuementación de ExtJS los
                    eventos que se pueden atrapar para cada control. En este caso ---
                    -y sacado de la documentación oficial-, estos son los eventos ---
                    que podemos atrapar:

                    click
                    toggle
                    mouseover
                    mouseout
                    mouseshow

                    Aqui en lugar de declarar una "función anonima", le asigno una ---
                    función previamente declarada en otro objeto, esto para darle ----
                    mayor claridad al código y separar la parte de la vista.
                */
                listeners: {
                    click: Ctrl.onClickAgregar,
                    mouseover: Ctrl.onMouseOver

                } // listeners
            }, // agregar


            {
                xtype: 'textfield',
                enableKeyEvents: true,  // activa el "atrapado" de las teclas pulsadas

                /* En la ayuda podemos encontrar los diferentes eventos
                 * que podemos atrapar del objeto "text".
                 * Por ejemplo:
                 * 
                 * keyup
                 * keydown
                 * kerpress
                 * change
                 * 
                 */
                listeners: {
                    keypress: function (obj, key) {
                        /**
                         * obj:          El objeto "textbox" en si
                         * obj.value:    El texto que tiene el control (lastValue, rawValue)
                         * 
                         * key:          Representa la tecla pulsada
                         * key.keyCode:  La tecla pulsada
                         * 
                         */
                        console.log(obj.value);
                        console.log('keyCode: ' + key.keyCode);
                    }
                }
            }
        ] // tbar
    });
});





/*
    var d = Ext.Element.get('main');

    d.setStyle({
        width: "100px",
        height: "100px",
        border: "2px solid #444",
        margin: "80px auto",
        backgroundColor: "#ccc"
    });

    
    d.fadeOut({
        duration: 3000
    });
    d.fadeIn({
        duration: 3000
    });
    
    d.frame();
    d.highlight();
    d.ghost();
    d.puff();
    d.scale(300,300);

    d.shift({
        x: 0,
        y: 0,
        width: 50,
        height: 50
    });
*/

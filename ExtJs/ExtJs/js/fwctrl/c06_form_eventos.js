/* 
 * Programa: fwctrl/c06_forms_eventos.js
 * Objetivo: forms + eventos
 *           Son los objetos/contenedores donde podemos poner controles con datos 
 *           (textfield, combobox, checkbox, etc.)
 * 
 * Y ahora... le ponemos código a los eventos.
 * 
 * En la documentación oficial de ExtJs (que viene junto con el framework)
 * vamos a encontrar todo el API del framework.
 * En Maxion-Inmagusa lo podemos encontar en http://web-server/extjs
 * La información del API se encuentra en la pestaña "API Documentation".
 * Aqui vamos a encontrar toda la información de cada uno de los objetos,
 * campos, etc.
 * 
 */
Ext.onReady(function () {
    var fd = new Ext.form.field.Display({
        fieldLabel: 'Nombre',
        anchor: '90%',
        value: 'Ni Nombre',
    });


    /**
     * La información se obtuvo (del arbol de la API) en form/field/text
     * La información esta dividida en varias partes:
     *   1. Configs
     *   2. Properties
     *   3. Methods
     *   4. Events
     *
     * CONFIGS: Aqui estan todas los valores  que  podemos  usar al momento
     *          de crear el objeto, para este vamos a usar:
     *          fieldLabel, emptyText, anchor, disabled, enableKeyEvents
     * 
     * EVENTS:  Pues eso, una lista de los eventos que el objeto en cuestión
     *          puede "atrapar".
     *          En este caso vamos a usar: keyup, focus
     *          Los parametros de cada evento lo encontramos en la API
     * 
     */
    var ft = new Ext.form.field.Text({
        fieldLabel: 'Puesto',
        emptyText: 'Captura aqui tu puesto',
        anchor: '90%',
        disabled: false,
        enableKeyEvents: true,

        listeners: {
            keyup: function (obj, key) {
                console.log('text:key');
            },

            focus: function (obj, t, e) {
                console.log('text:focus');
            }
        }
    });


    var fta = new Ext.form.field.TextArea({
        fieldLabel: 'Comentarios',
        emptyText: 'Captura aqui tu comentario',
        anchor: '90%',
        disabled: false
    });


    // Evento "change", cuando cambia el estado del checkbox
    var chk = new Ext.form.field.Checkbox({
        fieldLabel: 'X-tuti',
        boxLabel: 'Programador',
        checked: true,
        listeners: {
            change: function (obj, newValue, oldValue, eOpts) {
                console.log('checkbox:change');
                console.log(oldValue);
                console.log(newValue);
            }
        }
    });


    // Evento "select", cuando se selecciona una fecha
    var fdt = new Ext.form.field.Date({
        fieldLabel: 'Nacimiento',
        value: new Date(),
        maxValue: new Date(2017, 12, 31),
        minValue: new Date(),

        listeners: {
            select: function (field, value, eOpts) {
                console.log(value);
            }
        }
    });


    // Evento "spin", cuando se presiona boton arriba/abajo
    var fn = new Ext.form.field.Number({
        fieldLabel: 'Edad',
        value: 40,
        maxValue: 99,
        minValue: 0,

        listeners: {
            spin: function(obj, direction, eOpts){
                console.log(direction);
                console.log(obj.lastValue);
            }
        }
    });


    var ftime = new Ext.form.field.Time({
        fieldLabel: 'Hora',
        minValue: '6:00 AM',
        maxValue: '8:00 PM',
        increment: 30
    });


    // Evento "change"
    var rg = new Ext.form.RadioGroup({
        fieldLabel: 'Languaje preferido',
        columns: 2,

        items: [
            { boxLabel: 'VFP', name: 'lenguaje', inputValue: 'VFP' },
            { boxLabel: 'Visual Basic', name: 'lenguaje', inputValue: 'VB' },
            { boxLabel: 'C#', name: 'lenguaje', inputValue: 'CS' },
            { boxLabel: 'Javascript', name: 'lenguaje', inputValue: 'js', checked: true },
            { boxLabel: 'PHP', name: 'lenguaje', inputValue: 'php' }
        ],

        listeners: {
            change: function (obj, newValue, oldValue, eOpts) {
                console.log(newValue);
                console.log(oldValue);
            }
        }
    });


    // Evento "change"
    var cb = new Ext.form.ComboBox({
        fieldLabel: 'Ciudad',
        store: ['Monclova', 'San Buena', 'Castaños'],
        forceSelection: true,
        emptyText: 'Selecciona una ciudad...',
        editable: false,

        listeners: {
            change: function (obj, newValue, oldValue, eOpts) {
                console.log(newValue);
            }
        }
    });


    var chkg = new Ext.form.CheckboxGroup({
        fieldLabel: 'Lenguajes de programación',
        columns: 2,

        items: [
            { boxLabel: 'VFP', name: 'lenguaje', inputValue: 'VFP' },
            { boxLabel: 'Visual Basic', name: 'lenguaje', inputValue: 'VB' },
            { boxLabel: 'C#', name: 'lenguaje', inputValue: 'CS' },
            { boxLabel: 'Javascript', name: 'lenguaje', inputValue: 'js' },
            { boxLabel: 'PHP', name: 'lenguaje', inputValue: 'php' }
        ]
    });


    // "collapse": cuando se "esconden" los controles
    // "expand":   cuando se "muestran" los controles
    var fldset = new Ext.form.FieldSet({
        title: 'Agrupados',
        collapsed: false,
        collapsible: true,
        layout: 'anchor',
        width: '70%',
        margin: '5 5 5 5',
        defaults: { xtype: 'textfield' },

        items: [
            { fieldLabel: 'Nombre:', value: 'Juan Antonio' },
            { fieldLabel: 'e-mail:' }
        ],

        listeners: {
            collapse: function (field, eOpts) {
                console.log('collapse')
            },

            expand: function (field, eOpts) {
                console.log('expand');
            }
        }
    });


    var myForm = new Ext.FormPanel({
        defaults: { xtype: 'textfield' },
        bodyStyle: 'padding: 10px',
        layout: 'anchor',

        items: [
            fd,
            ft,
            fta,
            chk,
            fdt,
            fn,
            ftime,
            rg,
            cb,
            chkg,
            fldset
        ]
    });

    var win = new Ext.Window({
        title: 'Mi Form en una Ventana',
        width: 500,
        items: myForm
    });
    win.show();
});

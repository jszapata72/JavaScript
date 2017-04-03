/* 
 * Programa: fwctrl/c07_eventos.js
 * Objetivo: Crear un "controlador" de eventos universal
 * 
 */
Ext.onReady(function () {

    /**
     * La idea general es crear un objeto "listeners" el cual atrape
     * los eventos de todos los controles/campos,  asi  concentramos
     * el código en un solo objeto.
     * 
     * En este caso el objeto para  atrapar  los  eventos  se  llama
     * "evtctrl".
     * 
     * Para distinguir cual es el objeto que esta generando el evento
     * podemos asignarle una propiedad a todos los  objetos (en  este
     * caso le puse "evt"), tambien podríamos usar la  propiedad "id"
     * que ya existe para todos los objetos.
     * 
     * Si queremos saber a cual objeto corresponde  un  evento,  solo 
     * hay que usar esta propiedad.
     * 
     * Ahora ya teniendo este objeto definido, solo tenemos  que usar
     * la propiedad "listeners" de cada objeto para asignarle eventos
     * 
     */
    var evtctrl = {
        keyup: function (obj, key) {
            console.log(obj.evt + ':key');
        },

        focus: function (obj, t, e) {
            console.log(obj.evt + ':focus');
        },

        change: function (obj, newValue, oldValue, eOpts) {
            console.log(obj.evt + ':change');
            console.log(oldValue);
            console.log(newValue);
        }
    };



    var fd = new Ext.form.field.Display({
        fieldLabel: 'Nombre',
        anchor: '90%',
        value: 'Ni Nombre',
    });

    var ft = new Ext.form.field.Text({
        evt: 'my.text',
        fieldLabel: 'Puesto',
        emptyText: 'Captura aqui tu puesto',
        anchor: '90%',
        disabled: false,
        enableKeyEvents: true,
        listeners: evtctrl
    });

    var fta = new Ext.form.field.TextArea({
        evt: 'my.textArea',
        fieldLabel: 'Comentarios',
        emptyText: 'Captura aqui tu comentario',
        anchor: '90%',
        disabled: false,
        listeners: evtctrl
    });

    var chk = new Ext.form.field.Checkbox({
        evt: 'my.checkBox',
        fieldLabel: 'X-tuti',
        boxLabel: 'Programador',
        checked: true,
        listeners: evtctrl
    });

    var fdt = new Ext.form.field.Date({
        fieldLabel: 'Nacimiento',
        value: new Date(),
        maxValue: new Date(2017, 12, 31),
        minValue: new Date(),
    });

    var fn = new Ext.form.field.Number({
        fieldLabel: 'Edad',
        value: 40,
        maxValue: 99,
        minValue: 0
    });


    var ftime = new Ext.form.field.Time({
        fieldLabel: 'Hora',
        minValue: '6:00 AM',
        maxValue: '8:00 PM',
        increment: 30
    });

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
    });

    var cb = new Ext.form.ComboBox({
        fieldLabel: 'Ciudad',
        store: ['Monclova', 'San Buena', 'Castaños'],
        forceSelection: true,
        emptyText: 'Selecciona una ciudad...',
        editable: false,
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

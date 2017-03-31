/* 
 * Programa: fwctrl/c05_forms.js
 * Objetivo: forms
 *           Son los objetos/contenedores donde podemos poner controles con datos 
 *           (textfield, combobox, checkbox, etc.)
 */
Ext.onReady(function () {
    /**
     * Display: Ext.form.field.Display,  xtype: 'displayfield'
     * Muestra datos sobre el form, no permite editarlos.
     * Se podria substituir por un textfield con enabled=false
     * 
     */
    var fd = new Ext.form.field.Display({
        fieldLabel: 'Nombre',
        anchor: '90%',
        value: 'Ni Nombre'
    });


    /** 
     * Text: Ext.form.field.Text, xtype: 'textfield'
     * Muestra un string y permite editar
     * 
     */
    var ft = new Ext.form.field.Text({
        fieldLabel: 'Puesto',
        emptyText: 'Captura aqui tu puesto',
        anchor: '90%',
        disabled: false,
    });


    /**
     * TextArea: Ext.form.field.TextArea, xtype: 'textareafield'
     * Muestra un string nultilinea y permite editar
     * 
     */
    var fta = new Ext.form.field.TextArea({
        fieldLabel: 'Comentarios',
        emptyText: 'Captura aqui tu comentario',
        anchor: '90%',
        disabled: false
    });

    /**
     * CheckBox: Ext.form.field.Checkbox, xtype: 'checkboxfield'
     * 
     */
    var chk = new Ext.form.field.Checkbox({
        fieldLabel: 'X-tuti',
        boxLabel: 'Programador',
        checked: true
    });

    /**
     * Date: Ext.form.field.Date, xtype: 'datefield'
     * 
     */
    var fdt = new Ext.form.field.Date({
        fieldLabel: 'Nacimiento',
        value: new Date(),
        maxValue: new Date(2017, 12, 31),
        minValue: new Date()
    });

    /**
     * Number: Ext.form.field.Number, xtype: 'numberfield'
     * 
     */
    var fn = new Ext.form.field.Number({
        fieldLabel: 'Edad',
        value: 40,
        maxValue: 99,
        minValue: 0
    });

    /** 
     * Time: Ext.form.field.Time, xtype: 'timefield'
     * 
     */
    var ftime = new Ext.form.field.Time({
        fieldLabel: 'Hora',
        minValue: '6:00 AM',
        maxValue: '8:00 PM',
        increment: 30
    });

    /** 
     * RadioGroup: Ext.form.field.RadioGroup, xtype: 'radiogroup'
     * 
     */
    var rg = new Ext.form.RadioGroup({
        fieldLabel: 'Languaje preferido',
        columns: 2,

        items: [
            { boxLabel: 'VFP', name: 'lenguaje', inputValue: 'VFP' },
            { boxLabel: 'Visual Basic', name: 'lenguaje', inputValue: 'VB' },
            { boxLabel: 'C#', name: 'lenguaje', inputValue: 'CS' },
            { boxLabel: 'Javascript', name: 'lenguaje', inputValue: 'js', checked: true },
            { boxLabel: 'PHP', name: 'lenguaje', inputValue: 'php' }
        ]
    });

    /**
     * ComboBox: Ext.form.field.ComboBox, xtype: 'combobox'
     * -> El control "combobox" requiere  de  un  "store"  para
     *    almacenar los datos que necesita.
     *    El store en ExtJs es un objeto que permite  almacenar 
     *    datos... mas adelante voy a poner ejemplos  completos
     *    sobre este objeto.
     * 
     *    En este ejemplo, usamos el store en una de las formas 
     *    en que es posible usarlo,  como  una  lista/array  de 
     *    valores.
     */
    var cb = new Ext.form.ComboBox({
        fieldLabel: 'Ciudad',
        store: ['Monclova', 'San Buena', 'Castaños'],
        forceSelection: true,
        emptyText: 'Selecciona una ciudad...',
        editable: false
    });

    /** 
     * CheckboxGroup: Ext.form.CheckboxGroup, xtype: 'checkboxgroup'
     * -> Pues si, tambien hay un "grupo" de checkbox
     *    El objetivo (segun veo) sería organizarlos
     *    fisicamente/visualmente.
     * 
     */
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

    /** 
     * FieldSet: Ext.form.FieldSet, xtype: 'fieldset'
     * -> Agrupa un conjunto de cualquier tipo de objetos/campos/controles
     *    se puede usar para organizar visualmente nuestros objetos.
     * 
     */
    var fldset = new Ext.form.FieldSet({
        title: 'Agrupados',
        collapsed: false,
        collapsible: true,
        layout: 'anchor',
        width: '70%',
        margin: '5 5 5 5',

        /** 
         * La propiedad "default" asigna "propiedades" valgame la redundancia
         * a todos los objetos de un objeto (valgame de nuevo la redundancia)
         * Por ejemplo, en este caso, la propiedad "default",  le  asigna  la
         * propiedad "xtype: 'textfield'" a todos los objetos  declarados  en
         * los "items" de este objeto.
         * 
         */
        defaults: { xtype: 'textfield' },

        // Y aqui la lista de campos agrupados
        items: [
            { fieldLabel: 'Nombre:', value: 'Juan Antonio' },
            { fieldLabel: 'e-mail:' }
        ]
    });





    /** 
     * Form: Pues aqui creamos el "form" propiamente, le configuramos
     *       algunas propiedades y le "insertamos" nuestros campos.
     * 
     */
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


    /* Y... lo ponemos dentro de una ventana :) 
     * Tambien podemos ponerlo dentro del DIV 'main', bastaría
     * con asignar la propiedad "renderTo: 'main'" al objeto--
     * "FormPanel".
     * 
     * Que que es 'main'?... pues el DIV que tenemos en el HTML
     * "index.html".
     * 
     */
    var win = new Ext.Window({
        title: 'Mi Form en una Ventana',
        width: 500,
        items: myForm
    });
    win.show();
});

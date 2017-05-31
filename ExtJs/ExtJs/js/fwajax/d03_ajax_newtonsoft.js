/**
 ** Programa: d03_ajax_newtonsoft.js
 ** Objetivo: AJAX
 ** 
 */
Ext.onReady(function () {
    /**
     ** En este ejemplo no vamos a cambiar nada del lado de
     ** javascript. Lo que va  acambiar  es  del  lado  del 
     ** servidor. En la página ASP vamos a usar una libre--
     ** ria para convertir objetos normales de .NET  en  un
     ** objeto JSON... y JSON=>.NET
     ** 
     ** 1. Creamos un objeto normal JS
     ** 2. Lo convertimos a JSON (Objeto JS=>JSON)
     ** 3. Lo mandamos como parametro a la pagina
     ** 4. En la pagina convertimos JSON=>.NET
     ** 5. "Simulamos cualquier proceso"...
     ** 6. Convertimos un objeto .NET>=JSON
     ** 7. Regresamos este JSON como resultado
     ** 8. Convertimos (del lado de JS) JSON=>Objeto JS
     ** 
     */

    /**
     ** Aqui declaro el objeto persona
     **
     */
    var persona = {
        nombre: 'Juan Antonio Sandoval Zapata',
        edad: 42,
        telefono: '866 133 4665',
        email: 'juan.sandoval@maxionsc.com'
    };
    console.group("Objeto enviado:");
    console.log(persona);
    console.log(Ext.encode(persona));
    console.groupEnd();


    /** 
     ** Ahora lo mando a la pagina convertido en JSON
     ** 
     */
    Ext.Ajax.request({
        url: './asp/servidor_d03.aspx',
        method: 'POST',
        timeout: 1200000,

        params: {
            'data': Ext.encode(persona)
        },

        callback: function (options, success, response) {
            //
            // Debe ser diferente del enviado porque se cambio a proposito
            //
            var obj = Ext.decode(response.responseText);
            console.group("Objeto recibido:");
            console.log(response.responseText);
            console.log(obj);
            console.groupEnd();
        }
    });
})

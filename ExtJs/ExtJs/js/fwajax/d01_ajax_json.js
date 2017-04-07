/**
 ** Programa: d01_ajax.js
 ** Objetivo: AJAX
 ** 
 **           En ejemplos anteriores nos  conectamos con un servidor WEB
 **           en ese ejemplo solo cargamos un JSON en un store.
 **           Tambien vimos otro ejemplo donde  usamos  una  pagina  ASP
 **           pero lo unico que hicimos fue obtener de vuelta un  objeto
 **           JSON, esto a travez de un store.
 ** 
 **           Normalmente en una aplicación WEB  estamos  constantemente
 **           interactuando con el servidor, solicitando datos y presen-
 **           tando estos datos en controles, o bien grabando estos ----
 **           datos en el servidor.
 ** 
 **           Anteriormente lo normal era que cada vez que haciamos  una
 **           petición al servidor, se cargara de nuevo toda  la  página
 **           ya con los cambios solicitados.  Actualmente  existe  AJAX
 **           que realmente no es una nueva tecnologia,  realmente es un
 **           concepto.  Lo  que  hace  es que no carga de nuevo toda la 
 **           la pagina completa, solo hace pequeñas solicitudes.
 ** 
 **           Todo esto lo hace "asincronicamente", es decir, que el ---
 **           navegador WEB no espera la respuesta del servidor,continua
 **           con la ejecución del programa.
 ** 
 */
Ext.onReady(function () {
    /**
     ** Ext.Ajax.request: Ejecuta una llamada al servidor.
     ** 
     ** Como en la mayoria de los casos en ExtJs, recibe como parametro 
     ** un objeto de configuración con los siguientes elementos:
     ** 
     ** url:      La página que se va a mandar llamar en el servidor
     ** method:   El metodo que se va a usar GET/POST
     ** params:   Los valores que se le van a mandar a la pagina
     ** callback: La función que se va a ejecutar cuando el servidor
     **           responda a la petición.
     **
     ** En este primer ejemplo no podemos usar POST ni enviar parametros
     ** ya que la URL es un simple JSON.
     ** 
     */
    Ext.Ajax.request({
        url: './resources/json/ejemplo_nombres.json',
        method: 'GET',

        callback: function (options, success, response) {
            /**
             ** options:   
             ** sucess:    true/false, tuvo exito?
             ** response:  la respuesta completa
             ** 
             */
            console.log(options);
            console.log(success);

            // Aqui muestra todo el contenido del archivo JSON
            console.log(response.responseText);

            // Si lo queremos convertir en un objeto, usamos Ext.decode
            var obj = Ext.decode(response.responseText);
            console.log(obj);
        }
    });
})

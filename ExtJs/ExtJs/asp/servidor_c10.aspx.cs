using System;

namespace ExtJs.asp
{
    public partial class servidor : System.Web.UI.Page
    {
        // Se ejecuta el load de esta página
        // Luego el load del master page
        // Luego el loadComplete de esta pagina

        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void Page_LoadComplete(object sender, EventArgs e)
        {
            /**
             *  Creo objeto JSON que se va  a  regresar  directamente
             *  desde un "string".
             *  
             *  Lo correcto sería que este objeto se creara a  partir
             *  de consultas a b.d. por medio de alguna librería como
             *  por ejemplo "Newtonsoft.Json".
             *  Esta librería permite convertir un objeto  cualquiera
             *  de .NET en un objeto JSON... y lo contrario.
             *  
             */
            var json = @"
            {
	            'success': true,

                'data': [{
		            'id': 'MXN',
		            'describe': 'Pesos Mexicanos'

                },{
		            'id': 'USD',
		            'describe': 'Dolares Americanos'
	            }]
            }
            ";

            // Mando el texto
            Response.Clear();
            Response.ContentType = "text/plain";
            Response.Write(json);
            Response.End();
        }

    }
}

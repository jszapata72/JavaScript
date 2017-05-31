using System;
using Newtonsoft.Json;

namespace ExtJs.asp
{
    public partial class servidor_d03 : System.Web.UI.Page
    {
        protected class Persona
        {
            public string nombre { get; set; }
            public int edad { get; set; }
            public string telefono { get; set; }
            public string email { get; set; }
        }

        protected void Page_LoadComplete(object sender, EventArgs e)
        {
            // Recibo el objeto
            var jsonText = Request.Params["data"];
            if (jsonText == null) return;

            // Convierto JSON en .NET
            var p = new Persona();
            p = JsonConvert.DeserializeObject<Persona>(jsonText);

            // Cambio los valores :)
            p.nombre = "Ahora ero yo :)";

            // Ahora convierto el objeto p=>JSON (y este mero regreso)
            jsonText = JsonConvert.SerializeObject(p, Formatting.Indented);

            // Mando la respuesta
            Response.Clear();
            Response.ContentType = "text/plain";
            Response.Write(jsonText);
            Response.End();
        }
    }
}
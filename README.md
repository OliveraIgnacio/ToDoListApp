<h1>ToDo App</h1>
</br>
<h3>Descripción</h3>
<h5>Esta aplicación ToDo permite a los usuarios gestionar tareas, agregar nuevas, editarlas, ver detalles y eliminarlas.</h5>

<h3>Instrucciones para Ejecutar la API Localmente</h3>
<h4>Requisitos Previos</h4>
<ul>
<li>.NET Core 7</li>
<li> SQL Server</li>
</ul>

<h3>Pasos para Ejecutar:</h3>

<h3>1-Clone este repositorio:</h3>
<p>git clone https://github.com/tu-usuario/todo-app-api.git</p>
<p>cd todo-app-api</p>

<h3>2- Configura la Base de Datos:</h3>

<p>Abre appsettings.json y actualiza la cadena de conexión bajo la sección "ConnectionStrings" con tus propias credenciales de SQL Server.</p>

<h3>3- Ejecuta Migraciones:</h3>

<p>dotnet ef database update</p>

<h3>4- Inicia la API:</h3>
<p>dotnet run</p>
<p>La API estará disponible en http://localhost:5004.</p>

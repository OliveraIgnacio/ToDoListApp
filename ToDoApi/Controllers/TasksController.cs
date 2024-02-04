using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoApi.Data;
using ToDoApi.Models;


[Route("api/[controller]")]
[ApiController]
public class TasksController : ControllerBase
{
    private readonly AppDbContext _context;

    public TasksController(AppDbContext context)
    {
        _context = context;
    }

    // GET: api/Task
    [HttpGet]
    public async Task<ActionResult<IEnumerable<TodoTask>>> GetTasks()
    {
        try
        {
            var task = await _context.Tasks.ToListAsync();

            if (task == null || task.Count == 0)
            {
                return NoContent(); //No hay contenido para devolver
            }

            return Ok(task); //Devolver 200 OK con la lista de tareas
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error al obtener tareas: {ex.Message}");

            return  StatusCode(500, "Error interno del servidor");
        }

    }

    // GET: api/task/5
    [HttpGet("{id}")]
    public async Task<ActionResult<TodoTask>> GetTask(int id)
    {
        try
        {

            var task = await _context.Tasks.FindAsync(id);

            if (task == null)
            {
                return NotFound(); //Devolver 404 si no encuentra un id que coincida
            }

            return Ok(task); //Devolver 200 con la tarea encontrada

        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error al obtener tarea por ID. {ex.Message}");

            return StatusCode(500, $"Error interno del servidor"); 
        }
    }

    // POST: api/task
    [HttpPost]
    public async Task<ActionResult<TodoTask>> PostTask(TodoTask task)
    {
        try
        {

            _context.Tasks.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTask", new { id = task.TaskId }, task);
        
        }
        catch(Exception ex) 
        {
            Console.WriteLine($"Error al crear tarea: {ex.Message}");

            return StatusCode(500, "Error interno del servidor"); 
        }
    }

    // PUT: api/task/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTask(int id, TodoTask task)
    {
        try
        {

            if (id != task.TaskId)
            {
                return BadRequest("El id de la URL no coincide con el del body");
            }

            _context.Entry(task).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();

        }
        catch (DbUpdateConcurrencyException ex)
        {
            if (!TaskExists(id))
            {
                return NotFound();
            }
            else
            {
                Console.WriteLine($"Error al actualizar tarea con ID {id}: {ex.Message}");

                return StatusCode(500, "Error interno del servidor");
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error al actualizar tarea con ID {id}: {ex.Message}");

            return StatusCode(500, "Error interno del servidor");
        }

    }

    // DELETE: api/task/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
        try
        {

            var task = await _context.Tasks.FindAsync(id);
            if (task == null)
            {
                return NotFound(); //Devolver 404 si la tarea no existe
            }

            _context.Tasks.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent(); //Devolver 204 si la eliminacion fue correcta
        
        }
        catch(Exception ex)
        {
            Console.WriteLine($"Error al eliminar tarea con ID {id}: {ex.Message}");

            return StatusCode(500, "Error interno del servidor"); // Devolver un error interno del servidor

        }
    }


    //EXISTS
    private bool TaskExists(int id)
    {
        return _context.Tasks.Any(e => e.TaskId == id);
    }
}

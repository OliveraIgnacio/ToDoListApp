using Microsoft.EntityFrameworkCore;
using ToDoApi.Models;

namespace ToDoApi.Data;
public class AppDbContext : DbContext
{
    public DbSet<TodoTask> Tasks { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }
}

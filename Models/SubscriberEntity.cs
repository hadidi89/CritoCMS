using System.ComponentModel.DataAnnotations;

namespace Crito.Models;

public class SubscriberEntity
{
    [Key]
    public string Email { get; set; } = null!;
    public DateTime Created { get; set; } = DateTime.Now;
}


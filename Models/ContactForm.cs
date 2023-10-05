using System.ComponentModel.DataAnnotations;

namespace Crito.Models;

public class ContactForm
{
    
    [Required(ErrorMessage = "Please enter your name.")]
    [RegularExpression(@"^[a-öA-Ö]+(?:[ é'-][a-öA-Ö]+)*$", ErrorMessage = "You need to enter a valid name.")]
    public string Name { get; set; } = null!;

    [Required(ErrorMessage = "Please enter your e-mail.")]
    [RegularExpression(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", ErrorMessage = "You need to enter a valid E-mail.")]
    public string Email { get; set; } = null!;

    [Required(ErrorMessage = "Please enter a comment.")]
    public string Message { get; set; } = null!;
}

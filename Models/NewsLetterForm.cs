using System.ComponentModel.DataAnnotations;

namespace Crito.Models
{
    public class NewsLetterForm
    {
        [Required(ErrorMessage = "Please enter your e-mail.")]
        [RegularExpression(@"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$", ErrorMessage = "You need to enter a valid E-mail.")]
        public string Email { get; set; } = null!;
    }
}

using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace DiamondManage.Models
{
    public class Diamond
    {
        [Required]
        public string? Shape { get; set; }
        [Required]
        public float Size { get; set; }
        [Required]
        public string? Color { get; set; }
        [Required]
        public string? Clarity { get; set; }
        [Required]
        public float Price { get; set; }
        [Required]
        public float ListPrice { get; set; }

    }
}
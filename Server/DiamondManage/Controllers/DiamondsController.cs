using System.Text.RegularExpressions;
using DiamondManage.Data;
using DiamondManage.Models;
using Microsoft.AspNetCore.Mvc;

namespace DiamondManage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DiamondsController : ControllerBase
    {
        private IDiamondManageRepo _repository;

        /// <summary>
        /// Constructor 
        /// </summary>
        /// <param name="repository"> repository of data</param>
        public DiamondsController(IDiamondManageRepo repository)
        {
            _repository = repository;
        }

        /// <summary>
        /// Returns all the diamonds in the DB
        /// </summary>
        /// <returns>All the diamonds</returns>
        [HttpGet]
        public ActionResult<IEnumerable<Diamond>> GetAllDiamonds()
        {
            Console.WriteLine("Get");
            try
            {
                var diamondsItems = _repository.GetAllDiamonds();

                return Ok(diamondsItems);
            }
            catch (System.Exception)
            {
                return NotFound();
            }
        }

        /// <summary>
        /// Adding the diamond to the DB
        /// </summary>
        /// <param name="diamond"> Diamond</param>
        /// <returns>The new Diamond</returns>
        [HttpPost]
        public ActionResult<Diamond> AddDiamond([FromBody]Diamond diamond)
        {
            Console.WriteLine("POST");
            try
            {
                var inputTests = DiamondPropsTests(diamond);
                if(inputTests.Equals(""))
                {
                     _repository.AddDiamond(diamond);
                    return Ok(diamond);
                }
                else
                {
                    return ValidationProblem(inputTests);
                }
            }
            catch (System.Exception)
            {
                return ValidationProblem();
            }
            
        }

        /// <summary>
        /// Checks if the input(diamond) is correct
        /// </summary>
        /// <param name="diamond">The new diamond</param>
        /// <returns>Error type</returns>
        private string DiamondPropsTests(Diamond diamond)
        {
            Regex regex = new Regex("^[a-zA-Z]+$");
            if(!Regex.Match(diamond.Shape,"^[a-zA-Z]+$").Success)
                return "Input Error: shape prop not in format";
            if(!Regex.Match(diamond.Size.ToString(),"^[0-9]+([.]?[0-9])*$").Success)
                return "Input Error: size prop not in format";
            if(!Regex.Match(diamond.Color,"^[A-Z]$").Success)
                return "Input Error: color prop not in format";
            if(!Regex.Match(diamond.Price.ToString(),"^[0-9]+([.]?[0-9])*$").Success)
                return "Input Error: price prop not in format";
            if(!Regex.Match(diamond.ListPrice.ToString(),"^[0-9]+([.]?[0-9])*$").Success)
                return "Input Error: list price prop not in format";
            return "";
        }

    }
}
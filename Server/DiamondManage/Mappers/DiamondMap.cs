using CsvHelper.Configuration;
using DiamondManage.Models;

namespace DiamondManage.Mappers
{
    public sealed class DiamondMap: ClassMap < Diamond > {  
        /// <summary>
        /// Mapping csv diamond row into diamond object
        /// </summary>
        public DiamondMap() {  
            Map(x => x.Shape).Name("shape");  
            Map(x => x.Size).Name("size");  
            Map(x => x.Color).Name("color");  
            Map(x => x.Clarity).Name("clarity");  
            Map(x => x.Price).Name("price");  
            Map(x => x.ListPrice).Name("list price");  
        }  
    }  
}
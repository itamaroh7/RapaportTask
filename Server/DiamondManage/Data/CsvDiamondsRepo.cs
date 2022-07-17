using System.Globalization;
using CsvHelper;
using DiamondManage.Mappers;
using DiamondManage.Models;

namespace DiamondManage.Data
{
    public class CsvDiamondsRepo : IDiamondManageRepo
    {
        private readonly string path = $"{Directory.GetCurrentDirectory()}\\Files\\Diamonds.csv";

        /// <summary>
        /// Returns from the DB the diamonds
        /// </summary>
        /// <returns>All the diamonds</returns>
        /// <exception cref="Exception">exception</exception>
        public IEnumerable<Diamond> GetAllDiamonds()
        {
            try {  
                Console.WriteLine("csvGet");
                List<Diamond> diamonds = new List<Diamond>();
                using(var reader = new StreamReader(path))  
                using(var csv = new CsvReader(reader,System.Globalization.CultureInfo.InvariantCulture)) { 
                    csv.Context.RegisterClassMap < DiamondMap > (); 
                    var records = csv.GetRecords < Diamond > ().ToList();
                    return records; 
                }  
            } catch (Exception e) {  
                throw new Exception(e.Message);  
            }  
        }

        /// <summary>
        /// Adding the new diamond to the DB
        /// </summary>
        /// <param name="diamond">The new diamond</param>
        /// <exception cref="Exception"></exception>
        public void AddDiamond(Diamond diamond){
            try
            {
                var diamondsList = GetAllDiamonds();
                using (var writer = new StreamWriter(path))
                using (var csv = new CsvWriter(writer, CultureInfo.InvariantCulture, false))
                {
                    csv.Context.RegisterClassMap < DiamondMap > ();
                    csv.WriteHeader < Diamond > ();  
                    csv.NextRecord();   
                    foreach(Diamond diam in diamondsList)
                    {
                        csv.WriteRecord<Diamond>(diam);
                        csv.NextRecord();
                    }
                    csv.WriteRecord<Diamond>(diamond);
                    Console.WriteLine("Added diamond succesfully");
                    
                }
            }
            catch (Exception e)
            {
                throw new Exception(e.Message);  
            }
            
        }

    }
}
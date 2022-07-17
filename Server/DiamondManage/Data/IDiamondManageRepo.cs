using DiamondManage.Models;

namespace DiamondManage.Data
{
    public interface IDiamondManageRepo
    {
        IEnumerable<Diamond> GetAllDiamonds();
        public void AddDiamond(Diamond diamond);
    }
}
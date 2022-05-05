namespace API.RequestHelpers
{
    public class PaginationParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } = 1 ;
        private int _pageSize = 6;
        public int pageSize {
            get => _pageSize;
            set => _pageSize = value> MaxPageSize? _pageSize : value;
        }
    }
}
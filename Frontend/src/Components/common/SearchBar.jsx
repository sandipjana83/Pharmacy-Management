import {Search} from 'lucide-react'
import '../../styles/searchbar.css';

function SearchBar({
  value,onChange,onSearch,
  placeholder = "Search medicines, batches, reports...",}){
  
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch?.(value);
    }
    if (e.key === "Escape") {
      onChange("");
    }
  };

  return(
    <div className="search-bar">
      <Search size={20} aria-hidden="true" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label={placeholder}
      />
    </div>
  );
}
export default SearchBar;
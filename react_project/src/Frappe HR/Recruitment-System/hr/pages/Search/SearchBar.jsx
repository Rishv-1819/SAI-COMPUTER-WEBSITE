import "./SearchBar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search Applicant..."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchBar;

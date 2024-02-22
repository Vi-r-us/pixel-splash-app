import "./index.css";
import vectorImage from "../../assets/vector-hands-holding-camera-hand-drawn.png";
import searchIcon from "../../assets/search-icon.svg";
import { useGlobalContext } from "../../context";

const SearchForm = () => {
  const { width, setSearchTerm, setPage } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    setPage(1);
    // if you want input to be empty after enter
    // e.target.elements.search.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={vectorImage} alt="vector image" />
      <div className="search-bar">
        <img src={searchIcon} />
        <input
          type="search"
          placeholder={width < 441 ? "Search free photos" : "Search free high-resolution photos"}
          name="search"
        />
      </div>
    </form>
  );
};

export default SearchForm;

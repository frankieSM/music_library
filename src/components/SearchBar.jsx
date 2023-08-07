import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export default function SearchBar() {
  const { term, handleSearch } = useContext(SearchContext);

  return (
    <form>
      <input ref={term} type="text" placeholder="Search for music" />
      <button onSubmit={(e) => handleSearch(e, term.current.value)}>
        Search
      </button>
    </form>
  );
}

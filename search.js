import { GrSearch } from "react-icons/gr";
import MainContext from "../mainContext";
import { useContext } from "react";

function Search() {
  const {search, setSearch} = useContext(MainContext)
    return (
      <>
      <div className="search">
        <div className="icon">
            <GrSearch/>
        </div>
        <input placeholder="Search Color" onChange={(e) => setSearch(e.target.value)}/>
      </div>
      </>
    );
  }
  
  export default Search;
  
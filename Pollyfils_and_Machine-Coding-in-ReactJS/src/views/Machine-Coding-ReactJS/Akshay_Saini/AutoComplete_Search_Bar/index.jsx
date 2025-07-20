import React, { useEffect, useState } from "react";
import "./index.css";
import { Search } from "lucide-react";
const AutoCompleteSearchBar = () => {
  const [recipesList, setRecipesList] = useState([]);
  const [input, setInput] = useState("");
  const [changeFocus, setChangeFocus] = useState(false);
  const [saveCache, setSaveCache] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    if (saveCache[input]) {
      console.log(saveCache[input][1]);
      console.log("Saved Cache", input);
      setRecipesList(saveCache[input]);
      return;
    }
    try {
      setLoading(true);
      console.log("API CALL", input);
      const res = await fetch(
        "https://dummyjson.com/recipes/search?q=" + input
      ).then((data) => data.json());
      setRecipesList(res?.recipes);
      setSaveCache((pre) => ({ ...pre, [input]: res?.recipes }));
      // console.log(res.recipes);
    } catch (error) {
      console.error("Error in API Call", error);
    } finally {
      setLoading(false);
    }
  };

  //debounce
  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 300);
    return () => clearTimeout(timer);
  }, [input]);

  return (
    <div className="main-container">
      <h1>Auto Complete Search Bar</h1>
      <div className="container">
        <input
          type="text"
          name="SearchBar"
          value={input}
          placeholder="Start Typing Recipe Name..."
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setChangeFocus(true)}
          onBlur={() => {
            setTimeout(() => setChangeFocus(false), 300);
          }}
          autoFocus
        />
        {changeFocus && (
          <div className="recipe-container">
            {loading ? (
              <span>Loading!!!!!</span>
            ) : (
              <>
                {Array.isArray(recipesList) &&
                  recipesList.length > 0 &&
                  recipesList.map((r) => (
                    <span key={r.id} onClick={() => setInput(r.name)}>
                      <Search className="icon" />
                      {r.name}
                    </span>
                  ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoCompleteSearchBar;

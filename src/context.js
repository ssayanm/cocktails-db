import React, { useState, useContext, useEffect, createContext } from "react";
import { useCallback } from "react";
// import paginate from "./pageUtils";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const paginate = (followers) => {
    const itemsPerPage = 6;
    const numberOfPages = Math.ceil(followers.length / itemsPerPage);

    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return followers.slice(start, start + itemsPerPage);
    });

    return newFollowers;
  };

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        setCocktails(paginate(newCocktails));
        setLoading(false);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{ loading, cocktails, searchTerm, setSearchTerm, setCocktails }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

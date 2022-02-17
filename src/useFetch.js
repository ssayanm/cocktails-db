import { useState, useEffect } from "react";

const paginate = (followers) => {
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });

  return newFollowers;
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("a");

  const getProducts = async () => {
    const response = await fetch(`${url}${searchTerm}`);
    const data = await response.json();

    const { drinks } = data;

    if (drinks) {
      const newDrinks = drinks.map((item) => {
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

      setData(paginate(newDrinks));
      setLoading(false);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, [data]);
  return { loading, data };
};

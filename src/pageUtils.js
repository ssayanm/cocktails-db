const paginate = (cocktails) => {
  const itemsPerPage = 5;
  const numberOfPages = Math.ceil(cocktails.length / itemsPerPage);

  const newCocktails = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return cocktails.slice(start, start + itemsPerPage);
  });

  return newCocktails;
};

export default paginate;

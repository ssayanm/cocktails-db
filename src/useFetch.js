// import { useState, useEffect } from "react";
// // import paginate from "../utils/pageUtils";

// const paginate = (followers) => {
//   const itemsPerPage = 10;
//   const numberOfPages = Math.ceil(followers.length / itemsPerPage);

//   const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
//     const start = index * itemsPerPage;
//     return followers.slice(start, start + itemsPerPage);
//   });

//   return newFollowers;
// };

// const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

// export const useFetch = () => {
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("a");
//   const [data, setData] = useState([]);

//   const getProducts = async () => {
//     const response = await fetch(`${url}${searchTerm}`);
//     const data = await response.json();

//     const { drinks } = data;

//     useEffect(() => {
//       getProducts();
//     }, []);
//     return { loading, data };
//   };
// };

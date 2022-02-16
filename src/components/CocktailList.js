import React, { useState } from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  const [page, setPage] = useState(0);

  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > cocktails.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = cocktails.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
      {!loading && (
        <div className="pbtn-container">
          <button className="pprev-btn" onClick={prevPage}>
            prev
          </button>
          {cocktails.map((item, index) => {
            return (
              <button
                key={index}
                className={`ppage-btn ${index === page ? "pactive-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="pnext-btn" onClick={nextPage}>
            next
          </button>
        </div>
      )}
    </section>
  );
}

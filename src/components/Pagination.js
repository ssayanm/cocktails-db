import React, { useState, useEffect } from "react";
import { useFetch } from "../useFetch";
import Cocktail from "./Cocktail";

const Pagination = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page, data]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <main className="pagination">
      <div className="psection-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="punderline"></div>
      </div>
      <section className="section">
        <div className="cocktails-center">
          {followers.map((follower) => {
            return <Cocktail key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="pbtn-container">
            <button className="pprev-btn" onClick={prevPage}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`ppage-btn ${
                    index === page ? "pactive-btn" : null
                  }`}
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
    </main>
  );
};

export default Pagination;

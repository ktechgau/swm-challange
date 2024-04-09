import React from "react";

function FetchNews({ news }) {
  console.log("newsdata:", news);
  return (
    <>
      <div className="news-container">
        {news.articles.map((data) => (
          <div className="news-tile" key={data.id}>
            <div className="news-content">
              <div className="news-image">
                <img src={data.image} alt={data.head} />
              </div>
              <h1>{data.head}</h1>
              <p>{data.teaser}</p>
              <p>{data.byline.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default FetchNews;

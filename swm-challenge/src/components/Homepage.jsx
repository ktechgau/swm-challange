import React from "react";
import useNews from "../hooks/useNews.js";
import "../components/homepage.css";

function Homepage() {
  const { news, error, isLoading } = useNews();

  return (
    <>
      <section className="news-page">
        {isLoading ? (
          <p>Loading news articles...</p>
        ) : error ? (
          <p> {error.message}</p>
        ) : (
          <>
            <div>
              <section className="feature-story-container">
                <article className="feature-story">
                  <div className="feature-text">
                    <h2>{news[0].head}</h2>
                    <p>{news[0].teaser}</p>
                    <p className="f-auth">{news[0].byline.text}</p>
                  </div>
                  <div className="f-image">
                    <img
                      className="feature-image"
                      src={news[0].image}
                      alt={news[0].head}
                    />
                  </div>
                </article>
                <article className="feature-story-sub">
                  <img
                    className="feature-story-sub-image"
                    src={news[1].image}
                    alt={news[1].head}
                  />
                  <h3>{news[1].head}</h3>
                  <p className="f-auth">{news[1].byline.text}</p>
                </article>
              </section>
              <section className="other-stories-container">
                <div className="other-stories-main">
                  <article className="o-story1">
                    <img
                      className="other-stories-image"
                      src={news[10].image}
                      alt={news[10].head}
                    />
                    <h3>{news[10].head}</h3>
                    <p>{news[10].teaser}</p>
                    <p className="o-auth">{news[10].byline.text}</p>
                  </article>
                  <article className="o-story2">
                    <div className="o-sub1">
                      <h3>{news[2].head}</h3>
                      <p>{news[2].teaser}</p>
                      <p className="o-auth">{news[2].byline.text}</p>
                    </div>
                    <div className="o-sub2">
                      <h3>{news[3].head}</h3>
                      <p>{news[3].teaser}</p>
                      <p className="o-auth">{news[3].byline.text}</p>
                    </div>
                  </article>
                  <article className="o-story3">
                    <img
                      className="other-stories-image"
                      src={news[4].image}
                      alt={news[10].head}
                    />
                    <h3>{news[4].head}</h3>
                    <p>{news[4].teaser}</p>
                    <p className="o-auth">{news[4].byline.text}</p>
                  </article>
                </div>
                <div className="other-stories-sub">
                  <article>
                    <h4>{news[5].head}</h4>
                  </article>
                  <article>
                    <h4>{news[6].head}</h4>
                  </article>
                  <article>
                    <h4>{news[7].head}</h4>
                  </article>
                  <article>
                    <h4>{news[8].head}</h4>
                  </article>
                  <article>
                    <h4>{news[9].head}</h4>
                  </article>
                </div>
              </section>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default Homepage;

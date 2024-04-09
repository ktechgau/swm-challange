import React from "react";
import news from "../../news.json";
import FetchNews from "./FetchNews.jsx";
import "../components/homepage.css";

function Homepage() {
  return (
    <>
      <FetchNews news={news} />
    </>
  );
}

export default Homepage;

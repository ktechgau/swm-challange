import { useState, useEffect } from "react";
import getNews from "../api/getNews.js";

function useNews() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getNews()
      .then((newsData) => {
        console.log("Received news data:", newsData);
        setNews(newsData.articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);
  return { news, isLoading, error };
}

export default useNews;

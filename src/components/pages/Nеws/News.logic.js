import { useEffect, useState } from "react";

export function useNews() {
  const [newsData, setNewsData] = useState([
    {
      title: "Bulgaria is positioned as a destination for higher-end tourists.",
      id: 1,
    },
    {
      title:
        "Bulgaria's Varna Gold Treasure is considered the oldest processed gold in the world",
      id: 2,
    },
  ]);

  useEffect(() => {
    // Simulating an API call to fetch user data
    fetchNewsData().then((data) => {
      if (data) {
        setNewsData(data);
      }
    });
  }, []);

  const fetchNewsData = async () => {
    // Simulated API call
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://news.com/"
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    news: newsData,
  };
}

import { useNews } from "./News.logic";

export const News = () => {
  const { news = [] } = useNews();

  return (
    <div>
      <h1>Hello form News</h1>
      {news.map((n) => (
        <h2 key={n.id}>{n.title}</h2>
      ))}
    </div>
  );
};

export default News;

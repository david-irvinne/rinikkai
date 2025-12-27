import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";

type Article = {
  id?:number; 
  title: string;
  description: string;
  markdown: string;
}

function Articles() {
  const API_URL = import.meta.env.VITE_CORS_URL;
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/all`)
    .then(res => res.json())
    .then(data => setArticles(data))
    .catch(err => console.log(err));
  }, []);


  return (
    <>
      <div className="bg-slate-200">
        {articles.length === 0 && (<p>no articles found</p>)}

        {articles.map((a) => (
          <div>
            <h2 className="text-xl font-bold">
              {a.title}
            </h2>
            <p className="text-slate-800">
              {a.description}
            </p>
            <ReactMarkdown>
              {a.markdown}
            </ReactMarkdown>

          </div>
        ))}

      </div>

    </>
  );
}

export default Articles;

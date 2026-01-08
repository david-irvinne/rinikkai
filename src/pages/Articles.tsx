import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      <div className="">
        {articles.length === 0 && (<p>no articles found</p>)}

        {articles.map((a) => (
          <div className="bg-slate-100 mb-2">
            <h1 className="text-xl font-bold">
              {a.id}. {a.title}
            </h1>
            <h2 className="text-slate-800">
              {a.description}
            </h2>


            <div className="prose"> 
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {a.markdown}
              </ReactMarkdown>
            </div>


          </div>
        ))}

      </div>

    </>
  );
}

export default Articles;

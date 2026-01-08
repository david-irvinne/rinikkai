import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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
          <div className="bg-slate-100 mb-4 rounded-xl p-[0.4rem]">
            <h1 className="text-xl font-bold">
              {a.title} (id: {a.id})
            </h1>
            <h2 className="text-slate-800">
              {a.description}
            </h2>

            <div className="prose mb-[0.5rem]"> 
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {a.markdown}
              </ReactMarkdown>
            </div>

            {/* button  */}
            <div className="space-x-[0.4rem]">
              <button type="button" className="bg-amber-300 rounded-lg hover:cursor-pointer hover:bg-amber-400 p-[0.4rem] transition" onClick={() => navigate(`/edit_article/${a.id}`)}>Edit</button>
              <button type="button" className="bg-emerald-200 rounded-lg hover:cursor-pointer hover:bg-emerald-300 p-[0.4rem] transition" onClick={() => navigate(`/show_article/${a.id}`)}>Details</button>


            </div>


          </div>
        ))}

      </div>

    </>
  );
}

export default Articles;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Article = {
  title: string;
  description: string;
  markdown: string;
  created_at: string;
  updated_at: string;
};

function mongoDateToISOString(d: string): string {
  return new Date(Number(d)).toISOString();
}

export default function ShowArticle() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {id} = useParams<{id: string}>();
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_CORS_URL}/article/${id}`)
      .then(res => res.json())
      .then((data: any) => {
        setArticle({
          title: data.title, 
          description: data.description,
          markdown: data.markdown,
          created_at: mongoDateToISOString(data.created_at.$date.$numberLong),
          updated_at: mongoDateToISOString(data.updated_at.$date.$numberLong)
        });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      })
  }, []);

  if(article){
    console.log(article);
  }
  
  if (loading) return <p>Memuat artikel...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!article) return <p>Tidak ada artikel ditemukan.</p>;

  return (
    <div className="mx-auto p-4">
      <h1 className=" text-3xl font-bold mb-4">{article.title}</h1>
      <p className="mb-2">{article.description}</p>
      <p className="">Created At: {article.created_at}</p>
      <p className="mb-2"> Updated At: {article.updated_at}</p>
      <div className="prose mb-[0.5rem]"> 
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {article.markdown}
        </ReactMarkdown>
      </div>
      <button type="button" className="bg-red-700 rounded-lg hover:cursor-pointer hover:bg-red-800 text-white p-[0.4rem] transition" onClick={() => navigate(`/articles`)}>Back</button>
    </div>
  );
}

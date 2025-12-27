import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

type Article = {
  title: string;
  description: string;
  markdown: string;
  created_at: string;
  updated_at: string;
}

export default function ShowArticle() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {id} = useParams<{id: string}>();
  
  console.log(`${import.meta.env.VITE_CORS_URL}/article/${id}`);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_CORS_URL}/article/${id}`)
    .then(res => res.json())
    .then((data) => { setArticle(data); setLoading(false)})
    .catch((err) => {setError(err.message); setLoading(false)})
  }, []);

  console.log("ini article", article);

  if (loading) return <p>Memuat artikel...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!article) return <p>Tidak ada artikel ditemukan.</p>;

  return (
    <div className="mx-auto p-4">
      <h1 className=" text-3xl font-bold mb-4">{article.title}</h1>
      <p className="mb-4">{article.description}</p>
      <ReactMarkdown>
        {article.markdown}
      </ReactMarkdown>
    </div>
  );
}

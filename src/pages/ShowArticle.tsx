import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Article {
  _id: string;
  createdAt: string;
  title: string;
  description: string;
  markdown: string;
  slug: string;
  sanitizedHTML: string;
}

export default function ShowArticle() {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const {slug} = useParams<{slug: string}>();
  // console.log(`VITE_CORS_URL: ${import.meta.env.VITE_CORS_URL}/${slug}`);
  useEffect(() => {
    fetch(`/articles/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Gagal memuat artikel");
        return res.json();
      })
      .then((data) => {
        setArticle(data.article);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Memuat artikel...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!article) return <p>Tidak ada artikel ditemukan.</p>;

  // console.log(article.sanitizedHTML);

  return (
    <div className="mx-auto p-4">
      <h1 className=" text-3xl font-bold mb-4">{article.title}</h1>
      <p className="mb-4">{article.description}</p>
      <div
        className="prose prose-neutral  max-w-none"
        dangerouslySetInnerHTML={{ __html: article.sanitizedHTML }}
      />
    </div>
  );
}

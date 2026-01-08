import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Article = {
  id?:number; 
  title: string;
  description: string;
  markdown: string;
}


function EditArticle() {
  const API_URL = import.meta.env.VITE_CORS_URL;
  const {id} = useParams<{id: string}>();

  const [article, setArticle] = useState<Article>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_URL}/article/${id}`)  
      .then(res => res.json())
      .then(data => setArticle(data))
      .catch(err => console.log(err))
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setArticle(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/article/${id}`, {
        method: "PUT", 
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(article)
      });

      if(response.ok){
        alert("artikel berhasil diperbarui");
      }
      else {
        alert("gagal memperbarui artikel")
      }
    }
    catch (err) {
      console.error(err);
      alert("terjadi kesalahan");
    }
  }

  return (
    <>
      {article && 
      
        <form onSubmit={handleSubmit} className="space-y-[1.5rem]">
          <div className="flex flex-col ">
            <label htmlFor="title" className="mb-[0.5rem]">
              Judul
            </label>
            <input name="title" id="title" value={article.title} className="border border-slate-300 rounded-lg p-[0.5rem]"              onChange={handleChange}/>
          </div>

          <div className="flex flex-col">
            <label htmlFor="description" className="mb-[0.5rem]">
              Deskripsi
            </label>
            <textarea name="description" id="description" value={article.description}
              className="border border-slate-300 rounded-lg p-[0.5rem]"
              onChange={handleChange}
              rows={3}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="markdown" className="mb-[0.5rem]">
              Markdown 
            </label>
            <textarea name="markdown" id="markdown" value={article.markdown}
              className="border border-slate-300 rounded-lg p-[0.5rem]"
              onChange={handleChange}
              rows={15}
            />
          </div>
        
          {/* button */}
          <div className="space-x-[0.5rem]">
            <button type="submit" className="bg-blue-400 rounded-lg p-[0.5rem] text-white hover:cursor-pointer hover:bg-blue-500 transition ">Submit</button>

            <button type="button" className="bg-red-700 rounded-lg p-[0.5rem] text-white hover:cursor-pointer hover:bg-red-800 transition " onClick={() => navigate(-1)}>Cancel</button>
          </div>
      
        </form>

      }
    </>
  );
}

export default EditArticle;

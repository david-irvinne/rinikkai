import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import methodOverride from "method-override";
import {connectDB} from "./lib/db.js";
import articleRouter from "./routes/articles.js";
import Article from "./models/article.js";

import path from "path";
import { fileURLToPath } from "url";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigin = process.env.ALLOWED_ORIGIN || "http://localhost:5173";

// resolve __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors({
    origin: allowedOrigin,
}));

app.set("view engine", "ejs");
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.use("/articles", articleRouter);

// app.get('/', async (req, res) => {  
//   const articles = await Article.find().sort({createdAt: 'desc'}); 
//   res.render('articles/index', {articles: articles});
// })

// Fallback: semua route non-API diarahkan ke React index.html
if(process.env.NODE_ENV === "production"){
  // Serve frontend build (React)
  const frontendPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendPath));
  app.use((req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
  connectDB();
})

/*

*/ 

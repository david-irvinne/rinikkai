import {Route, Routes} from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Events from "./pages/Events"
import Members from "./pages/Members"
import ShowArticle from "./pages/ShowArticle";
import Articles from "./pages/Articles"

function App() {
  console.log(import.meta.env.CORS_URL);

  return (
    <div className="min-h-screen flex flex-col px-[1.5rem] py-[1rem]">

      <Navbar />

      <div className="mt-[2rem] flex-grow">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/members" element={<Members/>}/>
          <Route path="/showArticle/:slug" element={<ShowArticle/>}/> 
          <Route path="/articles" element={<Articles/> }/>
        </Routes>
      </div>
      
      <div className="mt-[2rem]">

        <Footer/>
      </div>
    </div>
  )
}

export default App

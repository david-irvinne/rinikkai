import { useNavigate } from "react-router-dom";

import Button from "./Button";
import JLPT2025 from "../../assets/img/jlpt2025_1.jpeg"
import MabarKaruta from "../../assets/img/karuta.png"
import Shokujikai from "../../assets/img/shokujikai1.jpeg"

const Events = () => {
  const navigate = useNavigate();
  const handleLihatEvent = () =>{
    navigate('/events');
  }
  const handleEventClick = (slug: string) =>{
    navigate(`/showArticle/${slug}`);
  }


  return ( <> 

    <div className="h-[32rem]  rounded-[12px]  px-[1.2rem] bg-gradient-to-r from-[#4E87CE] to-[#F1F2F3]"> 

      <div className="py-[1rem]  flex justify-between ">

        <Button title="Events" color="bg-slate-100" shape="w-[10rem]" text="text-center"/>

        <Button onClick={handleLihatEvent} title="Lihat events lainnya" color="bg-blue-500" shape="w-[15rem] hover:cursor-pointer" text="text-center text-white" />
      </div>

      <div className="h-[80%]  ">
        <div className=" grid grid-cols-2  gap-x-[1rem] h-full ">

          <div className="grid grid-rows-2 gap-y-[1rem] h-full ">
            <div className="relative bg-red-100 h-full rounded-[12px] overflow-hidden group">
              <img 
                src={MabarKaruta}
                className="absolute  w-full h-full object-cover" 
                alt="Mabar Karuta"
              />
              <div className="absolute bottom-0 text-white ml-[1rem] mb-[1rem]
                transition-transform duration-300
                group-hover:-translate-y-[1rem]">
                <p className="font-bold text-lg">Mabar Karuta</p>
                <p>Kantin Bio-Geo FMIPA UGM</p>
              </div>
            </div>

            <div className="relative bg-red-100 h-full rounded-[12px] overflow-hidden group">
              <img 
                src={Shokujikai}
                className="absolute  w-full h-full object-cover " 
                alt="Mabar Karuta"
              />

              <div className="absolute bottom-0 text-white ml-[1rem] mb-[1rem]
                transition-transform duration-300
                group-hover:-translate-y-[1rem]">
                <p className="font-bold text-lg">Shokujikai I</p>
                <p>Kantin Bio-Geo FMIPA UGM</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[12px] relative group cursor-pointer"
                          onClick={() => handleEventClick("jlpt-juli-2025")}
          >
            <img src={JLPT2025}  className="absolute h-full w-full object-cover "/>
            <div className="absolute bottom-0 text-white ml-[1rem] mb-[1rem]
              transition-transform duration-300
              group-hover:-translate-y-[1rem] " 
            >
              <p className="font-bold text-lg">JLPT Juli 2025</p>
              <p>STMP Yogyakarta</p>
            </div>
          </div>

        </div>
      </div>


    </div>
  </>
  );
}
export default Events;

import bannerImg from "../../assets/img/DIKE.jpg"
import Countdown from "./Countdown.tsx"

const Banner = () => {

  return (
    <>
      <div className='h-[36rem] rounded-[12px] overflow-hidden relative flex items-center'>


        <img src={bannerImg} className="w-full h-full absolute "/>


        <div className=" text-lg text-white absolute 
          top-1/20 left-1/2 transform -translate-x-1/2"> 
          <p className="">  みんなで一緒に楽しんで勉強しよう
          </p>
        </div>

        <div className="absolute h-[75%] left-1/20 w-[20rem]">
          <Countdown />
        </div>
      </div>
      

    </>
  )
}

export default Banner

import CountdownImg from "../../assets/img/countdown.png"
import {useState, useEffect} from "react"

const Countdown = () => {
  const [daysLeft, setDaysLeft] = useState(0);
  
  const calculateDaysLeft = () =>{
    const now = new Date();
    const targetData = new Date("2026-07-06T00:00:00+07:00");
    const differenceMs = targetData.getTime() - now.getTime();
    const days = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    setDaysLeft(days > 0 ? days : 0);
  }
  useEffect(() => {
    calculateDaysLeft();
    // update tiap jam
    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60)

    return () => clearInterval(interval);
  }, [])


  return (
    <> 
      <div className="bg-slate-100 h-full overflow-hidden border-black rounded-[12px] relative">
        <img src={CountdownImg} className="w-full h-full object-cover"/> 
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl text-slate-800 font-semibold">{daysLeft}</p>
      </div>
    </>
  )
}

export default Countdown ;


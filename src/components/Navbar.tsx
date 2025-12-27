import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate =useNavigate();
  const handleLogoClick = () =>{
    navigate("/");
  }
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 mt-[0.8rem] flex justify-between items-center bg-slate-600 text-white px-[1rem]
      py-[0.5rem] rounded-lg shadow-xl/40 mx-auto z-10
      bg-gradient-to-r from-[#4E87CE] to-[#F1F2F3]">

      {/* logo */}
      <div className="font-bold text-xl mr-[8rem] flex items-center hover:cursor-pointer" onClick={handleLogoClick}>
        <img src="/rinikkai-logo.svg" className="size-[2rem] mr-[0.4rem]"/>
        rinikkai
      </div>

      {/* Nav links */}
      <div className="flex gap-6 items-center text-sm">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/events" className="hover:underline">Events</Link>
        <Link to="/about" className="hover:underline">About Us</Link>


        <Link
          to="/join"
          className="bg-blue-500 hover:bg-blue-500 text-white font-semibold px-4 py-1 rounded"
        >
          Join Us
        </Link>
      </div>


    </div>
  );
};

export default Navbar;

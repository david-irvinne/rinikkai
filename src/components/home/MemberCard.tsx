
const MemberCard = ({name= "Nama Anggota", subtitle= "Anggota", filename="kopiadem.png"}) => {
  return (
    <div className="relative bg-slate-400 h-[28rem] w-[17rem] rounded-[12px] overflow-hidden group">
      <img src={filename} className="w-full h-full object-cover object-center" />
    
      <div className="absolute text-slate-100 bottom-0 px-[0.5rem] pb-[1rem] transition-transform duration-200  group-hover:-translate-y-[1rem] ">
        <p className="font-semibold text-lg ">{name}</p> 
        <p className=" text-md ">{subtitle}</p>
      </div>
    </div>
  );
}

export default MemberCard; 

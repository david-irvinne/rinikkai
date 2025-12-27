import MemberCard from "./MemberCard";
import kopiadem from "../../assets/img/members/kopiadem.png";
import akizuki from "../../assets/img/members/akizuki.jpg";
import iman from "../../assets/img/members/iman.png";
import Button from "./Button.tsx";

import { useNavigate } from "react-router-dom";

const Members = () => {
  const navigate = useNavigate();
  const handleSeeMembers = () =>{
    navigate("/members")
  }
  return (
    <div className="rounded-[12px] bg-gradient-to-r from-[#4E87CE] to-[#F1F2F3] py-[1.5rem] px-[3rem]">
      <div className="grid grid-cols-[1fr_1fr_1fr_2fr] space-x-[1.2rem]">
        <div>
          <MemberCard name="Muhammad Syifaurrohman" subtitle="Ilmu Komputer '22" filename={kopiadem} />
        </div>
        <div>
          <MemberCard name="Evandra Afif" subtitle="Fisika '23" filename={akizuki} />
        </div>
        <div>
          <MemberCard name="Imanur Islahunnufus" subtitle="Psikologi '24" filename={iman} />
        </div>

        <div className="  flex flex-col items-end h-full">
          <Button title="Anggota" shape="w-[12rem] border-1" />

          <div className="flex-1"></div>

          <div className="text-end text-6xl mb-[1rem] mt-[]">
            <p>Belajar</p>
            <p>bersama</p>
            <p>nihongoers</p>
          </div>

          <Button
            title="see all members"
            shape="w-[16rem] hover:cursor-pointer "
            color="bg-blue-500 "
            text="text-white"
            onClick={handleSeeMembers}
          />
        </div>
      </div>
    </div>
  );
};

export default Members;

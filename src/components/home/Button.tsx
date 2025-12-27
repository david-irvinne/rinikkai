import React from 'react';

// Definisi tipe untuk props
interface ButtonProps {
  title?: string;
  color?: string;
  shape?: string;
  text?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const Button:React.FC<ButtonProps> = ({title = "title", color = "bg-slate-100", shape = "w-[10rem]", text="text-center", onClick}) => {

  return (
      <button className={`rounded-[12px] ${shape}   py-[0.5rem] px-[1rem]  ${color}`} onClick={onClick}> 
        <div className={`${text}`}> 
          {title}
        </div>
      </button>

)}
export default Button;

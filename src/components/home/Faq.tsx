import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "./Button.tsx"

type FaqItemProps = {
  question: string;
  answer: string;
};

function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg p-3 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between w-full text-left"
        aria-expanded={open}
      >
        <span className="font-medium">{question}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>


      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[5rem] mt-[1rem]" : "max-h-0"}`}>
        <p className="text-gray-600 text-sm">{answer}</p>
      </div>

    </div>
  );
}

export default function FaqSection() {
  const faqs = [
    { question: "who is the cutest shark of all time?", answer: "gawr gura" },
    { question: "kata-kata hari ini dong pai", answer: "人の苦労は蜜の味" },
    { question: "gawr?", answer: "goober" },
    { question: "senpai, apa arti 「あなたの顔はちんこみたい」?", answer: "artinya \"have a nice day\" " },
  ];

  return (
    <section className="py-[1rem] px-[1.2rem] border-1  bg-gray-50 rounded-xl">
      <Button title="FAQ" color=" bg-gradient-to-r from-[#4E87CE] to-[#F1F2F3]" />
      <div className="mt-[1rem] grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {faqs.map((faq, idx) => (
          <FaqItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

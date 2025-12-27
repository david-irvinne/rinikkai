import Button from "./Button.tsx"
const About = () => {

  return (
  <>
      <div className="border-1 rounded-[12px] py-[1rem] px-[1.2rem] bg-gray-50"> 

        <Button title="About Us" color="bg-gradient-to-r from-[#4E87CE] to-[#F1F2F3]" />

        <div className="md:px-[3rem] md:py[1.5rem] px-[1rem] py-[1rem]"> 
          Selamat datang di rinikkai (りにっかい、理学部日本語勉強会) , komunitas belajar bahasa Jepang yang mendukungmu untuk berkembang bersama! Di sini kamu bisa menemukan teman belajar, berdiskusi seputar bahasa dan budaya Jepang, berbagi materi menarik, serta mempersiapkan diri untuk JLPT. Selain itu, kami juga menyediakan ruang seru untuk membahas J-Pop culture seperti anime, manga, film, dan musik.
        </div>
      </div>
  </>
  
)}
export default About;

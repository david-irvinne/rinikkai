const Footer = () => {
  return (
    <footer className="h-[28rem] border-1 rounded-[12px] py-[1rem] px-[1.2rem] bg-gradient-to-r from-[#4E87CE] to-[#F1F2F3]">
      <div className="grid grid-cols-2 h-full items-center">
        {/* Bagian kiri */}
        <div className=" flex flex-col justify-center items-center">
          <div className="text-left">

            <h1 className="text-white font-bold text-5xl">rinikkai</h1>
            <p className="text-white/90 text-xl">理学部日本語勉強会</p>
          </div>
        </div>

        {/* Bagian kanan */}
        <div className="flex flex-col space-y-[8rem] text-gray-800 text-right justify-center">
          <a href="https://www.instagram.com/rinikkai_ugm/" className="hover:text-gray-900 text-left">Alamat</a>
          <a href="https://www.instagram.com/rinikkai_ugm/" className="hover:text-gray-900 text-left">Sosial Media</a>
          <a href="https://www.instagram.com/rinikkai_ugm/" className="hover:text-gray-900 text-left">Kontak</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

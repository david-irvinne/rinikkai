import Banner from "../components/home/Banner.tsx";
import About from "../components/home/About.tsx";
import Events from "../components/home/Events.tsx";
import FaqSection from "../components/home/Faq.tsx";
import Members from "../components/home/Members.tsx";

function Home() {
  return (
    <>
      <div className="flex flex-col gap-y-[2rem] pt-[1.8rem]">
        <Banner />
        <About />
        <Events />
        <Members />
        <FaqSection />
      </div>
    </>
  );
}

export default Home;

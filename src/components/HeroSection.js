import "../style/style.css";
import heroImage from "../image/netflix.png";

const HeroSection = () => {
  return (
    <section className="banner">
      <div className="relative">
        <img src={heroImage} alt="" className="min-h-screen object-cover w-full bg-cover bg-center" />
        <div className="bg-gradient-to-t opacity-70 from-black absolute inset-0"></div>
        <div className="bg-gradient-to-b opacity-70 from-black absolute inset-0"></div>
      </div>
      <div className="banner-contents absolute inset-0 text-white grid text-center items-center justify-center">
        <div className="max-w-4xl">
          <h1 className="banner-title text-4xl lg:text-7xl font-semibold pb-2">Katalog Film, Acara TV Terbaru dan Terlengkap</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

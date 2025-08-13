import { heroBgImg } from "./../../assets/index.js";

const Home = () => {
  return (
    <div
      className="min-h-screen bg-black/55 bg-blend-color bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBgImg})` }}
    >
      <div className="py-10 px-4 min-h-screen flex flex-col justify-center items-center gap-10">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center text-yellow-500 font-semibold leading-12">
          Empowering Teachers, <br /> Enhancing Learning
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl text-center text-white/90 leading-10">
          Streamline your classroom tasks, track student progress, <br /> and
          access powerful teaching tools
        </h3>
      </div>
    </div>
  );
};

export default Home;

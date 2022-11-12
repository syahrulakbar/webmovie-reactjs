import { MutatingDots } from "react-loader-spinner";
const Spinner = () => {
  return (
    <div className="h-screen bg-gradient-to-t from-slate-900 to-black">
      <div className="container mx-auto">
        <section className="movie justify-center text-white">
          <div className="movie-list flex flex-wrap items-baseline justify-center">
            <div className=" h-screen bg-gradient-to-t from-slate-900 to-black flex items-center justify-center">
              <MutatingDots height="100" width="100" color="#71717a" secondaryColor="#71717a" radius="12.5" ariaLabel="mutating-dots-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Spinner;

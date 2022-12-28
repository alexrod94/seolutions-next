import Header from "./Header";
import MobileHeader from "./MobileHeader";

export default function Hero() {
  return (
    <section className="relative bg-indigo-500 background-animate overflow-hidden">
      <section>
        <Header />
        <MobileHeader />
      </section>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center pt-8 md:pt-32">
          <div className="w-auto">
            <h1 className="mb-4 font-heading text-center text-white text-6xl md:text-7xl font-bold">
              Free guide: "Unlimited leads for your SEO agency"
            </h1>
            <p className="mb-9 font-medium text-lg text-center text-white mt-8">
              The secret to filling your calendar with calls with interested
              leads, while spending no money on ads or wasting time with cold
              calling or social media
            </p>
            <div className="flex flex-wrap justify-center items-center mb-7 -m-1.5">
              <div className="w-full lg:w-72 p-1.5">
                <input
                  className="text-gray-500 px-5 py-4 w-full placeholder-gray-500 outline-none focus:ring-4 focus:ring-indigo-400 rounded"
                  type="text"
                  placeholder="Enter email to get started"
                />
              </div>
              <div className="w-full lg:w-auto p-1.5">
                <button className="group relative font-heading px-6 py-5 w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md">
                  <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-indigo-400"></div>
                  <p className="relative z-10">Get the guide</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <img
          className="mx-auto w-full md:w-3/5"
          src="/gradia-assets/images/hero/lead-results-transformed.png"
          alt=""
        />
      </div>
    </section>
  );
}

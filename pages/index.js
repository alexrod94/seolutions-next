import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "./home-components/Hero";
import Features from "./home-components/Features";
import Faq from "./home-components/Faq";

export default function index() {
  return (
    <>
      <Head>
        <title>SEOLution | SEO Lead Generation</title>
        <meta
          name="description"
          content="We offer Lead Generation services for SEO Agencies. Get more calls or
          your money back!"
        />
      </Head>
      <Hero />
      <Features />

      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <p className="mb-5 font-heading text-xs text-gray-600 font-semibold text-center uppercase tracking-px">
            The features that made us special
          </p>
          <h2 className="mb-20 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
            Track every single moment of your customers
          </h2>
          <div className="flex flex-wrap -m-7">
            <div className="w-full md:w-1/3 p-7">
              <div className="h-full p-0.5 bg-cyan-300 rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
                <div className="h-full p-8 bg-white rounded-lg">
                  <img
                    className="relative -left-2 mb-12"
                    src="gradia-assets/images/features/chart.png"
                    alt=""
                  />
                  <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                    Get live reports
                  </h3>
                  <p className="text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-7">
              <div className="h-full p-0.5 bg-cyan-400 rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
                <div className="h-full p-8 bg-white rounded-lg">
                  <img
                    className="relative -left-2 mb-12"
                    src="gradia-assets/images/features/messages.png"
                    alt=""
                  />
                  <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                    Chat with customers
                  </h3>
                  <p className="text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-7">
              <div className="h-full p-0.5 bg-cyan-400 rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
                <div className="h-full p-8 bg-white rounded-lg">
                  <img
                    className="relative -left-2 mb-12"
                    src="gradia-assets/images/features/warning.png"
                    alt=""
                  />
                  <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                    Quality speed
                  </h3>
                  <p className="text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-28 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="mb-5 font-heading font-semibold text-xs text-gray-400 text-center uppercase tracking-px">
            The features that made us special
          </p>
          <h2 className="mb-20 font-heading font-semibold text-6xl sm:text-7xl text-gray-900 text-center">
            Here’s how it works
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 9.0712C26.527 7.34116 28.7611 6.25 31.25 6.25C35.8524 6.25 39.5833 9.98096 39.5833 14.5833C39.5833 19.1857 35.8524 22.9167 31.25 22.9167C28.7611 22.9167 26.527 21.8255 25 20.0955M31.25 43.75H6.25V41.6667C6.25 34.7631 11.8464 29.1667 18.75 29.1667C25.6536 29.1667 31.25 34.7631 31.25 41.6667V43.75ZM31.25 43.75H43.75V41.6667C43.75 34.7631 38.1536 29.1667 31.25 29.1667C28.9732 29.1667 26.8386 29.7754 25 30.8389M27.0833 14.5833C27.0833 19.1857 23.3524 22.9167 18.75 22.9167C14.1476 22.9167 10.4167 19.1857 10.4167 14.5833C10.4167 9.98096 14.1476 6.25 18.75 6.25C23.3524 6.25 27.0833 9.98096 27.0833 14.5833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 12.5C8.33301 10.1988 10.1985 8.33334 12.4997 8.33334H16.6663C18.9675 8.33334 20.833 10.1988 20.833 12.5V16.6667C20.833 18.9679 18.9675 20.8333 16.6663 20.8333H12.4997C10.1985 20.8333 8.33301 18.9679 8.33301 16.6667V12.5Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M29.1663 12.5C29.1663 10.1988 31.0318 8.33334 33.333 8.33334H37.4997C39.8009 8.33334 41.6663 10.1988 41.6663 12.5V16.6667C41.6663 18.9679 39.8009 20.8333 37.4997 20.8333H33.333C31.0318 20.8333 29.1663 18.9679 29.1663 16.6667V12.5Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.33301 33.3333C8.33301 31.0322 10.1985 29.1667 12.4997 29.1667H16.6663C18.9675 29.1667 20.833 31.0322 20.833 33.3333V37.5C20.833 39.8012 18.9675 41.6667 16.6663 41.6667H12.4997C10.1985 41.6667 8.33301 39.8012 8.33301 37.5V33.3333Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M29.1663 33.3333C29.1663 31.0322 31.0318 29.1667 33.333 29.1667H37.4997C39.8009 29.1667 41.6663 31.0322 41.6663 33.3333V37.5C41.6663 39.8012 39.8009 41.6667 37.4997 41.6667H33.333C31.0318 41.6667 29.1663 39.8012 29.1663 37.5V33.3333Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 10.4167C8.33301 9.26608 9.26575 8.33334 10.4163 8.33334H39.583C40.7336 8.33334 41.6663 9.26608 41.6663 10.4167V14.5833C41.6663 15.7339 40.7336 16.6667 39.583 16.6667H10.4163C9.26575 16.6667 8.33301 15.7339 8.33301 14.5833V10.4167Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.33301 27.0833C8.33301 25.9327 9.26575 25 10.4163 25H22.9163C24.0669 25 24.9997 25.9327 24.9997 27.0833V39.5833C24.9997 40.7339 24.0669 41.6667 22.9163 41.6667H10.4163C9.26575 41.6667 8.33301 40.7339 8.33301 39.5833V27.0833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M33.333 27.0833C33.333 25.9327 34.2657 25 35.4163 25H39.583C40.7336 25 41.6663 25.9327 41.6663 27.0833V39.5833C41.6663 40.7339 40.7336 41.6667 39.583 41.6667H35.4163C34.2657 41.6667 33.333 40.7339 33.333 39.5833V27.0833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <section className="relative py-36 bg-gray-100 overflow-hidden">
        <img
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          src="gradia-assets/elements/testimonials/radial2.svg"
          alt=""
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-wrap -m-6">
            <div className="w-full md:w-1/2 p-6">
              <h2 className="mb-16 md:max-w-md md:ml-auto font-heading font-semibold text-5xl sm:text-6xl text-gray-900">
                5,920+ people think Gradia is the best
              </h2>
              <div className="p-12 bg-white rounded-10">
                <h3 className="mb-5 font-heading font-medium text-xl text-black">
                  “Easy to use”
                </h3>
                <p className="mb-7 text-lg text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.”
                </p>
                <div className="flex flex-wrap -m-1.5">
                  <div className="w-auto p-1.5">
                    <img
                      src="gradia-assets/images/testimonials/avatar7.png"
                      alt=""
                    />
                  </div>
                  <div className="w-auto p-1.5">
                    <h3 className="font-heading font-semibold text-gray-900 text-lg">
                      Marvin McKinney
                    </h3>
                    <p className="text-sm text-gray-600">
                      Co-founder at Parkon
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="flex flex-wrap justify-center -m-6">
                <div className="w-full lg:w-auto p-6">
                  <div className="p-12 bg-white rounded-10">
                    <h3 className="mb-5 font-heading font-medium text-xl text-black">
                      “Very fast video output”
                    </h3>
                    <p className="mb-7 text-lg text-black">
                      “Amet minim mollit non deserunt ullam co est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat.”
                    </p>
                    <div className="flex flex-wrap -m-1.5">
                      <div className="w-auto p-1.5">
                        <img
                          src="gradia-assets/images/testimonials/avatar8.png"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h3 className="font-heading font-semibold text-gray-900 text-lg">
                          Kathryn Murphy
                        </h3>
                        <p className="text-sm text-gray-600">
                          Project Manager at Marron.ai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-auto p-6">
                  <div className="p-12 bg-white rounded-10">
                    <h3 className="mb-5 font-heading font-medium text-xl text-black">
                      “Better than anything”
                    </h3>
                    <p className="mb-7 text-lg text-black">
                      “Amet minim mollit non deserunt ullam co est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat.”
                    </p>
                    <div className="flex flex-wrap -m-1.5">
                      <div className="w-auto p-1.5">
                        <img
                          src="gradia-assets/images/testimonials/avatar8.png"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h3 className="font-heading font-semibold text-gray-900 text-lg">
                          Devon Lane
                        </h3>
                        <p className="text-sm text-gray-600">
                          Digital Marketer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10 flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h2 className="mb-5 font-heading font-bold text-6xl sm:text-7xl text-white">
                Grow with latest job updates
              </h2>
              <p className="mb-16 text-gray-300 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                justo, sit iaculis ultrices vitae pulvinar tellus. Volutpat, ut
                lacus tristique ligula.
              </p>
              <div className="flex flex-wrap -m-1.5 mb-8 md:max-w-xl">
                <div className="w-full md:flex-1 lg:w-auto p-1.5">
                  <div className="p-px bg-cyan-400 focus-within:ring-4 focus-within:ring-indigo-500 rounded-full">
                    <input
                      className="w-full px-6 py-4 placeholder-gray-300 text-base text-gray-300 bg-gray-900 outline-none rounded-full"
                      type="text"
                      placeholder="Enter email to get started"
                    />
                  </div>
                </div>
                <div className="w-full md:w-auto p-1.5">
                  <button className="group relative font-heading py-4 px-12 block w-full md:w-auto text-lg text-gray-900 font-semibold bg-white hover:bg-gray-50 overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-cyan-400"></div>
                    <p className="relative z-10">Join Now</p>
                  </button>
                </div>
              </div>
              <p className="md:max-w-xs md:pr-16 text-sm text-gray-400">
                <span className="text-white">12,000+ People</span>
                <span>are already using Gradia for their business</span>
              </p>
            </div>
          </div>
          <img
            className="absolute left-0 bottom-0 transform"
            src="gradia-assets/elements/cta/radial4.png"
            alt=""
          />
          <img
            className="absolute right-0 top-0 left-50 transform"
            src="gradia-assets/elements/cta/radial5.png"
            alt=""
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default function Pricing() {
  return (
    <section
      className="relative pt-24 pb-36 bg-black overflow-hidden"
      id="services"
    >
      <img
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2"
        src="gradia-assets/elements/pricing/radial.svg"
        alt=""
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="mb-20 max-w-xl mx-auto">
          <h2 className="mb-5 font-heading font-bold text-6xl sm:text-7xl text-white text-center">
            Choose your own adventure
          </h2>
          <p className="text-gray-400 text-xl text-center">
            Here at SEOLeadsFinder we offer three roads to an inbox full of
            eager leads:
          </p>
        </div>
        <div className="flex flex-wrap -m-7">
          <div className="w-full md:w-1/3 p-7">
            <div className="h-full p-8 border border-gray-800 rounded-10">
              <div className="flex flex-wrap justify-between border-b border-gray-800 pb-7 mb-7">
                <div className="w-full">
                  <h3 className="font-heading font-bold text-2xl text-white text-center">
                    Do It Yourself
                  </h3>
                </div>
                <div className="w-full">
                  <h3 className="mb-0.5 font-heading font-bold text-center text-2xl text-white">
                    $197/m
                  </h3>
                  <p className="text-base text-center mt-5 text-white">
                    Professional step by step training on:
                  </p>
                </div>
              </div>
              <ul className="mb-8">
                <li className="flex items-center font-heading mb-4 font-medium text-base text-white">
                  <img
                    className="mr-2.5"
                    src="gradia-assets/elements/pricing/checkbox.svg"
                    alt=""
                  />
                  <p>How to create & warm up new email accounts</p>
                </li>
                <li className="flex items-center font-heading mb-4 font-medium text-base text-white">
                  <img
                    className="mr-2.5"
                    src="gradia-assets/elements/pricing/checkbox.svg"
                    alt=""
                  />
                  <p>Writing effective copy</p>
                </li>
                <li className="flex items-center font-heading mb-4 font-medium text-base text-white">
                  <img
                    className="mr-2.5"
                    src="gradia-assets/elements/pricing/checkbox.svg"
                    alt=""
                  />
                  <p>Finding new leads to target</p>
                </li>
                <li className="flex items-center font-heading font-medium text-base text-white">
                  <img
                    className="mr-2.5"
                    src="gradia-assets/elements/pricing/checkbox.svg"
                    alt=""
                  />
                  <p>How to follow up and close interested leads</p>
                </li>
              </ul>
              <p className="text-base text-center font-bold mb-5 text-white">
                Plus, you'll have access to unlimited email support.
              </p>
              <div className="flex justify-center">
                <button className="group relative mb-3 w-full md:w-auto font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                  <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-black transition ease-in-out duration-500"></div>
                  <div className="px-9 py-4 bg-white hover:bg-gray-100 overflow-hidden rounded-md">
                    <p className="relative z-10 group-hover:text-white">
                      Join now
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-7">
            <div className="h-full p-0.5 bg-gradient-cyan2 border border-gray-800 rounded-10">
              <div className="p-8 bg-white rounded-10">
                <div className="flex flex-wrap justify-between border-b border-gray-200 pb-7 mb-7">
                  <div className="w-full">
                    <h3 className="font-heading font-bold text-2xl text-center text-gray-900">
                      Managed Service
                    </h3>
                  </div>
                  <div className="w-full text-center">
                    <h3 className="mb-0.5 font-heading font-bold text-2xl text-gray-900">
                      $597/m
                    </h3>
                    <p className="text-base mt-5 text-black text-center">
                      You'll receive leads directly on your inbox
                    </p>
                  </div>
                </div>
                <ul className="mb-8">
                  <li className="flex items-center font-heading mb-4 font-medium text-base text-gray-900">
                    <img
                      className="mr-2.5"
                      src="gradia-assets/elements/pricing/checkbox.svg"
                      alt=""
                    />
                    <p>Set up of all the needed tools & accounts</p>
                  </li>
                  <li className="flex items-center font-heading mb-4 font-medium text-base text-gray-900">
                    <img
                      className="mr-2.5"
                      src="gradia-assets/elements/pricing/checkbox.svg"
                      alt=""
                    />
                    <p>Campaign management and lead finding</p>
                  </li>
                  <li className="flex items-center font-heading mb-4 font-medium text-base text-gray-900">
                    <img
                      className="mr-2.5"
                      src="gradia-assets/elements/pricing/checkbox.svg"
                      alt=""
                    />
                    <p>Follow up with all interested prospects</p>
                  </li>

                  <li className="flex items-center font-heading font-medium text-base text-gray-900">
                    <img
                      className="mr-2.5"
                      src="gradia-assets/elements/pricing/checkbox.svg"
                      alt=""
                    />
                    <p>Booked calls through your own calendar system</p>
                  </li>
                </ul>
                <p className="text-base text-center font-semibold mb-5 text-black">
                  Perfect for most SEO Agencies
                </p>
                <div className="flex justify-center">
                  <button className="group relative mb-3 w-full md:w-auto font-heading font-semibold text-xs text-white uppercase tracking-px overflow-hidden rounded-md">
                    <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500"></div>
                    <div className="px-9 py-4 bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md">
                      <p className="relative z-10 group-hover:text-gray-800">
                        Join now
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-7">
            <div className="h-full p-8 border border-gray-800 rounded-10">
              <div className="flex flex-wrap justify-between border-b border-gray-800 pb-7 mb-7">
                <div className="w-full">
                  <h3 className="font-heading font-bold text-2xl text-white text-center">
                    Fully Automated
                  </h3>
                </div>
                <div className="w-full">
                  <h3 className="mb-0.5 font-heading font-bold text-center text-2xl text-white">
                    $997/m
                  </h3>
                  <p className="text-base text-center mt-5 text-white">
                    We take care of your sales process
                  </p>
                </div>
              </div>
              <ul className="mb-8">
                <li className="flex items-center font-heading mb-4 font-medium text-base text-white">
                  <img
                    className="mr-2.5"
                    src="gradia-assets/elements/pricing/checkbox.svg"
                    alt=""
                  />
                  <p>Our sales team will close new projects for you</p>
                </li>
                <li className="flex items-center font-heading mb-4 font-medium text-base text-white">
                  <img
                    className="mr-2.5"
                    src="gradia-assets/elements/pricing/checkbox.svg"
                    alt=""
                  />
                  <p>We'll manage the onboarding process</p>
                </li>
                <li className="flex items-center font-heading mb-4 font-medium text-base text-white">
                  <img
                    className="mr-2.5"
                    src="gradia-assets/elements/pricing/checkbox.svg"
                    alt=""
                  />
                  <p>Monthly reports with results</p>
                </li>
                <li className="flex items-center font-heading font-medium text-base text-white">
                  <img
                    className="mr-2.5"
                    src="gradia-assets/elements/pricing/checkbox.svg"
                    alt=""
                  />
                  <p>Focus on your services</p>
                </li>
              </ul>
              <p className="text-base text-center font-bold mb-5 text-white">
                Grow your agency in the fastest possible way
              </p>
              <div className="flex justify-center">
                <button className="group relative mb-3 w-full md:w-auto font-heading font-semibold text-xs text-gray-900 uppercase tracking-px overflow-hidden rounded-md">
                  <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-black transition ease-in-out duration-500"></div>
                  <div className="px-9 py-4 bg-white hover:bg-gray-100 overflow-hidden rounded-md">
                    <p className="relative z-10 group-hover:text-white">
                      Join now
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

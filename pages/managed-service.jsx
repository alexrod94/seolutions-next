export default function ManagedService() {
  return (
    <>
      {/* Header */}
      <section className="bg-indigo-500">
        <div className="container mx-auto px-4 ">
          <div className="flex flex-wrap items-center -m-6 py-16">
            <div className="w-full p-6 lg:w-2/3">
              <div className="lg:max-w-4xl">
                <h1 className="mb-6 font-heading text-7xl md:text-10xl xl:text-12xl text-white font-bold text-center lg:text-left lg:leading-tight">
                  Get 10+ Calls per Week with Potential Clients
                </h1>
                <p className="mb-9 text-white font-semibold text-2xl text-center lg:text-left">
                  For SEO Agency owners who are tired of seeing CPC cost rise
                  and struggle to fill their pipeline
                </p>
              </div>
            </div>
            <div className="w-full p-6 lg:w-1/3">
              <img
                className="block mx-auto"
                src="gradia-assets/images/landing/calendar.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      {/* Intro */}
      <section className="mx-auto px-4 py-24 flex flex-col lg:flex-row lg:items-center">
        <div id="left-col" className="lg:w-5/6 lg:pr-2">
          <p className="mb-4 font-medium text-xl">Dear friend,</p>
          <p className="mb-4 font-medium text-xl">
            Are you tired of struggling to generate leads for your SEO agency
            through traditional means? Do you wish there was a way to reach
            potential clients without the hassle of cold calling or the expense
            of advertising?
          </p>

          <p className="mb-4 font-medium text-xl">
            At our agency, we specialize in generating leads for SEO agencies
            through targeted cold email campaigns. With our expertise and
            resources, we can help you tap into the vast potential of the
            internet to grow your business.
          </p>

          <p className="mb-4 font-medium text-xl">
            Don't waste any more time and effort on ineffective lead generation
            strategies. Let us handle the hard work for you, so you can focus on
            what you do best - delivering top-notch SEO services to your
            clients.
          </p>

          <p className="font-medium text-xl">
            Imagine having a consistent flow of qualified leads coming in,
            without the stress of trying to generate them yourself. With our
            lead generation services, this can be a reality for your business.
          </p>
        </div>
        <div id="right-col" className="lg:w-1/6">
          <img
            className="block mx-auto"
            src="gradia-assets/images/landing/hero.jpeg"
            alt=""
          />
        </div>
      </section>
      {/* Objection */}
      <section className="bg-indigo-500">
        <div className="px-4 text-white font-semibold text-xl py-12">
          <p className="mb-4">I know what you might be thinking…</p>
          <p className="mb-4">
            "Yes, a consistent flow of qualified leads would be great, but I
            don't know where to start!"
          </p>
          <p className="mb-4">
            No problem. We'll help you every step of the way. With our expertise
            and resources, we have all it takes to get your SEO agency to the
            level you desire.
          </p>
          <p className="mb-4">
            We'll take care of all the process of generating leads through
            targeted cold email campaigns, so you can focus on what you do best
            - providing top-notch SEO services to your clients.
          </p>
          <p>
            Let us take the burden of lead generation off your shoulders, so you
            can have a steady stream of new business coming in with as little
            work as possible.
          </p>
        </div>
        <div className="flex flex-row justify-center pb-12">
          <button className="group relative font-heading px-6 py-5 w-full lg:w-1/4 uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md">
            <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-indigo-400"></div>
            <p className="relative z-10">Yes, I want this!</p>
          </button>
        </div>
      </section>
    </>
  );
}

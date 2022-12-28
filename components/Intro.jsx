export default function Intro() {
  return (
    <section className="relative py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 w-full md:w-4/5">
        <div className="flex flex-wrap -m-6 items-center">
          <div className="w-full lg:w-1/2 p-6">
            <div className="lg:max-w-lg">
              <h2 className="mb-6 font-heading text-center md:text-left font-bold text-4xl text-gray-900">
                You're wasting time & money trying to get clients the
                traditional way
              </h2>
              <p className="mb-5 text-base text-gray-600">
                It can be incredibly difficult and time-consuming for SEO
                agencies to acquire new clients through more traditional methods
                like advertising, blogging, or social media marketing.
              </p>
              <p className="mb-20 text-base text-gray-600">
                This is where we come in; our lead generation agency helps SEO
                agencies get clients through cold emails that are tailor-made
                for each specific customer segment they are targeting. By
                utilizing cutting-edge strategies and techniques backed by data
                from years of experience in this field, we guarantee successful
                client acquisition campaigns that will generate results quickly
                and efficiently – all without breaking the bank!
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <div className="bg-gradient-orange mx-auto max-w-lg h-96 rounded-3xl">
              <img
                className="relative top-10 mx-auto transform hover:-translate-y-16 transition ease-in-out duration-500"
                src="gradia-assets/images/intro/1.png"
                alt=""
              />
            </div>
          </div>
          {/* Bullet points */}
          <div className="w-full flex flex-col items-center">
            <ul>
              <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p>Stop paying dozens of dollars on advertising</p>
              </li>
              <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p>Reach your ideal SEO customers directly on your inbox</p>
              </li>
              <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p>
                  Dozens of booked calls every week, in an automated and
                  predictable way!
                </p>
              </li>
            </ul>
          </div>
          {/* Second Section */}
          <div className="flex items-center w-full">
            <div className="w-full lg:w-1/2 p-6 items-center">
              <div className="bg-gradient-orange mx-auto max-w-lg h-96 rounded-3xl">
                <img
                  className="relative top-10 mx-auto transform hover:-translate-y-16 transition ease-in-out duration-500"
                  src="gradia-assets/images/intro/04.png"
                  alt=""
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-6">
              <div className="lg:max-w-lg">
                <h2 className="mb-6 font-heading text-center md:text-left font-bold text-4xl text-gray-900">
                  Wouldn't it be nice if leads flooded your inbox day after day?
                </h2>
                <p className="mb-5 text-base text-gray-600">
                  Unfortunately, learning how to properly do email marketing can
                  be daunting and difficult. You may have some time to figure
                  out the ins and outs of cold emails, but that means taking
                  away hours from other tasks such as working on systems for
                  your services or taking care of your business.
                </p>
                <p className="mb-20 text-base text-gray-600">
                  That's why we are here to lend a helping hand. Our experienced
                  team has spent over 7 years immersed in online marketing, so
                  you can reap the benefits of our expertise while growing your
                  online presence and income. If you want to scale your SEO
                  agency, we're here for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

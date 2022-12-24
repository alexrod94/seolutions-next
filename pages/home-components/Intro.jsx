export default function Intro() {
  return (
    <section className="relative py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 w-full md:w-4/5">
        <div className="flex flex-wrap -m-6">
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
              <ul>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>No hidden fees</p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>Start with a free account</p>
                </li>
                <li className="mb-4 flex items-center font-heading font-semibold text-lg text-gray-900">
                  <img
                    className="mr-2"
                    src="gradia-assets/elements/hero/check.svg"
                    alt=""
                  />
                  <p>Edit online, no software needed</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-6">
            <div className="bg-gradient-orange mx-auto max-w-lg h-96 rounded-3xl">
              <img
                className="relative top-10 mx-auto transform hover:-translate-y-16 transition ease-in-out duration-500"
                src="gradia-assets/images/features/dropdown.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

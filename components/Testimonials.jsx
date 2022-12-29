export default function Testimonials() {
  return (
    <section className="relative py-36 overflow-hidden bg-black">
      <img
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
        src="gradia-assets/elements/testimonials/radial2.svg"
        alt=""
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap -m-6">
          <div className="w-full md:w-1/2 p-6">
            <h2 className="mb-16 md:max-w-md md:ml-auto text-center md:text-left font-heading font-semibold text-5xl sm:text-6xl text-white">
              See what our customers have to say
            </h2>
            <div className="p-12 bg-white rounded-10">
              <h3 className="mb-5 font-heading font-medium text-xl text-black">
                "Works wonders"
              </h3>
              <p className="mb-7 text-lg text-black">
                I've been working with SEOLeadsFinder for the past six months
                and I'm blown away by the results. It's been a game-changer to
                have a team handle the email outreach on my behalf. The customer
                service is top-notch and I've seen a significant increase in new
                clients since starting to use the service. I would highly
                recommend their done-for-you cold email service to any SEO
                agency looking to grow their business.
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
                    Co-founder at Online Zebra
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
                    "Game changing results"
                  </h3>
                  <p className="mb-7 text-lg text-black">
                    As a small business owner, I was hesitant to invest in a
                    done-for-you cold email service. But after trying it out,
                    I'm so glad I did! The team has taken care of everything,
                    from crafting personalized emails to tracking responses, and
                    it's saved me so much time. I've already seen a return on my
                    investment and I can't wait to see what the future holds for
                    my business with this service.
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
                        Project Manager at SIDN
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-auto p-6">
                <div className="p-12 bg-white rounded-10">
                  <h3 className="mb-5 font-heading font-medium text-xl text-black">
                    "Time saving solution"
                  </h3>
                  <p className="mb-7 text-lg text-black">
                    I've tried a few different cold email services in the past
                    and none of them have come close to the success I've had
                    with this done-for-you service. The team does an amazing job
                    of crafting personalized emails and getting them sent out on
                    my behalf. Plus, the customer support team has been amazing
                    at answering all of my questions and helping me get the most
                    out of the service. I highly recommend this done-for-you
                    cold email service to any business looking to expand their
                    client base.
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
                      <p className="text-sm text-gray-600">Digital Marketer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

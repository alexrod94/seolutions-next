export default function CTA() {
  return (
    <section className="py-24 overflow-hidden bg-indigo-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -m-6">
          <div className="w-full p-6">
            <h2 className="mb-6 font-heading font-bold text-4xl sm:text-5xl text-white text-center">
              10 new SEO leads a month, or you don't pay
            </h2>
            <p className="mb-9 text-xl text-white text-center">
              We guarantee you'll get AT LEAST 10 bookings per month, or we'll
              continue working with you for free until you do
            </p>
            <div className="flex flex-wrap -m-2 justify-center">
              <div className="w-full md:w-auto p-2">
                <button className="px-9 py-3.5 font-heading font-bold w-full lg:w-auto text-base text-white bg-blue-600 hover:bg-blue-700 rounded-md">
                  Book A Call
                </button>
              </div>
              <div className="w-full md:w-auto p-2">
                <button className="px-9 py-3.5 font-heading font-bold w-full lg:w-auto text-base text-gray-900 bg-white hover:bg-gray-50 border border-gray-300 rounded-md">
                  Learn More
                </button>
              </div>
            </div>
            <p className="mt-9 text-sm text-white text-center">
              Valid only for our "Manged Service" & "Fully Automated" plans
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

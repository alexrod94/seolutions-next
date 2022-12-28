export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative py-5 overflow-hidden">
      <img
        className="absolute bottom-0 left-0"
        src="gradia-assets/elements/footers/radial.svg"
        alt=""
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between -m-6">
          <div className="w-full md:w-1/3 p-6">
            <div className="flex flex-col justify-center items-center h-full md:items-start">
              <img
                className="w-[150px]"
                src="gradia-assets/logos/logo.png"
                alt=""
              />
            </div>
          </div>
          <div className="h-full w-full md:w-1/3 p-6">
            <p className="font-heading font-medium text-base text-center">
              We help SEO Agencies get qualified leads
            </p>
          </div>
          <div className="h-full w-full md:w-1/3 p-6">
            <p className="text-gray-600 text-sm text-center md:text-right">
              © Copyright {currentYear}. All Rights Reserved by SEOLeadFinders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

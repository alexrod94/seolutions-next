import Testimonials from "../components/Testimonials";
import Link from "next/link";
export default function ManagedService() {
  return (
    <>
      {/* Header */}
      <section className="bg-indigo-500 box-border">
        <div className="mx-auto px-4 ">
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
            <div className="p-6 lg:w-1/4 box-border">
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
      <div className="flex flex-row justify-center pb-12">
        <Link
          className="group relative font-heading px-6 py-5 w-full lg:w-1/4 uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md flex justify-center"
          href="https://tidycal.com/alexrod94/seo-lead-generation"
        >
          <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-indigo-400"></div>
          <p className="relative z-10">Yes, I want this!</p>
        </Link>
      </div>
      <Testimonials />
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
          <Link
            className="group relative font-heading px-6 py-5 w-full lg:w-1/4 uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md flex justify-center"
            href="https://tidycal.com/alexrod94/seo-lead-generation"
          >
            <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-indigo-400"></div>
            <p className="relative z-10">Yes, I want this!</p>
          </Link>
        </div>
      </section>
      {/* Guarantee */}
      <section className="mx-auto px-4 py-12 flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div id="right-col" className="lg:w-2/6">
          <img
            className="block mx-auto lg:w-3/4 lg:float-left"
            src="gradia-assets/images/landing/email.jpg"
            alt=""
          />
        </div>
        <div id="left-col" className="lg:w-4/6">
          <p className="mb-4 font-medium text-xl">
            Within a short time, we will work with you, side-by-side to get your
            lead generation efforts up and running. Once our campaigns are live,
            you'll start seeing an increase in qualified leads and new business.
            And we guarantee it.
          </p>

          <p className="mb-4 font-medium text-xl">
            Over the past 5 years, we have generated leads for countless SEO
            agencies and we know for a fact what works, and it'll work for you,
            even if...
          </p>

          <ul className="mb-4 font-medium text-xl">
            <li className="list-disc">You're new to the SEO industry</li>
            <li className="list-disc">
              You have an established SEO agency but are struggling to generate
              leads
            </li>
            <li className="list-disc">
              You don't have a lot of experience with email marketing and lead
              generation
            </li>
            <li className="list-disc">
              You don't have a lot of time to devote to lead generation efforts
            </li>
            <li className="list-disc">Technology doesn't interest you.</li>
          </ul>

          <p className="font-medium text-xl">
            Let us handle the hard work of lead generation, so you can focus on
            growing your business and delivering top-notch SEO services to your
            clients. Contact us today to learn more.
          </p>
        </div>
      </section>
      <div className="flex flex-row justify-center pb-12">
        <Link
          className="group relative font-heading px-6 py-5 w-full lg:w-1/4 uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md flex justify-center"
          href="https://tidycal.com/alexrod94/seo-lead-generation"
        >
          <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-indigo-400"></div>
          <p className="relative z-10">Yes, I want this!</p>
        </Link>
      </div>
      {/* Features */}
      <section className="bg-indigo-500">
        <div className="px-4 text-white font-semibold text-xl py-12 mx-auto lg:w-5/6">
          <h2 className="text-4xl mb-8 text-center">WHAT YOU WILL GAIN</h2>
          <p className="mb-4">
            With our lead generation service, you will have access to our team
            of experts who will work with you to design and implement targeted
            cold email campaigns to generate leads for your SEO agency.
          </p>
          <p className="mb-4">Features include:</p>
          <ul className="mb-4 font-medium text-xl">
            <li className="list-disc">
              All the technical setup so you don't need to worry about anything
            </li>
            <li className="list-disc">
              Customized emails designed to capture the attention of potential
              clients
            </li>
            <li className="list-disc">
              Targeted list of leads to ensure maximum efficiency of your
              campaigns
            </li>
            <li className="list-disc">
              24/7 personalized support via email from our team of marketers and
              strategists
            </li>
            <li className="list-disc">
              Detailed reports and analytics to track the performance of your
              campaigns
            </li>
            <li className="list-disc">
              Follow up with all interested prospects
            </li>
          </ul>
          <p className="mb-4">
            Pricing for our lead generation service starts at $597 per month,
            with discounts available for longer commitments.
          </p>
          <p className="mb-4">
            You only need to schedule a 30 minute consultation call where we can
            answer any questions you have and discuss how our lead generation
            service can help your SEO agency grow. No strings attached.
          </p>
        </div>
        <div className="flex flex-row justify-center pb-12">
          <Link
            className="group relative font-heading px-6 py-5 w-full lg:w-1/4 uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md flex justify-center"
            href="https://tidycal.com/alexrod94/seo-lead-generation"
          >
            <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-indigo-400"></div>
            <p className="relative z-10">Yes, I want this!</p>
          </Link>
        </div>
      </section>
      {/* Guarantee */}
      <section className="bg-white">
        <div className="px-4 text-black font-semibold text-xl py-12 mx-auto lg:w-5/6">
          <h2 className="text-4xl mb-8 text-center">
            10 APPOINTMENTS/MONTH OR WE DON'T CHARGE YOU
          </h2>
          <p className="mb-4">
            We are so confident in the effectiveness of our campaigns that we
            offer a unique guarantee - if we don't get you at least 10 scheduled
            appointments per month, you don't pay a dime.
          </p>
          <p className="mb-4">
            That's right - you have nothing to lose and everything to gain. Our
            team of experts will work with you to design and implement targeted
            cold email campaigns that will help your business grow. And, if we
            don't deliver on our promise, we'll continue working with you FOR
            FREE until you get your 10 appointments.
          </p>
          <p className="mb-4">
            Think about it. How much is a single client worth for your business?
            And, how many clients could you close if you were having 10 new
            appointments per month, or even per week?
          </p>
          <p className="mb-4">
            Don't waste any more time and money on ineffective lead generation
            methods. Let us handle the hard work for you and watch your business
            thrive. Contact us today to learn more about our guarantee and how
            we can help your business succeed.
          </p>
        </div>
        <div className="flex flex-row justify-center pb-12">
          <Link
            className="group relative font-heading px-6 py-5 w-full lg:w-1/4 uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md flex justify-center"
            href="https://tidycal.com/alexrod94/seo-lead-generation"
          >
            <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-indigo-400"></div>
            <p className="relative z-10">Yes, I want this!</p>
          </Link>
        </div>
      </section>
    </>
  );
}

import Testimonials from "../components/Testimonials";
import Link from "next/link";
import BookACall from "../components/BookACall";
import Objections from "../components/Objections";
export default function ManagedService() {
  return (
    <>
      {/* Header */}
      <section className="bg-indigo-500 box-border">
        <div className="mx-auto">
          <div className="w-full p-6 mx-auto flex flex-col justify-center lg:w-5/6">
            <h1 className="mb-6 font-heading text-7xl md:text-10xl xl:text-12xl text-white font-bold text-center lg:leading-tight">
              "Get New Clients and Save Money on Ads With Our Cold Email
              Service"
            </h1>
            <p className="my-9 text-white font-semibold text-2xl text-center">
              For SEO agency owners who are looking to get more clients without
              spending a fortune on ads, and want a better way to grow.
            </p>
          </div>
        </div>
        {/* <div className="p-6 lg:w-1/4 box-border">
              <img
                className="block mx-auto"
                src="gradia-assets/images/landing/calendar.jpg"
                alt=""
              />
            </div> */}
      </section>
      {/* Intro */}
      <section className="mx-auto px-4 py-12 pb-12 flex flex-col-reverse items-center">
        <div id="left-col" className="lg:w-5/6 lg:pr-2">
          <p className="mb-4 font-medium text-xl">Dear friend,</p>
          <p className="mb-4 font-medium text-xl">
            It used to be very easy to get new clients with ads: pay a hefty fee
            and get guaranteed leads, easy as that.
          </p>

          <p className="mb-4 font-medium text-xl">
            But times have changed and now it's become increasingly difficult to
            get new clients using ads alone. People have become wary of SEO, and
            it's become more and more expensive to get new leads.
          </p>

          <p className="mb-4 font-medium text-xl">
            We've even worked with some clients who were paying up to{" "}
            <span className="font-bold">$20 per click</span>, which is kind of
            insane.
          </p>

          <p className="mb-4 font-medium text-xl">
            Think about it. Why pay exorbitant prices for ads when you you're
            not even sure if they'll be effective? And truth is, ads just aren't
            that reliable anymore.
          </p>
          <p className="mb-4 font-medium text-xl">
            What about Facebook Ads? Sure, they can be effective. But the thing
            is, you have no control over who's seeing your ads and whether or
            not they're converting into leads. Plus, the changes on the
            algorithm can quickly make your campaigns obsolete.
          </p>
          <p className="mb-4 font-medium text-xl">
            So, what can you do? Just cross your fingers and hope for the best?
          </p>
          <p className="font-medium text-xl">
            Luckily, there's an alternative: using cold emails to get new
            clients for your SEO agency.
          </p>
        </div>
        <div id="right-col" className="mb-9 lg:w-2/6">
          <img
            className="block mx-auto"
            src="gradia-assets/images/landing/hero.jpeg"
            alt=""
          />
          <p className="text-center text-md mt-3">
            From the desk of Alex Puerta, Madrid
          </p>
        </div>
      </section>
      <BookACall />

      <Testimonials />
      {/* Our Service */}
      <section className="mx-auto px-4 py-12 pb-6 flex flex-col items-center">
        <div id="left-col" className="lg:w-5/6">
          <h2 className="mb-6 font-heading text-4xl md:text-6xl xl:text-8xl text-black font-bold text-center lg:leading-tight">
            Get the leads you want with our cold email services
          </h2>
          <p className="mb-4 font-medium text-xl">
            Are you an SEO agency owner who's looking to get more clients
            without spending a fortune on ads? If so, then our cold email
            service is the perfect solution for you. With our service, you can
            save money on expensive ads while still getting the leads that you
            need.
          </p>
          <p className="mb-4 font-medium text-xl">
            Here's how you can improve your situation when you use cold email to
            reach out to new clients:
          </p>
          <div className="w-full flex flex-col items-center">
            <ul className="w-80 md:w-full">
              <li className="mb-4 flex items-center font-heading font-semibold text-xl text-black">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p className="break-words">
                  Save time and money by getting leads through email.
                </p>
              </li>
              <li className="mb-4 flex items-center font-heading font-semibold text-xl text-black">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p>Get more clients without relying on ads or word of mouth.</p>
              </li>
              <li className="mb-4 flex items-center font-heading font-semibold text-xl text-black">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p>
                  Quick, easy setup that's affordable for any business size.
                </p>
              </li>
              <li className="mb-4 flex items-center font-heading font-semibold text-xl text-black">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p>
                  Personalized service to help you get the most out of your lead
                  generation.
                </p>
              </li>
              <li className="mb-4 flex items-center font-heading font-semibold text-xl text-black">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p>
                  Send customized messages that are relevant to the prospect's
                  needs and that they'll love to read.
                </p>
              </li>
              <li className="mb-4 flex items-center font-heading font-semibold text-xl text-black">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p>Scale your business with little effort.</p>
              </li>
              <li className="mb-4 flex items-center font-heading font-semibold text-xl text-black mb-12">
                <img
                  className="mr-2"
                  src="gradia-assets/elements/hero/check.svg"
                  alt=""
                />
                <p>
                  Avoid getting flagged as spam thanks to our unique method and
                  software.
                </p>
              </li>
            </ul>
          </div>
          <BookACall />
        </div>
      </section>
      {/* How does it work */}
      <section className="bg-indigo-500">
        <div className="px-4 text-white font-semibold text-xl py-12 flex flex-col w-5/6 justify-center mx-auto">
          <h2 className="mb-6 font-heading text-4xl md:text-6xl xl:text-8xl text-white font-bold text-center lg:leading-tight">
            How does our cold email service work?
          </h2>
          <p className="mb-4">
            Our cold email service offers a comprehensive suite of tools and
            services to help SEO agencies in their outreach efforts. We will set
            up all the necessary setup for accounts and campaigns, as well as
            lead finding to ensure that your outreach is always targeted to the
            right people.
          </p>
          <p className="mb-4">
            Our team can also take care of follow up with any interested
            prospects, allowing you more time to focus on growing your business.
          </p>
          <p className="mb-4">
            In addition, our cold emailing service provides the ability to book
            calls directly through your calendar system, so that you don't have
            to worry about scheduling or miss any important appointments. We
            also use advanced analytics and data tracking to ensure that all
            emails sent are as effective as possible, giving you the most bang
            for your buck out of every campaign.
          </p>
          <p>
            Through our cold email service, you will be able to save time and
            money while continuing to strengthen your relationships with your
            clients and make your SEO agency grow.
          </p>
        </div>
        <BookACall />
      </section>
      <Objections />
      {/* Scarcity */}
      <section className="bg-indigo-500">
        <div className="px-4 text-white font-semibold text-xl py-12 flex flex-col w-5/6 justify-center mx-auto">
          <h2 className="mb-6 font-heading text-4xl md:text-6xl xl:text-8xl text-white font-bold text-center lg:leading-tight">
            Book a call with us - Limited time only
          </h2>
          <p className="mb-4">
            At SEO Leads Finder, we understand that so many SEO agencies are
            wasting money on ads and looking for a better way to get new
            clients, and we want to help you. That’s why we offer cold email
            services, but with one caveat: we work manually with each one of our
            clients, and because of that, we can only onboard a limited number
            of customers at a time.
          </p>
          <p className="mb-4">
            Artisanal work is the name of the game in this case, as it allows us
            to ensure that each and every customer gets their needs addressed
            individually and receives the personalized attention they deserve.
            As a result, this also means that our resources are confined to how
            many people we can reasonably handle at any given moment.
          </p>
          <p className="mb-4">
            By working with a limited number of customers at once, we're able to
            guarantee maximum results for everyone involved. We believe this is
            the best way to make sure all our clients reach their goals without
            having to compromise quality or results.
          </p>
          <p>
            We're currently opening up five slots for our Managed Service, so if
            you're interested in getting started, you should book a call with us
            today. Our team is ready to help you get new business oportunities
            through cold emailing and make the most of your time, money and
            resources. Contact us now and let's get started!
          </p>
        </div>
        <BookACall />
      </section>
      {/* Guarantee */}
      <section className="bg-white">
        <div className="px-4 text-black font-semibold text-xl py-12 mx-auto lg:w-5/6">
          <h2 className="mb-6 font-heading text-4xl md:text-6xl xl:text-8xl text-black font-bold text-center lg:leading-tight">
            10 appointments / month or you don't pay!
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
        <BookACall />
      </section>
    </>
  );
}

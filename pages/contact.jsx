import Header from "../components/Header";
import Footer from "../components/Footer";

export default function contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    console.log(name, email, message);
  };
  return (
    <>
      <Header />
      <section className="relative z-10 container mx-auto px-4 bg-indigo-500">
        <div className="flex flex-wrap justify-center items-center py-16">
          <div className="w-auto">
            <h1 className="mb-4 font-heading text-center text-white text-5xl md:text-8xl font-bold">
              Need help finding SEO leads?
            </h1>
            <p className="my-9 font-medium text-lg text-center text-white w-[80%] mx-auto">
              Unlock the power of targeted cold email campaigns to drive
              qualified leads and close more deals with our proven system for
              finding and reaching out to potential clients.
            </p>
            <div className="flex justify-center flex-col items-center w-full">
              <div className="bg-white rounded-2xl p-8 w-[80%]">
                <form method="POST" onSubmit={handleSubmit}>
                  <label className="block font-bold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="block w-full p-2 mb-4 rounded border border-gray-700 focus:outline-none focus:border-blue-600"
                  />
                  <label className="block font-bold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="block w-full p-2 mb-4 rounded border border-gray-700 focus:outline-none focus:border-blue-600"
                  />
                  <label className="block font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="block w-full p-2 mb-4 rounded border border-gray-700 focus:outline-none focus:border-blue-600"
                  ></textarea>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-48"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import Header from "../../components/Header";

export default function Hero() {
  return (
    <section className="relative bg-indigo-500 background-animate overflow-hidden">
      <section>
        <Header />
        <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav className="relative z-10 px-9 py-8 bg-white h-full">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="#">
                      <img
                        src="gradia-assets/logos/gradia-name-black.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <a className="navbar-burger" href="#">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-8 w-full">
                <ul>
                  <li className="mb-12">
                    <a
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-12">
                    <a
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Solutions
                    </a>
                  </li>
                  <li className="mb-12">
                    <a
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-end w-full">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                      <div className="py-2 px-5 rounded-10">
                        <p>Login</p>
                      </div>
                    </button>
                  </div>
                  <div className="w-full">
                    <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-cyan-400 overflow-hidden rounded-10">
                      <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-cyan-400 transition ease-in-out duration-500"></div>
                      <div className="py-2 px-5 bg-white rounded-lg">
                        <p className="relative z-10">Start Free Trial</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center pt-32">
          <div className="w-auto">
            <h1 className="mb-4 font-heading text-center text-white text-8xl md:text-10xl font-bold">
              Grow SaaS business fast
            </h1>
            <p className="mb-9 font-medium text-lg text-center text-white">
              Velit officia consequat duis enim velit mollit. Exercitation
              veniam consequat
            </p>
            <div className="flex flex-wrap justify-center items-center mb-7 -m-1.5">
              <div className="w-full lg:w-72 p-1.5">
                <input
                  className="text-gray-500 px-5 py-4 w-full placeholder-gray-500 outline-none focus:ring-4 focus:ring-indigo-400 rounded"
                  type="text"
                  placeholder="Enter email to get started"
                />
              </div>
              <div className="w-full lg:w-auto p-1.5">
                <button className="group relative font-heading px-6 py-5 w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md">
                  <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-indigo-400"></div>
                  <p className="relative z-10">Start free trial</p>
                </button>
              </div>
            </div>
            <p className="mb-7 text-white text-sm text-center">
              Start with 14 days free trial. No credit card required
            </p>
            <div className="mb-24 flex items-center mx-auto p-2.5 bg-white bg-opacity-20 max-w-max rounded-full">
              <svg
                className="mr-2.5"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.8204 18.5236C18.7768 20.1833 19.7226 21.8241 20.6676 23.4632C16.4829 26.6669 9.97223 27.0541 5.15254 23.3647C-0.393884 19.1156 -1.30549 11.8655 1.66398 6.64649C5.07929 0.643554 11.4705 -0.684032 15.5855 0.289436C15.4742 0.531203 13.0096 5.64422 13.0096 5.64422C13.0096 5.64422 12.8148 5.65702 12.7046 5.65915C11.4883 5.71071 10.5823 5.99371 9.61136 6.49574C8.54606 7.05162 7.63313 7.85997 6.95236 8.85013C6.27159 9.8403 5.84371 10.9821 5.70611 12.1758C5.56254 13.3864 5.72994 14.6136 6.19249 15.7415C6.58358 16.6951 7.1368 17.542 7.87846 18.257C9.01619 19.3549 10.3701 20.0347 11.9394 20.2597C13.4256 20.4731 14.8549 20.2619 16.1942 19.5888C16.6966 19.3368 17.1239 19.0584 17.6234 18.6765C17.6871 18.6353 17.7436 18.583 17.8204 18.5236Z"
                  fill="white"
                ></path>
                <path
                  d="M17.8296 3.96824C17.5868 3.72932 17.3618 3.50888 17.1378 3.28703C17.0041 3.15477 16.8754 3.01717 16.7385 2.88811C16.6894 2.84154 16.6318 2.7779 16.6318 2.7779C16.6318 2.7779 16.6784 2.67906 16.6983 2.63852C16.9604 2.11268 17.371 1.72834 17.8581 1.42258C18.3967 1.0819 19.0243 0.908555 19.6614 0.924467C20.4766 0.940466 21.2347 1.14348 21.8743 1.6903C22.3464 2.09384 22.5885 2.60581 22.6312 3.21699C22.7023 4.24805 22.2757 5.03771 21.4284 5.58879C20.9307 5.91304 20.3938 6.1637 19.8555 6.46058C19.5586 6.62448 19.3048 6.76847 19.0147 7.06499C18.7594 7.36258 18.7469 7.6431 18.7469 7.6431L22.6035 7.63812V9.35574H16.6507C16.6507 9.35574 16.6507 9.23841 16.6507 9.1897C16.6279 8.34565 16.7264 7.55137 17.1129 6.78483C17.4684 6.08157 18.0209 5.56675 18.6847 5.17032C19.196 4.86491 19.7343 4.60501 20.2466 4.30103C20.5627 4.11366 20.786 3.83883 20.7842 3.44027C20.7842 3.09824 20.5353 2.79425 20.1798 2.69932C19.3414 2.4732 18.4881 2.83407 18.0444 3.60133C17.9797 3.71332 17.9136 3.8246 17.8296 3.96824Z"
                  fill="white"
                ></path>
                <path
                  d="M25.2892 16.698L22.0392 11.0854H15.6079L12.3369 16.756H18.8156L22.0126 22.3418L25.2892 16.698Z"
                  fill="white"
                ></path>
              </svg>
              <div className="flex items-center">
                <svg
                  className="mr-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.85874 1.71248C8.21796 0.606907 9.78205 0.606908 10.1413 1.71248L11.4248 5.66264C11.5854 6.15706 12.0462 6.49182 12.566 6.49182H16.7195C17.8819 6.49182 18.3653 7.97935 17.4248 8.66264L14.0646 11.104C13.644 11.4095 13.468 11.9512 13.6287 12.4456L14.9122 16.3958C15.2714 17.5013 14.006 18.4207 13.0656 17.7374L9.70535 15.2961C9.28476 14.9905 8.71525 14.9905 8.29466 15.2961L4.93446 17.7374C3.994 18.4207 2.72863 17.5013 3.08785 16.3958L4.37133 12.4456C4.53198 11.9512 4.35599 11.4095 3.93541 11.104L0.575205 8.66264C-0.365251 7.97935 0.118079 6.49182 1.28055 6.49182H5.43399C5.95386 6.49182 6.41461 6.15706 6.57525 5.66264L7.85874 1.71248Z"
                    fill="#FDE047"
                  ></path>
                </svg>
                <svg
                  className="mr-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.85874 1.71248C8.21796 0.606907 9.78205 0.606908 10.1413 1.71248L11.4248 5.66264C11.5854 6.15706 12.0462 6.49182 12.566 6.49182H16.7195C17.8819 6.49182 18.3653 7.97935 17.4248 8.66264L14.0646 11.104C13.644 11.4095 13.468 11.9512 13.6287 12.4456L14.9122 16.3958C15.2714 17.5013 14.006 18.4207 13.0656 17.7374L9.70535 15.2961C9.28476 14.9905 8.71525 14.9905 8.29466 15.2961L4.93446 17.7374C3.994 18.4207 2.72863 17.5013 3.08785 16.3958L4.37133 12.4456C4.53198 11.9512 4.35599 11.4095 3.93541 11.104L0.575205 8.66264C-0.365251 7.97935 0.118079 6.49182 1.28055 6.49182H5.43399C5.95386 6.49182 6.41461 6.15706 6.57525 5.66264L7.85874 1.71248Z"
                    fill="#FDE047"
                  ></path>
                </svg>
                <svg
                  className="mr-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.85874 1.71248C8.21796 0.606907 9.78205 0.606908 10.1413 1.71248L11.4248 5.66264C11.5854 6.15706 12.0462 6.49182 12.566 6.49182H16.7195C17.8819 6.49182 18.3653 7.97935 17.4248 8.66264L14.0646 11.104C13.644 11.4095 13.468 11.9512 13.6287 12.4456L14.9122 16.3958C15.2714 17.5013 14.006 18.4207 13.0656 17.7374L9.70535 15.2961C9.28476 14.9905 8.71525 14.9905 8.29466 15.2961L4.93446 17.7374C3.994 18.4207 2.72863 17.5013 3.08785 16.3958L4.37133 12.4456C4.53198 11.9512 4.35599 11.4095 3.93541 11.104L0.575205 8.66264C-0.365251 7.97935 0.118079 6.49182 1.28055 6.49182H5.43399C5.95386 6.49182 6.41461 6.15706 6.57525 5.66264L7.85874 1.71248Z"
                    fill="#FDE047"
                  ></path>
                </svg>
                <svg
                  className="mr-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.85874 1.71248C8.21796 0.606907 9.78205 0.606908 10.1413 1.71248L11.4248 5.66264C11.5854 6.15706 12.0462 6.49182 12.566 6.49182H16.7195C17.8819 6.49182 18.3653 7.97935 17.4248 8.66264L14.0646 11.104C13.644 11.4095 13.468 11.9512 13.6287 12.4456L14.9122 16.3958C15.2714 17.5013 14.006 18.4207 13.0656 17.7374L9.70535 15.2961C9.28476 14.9905 8.71525 14.9905 8.29466 15.2961L4.93446 17.7374C3.994 18.4207 2.72863 17.5013 3.08785 16.3958L4.37133 12.4456C4.53198 11.9512 4.35599 11.4095 3.93541 11.104L0.575205 8.66264C-0.365251 7.97935 0.118079 6.49182 1.28055 6.49182H5.43399C5.95386 6.49182 6.41461 6.15706 6.57525 5.66264L7.85874 1.71248Z"
                    fill="#FDE047"
                  ></path>
                </svg>
                <svg
                  className="mr-1"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.85874 1.71248C8.21796 0.606907 9.78205 0.606908 10.1413 1.71248L11.4248 5.66264C11.5854 6.15706 12.0462 6.49182 12.566 6.49182H16.7195C17.8819 6.49182 18.3653 7.97935 17.4248 8.66264L14.0646 11.104C13.644 11.4095 13.468 11.9512 13.6287 12.4456L14.9122 16.3958C15.2714 17.5013 14.006 18.4207 13.0656 17.7374L9.70535 15.2961C9.28476 14.9905 8.71525 14.9905 8.29466 15.2961L4.93446 17.7374C3.994 18.4207 2.72863 17.5013 3.08785 16.3958L4.37133 12.4456C4.53198 11.9512 4.35599 11.4095 3.93541 11.104L0.575205 8.66264C-0.365251 7.97935 0.118079 6.49182 1.28055 6.49182H5.43399C5.95386 6.49182 6.41461 6.15706 6.57525 5.66264L7.85874 1.71248Z"
                    fill="#FDE047"
                  ></path>
                </svg>
              </div>
            </div>
            <img
              className="transform hover:scale-105 transition ease-in-out duration-1000"
              src="gradia-assets/images/hero/dashboard.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-0 left-0 w-full"
        src="gradia-assets/elements/hero/line.svg"
        alt=""
      />
    </section>
  );
}

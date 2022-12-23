import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <title>SEOLution | SEO Lead Generation</title>
        <meta
          name="description"
          content="We offer Lead Generation services for SEO Agencies. Get more calls or
          your money back!"
        />
      </Head>
      <section className="relative bg-indigo-500 background-animate overflow-hidden">
        <section>
          <div className="flex items-center justify-between px-8 py-5">
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto mr-14">
                  <a href="#">
                    <img
                      src="gradia-assets/logos/gradia-name-white.svg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-auto hidden lg:block">
              <ul className="flex items-center mr-10">
                <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                  <a href="#">Features</a>
                </li>
                <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                  <a href="#">Solutions</a>
                </li>
                <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                  <a href="#">Resources</a>
                </li>
                <li className="font-heading text-white hover:text-gray-200 text-lg">
                  <a href="#">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="w-auto">
              <div className="flex flex-wrap items-center">
                <div className="w-auto hidden lg:block">
                  <button className="font-heading block py-3.5 px-5 uppercase text-xs tracking-px text-white font-bold bg-white bg-opacity-20 hover:bg-opacity-10 transition ease-in rounded-10">
                    Start Free Trial
                  </button>
                </div>
                <div className="w-auto lg:hidden">
                  <a href="#">
                    <svg
                      className="navbar-burger text-gray-800"
                      width="51"
                      height="51"
                      viewBox="0 0 56 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="56"
                        height="56"
                        rx="28"
                        fill="currentColor"
                      ></rect>
                      <path
                        d="M37 32H19M37 24H19"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
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

      <section className="pt-28 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="mb-5 font-heading font-semibold text-xs text-gray-400 text-center uppercase tracking-px">
            The features that made us special
          </p>
          <h2 className="mb-20 font-heading font-semibold text-6xl sm:text-7xl text-gray-900 text-center">
            Here’s how it works
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 9.0712C26.527 7.34116 28.7611 6.25 31.25 6.25C35.8524 6.25 39.5833 9.98096 39.5833 14.5833C39.5833 19.1857 35.8524 22.9167 31.25 22.9167C28.7611 22.9167 26.527 21.8255 25 20.0955M31.25 43.75H6.25V41.6667C6.25 34.7631 11.8464 29.1667 18.75 29.1667C25.6536 29.1667 31.25 34.7631 31.25 41.6667V43.75ZM31.25 43.75H43.75V41.6667C43.75 34.7631 38.1536 29.1667 31.25 29.1667C28.9732 29.1667 26.8386 29.7754 25 30.8389M27.0833 14.5833C27.0833 19.1857 23.3524 22.9167 18.75 22.9167C14.1476 22.9167 10.4167 19.1857 10.4167 14.5833C10.4167 9.98096 14.1476 6.25 18.75 6.25C23.3524 6.25 27.0833 9.98096 27.0833 14.5833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 12.5C8.33301 10.1988 10.1985 8.33334 12.4997 8.33334H16.6663C18.9675 8.33334 20.833 10.1988 20.833 12.5V16.6667C20.833 18.9679 18.9675 20.8333 16.6663 20.8333H12.4997C10.1985 20.8333 8.33301 18.9679 8.33301 16.6667V12.5Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M29.1663 12.5C29.1663 10.1988 31.0318 8.33334 33.333 8.33334H37.4997C39.8009 8.33334 41.6663 10.1988 41.6663 12.5V16.6667C41.6663 18.9679 39.8009 20.8333 37.4997 20.8333H33.333C31.0318 20.8333 29.1663 18.9679 29.1663 16.6667V12.5Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.33301 33.3333C8.33301 31.0322 10.1985 29.1667 12.4997 29.1667H16.6663C18.9675 29.1667 20.833 31.0322 20.833 33.3333V37.5C20.833 39.8012 18.9675 41.6667 16.6663 41.6667H12.4997C10.1985 41.6667 8.33301 39.8012 8.33301 37.5V33.3333Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M29.1663 33.3333C29.1663 31.0322 31.0318 29.1667 33.333 29.1667H37.4997C39.8009 29.1667 41.6663 31.0322 41.6663 33.3333V37.5C41.6663 39.8012 39.8009 41.6667 37.4997 41.6667H33.333C31.0318 41.6667 29.1663 39.8012 29.1663 37.5V33.3333Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 10.4167C8.33301 9.26608 9.26575 8.33334 10.4163 8.33334H39.583C40.7336 8.33334 41.6663 9.26608 41.6663 10.4167V14.5833C41.6663 15.7339 40.7336 16.6667 39.583 16.6667H10.4163C9.26575 16.6667 8.33301 15.7339 8.33301 14.5833V10.4167Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.33301 27.0833C8.33301 25.9327 9.26575 25 10.4163 25H22.9163C24.0669 25 24.9997 25.9327 24.9997 27.0833V39.5833C24.9997 40.7339 24.0669 41.6667 22.9163 41.6667H10.4163C9.26575 41.6667 8.33301 40.7339 8.33301 39.5833V27.0833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M33.333 27.0833C33.333 25.9327 34.2657 25 35.4163 25H39.583C40.7336 25 41.6663 25.9327 41.6663 27.0833V39.5833C41.6663 40.7339 40.7336 41.6667 39.583 41.6667H35.4163C34.2657 41.6667 33.333 40.7339 33.333 39.5833V27.0833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-28 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="mb-5 font-heading font-semibold text-xs text-gray-400 text-center uppercase tracking-px">
            The features that made us special
          </p>
          <h2 className="mb-20 font-heading font-semibold text-6xl sm:text-7xl text-gray-900 text-center">
            Here’s how it works
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 9.0712C26.527 7.34116 28.7611 6.25 31.25 6.25C35.8524 6.25 39.5833 9.98096 39.5833 14.5833C39.5833 19.1857 35.8524 22.9167 31.25 22.9167C28.7611 22.9167 26.527 21.8255 25 20.0955M31.25 43.75H6.25V41.6667C6.25 34.7631 11.8464 29.1667 18.75 29.1667C25.6536 29.1667 31.25 34.7631 31.25 41.6667V43.75ZM31.25 43.75H43.75V41.6667C43.75 34.7631 38.1536 29.1667 31.25 29.1667C28.9732 29.1667 26.8386 29.7754 25 30.8389M27.0833 14.5833C27.0833 19.1857 23.3524 22.9167 18.75 22.9167C14.1476 22.9167 10.4167 19.1857 10.4167 14.5833C10.4167 9.98096 14.1476 6.25 18.75 6.25C23.3524 6.25 27.0833 9.98096 27.0833 14.5833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 12.5C8.33301 10.1988 10.1985 8.33334 12.4997 8.33334H16.6663C18.9675 8.33334 20.833 10.1988 20.833 12.5V16.6667C20.833 18.9679 18.9675 20.8333 16.6663 20.8333H12.4997C10.1985 20.8333 8.33301 18.9679 8.33301 16.6667V12.5Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M29.1663 12.5C29.1663 10.1988 31.0318 8.33334 33.333 8.33334H37.4997C39.8009 8.33334 41.6663 10.1988 41.6663 12.5V16.6667C41.6663 18.9679 39.8009 20.8333 37.4997 20.8333H33.333C31.0318 20.8333 29.1663 18.9679 29.1663 16.6667V12.5Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.33301 33.3333C8.33301 31.0322 10.1985 29.1667 12.4997 29.1667H16.6663C18.9675 29.1667 20.833 31.0322 20.833 33.3333V37.5C20.833 39.8012 18.9675 41.6667 16.6663 41.6667H12.4997C10.1985 41.6667 8.33301 39.8012 8.33301 37.5V33.3333Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M29.1663 33.3333C29.1663 31.0322 31.0318 29.1667 33.333 29.1667H37.4997C39.8009 29.1667 41.6663 31.0322 41.6663 33.3333V37.5C41.6663 39.8012 39.8009 41.6667 37.4997 41.6667H33.333C31.0318 41.6667 29.1663 39.8012 29.1663 37.5V33.3333Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 10.4167C8.33301 9.26608 9.26575 8.33334 10.4163 8.33334H39.583C40.7336 8.33334 41.6663 9.26608 41.6663 10.4167V14.5833C41.6663 15.7339 40.7336 16.6667 39.583 16.6667H10.4163C9.26575 16.6667 8.33301 15.7339 8.33301 14.5833V10.4167Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.33301 27.0833C8.33301 25.9327 9.26575 25 10.4163 25H22.9163C24.0669 25 24.9997 25.9327 24.9997 27.0833V39.5833C24.9997 40.7339 24.0669 41.6667 22.9163 41.6667H10.4163C9.26575 41.6667 8.33301 40.7339 8.33301 39.5833V27.0833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M33.333 27.0833C33.333 25.9327 34.2657 25 35.4163 25H39.583C40.7336 25 41.6663 25.9327 41.6663 27.0833V39.5833C41.6663 40.7339 40.7336 41.6667 39.583 41.6667H35.4163C34.2657 41.6667 33.333 40.7339 33.333 39.5833V27.0833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pt-28 pb-32 overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <p className="mb-5 font-heading text-xs text-gray-600 font-semibold text-center uppercase tracking-px">
            The features that made us special
          </p>
          <h2 className="mb-20 max-w-2xl mx-auto font-heading font-bold text-center text-6xl sm:text-7xl text-gray-900">
            Track every single moment of your customers
          </h2>
          <div className="flex flex-wrap -m-7">
            <div className="w-full md:w-1/3 p-7">
              <div className="h-full p-0.5 bg-cyan-300 rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
                <div className="h-full p-8 bg-white rounded-lg">
                  <img
                    className="relative -left-2 mb-12"
                    src="gradia-assets/images/features/chart.png"
                    alt=""
                  />
                  <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                    Get live reports
                  </h3>
                  <p className="text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-7">
              <div className="h-full p-0.5 bg-cyan-400 rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
                <div className="h-full p-8 bg-white rounded-lg">
                  <img
                    className="relative -left-2 mb-12"
                    src="gradia-assets/images/features/messages.png"
                    alt=""
                  />
                  <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                    Chat with customers
                  </h3>
                  <p className="text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-7">
              <div className="h-full p-0.5 bg-cyan-400 rounded-10 transform hover:-translate-y-3 transition ease-out duration-1000">
                <div className="h-full p-8 bg-white rounded-lg">
                  <img
                    className="relative -left-2 mb-12"
                    src="gradia-assets/images/features/warning.png"
                    alt=""
                  />
                  <h3 className="mb-5 font-heading font-bold text-gray-900 text-xl">
                    Quality speed
                  </h3>
                  <p className="text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-28 pb-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="mb-5 font-heading font-semibold text-xs text-gray-400 text-center uppercase tracking-px">
            The features that made us special
          </p>
          <h2 className="mb-20 font-heading font-semibold text-6xl sm:text-7xl text-gray-900 text-center">
            Here’s how it works
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 9.0712C26.527 7.34116 28.7611 6.25 31.25 6.25C35.8524 6.25 39.5833 9.98096 39.5833 14.5833C39.5833 19.1857 35.8524 22.9167 31.25 22.9167C28.7611 22.9167 26.527 21.8255 25 20.0955M31.25 43.75H6.25V41.6667C6.25 34.7631 11.8464 29.1667 18.75 29.1667C25.6536 29.1667 31.25 34.7631 31.25 41.6667V43.75ZM31.25 43.75H43.75V41.6667C43.75 34.7631 38.1536 29.1667 31.25 29.1667C28.9732 29.1667 26.8386 29.7754 25 30.8389M27.0833 14.5833C27.0833 19.1857 23.3524 22.9167 18.75 22.9167C14.1476 22.9167 10.4167 19.1857 10.4167 14.5833C10.4167 9.98096 14.1476 6.25 18.75 6.25C23.3524 6.25 27.0833 9.98096 27.0833 14.5833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 12.5C8.33301 10.1988 10.1985 8.33334 12.4997 8.33334H16.6663C18.9675 8.33334 20.833 10.1988 20.833 12.5V16.6667C20.833 18.9679 18.9675 20.8333 16.6663 20.8333H12.4997C10.1985 20.8333 8.33301 18.9679 8.33301 16.6667V12.5Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M29.1663 12.5C29.1663 10.1988 31.0318 8.33334 33.333 8.33334H37.4997C39.8009 8.33334 41.6663 10.1988 41.6663 12.5V16.6667C41.6663 18.9679 39.8009 20.8333 37.4997 20.8333H33.333C31.0318 20.8333 29.1663 18.9679 29.1663 16.6667V12.5Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.33301 33.3333C8.33301 31.0322 10.1985 29.1667 12.4997 29.1667H16.6663C18.9675 29.1667 20.833 31.0322 20.833 33.3333V37.5C20.833 39.8012 18.9675 41.6667 16.6663 41.6667H12.4997C10.1985 41.6667 8.33301 39.8012 8.33301 37.5V33.3333Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M29.1663 33.3333C29.1663 31.0322 31.0318 29.1667 33.333 29.1667H37.4997C39.8009 29.1667 41.6663 31.0322 41.6663 33.3333V37.5C41.6663 39.8012 39.8009 41.6667 37.4997 41.6667H33.333C31.0318 41.6667 29.1663 39.8012 29.1663 37.5V33.3333Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="md:max-w-xs mx-auto text-center">
                <svg
                  className="mx-auto mb-8"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33301 10.4167C8.33301 9.26608 9.26575 8.33334 10.4163 8.33334H39.583C40.7336 8.33334 41.6663 9.26608 41.6663 10.4167V14.5833C41.6663 15.7339 40.7336 16.6667 39.583 16.6667H10.4163C9.26575 16.6667 8.33301 15.7339 8.33301 14.5833V10.4167Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M8.33301 27.0833C8.33301 25.9327 9.26575 25 10.4163 25H22.9163C24.0669 25 24.9997 25.9327 24.9997 27.0833V39.5833C24.9997 40.7339 24.0669 41.6667 22.9163 41.6667H10.4163C9.26575 41.6667 8.33301 40.7339 8.33301 39.5833V27.0833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M33.333 27.0833C33.333 25.9327 34.2657 25 35.4163 25H39.583C40.7336 25 41.6663 25.9327 41.6663 27.0833V39.5833C41.6663 40.7339 40.7336 41.6667 39.583 41.6667H35.4163C34.2657 41.6667 33.333 40.7339 33.333 39.5833V27.0833Z"
                    stroke="#18181B"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p className="font-heading font-medium text-xl text-gray-900">
                  Subscribe to a plan that suits you better and place orders as
                  many as you want.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-24 pb-32 bg-blue-200 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-20">
            <h2 className="mb-4 font-heading font-semibold text-center text-6xl sm:text-7xl text-gray-900">
              Got questions?
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className="flex flex-wrap -m-6 mb-24">
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                  Is it really unlimited downloads?
                </h2>
                <p className="text-base text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sagittis euismod ornare aenean ut justo elit amet. Gravida
                  pulvinar ac elementum praesent vel quis accumsan, proin
                  rhoncus.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                  Is it really unlimited downloads?
                </h2>
                <p className="text-base text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sagittis euismod ornare aenean ut justo elit amet. Gravida
                  pulvinar ac elementum praesent vel quis accumsan, proin
                  rhoncus.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                  Do you offer discounts on annual plans?
                </h2>
                <p className="text-base text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sagittis euismod ornare aenean ut justo elit amet. Gravida
                  pulvinar ac elementum praesent vel quis accumsan, proin
                  rhoncus.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                  Do you offer discounts on annual plans?
                </h2>
                <p className="text-base text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sagittis euismod ornare aenean ut justo elit amet. Gravida
                  pulvinar ac elementum praesent vel quis accumsan, proin
                  rhoncus.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                  What kind of file do you offer with the packages?
                </h2>
                <p className="text-base text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sagittis euismod ornare aenean ut justo elit amet. Gravida
                  pulvinar ac elementum praesent vel quis accumsan, proin
                  rhoncus.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-6">
              <div className="md:max-w-xl">
                <h2 className="mb-4 font-heading font-medium text-2xl text-gray-900">
                  What kind of file do you offer with the packages?
                </h2>
                <p className="text-base text-black">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Sagittis euismod ornare aenean ut justo elit amet. Gravida
                  pulvinar ac elementum praesent vel quis accumsan, proin
                  rhoncus.
                </p>
              </div>
            </div>
          </div>
          <a
            className="group block max-w-max mx-auto font-heading font-medium text-gray-900 hover:text-gray-800 text-base overflow-hidden"
            href="#"
          >
            <p className="mb-1">Didn’t find the answer? Contact us here</p>
            <div className="w-full transform -translate-x-0 group-hover:translate-x-full h-px bg-cyan-400 transition ease-in-out duration-500"></div>
          </a>
        </div>
      </section>

      <section className="relative py-36 bg-gray-100 overflow-hidden">
        <img
          className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
          src="gradia-assets/elements/testimonials/radial2.svg"
          alt=""
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-wrap -m-6">
            <div className="w-full md:w-1/2 p-6">
              <h2 className="mb-16 md:max-w-md md:ml-auto font-heading font-semibold text-5xl sm:text-6xl text-gray-900">
                5,920+ people think Gradia is the best
              </h2>
              <div className="p-12 bg-white rounded-10">
                <h3 className="mb-5 font-heading font-medium text-xl text-black">
                  “Easy to use”
                </h3>
                <p className="mb-7 text-lg text-black">
                  “Amet minim mollit non deserunt ullam co est sit aliqua dolor
                  do amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat.”
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
                      Co-founder at Parkon
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
                      “Very fast video output”
                    </h3>
                    <p className="mb-7 text-lg text-black">
                      “Amet minim mollit non deserunt ullam co est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat.”
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
                          Project Manager at Marron.ai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-auto p-6">
                  <div className="p-12 bg-white rounded-10">
                    <h3 className="mb-5 font-heading font-medium text-xl text-black">
                      “Better than anything”
                    </h3>
                    <p className="mb-7 text-lg text-black">
                      “Amet minim mollit non deserunt ullam co est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat.”
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
                        <p className="text-sm text-gray-600">
                          Digital Marketer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-28 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative z-10 flex flex-wrap">
            <div className="w-full md:w-1/2">
              <h2 className="mb-5 font-heading font-bold text-6xl sm:text-7xl text-white">
                Grow with latest job updates
              </h2>
              <p className="mb-16 text-gray-300 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                justo, sit iaculis ultrices vitae pulvinar tellus. Volutpat, ut
                lacus tristique ligula.
              </p>
              <div className="flex flex-wrap -m-1.5 mb-8 md:max-w-xl">
                <div className="w-full md:flex-1 lg:w-auto p-1.5">
                  <div className="p-px bg-cyan-400 focus-within:ring-4 focus-within:ring-indigo-500 rounded-full">
                    <input
                      className="w-full px-6 py-4 placeholder-gray-300 text-base text-gray-300 bg-gray-900 outline-none rounded-full"
                      type="text"
                      placeholder="Enter email to get started"
                    />
                  </div>
                </div>
                <div className="w-full md:w-auto p-1.5">
                  <button className="group relative font-heading py-4 px-12 block w-full md:w-auto text-lg text-gray-900 font-semibold bg-white hover:bg-gray-50 overflow-hidden rounded-full">
                    <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-cyan-400"></div>
                    <p className="relative z-10">Join Now</p>
                  </button>
                </div>
              </div>
              <p className="md:max-w-xs md:pr-16 text-sm text-gray-400">
                <span className="text-white">12,000+ People</span>
                <span>are already using Gradia for their business</span>
              </p>
            </div>
          </div>
          <img
            className="absolute left-0 bottom-0 transform"
            src="gradia-assets/elements/cta/radial4.png"
            alt=""
          />
          <img
            className="absolute right-0 top-0 left-50 transform"
            src="gradia-assets/elements/cta/radial5.png"
            alt=""
          />
        </div>
      </section>

      <section className="relative py-24 overflow-hidden">
        <img
          className="absolute bottom-0 left-0"
          src="gradia-assets/elements/footers/radial.svg"
          alt=""
        />
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-wrap -m-6">
            <div className="w-full md:w-1/2 lg:w-5/12 p-6">
              <div className="flex flex-col justify-between h-full">
                <div>
                  <img
                    className="mb-16"
                    src="gradia-assets/logos/gradia-name-black.svg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="mb-4 font-heading font-medium text-base">
                    The boldest SaaS kit in the market.
                  </p>
                  <p className="text-gray-600 text-sm">
                    © Copyright 2022. All Rights Reserved by Gradia.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/12 p-6">
              <div className="h-full">
                <h3 className="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
                  Company
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Affiliate Program
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-2/12 p-6">
              <div className="h-full">
                <h3 className="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
                  Support
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Account
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Help
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Customer Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-3/12 p-6">
              <div className="h-full">
                <h3 className="mb-9 font-heading font-semibold text-xs text-gray-500 uppercase tracking-px">
                  Legals
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="font-heading font-medium text-base text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Licensing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

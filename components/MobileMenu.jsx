import Link from "next/link";

export default function MobileMenu({ closeMenu }) {
  return (
    <div className="navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
      <div
        onClick={closeMenu}
        className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
      ></div>
      <nav className="relative z-10 px-9 py-8 bg-white h-full">
        <div className="flex flex-wrap justify-between h-full">
          <div className="w-full">
            <div className="flex items-center justify-between -m-2">
              <div className="w-auto p-2">
                <a className="inline-block">
                  <img src="gradia-assets/logos/logo.png" alt="" />
                </a>
              </div>
              <div className="w-auto p-2">
                <a className="navbar-burger" onClick={closeMenu}>
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
                <Link
                  className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                  href="/"
                >
                  Start Here
                </Link>
              </li>
              <li className="mb-12">
                <Link
                  className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li className="mb-12">
                <Link
                  className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

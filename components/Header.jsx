import Link from "next/link";

export default function Header() {
  return (
    <section className="bg-indigo-500 hidden md:block">
      <div className="flex items-center justify-between px-8 py-5">
        <div className="w-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-auto mr-14">
              <Link href="/">
                <img
                  src="gradia-assets/logos/logo-white.png"
                  className="w-[150px]"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-auto hidden lg:block">
          <ul className="flex items-center mr-10">
            <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
              <Link href="/">Start Here</Link>
            </li>
            <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
              <Link href="/#services">Services</Link>
            </li>
            <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

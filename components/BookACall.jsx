import Link from "next/link";

export default function BookACall() {
  return (
    <div className="flex flex-row justify-center pb-12">
      <Link
        className="group relative font-heading px-6 py-5 w-full lg:w-1/4 uppercase text-white text-xs font-semibold tracking-px bg-gray-900 hover:bg-gray-800 overflow-hidden rounded-md flex justify-center"
        href="https://tidycal.com/alexrod94/seo-lead-generation"
      >
        <div className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-indigo-400"></div>
        <p className="relative z-10">Yes, I want this!</p>
      </Link>
    </div>
  );
}

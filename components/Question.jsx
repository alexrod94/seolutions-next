import { useState } from "react";

export default function Question({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="w-full hover:cursor-pointer"
      onClick={() => (open ? setOpen(false) : setOpen(true))}
    >
      <div className="pb-0.5 bg-gradient-cyan">
        <div className="py-3.5 px-5 bg-white bg-gray-200 rounded my-1">
          <div className="flex flex-wrap justify-between items-start -m-2">
            <div className="flex-1 p-2">
              <p className="mb-5 font-heading font-semibold text-lg text-gray-900">
                {question}
              </p>
              {open && <p className="text-base text-black">{answer}</p>}
            </div>
            <div className="w-auto p-2">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {open ? (
                  <path
                    d="M3.75 7.5L9 2.25M9 2.25L14.25 7.5M9 2.25V15.75"
                    stroke="#111827"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                ) : (
                  <path
                    d="M10.5 3.75L15.75 9M15.75 9L10.5 14.25M15.75 9L2.25 9"
                    stroke="#111827"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                )}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

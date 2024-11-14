import React from "react";

const Features = () => {
  return (
    <section className="bg-black py-32 bg-[url('./assets/bg1.svg'),url('./assets/bg2.svg')]">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-28">
        <div className="flex flex-col justify-center w-[500px]">
          <div className="bg-[#47E598] text-black font-semibold rounded-md w-40 text-center inline-block mb-4">
            AI Contribution
          </div>
          <h2 className="text-[#47E598] text-4xl font-bold mb-4 w-80">
            Connect product analysis, ask the AI Robot
          </h2>
          <p className="text-white mb-6 text-left w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae consectetur lorem, id venenatis metus.
          </p>
          <ul className="text-white space-y-2">
            <li className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 22C16.5228 22 21 17.5228 21 12C21 6.47715 16.5228 2 11 2C5.47715 2 1 6.47715 1 12C1 17.5228 5.47715 22 11 22Z"
                  stroke="#47E598"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12L10 14L14 10"
                  stroke="#47E598"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Lorem ipsum dolor sit amet,
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 22C16.5228 22 21 17.5228 21 12C21 6.47715 16.5228 2 11 2C5.47715 2 1 6.47715 1 12C1 17.5228 5.47715 22 11 22Z"
                  stroke="#47E598"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12L10 14L14 10"
                  stroke="#47E598"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Lorem ipsum dolor sit amet,
            </li>
            <li className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 22C16.5228 22 21 17.5228 21 12C21 6.47715 16.5228 2 11 2C5.47715 2 1 6.47715 1 12C1 17.5228 5.47715 22 11 22Z"
                  stroke="#47E598"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 12L10 14L14 10"
                  stroke="#47E598"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Lorem ipsum dolor sit amet,
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <div className="lg:w-2/3 rounded-md flex items-center justify-center">
            <img
              src="./src/assets/imageplaceholder.svg"
              alt="Feature Image"
              className="h-[350px]"
            />
          </div>
        </div>

        <div className="flex justify-center items-center order-last lg:order-none">
          <div className="lg:w-2/3 rounded-md flex items-center justify-center -ml-52">
            <img
              src="./src/assets/imageplaceholder.svg"
              alt="Feature Image"
              className="h-[350px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center ml-24">
          <div className="bg-[#47E598] text-black font-semibold rounded-md w-40 text-center inline-block mb-4 p-1">
            Effort in Your Team
          </div>
          <h2 className="text-[#47E598] text-4xl font-bold mb-4 w-[425px]">
            Marketing tools with the help of the AI Robot team
          </h2>
          <p className="text-white mb-6 w-[425px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae
            consectetur lorem, id venenatis metus. Pellentesque ultricies urna
            ut orci facilisis volutpat. Nullam vestibulum massa imperdiet luctus
            accumsan. Sed euismod, nunc vitae tincidunt dapibus, risus turpis
            feugiat erat,
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;

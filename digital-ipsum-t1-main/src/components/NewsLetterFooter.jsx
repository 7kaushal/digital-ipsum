// src/NewsletterFooter.js
import React from "react";

const NewsletterFooter = () => {
  return (
    <>
      <div className="bg-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Get notifications about tips, new product and exclusive promo news
            just for you.
          </p>
          <div className="flex justify-center">
            <div className="relative max-w-md w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 rounded-lg shadow-sm border-gray-300 focus:ring focus:ring-[#0BA085] focus:border-[#0BA085]"
              />
              <button className="-mt-1 absolute right-2 top-2 bg-[#0BA085] text-white px-4 py-2 rounded-lg hover:bg-[#0BA085]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Blessing</h4>
            <p className="text-gray-600 mb-4">
              As a digital marketing agency, we strive to understand our
              client’s business goals first. Then all decisions are made with
              those goals in mind.
            </p>
            <svg
              width="144"
              height="24"
              viewBox="0 0 144 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM13.2507 12.5271V19.0557H10.5495V12.5274H9.19995V10.2776H10.5495V8.92678C10.5495 7.0914 11.3115 6 13.4765 6H15.279V8.25006H14.1523C13.3095 8.25006 13.2538 8.56447 13.2538 9.15125L13.2507 10.2773H15.2917L15.0529 12.5271H13.2507Z"
                fill="#646464"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M52 0C45.3726 0 40 5.37258 40 12C40 18.6274 45.3726 24 52 24C58.6274 24 64 18.6274 64 12C64 5.37258 58.6274 0 52 0ZM49.3617 5.63876C50.0444 5.6077 50.2625 5.6001 52.0007 5.6001H51.9987C53.7374 5.6001 53.9547 5.6077 54.6374 5.63876C55.3187 5.66997 55.7841 5.77783 56.1921 5.9361C56.6134 6.09944 56.9694 6.31811 57.3254 6.67411C57.6814 7.02985 57.9001 7.38692 58.0641 7.80785C58.2214 8.21479 58.3294 8.67986 58.3614 9.3612C58.3921 10.0439 58.4001 10.262 58.4001 12.0002C58.4001 13.7383 58.3921 13.9559 58.3614 14.6386C58.3294 15.3197 58.2214 15.7849 58.0641 16.1919C57.9001 16.6127 57.6814 16.9698 57.3254 17.3256C56.9698 17.6816 56.6133 17.9008 56.1925 18.0642C55.7853 18.2225 55.3197 18.3304 54.6383 18.3616C53.9557 18.3926 53.7382 18.4002 51.9999 18.4002C50.2619 18.4002 50.0439 18.3926 49.3612 18.3616C48.68 18.3304 48.2148 18.2225 47.8076 18.0642C47.3869 17.9008 47.0298 17.6816 46.6742 17.3256C46.3184 16.9698 46.0997 16.6127 45.9361 16.1918C45.778 15.7849 45.6701 15.3198 45.6388 14.6385C45.6078 13.9558 45.6001 13.7383 45.6001 12.0002C45.6001 10.262 45.6081 10.0437 45.6386 9.36107C45.6693 8.68 45.7773 8.21479 45.936 7.80772C46.1 7.38692 46.3186 7.02985 46.6746 6.67411C47.0304 6.31824 47.3874 6.09957 47.8084 5.9361C48.2153 5.77783 48.6804 5.66997 49.3617 5.63876Z"
                fill="#646464"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M51.4266 6.75306C51.5381 6.75289 51.658 6.75294 51.7874 6.753L52.0007 6.75306C53.7096 6.75306 53.9121 6.7592 54.5869 6.78987C55.2109 6.8184 55.5496 6.92267 55.7752 7.01027C56.0739 7.12627 56.2868 7.26494 56.5107 7.48894C56.7347 7.71294 56.8733 7.92628 56.9896 8.22495C57.0772 8.45028 57.1816 8.78895 57.21 9.41296C57.2407 10.0876 57.2473 10.2903 57.2473 11.9983C57.2473 13.7063 57.2407 13.909 57.21 14.5837C57.1815 15.2077 57.0772 15.5464 56.9896 15.7717C56.8736 16.0704 56.7347 16.283 56.5107 16.5069C56.2867 16.7309 56.074 16.8696 55.7752 16.9856C55.5499 17.0736 55.2109 17.1776 54.5869 17.2061C53.9122 17.2368 53.7096 17.2434 52.0007 17.2434C50.2918 17.2434 50.0893 17.2368 49.4146 17.2061C48.7906 17.1773 48.4519 17.073 48.2262 16.9854C47.9275 16.8694 47.7142 16.7308 47.4902 16.5068C47.2662 16.2828 47.1275 16.07 47.0112 15.7712C46.9236 15.5458 46.8192 15.2072 46.7908 14.5831C46.7602 13.9085 46.754 13.7058 46.754 11.9967C46.754 10.2876 46.7602 10.086 46.7908 9.41136C46.8194 8.78735 46.9236 8.44868 47.0112 8.22308C47.1272 7.92441 47.2662 7.71107 47.4902 7.48707C47.7142 7.26307 47.9275 7.1244 48.2262 7.00813C48.4518 6.92013 48.7906 6.81613 49.4146 6.78747C50.005 6.7608 50.2338 6.7528 51.4266 6.75146V6.75306ZM55.4169 7.81545C54.9929 7.81545 54.6489 8.15906 54.6489 8.58319C54.6489 9.0072 54.9929 9.3512 55.4169 9.3512C55.8409 9.3512 56.1849 9.0072 56.1849 8.58319C56.1849 8.15919 55.8409 7.81519 55.4169 7.81519V7.81545ZM48.7141 11.9991C48.7141 10.1841 50.1857 8.71247 52.0007 8.7124C53.8158 8.7124 55.287 10.184 55.287 11.9991C55.287 13.8142 53.8159 15.2851 52.0008 15.2851C50.1857 15.2851 48.7141 13.8142 48.7141 11.9991Z"
                fill="#646464"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M52.0005 9.86646C53.1787 9.86646 54.1339 10.8215 54.1339 11.9998C54.1339 13.178 53.1787 14.1332 52.0005 14.1332C50.8223 14.1332 49.8672 13.178 49.8672 11.9998C49.8672 10.8215 50.8223 9.86646 52.0005 9.86646V9.86646Z"
                fill="#646464"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M92 0C85.3726 0 80 5.37258 80 12C80 18.6274 85.3726 24 92 24C98.6274 24 104 18.6274 104 12C104 5.37258 98.6274 0 92 0ZM91.6658 10.1687L91.6406 9.75346C91.5651 8.67726 92.2282 7.69427 93.2774 7.31294C93.6635 7.17735 94.3182 7.16041 94.7463 7.27904C94.9142 7.32989 95.2331 7.49937 95.4598 7.6519L95.8711 7.93154L96.3243 7.78748C96.5761 7.71122 96.9119 7.58411 97.063 7.49937C97.2057 7.4231 97.3316 7.38073 97.3316 7.40615C97.3316 7.55021 97.021 8.04171 96.7608 8.31287C96.4083 8.6942 96.509 8.7281 97.2224 8.47388C97.6505 8.32982 97.6589 8.32982 97.575 8.49083C97.5246 8.57557 97.2644 8.87216 96.9874 9.14333C96.5174 9.6094 96.4922 9.66024 96.4922 10.05C96.4922 10.6517 96.2068 11.9059 95.9214 12.5923C95.3926 13.8803 94.2595 15.2107 93.1263 15.8802C91.5315 16.8208 89.4079 17.0581 87.62 16.5073C87.024 16.3208 86 15.8463 86 15.7615C86 15.7361 86.3106 15.7022 86.6883 15.6937C87.4773 15.6768 88.2663 15.4565 88.9378 15.0667L89.3911 14.7955L88.8707 14.6175C88.132 14.3633 87.4689 13.7786 87.301 13.2278C87.2507 13.0499 87.2675 13.0414 87.7375 13.0414L88.2243 13.0329L87.8131 12.838C87.3262 12.5923 86.8813 12.177 86.6631 11.7533C86.5036 11.4483 86.3022 10.6771 86.3609 10.6178C86.3777 10.5924 86.554 10.6432 86.7554 10.711C87.3346 10.9229 87.4102 10.872 87.0744 10.5161C86.4449 9.87209 86.2518 8.91453 86.554 8.00781L86.6967 7.60106L87.2507 8.15187C88.3838 9.26196 89.7184 9.92294 91.2461 10.1178L91.6658 10.1687Z"
                fill="#646464"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M132 0C125.373 0 120 5.37258 120 12C120 18.6274 125.373 24 132 24C138.627 24 144 18.6274 144 12C144 5.37258 138.627 0 132 0ZM137.001 7.87501C137.552 8.02614 137.985 8.47145 138.133 9.03695C138.4 10.0619 138.4 12.2003 138.4 12.2003C138.4 12.2003 138.4 14.3387 138.133 15.3637C137.985 15.9292 137.552 16.3745 137.001 16.5258C136.003 16.8003 132 16.8003 132 16.8003C132 16.8003 127.997 16.8003 126.999 16.5258C126.448 16.3745 126.015 15.9292 125.868 15.3637C125.6 14.3387 125.6 12.2003 125.6 12.2003C125.6 12.2003 125.6 10.0619 125.868 9.03695C126.015 8.47145 126.448 8.02614 126.999 7.87501C127.997 7.60034 132 7.60034 132 7.60034C132 7.60034 136.003 7.60034 137.001 7.87501Z"
                fill="#646464"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M130.8 14.3997V10.3997L134 12.3997L130.8 14.3997Z"
                fill="#646464"
              />
            </svg>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Links</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">About</h4>
            <ul className="text-gray-600 space-y-2">
              <li>
                <a href="#" className="hover:text-gray-800">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-800">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Our Office</h4>
            <p className="text-gray-600 mb-4">Indonesia</p>
            <p className="text-gray-600">
              Jl. Griya Permata Hijau no D1 Purwomartani, Kalasan 543881
            </p>
            <p className="text-gray-600 mt-4">Singapore</p>
            <p className="text-gray-600">
              35 Mandalay Road 13–37 Mandalay Towers, Singapore 308215
            </p>
          </div>
        </div>
        <div className="min-w-full mx-auto mt-12 text-slate-200 text-center bg-[#0BA085] flex flex-row gap-[65rem] py-3">
          <div className="ml-5">
            <p>© 2021 Blessing All rights reserved.</p>
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-gray-800">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-800">
              Security
            </a>
            <a href="#" className="hover:text-gray-800">
              Terms
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NewsletterFooter;

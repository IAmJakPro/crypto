import React from "react";
//import "bootstrap/dist/css/bootstrap.min.css";

export default function MyPortfolio() {
  return (
    <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-60 min-h-[100vh]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
            <h3 className="text-primary font-semibold text-2xl">Sign up Today</h3>
              <h1
                className="mb-4 font-bold leading-tight text-dark sm:text-[42px] lg:text-[52px] xl:text-[62px]"
              >
                Crypto Portfolio Tracker
              </h1>
              <p className="mb-10 max-w-[480px] text-base text-body-color">
                Keep track of your profits, losses and portfolio valuation with our easy to use platform.
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center rounded-lg bg-primary py-4 px-6 text-center text-base font-semibold text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                    Create your Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center py-4 px-6 text-center text-base font-semibold text-body-color hover:text-primary sm:px-10 lg:px-8 xl:px-10"
                  >
                    Login
                    <span className="pl-2">→</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="http://localhost:3000/images/hero/hero-image.jpg"
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -left-8 -bottom-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{/* <div className="my-portfolio-container container my-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Sign up Today</h1>
          <h2>Crypto Portfolio Tracker</h2>
          <p>
            Keep track of your profits, losses, and portfolio valuation with our
            easy-to-use platform.
          </p>
          <div className="d-flex">
            <button className="btn btn-primary mr-3">
              Create Your Portfolio
            </button>
            <button className="btn btn-secondary">Login</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="sample-image.jpg" alt="Sample" className="img-fluid" />
        </div>
      </div>
    </div> */}
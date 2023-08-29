import React, { useState } from "react";
import Select from 'react-select';

const WatchListForm = ({ cryptoArray }) => {
  const [watchlist, setWatchlist] = useState([]);
  const [symbol, setSymbol] = useState("");

  const symbolExistsInWatchList = (symbol) => {
    return watchlist.some((item) => item.symbol === symbol);
  };

  const handleWatchlistSubmission = (event) => {
    event.preventDefault();
    const symbolInput = symbol.trim().toUpperCase();

    if (symbolExistsInWatchList(symbolInput)) {
      // Symbol already exists in watchlist
      alert(`The symbol ${symbolInput} is already in the watchlist.`);
    } else {
      const coin = cryptoArray.find(
        (item) => item.symbol.toUpperCase() === symbolInput
      );
      if (coin) {
        setWatchlist((prevWatchlist) => [
          ...prevWatchlist,
          {
            symbol: coin.symbol,
            price: Number(coin.priceUsd).toFixed(2),
            imgSource: coin.imgSource,
          },
        ]);
        setSymbol("");
      } else {
        // Symbol not found in cryptoArray
        alert(`The symbol ${symbolInput} does not exist.`);
      }
    }
  };

  //   if (!cryptoArray || cryptoArray.length === 0) {
  //     // Return null or a loading message while the data is being fetched
  //     return <p>Loading...</p>;
  //   }

  const selectOptions = cryptoArray.map((d) => ({ label: d.name, value: d.symbol }));

  return (
    <div className="relative bg-white pt-[120px] pb-[110px] lg:pt-60 min-h-[100vh]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h3 className="text-primary font-semibold text-2xl">Sign up today and get</h3>
              <h1
                className="mb-4 font-bold leading-tight text-dark sm:text-[42px] lg:text-[52px] xl:text-[62px]"
              >
                your own crypto Watchlist
              </h1>
              <p className="mb-10 max-w-[480px] text-base text-body-color">
                Track your profits and losses. View your portfolio valuation. Do it all with our easy-to-use platform.
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="inline-flex items-center justify-center rounded-lg bg-primary py-4 px-6 text-center text-base font-semibold text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                  >
                    Create my own Watchlist
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
                  src="/images/hero/hero-image.jpg"
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
};
{/* <div className="container pt-60">
      <form onSubmit={handleWatchlistSubmission} className="mx-auto max-w-2xl">
        <h2 className="text-center text-2xl font-semibold mb-10">Enter Symbol:</h2>
        <div className=" flex">
          <Select options={selectOptions} onChange={(v) => setSymbol(v.value)} className="w-8/12" />
          <button type="submit" className="w-4/12">Add to Watchlist</button>
        </div>
      </form>
      <div className="watchlist-items">
        {watchlist.map((item, index) => (
          <div key={index} className="watchlist-item">
            <img
              src={item.imgSource}
              alt={item.symbol}
              className="coin-image"
            />
            <span>
              {item.symbol} - ${item.price}
            </span>
          </div>
        ))}
      </div>
    </div> */}

export default WatchListForm;

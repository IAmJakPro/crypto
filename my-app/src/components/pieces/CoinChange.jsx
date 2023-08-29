import React, { useState } from "react";

export default function CoinChange({ cryptoArray }) {
  const [currentPage, setCurrentPage] = useState(0);
  const coinsPerPage = 10;

  const handleCoinClick = (coin) => {
    console.log("Coin clicked:", coin);
  };

  const renderCoinChangeItems = () => {
    const start = currentPage * coinsPerPage;
    const end = start + coinsPerPage;
    const displayedCoins = cryptoArray.slice(start, end);

    return displayedCoins.map((coin) => {
      const roundedChange = Math.round(coin.changePercent24Hr * 10) / 10;
      const color =
        coin.changePercent24Hr < 0 ? "text-red-500" : "text-green-500";

      return (
        <tr
          key={coin.symbol}
          //style={{ backgroundColor }}
          onClick={() => handleCoinClick(coin)}
          className="border-b text-sm font-semibold"
        >
          <td className="py-3 px-4 text-dark">
            <div className="flex">
              <span className="mr-2"><img src={coin.imgSource} alt={coin.name} width={20} height={20} /></span>
              <span>
                {`${coin.name} (${coin.symbol})`}
              </span>
            </div>
          </td>
          <td className={"py-3 px-4 font-bold " + color}>{roundedChange}%</td>
        </tr>
      );
    });
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(cryptoArray.length / coinsPerPage);
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-7">
      <table className="w-full table">
        <thead>
          <tr className="border-b text-dark text-sm font-semibold">
            <th className="py-3 px-4 text-left">Currency</th>
            <th className="py-3 px-4 text-left">Percent Change</th>
          </tr>
        </thead>
        <tbody>
          {renderCoinChangeItems()}
        </tbody>
      </table>
      <div className="m-auto  flex justify-between gap-4 mt-10">
        <button onClick={handlePreviousPage} disabled={currentPage === 0} className="w-1/2 p-2 bg-gray-200 text-dark text-sm rounded font-semibold">
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(cryptoArray.length / coinsPerPage) - 1
          }
          className="p-2 bg-gray-200 text-dark text-sm rounded font-semibold w-1/2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

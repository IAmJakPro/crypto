import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

export default function CoinMenu({ cryptoArray }) {
  const [currentPage, setCurrentPage] = useState(0);
  const coinsPerPage = 10;

  const createCoinMenuItem = (symbol, name, price, imgSource) => {
    const parsedPrice = parseFloat(price);

    return (
      <SwiperSlide key={symbol}>
        <div className="flex">
          <img
            className="h-full"
            src={imgSource}
            onError={(e) => {
              e.target.src = "https://i.ibb.co/zRLmrMN/shitcoin.png";
            }}
            alt={symbol}
            width={50}
            height={50}
          />
          <div className="ml-3">
            <p className="font-semibold">{name}</p>
            <small>({symbol})</small>
          </div>
        </div>
        <p className="text-xs mt-2">Real-Time Price: <span className="text-sm font-semibold">{parsedPrice.toFixed(
          2
        )}</span></p>
      </SwiperSlide>
    );
  };

  const renderCoinMenuItems = () => {
    if (!cryptoArray) {
      return null; // Return null or a loading message while the data is being fetched
    }

    const start = currentPage * coinsPerPage;
    const end = start + coinsPerPage;
    // console.log(cryptoArray);
    const displayedCoins = cryptoArray.slice(start, end);

    return cryptoArray.map((coin) => {
      const { symbol, name, priceUsd, imgSource } = coin;
      // console.log(imgSource);
      return createCoinMenuItem(symbol, name, priceUsd, imgSource);
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
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={7}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 2000 }}

        //navigation
        modules={[Navigation, Autoplay]}
      >
        {renderCoinMenuItems()}
      </Swiper>
    </div>
  );
}


{/* <div className="coin-menu">
      <button onClick={handlePreviousPage} disabled={currentPage === 0}>
        Previous
      </button>
      <ul className="coin-list">{renderCoinMenuItems()}</ul>
      <div className="pagination-buttons">
        <button
          onClick={handleNextPage}
          disabled={
            currentPage === Math.ceil(cryptoArray.length / coinsPerPage) - 1
          }
        >
          Next
        </button>
      </div>
    </div> */}
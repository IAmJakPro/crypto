import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import WatchListForm from "../pieces/WatchListForm";

export default function WatchList() {
  const [cryptoObject, setCryptoObject] = useState(useLoaderData());

  return (
    <div className="pt-4 container">
      <WatchListForm cryptoArray={cryptoObject.data} />
    </div>
  );
}
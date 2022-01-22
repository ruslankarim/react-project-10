import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="border-2 rounded p-5">
      <div className="mb-5">
        <h2 className="break-all text-2xl mb-2 text-center">{info.name}</h2>
        <p className="break-all">{info.desc}</p>
      </div>
      <div className="flex flex-row pl-7 pr-7 mb-5">
        <button
            className="basis-1/4 border-2 rounded-full shadow-md"
            disabled={total === 0}
            onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="basis-1/2 text-center">{total ? total : ""}</h3>
        <button className="basis-1/4 border-2 rounded-full shadow-md" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}

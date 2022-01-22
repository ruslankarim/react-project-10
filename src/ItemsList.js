import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="flex flex-wrap flex-row gap-4">
      {props.items.map((item) => (
        <li
            className="w-1/2 p-5"
            key={item.id}>
          <Item info={item} />
          <div className="flex justify-center mt-3">
            <button
                className="bg-transparent hover:bg-red-500 text-grey-700 font-semibold hover:text-white py-2 px-4 border border-grey-500 hover:border-transparent rounded"
                onClick={() => props.onDeleteClick(item.id)}
            >
              Удалить
            </button>
          </div>

        </li>
      ))}
    </ul>
  );
}

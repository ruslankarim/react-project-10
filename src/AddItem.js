import React from "react";

export default function AddItem(props) {
  return (
    <form
        className=""
        onSubmit={props.onFormSubmit}>
      <div className="mb-5">
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-5">
        <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex-col">
        <div className="validation text-red-500 text-xs italic mb-5">{props.valid}</div>
          <div>
              <input type="submit" className="w-full border-2 rounded py-2 hover:bg-blue-500 hover:text-white" value="Добавить" />
          </div>
      </div>
    </form>
  );
}

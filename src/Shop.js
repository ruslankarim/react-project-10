import React, { useState } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: items.length + 1,
        name: name,
        desc: desc
      }
    ]);
    setName("");
    setDesc("");
    setValid("");

    fetch("https://covid-shop-mcs.herokuapp.com",
        {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({name, desc}),
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
      <div className="flex h-full">
        <div className="w-70 flex-col justify-between py-10 px-6 border-r-2 shadow fixed left-0 top-0 bottom-0">
          <AddItem
              name={name}
              desc={desc}
              valid={valid}
              onNameChange={handleNameChange}
              onDescChange={handleDescChange}
              onFormSubmit={handleFormSubmit}
          />
        </div>
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 pl-60">
          <ItemsList items={items} onDeleteClick={handleDeleteClick} />
        </div>
      </div>
  );
}

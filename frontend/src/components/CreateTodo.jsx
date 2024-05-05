import React, { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  console.log("hi")
  const addtodo = () => {
    fetch("http://localhost:5000/todo", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers:{
        "Content-type":'application/json'
      }
    })
      .then((res) => {
        const json = res.json();
        alert("Todo added");
      })
      .catch((error) => {
        throw new Error({ msg: "something Went wrong" });
      });
  };

  return (
    <div>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="title"
      />
      <br />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        placeholder="description"
      />
      <br />

      <button onClick={addtodo}>Add a todo</button>
    </div>
  );
};

export default CreateTodo;

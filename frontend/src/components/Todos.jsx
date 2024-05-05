import React from "react";

const Todos = ({ todos }) => {
  const updateTodo = (id) => {
    fetch("http://localhost:5000/completed", {
      method: "PUT",
      body: JSON.stringify({ id }), // Serialize id as JSON
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        const json = res.json();
        alert("Todo updated");
      })
      .catch((error) => {
        throw new Error({ msg: "something Went wrong" });
      });
  };

  return (
    <div>
      {todos.map((item) => (
        <div>
          <p>{item.title}</p>
          <p>{item.description}</p>

          <button onClick={() => updateTodo(item._id)}>
            {item.completed ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;

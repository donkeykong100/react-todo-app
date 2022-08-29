import React from "react";

export default function List({ todoData, setTodoData }) {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  const getStyle = (isDone) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: isDone ? "line-through" : "none",
    };
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setTodoData(newTodoData);
  };

  const handleChangeChecked = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.isDone = !data.isDone;
      }
      return data;
    });
    setTodoData(newTodoData);
    console.log(todoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div style={getStyle(data.isDone)} key={data.id}>
          <p>
            <input
              type="checkbox"
              defaultChecked={data.isDone}
              onChange={() => handleChangeChecked(data.id)}
            />{" "}
            {data.title}
            <button style={btnStyle} onClick={() => handleClick(data.id)}>
              x
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

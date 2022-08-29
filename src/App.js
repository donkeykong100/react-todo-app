import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

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
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>
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

        <form
          style={{ display: "flex" }}
          onSubmit={(event) => {
            event.preventDefault();
            let newTodo = {
              id: Date.now(),
              title: value,
              isDone: false,
            };
            setTodoData((prev) => [...prev, newTodo]);
            setValue("");
          }}
        >
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="할 일을 입력하세요."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}

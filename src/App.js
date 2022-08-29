import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />
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

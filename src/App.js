import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    todoData: [],
    value: "",
  };

  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = (isDone) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: isDone ? "line-through" : "none",
    };
  };

  handleClick = (id) => {
    let newTodoData = this.state.todoData.filter((data) => data.id !== id);
    this.setState({ todoData: newTodoData });
  };

  handleChangeChecked = (id) => {
    let newTodoData = this.state.todoData.map((data) => {
      if (data.id === id) {
        data.isDone = !data.isDone;
      }
      return data;
    });
    this.setState({ todoData: newTodoData });
    console.log(this.state.todoData);
  };

  render() {
    return (
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
          {this.state.todoData.map((data) => (
            <div style={this.getStyle(data.isDone)} key={data.id}>
              <p>
                <input
                  type="checkbox"
                  defaultChecked={data.isDone}
                  onChange={() => this.handleChangeChecked(data.id)}
                />{" "}
                {data.title}
                <button
                  style={this.btnStyle}
                  onClick={() => this.handleClick(data.id)}
                >
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
                title: this.state.value,
                isDone: false,
              };
              this.setState({
                todoData: [...this.state.todoData, newTodo],
                value: "",
              });
            }}
          >
            <input
              type="text"
              name="value"
              style={{ flex: "10", padding: "5px" }}
              placeholder="할 일을 입력하세요."
              value={this.state.value}
              onChange={(event) => this.setState({ value: event.target.value })}
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
}

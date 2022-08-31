import React from "react";

export default function List({
  id,
  title,
  isDone,
  todoData,
  setTodoData,
  provided,
  snapshot,
}) {
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
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      className={`${
        snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
    >
      <div>
        <input
          type="checkbox"
          defaultChecked={isDone}
          onChange={() => handleChangeChecked(id)}
        />{" "}
        <span className={isDone ? "line-through" : undefined}>{title}</span>
      </div>
      <div>
        <button className="px-4 py-2" onClick={() => handleClick(id)}>
          x
        </button>
      </div>
    </div>
  );
}

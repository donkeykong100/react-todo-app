import React, { useState } from "react";

const List = React.memo(
  ({
    id,
    title,
    isDone,
    todoData,
    setTodoData,
    provided,
    snapshot,
    handleClick,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleChangeChecked = (id) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.isDone = !data.isDone;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    };
    const handleEditChange = (event) => {
      setEditedTitle(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div
          className={`bg-gray-100 flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}
        >
          <div>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full px-3 py-2 mr-4 text-gray-500 rounded"
                onChange={handleEditChange}
                value={editedTitle}
              />
            </form>
          </div>
          <div>
            <button onClick={handleSubmit} className="px-4 py-2" type="submit">
              save
            </button>
            <button className="px-4 py-2" onClick={() => setIsEditing(false)}>
              x
            </button>
          </div>
        </div>
      );
    } else {
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
            <button className="px-4 py-2" onClick={() => setIsEditing(true)}>
              edit
            </button>
            <button className="px-4 py-2" onClick={() => handleClick(id)}>
              x
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;

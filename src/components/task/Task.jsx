import React from "react";
import { Draggable } from "react-beautiful-dnd";

// taskはTasks.jsxから受け渡されたprops
const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id) => {
    // ゴミ箱をクリックしたら削除
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  return (
    <Draggable draggableId={task.draggableId} index={index}>
      {(provided) => (
        <div
          className="taskBox"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className="taskText">{task.text}</p>
          <button
            className="taskTrashButton"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default Task;

import React from "react";
import { v4 as uuid } from "uuid";

const TaskAddInput = ({ inputText, setInputText, taskList, setTaskList }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const taskId = uuid();
    // form内が空だったらreturnを返す
    if (inputText === "") {
      return;
    }

    // カードを追加する
    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: taskId,
        draggableId: `task-${taskId}`,
      },
    ]);
    setInputText("");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="add a task"
          className="taskAddInput"
          onChange={(e) => handleChange(e)}
          value={inputText}
        />
      </form>
    </div>
  );
};

export default TaskAddInput;

// タスクカード編

import React from "react";

const TaskCardDeleteButton = ({ taskCardList, setTaskCardList, taskCard }) => {
  const taskCardDeleteButton = (id) => {
    // ×ボタンを押したらタスクカードを削除
    setTaskCardList(taskCardList.filter((e) => e.id !== id));
  };

  return (
    <div>
      <button
        className="taskCardDeleteButton"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <i className="fa-regular fa-circle-xmark"></i>
      </button>
    </div>
  );
};

export default TaskCardDeleteButton;

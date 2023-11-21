import React from "react";
import { v4 as uuid } from "uuid";

const AddTaskCardButton = ({ taskCardList, setTaskCardList }) => {
  
  // タスクカードを追加する
  const addTaskCard = () => {
    const taskCardId = uuid();
    setTaskCardList([
      ...taskCardList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="addTaskCardArea">
      <button className="addTaskCardButton" onClick={addTaskCard}>
        +
      </button>
    </div>
  );
};

export default AddTaskCardButton;

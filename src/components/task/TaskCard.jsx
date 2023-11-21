import React, { useState } from "react";
import TaskCardTitle from "./TaskCardTitle";
import TaskCardDeleteButton from "./TaskCardDeleteButton";
import TaskAddInput from "./TaskAddInput";
import Tasks from "./Tasks";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ taskCardList, setTaskCardList, taskCard, index }) => {
  const [inputText, setInputText] = useState("");
  // インプット情報を格納するための状態変数
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div
            className="taskCardTitleAndTaskCardDeleteButtonArea"
            {...provided.dragHandleProps}
          >
            <TaskCardTitle />
            <TaskCardDeleteButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            taskList={taskList}
            setTaskList={setTaskList}
          />
          <Tasks taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;

import React, { useState } from "react";
import TaskCard from "./TaskCard";
import AddTaskCardButton from "./AddTaskCardButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const TaskCards = () => {
  const [taskCardList, setTaskCardList] = useState([
    {
      id: "0",
      draggableId: "item0",
    },
  ]);

  // リファクタリング
  const reorder = (taskCardList, startIndex, endIndex) => {
    const remove = taskCardList.splice(startIndex, 1); //一旦削除
    // console.log(remove);
    taskCardList.splice(endIndex, 0, remove[0]); //再び出現
  };

  // ドラッグが終わったら
  const handleDragEnd = (result) => {
    // console.log(result);
    //sourceはスタート位置。destinationはドラッグした位置
    reorder(taskCardList, result.source.index, result.destination.index);
    setTaskCardList(taskCardList);
  };

  //カードの追加
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided) => (
          <div
            className="taskCardsArea"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {taskCardList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                taskCardList={taskCardList}
                setTaskCardList={setTaskCardList}
                taskCard={taskCard}
                index={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton
              taskCardList={taskCardList}
              setTaskCardList={setTaskCardList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskCards;

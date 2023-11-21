import React from "react";
import Task from "./Task";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// リファクタリング
const reorder = (taskList, startIndex, endIndex) => {
  const remove = taskList.splice(startIndex, 1); //一旦削除
  // console.log(remove);
  taskList.splice(endIndex, 0, remove[0]); //再び出現
};

const Tasks = ({ taskList, setTaskList }) => {
  // タスクを並び変える
  const handleDragEnd = (result) => {
    //sourceはスタート位置。destinationはドラッグした位置
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  // TaskAddInput.jsxで作成した配列を画面に表示
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Tasks;

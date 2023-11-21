import React, { useState } from "react";

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");

  // 曜日欄の変更
  const handleClick = () => {
    setIsClick(true);
    // console.log(isClick);
  };

  // 入力した値の取得
  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
    // console.log(inputCardTitle);
  };

  // form送信をしたら
  const handleSubmit = (e) => {
    e.preventDefault();
    // 入力欄を閉じる
    setIsClick(false);
  };

  const handleBlur = () => {
    setIsClick(false);
  };

  return (
    <div onClick={handleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text"
            onChange={(e) => handleChange(e)}
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength={10}
          />
        </form>
      ) : (
        <h3>{inputCardTitle}</h3>
      )}
    </div>
  );
};

export default TaskCardTitle;

// TaskAddInputを作成しよう

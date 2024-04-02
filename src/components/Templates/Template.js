import React from "react";
import Profile from "./Profile";
import EduExp from "./Edu-exp";
import PractExp from "./Pract-exp";
import Edit from "./Edit";

function Template({ onAddInput, info, onAddEditable }) {
  return (
    <div className="template-container">
      <Profile onAddInput={onAddInput} info={info} />
      <div className="main-content">
        <EduExp info={info} onAddInput={onAddInput} />
        <PractExp info={info} onAddInput={onAddInput} />
      </div>
      <Edit onAddEditable={onAddEditable} />
    </div>
  );
}

export default Template;

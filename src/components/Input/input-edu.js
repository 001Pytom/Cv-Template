function InputEdu({ info, onAddInput }) {
  return (
    <div className="general-info personal-input">
      <div>
        EDUCATION <button>📚</button>
      </div>
      <div>
        <span>School Name:</span>
        <input
          name="schoolName"
          type="text"
          placeholder="School Name"
          onChange={onAddInput}
        />
      </div>
      <div>
        <span>Degree:</span>
        <input
          name="degree"
          type="text"
          placeholder="Title"
          onChange={onAddInput}
        />
      </div>
      <div>
        <span>Date:</span>
        <input
          name="schoolDate"
          type="month"
          placeholder="Month"
          onChange={onAddInput}
        />
      </div>
      <textarea
        name="eduTalks"
        rows={"4"}
        cols={"50"}
        placeholder="Education Archievement"
        onChange={onAddInput}
      />
      <button>add</button>
    </div>
  );
}

export default InputEdu;

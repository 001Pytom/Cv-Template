function InputExp({ info, onAddInput }) {
  return (
    <div className="general-info personal-input">
      <div>
        EXPERIENCE <button>✅</button>
      </div>
      <div>
        <span>Company Name:</span>
        <input
          name="company"
          type="text"
          placeholder="Company Name"
          onChange={onAddInput}
        />
      </div>
      <div>
        <span>Position Title:</span>
        <input
          name="position"
          type="text"
          placeholder="Title"
          onChange={onAddInput}
        />
      </div>
      <div className="date">
        <span>From:</span>
        <input
          name="from"
          type="date"
          placeholder="From"
          onChange={onAddInput}
        />
        <br />
        <span>To:</span>
        <input name="to" type="date" placeholder="To" onChange={onAddInput} />
      </div>
      <textarea
        name="workTalks"
        rows={"4"}
        cols={"50"}
        placeholder="Work Experience"
        onChange={onAddInput}
      />
    </div>
  );
}

export default InputExp;

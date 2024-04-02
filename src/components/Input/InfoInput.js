function InfoInput({ info, onAddInput }) {
  return (
    <div className="general-info personal-input">
      <div>
        Personal information <button>💻</button>
      </div>
      <div>
        <span>Name:</span>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={onAddInput}
        />
      </div>
      <div>
        <span>Email:</span>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={onAddInput}
        />
      </div>
      <div>
        <span>Phone:</span>
        <input
          name="phone"
          type="number"
          placeholder="Phone Number"
          onChange={onAddInput}
        />
      </div>
    </div>
  );
}

export default InfoInput;

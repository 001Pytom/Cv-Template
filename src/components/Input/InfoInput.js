import React from "react";

function InfoInput({ onAddInput }) {
  const handleChange = (e) => {
    onAddInput(e.target.name, e.target.value);
  };

  return (
    <div className="general-info personal-input">
      <div>
        Personal Information <button>💻</button>
      </div>
      {[
        { name: "Name", type: "text", placeholder: "Name" },
        { name: "Email", type: "email", placeholder: "Email" },
        { name: "Phone", type: "number", placeholder: "Phone Number" },
      ].map((field, index) => (
        <div key={index}>
          <span>{field.name}:</span>
          <input
            name={field.name.toLowerCase()}
            type={field.type}
            placeholder={field.placeholder}
            onChange={handleChange}
          />
        </div>
      ))}
    </div>
  );
}

export default InfoInput;

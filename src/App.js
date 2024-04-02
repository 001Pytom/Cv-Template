import React, { useState } from "react";
import Template from "./components/Templates/Template";
import Input from "./components/Input/Input";

function App() {
  const [formFilled, setFormFilled] = useState(false);
  const [info, setInfo] = useState({
    name: "FIRST NAME  LAST NAME",
    email: "Email",
    phone: "Phone",
    eduTalks:
      "Talk about your experience, brag about your GPA , awards and the likes....",
    workTalks:
      "Describe your responsibilities, archievements in terms of impact andresults.....",
    schoolName: "SCHOOL",
    degree: "DEGREE TITLE",
    schoolDate: `MONTH YEAR`,
    company: "COMPANY",
    position: "JOB TITLE",
    from: `FROM`,
    to: `TO`,
  });

  function handleInput(e) {
    const { name, value } = e.target;
    setInfo((prevItem) => {
      return { ...prevItem, [name]: value };
    });
  }
  const validateFields = () => {
    for (const key of Object.keys(info)) {
      if (
        info[key] === "" ||
        info[key] ===
          "Talk about your experience, brag about your GPA , awards and the likes...." ||
        info[key] ===
          "Describe your responsibilities, archievements in terms of impact andresults....." ||
        info[key] === `MONTH YEAR` ||
        info[key] === `FROM` ||
        info[key] === `TO` ||
        info[key] === "FIRST NAME  LAST NAME" ||
        info[key] === "Email" ||
        info[key] === "Phone" ||
        info[key] === "SCHOOL" ||
        info[key] === "DEGREE TITLE" ||
        info[key] === "COMPANY" ||
        info[key] === "JOB TITLE"
      ) {
        return false;
      }
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateFields()) {
      setFormFilled(true);
    } else {
      alert("Please fill all fields");
    }
  };

  function handleEditable(e) {
    e.preventDefault();
    setFormFilled(false);
  }

  return (
    <div className="container">
      <Input
        info={info}
        onAddInput={handleInput}
        onAddSubmit={handleSubmit}
        formFilled={formFilled}
      />
      <Template
        info={info}
        onAddInput={handleInput}
        onAddEditable={handleEditable}
      />
    </div>
  );
}

export default App;

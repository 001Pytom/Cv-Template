import Form from "./Form";
function Input({ info, onAddInput, onAddSubmit, formFilled }) {
  return (
    <div className="input-container">
      <Form
        info={info}
        onAddInput={onAddInput}
        formFilled={formFilled}
        onAddSubmit={onAddSubmit}
      />
    </div>
  );
}

export default Input;

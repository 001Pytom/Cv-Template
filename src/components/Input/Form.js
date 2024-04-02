import InfoInput from "./InfoInput";
import InputEdu from "./input-edu";
import Submit from "./Submit";
import InputExp from "./input-exp";

function Form({ info, onAddInput, onAddSubmit, formFilled }) {
  return (
    <form>
      {!formFilled ? (
        <>
          <h1>Fill the form below👇</h1>
          <InfoInput info={info} onAddInput={onAddInput} />
          <InputEdu info={info} onAddInput={onAddInput} />
          <InputExp info={info} onAddInput={onAddInput} />
          <Submit onAddSubmit={onAddSubmit} />
        </>
      ) : (
        <p>Thank you, you are done!💯</p>
      )}
    </form>
  );
}

export default Form;

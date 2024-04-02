function PractExp({ info, onAddInput }) {
  return (
    <div className="pract-exp">
      <h2>EXPERIENCE</h2>
      <div>
        <h3>
          <span>DATES </span> {`${info.from} - ${info.to}`}
        </h3>
        <h3>
          {info.position}, {info.company}
        </h3>
        <p>{info.workTalks}</p>
      </div>
    </div>
  );
}

export default PractExp;

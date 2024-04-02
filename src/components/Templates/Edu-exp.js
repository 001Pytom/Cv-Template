function EduExp({ info }) {
  return (
    <div className="edu-exp">
      <h2>EDUCATION</h2>
      <div>
        <h3> {info.schoolDate}</h3>
        <h3>
          <span>{info.degree}</span>, {info.schoolName}
        </h3>
        <p>{info.eduTalks}</p>
      </div>
    </div>
  );
}

export default EduExp;

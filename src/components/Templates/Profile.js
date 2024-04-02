function Profile({ info }) {
  return (
    <div className="profile">
      <header>
        <h1>{info.name}</h1>
        <p>{info.phone}</p>
        <p className="email">{info.email}</p>
      </header>
    </div>
  );
}

export default Profile;

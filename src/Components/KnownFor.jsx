function KnownFor({known_for}){
    return (
      <div>
        <p>Titles they are known for are:</p>
        <ul>
          { known_for.map((item, index) => (
            <li key={index}>
              <p>
                <strong>{item.title}</strong> (Released {item.release_date}) <br />
                Overview: {item.overview}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  export default KnownFor;
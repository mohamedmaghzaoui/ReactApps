export const AddEvent = () => {
  return (
    <div className="overlay">
      <form className="input-form ">
        <h2>ajouter un échéance</h2>
        <input type="text" className="form-control" placeholder="titre" />
        <br />
        <input type="text" className="form-control" placeholder="objet" />
        <br />
        <input type="text" className="form-control" placeholder="fréquence" />
        <br />
        <input type="text" className="form-control" placeholder="client" />
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Personne Concerné"
        />
        <br />
        <label>
          <input
            className="form-control"
            name="statue"
            type="radio"
            value="not finished"
          />
          Terminé
        </label>
        <label style={{ position: "relative", left: "30px" }}>
          <input
            className="form-control"
            name="statue"
            type="radio"
            value="finished"
          />
          En cours
        </label>
        <br />
        <label>
          <input className="form-control" type="date" />
          <input className="form-control" type="date" />
          <button className="btn btn-primary">Ajouter</button>
          <button className="btn btn-danger">close</button>
        </label>
      </form>
    </div>
  );
};

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export const AddEvent = (props) => {
  return (
    <div className="overlay">
      <form className="input-form ">
        <h4>Ajouter un échéance</h4>
        <FontAwesomeIcon
          onClick={() => props.hide(false)}
          style={{
            fontSize: "30px",
            color: "grey",
            cursor: "pointer",
            marginLeft: "auto",
            display: "flex",
            marginTop: "-30px",
            marginBottom: "20px",
          }}
          icon={faTimes}
          className="custom-icon"
        />

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
          <span>
            commencé
            <input className="form-control" type="date" />
          </span>
          <span>
            Terminé
            <input className="form-control" type="date" />
          </span>

          <button className="btn btn-primary">Ajouter</button>
          <button onClick={() => props.hide(false)} className="btn btn-danger">
            Fermer
          </button>
        </label>
      </form>
    </div>
  );
};

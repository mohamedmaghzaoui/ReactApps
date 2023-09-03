import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export const AddEvent = (props) => {
  const validation = yup.object().shape({
    title: yup.string().required("Le titre est requis"),
    object: yup.string().required("L'objet est requis"),
    client: yup.string().required("Le client est requis"),
    concernedPerson: yup.string().required("La personne concernée est requise"),
    frequence: yup.string().required("La fréquence est requise"),
    start: yup.date().required("La date de début est requise").nullable(),
    end: yup.date().required("La date de fin est requise").nullable(),
  });
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(validation),
  });
  const ckeckSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="overlay">
      <form onSubmit={handleSubmit(ckeckSubmit)} className="input-form ">
        <h4>Ajouter un échéance</h4>
        {/* icon to exit*/}
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
        {/* title input*/}
        <input
          type="text"
          className="form-control"
          placeholder="titre"
          {...register("title")}
        />
        <br />
        {/* object input*/}
        <input
          type="text"
          className="form-control"
          placeholder="objet"
          {...register("object")}
        />

        <br />
        {/* client input*/}
        <input
          type="text"
          className="form-control"
          placeholder="client"
          {...register("client")}
        />
        <br />
        {/* concerned person input*/}
        <input
          type="text"
          className="form-control"
          placeholder="Personne Concerné"
          {...register("concernedPerson")}
        />
        <br />
        {/* frequence inputs in radio */}
        <div className="frequence" style={{ display: "flex" }}>
          <label>Frequence</label>
          <br />
          <label>
            <input
              className="form-control"
              style={{ marginLeft: "5px" }}
              name="frequence"
              type="radio"
              value="yearly"
              {...register("frequence")}
            />
            Annuel
          </label>
          <label style={{ position: "relative", left: "5%" }}>
            <input
              className="form-control"
              name="frequence"
              type="radio"
              value="monthly"
              {...register("frequence")}
            />
            Mensuelle
          </label>
          <label style={{ position: "relative", left: "30px" }}>
            <input
              className="form-control"
              name="statue"
              type="radio"
              value="weekly"
              {...register("frequence")}
            />
            Hebdo
          </label>
        </div>
        {/* start and end date inputs*/}
        <label>
          <span>
            Commence
            <input
              className="form-control"
              type="date"
              {...register("start")}
            />
          </span>
          <span>
            Termine
            <input className="form-control" type="date" {...register("end")} />
          </span>
          <input type="submit" value={"Ajouter"} className="btn btn-primary" />
          {/* button to exit*/}
          <button onClick={() => props.hide(false)} className="btn btn-danger">
            Fermer
          </button>
        </label>
      </form>
    </div>
  );
};

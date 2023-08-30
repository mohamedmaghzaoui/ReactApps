import { Link } from "react-router-dom";
import "../Css/navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbarClass">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKCo_Pn5V7eEtZpO7z6ib3KYTEnQieI-dPJg&usqp=CAU"
          alt=""
        />

        <h2>DeadlineHub</h2>

        <ul className="navbar-text">
          <td>
            <Link id="home" style={{ textDecoration: "none" }} to={"/"}>
              Accueil
            </Link>
          </td>

          <td>
            <Link
              id="calendar"
              style={{ textDecoration: "none" }}
              to={"/calendar"}
            >
              Calendrier
            </Link>
          </td>
        </ul>
        <span className="connect">
          <Link id="login">
            <pre>Se connecter</pre>
          </Link>
          <p>Ou</p>
          <button id="sign" className="btn btn-primary">
            S'inscrire
          </button>
        </span>
      </nav>
      <hr className="custom-hr" />
    </div>
  );
};

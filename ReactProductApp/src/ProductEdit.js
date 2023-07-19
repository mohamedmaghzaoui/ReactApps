// ProductEdit.js
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductEdit = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [validation, setValidation] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setPrice(data.price);
        setQuantity(data.quantity);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [productId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { name, price, quantity };

    fetch(`http://localhost:8000/products/${productId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => {
        alert("Produit enregistré avec succès.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handleSubmit}>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h2>Modification du produit</h2>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Nom</label>
                      <input
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="form-control"
                      />
                      {name.length === 0 && validation && (
                        <span className="text-danger">Entrez le nom</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Prix</label>
                      <input
                        required
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Quantité</label>
                      <input
                        required
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;

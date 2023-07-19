// ProductListing.js
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ProductListing = () => {
  const [productData, setProductData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const navigateToDetail = (id) => {
    navigate(`/product/detail/${id}`);
  };

  const navigateToEdit = (id) => {
    navigate(`/product/edit/${id}`);
  };

  const removeProduct = (id) => {
    if (window.confirm("Voulez-vous supprimer ce produit?")) {
      fetch(`http://localhost:8000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Produit supprimé avec succès.");
          fetchProductData();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const fetchProductData = () => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const filteredProducts = productData
    ? productData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="container">
      <div className="card">
        <div className="card-title">
          <h1>Liste des Produits</h1>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/product/create" className="btn btn-success">
              Nouveau produit (+)
            </Link>
          </div>
          <div className="row mt-3">
            <div className="col-lg-6">
              <input
                type="text"
                className="form-control"
                placeholder="Rechercher par nom de produit"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <table className="table table-striped mt-3">
            <thead className="bg-info">
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm mr-2"
                      onClick={() => navigateToDetail(product.id)}
                    >
                      Détails
                    </button>
                    <button
                      className="btn btn-success btn-sm mr-2"
                      onClick={() => navigateToEdit(product.id)}
                    >
                      Modifier
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeProduct(product.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

// ProductDetail.js
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [productId]);

  return (
    <div>
      <div className="container">
        <div className="card row" style={{ textAlign: "left" }}>
          <div className="card-title">
            <h2>Product Detail</h2>
          </div>
          <div className="card-body">
            {productData && (
              <div>
                <h2>
                  Nom de produit : <b>{productData.name}</b>
                </h2>
                <h3>Détails de produit</h3>
                <h5>Prix: {productData.price} euro</h5>
                <h5>Quantité: {productData.quantity}</h5>
                <Link className="btn btn-primary" to="/">
                  Back to Listing
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

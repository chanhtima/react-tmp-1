import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, image, title, Btn }) {
  return (
    <div className="co-basic-01">
      <Link to={`/product/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div className="co-basic-01-body">
        <h2>
          <Link to={`/product/${id}`}>{title}</Link>
        </h2>
        <div className="card-actions justify-end">
          <button>{Btn}</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

import React from "react";

function ProductCard(cards) {
  return (
    <div className="co-basic-01">
      <a href={cards.url}>
        <img src={cards.image} alt={cards.title} />
      </a>
      <div className="co-basic-01-body">
        <h2>
          <a href={cards.url}>{cards.title}</a>
        </h2>
        <div className="card-actions justify-end">
          <button>{cards.Btn}</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

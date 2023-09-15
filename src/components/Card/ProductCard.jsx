import React from 'react'


function ProductCard(props) {
  return (
<div className="card bg-white shadow-xl max-h-full h-full">
  <figure className='p-8'><img src={props.image} alt={props.title} /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title} </h2>
    <p>{props.detail} </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{props.Btn}</button>
    </div>
  </div>
</div>
  )
}

export default ProductCard

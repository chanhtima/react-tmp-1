import React from 'react'

function CardDateBasuc01(cards) {
  return (
    <div className="co-date-01">
    <a href={cards.url}>
      <img src={cards.image} alt={cards.title} />
    </a>
    <a href={cards.url} className='co-date-01-date' >
        <span className='after_box'></span>
        {cards.date}
    </a>
    <div className="co-date-01-body">
      <h2>
        <a href={cards.url}>{cards.title}</a>
      </h2>
      <p>
        <a href={cards.url}>{cards.detail}</a>
      </p>
      <div className="co-date-01-btn">
        <button>{cards.Btn}</button>
      </div>
    </div>
  </div>
  )
}

export default CardDateBasuc01